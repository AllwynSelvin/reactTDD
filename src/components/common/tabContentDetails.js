import React from 'react';
// import { Tab } from 'react-bootstrap';
import PropTypes from "prop-types";

const Tabcontentdetails = () => {
    const content = [
        {
            id: 1,
            title: 'React',
            description: 'React is a way to build user interfaces. It is only concerned with what you see on the front-end. React makes user interfaces very easy to build by cutting each page into pieces. We call these pieces components.',
            link: 'https://reactjs.org'
        },
        {
            id: 2,
            title: 'Redux',
            description: 'Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.',
            link: 'https://redux.js.org'
        },
        {
            id: 3,
            title:'React-router',
            description: 'Components are the heart of Reacts powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick',
            link: 'https://reacttraining.com/react-router/'
        }
    ];
   return(
        <div>
            {content.map((item, index) => (
                <div Key={item.id} >
                    <p>{item.description}</p>
                    <a href={item.link}>Learn More</a>
                </div>
            ))}
        </div>
   ); 
};

Tabcontentdetails.propTypes = {
    content: PropTypes.array,
}; 

export default Tabcontentdetails;

