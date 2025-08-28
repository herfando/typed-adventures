type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type fungsiD = (a: string, b: number) => boolean;
const implementasiFungsiD: fungsiD = (a, b) => '20';


type A = GetReturnItem<string[] => number>; // string
type B = GetReturnItem<number>; // number
type C = GetReturnItem<Custom>;
type D = GetReturnItem<C(a:string):boolean)> // boolean
