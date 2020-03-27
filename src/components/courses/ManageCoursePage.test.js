import React from "react";
import { mount } from "enzyme";
import { authors, newCourse, courses } from "../../../tools/mockData";
import { ManageCoursePage } from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageCoursePage {...props} />);
}

describe('ManageCoursePage test Case', () => {
  //Mock Implementation useState
const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation((init) => [init, setState]);

it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const titleError = wrapper.find(".alert").first();
  expect(titleError.text()).toBe("Title is required.");
  const authorError = wrapper.find('.alert').at(1);
  expect(authorError.text()).toBe('Author is required');
  const categoryError = wrapper.find('.alert').last();
  expect(categoryError.text()).toBe('Category is required');
});

it('sets error when attemping to save an empty field with any 1 fields already filled', () => {
    const wrapper = render();
    const titleInput = wrapper.find('input').first();
    titleInput.simulate('change', { target: { value: 'a', name: 'title'}});
    wrapper.update();
    wrapper.find('form').simulate('submit');
    expect(wrapper.find('.alert').first().text()).toBe('Author is required');
    expect(wrapper.find('.alert').last().text()).toBe('Category is required');
});

it('sets error when attemping to save an empty field with any 2 fields already filled', () => {
  const wrapper = render();
  const titleInput = wrapper.find('input').first();
  titleInput.simulate('change', { target: { value: 'a', name: 'title'}});
  const authorInput = wrapper.find('select').at(0);
  authorInput.simulate('change', { target: { value: 1, name: 'authorId'}});
  wrapper.update();
  wrapper.find('form').simulate('submit');
  expect(wrapper.find('.alert').last().text()).toBe('Category is required');
});

it('form fill up', () => {
  const wrapper = render();
  const input = wrapper.find('input').first();
  input.simulate('change', {target: {value: 'abc', name: 'title'}});
  wrapper.update();
  expect(wrapper.find('input').first().props().value).toEqual('abc');
});

it('form submit trigger notification', () => {
  const wrapper = render();
  const inputSelect = wrapper.find('select').at(0);
  inputSelect.simulate('change', { target: { value: 1, name: 'authorId'}});
  wrapper.update();
  expect(wrapper.find('select').props().value).toBe(1);
});

xit("Fill Form", async () => {
  const wrapper = render();
  wrapper.find("input").first().simulate('change',
  { target: { value: 'abc', name : 'title' } });
  wrapper.find("select").simulate('change',
  { target: { value: 1, name : 'authorId' } });
  wrapper.find("input").last().simulate("change", 
  { target: { value : 'test', name : 'category'} } );
  wrapper.update();
  wrapper.find("form").simulate("submit");
  console.log(wrapper.debug());
  expect(wrapper.find('button').text()).toBe("Saving...");
});
});
