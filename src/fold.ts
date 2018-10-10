import { curry3 } from './utils/curry';

const fold = (
    reducer: (acc: any, val: any, index?: number) => any,
    initialValue: any,
    data: any
) => {
    if (Array.isArray(data)) {
        return data.reduce(reducer, initialValue);
    }
};

export default curry3(fold);
