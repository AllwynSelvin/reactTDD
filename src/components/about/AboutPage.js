import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Tabcontentdetails from '../common/tabContentDetails';

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful
      libraries.
    </p>
    <Uncontrolledtabs />
  </div>
);

const styles = {
  padding: '0px',
};

const ReactDetails = () => (
    <div>
      <p>React is a way to build user interfaces. It is only concerned with what you see on the front-end. React makes user interfaces very easy to build by cutting each page into pieces. We call these pieces components.</p>
      <a href="https://reactjs.org">Learn More</a>
    </div>
);

const ReduxDetails = () => (
  <div>
      <p>Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.</p>
      <a href="https://redux.js.org">Learn More</a>
  </div>
);

const ReactRouter = () => (
  <div>
      <p>Components are the heart of Reacts powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!</p>
      <a href="https://reacttraining.com/react-router/">Learn More</a>
  </div>
);

export const Uncontrolledtabs = () => (
  <div>
    <Tabs defaultActiveKey="react" id="uncontrolled-tab-example" style={styles}>
      <Tab eventKey="react" title="React">
        <ReactDetails/>
      </Tab>
      <Tab eventKey="redux" title="Redux">
        <ReduxDetails/>
      </Tab>
      <Tab eventKey="react-router" title="React-router">
        <ReactRouter/>
      </Tab>
    </Tabs>
  </div>
);

export default AboutPage;
