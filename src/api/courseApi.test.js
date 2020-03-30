import { fakeServer } from 'sinon';
import fetchMock from 'fetch-mock'
import { getCourses } from './courseApi';
const baseUrl = 'http://localhost:3001/courses/';

describe('async actions', () => {
let server;
beforeEach(() => {
server = fakeServer.create();
})

    test("test getCourses", () => {
        fetchMock.getOnce(baseUrl, {
            body: { todos: ['do something'] },
            headers: { 'content-type': 'application/json' }
          })
          
        console.log(getCourses());
    })
});