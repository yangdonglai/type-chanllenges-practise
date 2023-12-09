// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

type b = boolean | never;

// ============= Your Code Here =============
type TupleToUnion<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends never
  ? never
  : F | TupleToUnion<[...R]>
  : never 
