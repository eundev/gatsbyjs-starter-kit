import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/global.scss";
import "./styles.scss";

const MainLayout = (props) => {
  return <div>{props.children}</div>;
};

export default MainLayout;
