// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]


// ============= Your Code Here =============
// type Equal<X,Y> = (<T>()=>T extends X?1:2) extends <T>()=>T extends Y?1:2 ? true : false 
// type IsNever<T=never> = Equal<T,never>
type IsNever<T> = [T] extends [never] ? true : false 