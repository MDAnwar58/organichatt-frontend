"use client";
import React, { Fragment, useEffect, useState } from "react";
import OfferItem from "./components/OfferItem";
import useOfferContext from "./_context/OfferContext";
import { useSelector } from "react-redux";

export default function Offer() {
  const { getOffers } = useOfferContext();

  const [offers, setOffers] = useState([]);
  const [page] = useState(1);
  const [limit, setLimit] = useState(9);
  const [totalPage, setTotalPage] = useState(1);
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    getOffers();
  }, []);

  const Offers = useSelector((state) => state.offerData.offers);

  const getItems = (page, limit, items) => {
    setTotalPage(Math.ceil(items.length / limit));
    let array = [];
    for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
      array.push(items[i]);
    }
    return array;
  };
  useEffect(() => {
    setOffers(getItems(page, limit, Offers));
  }, [page, limit, Offers]);

  const onChangeLoadMore = (limitValue) => {
    if (page !== totalPage) {
      setBtnLoading(true);
      setTimeout(() => {
        setLimit((prev) => prev + limitValue);
        setBtnLoading(false);
      }, 500);
    }
  };
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-7">
          {offers.length > 0 &&
            offers.map((offer) => <OfferItem key={offer.id} offer={offer} />)}
        </div>
      </div>
      <div className="text-center pt-5 md:pb-0 pb-7">
        {offers.length > 9 && (
          <button
            type="button"
            className={`text-lg text-white ${
              btnLoading !== false
                ? "bg-green-300"
                : "bg-green-500/70 hover:bg-green-500/90"
            }  px-5 py-2 rounded-xl`}
            onClick={() => onChangeLoadMore(9)}
          >
            Load More
          </button>
        )}
      </div>
    </Fragment>
  );
}
