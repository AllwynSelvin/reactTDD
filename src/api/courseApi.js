import axios from 'axios';
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/courses/";

//console.log("baseURL-->", process.env);
export function getCourses(){
  return axios.get(baseUrl)
  .then((res) => {
      if(res.status == 200) { console.log(res); return res.data; }
      if(res.status === 400){
          const error = res.text();
          throw new Error(error);
      }
  })
  .catch((err) => console.log(err));
}

export function saveCourse(course){
  // console.log(course, course.id);
  const config = {
      method: course.id ? 'PUT' : 'POST',// POST for create, PUT to update when id already exists.
      url: baseUrl + (course.id || ''),
      headers: { "content-type": "application/json" },
      data: course
  }
  return axios(config)
  .then((res) => {
      if(res.status === 201) { console.log(res); return res.data; }
      if(res.status === 200) { console.log(res); return res.data; }
      if(res.status === 400){
          const error = res.text();
          throw new Error(error);
      }
  })
  .catch((err) => console.log(err));
  
}
export function deleteCourse(courseId){
  
  return axios.delete(baseUrl+ courseId)
  .then((res) => {
      if(res.status == 200) { return res.data; }
      if(res.status === 400){
          const error = res.text();
          throw new Error(error);
      }
  })
  .catch((err) => console.log(err));
}
