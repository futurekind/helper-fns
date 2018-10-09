import { curry2 } from './utils/curry';

const sort = (
    sortingFn: (a: any, b: any) => -1 | 0 | 1,
    data: any[]
): any[] => {
    return data.slice().sort(sortingFn);
};

export default curry2(sort);
