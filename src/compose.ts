import curry from './utils/curry';

const compose = <T>(fns: Function[], data: T) => {
    let d = data;
    for (let i = fns.length - 1; i >= 0; i--) {
        const fn = fns[i];
        d = fn(d);
    }

    return d;
};

export default curry(compose);
