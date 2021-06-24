import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";

const Template = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Template;
