import React, { Fragment } from "react";
import classes from "./Island.module.css";

const Island = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Island Stays</h2>
        <p>
          One can choose from a variety of beautiful coral islands which offers
          different staying experiences from thatched huts to luxurious <br/> modern
          properties. Every island offers a wider range of water sports and
          beach activities for you to enjoy.
        </p>
      </div>
    </Fragment>
  );
};

export default Island;
