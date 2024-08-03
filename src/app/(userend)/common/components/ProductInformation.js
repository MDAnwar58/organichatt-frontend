"use client";
import React, { useRef, useState } from "react";
import FavoriteBtn from "./FavoriteBtn";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductColor from "./ProductColor";
import ProductWeight from "./ProductWeight";
import ProductSize from "./ProductSize";
import ProductSizeNumber from "./ProductSizeNumber";
import ProductIncrementDecrementInput from "./ProductIncrementDecrementInput";
import AddToCartBtn from "./AddToCartBtn";
import BuyNowBtn from "./BuyNowBtn";
import useCommonContext from "../_context/CommonContext";
import { getToken } from "../../../../services/token";

export default function ProductInformation({ product }) {
  const { productAddToCart, productAddToFavorite } = useCommonContext();
  const auth = getToken("auth_user_token");
  const [qty, setQty] = useState(1);
  const inputRef = useRef(null);

  const [weight, setWeight] = useState({});
  const [size, setSize] = useState({});
  const [sizeNumber, setSizeNumber] = useState({});
  return (
    <div className="flex justify-center items-center">
      <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
        <div className="flex items-center justify-between gap-6 mb-3">
          <div className="text">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
              {product?.title}
            </h2>
            <p className="font-normal text-base text-gray-500">
              {product?.name}
            </p>
          </div>
          <FavoriteBtn
            auth={auth}
            product={product}
            productAddToFavorite={productAddToFavorite}
          />
        </div>

        <div className=" text-lg font-medium">
          Available Quentity: - {product?.available_quantity}
        </div>
        <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
          <ProductPrice
            product={product}
            weight={weight}
            size={size}
            sizeNumber={sizeNumber}
          />
          <ProductRating />
        </div>

        {product?.colors?.length > 0 && (
          <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
        )}
        <ProductColor product={product} />
        {product?.weights?.length > 0 && (
          <p className="font-medium text-lg text-gray-900 mb-2">Weight (KG)</p>
        )}
        <ProductWeight
          product={product}
          Weight={weight}
          setWeight={setWeight}
        />
        {product?.product_sizes?.length > 0 && (
          <p className="font-medium text-lg text-gray-900 mb-2">Size</p>
        )}
        <ProductSize product={product} Size={size} setSize={setSize} />
        {product?.product_size_numbers?.length > 0 && (
          <p className="font-medium text-lg text-gray-900 mb-2">Size</p>
        )}
        <ProductSizeNumber
          product={product}
          SizeNumber={sizeNumber}
          setSizeNumber={setSizeNumber}
        />
        <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
          <ProductIncrementDecrementInput
            product={product}
            qty={qty}
            setQty={setQty}
            inputRef={inputRef}
          />
          <AddToCartBtn
            product={product}
            productAddToCart={productAddToCart}
            auth={auth}
            qty={qty}
            weight={weight}
            size={size}
            sizeNumber={sizeNumber}
          />
        </div>
        <BuyNowBtn />
      </div>
    </div>
  );
}
