import React, { Fragment } from "react";

export const metadata = {
  title: "Offers |",
  description: "Generated by Organichatt Offers",
};

export default function OfferLayout({ breadcrmb, children }) {
  return (
    <Fragment>
      {breadcrmb}
      <div className=" w-full xl:px-20 lg:px-[5.5rem] 2md:px-[5.5rem] md:px-[3rem] sm:px-[1.5rem] 4xs:px-7 px-5 py-10">
        {children}
      </div>
    </Fragment>
  );
}
