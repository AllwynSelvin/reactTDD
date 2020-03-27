import React from "react";
import { Link } from "react-router-dom";
import { formatcurrencyToUS } from "../../utils/utils";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
    <br />
    <div id="currencyId">
      Buy now at&nbsp;
      <b>
        <span>{formatcurrencyToUS(50000)}</span>
      </b>
    </div>
  </div>
);

export default HomePage;
