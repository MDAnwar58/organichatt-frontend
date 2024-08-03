"use client";
import React, { Fragment, useEffect, useState } from "react";
import Product from "../common/components/Product";
import Pagination from "../common/components/Pagination";
import ShowingPaginationItems from "../common/components/ShowingPaginationItems";
import useProductContext from "./_context/ProductsContext";
import ProductDetailModal from "../common/components/ProductDetailModal";
import useCommonContext from "../common/_context/CommonContext";
import { useSelector } from "react-redux";
import LoadMore from "./components/LoadMore";
import { isNull } from "util";

export default function Products() {
  const {
    getProducts,
    categorySlug,
    subCategorySlug,
    price,
    priceRange,
    getCategoryId,
  } = useProductContext();
  const { getProductForModal, productAddToCart, productAddToFavorite } =
    useCommonContext();

  const [products, setProducts] = useState([]);
  const [length, setLength] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalPage, setTotalPage] = useState(0);
  const [productDetailsModalIsOpen, setProductDetailsModalIsOpen] =
    useState(false);
  useEffect(() => {
    // setPage(localStorage.getItem("page"));
    const queryParams = new URLSearchParams(window.location.search);
    const category_slug = queryParams.get("category_slug");
    const sub_category_slug = queryParams.get("sub_category_slug");
    if (sub_category_slug !== null) {
      getCategoryId(sub_category_slug);
    }
    getProducts(
      category_slug !== null ? category_slug : categorySlug,
      sub_category_slug !== null ? sub_category_slug : subCategorySlug,
      price.min,
      price.max,
      priceRange.min,
      priceRange.max
    );
  }, [categorySlug, subCategorySlug, price, priceRange]);

  const Products = useSelector((state) => state.productData.products);

  const getItems = (page, limit, items) => {
    setLength(items.length);
    setTotalPage(Math.ceil(items.length / limit));
    let array = [];
    for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
      array.push(items[i]);
    }
    return array;
  };
  useEffect(() => {
    setProducts(getItems(page, limit, Products));
  }, [page, limit, Products]);

  const onChangeHandlePagination = (pageValue) => {
    if (pageValue === "next") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (pageValue === "prev") {
      if (page > 1) {
        setPage(page - 1);
      }
    } else {
      setPage(pageValue);
    }
  };
  const onLoadMore = (limitValue) => {
    setLimit((prev) => prev + limitValue);
  };
  return (
    <Fragment>
      {products.length > 0 ? (
        <div className="sm:grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-3 sm:gap-5 sm:px-0 xs:px-28 2xs:px-20 3xs:px-10 4xs:px-5 px-0">
          {products.map((product) => (
            <div key={product.id} className=" sm:mx-0 mx-auto sm:mb-0 mb-5">
              <Product
                setProductDetailsModalIsOpen={setProductDetailsModalIsOpen}
                getProductForModal={getProductForModal}
                product={product}
                productAddToCart={productAddToCart}
                productAddToFavorite={productAddToFavorite}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className=" text-center text-2xl font-semibold">
          Products not found
        </div>
      )}
      {products.length > 0 && (
        <Fragment>
          {/* // <div className=" sm:flex justify-between items-center pt-3 md:pb-0 pb-7 text-center">
        //   <ShowingPaginationItems
        //     page={page}
        //     totalPage={totalPage}
        //     length={length}
        //   /> */}
          {length > 3 && <LoadMore onLoadMore={onLoadMore} />}
          {/* <Pagination
          onChangeHandlePagination={onChangeHandlePagination}
          totalPage={totalPage}
          page={page}
        /> */}
          {/* // </div> */}
        </Fragment>
      )}

      <ProductDetailModal
        productDetailsModalIsOpen={productDetailsModalIsOpen}
        setProductDetailsModalIsOpen={setProductDetailsModalIsOpen}
      />
    </Fragment>
  );
}
