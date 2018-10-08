import filter from '../filter';

describe('filter', () => {
    const isEven = x => x % 2 === 0;
    it('filters array', () => {
        const data = [2, 6, 15, 13, 1, 8];

        const result = filter(isEven, data);

        expect(result).toEqual([2, 6, 8]);
    });

    it('filters objects', () => {
        const data = {
            a: 2,
            b: 7,
            c: 4,
            d: 9,
        };

        const result = filter(isEven, data);

        expect(result).toEqual({
            a: 2,
            c: 4,
        });
    });
});
