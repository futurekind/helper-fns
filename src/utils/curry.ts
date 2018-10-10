// See https://gist.github.com/donnut/fd56232da58d25ceecf1#gistcomment-1367885
export interface CurriedFunction2<T1, T2, R> {
    (fn: T1): (data: T2) => R;
    (fn: T1, data: T2): R;
}

interface CurriedFunction3<T1, T2, T3, R> {
    (fn1: T1): CurriedFunction2<T2, T3, R>;
    (fn1: T1, fn2: T2): (data: T3) => R;
    (fn1: T1, fn2: T2, data: T3): R;
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

export const curry3 = <T1, T2, T3, R>(
    f: (t1: T1, t2: T2, t3: T3) => R
): CurriedFunction3<T1, T2, T3, R> => {
    function fn(t1: T1): CurriedFunction2<T2, T3, R>;
    function fn(t1: T1, t2: T2): (t3: T3) => R;
    function fn(t1: T1, t2: T2, t3: T3): R;
    function fn(t1: T1, t2?: T2, t3?: T3): any {
        switch (arguments.length) {
            case 1:
                return curry2(function(t2: T2, t3: T3): R {
                    return f(t1, t2, t3);
                });
            case 2:
                return function(t3: T3): R {
                    return f(t1, t2, t3);
                };
            case 3:
                return f(t1, t2, t3);
        }
    }
    return fn;
};
