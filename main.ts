type IsStudenet<T> = T extends { isStudent: true } ? true : false;

type A = IsTrudent<{ isStudent: true }>; // true
type B = IsTrudent<{ isStudent: false }>; // false

