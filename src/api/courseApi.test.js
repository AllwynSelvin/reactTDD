import fetchMock from 'fetch-mock'
import { getCourses, saveCourse, deleteCourse } from './courseApi';
const baseUrl = process.env.API_URL + "/courses/";

let courses = [{
    id: 1,
    title: 'Securing React Apps with Auth0',
    slug: 'react-auth0-authentication-security',
    authorId: 1,
    category: 'JavaScript'
}];

describe("getCourses", () => {
    test("getCourses with 200 status", () => {
        fetchMock.get(baseUrl, { body: JSON.stringify(courses), status: 200 })
        let result = getCourses();
        result.then(res => {
            expect(res).toEqual(courses);
        })
            .catch(err => {
                console.log(err);
            })
        fetchMock.restore();
    });


    test("getCourses with 400 status", () => {
        fetchMock.get(baseUrl, { body: "An error occured in 400", status: 400 })
        let result = getCourses();
        result.then(res => {
            console.log(res);
            expect(res).toEqual(courses);
        })
            .catch(err => {
                expect(err).toEqual(new Error("An error occured in 400"))
            })
        fetchMock.restore();
    });

    test("getCourses with 404 status", () => {
        fetchMock.get(baseUrl, { status: 404 })
        let result = getCourses();
        result.then(res => {
            expect(res).toEqual(courses);
        })
            .catch(err => {
                expect(err).toEqual(new Error("Network response was not ok."))
            })
        fetchMock.restore();
    });

    test("getCourses with 503 status", () => {
        fetchMock.get(baseUrl, { status: 503 })
        let result = getCourses();
        result.then(res => {
            expect(res).toEqual(courses);
        })
            .catch(err => {
                expect(err).toEqual(new Error("Network response was not ok."))
            })
        fetchMock.restore();
    });
});

describe("Delete Courses", () => {
    test("Delete a course 200 status", () => {
        fetchMock.delete(baseUrl + 1, { body: [] })
        let result = deleteCourse(1);
        result.then(res => {
            expect(res).toEqual([]);
        })
        fetchMock.restore();
    })

    test("Delete a course 503 status", () => {
        fetchMock.delete(baseUrl + 1, { status: 503 })
        let result = deleteCourse(1);
        result.catch(err => {
            expect(err).toEqual(new Error("Network response was not ok."))
        })
    })
    fetchMock.restore();
})
