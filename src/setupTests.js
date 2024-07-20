// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { act } from 'react';

// Use `act` for wrapping asynchronous code
const asyncAct = async (callback) => {
  await act(async () => {
    await callback();
  });
};

global.asyncAct = asyncAct;
