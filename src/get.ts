import { curry2 } from './utils/curry';

const _get = (
    key: string | number | Array<string | number>,
    data: object | any[]
) => {
    if (Array.isArray(key)) {
        if (key.length > 0) {
            const newData = data && data[key[0]];
            const newKey = key.slice(1);

            return _get(newKey, newData);
        }

        return data || null;
    }

    return data[key] || null;
};

export default curry2(_get);
