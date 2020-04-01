import { getCourses, saveCourse, deleteCourse } from "./courseApi";
import axiosMock from 'axios'

jest.mock('axios');


describe("check API calls", () => {
  it("get course scenario",  () => {
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

  it("delete course scenario", async() => {
    let res = {
      status : 200,
      data : {}
    };
    axiosMock.delete.mockImplementationOnce(() => Promise.resolve(res));
    console.log(await deleteCourse(1));
    await expect(deleteCourse(1)).resolves.toEqual(res.data);   
    expect(axiosMock.delete).toHaveBeenCalledTimes(1)
  });

  xit("save course scenario", async function() {
    let res = {
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 2,
      category: "JavaScript"
  };
    
  axiosMock.put.mockImplementationOnce(() => Promise.resolve(res));
  expect(saveCourse(res)).resolves.toEqual(res);
  expect(axiosMock.put).toHaveBeenCalledTimes(1);

  });
  
});
