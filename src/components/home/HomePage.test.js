import React from "react";
import HomePage from "./HomePage";
import { shallow } from "enzyme";

describe('renders home page', () => {
  const home = shallow(<HomePage />);
  it('mounts', () => {
    expect(home).toBeTruthy();
    console.log(home.debug());
  });
  it('displays home title', () => {
    expect(home.find('h1').text()).toEqual('Pluralsight Administration');
  });
  it('displays description content', () => {
    expect(home.find('p').text()).toEqual('React, Redux and React Router for ultra-responsive web apps.');
  });
  it('displays learn more button', () => {
    expect(home.find('Link')).toBeTruthy();
  });

});
