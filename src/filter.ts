import { curry2 } from './utils/curry';
import isObj from './utils/isObj';

const filterObj = (
    pred: (val: any, index?: number) => boolean,
    obj: object
) => {
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

const filter = (
    pred: (val: any, index?: number) => boolean,
    data: object | any[]
) => {
    if (Array.isArray(data)) {
        return data.filter(pred);
    }

    if (isObj(data)) {
        return filterObj(pred, data);
    }

    return data;
};

export default curry2(filter);
