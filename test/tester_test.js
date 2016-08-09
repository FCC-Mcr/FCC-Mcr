import { assert, expect } from 'chai';
import { shallow } from 'enzyme';

describe('Test environment', () => {
    
    it('loads the test tools', () => {
       assert(true, true, 'Assert did not load');
       expect(true).to.equal(true, 'Expect did not load');
    });
    
});