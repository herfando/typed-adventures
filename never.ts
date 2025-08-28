type RemoveString<T> = T extends string ? never : T;
type RemoveNumber <T> = T extends string ? never : T;
type FirstType = string | number | boolean;
const hasilPertama: FirstType = 20; // valid

type Result = RemoveNumber<FirstType>;
//hasil : number | boolean
const hasil2: Result = true; // valid