import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavigationWrap = styled.div`
  display: flex;
`;

const NavigationLogo = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 1em;
  margin-right: auto;
  font-weight: bold;
  font-size: 2em;
  color: rgba(245, 222, 179, 0.6);
`;

const Navigation = styled.ul`
  justify-content: flex-end;
  list-style: none;
  font-size: 1em;
`;

const NavigationItem = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  &:hover {
    color: #fff;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`;

export default () => (
  <NavigationWrap>
    <NavigationLogo>줍</NavigationLogo>
    <Navigation>
      <NavigationItem>
        <Link to="/events" activeStyle={{ color: "rgba(245, 222, 179, 0.6)" }}>
          Event
        </Link>
      </NavigationItem>
      <NavigationItem>
        <Link
          to="/airdrops/"
          activeStyle={{ color: "rgba(245, 222, 179, 0.6)" }}
        >
          AirDrop
        </Link>
      </NavigationItem>
      <NavigationItem>
        <Link
          to="/whitelists/"
          activeStyle={{ color: "rgba(245, 222, 179, 0.6)" }}
        >
          Whitelist
        </Link>
      </NavigationItem>
    </Navigation>
  </NavigationWrap>
);
