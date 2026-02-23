# Heksagon

Heksagon is a Node.js framework that structures backend into ports and adapters for modularity and improved quality.

## Inspiration

Heksagon was born from a turning point.

For years, we built software the way many teams do — focusing on frameworks, patterns, tools, performance, and delivery speed. We were productive. We shipped. But something was missing. Projects grew heavy. Code became harder to reason about. Complexity accumulated quietly.

Everything changed when we read **Domain-Driven Design: Tackling Complexity in the Heart of Software** by Eric Evans — the “Blue Book.”

It was more than a technical book. It was a complete mental shift in how we perceived programming.

It showed us that software isn’t primarily about frameworks or infrastructure — it is about understanding the domain deeply and shaping code around that understanding. It taught us that architecture is not decoration; it is a reflection of language, collaboration, and clarity of thought.

And then we reached the final lines:

> “With tools and technology we already have, we can build much more valuable systems than most projects today. We can write software that is a pleasure to use and a pleasure to work on; software that doesn't box us in as it grows, but creates new opportunities and continues to add value for its owners.”  
> — Eric Evans

That last sentence felt like a promise.

A promise that programming can be meaningful.  
A promise that systems can grow without collapsing under their own weight.  
A promise that code can be a pleasure — not a burden.

Heksagon is our response to that promise.

It is our commitment to never again write software that boxes us in.  
To design systems that grow with clarity.  
To build codebases that remain expressive, modular, and aligned with the business domain.  
To treat architecture as a long-term investment, not a short-term shortcut.

Heksagon is not just a framework.  
It is our decision to build software differently.

## Hexagonal Three-Layer Architecture as Our Response

Our efforts are moving toward a framework that isolates three layers — Domain, Application, and Infrastructure — making them truly independent from one another.

When these layers are truly decoupled, two things become possible. Developers can read the Domain layer and understand the business they're working in — not from documentation, but from the code itself. And when Infrastructure is genuinely separate, porting an application to a different database, runtime, or cloud provider stops being a rewrite and becomes a substitution.

The domain survives. Only the adapters change.
