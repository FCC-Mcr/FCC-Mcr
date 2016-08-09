/* global it, describe  */
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';


import ResourcePage from '../../src/components/ResourcePage';


describe('<ResourcePage /> component',() => {
    
    const wrapper = shallow(<ResourcePage />);

    it('Renders a div with the class fill',() => {
       assert(wrapper.is('div.fill'), true, 'RecoursePage did not render a div with class fill');
    });
    
    it('Renders a RecourseList Component', () => {
       expect(wrapper.find('ResourceList').length).to.equal(1, 'ResourcePage did not render a RecourseList'); 
    });
    
});