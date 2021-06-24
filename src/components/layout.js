import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";

const Template = () => {
  const { children } = this.props;

  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Template;
