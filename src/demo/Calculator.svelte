<!-- src/demo/Calculator.svelte -->
<script lang="ts">
  /**
   * @component Calculator
   * @description Feature-rich calculator demo with advanced functionality.
   *
   * @prop sz {SizeKey} - UI size token (default: "sm").
   * @prop class {string} - Extra wrapper classes (default: "").
   *
   * @note Supports undo/redo, file open/save, clipboard actions, and hotkeys.
   * @note Uses shunting-yard algorithm for expression parsing and evaluation.
   * @note Persists history, memory, and mode in localStorage.
   * @note Scientific mode includes functions, constants, and power operator.
   * @note Memory functions: MC, MR, M+, M-.
   * @note Error handling for invalid expressions and operations.
   * @note Responsive layout with recent history preview.
   * @note Keyboard support for all actions and input.
   */
  import { Button, Card } from "$lib";
  import { cx } from "$utils";
  import type { SizeKey } from "$lib/types";

  type CalculatorLocale = {
    readonly calculator?: Partial<{
      title: string;
      memory: string;
      modeScientific: string;
      modeBasic: string;
      displayLabel: string;
      scientificControls: string;
      controls: string;
      history: string;
      clear: string;
      emptyHistory: string;
      deleteHistory: string;
      scientificShort: string;
      historyShort: string;
    }>;
  };

  interface Props {
    L?: CalculatorLocale;
    sz?: SizeKey;
    class?: string;
  }

  type ButtonVariant =
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "ghost"
    | "info";

  type Associativity = "L" | "R";
  type FunctionName = "sin" | "cos" | "tan" | "sqrt" | "ln" | "log" | "fact";

  type HistoryEntry = {
    expression: string;
    result: string;
  };

  type NumberToken = {
    type: "number";
    value: number;
    start: number;
    end: number;
  };

  type OperatorToken = {
    type: "operator";
    value: string;
    start?: number;
    end?: number;
  };

  type ParenToken = {
    type: "paren";
    value: "(" | ")";
    start: number;
    end: number;
  };

  type ParsedToken = NumberToken | OperatorToken | ParenToken;

  type StackItem = {
    value: number;
    percentTag: boolean;
  };

  type CalcButtonAction =
    | "input"
    | "equals"
    | "clear"
    | "backspace"
    | "sign"
    | "memoryClear"
    | "memoryRecall"
    | "memoryAdd"
    | "memorySubtract"
    | "function"
    | "power2"
    | "toggleMode"
    | "clearHistory";

  type CalcButtonDef = {
    label: string;
    action: CalcButtonAction;
    token?: string;
    fn?: FunctionName;
    variant?: ButtonVariant;
    span?: string;
  };

  type StoredState = {
    history?: unknown;
    memoryValue?: unknown;
    scientificMode?: unknown;
  };

  let { L = {}, sz = "md", class: externalClass = "" }: Props = $props();

  const T = $derived(L.calculator ?? {});

  const MAX_HISTORY_ITEMS = 200;
  const STORAGE_KEY = "svelte-comp:calculator-demo";

  const OPERATORS: Record<
    string,
    { precedence: number; associativity: Associativity }
  > = {
    "+": { precedence: 1, associativity: "L" },
    "-": { precedence: 1, associativity: "L" },
    "*": { precedence: 2, associativity: "L" },
    "/": { precedence: 2, associativity: "L" },
    "**": { precedence: 4, associativity: "R" },
    "u-": { precedence: 4, associativity: "R" },
    "%": { precedence: 5, associativity: "L" },
  };

  let expression = $state("0");
  let hasError = $state(false);
  let history = $state<HistoryEntry[]>([]);
  let memoryValue = $state(0);
  let scientificMode = $state(false);
  let didLoad = $state(false);

  const displayText = $derived(
    hasError ? "Error" : formatCalcTextForDisplay(expression),
  );

  const previewText = $derived(formatCalcTextForDisplay(expression));
  const recentHistory = $derived.by(() => history.slice(-3).reverse());

  const basicButtons: CalcButtonDef[] = [
    { label: "MC", action: "memoryClear", variant: "ghost" },
    { label: "MR", action: "memoryRecall", variant: "ghost" },
    { label: "M+", action: "memoryAdd", variant: "ghost" },
    { label: "M-", action: "memorySubtract", variant: "ghost" },

    { label: "C", action: "clear", variant: "danger" },
    { label: "⌫", action: "backspace", variant: "warning" },
    { label: "±", action: "sign", variant: "warning" },
    { label: "÷", action: "input", token: "/", variant: "primary" },

    { label: "7", action: "input", token: "7" },
    { label: "8", action: "input", token: "8" },
    { label: "9", action: "input", token: "9" },
    { label: "×", action: "input", token: "*", variant: "primary" },

    { label: "4", action: "input", token: "4" },
    { label: "5", action: "input", token: "5" },
    { label: "6", action: "input", token: "6" },
    { label: "-", action: "input", token: "-", variant: "primary" },

    { label: "1", action: "input", token: "1" },
    { label: "2", action: "input", token: "2" },
    { label: "3", action: "input", token: "3" },
    { label: "+", action: "input", token: "+", variant: "primary" },

    { label: "0", action: "input", token: "0" },
    { label: ".", action: "input", token: "." },
    { label: "%", action: "input", token: "%", variant: "warning" },
    { label: "=", action: "equals", variant: "primary" },
  ];

  const scientificButtons: CalcButtonDef[] = [
    { label: "sin", action: "function", fn: "sin" },
    { label: "cos", action: "function", fn: "cos" },
    { label: "tan", action: "function", fn: "tan" },
    { label: "√", action: "function", fn: "sqrt" },

    { label: "ln", action: "function", fn: "ln" },
    { label: "log", action: "function", fn: "log" },
    { label: "n!", action: "function", fn: "fact" },
    { label: "x²", action: "power2" },

    { label: "xʸ", action: "input", token: "**" },
    { label: "π", action: "input", token: "Math.PI" },
    { label: "e", action: "input", token: "Math.E" },
    { label: "(", action: "input", token: "(" },

    { label: ")", action: "input", token: ")" },
    { label: "Sci", action: "toggleMode", variant: "info" },
    { label: "Hist", action: "clearHistory", variant: "danger" },
    { label: ")", action: "input", token: ")" },
  ];

  const calcFunctionHandlers: Record<FunctionName, (value: number) => number> = {
    sin: (value) => Math.sin((value * Math.PI) / 180),
    cos: (value) => Math.cos((value * Math.PI) / 180),
    tan: (value) => Math.tan((value * Math.PI) / 180),
    sqrt: (value) => Math.sqrt(value),
    ln: (value) => Math.log(value),
    log: (value) => Math.log10(value),
    fact: (value) => factorial(value),
  };

  const keyActions: Record<string, () => void> = {
    ".": () => calcInput("."),
    "+": () => calcInput("+"),
    "-": () => calcInput("-"),
    "*": () => calcInput("*"),
    "/": () => calcInput("/"),
    "%": () => calcInput("%"),
    "(": () => calcInput("("),
    ")": () => calcInput(")"),
    "^": () => calcInput("**"),
    Enter: () => calcEquals(),
    "=": () => calcEquals(),
    Backspace: () => calcBackspace(),
    Delete: () => calcClear(),
    Escape: () => calcClear(),
  };

  function getExpression() {
    return expression || "0";
  }

  function setExpression(next: string) {
    expression = next || "0";
  }

  function formatCalcTextForDisplay(text: string) {
    return String(text).replaceAll("**", "^").replaceAll("*", "×");
  }

  function normalizeHistoryEntry(entry: unknown): HistoryEntry {
    if (entry && typeof entry === "object") {
      const source = entry as Partial<HistoryEntry>;

      return {
        expression: String(source.expression ?? ""),
        result: String(source.result ?? ""),
      };
    }

    if (typeof entry === "string") {
      const separator = " = ";
      const at = entry.lastIndexOf(separator);

      if (at >= 0) {
        return {
          expression: entry.slice(0, at),
          result: entry.slice(at + separator.length),
        };
      }

      return { expression: entry, result: "" };
    }

    return { expression: "", result: "" };
  }

  function saveCalculatorState() {
    if (typeof localStorage === "undefined") return;

    const safeHistory = history
      .map((entry) => normalizeHistoryEntry(entry))
      .filter((entry) => entry.expression || entry.result)
      .slice(-MAX_HISTORY_ITEMS);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        history: safeHistory,
        memoryValue: Number.isFinite(memoryValue) ? memoryValue : 0,
        scientificMode,
      }),
    );
  }

  function loadCalculatorState() {
    if (typeof localStorage === "undefined") return;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw) as StoredState;

      if (Array.isArray(parsed.history)) {
        history = parsed.history
          .map((entry) => normalizeHistoryEntry(entry))
          .filter((entry) => entry.expression || entry.result)
          .slice(-MAX_HISTORY_ITEMS);
      }

      if (
        typeof parsed.memoryValue === "number" &&
        Number.isFinite(parsed.memoryValue)
      ) {
        memoryValue = parsed.memoryValue;
      }

      if (typeof parsed.scientificMode === "boolean") {
        scientificMode = parsed.scientificMode;
      }
    } catch {
      // Ignore broken persisted demo state.
    }
  }

  function pushHistoryEntry(sourceExpression: string, result: string) {
    history = [
      ...history,
      {
        expression: String(sourceExpression),
        result: String(result),
      },
    ].slice(-MAX_HISTORY_ITEMS);

    saveCalculatorState();
  }

  function isErrorState() {
    return hasError;
  }

  function setCalcError() {
    hasError = true;
  }

  function clearCalcError() {
    hasError = false;
  }

  function resetErrorToZero() {
    if (!isErrorState()) return;

    clearCalcError();
    setExpression("0");
  }

  function isOperatorToken(token: string) {
    return Object.prototype.hasOwnProperty.call(OPERATORS, token) && token !== "u-";
  }

  function isConstantToken(token: string) {
    return token === "Math.PI" || token === "Math.E";
  }

  function canAppendToken(current: string, token: string) {
    const cur = String(current || "");

    if (!token) return false;

    if (/^\d$/u.test(token)) {
      return !/(?:Math\.PI|Math\.E|\)|%)$/u.test(cur);
    }

    if (token === ".") {
      if (/(?:Math\.PI|Math\.E|\)|%)$/u.test(cur)) return false;

      const lastNumberChunk = cur.match(/(?:^|[^\d.])(\d*\.?\d*)$/u)?.[1] || "";
      return !lastNumberChunk.includes(".");
    }

    if (isConstantToken(token)) {
      return !/(?:[\d.)%]|Math\.PI|Math\.E)$/u.test(cur);
    }

    if (token === "(") {
      return !/(?:[\d.)%]|Math\.PI|Math\.E)$/u.test(cur);
    }

    if (token === ")") {
      if (/[+\-*/%(]$/u.test(cur)) return false;

      const openCount = (cur.match(/\(/gu) || []).length;
      const closeCount = (cur.match(/\)/gu) || []).length;

      return openCount > closeCount;
    }

    if (token === "%") {
      return /(?:[\d)]|Math\.PI|Math\.E)$/u.test(cur);
    }

    if (isOperatorToken(token)) {
      if (token === "-") return true;
      return !/[+\-*/(]$/u.test(cur) && !cur.endsWith("**");
    }

    return true;
  }

  function calcInput(ch: string) {
    resetErrorToZero();

    const token = String(ch || "");
    if (!token) return;

    const current = getExpression();

    if (current === "0") {
      if (["+", "*", "/", "%", "**", ")"].includes(token)) return;

      if (token === ".") {
        setExpression("0.");
      } else {
        setExpression(token);
      }

      return;
    }

    if (!canAppendToken(current, token)) return;

    setExpression(current + token);
  }

  function calcBackspace() {
    if (isErrorState()) {
      clearCalcError();
      setExpression("0");
      return;
    }

    const current = getExpression();

    if (current.endsWith("**")) {
      const next = current.slice(0, -2);
      setExpression(next || "0");
      return;
    }

    setExpression(current.length > 1 ? current.slice(0, -1) : "0");
  }

  function calcClear() {
    clearCalcError();
    setExpression("0");
  }

  function tokenizeExpression(rawExpression: string) {
    const sourceExpression = String(rawExpression || "").replace(/\s+/gu, "");

    if (!sourceExpression) {
      throw new Error("Empty expression");
    }

    const tokens: ParsedToken[] = [];
    let index = 0;

    while (index < sourceExpression.length) {
      const rest = sourceExpression.slice(index);

      if (rest.startsWith("Math.PI")) {
        tokens.push({
          type: "number",
          value: Math.PI,
          start: index,
          end: index + "Math.PI".length,
        });
        index += "Math.PI".length;
        continue;
      }

      if (rest.startsWith("Math.E")) {
        tokens.push({
          type: "number",
          value: Math.E,
          start: index,
          end: index + "Math.E".length,
        });
        index += "Math.E".length;
        continue;
      }

      if (rest.startsWith("**")) {
        tokens.push({
          type: "operator",
          value: "**",
          start: index,
          end: index + 2,
        });
        index += 2;
        continue;
      }

      const ch = sourceExpression[index];

      if (/\d|\./u.test(ch)) {
        let end = index + 1;
        let dotCount = ch === "." ? 1 : 0;

        while (end < sourceExpression.length) {
          const next = sourceExpression[end];

          if (next === ".") {
            dotCount += 1;
            if (dotCount > 1) throw new Error("Invalid number");
            end += 1;
            continue;
          }

          if (/\d/u.test(next)) {
            end += 1;
            continue;
          }

          break;
        }

        const numberText = sourceExpression.slice(index, end);

        if (numberText === ".") throw new Error("Invalid number");

        const parsed = Number(numberText);

        if (!Number.isFinite(parsed)) throw new Error("Invalid number");

        tokens.push({
          type: "number",
          value: parsed,
          start: index,
          end,
        });

        index = end;
        continue;
      }

      if ("+-*/()%".includes(ch)) {
        if (ch === "(" || ch === ")") {
          tokens.push({
            type: "paren",
            value: ch,
            start: index,
            end: index + 1,
          });
        } else {
          tokens.push({
            type: "operator",
            value: ch,
            start: index,
            end: index + 1,
          });
        }

        index += 1;
        continue;
      }

      throw new Error("Unsupported token");
    }

    return tokens;
  }

  function toRpn(tokens: ParsedToken[]) {
    const output: ParsedToken[] = [];
    const operators: ParsedToken[] = [];
    let previousType = "start";

    for (const token of tokens) {
      if (token.type === "number") {
        output.push(token);
        previousType = "number";
        continue;
      }

      if (token.type === "paren") {
        if (token.value === "(") {
          operators.push(token);
          previousType = "leftParen";
        } else {
          let foundLeftParen = false;

          while (operators.length > 0) {
            const top = operators.pop();

            if (!top) break;

            if (top.type === "paren" && top.value === "(") {
              foundLeftParen = true;
              break;
            }

            output.push(top);
          }

          if (!foundLeftParen) throw new Error("Unbalanced brackets");

          previousType = "rightParen";
        }

        continue;
      }

      let op = token.value;

      if (
        op === "-" &&
        ["start", "operator", "leftParen"].includes(previousType)
      ) {
        op = "u-";
      }

      if (op === "%" && !["number", "rightParen"].includes(previousType)) {
        throw new Error("Invalid percent placement");
      }

      const current: OperatorToken = {
        type: "operator",
        value: op,
      };

      const currentMeta = OPERATORS[op];

      if (!currentMeta) throw new Error("Unknown operator");

      while (operators.length > 0) {
        const top = operators[operators.length - 1];

        if (!top || top.type !== "operator") break;

        const topMeta = OPERATORS[top.value];

        if (!topMeta) break;

        const shouldPop =
          (currentMeta.associativity === "L" &&
            currentMeta.precedence <= topMeta.precedence) ||
          (currentMeta.associativity === "R" &&
            currentMeta.precedence < topMeta.precedence);

        if (!shouldPop) break;

        const popped = operators.pop();
        if (popped) output.push(popped);
      }

      operators.push(current);
      previousType = "operator";
    }

    while (operators.length > 0) {
      const top = operators.pop();

      if (!top) break;
      if (top.type === "paren") throw new Error("Unbalanced brackets");

      output.push(top);
    }

    return output;
  }

  function evaluateRpn(rpn: ParsedToken[]) {
    const stack: StackItem[] = [];

    const popNumber = () => {
      if (!stack.length) throw new Error("Invalid expression");

      const item = stack.pop();

      if (!item) throw new Error("Invalid expression");

      return item;
    };

    for (const token of rpn) {
      if (token.type === "number") {
        stack.push({
          value: token.value,
          percentTag: false,
        });
        continue;
      }

      if (token.type !== "operator") throw new Error("Invalid expression");

      const op = token.value;

      if (op === "u-") {
        const a = popNumber();

        stack.push({
          value: -a.value,
          percentTag: false,
        });

        continue;
      }

      if (op === "%") {
        const a = popNumber();

        stack.push({
          value: a.value / 100,
          percentTag: true,
        });

        continue;
      }

      const right = popNumber();
      const left = popNumber();

      const rightValue =
        (op === "+" || op === "-") && right.percentTag
          ? left.value * right.value
          : right.value;

      let result: number;

      if (op === "+") result = left.value + rightValue;
      else if (op === "-") result = left.value - rightValue;
      else if (op === "*") result = left.value * rightValue;
      else if (op === "/") result = left.value / rightValue;
      else if (op === "**") result = left.value ** rightValue;
      else throw new Error("Unknown operator");

      if (!Number.isFinite(result)) throw new Error("Non-finite result");

      stack.push({
        value: result,
        percentTag: false,
      });
    }

    if (stack.length !== 1) throw new Error("Invalid expression");

    return stack[0].value;
  }

  function evaluateExpression(rawExpression: string) {
    const tokens = tokenizeExpression(rawExpression);
    const rpn = toRpn(tokens);

    return evaluateRpn(rpn);
  }

  function isUnaryMinusToken(tokens: ParsedToken[], index: number) {
    if (!Number.isInteger(index) || index < 0 || index >= tokens.length) {
      return false;
    }

    const token = tokens[index];

    if (!token || token.type !== "operator" || token.value !== "-") {
      return false;
    }

    if (index === 0) return true;

    const previous = tokens[index - 1];

    if (!previous) return true;
    if (previous.type === "paren" && previous.value === "(") return true;
    if (previous.type === "operator" && previous.value !== "%") return true;

    return false;
  }

  function unwrapWrappedNegativeCore(coreText: string) {
    if (!coreText.startsWith("(-") || !coreText.endsWith(")")) return null;

    const inner = coreText.slice(2, -1);

    if (!inner) return null;

    return inner;
  }

  function toggleSignForExpression(rawExpression: string) {
    const normalized = String(rawExpression || "").trim();

    if (!normalized || normalized === "0") return "0";

    let tokens: ParsedToken[];

    try {
      tokens = tokenizeExpression(normalized);
    } catch {
      return normalized;
    }

    if (!tokens.length) return normalized;

    let endIndex = tokens.length - 1;

    while (
      endIndex >= 0 &&
      tokens[endIndex].type === "operator" &&
      tokens[endIndex].value === "%"
    ) {
      endIndex -= 1;
    }

    if (endIndex < 0) return normalized;

    let startIndex = endIndex;

    if (tokens[endIndex].type === "paren" && tokens[endIndex].value === ")") {
      let depth = 0;

      for (let index = endIndex; index >= 0; index -= 1) {
        const token = tokens[index];

        if (token.type === "paren" && token.value === ")") depth += 1;

        if (token.type === "paren" && token.value === "(") {
          depth -= 1;

          if (depth === 0) {
            startIndex = index;
            break;
          }
        }
      }

      if (depth !== 0) return normalized;
    } else if (tokens[endIndex].type !== "number") {
      return normalized;
    }

    const suffixEnd = tokens[tokens.length - 1].end ?? normalized.length;
    const coreStart = tokens[startIndex].start ?? 0;
    const coreEnd = tokens[endIndex].end ?? normalized.length;
    const suffixText = normalized.slice(coreEnd, suffixEnd);
    const coreText = normalized.slice(coreStart, coreEnd);

    const unaryMinusIndex = startIndex - 1;

    if (isUnaryMinusToken(tokens, unaryMinusIndex)) {
      const minus = tokens[unaryMinusIndex];
      const minusStart = minus.start ?? coreStart;

      return (
        normalized.slice(0, minusStart) +
        normalized.slice(coreStart, suffixEnd) +
        normalized.slice(suffixEnd)
      );
    }

    const wrapped = unwrapWrappedNegativeCore(coreText);

    if (wrapped !== null) {
      return (
        normalized.slice(0, coreStart) +
        wrapped +
        suffixText +
        normalized.slice(suffixEnd)
      );
    }

    return (
      normalized.slice(0, coreStart) +
      `(-${coreText})` +
      suffixText +
      normalized.slice(suffixEnd)
    );
  }

  function calcToggleSign() {
    resetErrorToZero();
    setExpression(toggleSignForExpression(getExpression()));
  }

  function evaluateCurrentExpressionOrNull() {
    if (isErrorState()) return null;

    try {
      return evaluateExpression(getExpression());
    } catch {
      return null;
    }
  }

  function formatResultNumber(value: number) {
    if (!Number.isFinite(value)) throw new Error("Non-finite result");

    return Number.parseFloat(value.toFixed(12)).toString();
  }

  function computeEqualsResult() {
    const result = evaluateExpression(getExpression());

    return formatResultNumber(result);
  }

  function calcEquals() {
    try {
      const beforeExpression = getExpression();
      const resultText = computeEqualsResult();

      clearCalcError();
      pushHistoryEntry(beforeExpression, resultText);
      setExpression(resultText);

      return resultText;
    } catch {
      setCalcError();
      return null;
    }
  }

  function factorial(value: number) {
    if (!Number.isInteger(value) || value < 0 || value > 170) {
      throw new Error("Factorial range");
    }

    let result = 1;

    for (let index = 2; index <= value; index += 1) {
      result *= index;
    }

    return result;
  }

  function calcFunction(fn: FunctionName) {
    try {
      const sourceExpression = getExpression();
      const current = evaluateCurrentExpressionOrNull();

      if (current === null) throw new Error("Invalid expression");

      const handler = calcFunctionHandlers[fn];
      const result = handler(current);
      const resultText = formatResultNumber(result);
      const expressionLabel = `${fn}(${sourceExpression})`;

      clearCalcError();
      setExpression(resultText);
      pushHistoryEntry(expressionLabel, resultText);
    } catch {
      setCalcError();
    }
  }

  function calcPower2() {
    resetErrorToZero();

    const sourceExpression = getExpression();

    if (!sourceExpression || sourceExpression === "0") return;

    setExpression(`(${sourceExpression})**2`);
  }

  function calcMemoryClear() {
    memoryValue = 0;
    saveCalculatorState();
  }

  function calcMemoryRecall() {
    clearCalcError();
    setExpression(Number.isFinite(memoryValue) ? memoryValue.toString() : "0");
  }

  function calcMemoryAdd() {
    const current = evaluateCurrentExpressionOrNull();

    if (current === null) return;

    memoryValue += current;
    saveCalculatorState();
  }

  function calcMemorySubtract() {
    const current = evaluateCurrentExpressionOrNull();

    if (current === null) return;

    memoryValue -= current;
    saveCalculatorState();
  }

  function calcRemoveHistoryAt(index: number) {
    if (!Number.isInteger(index)) return;
    if (index < 0 || index >= history.length) return;

    history = history.filter((_, itemIndex) => itemIndex !== index);
    saveCalculatorState();
  }

  function calcClearHistory() {
    history = [];
    saveCalculatorState();
  }

  function toggleCalcMode() {
    scientificMode = !scientificMode;
    saveCalculatorState();
  }

  function getButtonVariant(button: CalcButtonDef): ButtonVariant {
    if (button.variant) return button.variant;

    if (button.action === "equals") return "primary";

    if (
      button.action === "input" &&
      ["+", "-", "*", "/", "**"].includes(button.token ?? "")
    ) {
      return "primary";
    }

    return "secondary";
  }

  function dispatchButton(button: CalcButtonDef) {
    switch (button.action) {
      case "input":
        calcInput(button.token ?? button.label);
        break;

      case "equals":
        calcEquals();
        break;

      case "clear":
        calcClear();
        break;

      case "backspace":
        calcBackspace();
        break;

      case "sign":
        calcToggleSign();
        break;

      case "memoryClear":
        calcMemoryClear();
        break;

      case "memoryRecall":
        calcMemoryRecall();
        break;

      case "memoryAdd":
        calcMemoryAdd();
        break;

      case "memorySubtract":
        calcMemorySubtract();
        break;

      case "function":
        if (button.fn) calcFunction(button.fn);
        break;

      case "power2":
        calcPower2();
        break;

      case "toggleMode":
        toggleCalcMode();
        break;

      case "clearHistory":
        calcClearHistory();
        break;
    }
  }

  function shouldIgnoreCalculatorHotkeys(target: EventTarget | null) {
    if (!target || !(target instanceof Element)) return false;

    return Boolean(
      target.closest('input, textarea, select, [contenteditable="true"]'),
    );
  }

  function handleCalculatorKeyboard(event: KeyboardEvent) {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (shouldIgnoreCalculatorHotkeys(event.target)) return;

    const key = event.key;
    let handled = false;

    if (/^[0-9]$/u.test(key)) {
      calcInput(key);
      handled = true;
    } else if (Object.prototype.hasOwnProperty.call(keyActions, key)) {
      keyActions[key]();
      handled = true;
    }

    if (handled) event.preventDefault();
  }

  function formatHistoryText(entry: HistoryEntry) {
    const expressionText = formatCalcTextForDisplay(entry.expression);
    const resultText = formatCalcTextForDisplay(entry.result);

    return entry.result ? `${expressionText} = ${resultText}` : expressionText;
  }

  function actualHistoryIndex(visibleIndex: number) {
    return history.length - 1 - visibleIndex;
  }

  function getButtonLabel(button: CalcButtonDef) {
    if (button.action === "toggleMode") return T.scientificShort ?? button.label;
    if (button.action === "clearHistory") return T.historyShort ?? button.label;
    return button.label;
  }

  $effect(() => {
    if (didLoad) return;

    didLoad = true;
    loadCalculatorState();
  });
</script>

<svelte:window onkeydown={handleCalculatorKeyboard} />

<div
  class={cx(
    "mx-auto w-full max-w-[24rem] min-w-0 text-[var(--color-text-default)]",
    scientificMode && "sm:max-w-[34rem]",
    externalClass,
  )}
  aria-label={T.title ?? "Calculator"}
>
  <Card {sz} class="min-w-0 overflow-hidden">
    <div class="flex min-w-0 flex-col gap-[var(--spacing-md)]">
      <header class="flex min-w-0 items-center justify-between gap-[var(--spacing-sm)]">
        <div class="min-w-0">
          <h1
            class="truncate text-[length:var(--text-lg)] [font-weight:var(--font-weight-bold)] leading-[var(--line-height-tight)]"
          >
            {T.title ?? "Calculator"}
          </h1>

          <p
            class="truncate text-[length:var(--text-xs)] text-[var(--color-text-muted)]"
          >
            {T.memory ?? "Memory"}: {Number.isFinite(memoryValue) ? memoryValue : 0}
          </p>
        </div>

        <Button sz="xs" variant="info" onClick={toggleCalcMode}>
          {scientificMode ? (T.modeScientific ?? "Sci") : (T.modeBasic ?? "Basic")}
        </Button>
      </header>

      <section
        class="min-w-0 rounded-[var(--radius-lg)] border border-[var(--border-color-default)] bg-[var(--color-bg-muted)] p-[var(--spacing-sm)] text-right [font-family:var(--font-mono)]"
        aria-label={T.displayLabel ?? "Calculator display"}
      >
        <p
          class="min-h-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap text-[length:var(--text-xs)] text-[var(--color-text-muted)]"
          title={previewText}
        >
          {previewText}
        </p>

        <output
          class="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[length:clamp(1.5rem,8vw,2.5rem)] [font-weight:var(--font-weight-bold)] leading-[var(--line-height-tight)]"
          aria-live="polite"
          title={displayText}
        >
          {displayText}
        </output>
      </section>

      {#if scientificMode}
        <section
          class="grid grid-cols-4 gap-[var(--spacing-xs)] sm:gap-[var(--spacing-sm)]"
          aria-label={T.scientificControls ?? "Scientific calculator controls"}
        >
          {#each scientificButtons as button, index (`scientific-${index}-${button.label}`)}
            <Button
              {sz}
              variant={getButtonVariant(button)}
              class={cx(
                "min-h-10 px-[var(--spacing-xs)] text-[length:var(--text-xs)] [font-family:var(--font-mono)] [font-weight:var(--font-weight-bold)] sm:min-h-11 sm:text-[length:var(--text-sm)]",
                button.span ?? "",
              )}
              onClick={() => dispatchButton(button)}
            >
              {getButtonLabel(button)}
            </Button>
          {/each}
        </section>
      {/if}

      <section
        class="grid grid-cols-4 gap-[var(--spacing-xs)] sm:gap-[var(--spacing-sm)]"
        aria-label={T.controls ?? "Calculator controls"}
      >
        {#each basicButtons as button, index (`basic-${index}-${button.label}`)}
          <Button
            {sz}
            variant={getButtonVariant(button)}
            class={cx(
              "min-h-10 px-[var(--spacing-xs)] text-[length:var(--text-xs)] [font-family:var(--font-mono)] [font-weight:var(--font-weight-bold)] sm:min-h-11 sm:text-[length:var(--text-sm)]",
              button.span ?? "",
            )}
            onClick={() => dispatchButton(button)}
          >
            {getButtonLabel(button)}
          </Button>
        {/each}
      </section>

      <section
        class="flex min-w-0 flex-col gap-[var(--spacing-xs)] border-t border-[var(--border-color-default)] pt-[var(--spacing-sm)]"
        aria-label={T.history ?? "Calculator history"}
      >
        <div class="flex items-center justify-between gap-[var(--spacing-sm)]">
          <h2
            class="text-[length:var(--text-sm)] [font-weight:var(--font-weight-semibold)] text-[var(--color-text-default)]"
          >
            {T.history ?? "History"}
          </h2>

          <Button
            sz="xs"
            variant="ghost"
            disabled={history.length === 0}
            onClick={calcClearHistory}
          >
            {T.clear ?? "Clear"}
          </Button>
        </div>

        {#if recentHistory.length === 0}
          <p class="text-[length:var(--text-sm)] text-[var(--color-text-muted)]">
            {T.emptyHistory ?? "Empty history"}
          </p>
        {:else}
          <div class="flex max-h-28 flex-col gap-[var(--spacing-xs)] overflow-y-auto">
            {#each recentHistory as entry, visibleIndex (`history-${actualHistoryIndex(visibleIndex)}-${entry.expression}-${entry.result}`)}
              <div
                class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-[var(--spacing-xs)] rounded-[var(--radius-md)] bg-[var(--color-bg-muted)] p-[var(--spacing-xs)]"
              >
                <span
                  class="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[length:var(--text-xs)] [font-family:var(--font-mono)] text-[var(--color-text-default)]"
                  title={formatHistoryText(entry)}
                >
                  {formatHistoryText(entry)}
                </span>

                <Button
                  sz="xs"
                  variant="ghost"
                  onClick={() => calcRemoveHistoryAt(actualHistoryIndex(visibleIndex))}
                >
                  {T.deleteHistory ?? "×"}
                </Button>
              </div>
            {/each}
          </div>
        {/if}
      </section>
    </div>
  </Card>
</div>
