// @franken/critique — MOD-06: Self-Critique & Reflection
// Public API barrel export

// Types — common
export type { Severity, Verdict, Score, SessionId, TaskId } from './types/common.js';

// Types — evaluation
export type {
  EvaluationInput,
  EvaluationFinding,
  EvaluationResult,
  CritiqueResult,
  Evaluator,
} from './types/evaluation.js';

// Types — contracts (port interfaces for sibling modules)
export type {
  SafetyRule,
  SandboxResult,
  ADRMatch,
  EpisodicTrace,
  CritiqueLesson,
  TokenSpend,
  EscalationRequest,
  GuardrailsPort,
  MemoryPort,
  ObservabilityPort,
  EscalationPort,
} from './types/contracts.js';

// Types — loop
export type {
  LoopConfig,
  CritiqueIteration,
  CorrectionRequest,
  CritiqueLoopResult,
  CritiqueLoopPass,
  CritiqueLoopFail,
  CritiqueLoopHalted,
  CritiqueLoopEscalated,
  LoopState,
  CircuitBreaker,
  CircuitBreakerResult,
} from './types/loop.js';

// Errors
export {
  CritiqueError,
  EvaluationError,
  CircuitBreakerError,
  EscalationError,
  IntegrationError,
  ConfigurationError,
} from './errors/index.js';
export type { CritiqueErrorOptions } from './errors/index.js';
