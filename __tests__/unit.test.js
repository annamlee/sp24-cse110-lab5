// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber(('(123) 456-7890'))).toBe(true);
});

test('1 800 372-5004 is a valid phone number', () => {
  expect(isPhoneNumber(('1 800 372-5004'))).toBe(true);
});

test('abcde is not a valid phone number', () => {
  expect(isPhoneNumber('abcde')).toBe(false);
});

test('1234abc is not a valid phone number', () => {
  expect(isPhoneNumber('1234abc')).toBe(false);
});

// isEmail tests
test('thomas@gmail.com is a valid email', () => {
  expect(isEmail(('thomas@gmail.com'))).toBe(true);
});

test('thomas123@gmail.com is a valid email', () => {
  expect(isEmail(('thomas123@gmail.com'))).toBe(true);
});

test('thomas 123@gmail.com is not a valid email', () => {
  expect(isEmail(('thomas 123@gmail.com'))).toBe(false);
});

test('thomasgmail.com is not a valid email', () => {
  expect(isEmail(('thomasgmail.com'))).toBe(false);
});

//isStrongPassword tests
test('hey123 is a strong password', () => {
  expect(isStrongPassword(('hey123'))).toBe(true);
});

test('superpassword is a strong password', () => {
  expect(isStrongPassword(('superpassword'))).toBe(true);
});

test('123 is not a strong password', () => {
  expect(isStrongPassword(('123'))).toBe(false);
});

test('@&*! is not a strong password', () => {
  expect(isStrongPassword(('@&*!'))).toBe(false);
});

//isDate tests
test('03/09/1679 is a date', () => {
  expect(isDate(('03/09/1679'))).toBe(true);
});

test('2/13/1982 is a date', () => {
  expect(isDate(('2/13/1982'))).toBe(true);
});

test('06/12/09 is not a date', () => {
  expect(isDate(('06/12/09'))).toBe(false);
});

test('July 2, 1909 is not a date', () => {
  expect(isDate(('July 2, 1909'))).toBe(false);
});

//isHexColor tests
test('#FFF is a hex color', () => {
  expect(isHexColor(('#FFFFFF'))).toBe(true);
});

test('eab676 is a hex color', () => {
  expect(isHexColor(('eab676'))).toBe(true);
});

test('#ab676 is not a hex color', () => {
  expect(isHexColor(('#ab676'))).toBe(false);
});

test('676s is not a hex color', () => {
  expect(isHexColor(('676s'))).toBe(false);
});