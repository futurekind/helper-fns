export interface CurriedFunction2<T1, T2, R> {
    (fn: T1): (data: T2) => R;
    (fn: T1, data: T2): R;
}
export declare const curry2: <T1, T2, R>(f: (t1: T1, t2: T2) => R) => CurriedFunction2<T1, T2, R>;
