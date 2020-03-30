import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

fdescribe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Courses Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses }
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
  it("should update ", async() => {
    let course = {
      id: 1,
      title: "Securing React Apps with Auth0 - update",
      slug: "react-auth0-authentication-security",
      authorId: 1,
      category: "JavaScript"
    };
    fetchMock.mock('*', {
      headers: { "content-type": "application/json" },
      body: course
    });

    const expectedActions = [
      { type: types.BEGIN_API_CALL },
      { type: types.UPDATE_COURSE_SUCCESS, course }
    ];

    const store = mockStore({ courses: [] });
    return await store.dispatch(courseActions.saveCourse(course)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("createCourseSuccess", () => {
    beforeAll(() => {

    });
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };
    const action = courseActions.createCourseSuccess(course);
    expect(action).toEqual(expectedAction);

  });
  it('Should create a UPDATE_COURSE_SUCCESS action', () => {
    const course_update = {
      id: 1,
      title: "Securing React Apps with Auth0 - Updated",
      slug: "react-auth0-authentication-security",
      authorId: 1,
      category: "JavaScript"
    }
    const expectedAction = {
      type: types.UPDATE_COURSE_SUCCESS,
      course : course_update
    };
    
    const action = courseActions.updateCourseSuccess(course_update);
    expect(action).toEqual(expectedAction);
  });
});
