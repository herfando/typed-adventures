type GetReturnItem<T> = T extends (infer U)[] ? U : T;

type A = GetReturnItem<string[]>; // string
type B = GetReturnItem<number>; // number
type C = GetReturnItem<Custom>;

console.log(A);
console.log(B);