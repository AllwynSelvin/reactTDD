import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";
import initialState from './initialState';

fdescribe('CourseReducer', () => {
  it('returns the initialState', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState.courses);
  });

  it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    // arrange
    const initialState = [
      {
        title: "A"
      },
      {
        title: "B"
      }
    ];
  
    const newCourse = {
      title: "C"
    };
  
    const action = actions.createCourseSuccess(newCourse);
  
    // act
    const newState = courseReducer(initialState, action);
  
    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");
  });
  
  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    // arrange
    const initialState = [
      { id: 1, title: "A" },
      { id: 2, title: "B" },
      { id: 3, title: "C" }
    ];
  
    const course = { id: 2, title: "New Title" };
    const action = actions.updateCourseSuccess(course);
  
    // act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == 1);
  
    // assert
    expect(updatedCourse.title).toEqual("New Title");
    expect(untouchedCourse.title).toEqual("A");
    expect(newState.length).toEqual(3);
  });
  
  it('should delete course when passed DELETE_COURSE_OPTIMISTIC', () => {
    //arrange
    const initialState = [
      {id: 1, title: 'A'},
      {id: 2, title: 'B'},
      {id: 3, title: 'C'}
    ];
  
    const course = { id: 2, title: 'B'};
    const action = actions.deleteCourseOptimistic(course);
  
    //act
    const newState = courseReducer(initialState, action);
    expect(newState.length).toEqual(2);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('C');
  });
  
});