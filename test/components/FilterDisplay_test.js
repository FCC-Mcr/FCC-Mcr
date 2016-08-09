/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import FilterDisplay from '../../src/components/FilterDisplay';

describe('<FilterDisplay /> Component', () => {
    
    const wrapper = shallow(<FilterDisplay />);
    describe('Structure', () => {
       
       it('Renders a list element', () => {
          assert(wrapper.is('ul'), 'FilterDisplay is not a ul element') 
       });
        
    });
    
    
});