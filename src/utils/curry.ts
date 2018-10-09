export interface CurriedFunction2<T1, T2, R> {
    (fn: T1): (data: T2) => R;
    (fn: T1, data: T2): R;
}

export const curry2 = <T1, T2, R>(
    f: (t1: T1, t2: T2) => R
): CurriedFunction2<T1, T2, R> => {
    function fn(t1: T1): (t2: T2) => R;
    function fn(t1: T1, t2: T2): R;
    function fn(t1: T1, t2?: T2): any {
        switch (arguments.length) {
            case 1:
                return function(t2: T2): R {
                    return f(t1, t2);
                };
            case 2:
                return f(t1, t2);
        }
    }

    return fn;
};
