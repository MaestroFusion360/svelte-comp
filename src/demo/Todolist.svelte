<!-- src/demo/Todolist.svelte -->
<script lang="ts">
  /**
   * @component Todolist
   * @description A simple todo list demo showcasing various library components in a practical use case.
   *
   * @prop sz {SizeKey} - UI size token (default: "md").
   * @prop class {string} - Extra wrapper classes (default: "").
   *
   * @note Manages state for tasks, filtering, and toast notifications.
   * @note Demonstrates usage of Card, Button, CheckBox, Select, Tabs, Toast, and Field components.
   * @note Uses derived state for filtered views and statistics.
   */
  import {
    Badge,
    Button,
    Card,
    CheckBox,
    Field,
    Select,
    Tabs,
    Toast,
  } from "$lib";
  import { cx } from "$utils";
  import type { SizeKey } from "$lib/types";

  type TodoListLocale = {
    readonly todolist?: Partial<{
      title: string;
      subtitle: string;
      active: string;
      done: string;
      all: string;
      completed: string;
      low: string;
      medium: string;
      high: string;
      allPriorities: string;
      noPriorityTasks: string;
      noCompletedTasks: string;
      noActiveTasks: string;
      noTasks: string;
      validationTitle: string;
      validationMessage: string;
      taskAdded: string;
      taskDeleted: string;
      nothingToClear: string;
      noCompletedToClear: string;
      completedCleared: string;
      removedSuffix: string;
      newTask: string;
      newTaskPlaceholder: string;
      priority: string;
      add: string;
      filter: string;
      clearDone: string;
      tasksLabel: string;
      delete: string;
      total: string;
      remaining: string;
    }>;
  };

  interface Props {
    L?: TodoListLocale;
    sz?: SizeKey;
    class?: string;
  }

  type TodoTab = "all" | "active" | "completed";
  type Priority = "low" | "medium" | "high";
  type PriorityFilter = "all" | Priority;
  type ToastVariant = "success" | "danger" | "warning" | "info";

  type Todo = {
    id: number;
    text: string;
    completed: boolean;
    priority: Priority;
    createdAt: string;
  };

  type DemoToast = {
    id: number;
    title: string;
    message: string;
    variant: ToastVariant;
  };

  let { L = {}, sz = "md", class: externalClass = "" }: Props = $props();

  const T = $derived(L.todolist ?? {});

  let todos = $state<Todo[]>([]);
  let newTodoText = $state("");
  let newPriority = $state<Priority>("medium");
  let activeTab = $state<TodoTab>("all");
  let priorityFilter = $state<PriorityFilter>("all");
  let nextTodoId = $state(1);
  let nextToastId = $state(1);
  let toasts = $state<DemoToast[]>([]);

  const tabs = $derived([
    { id: "all", label: T.all ?? "All" },
    { id: "active", label: T.active ?? "Active" },
    { id: "completed", label: T.completed ?? "Completed" },
  ]);

  const priorityOptions = $derived([
    { value: "low", label: T.low ?? "Low" },
    { value: "medium", label: T.medium ?? "Medium" },
    { value: "high", label: T.high ?? "High" },
  ]);

  const priorityFilterOptions = $derived([
    { value: "all", label: T.allPriorities ?? "All priorities" },
    ...priorityOptions,
  ]);

  const priorityLabel = $derived<Record<Priority, string>>({
    low: T.low ?? "Low",
    medium: T.medium ?? "Medium",
    high: T.high ?? "High",
  });

  const priorityVariant: Record<Priority, ToastVariant> = {
    low: "info",
    medium: "warning",
    high: "danger",
  };

  const stats = $derived.by(() => {
    const completed = todos.filter((todo) => todo.completed).length;

    return {
      total: todos.length,
      active: todos.length - completed,
      completed,
    };
  });

  const filteredTodos = $derived.by(() => {
    return todos.filter((todo) => {
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "active" && !todo.completed) ||
        (activeTab === "completed" && todo.completed);

      const matchesPriority =
        priorityFilter === "all" || todo.priority === priorityFilter;

      return matchesTab && matchesPriority;
    });
  });

  const emptyMessage = $derived.by(() => {
    if (priorityFilter !== "all") {
      return (
        T.noPriorityTasks ?? "No {priority} priority tasks in this view."
      ).replace("{priority}", priorityLabel[priorityFilter]);
    }

    if (activeTab === "completed") {
      return T.noCompletedTasks ?? "No completed tasks yet.";
    }

    if (activeTab === "active") {
      return T.noActiveTasks ?? "No active tasks. Good.";
    }

    return T.noTasks ?? "No tasks yet. Add one above.";
  });

  function isTodoTab(value: string): value is TodoTab {
    return value === "all" || value === "active" || value === "completed";
  }

  function isPriority(value: string): value is Priority {
    return value === "low" || value === "medium" || value === "high";
  }

  function isPriorityFilter(value: string): value is PriorityFilter {
    return value === "all" || isPriority(value);
  }

  function showToast(
    title: string,
    message: string,
    variant: ToastVariant = "info",
  ) {
    const id = nextToastId++;
    toasts = [...toasts, { id, title, message, variant }];
  }

  function closeToast(id: number) {
    toasts = toasts.filter((toast) => toast.id !== id);
  }

  function addTodo() {
    const text = newTodoText.trim();

    if (!text) {
      showToast(
        T.validationTitle ?? "Validation",
        T.validationMessage ?? "Enter a task description.",
        "warning",
      );
      return;
    }

    todos = [
      {
        id: nextTodoId++,
        text,
        completed: false,
        priority: newPriority,
        createdAt: new Date().toISOString(),
      },
      ...todos,
    ];

    newTodoText = "";
    showToast(T.taskAdded ?? "Task added", text, "success");
  }

  function setTodoCompleted(id: number, completed: boolean) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo,
    );
  }

  function deleteTodo(id: number) {
    const todo = todos.find((item) => item.id === id);
    todos = todos.filter((item) => item.id !== id);

    if (todo) {
      showToast(T.taskDeleted ?? "Task deleted", todo.text, "danger");
    }
  }

  function clearCompleted() {
    if (stats.completed === 0) {
      showToast(
        T.nothingToClear ?? "Nothing to clear",
        T.noCompletedToClear ?? "There are no completed tasks.",
        "warning",
      );
      return;
    }

    const count = stats.completed;
    todos = todos.filter((todo) => !todo.completed);

    showToast(
      T.completedCleared ?? "Completed cleared",
      `${count} ${T.removedSuffix ?? "task(s) removed."}`,
      "success",
    );
  }

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    addTodo();
  }

  function handleTabChange(id: string) {
    if (isTodoTab(id)) {
      activeTab = id;
    }
  }

  function handlePriorityChange(value: string) {
    if (isPriority(value)) {
      newPriority = value;
    }
  }

  function handlePriorityFilterChange(value: string) {
    if (isPriorityFilter(value)) {
      priorityFilter = value;
    }
  }

  function formatDateTime(value: string) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(value));
  }
</script>

<div
  class={cx(
    "mx-auto w-full max-w-2xl min-w-0 text-[var(--color-text-default)]",
    externalClass,
  )}
>
  <Card {sz} class="min-w-0 overflow-hidden">
    <div class="flex min-w-0 flex-col gap-[var(--spacing-md)]">
      <header
        class="flex min-w-0 flex-col gap-[var(--spacing-sm)] sm:flex-row sm:items-start sm:justify-between"
      >
        <div class="min-w-0">
          <h1
            class="truncate text-[length:var(--text-xl)] [font-weight:var(--font-weight-bold)] leading-[var(--line-height-tight)]"
          >
            {T.title ?? "Todo List"}
          </h1>

          <p
            class="text-[length:var(--text-sm)] text-[var(--color-text-muted)]"
          >
            {T.subtitle ?? "Small demo for library components."}
          </p>
        </div>

        <div class="flex shrink-0 flex-wrap gap-[var(--spacing-sm)]">
          <Badge
            message={`${stats.active} ${T.active ?? "active"}`}
            variant="info"
            showIcon
          />

          <Badge
            message={`${stats.completed} ${T.done ?? "done"}`}
            variant="success"
            showIcon
          />
        </div>
      </header>

      <form
        class="grid min-w-0 gap-[var(--spacing-sm)] rounded-[var(--radius-lg)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-sm)] shadow-[0_1px_2px_var(--shadow-color)] sm:grid-cols-[minmax(0,1fr)_10rem_auto]"
        onsubmit={handleSubmit}
      >
        <Field
          label={T.newTask ?? "New task"}
          placeholder={T.newTaskPlaceholder ?? "What needs to be done?"}
          bind:value={newTodoText}
          {sz}
        />

        <Select
          label={T.priority ?? "Priority"}
          options={priorityOptions}
          value={newPriority}
          onChange={handlePriorityChange}
          {sz}
        />

        <div class="flex items-end">
          <Button type="submit" variant="primary" {sz} class="w-full sm:w-auto">
            {T.add ?? "Add"}
          </Button>
        </div>
      </form>

      <section
        class="grid min-w-0 gap-[var(--spacing-sm)] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end"
        aria-label={T.filter ?? "Filter"}
      >
        <Select
          label={T.filter ?? "Filter"}
          options={priorityFilterOptions}
          value={priorityFilter}
          onChange={handlePriorityFilterChange}
          {sz}
        />

        <Button
          variant="danger"
          {sz}
          disabled={stats.completed === 0}
          onClick={clearCompleted}
          class="w-full sm:w-auto"
        >
          {T.clearDone ?? "Clear done"}
        </Button>
      </section>

      <Tabs
        {tabs}
        {activeTab}
        {sz}
        variant="pills"
        fitted
        onChange={handleTabChange}
      >
        <div class="flex min-w-0 flex-col gap-[var(--spacing-md)]">
          <section
            class="min-w-0 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]"
            aria-label={T.tasksLabel ?? "Tasks"}
          >
            {#if filteredTodos.length === 0}
              <p
                class="px-[var(--spacing-md)] py-[var(--spacing-xl)] text-center text-[var(--color-text-muted)]"
              >
                {emptyMessage}
              </p>
            {:else}
              <div class="divide-y divide-[var(--border-color-default)]">
                {#each filteredTodos as todo (todo.id)}
                  <article
                    class="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-[var(--spacing-sm)] p-[var(--spacing-sm)] sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-start"
                  >
                    <CheckBox
                      checked={todo.completed}
                      onChange={(checked) => setTodoCompleted(todo.id, checked)}
                      {sz}
                    />

                    <div class="min-w-0">
                      <p
                        class={cx(
                          "min-w-0 break-words text-[var(--color-text-default)]",
                          todo.completed &&
                            "line-through text-[var(--color-text-muted)]",
                        )}
                      >
                        {todo.text}
                      </p>

                      <p
                        class="mt-[var(--spacing-xs)] text-[length:var(--text-xs)] text-[var(--color-text-muted)]"
                      >
                        {formatDateTime(todo.createdAt)}
                      </p>
                    </div>

                    <div
                      class="col-span-2 flex min-w-0 flex-wrap items-center gap-[var(--spacing-sm)] sm:col-span-1 sm:justify-end"
                    >
                      <Badge
                        message={priorityLabel[todo.priority]}
                        variant={priorityVariant[todo.priority]}
                      />

                      <Button
                        sz="xs"
                        variant="ghost"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        {T.delete ?? "Delete"}
                      </Button>
                    </div>
                  </article>
                {/each}
              </div>
            {/if}
          </section>

          <footer
            class="grid min-w-0 gap-[var(--spacing-xs)] rounded-[var(--radius-lg)] border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-[var(--spacing-sm)] text-[length:var(--text-sm)] text-[var(--color-text-muted)] sm:grid-cols-3 sm:text-center"
          >
            <span>{T.total ?? "Total"}: {stats.total}</span>
            <span>{T.completed ?? "Completed"}: {stats.completed}</span>
            <span>{T.remaining ?? "Remaining"}: {stats.active}</span>
          </footer>
        </div>
      </Tabs>
    </div>
  </Card>

  {#each toasts as toast (toast.id)}
    <Toast
      title={toast.title}
      message={toast.message}
      variant={toast.variant}
      timeout={3000}
      onClose={() => closeToast(toast.id)}
    />
  {/each}
</div>