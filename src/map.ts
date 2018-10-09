import { curry2 } from './utils/curry';
import isObj from './utils/isObj';

const mapArray = (mapper: (val: any, index?: number) => any) => (
    arr: any[]
): any[] => arr.map(mapper);

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

const map = (
    mapper: (val: any, index?: number) => any,
    data: any[] | object
) => {
    if (Array.isArray(data)) {
        return mapArray(mapper)(data);
    }

    if (isObj(data)) {
        return mapObject(mapper)(data);
    }

    return data;
};

export default curry2(map);
