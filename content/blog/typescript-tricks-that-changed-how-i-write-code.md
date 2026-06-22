---
title: "TypeScript Tricks That Changed How I Write Code"
date: "2026-03-05"
summary: "Not the basics — the type system features that actually made my codebases more correct and less painful to refactor. Template literals, discriminated unions, and more."
tag: "TypeScript"
readTime: "7 min"
---

## Template Literal Types

I knew TypeScript had template literals for strings. I didn't know the type system could do them too.

```typescript
type EventName = "click" | "hover" | "focus";
type Handler = `on${Capitalize<EventName>}`;
// → "onClick" | "onHover" | "onFocus"
```

This isn't just cute. Combine it with `Record` and you get fully typed event maps with zero repetition:

```typescript
type EventMap = Record<Handler, (e: Event) => void>;
// { onClick: ..., onHover: ..., onFocus: ... }
```

I've used this for API route types, CSS property names, and action creators. Every time you'd normally write a union by hand and update it in multiple places — template literals let you derive it.

## Discriminated Unions: The Right Way to Model State

Before I really understood discriminated unions, I modeled async state like this:

```typescript
interface FetchState {
  loading: boolean;
  data?: User[];
  error?: Error;
}
```

The problem: `loading: true, data: [...], error: Error` is a valid type but an invalid state. The type says nothing about which combinations make sense.

Discriminated unions fix this by **making illegal states unrepresentable**:

```typescript
type FetchState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: Error };
```

Now TypeScript enforces it. You can't access `data` without first narrowing to `status === "success"`. Refactors become safe — if you remove a case, every `switch` that didn't handle it becomes a compile error.

## `satisfies` vs `as`: Know the Difference

`as` is an escape hatch. It tells TypeScript: "trust me, I know better." Sometimes you need it. But it disables checking in ways that hurt.

```typescript
const config = {
  port: 3000,
  host: "localhost",
} as Config; // TypeScript stops checking properties
```

`satisfies` (added in TS 4.9) validates *without losing inference*:

```typescript
const config = {
  port: 3000,
  host: "localhost",
} satisfies Config; // type-checked AND inferred as the literal type
```

The difference matters when you access properties later. With `as`, you get `Config["port"]` which might be `number | string`. With `satisfies`, you get `3000` — the actual literal.

## `infer` for Extracting Types

`infer` lets you pull types out of other types in conditional type expressions. The classic example is extracting a function's return type:

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
```

But where it really shines is extracting from deeply nested structures:

```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T;

// UnwrapPromise<Promise<Promise<string>>> → string
```

I use this to extract API response shapes from fetch utilities without writing out the type twice.

## The Trick I Use Most: `const` Assertions

When you write `const routes = ["home", "about", "blog"]`, TypeScript infers `string[]`. But if you're building a typed router, you want the literal tuple `["home", "about", "blog"]`.

Add `as const`:

```typescript
const routes = ["home", "about", "blog"] as const;
// readonly ["home", "about", "blog"]

type Route = typeof routes[number];
// "home" | "about" | "blog"
```

Now `Route` is derived from the source of truth. Add a route to the array and the type updates automatically. This pattern shows up everywhere: feature flags, permission lists, configuration keys.

## A Note on Complexity

The type system is powerful enough to build a Turing-complete type-level program. Don't.

The best TypeScript is types that communicate intent clearly and catch real bugs at compile time. When you're spending more time fighting type errors than writing logic, you've probably gone too deep.

Types serve the code. Not the other way around.
