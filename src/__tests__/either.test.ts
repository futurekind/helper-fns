import either from '../either';
import sort from '../sort';

describe('either', () => {
    it('returns its right part when data is not null or not undefined', () => {
        const data = 'some data';

        const result = either('good', 'not good', data);

        expect(result).toBe('good');
    });

    it('returns its left part when data is null or undefined', () => {
        const result = either('good', 'not good');

        expect(result(null)).toBe('not good');
        expect(result(undefined)).toBe('not good');
    });

    it('appplies given data to right if this is a function', () => {
        const sortByName = sort((a, b) => {
            if (a > b) return 1;
            return 0;
        });
        const result = either(sortByName, 'not good', ['c', 'z', 'a']);

        expect(result).toEqual(['a', 'c', 'z']);
    });
});
