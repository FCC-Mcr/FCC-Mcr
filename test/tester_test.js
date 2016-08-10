/* global it, describe  */
import { assert, expect } from 'chai';

describe('Test environment', () => {
    
  it('loads the test tools', () => {
    assert(true, true, 'Assert did not load');
    expect(true).to.equal(true, 'Expect did not load');
  });
    
});


/*  Follow test format
import test tools

import to test files

// For each unit test,
// answer these questions:
describe('Component we are testing testing', () => {
  
  // nest sub-divisions of tests

  it('What component aspect are you testing?', assert => {
  
    // Setup test variables
  
    // for expect
    const actual = 'What is the actual output?';
    const expected = 'What is the expected output?';
    expect(actual)to.equal(expected,
      'What should the feature do?');
      
    // for assert
    const actual = 'What is the actual output that evaulates to true?'
    assert(actual,
    'What should the feature do?')

  });
  
})

some helpers

chai cheat sheet
https://gist.github.com/yoavniran/1e3b0162e1545055429e

enzyme docs
http://airbnb.io/enzyme/docs/api/index.html

*/