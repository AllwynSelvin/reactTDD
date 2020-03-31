import { getCourses } from "./courseApi";

describe("check API calls", () => {
  it("success scenario", async function() {
    let resData = {
      id: 10,
      title: "Securing React Apps with Auth0",
      slug: "react-auth0-authentication-security",
      authorId: 11,
      category: "JavaScript"
    };
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          status: 200,
          Id: "123",
          json: function() {
            return {
              id: 10,
              title: "Securing React Apps with Auth0",
              slug: "react-auth0-authentication-security",
              authorId: 11,
              category: "JavaScript"
            };
          }
        });
      });

      return p;
    });
    const response = await getCourses();
    //console.log("response---->1111", response);
    expect(response).toEqual(resData);
  });

  it("failure scenario", async function() {
    let errData = "Error returned";
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: false,
          status: 400,
          Id: "123",
          text: function() {
            return "Error returned";
          }
        });
      });

      return p;
    });
    const response = await getCourses();
    console.log("response---->2222", response);
    expect(response).toBe(errData);
    // expect(response.Id).toBe(1);
  });

  it("incase of network failure scenario", async function() {
    let errData = "Network Err";
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: false,
          status: 200,
          error: "Network Err"
        });
      });

      return p;
    });
    const response = await getCourses();
    console.log("response---->55555", response);
    expect(response).toEqual(errData);
  });
});
