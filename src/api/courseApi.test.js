import { getCourses } from "./courseApi";
import { handleResponse } from './apiUtils';

describe("check API calls", () => {
  it("success scenario", async function() {
    let resData = [{
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript"
    }];
    // global.fetch = jest.fn().mockImplementation(() => {
    //   var p = new Promise((resolve, reject) => {
    //     resolve({
    //       ok: true,
    //       status: 200,
    //       Id: "123",
    //       json: function() {
    //         return {
    //           id: 10,
    //           title: "Securing React Apps with Auth0",
    //           slug: "react-auth0-authentication-security",
    //           authorId: 11,
    //           category: "JavaScript"
    //         };
    //       }
    //     });
    //   });

    //   return p;
    // });

    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      statusText: "OK",
      ok: true,
      json: () => resData
    }));
    const response = await getCourses();
    // console.log("response---->1111", response);
    expect(response).toEqual(resData);
  });

  it("failure scenario 400", async function() {
    let errData = "Error returned";
    // global.fetch = jest.fn().mockImplementation(() => {
    //   var p = new Promise((resolve, reject) => {
    //     resolve({
    //       ok: false,
    //       status: 400,
    //       Id: "123",
    //       text: function() {
    //         return "Error returned";
    //       }
    //     });
    //   });

    //   return p;
    // });

    global.fetch = jest.fn().mockResolvedValue({
      status: 400,
      text: () => errData
    });
    const response = await getCourses();
    // console.log("response---->2222", response);
    // expect(response).toThrow(new Error(errData));
    expect(response).toEqual(new Error(errData));
    expect(response).toBe(new Error(errData));
  });

  it("incase sucess other than 400 and 200", async function() {
    let errData = "Other error Network Err";

    global.fetch = jest.fn().mockResolvedValue({
      status: 500,
      text: () => errData
    });
    const response = await getCourses();
    // console.log("response---->55555", response);
    expect(response).toEqual(new Error("Network response was not ok."));
  });



  it("incase of network failure scenario", async function() {
    let errData = "Network Err";
    // global.fetch = jest.fn().mockImplementation(() => {
    //   var p = new Promise((resolve, reject) => {
    //     resolve({
    //       ok: false,
    //       status: 200,
    //       error: "Network Err"
    //     });
    //   });

    //   return p;
    // });

    global.fetch = jest.fn().mockRejectedValue("Network Err");
    const response = await getCourses();
    // console.log("response---->55555", response);
    expect(response).toEqual(errData);
  });

  it("handleResponse", async () => {
    const result = await handleResponse({
      status: 500,
      text: () => "errData"
    });
    expect(result).toEqual(new Error("Network response was not ok."));
  })
});
