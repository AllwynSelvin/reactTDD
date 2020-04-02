import React from 'react';
import { shallow, mount } from 'enzyme';
import AboutPage from './AboutPage';

xdescribe('About page test', () => {
    it('should render the component correctly', () => {
        const wrapper = shallow(<AboutPage />);
        expect(wrapper.find('h2').text()).toEqual('About');
        expect(wrapper.find('p')).toBeTruthy();
    });

    it('should render tab component', () => {
        const wrapper = shallow(<AboutPage />);
        expect(wrapper.find('.nav')).toBeTruthy();
        expect(wrapper.find('.nav-item')).toBeTruthy();
    });

    it('should render tab-items', () => {
        const wrapper = mount(<AboutPage />);
        expect(wrapper.find('a.nav-item')).toHaveLength(3);
        expect(wrapper.find('a.nav-item.active').text()).toEqual('React');
    });
});

describe('About page Session test', () => {
    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
          value: {
            getItem: jest.fn(),
            setItem: jest.fn(),
          },
          writable: true
        }); 
      });
    test("Local Storage setItem", () => {
        const wrapper = shallow(<AboutPage />);
        expect(window.localStorage.setItem).toHaveBeenCalledWith("test", 1);
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    });

    test("Local Storage getItem", () => {
        const wrapper = shallow(<AboutPage />);
        expect(window.localStorage.getItem).toHaveBeenCalledWith('test');
        expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    });

    test("Cookies called", () => {
        const wrapper = shallow(<AboutPage />);
        expect(document.cookie).toEqual("username=John Doe")
    })
});
