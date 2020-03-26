import React from "react";
import App from "./App";
import { mount } from "enzyme";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { render, fireEvent } from "react-testing-library";

describe("App component", () => {
  const history = createMemoryHistory();
  let wrapper = mount(
    <Router history={history}>
      <App />
    </Router>
  );
  test("Renders App component", () => {
    expect(wrapper.exists).toBeTruthy();
    expect(history.location.pathname).toBe("/");
  });

  test("Renders About page", () => {
    let history = createMemoryHistory();
    let { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    fireEvent.click(getByText(/about/i));
    expect(container.innerHTML).toEqual(
      '<div class="container-fluid"><nav><a style="" id="home" href="/">Home</a> | <a id="courses" href="/courses">Courses</a> | <a id="about" href="/about" aria-current="page" class="active" style="color: rgb(241, 91, 42);">About</a></nav><div><h2>About</h2></div><div class="Toastify"></div></div>'
    );
    expect(history.location.pathname).toEqual("/about");
    fireEvent.click(getByText(/home/i));
    expect(history.location.pathname).toEqual("/");
  });
});
