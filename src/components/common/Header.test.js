import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { render, fireEvent } from "react-testing-library";

// Note how with shallow render you search for the React component tag
xit("contains 3 NavLinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toEqual(3);
});

// Note how with mount you search for the final rendered HTML since it generates the final DOM.
// We also need to pull in React Router's memoryRouter for testing since the Header expects to have React Router's props passed in.
xit("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});

//Router Testing
describe(" Header Router Testing", () => {

  test("Renders About page", () => {
    let history = createMemoryHistory();
    let { container, getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    )
    expect(history.location.pathname).toEqual("/");
    expect(document.getElementById('home').hasAttribute("class")).toEqual(true);
    expect(document.getElementById('about').hasAttribute("class")).toEqual(false);

    fireEvent.click(getByText(/About/i))
    expect(history.location.pathname).toEqual("/about");

    fireEvent.click(getByText(/courses/i))
    expect(history.location.pathname).toEqual("/courses");
    console.log(container.innerHTML);
  });
});
