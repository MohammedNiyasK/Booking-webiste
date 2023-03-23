import React from "react";
import classes from "./IslandCardContainer.module.css";
import IslandCard from "../IslandCard/IslandCard";

const IslandCardContainer = () => {
  return (
    <div className={classes.container}>
      <IslandCard />
      <IslandCard />
      <IslandCard />
      <IslandCard />
      <IslandCard />
      <IslandCard />
      
    </div>
  );
};

export default IslandCardContainer;
