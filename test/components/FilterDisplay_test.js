/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import FilterDisplay from '../../src/components/FilterDisplay';


const inputFilters = ['1','2','3'];

describe('<FilterDisplay /> Component', () => {
    
    const wrapper = shallow(<FilterDisplay allFilters={inputFilters}/>);
    describe('Structure', () => {
       
       it('Renders a list element', () => {
          const actual = wrapper.is('ul');
          assert(actual, 'FilterDisplay is not a ul element');
       });
       
       it('Renders a FilterDisplayItem item for each filter passed in.', () => {
           let expected, actual;
           const foundItems = wrapper.find('FilterDisplayItem');

           expected = inputFilters.length;
           actual = foundItems.length;
           expect(actual).to.equal(expected);
           
           
           /*  needs moving to filter itemtest
           // renders correct text.
           foundItems.forEach( (li, index) => {
               expected = inputFilters[index];
               actual = li.text();
               expect(actual).to.equal(expected,
               `FilterDisplay li element number ${index} should have rendered the index- ${index} item in the input array as text.`);
           });
           */
        });
        
        
       
       
        
    });
    
    
});