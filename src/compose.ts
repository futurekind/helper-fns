import { curry2 } from './utils/curry';

export enum Dir {
    RTL = -1,
    LTR = 1,
}

export const _compose = (dir: Dir) => (
    fns: Function[],
    data: object | any[]
) => {
    let d = data;

    if (dir === Dir.RTL) {
        for (let i = fns.length - 1; i >= 0; i--) {
            const fn = fns[i];
            d = fn(d);
        }
    }

    if (dir === Dir.LTR) {
        for (let i = 0; i < fns.length; i++) {
            const fn = fns[i];
            d = fn(d);
        }
    }

    return d;
};

export default curry2(_compose(Dir.RTL));
