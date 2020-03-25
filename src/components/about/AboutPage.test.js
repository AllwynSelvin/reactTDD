import React from 'react';
import { shallow, mount } from 'enzyme';
import AboutPage from './AboutPage';

describe('About page test', () => {
    it('should render the component correctly', () => {
        const wrapper = shallow(<AboutPage />);
        expect(wrapper.find('h2').text()).toEqual('About');
        expect(wrapper.find('p')).toBeTruthy();
    });

    it('should render tab component', () => {
        const wrapper = shallow(<AboutPage/>);
        expect(wrapper.find('.nav')).toBeTruthy();
        expect(wrapper.find('.nav-item')).toBeTruthy();
    });

    it('should render tab-items', () => {
        const wrapper = mount(<AboutPage/>);
        expect(wrapper.find('a.nav-item')).toHaveLength(3);
        expect(wrapper.find('a.nav-item.active').text()).toEqual('React');
    });

    // it('should change the tab content on Click', () => {

    // });
});