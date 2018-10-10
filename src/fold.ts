import { curry3 } from './utils/curry';
import isObj from './utils/isObj';

const fold = (
    reducer: (acc: any, val: any, index?: number) => any,
    initialValue: any,
    data: any
) => {
    if (Array.isArray(data)) {
        return data.reduce(reducer, initialValue);
    }

    if (isObj(data)) {
        return Object.keys(data).reduce((acc, key) => {
            const val = data[key];
            return reducer(acc, val);
        }, initialValue);
    }

    return data;
};

export default curry3(fold);
