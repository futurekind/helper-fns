import map from '../map';

describe('map', () => {
    it('maps array', () => {
        const double = x => x * 2;
        const m = map(double, [1, 2, 3]);
        expect(m).toEqual([2, 4, 6]);
    });

    it('maps objects', () => {
        const appendString = x => y => `${y} ${x}`;

        const m = map(appendString('cool'), {
            a: 'a',
            b: 'b',
        });

        expect(m).toEqual({
            a: 'a cool',
            b: 'b cool',
        });
    });
});
