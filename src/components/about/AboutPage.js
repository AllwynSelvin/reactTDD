import React from "react";
import { Tabs, Tab } from 'react-bootstrap';
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

export const Uncontrolledtabs = () => (
  <div>
    <Tabs defaultActiveKey="react" id="uncontrolled-tab-example" style={styles}>
      <Tab eventKey="react" title="React">
      React is a way to build user interfaces. It is only concerned with what you see on the front-end. React makes user interfaces very easy to build by cutting each page into pieces. We call these pieces components.
      <a href="https://reactjs.org">Learn More</a>
      </Tab>
      <Tab eventKey="redux" title="Redux">
      Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
      <a href="https://redux.js.org">Learn More</a>
      </Tab>
      <Tab eventKey="react-router" title="React-router">
      Components are the heart of Reacts powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick.
      <a href="https://reacttraining.com/react-router/">Learn More</a>
      </Tab>
    </Tabs>
  </div>
);

export default AboutPage;
