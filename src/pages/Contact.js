import React from "react";
import { Helmet } from "react-helmet";

export default function Contact(props) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <h1>This is Contact page</h1>
    </div>
  );
}
