import { curry3 } from './utils/curry';

const either = (right: any, left: any, data?: any) => {
    if (data) {
        if (typeof right === 'function') {
            return right(data);
        }

        return right;
    } else {
        return left;
    }
};

export default curry3(either);
