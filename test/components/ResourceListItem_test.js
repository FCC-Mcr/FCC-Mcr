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

describe('ResourceListItem component', () => {

  describe('Structure', () => {
    
    const wrapper = shallow(<ResourceListItem item={input}/>);
    
    it('Renders a li element with class resource-list-item', () => {
      assert(wrapper.is('li'), 'ResourceListItem did not render a li element');
      assert(wrapper.is('li.resource-list-item'), 'ResourceListItem li element did not have the class resource-list-item');
    });
    
    it('has an item prop', () => {
      expect(wrapper.instance().props.item).to.exist
    });
    
    describe('contents of list element', () => {
      
      it('Renders the right parts', () => {
        // title
        expect(wrapper.find('div.resource-list-item__title').length).to.equal(1, 'ResourceListItem should contain a div with class resource-list-item__title');
        // description
        expect(wrapper.find('div.resource-list-item__description').length).to.equal(1,'ResourceListItem should contain a div with class resource-list-item__description');
        // rating
        expect(wrapper.find('div.resource-list-item__rating').length).to.equal(1,'ResourceListItem should contain a div with class resource-list-item__rating');
        // link
        expect(wrapper.find('div.resource-list-item__link').length).to.equal(1,'ResourceListItem should contain a div with class resource-list-item__link');
        // tags
        expect(wrapper.find('div.resource-list-item__tags').length).to.equal(1, 'ResourceListItem should contain a div with class resource-list-item__tags');
      });
      
      it('Puts the right data in the right places', () => {
        expect(wrapper.find('div.resource-list-item__title').text()).to.equal(input.title, 'title div did not contain the text as item.title ');
        expect(wrapper.find('div.resource-list-item__description').text()).to.equal(input.description, 'description div did not contain the text as item.description ');
        expect(parseInt(wrapper.find('div.resource-list-item__rating').text())).to.equal(input.rating, 'rating div did not contain the text as item.rating');
        expect(wrapper.find('div.resource-list-item__link').text()).to.equal(input.uri, 'link div did not contain the text as item.uri ');
        expect(wrapper.find('div.resource-list-item__tags').text()).to.equal(input.tags.join(', '), 'tags div did not contain the text as item.tags ');
      });
    });
    
    
    
  });
    
   
    
});