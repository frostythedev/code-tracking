// Whenever a ambient declaration changes, its number should be increased
// This way, we avoid the situation where multiple ambient versions of svelte2tsx
// are loaded and their declarations conflict each other
// See https://github.com/sveltejs/language-tools/issues/1059 for an example bug that stems from it
// If you change anything in this file, think about whether or not it should be backported to svelte-shims.d.ts

type AConstructorTypeOf<T, U extends any[] = any[]> = new (...args: U) => T;

/** @internal PRIVATE API, DO NOT USE */
type SvelteActionReturnType = {
	update?: (args: any) => void,
	destroy?: () => void
} | void

/** @internal PRIVATE API, DO NOT USE */
type SvelteTransitionConfig = {
    delay?: number,
    duration?: number,
    easing?: (t: number) => number,
    css?: (t: number, u: number) => string,
    tick?: (t: number, u: number) => void
}

/** @internal PRIVATE API, DO NOT USE */
type SvelteTransitionReturnType = SvelteTransitionConfig | (() => SvelteTransitionConfig)

/** @internal PRIVATE API, DO NOT USE */
type SvelteAnimationReturnType = {
    delay?: number,
    duration?: number,
    easing?: (t: number) => number,
    css?: (t: number, u: number) => string,
    tick?: (t: number, u: number) => void
}

/** @internal PRIVATE API, DO NOT USE */
type SvelteWithOptionalProps<Props, Keys extends keyof Props> = Omit<Props, Keys> & Partial<Pick<Props, Keys>>;
/** @internal PRIVATE API, DO NOT USE */
type SvelteAllProps = { [index: string]: any }
/** @internal PRIVATE API, DO NOT USE */
type SveltePropsAnyFallback<Props> = {[K in keyof Props]: Props[K] extends never ? never : Props[K] extends undefined ? any : Props[K]}
/** @internal PRIVATE API, DO NOT USE */
type SvelteSlotsAnyFallback<Slots> = {[K in keyof Slots]: {[S in keyof Slots[K]]: Slots[K][S] extends undefined ? any : Slots[K][S]}}
/** @internal PRIVATE API, DO NOT USE */
type SvelteRestProps = { [index: string]: any }
/** @internal PRIVATE API, DO NOT USE */
type SvelteSlots = { [index: string]: any }
/** @internal PRIVATE API, DO NOT USE */
type SvelteStore<T> = { subscribe: (run: (value: T) => any, invalidate?: any) => any }

... (truncated for brevity)