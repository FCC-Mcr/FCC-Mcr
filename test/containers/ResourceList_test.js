/* global it, describe, beforeEach  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import ResourceList from '../../src/containers/ResourceList';

const inputList = [
  {title: 1, rating: 2, tags: ['one','two']},
  {title: 2, rating: 3, tags: ['one']},
  {title: 3, rating: 1, tags: ['two', 'three']}
];


describe('<ResourceList /> Component', () => {

  describe('Structure', () => {
    
    let wrapper = shallow(<ResourceList resources={inputList}/>);
    
    it('Renders a ul', () => {
      const actual = wrapper.is('ul');
      assert(actual,
      'ResourceList should render a ul element { wrapper.is(ul) to evaluate to true }');
    });
    
    it('Renders a ResourceListItem element for each item in array passed in { with no state.filters }', () => {
      const expected = inputList.length;
      const actual = wrapper.find('ResourceListItem').length;
      expect(actual).to.equal(expected,
      'ResourceList should render a ResourceListItem component for each item in inputList { assuming no filters }');
    });
    
    it('Renders a filtered list when state.filters are present', () => {
      wrapper.setState({filters: ['two','three']});
      wrapper.update();
      
      const expected = 1;
      const actual = wrapper.find('ResourceListItem').length;
      expect(actual).to.equal(expected,
      'ResourceList should render a filtered ResourceListItem list. { 1 ResourceListItem should remain after filtering }');
    });
    
    it('Renders a single li element with No Resources Found when no resources are passed in.', () => {
        let expected, actual;
        
        wrapper = shallow(<ResourceList />);

        expected = 1;
        actual = wrapper.find('li').length; 
        expect(actual).to.equal(expected,
        'One li item expected with empty array as input');
        
        expected = 'No Resources Found';
        actual = wrapper.find('li').text();
        expect(actual).to.equal(expected,
        'Expected li item to have the text "No Resources Found" when resources array is empty');
    });
    
  });
  
  describe('Methods and State', () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<ResourceList resources={inputList}/>);
    })
    
    // STATE
    it('Has a state.resources field', () => {
      const actual = wrapper.state().resources;
      expect(actual).to.exist;
    });
    
    it('Stores resources array passed as prop to internal state', () => {
      const expected = inputList;
      const actual = wrapper.state('resources');
      expect(actual).to.equal(expected,
      'ResourceList state.resources should match input resources prop array on creation.')
    });
    
    it('Has a state.filters stores an array', () => {
      let actual;
      
      actual = wrapper.state().filters;
      expect(actual).to.exist
      
      actual = Array.isArray(actual);
      const expected = true;
      expect(actual).to.equal(expected,
      'state.filters should be an array')
    });
    
    // METHODS
    it('Has a handleSort method that sorts state.resources by given field and direction', () => {
      wrapper.instance().handleSort('DESC', 'rating');
      wrapper.update();
      
      const expected = inputList.sort( (a,b) => b.rating - a.rating); // manually sorted
      const actual = wrapper.state().resources;
      expect(actual).to.deep.equal(expected,
      `ResourceLists handleSort() method should sort state.resources DESCENDING by rating when called with ('DESC', 'rating') `);
    });
    
    it('Has a handleToggleFilter method that adds a filter word to state.filter if it isnt already present and removes it if it is.', () => {
      let expected, actual;

      wrapper.instance().handleToggleFilter('test word');
      wrapper.update();
      
      expected = 'test word';
      actual = wrapper.state().filters
      expect(actual).to.contain(expected,
      'handleToggleFilter should have added the test word to state.filters');
      
      wrapper.instance().handleToggleFilter('test word');
      wrapper.update();
      
      //expect to not find
      actual = wrapper.state().filters
      expect(actual).to.not.contain('test word', 'handleToggleFilter should have removed the test word from state.filters');
    });
    
    it('Has a filterResources method that takes an array of resources and filters it to those that have tags that match state.filters filters', () => {
      const inputArray = [{id: 1, tags: [1]}, {id: 2, tags: [1,2]}, {id:3, tags:[2]}];
      let expected, actual;
      // no filters should return original array
      expected = inputArray;
      actual = wrapper.instance().filterResources(inputArray);
      expect(actual).to.equal(expected,
      'Passing an array to filterResources method when there are no filters should return the original array.');
      
      // filters of [1, 2] should return only id:2 object
      wrapper.setState({filters: [1,2]});
      wrapper.update();
      
      expected = [ {id: 2, tags: [1, 2]} ]
      actual = wrapper.instance().filterResources(inputArray);
      expect(actual).to.deep.members(expected,
      'Passing an array to filterResources method with state.filters: [1,2] should return a filtered array.');
    });
    
    it('Has a getPossibleTags method that takes an array of resource objects and returns an array of unique filter tags', () => {
      let expected, actual;
      
      actual = wrapper.instance().getPossibleTags(inputList).length;
      expected = 3;
      expect(actual).to.equal(3,
      'should have retuned an array of three tags');
      
      actual = wrapper.instance().getPossibleTags(inputList)
      expected = ['two', 'three', 'one'];
      expect(actual).to.members(expected,
      'getPossibleTags did not return an array of unique tags from input Array');
    });
    
  });
    

    
});