import { getContext } from "svelte";
import { TEXTS } from "./lang";

export type LangKey = keyof typeof TEXTS;
export type LangContext = { value: LangKey } | null;
type Components = (typeof TEXTS)["en"]["components"];

export const getLangContext = (): LangContext =>
  getContext<{ value: LangKey } | undefined>("lang") ?? null;

export const getLangKey = (ctx: LangContext): LangKey => ctx?.value ?? "en";

export const getComponentText = <K extends keyof Components>(
  component: K,
  lang: LangKey,
): Components[K] => (TEXTS[lang].components as Components)[component];
