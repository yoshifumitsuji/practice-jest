import {
  initializeCityDatabase,
  clearCityDatabase,
  initializeFoodDatabase,
  clearDoodDatabase,
  isCity,
  isValidCityFoodPair
} from './setup-and-teardown';

// beforeAll(async () => {
//   console.log('beforeAll');
//   await initializeCityDatabase();
// });

// afterAll(() => {
//   console.log('afterAll');
//   clearCityDatabase();
// });

beforeEach(async () => {
  await initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test('Vienna <3 veal', () => {
    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
  });

  test('San Juan <3 plantains', () => {
    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
  });
});
