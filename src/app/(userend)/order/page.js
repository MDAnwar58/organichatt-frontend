"use client";
import React, { Fragment, useEffect } from "react";
import ShippingInformation from "./components/ShippingInformation";
import OrderSummary from "./components/OrderSummary";
import OrderContext from "./_context/OrderContext";
import { getToken } from "../../../services/token";
import { useDispatch, useSelector } from "react-redux";

export default function OrderDetails() {
   const { getOrderSummaries } = OrderContext();
   const auth = getToken("auth_user_token");
   const dispatch = useDispatch();

   useEffect(() => {
      getOrderSummaries(auth?.user?.userId);
   }, []);
   return (
      <Fragment>
         <ShippingInformation />
         <OrderSummary />
      </Fragment>
   );
}
