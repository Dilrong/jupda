import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const RootIndex = ({ location }) => {
  const siteTitle = get(this, "props.data.site.siteMetadata.title");

  return (
    <Layout location={location}>
      <div>
        <Helmet title={siteTitle} />
        <div className="wrapper"></div>
      </div>
    </Layout>
  );
};

export default RootIndex;
