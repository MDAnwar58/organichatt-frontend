"use client";
import React, { Fragment } from "react";
import { Checkbox, Label } from "flowbite-react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function OrderSummary() {
   const order_summaries = useSelector(
      (state) => state.OrderSummaryData.order_summaries
   );
   function isEmptyArray(arr) {
      return !arr || arr.length === 0;
   }

   function isEmptyString(str) {
      return !str || str.trim().length === 0;
   }

   // const getOffersPrice = (productOffers, order_item) => {
   //    let offerPrice = 0;
   //    productOffers.forEach((offer) => {
   //       offerPrice +=
   //          Math.round(
   //             parseFloat(order_item?.cart?.product?.price) -
   //                (parseFloat(order_item?.cart?.product?.price) *
   //                   parseFloat(offer?.percents)) /
   //                   100
   //          ) * parseFloat(order_item?.cart?.qty);
   //    });
   //    return offerPrice;
   // };

   // TODO: get total price start
   // let totalPrice = 0;
   // order_summaries.forEach(function (order_item) {
   //    !isEmptyArray(order_item?.cart?.product?.offers)
   //       ? !isEmptyArray(order_item?.cart?.product?.product_weights) &&
   //         order_item?.cart?.weight_id !== null
   //          ? order_item?.cart?.product?.product_weights.map(
   //               (product_weight) =>
   //                  product_weight?.weight_id === order_item?.cart?.weight_id &&
   //                  cart?.product?.offers.map(
   //                     (offer, index) =>
   //                        (totalPrice +=
   //                           Math.round(
   //                              parseFloat(product_weight?.price) -
   //                                 (parseFloat(product_weight?.price) *
   //                                    parseFloat(offer?.percents)) /
   //                                    100
   //                           ) * parseFloat(order_item?.cart?.qty))
   //                  )
   //            )
   //          : (totalPrice += getOffersPrice(
   //               order_item?.cart?.product?.offers,
   //               order_item
   //            ))
   //       : (totalPrice +=
   //            parseFloat(order_item.cart.product.price) * order_item.cart.qty);
   // });
   // console.log(totalPrice);

   const calculateOfferPrice = (price, offer) => {
      const discountPercentage = parseFloat(offer.percents) / 100 || 0;
      return Math.round(price * (1 - discountPercentage));
   };

   const getOffersPrice = (productOffers, order_item) =>
      productOffers.reduce((total, offer) => {
         const qty = parseFloat(order_item?.cart?.qty) || 1;
         const price = parseFloat(order_item?.cart?.product?.price) || 0;

         const offerPrice = calculateOfferPrice(price, offer);
         return total + offerPrice * qty;
      }, 0);

   const getPriceWithOffers = (offers, price) => {
      return offers.reduce(
         (total, offer) => total + calculateOfferPrice(price, offer) * qty,
         0
      );
   };

   const calculateProductPrice = (order_item) => {
      const { cart } = order_item;
      const { product, weight_id, qty } = cart;
      const { offers, product_weights, price, discount_price } = product;

      if (!isEmptyArray(offers)) {
         if (!isEmptyArray(product_weights) && weight_id !== null) {
            const matchingWeight = product_weights.find(
               (w) => w.weight_id === weight_id
            );
            if (matchingWeight) {
               return getPriceWithOffers(matchingWeight.price, offers);
            }
         }
         return getOffersPrice(offers, order_item);
      }
      const offerPrice =
         discount_price !== null ? price - discount_price : price;
      return offerPrice * qty;
   };

   const totalPrice = order_summaries.reduce(
      (total, order_item) => total + calculateProductPrice(order_item),
      0
   );

   console.log(totalPrice);
   // TODO: get total price end

   return (
      <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
         <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
            Order Summary
         </h2>
         <div className="mt-8">
            <form>
               <div>
                  {order_summaries.length > 0
                     ? order_summaries.map((order_item, index) => (
                          <Fragment key={index + 1}>
                             <OrderItem order_item={order_item} />
                          </Fragment>
                       ))
                     : null}
               </div>
               <div className="flex items-center justify-between py-8">
                  <p className="font-medium text-xl leading-8 text-black">
                     {order_summaries?.length} Items
                  </p>
                  <p className="font-semibold text-xl leading-8 text-green-600">
                     123
                  </p>
               </div>
               <div className="flex items-center gap-2 mb-3">
                  <Checkbox id="remember" defaultChecked />
                  <Label htmlFor="remember" className=" uppercase">
                     cash on delivery
                  </Label>
               </div>
               <button className="w-full text-center bg-green-400 rounded-sm py-4 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-green-500">
                  Order Place
               </button>
            </form>
         </div>
      </div>
   );
}
