import identity from '../identity';

describe('identity', () => {
    it('returns its value', () => {
        expect(identity('some value')).toBe('some value');
        expect(identity(['some', 'array'])).toEqual(['some', 'array']);
    });
});
