/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import ResourceList from '../../src/components/ResourceList';
import ResourceListItem from '../../src/components/ResourceListItem';

const inputList = [
  {},
  {},
  {}
];


describe('ResourceList component', () => {

  describe('Structure', () => {
    
    const wrapper = shallow(<ResourceList resources={inputList}/>);
    
    it('Renders a ul', () => {
      assert(wrapper.is('ul'));
    });
    
    it('Renders a ResourceListItem element for each Object in json array passed in.', () => {
      const inputLen = inputList.length;
      expect(wrapper.find('ResourceListItem').length).to.equal(inputLen, 'Did not find correct number of ResourceListItem elements');
      
    });
    
    it('Renders a single li element with No Resources Found when no resources are passed in.', () => {
        wrapper.setProps({resources: []})
        // list item is rendered.
        expect(wrapper.find('li').length).to.equal(1, 'One list item expected with empty array as input');
        // list item has correct text.
        assert(wrapper.find('li').text(), 'No Resources Found', 'Expected list item to have the text "No Resources Found" when resources array is empty');
    });
    
  });
    
   
    
});