import React, { Fragment } from "react";
import classes from "./IslandCard.module.css";
import StarIcon from "@mui/icons-material/Star";
import island1 from "../../assets/island1.png";

const IslandCard = () => {
  return (
    <Fragment>
      <div className={classes.card}>
        <img src={island1} alt="image" />
        <span className={classes.title}>Karuvatti</span>
        <p>
          Kavaratti is the capital of the Union Territory of Lakshadweep having
          ...
        </p>

      
          <div className={classes.rating_container}>
            <div className={classes.rating}>
              <StarIcon />
              <span>4.5</span>
              <span>(1.5K Review)</span>
            </div>

            <button className={classes.btn}>Explore More</button>
          </div>
      
      </div>
    </Fragment>
  );
};

export default IslandCard;
