type GetReturnItem<T> = T extends (...args: any[]) => infer R ? R : never

type A = GetReturnItem<string[] => number>; // string
type B = GetReturnItem<number>; // number
type C = GetReturnItem<Custom>;
type D = GetReturnItem<C(a:string):boolean)> // boolean
