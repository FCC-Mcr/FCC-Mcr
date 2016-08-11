/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

import ResourceListItem from '../../src/components/ResourceListItem';

const input = {
    title: 'test title',
    description: 'test description',
    rating: 5,
    uri: 'test uri',
    tags: ['one', 'two']
};

describe('<ResourceListItem /> component', () => {

  describe('Structure', () => {
    
    const wrapper = shallow(<ResourceListItem item={input}/>);
    
    it('Renders a li element with class resource-list-item', () => {
      let actual;
      
      actual = wrapper.is('li');
      assert(actual,
      'ResourceListItem did not render a li element');
      
      actual = wrapper.is('li.resource-list-item');
      assert(actual,
      'ResourceListItem li element did not have the class resource-list-item');
    });
    
    it('Has an item prop', () => {
      const actual = wrapper.instance().props.item;
      expect(actual).to.exist;
    });
    
    describe('contents of list element', () => {
      
      it('Renders the right parts', () => {
        const expected = 1;
        let actual;
        
        //title
        actual = wrapper.find('div.resource-list-item__title').length;
        expect(actual).to.equal(expected, 'ResourceListItem should render a div with class resource-list-item__title');
        
        // description
        actual = wrapper.find('div.resource-list-item__description').length;
        expect(actual).to.equal(expected, 'ResourceListItem should render a div with class resource-list-item__description');
        
        // rating
        actual = wrapper.find('div.resource-list-item__rating').length;
        expect(actual).to.equal(expected,'ResourceListItem should render a div with class resource-list-item__rating');
        
        // link
        actual = wrapper.find('div.resource-list-item__link').length;
        expect(actual).to.equal(expected, 'ResourceListItem should render a div with class resource-list-item__link');
        // tags
        actual = wrapper.find('div.resource-list-item__tags').length;
        expect(actual).to.equal(expected, 'ResourceListItem should render a div with class resource-list-item__tags');
      });
      
      it('Puts the right data in the right places', () => {
        let actual, expected;
        
        // title
        actual = wrapper.find('div.resource-list-item__title').text();
        expected = input.title;
        expect(actual).to.equal(expected, 'title div should contain the text as item.title ');
        
        // description
        actual = wrapper.find('div.resource-list-item__description').text();
        expected = input.description;
        expect(actual).to.equal(expected, 'description div should contain the text as item.description ');
        
        // rating
        actual = wrapper.find('div.resource-list-item__rating').text();
        expected = input.rating;
        expect(actual).to.not.deep.equal(expected, 'rating div should contain the text as item.rating');
        
        //link
        actual = wrapper.find('div.resource-list-item__link').text();
        expected = input.uri;
        expect(actual).to.equal(expected, 'link div should contain the text as item.uri ');
        
        // tags
        actual = wrapper.find('div.resource-list-item__tags').text();
        expected = input.tags.join(', ');
        expect(actual).to.equal(expected, 'tags div should contain the text as item.tags ');
      });
    });
    
    
    
  });
    
   
    
});