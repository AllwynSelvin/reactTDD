import { getCourses, saveCourse, deleteCourse } from "./courseApi";
import axios from 'axios';

jest.mock('axios', () => jest.fn());

describe("check API calls", () => {
  const baseUrl = "http://localhost:3001/courses/";

  it("get course scenario", async () => {
    let res = {
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript"
    };
    // axiosMock.get.mockImplementationOnce(() => Promise.resolve(res));
    // throwing error[ TypeError: Cannot read property 'mockImplementationOnce' of undefined]
    axios.get = jest.fn().mockResolvedValue({
      status: 200,
      data: res
    });
    const actual = await getCourses();
    expect(actual).toEqual(res);
    expect(axios.get).toHaveBeenCalledTimes(1)
  });

  it("delete course scenario", async () => {
    axios.delete = jest.fn().mockResolvedValue({
      status: 200,
      data: {}
    });
    let result = await deleteCourse();
    expect(result).toEqual({});
    expect(axios.delete).toHaveBeenCalledTimes(1);
  });

  it('should update the data with status 200', async () => {
    const response = {
      status: 200,
      data: {
        id: 10,
        title: "Securing React Apps with Auth0",
        slug: "react-auth0-authentication-security",
        authorId: 11,
        category: "JavaScript Test"
      }
    };
    const course = {
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript Test"
    };

    axios.mockResolvedValueOnce(response);
    const actual = await saveCourse(course);
    expect(actual).toEqual(course);
    expect(axios).toBeCalledWith({
      method: 'PUT',
      url: baseUrl + (course.id || ''),
      headers: { "content-type": "application/json" },
      data: course
    });
  });

  it('should throw error if the status is 400', async () => {
    const response = {
      status: 400,
      text: jest.fn().mockReturnValue('network')
    };

    const course = {
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript"
    };
    
    axios.mockResolvedValueOnce(response);
    const logSpy = jest.spyOn(console, 'log');
    const actual = await saveCourse(course);
    expect(actual).toBeUndefined();
    expect(axios).toBeCalledWith({
      method: 'PUT',
      url: baseUrl + (course.id || ''),
      headers: { "content-type": "application/json" },
      data: course
    });
    
    expect(response.text).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith(new Error('network'));
  });

  it('should add the data with status 201', async () => {
    const response = {
      status: 201,
      data: {
        id: 2,
        title: "Securing React Apps with Auth0",
        slug: "react-auth0-authentication-security",
        authorId: 11,
        category: "JavaScript"
      }
    };

    const course = {
      id: null,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript"
    };

    axios.mockResolvedValueOnce(response);
    const actual = await saveCourse(course);
    expect(actual).toEqual(response.data);

    expect(axios).toBeCalledWith({
      method: 'POST',
      url: baseUrl + (course.id || ''),
      headers: { "content-type": "application/json" },
      data: course
    });
  });

  it('should throw error if the status is 400', async () => {
    const response = {
      status: 400,
      text: jest.fn().mockReturnValue('network')
    };

    const course = {
      id: null,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript"
    };

    axios.mockResolvedValueOnce(response);
    const logSpy = jest.spyOn(console, 'log');

    const actual = await saveCourse(course);
    expect(actual).toBeUndefined();
    expect(axios).toBeCalledWith({
      method: 'POST',
      url: baseUrl + (course.id || ''),
      headers: { "content-type": "application/json" },
      data: course
    });

    expect(response.text).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith(new Error('network'));
  });

});
