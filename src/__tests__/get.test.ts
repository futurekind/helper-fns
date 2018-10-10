import get from '../get';

describe('get', () => {
    it('returns value of object key', () => {
        const data = {
            a: 'A',
            b: 'B',
        };

        expect(get('b', data)).toBe('B');
        expect(get('c', data)).toBe(null);
        expect(get(0, data)).toBe(null);
    });

    it('returns value of array index', () => {
        const data = ['A', 'B'];

        expect(get(0, data)).toBe('A');
        expect(get('1', data)).toBe('B');
        expect(get(2, data)).toBe(null);
        expect(get('A', data)).toBe(null);
    });

    it('returns value of path', () => {
        const data = {
            a: 'a',
            b: 'b',
            c: ['A', 'B', 'C'],
            d: {
                x: 'X',
                y: 'Y',
                z: 'Z',
            },
        };

        expect(get(['c', 1], data)).toBe('B');
        expect(get(['c', '1'], data)).toBe('B');
        expect(get(['c', 1, 'foo'], data)).toBe(null);
        expect(get(['c', 20], data)).toBe(null);
        expect(get(['aaaa', 20], data)).toBe(null);
    });
});
