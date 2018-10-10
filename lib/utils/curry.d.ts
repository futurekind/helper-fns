export interface CurriedFunction2<T1, T2, R> {
    (x: T1): (data: T2) => R;
    (x: T1, data: T2): R;
}
export interface CurriedFunction3<T1, T2, T3, R> {
    (x: T1): CurriedFunction2<T2, T3, R>;
    (x: T1, y: T2): (data: T3) => R;
    (x: T1, y: T2, data: T3): R;
}
export declare const curry2: <T1, T2, R>(f: (t1: T1, t2: T2) => R) => CurriedFunction2<T1, T2, R>;
export declare const curry3: <T1, T2, T3, R>(f: (t1: T1, t2: T2, t3: T3) => R) => CurriedFunction3<T1, T2, T3, R>;
