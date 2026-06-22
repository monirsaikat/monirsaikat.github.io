---
title: "Design Patterns I Wish I Learned Earlier"
date: "2026-02-10"
summary: "Not a catalog walk-through, but a reflection on the patterns that actually changed how I think about code and the ones that get misused constantly."
tag: "Patterns"
readTime: "6 min"
---

## The Problem with Pattern Catalogs

Most articles about design patterns read like a dictionary. They list all 23 GoF patterns, show you a UML diagram, and move on. That's useful as a reference but not how you *internalize* anything.

The patterns I'll talk about here are the ones I actually reach for. The ones that, when I finally understood them, changed how I read and wrote code.

## Strategy: Stop Using Inheritance for Behavior

Before Strategy, I'd model variation with inheritance:

```python
class PaymentProcessor:
    def process(self, amount): ...

class StripeProcessor(PaymentProcessor):
    def process(self, amount): ...

class PaypalProcessor(PaymentProcessor):
    def process(self, amount): ...
```

This works until you need to compose behaviors. What if a processor is both retryable AND loggable? You get into multiple inheritance hell.

Strategy says: **extract the varying behavior into its own object**.

```python
class PaymentStrategy:
    def charge(self, amount: float) -> bool: ...

class Order:
    def __init__(self, strategy: PaymentStrategy):
        self.strategy = strategy

    def checkout(self, amount: float):
        return self.strategy.charge(amount)
```

Now `Order` doesn't care how payment works. You can swap strategies at runtime, test them in isolation, and compose them with decorators.

## Observer: The Pattern Behind Half the Web

Once you understand Observer, you see it everywhere: DOM events, React's state model, RxJS, `EventEmitter` in Node. They're all Observer.

The core idea: **subscribers register interest in events; the publisher notifies them without knowing who they are**.

```python
class EventBus:
    def __init__(self):
        self._handlers: dict[str, list] = {}

    def subscribe(self, event: str, handler):
        self._handlers.setdefault(event, []).append(handler)

    def emit(self, event: str, payload=None):
        for handler in self._handlers.get(event, []):
            handler(payload)
```

The value isn't the pattern itself. It's the **decoupling**. The component that fires `user.logged_in` doesn't need to know about the email service, the analytics service, or the audit logger. They all subscribe independently.

## Decorator: Open/Closed in Practice

The Open/Closed Principle says: open for extension, closed for modification. Decorator makes that concrete.

```python
class Logger:
    def log(self, msg: str): print(msg)

class TimestampedLogger:
    def __init__(self, inner: Logger):
        self._inner = inner

    def log(self, msg: str):
        self._inner.log(f"[{now()}] {msg}")
```

You extend behavior by wrapping, not by editing. This matters when the thing you're extending is in a library, or when changing it would break ten other things.

Python's `@decorator` syntax is literally this pattern as a first-class language feature.

## The One That Gets Misused: Singleton

Singleton is the most abused pattern in software. The idea is simple: ensure only one instance of a class exists. The abuse is simpler: people use it as a global variable with extra steps.

The problem is that Singletons make testing miserable. If your database connection is a Singleton, every test that touches the database is now sharing state. Tests become order-dependent. Bugs appear in CI that don't reproduce locally.

**Use dependency injection instead.** Pass dependencies in. Let your DI container manage lifetimes. You get the "one instance" behavior without the global state coupling.

## The Pattern Beneath the Patterns

After working with these for a while, I noticed they all point at the same thing: **separate what changes from what stays the same**.

- Strategy: varying algorithm, stable context
- Observer: varying reactions, stable event source
- Decorator: varying wrapping, stable interface
- Template Method: varying steps, stable skeleton

When you're designing something and you feel yourself hard-coding variation into a fixed structure, that's your signal. A pattern probably fits.
