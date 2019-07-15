import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';
let wrapper;

beforeEach(() => { wrapper = shallow(<SideBar/>)});
describe('SideBar', () => {
    
    it('renders', () => {
        expect(wrapper).toHaveLength(1);
    });
});