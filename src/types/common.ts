/** Severity of an evaluation finding. */
export type Severity = 'critical' | 'warning' | 'info';

/** Overall verdict for a single evaluation or a full critique. */
export type Verdict = 'pass' | 'fail';

/**
 * Normalized score between 0 and 1.
 * 0 = worst, 1 = best.
 */
export type Score = number;

/** Unique identifier for a critique session. */
export type SessionId = string;

/** Unique identifier for a task being reviewed. */
export type TaskId = string;
