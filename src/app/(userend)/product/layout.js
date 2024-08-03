import React, { Fragment } from "react";
import MainLayout from "../../MainLayout4";

export default function ProductDetailLayout({ breadcrmb, children }) {
  return (
    <Fragment>
      {breadcrmb}
      <div>{children}</div>
    </Fragment>
  );
}
