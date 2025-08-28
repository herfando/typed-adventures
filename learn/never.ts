type RemoveString<T> = T extends string ? never : T;
type RemoveString <T> = T extends string ? never : T;
type Result = RemmoveNumber<string | number | boolean>; // number | boolean
//hasil : number | boolean
const hasil: Result = true; // valid