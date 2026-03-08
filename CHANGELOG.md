# Changelog

## [0.2.0](https://github.com/djm204/franken-critique/compare/critique-v0.1.0...critique-v0.2.0) (2026-03-08)


### Features

* **api:** add createReviewer factory and integration tests ([63f559c](https://github.com/djm204/franken-critique/commit/63f559cf9f09f1408f2cc166c697a28cdf36f794))
* **breakers:** add circuit breakers ([729d83c](https://github.com/djm204/franken-critique/commit/729d83c45fb1cf5ac12810b9c39b3c0f9adf47ef))
* **errors:** add custom error hierarchy ([a443a1c](https://github.com/djm204/franken-critique/commit/a443a1cafe1b64ed90a69460c73d21831719cb75))
* **evaluators:** add deterministic evaluators ([71117be](https://github.com/djm204/franken-critique/commit/71117be2fd854e1ec4d7954e29cce100cbcc487d))
* **evaluators:** add heuristic evaluators ([ac48f04](https://github.com/djm204/franken-critique/commit/ac48f04edf96dfd46546fc10389dc58acbb7585c))
* **loop:** add CritiqueLoop engine ([b198ed0](https://github.com/djm204/franken-critique/commit/b198ed0edad8929761be0506b187902c4c29a386))
* **memory:** add LessonRecorder for self-correction memory ([48fc87b](https://github.com/djm204/franken-critique/commit/48fc87b1447edd4df726cc0b179f5e042789c4b5))
* **pipeline:** add CritiquePipeline evaluator orchestration ([2cd8693](https://github.com/djm204/franken-critique/commit/2cd869327b87b443abba90723454864f2fb0eb3e))
* **PR-34:** add Hono HTTP server for critique-as-a-service ([3cf2dc7](https://github.com/djm204/franken-critique/commit/3cf2dc77b8587dbc3a6160c9e9eccccafb53434f))
* **types:** add core types, port interfaces, and loop types ([c994bdd](https://github.com/djm204/franken-critique/commit/c994bdddbe900c15664359e2591ec2b94c98f657))


### Bug Fixes

* return next() in Hono middlewares to satisfy TS7030 ([c0ec44b](https://github.com/djm204/franken-critique/commit/c0ec44b2d6cb85e8ea401c47bd02eb3bddbd7c06))


### Miscellaneous

* add cursor AI rules ([a88719d](https://github.com/djm204/franken-critique/commit/a88719dda4b043c0c4ab8cd28a3a78ea1febbb7b))
* remove scaffold smoke test ([912aebf](https://github.com/djm204/franken-critique/commit/912aebf7e3844181071c63dde25c0a7b6323f966))
* **scaffold:** initialize @franken/critique project ([3ccf1bc](https://github.com/djm204/franken-critique/commit/3ccf1bc491af208827ab8f03ea5b594ecfe7bdda))


### Documentation

* add RAMP_UP.md for agent onboarding ([7d99f5a](https://github.com/djm204/franken-critique/commit/7d99f5a12366b615efb722aba2a88bf509e1774d))


### CI/CD

* add CI and release workflows ([0ec6424](https://github.com/djm204/franken-critique/commit/0ec64244f9d3dbc084086512b4c3eb32d5a2f3f0))
* upgrade to config-based release-please ([842523d](https://github.com/djm204/franken-critique/commit/842523d1e6c913f0a14e5fc0b5c6db68b48b462f))


### Tests

* add reviewer.ts factory unit tests (PR-09) ([1dd949c](https://github.com/djm204/franken-critique/commit/1dd949c4c6a637d0e84283cf7aae5a96d9076716))


### Refactoring

* **PR-21:** adopt @franken/types for shared type definitions ([b627e7f](https://github.com/djm204/franken-critique/commit/b627e7f00f622a5473b7b27029206b2ec74860d1))
