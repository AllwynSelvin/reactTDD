import { getCourses, saveCourse, deleteCourse } from "./courseApi";
import axiosMock from 'axios'
import axios from 'axios';
jest.mock('axios');

describe("check API calls", () => {
  it("get course scenario", () => {
    let res = {
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript"
    };
    axiosMock.get.mockImplementationOnce(() => Promise.resolve(res));
    expect(getCourses()).resolves.toEqual(res);
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
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

  xit("save course scenario", async function () {
    let res = {
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 2,
      category: "JavaScript"
    };

    const config = {
      method: 'PUT',
      config: {
        method: 'put',
        url: 'http://localhost:3001/courses/10',
        headers: { "content-type": "application/json" },
        data: res
      }
    }
    
  axios = jest.fn().mockResolvedValue({
        status: 200,
        data: res
      });
      let result = await saveCourse(res);
      expect(result).toEqual(res);
      // expect(axiosMock.put).toHaveBeenCalledTimes(1);

    });

});
