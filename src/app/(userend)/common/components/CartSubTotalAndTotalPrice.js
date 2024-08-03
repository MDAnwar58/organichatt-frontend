import { array } from "prop-types";
import React from "react";

export default function CartSubTotalAndTotalPrice({ cart }) {
  return (
    <li className="pt-3 ">
      <b className="flex justify-between">
        <span>Total: - </span>
        <span>{cart?.price}tk</span>
      </b>
    </li>
  );
}
