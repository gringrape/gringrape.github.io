import dateComparators from './dateComparators';

const context = describe;

describe('dateComparators', () => {
  describe('compareInAscendingOrder', () => {
    context('if first is earlier than second', () => {
      it('returns 1', () => {
        expect(dateComparators.compareInAscendingOrder(
          '2022-01-12',
          '2022-01-13',
        )).toBe(1);
      });
    });

    context('if first is equal to second', () => {
      it('returns 0', () => {
        expect(dateComparators.compareInAscendingOrder(
          '2022-01-12',
          '2022-01-12',
        )).toBe(0);
      });
    });

    context('if first is later than second', () => {
      it('returns -1', () => {
        expect(dateComparators.compareInAscendingOrder(
          '2022-01-13',
          '2022-01-12',
        )).toBe(-1);
      });
    });
  });
});
