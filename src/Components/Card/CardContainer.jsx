import React, { Fragment } from "react";
import classes from "./CardContainer.module.css";
import Card from "./Card";
import image1 from "../../assets/photo1.png";
import image2 from "../../assets/photo2.png";
import image3 from "../../assets/photo3.png";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CircleIcon from "@mui/icons-material/Circle";
import Button from "../UI/Button/Button";

const CardContainer = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
      </div>
      <div className={classes.selector}>
        <PanoramaFishEyeIcon className={classes.empty_circle} />
        <CircleIcon className={classes.filled_circle} />
        <PanoramaFishEyeIcon className={classes.empty_circle} />
       
      </div>
      <div className={classes.btn}>
      <Button />
      </div>

      
    </Fragment>
  );
};

export default CardContainer;
