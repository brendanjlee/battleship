import Ship from '../modules/Ship';

describe('ship functions', () => {
  let testCarrier;
  beforeEach(() => {
    testCarrier = Ship(5);
  });
  test('Test No Hit', () => {
    expect(testCarrier.isSunk()).toBe(false);
  });
  test('Test Single Hit', () => {
    testCarrier.hit();
    expect(testCarrier.isSunk()).toBe(false);
  });
  test('Test hit but no sink', () => {
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    expect(testCarrier.isSunk()).toBe(false);
  });
  test('Test sink', () => {
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    testCarrier.hit();
    expect(testCarrier.isSunk()).toBe(true);
  });
});
