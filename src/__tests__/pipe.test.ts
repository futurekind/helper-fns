import pipe from '../pipe';
import filter from '../filter';
import map from '../map';
import fold from '../fold';
import sort from '../sort';

describe('pipe', () => {
    it('pipes values', () => {
        const data = [
            { name: 'Max', age: 23 },
            { name: 'Alice', age: 19 },
            { name: 'John', age: 43 },
        ];

        const isOld = x => x.age > 20;
        const plainName = x => x.name;
        const sortByAgeDesc = (a: { age: number }, b: { age: number }) => {
            if (a.age < b.age) return 1;
            return 0;
        };

        const toStr = (acc, val) =>
            acc.length === 0 ? `${val} stirbt bald` : acc;
        const sayIt = fold(toStr, '');

        const resuls = pipe(
            [sort(sortByAgeDesc), filter(isOld), map(plainName), sayIt],
            data
        );

        expect(resuls).toBe('John stirbt bald');
    });
});
