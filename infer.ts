type GetArrayItem<T> = T extends (infer U)[] ? U : T;

type A = GetArrayItem<string[]>; // string
type B = GetArrayItem<number[]>; // number