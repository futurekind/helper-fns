import curry from './utils/curry';
import isObj from './utils/isObj';

const filterObj = <T>(pred: (t: T) => boolean, obj: T) => {
    return Object.keys(obj).reduce((acc, key) => {
        const item = obj[key];
        const result = pred(item);

        if (result) {
            return {
                ...acc,
                [key]: item,
            };
        }

        return acc;
    }, {});
};

const filter = <T>(pred: (d: T) => boolean, data: T) => {
    if (Array.isArray(data)) {
        return data.filter(pred);
    }

    if (isObj(data)) {
        return filterObj(pred, data);
    }

    return data;
};

export default curry(filter);
