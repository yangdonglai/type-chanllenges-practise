// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type TrimReg = ' '|'\n'|'\t';
type TrimLeft<S> = S extends `${TrimReg}${infer R}` ? TrimLeft<R> : S;
type TrimRight<S> = S extends `${infer R}${TrimReg}` ? TrimRight<R> : S;
type Trim<S extends string> = TrimRight<TrimLeft<S>> 

// type Space = ' ' | '\t' | '\n';

// type Trim<S extends string> = S extends `${Space}${infer T}` | `${infer T}${Space}` ? Trim<T> : S;