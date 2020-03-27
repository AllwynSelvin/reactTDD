import React from "react";
import HomePage from "./HomePage";
import AboutPage from "../about/AboutPage";
import { mount } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "../App";

describe("renders home page", () => {
  const getComponent = path => {
    let comp = (
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );
    return comp;
  };

  it("mounts", () => {
    const home = mount(getComponent("/"));
    expect(home).toBeTruthy();
    //console.log(home.debug());
  });
  it("displays home title", () => {
    const home = mount(getComponent("/"));
    expect(home.find("h1").text()).toEqual("Pluralsight Administration");
  });
  it("displays description content", () => {
    const home = mount(getComponent("/"));
    expect(home.find("p").text()).toEqual(
      "React, Redux and React Router for ultra-responsive web apps."
    );
  });
  it("displays learn more button", () => {
    const home = mount(getComponent("/"));
    expect(home.find("Link")).toBeTruthy();
  });

  test("test the page renders home page component", () => {
    const home = mount(getComponent("/"));
    expect(home).toBeTruthy();
    expect(home.find(HomePage)).toHaveLength(1);
    expect(home.find(AboutPage)).toHaveLength(0);
  });

  test("test the page renders About page component", () => {
    const home = mount(getComponent("/about"));
    expect(home).toBeTruthy();
    expect(home.find(HomePage)).toHaveLength(0);
    expect(home.find(AboutPage)).toHaveLength(1);
  });

  test("test the page renders 404", () => {
    const home = mount(getComponent("/someotherURL"));
    expect(home).toBeTruthy();
    expect(home.find(HomePage)).toHaveLength(0);
    expect(home.find(AboutPage)).toHaveLength(0);
    expect(home.find("PageNotFound")).toHaveLength(1);
  });

  test("Check About link click", () => {
    let history = createMemoryHistory();
    let { getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    //console.log("history 1---->", history.location);
    expect(history.location.pathname).toEqual("/");
    fireEvent.click(getByText(/about/i));
    //console.log("history 2---->", history.location);
    expect(history.location.pathname).toEqual("/about");
  });

  test("Check the currency function returns as expected", () => {
    let history = createMemoryHistory();
    let { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    //console.log("herererer>>>>>>>>>>>>>>>", container.innerHTML);
    console.log(
      "herererer>>>>>>>>>>>>>>>222222",
      document.getElementById("currencyId").innerHTML
    );
  });
});
