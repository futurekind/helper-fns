import fold from '../fold';

describe('fold', () => {
    const reducer = (acc, x) => acc + x;
    const reduce = fold(reducer, 0);

    it('reduces arrays', () => {
        const data = [1, 2, 3];
        const result = reduce(data);

        expect(result).toBe(6);
    });
});
