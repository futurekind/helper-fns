import compose from '../compose';
import map from '../map';
import filter from '../filter';

describe('compose', () => {
    it('composes functions', () => {
        const data = [
            { name: 'Max', age: 23 },
            { name: 'Alice', age: 19 },
            { name: 'John', age: 43 },
        ];

        const isOld = x => x.age > 20;
        const plainName = x => x.name;

        const resuls = compose(
            [map(plainName), filter(isOld)],
            data
        );

        expect(resuls).toEqual(['Max', 'John']);
    });
});
