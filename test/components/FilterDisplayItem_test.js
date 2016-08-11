/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import FilterDisplayItem from '../../src/components/FilterDisplayItem';

describe('<FilterDisplayItem /> Component.', () => {

  const wrapper = shallow(<FilterDisplayItem item={'test item'}/>);

  it('Renders a li Element', () => {
    let expected, actual;
    
    expected = true;
    actual = wrapper.is('li');
    expect(actual).to.equal(expected, 'FilterDisplayItem should be a li item.');
  });
    
  it('renders text passed in ', () => {
    let expected, actual;

    expected = 'test item';
    actual = wrapper.text();
    expect(actual).to.equal(expected, 'FilterDisplayItem should render text sent in as item prop.')
  });

  it('has the class filter-display__tag when the active prop is false', () => {
    let expected, actual;
    wrapper.setProps({active: false});
    
    expected = true;
    actual = wrapper.is('.filter-display__tag');
    expect(actual).to.equal(expected, 'FilterDisplayItem should have the class filter-display__tag when prop active is false.');
  });

  it('has the class filter-display__tag--active when active prop is true', () => {
    let expected, actual;
    wrapper.setProps({active: true});
    
    expected = true;
    actual = wrapper.is('.filter-display__tag--active');
    expect(actual).to.equal(expected, 'FilterDisplayItem should have the class filter-display__tag--active when prop active is true.');
  });

});

