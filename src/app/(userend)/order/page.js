"use client";
import React, { Fragment, useEffect } from "react";
import ShippingInformation from "./components/ShippingInformation";
import OrderSummary from "./components/OrderSummary";

export default function OrderDetails() {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <ShippingInformation />
      <OrderSummary />
    </Fragment>
  );
}
