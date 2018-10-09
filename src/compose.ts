import { curry2 } from './utils/curry';

const compose = (fns: Function[], data: object | any[]) => {
    let d = data;
    for (let i = fns.length - 1; i >= 0; i--) {
        const fn = fns[i];
        d = fn(d);
    }

    return d;
};

export default curry2(compose);
