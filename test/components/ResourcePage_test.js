/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import ResourcePage from '../../src/components/ResourcePage';


describe('<ResourcePage /> component',() => {
    
    const wrapper = shallow(<ResourcePage />);

    it('Renders a div with the class fill',() => {
       const expected = wrapper.is('div.fill');
       assert(expected, 'RecoursePage did not render a div with class fill');
    });
    
    it('Renders a RecourseList Component', () => {
      const actual = wrapper.find('ResourceList').length;
      const expected = 1;
      expect(actual).to.equal(expected, 'ResourcePage should render a RecourseList'); 
    });
    
});