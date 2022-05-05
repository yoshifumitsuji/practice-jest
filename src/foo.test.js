import { foo } from './foo';

jest.mock('./foo'); // this happens automatically with automocking

test('mock foo', () => {
  // foo is a mock function
  foo.mockImplementation(() => 42);
  foo();
  // > 42
});

const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
