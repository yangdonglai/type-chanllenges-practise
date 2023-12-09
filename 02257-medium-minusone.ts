// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]


// ============= Your Code Here =============
// type MinusResult = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8];
type MinusResult = ['9', '0', '1', '2', '3', '4', '5', '6', '7', '8'];
type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type ParesInt<S extends string> = S extends `${infer _ extends number}` ? _ : never;
type MinusOneStr<T extends string, Result extends string = '', flag extends boolean = true> = T extends `${infer Rest}${infer Last extends Digit}` ?
  `${MinusOneStr<Rest, MinusResult[ParesInt<Last>], false>}`
  : `${flag extends true ? T extends '1' ? '' : MinusResult[ParesInt<T>] : T}${Result}`
type MinusOne<T extends number> = ParesInt<MinusOneStr<`${T}`>>

type a = MinusOne<10>