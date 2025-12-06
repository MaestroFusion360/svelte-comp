export declare const uid: (prefix?: string) => string;
type ClassPrimitive = string | number | bigint;
interface ClassDictionary {
    [key: string]: boolean | null | undefined;
}
type ClassArray = Array<ClassPrimitive | ClassDictionary | ClassArray | null | boolean | undefined>;
type ClassValue = ClassPrimitive | ClassDictionary | ClassArray | null | boolean | undefined;
export declare function cx(...classes: ClassValue[]): string;
export declare function clamp(value: number, min: number, max: number): number;
export declare function times<T>(count: number, fn: (i: number) => T): T[];
export declare function formatFileSize(bytes: number): string;
export declare function debounce<Args extends unknown[]>(fn: (...args: Args) => void, delay: number): (...args: Args) => void;
export declare function throttle<Args extends unknown[]>(fn: (...args: Args) => void, limit: number): (...args: Args) => void;
export declare const storage: {
    get: <T>(key: string, defaultValue: T) => T;
    set: <T>(key: string, value: T) => void;
    remove: (key: string) => void;
};
import type { ToastVariant } from "../types";
export declare const TOAST_CONFIG: Record<ToastVariant, {
    title: string;
    message: string;
    duration?: number;
}>;
export declare const getToastConfig: (variant: ToastVariant, customMessage?: string) => {
    message: string;
    title: string;
    duration?: number;
};
export declare const formatDate: (value: Date | string | number | null | undefined, locale?: string, options?: Intl.DateTimeFormatOptions) => string;
export declare const formatTime: (value: Date | string | number | null | undefined, locale?: string, options?: Intl.DateTimeFormatOptions) => string;
export declare const focusFirstInteractive: (element: HTMLElement) => void;
export declare const trapFocus: (element: HTMLElement) => (() => void);
export {};
