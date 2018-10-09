import sort from '../sort';

describe('sort', () => {
    it('sorts array', () => {
        const data = ['Z', 'A', 'M'];

        const sortAsc = (a: string, b: string): -1 | 0 | 1 => {
            if (a > b) return 1;
            return 0;
        };

        const result = sort(sortAsc, data);

        expect(result).toEqual(['A', 'M', 'Z']);
    });
});
