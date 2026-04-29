import React, { Fragment } from "react";
import Image from "../../common/components/Image";
export default function OrderItem({ order_item }) {
   // console.log(totalPrice);
   function isEmptyArray(arr) {
      return !arr || arr.length === 0;
   }

   function isEmptyString(str) {
      return !str || str.trim().length === 0;
   }

   function getTotalPrice(products) {
      const totalPrice = products.reduce(
         (total, product) => total + product.price,
         0
      );
      return totalPrice;
   }

   return (
      <li className="flex items-center justify-between mb-2">
         <div className="flex">
            <div className=" relative">
               <Image
                  src={order_item?.cart?.product?.image_url}
                  className="w-16 rounded-md"
                  alt="..."
               />
               {order_item?.cart?.product?.offers.length > 0
                  ? order_item?.cart?.product?.offers.map((offer, index) => (
                       <div key={index} className=" absolute top-0 right-0">
                          <div className="w-[1.55rem] h-4 flex justify-center items-center bg-red-500 text-white text-[9px] rounded-md">
                             -{offer?.percents}%
                          </div>
                       </div>
                    ))
                  : order_item?.cart?.product?.brand?.offers.length > 0
                  ? order_item?.cart?.product?.brand?.offers.map(
                       (offer, index) => (
                          <div key={index} className=" absolute top-0 right-0">
                             <div className="w-[1.55rem] h-4 flex justify-center items-center bg-red-500 text-white text-[9px] rounded-md">
                                -{offer?.percents}%
                             </div>
                          </div>
                       )
                    )
                  : order_item?.cart?.product?.category?.offers.length > 0
                  ? order_item?.cart?.product?.category?.offers.map(
                       (offer, index) => (
                          <div key={index} className=" absolute top-0 right-0">
                             <div className="w-[1.55rem] h-4 flex justify-center items-center bg-red-500 text-white text-[9px] rounded-md">
                                -{offer?.percents}%
                             </div>
                          </div>
                       )
                    )
                  : order_item?.cart?.product?.sub_category?.offers.length > 0
                  ? order_item?.cart?.product?.sub_category?.offers.map(
                       (offer, index) => (
                          <div key={index} className=" absolute top-0 right-0">
                             <div className="w-[1.55rem] h-4 flex justify-center items-center bg-red-500 text-white text-[9px] rounded-md">
                                -{offer?.percents}%
                             </div>
                          </div>
                       )
                    )
                  : null}
            </div>
            <div className="ps-2">
               <h4 className=" text-gray-700 text-md capitalize">
                  {order_item?.cart?.product?.name}
               </h4>
               <h3 className=" text-gray-500 text-sm">
                  {order_item?.cart?.qty}x
               </h3>
               {order_item?.cart?.product.id}
            </div>
         </div>
         <div className="flex items-center gap-x-1">
            <p className="text-lg font-semibold">
               {!isEmptyArray(order_item?.cart?.product?.offers)
                  ? !isEmptyArray(order_item?.cart?.product?.product_weights) &&
                    order_item?.cart?.weight_id !== null
                     ? order_item?.cart?.product?.product_weights.map(
                          (product_weight) =>
                             product_weight?.weight_id ===
                                order_item?.cart?.weight_id && (
                                <Fragment key={product_weight?.weight_id}>
                                   {cart?.product?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_weight?.price -
                                                  (product_weight?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_sizes
                       ) && order_item?.cart?.size_id !== null
                     ? order_item?.cart?.product?.product_sizes.map(
                          (product_size) =>
                             product_size?.size_id ===
                                order_item?.cart?.size_id && (
                                <Fragment key={product_size?.size_id}>
                                   {order_item?.cart?.product?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size?.price -
                                                  (product_size?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_size_numbers
                       ) && order_item?.cart?.size_number_id !== null
                     ? order_item?.cart?.product?.product_size_numbers.map(
                          (product_size_number) =>
                             product_size_number?.size_number_id ===
                                order_item?.cart?.size_number_id && (
                                <Fragment
                                   key={product_size_number?.size_number_id}
                                >
                                   {order_item?.cart?.product?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size_number?.price -
                                                  (product_size_number?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : order_item?.cart?.product?.offers.map(
                          (offer) =>
                             Math.round(
                                order_item?.cart?.product?.price -
                                   (order_item?.cart?.product?.price *
                                      offer.percents) /
                                      100
                             ) * order_item?.cart?.qty
                       )
                  : !isEmptyArray(order_item?.cart?.product?.brand?.offers)
                  ? !isEmptyArray(order_item?.cart?.product?.product_weights) &&
                    order_item?.cart?.weight_id !== null
                     ? order_item?.cart?.product?.product_weights.map(
                          (product_weight) =>
                             product_weight?.weight_id === cart?.weight_id && (
                                <Fragment key={product_weight?.weight_id}>
                                   {order_item?.cart?.product?.brand?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_weight?.price -
                                                  (product_weight?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_sizes
                       ) && order_item?.cart?.size_id !== null
                     ? order_item?.cart?.product?.product_sizes.map(
                          (product_size) =>
                             product_size?.size_id === cart?.size_id && (
                                <Fragment key={product_size?.size_id}>
                                   {order_item?.cart?.product?.brand?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size?.price -
                                                  (product_size?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_size_numbers
                       ) && order_item?.cart?.size_number_id !== null
                     ? order_item?.cart?.product?.product_size_numbers.map(
                          (product_size_number) =>
                             product_size_number?.size_number_id ===
                                order_item?.cart?.size_number_id && (
                                <Fragment
                                   key={product_size_number?.size_number_id}
                                >
                                   {cart?.product?.brand?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size_number?.price -
                                                  (product_size_number?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : order_item?.cart?.product?.brand?.offers.map(
                          (offer, index) => (
                             <span key={index}>
                                {Math.round(
                                   order_item?.cart?.product?.price -
                                      (order_item?.cart?.product?.price *
                                         offer.percents) /
                                         100
                                ) * order_item?.cart?.qty}
                             </span>
                          )
                       )
                  : !isEmptyArray(order_item?.cart?.product?.category?.offers)
                  ? !isEmptyArray(order_item?.cart?.product?.product_weights) &&
                    order_item?.cart?.weight_id !== null
                     ? order_item?.cart?.product?.product_weights.map(
                          (product_weight) =>
                             product_weight?.weight_id ===
                                order_item?.cart?.weight_id && (
                                <Fragment key={product_weight?.weight_id}>
                                   {order_item?.cart?.product?.category?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_weight?.price -
                                                  (product_weight?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_sizes
                       ) && order_item?.cart?.size_id !== null
                     ? order_item?.cart?.product?.product_sizes.map(
                          (product_size) =>
                             product_size?.size_id ===
                                order_item?.cart?.size_id && (
                                <Fragment key={product_size?.size_id}>
                                   {order_item?.cart?.product?.category?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size?.price -
                                                  (product_size?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_size_numbers
                       ) && order_item?.cart?.size_number_id !== null
                     ? order_item?.cart?.product?.product_size_numbers.map(
                          (product_size_number) =>
                             product_size_number?.size_number_id ===
                                order_item?.cart?.size_number_id && (
                                <Fragment
                                   key={product_size_number?.size_number_id}
                                >
                                   {order_item?.cart?.product?.category?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size_number?.price -
                                                  (product_size_number?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : order_item?.cart?.product?.category?.offers.map(
                          (offer) =>
                             Math.round(
                                order_item?.cart?.product?.price -
                                   (order_item?.cart?.product?.price *
                                      offer.percents) /
                                      100
                             ) * order_item?.cart?.qty
                       )
                  : !isEmptyArray(
                       order_item?.cart?.product?.sub_category?.offers
                    )
                  ? !isEmptyArray(order_item?.cart?.product?.product_weights) &&
                    order_item?.cart?.weight_id !== null
                     ? order_item?.cart?.product?.product_weights.map(
                          (product_weight) =>
                             product_weight?.weight_id ===
                                order_item?.cart?.weight_id && (
                                <Fragment key={product_weight?.weight_id}>
                                   {order_item?.cart?.product?.sub_category?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_weight?.price -
                                                  (product_weight?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_sizes
                       ) && order_item?.cart?.size_id !== null
                     ? order_item?.cart?.product?.product_sizes.map(
                          (product_size) =>
                             product_size?.size_id ===
                                order_item?.cart?.size_id && (
                                <Fragment key={product_size?.size_id}>
                                   {order_item?.cart?.product?.sub_category?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size?.price -
                                                  (product_size?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_size_numbers
                       ) && order_item?.cart?.size_number_id !== null
                     ? order_item?.cart?.product?.product_size_numbers.map(
                          (product_size_number) =>
                             product_size_number?.size_number_id ===
                                order_item?.cart?.size_number_id && (
                                <Fragment
                                   key={product_size_number?.size_number_id}
                                >
                                   {order_item?.cart?.product?.sub_category?.offers.map(
                                      (offer, index) => (
                                         <Fragment key={index}>
                                            {Math.round(
                                               product_size_number?.price -
                                                  (product_size_number?.price *
                                                     offer?.percents) /
                                                     100
                                            ) * order_item?.cart?.qty}
                                         </Fragment>
                                      )
                                   )}
                                </Fragment>
                             )
                       )
                     : order_item?.cart?.product?.sub_category?.offers.map(
                          (offer) =>
                             Math.round(
                                order_item?.cart?.product?.price -
                                   (order_item?.cart?.product?.price *
                                      offer.percents) /
                                      100
                             ) * order_item?.cart?.qty
                       )
                  : !isEmptyString(order_item?.cart?.product?.discount_price)
                  ? !isEmptyArray(order_item?.cart?.product?.product_weights) &&
                    order_item?.cart?.weight_id !== null
                     ? order_item?.cart?.product?.product_weights.map(
                          (product_weight) =>
                             product_weight?.weight_id ===
                                order_item?.cart?.weight_id && (
                                <Fragment key={product_weight?.weight_id}>
                                   {(product_weight?.price -
                                      product_weight?.discount_price) *
                                      order_item?.cart?.qty}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_sizes
                       ) && order_item?.cart?.size_id !== null
                     ? order_item?.cart?.product?.product_sizes.map(
                          (product_size) =>
                             product_size?.size_id ===
                                order_item?.cart?.size_id && (
                                <Fragment key={product_size?.size_id}>
                                   {(product_size?.price -
                                      product_size?.discount_price) *
                                      order_item?.cart?.qty}
                                </Fragment>
                             )
                       )
                     : !isEmptyArray(
                          order_item?.cart?.product?.product_size_numbers
                       ) && order_item?.cart?.size_number_id !== null
                     ? order_item?.cart?.product?.product_size_numbers.map(
                          (product_size_number) =>
                             product_size_number?.size_number_id ===
                                order_item?.cart?.size_number_id && (
                                <Fragment
                                   key={product_size_number?.size_number_id}
                                >
                                   {(product_size_number?.price -
                                      product_size_number?.discount_price) *
                                      order_item?.cart?.qty}
                                </Fragment>
                             )
                       )
                     : (order_item?.cart?.product?.price -
                          order_item?.cart?.product?.discount_price) *
                       order_item?.cart?.qty
                  : !isEmptyArray(order_item?.cart?.product?.product_weights) &&
                    order_item?.cart?.weight_id !== null
                  ? order_item?.cart?.product?.product_weights.map(
                       (product_weight) =>
                          product_weight?.weight_id ===
                             order_item?.cart?.weight_id && (
                             <Fragment key={product_weight?.weight_id}>
                                {product_weight?.price * order_item?.cart?.qty}
                             </Fragment>
                          )
                    )
                  : !isEmptyArray(order_item?.cart?.product?.product_sizes) &&
                    order_item?.cart?.size_id !== null
                  ? order_item?.cart?.product?.product_sizes.map(
                       (product_size) =>
                          product_size?.size_id ===
                             order_item?.cart?.size_id && (
                             <Fragment key={product_size?.size_id}>
                                {product_size?.price * order_item?.cart?.qty}
                             </Fragment>
                          )
                    )
                  : !isEmptyArray(
                       order_item?.cart?.product?.product_size_numbers
                    ) && order_item?.cart?.size_number_id !== null
                  ? order_item?.cart?.product?.product_size_numbers.map(
                       (product_size_number) =>
                          product_size_number?.size_number_id ===
                             order_item?.cart?.size_number_id && (
                             <Fragment
                                key={product_size_number?.size_number_id}
                             >
                                {product_size_number?.price *
                                   order_item?.cart?.qty}
                             </Fragment>
                          )
                    )
                  : order_item?.cart?.product?.price * order_item?.cart?.qty}
               TK
            </p>
            <div>
               {!isEmptyArray(order_item?.cart?.product?.offers) ||
               !isEmptyArray(order_item?.cart?.product?.brand?.offers) ||
               !isEmptyArray(order_item?.cart?.product?.category?.offers) ||
               !isEmptyArray(order_item?.cart?.product?.sub_category?.offers) ||
               !isEmptyString(order_item?.cart?.product?.discount_price) ? (
                  order_item?.cart?.weight_id === null &&
                  order_item?.cart?.size_id === null &&
                  order_item?.cart?.size_number_id === null ? (
                     <p className="text-sm line-through text-gray-400">
                        {order_item?.cart?.product?.price}TK
                     </p>
                  ) : !isEmptyArray(
                       order_item?.cart?.product?.product_weights
                    ) && order_item?.cart?.weight_id !== null ? (
                     order_item?.cart?.product?.product_weights.map(
                        (product_weight) =>
                           product_weight?.weight_id === cart?.weight_id && (
                              <p
                                 key={product_weight.id}
                                 className="text-sm line-through text-gray-400"
                              >
                                 {product_weight.price}TK
                              </p>
                           )
                     )
                  ) : !isEmptyArray(order_item?.cart?.product?.product_sizes) &&
                    order_item?.cart?.size_id !== null ? (
                     order_item?.cart?.product?.product_sizes.map(
                        (product_size) =>
                           product_size?.size_id === cart?.size_id && (
                              <p
                                 key={product_size.id}
                                 className="text-sm line-through text-gray-400"
                              >
                                 {product_size.price}TK
                              </p>
                           )
                     )
                  ) : (
                     !isEmptyArray(
                        order_item?.cart?.product?.product_size_numbers
                     ) &&
                     order_item?.cart?.size_number_id !== null &&
                     order_item?.cart?.product?.product_size_numbers.map(
                        (product_size_number) =>
                           product_size_number?.size_number_id ===
                              cart?.size_number_id && (
                              <p
                                 key={product_size_number.id}
                                 className="text-sm line-through text-gray-400"
                              >
                                 {product_size_number.price}TK
                              </p>
                           )
                     )
                  )
               ) : null}
            </div>
         </div>
      </li>
   );
}
