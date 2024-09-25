// sum.test.js
import { expect, test } from 'vitest';
import { addNumbers } from '../src/index.js';

test('adds 1 + 2 to equal 3', () => {
  expect(addNumbers(1, 2)).toBe(3);
});