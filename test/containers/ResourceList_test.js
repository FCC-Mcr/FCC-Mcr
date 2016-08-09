/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import ResourceList from '../../src/containers/ResourceList';
import ResourceListItem from '../../src/components/ResourceListItem';

const inputList = [
  {title: 1, rating: 2, tags: ['one','two']},
  {title: 2, rating: 3, tags: ['one']},
  {title: 3, rating: 1, tags: ['two', 'three']}
];


describe('ResourceList component', () => {

  describe('Structure', () => {
    
    let wrapper = shallow(<ResourceList resources={inputList}/>);
    
    it('Renders a ul', () => {
      assert(wrapper.is('ul'));
    });
    
    it('Renders a ResourceListItem element for each Object in json array passed in when there are no state.filters.', () => {
      const inputLen = inputList.length;
      expect(wrapper.find('ResourceListItem').length).to.equal(inputLen, 'Did not find correct number of ResourceListItem elements');
    });
    
    it('Renders a filtered list when state.filters are present', () => {
      wrapper.setState({filters: ['two','three']});
      wrapper.update();
      expect(wrapper.find('ResourceListItem').length).to.equal(1, 'filtered list should only render one ResourceListItem element');
    });
    
    it('Renders a single li element with No Resources Found when no resources are passed in.', () => {
        wrapper = shallow(<ResourceList />)
        // list item is rendered.
        expect(wrapper.find('li').length).to.equal(1, 'One list item expected with empty array as input');
        // list item has correct text.
        assert(wrapper.find('li').text(), 'No Resources Found', 'Expected list item to have the text "No Resources Found" when resources array is empty');
    });
    
  });
  
  describe('Methods and State', () => {
    let wrapper = shallow(<ResourceList resources={inputList}/>);
    it('Stores resources array passed as prop to internal state', () => {
      expect(wrapper.state('resources')).to.equal(inputList, 'state.resources did not match input resources prop array')
    });
    
    it('Has a handleSort method that sorts state.resources by given field and direction', () => {
      wrapper.instance().handleSort('ASC', 'rating');
      wrapper.update();
      const expected = JSON.stringify(inputList.sort( (a,b) => a.rating - b.rating) );
      expect(JSON.stringify(wrapper.state().resources)).to.equal(expected);
    });
    
    it('Has a state.filters field that stores current filters words', () => {
      expect(wrapper.state().filters).to.exist
    });
    
    it('Has a HandleToggleFilter method that adds a filter word to state.filter if it isnt already present and removes it if it is.', () => {
      wrapper.instance().handleToggleFilter('test word');
      wrapper.update();
      expect(wrapper.state().filters).to.contain('test word', 'new filter word was not added to state.filters');
      
      wrapper.instance().handleToggleFilter('test word');
      wrapper.update();
      expect(wrapper.state().filters).to.not.contain('test word', 'filter word was not removed from state.filters');
    });
    
    it('Has a filterResources method that takes an array of resources and filters whose tags contain resources that match state.filters filters', () => {
      const inputArray = [{id: 1, tags: [1]}, {id: 2, tags: [1,2]}, {id:3, tags:[2]}];
      // no filters should return original array
      expect(wrapper.instance().filterResources(inputArray)).to.equal(inputArray);
      // filters of [1, 2] should return only id:2 object
      const expected = JSON.stringify([{id: 2, tags: [1,2]}])
      wrapper.setState({filters: [1,2]});
      wrapper.update();
      expect(JSON.stringify(wrapper.instance().filterResources(inputArray))).to.equal(expected);
    });
    
    it('Has a getPossibleTags method that takes an array of resource objects and returns an array of unique filter tags', () => {
      const returned = wrapper.instance().getPossibleTags(inputList);
      const expected = JSON.stringify(['two', 'three', 'one']);
      expect(returned.length).to.equal(3, 'should have retuned an array of three tags');
      expect(JSON.stringify(returned)).to.equal(expected, 'getPossibleTags did not return an array of unique tags from input Array')
    });
    
  });
    
   
    
});