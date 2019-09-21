import React from 'react';
import jest from 'jest'
import { sum } from './helpers';
import App from './App';


// AAA - Arrange, Act, Assert
// Arrange: section of unit test methods that initializes obj and sets the value of 
//data that is passed to the method.

// Act: invokes the method under test 
// with the arranged params

// Assertion: section verifies that the action of the 
//method under test behaves as expected

describe('sum function', () => {
  it('renders without crashing', () => {
    // Arrange
    const expected = 7;
    const actual = sum(5, 2);
    expect(actual).toBe(expected);
  });
})
