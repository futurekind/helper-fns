import fold from '../fold';

describe('fold', () => {
    const reducer = (acc, x) => acc + x;
    const sum = fold(reducer, 0);

    it('reduces arrays', () => {
        const data = [1, 2, 3];
        const result = sum(data);

        expect(result).toBe(6);
    });

    it('reduces objects', () => {
        const data = {
            some: 1,
            foo: 2,
            bar: 3,
        };

        const result = sum(data);

        expect(result).toBe(6);
    });

    it('reduces objects II', () => {
        const data = {
            some: 1,
            foo: 2,
            bar: 3,
        };

        const reducer = (acc, val) => [...acc, val];

        const result = fold(reducer, [], data);

        expect(result).toEqual([1, 2, 3]);
    });
});
