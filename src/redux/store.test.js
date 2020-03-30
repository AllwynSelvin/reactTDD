import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";

describe('Should create Store', () => {
  let store, course, updatecourse;
    beforeAll( () => {
      store = createStore(rootReducer, initialState);
      course = {
      id: 1,
      title: "React Redux"
    };
      updatecourse = {
        id: 1,
        title: "React Redux Jest"
      };
    })
  test("Should handle creating courses", function() {
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);
    const createdCourse = store.getState().courses[0];
    expect(createdCourse).toEqual(course);
    });
  test('Should handle update course', () => {
    const action_update = courseActions.updateCourseSuccess(updatecourse);
    store.dispatch(action_update);
    const createdCourse_updated = store.getState().courses[0];
    expect(createdCourse_updated).toEqual(updatecourse);
  });
  test('Should handle update course', () => {
    const action_delete = courseActions.deleteCourseOptimistic(updatecourse);
    store.dispatch(action_delete);
    const createdCourse_updated = store.getState().courses;
    expect(createdCourse_updated).toHaveLength(0);
  });
  
});
 
