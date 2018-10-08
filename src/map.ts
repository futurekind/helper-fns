import curry from './utils/curry';
import isObj from './utils/isObj';

const mapArray = <T>(mapper: (val: T, index: number) => T) => (arr: T[]): T[] =>
    arr.map(mapper);

const mapObject = (mapper: (val: any, index: number) => any) => (
    obj: object
): object => {
    return Object.keys(obj).reduce((acc, key, index) => {
        return {
            ...acc,
            [key]: mapper(obj[key], index),
        };
    }, {});
};

const map = <T>(mapper: (t: T) => T, data: T) => {
    if (Array.isArray(data)) {
        return mapArray(mapper)(data);
    }

    if (isObj(data)) {
        return mapObject(mapper)(data);
    }

    return data;
};

export default curry(map);
