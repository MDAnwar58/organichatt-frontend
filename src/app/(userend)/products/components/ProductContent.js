"use client";
import React, { Fragment, useEffect, useState } from "react";
import Product from "../../common/components/Product";
import Pagination from "../../common/components/Pagination";
import ShowingPaginationItems from "../../common/components/ShowingPaginationItems";
import useProductContext from "../_context/ProductsContext";
import { useSelector } from "react-redux";
import ProductDetailModal from "../../common/components/ProductDetailModal";
import useCommonContext from "../../root_api/_context/CommonContext";

export default function ProductContent() {
  const { getProducts } = useProductContext();
  const { getProductForModal, productAddToCart, productAddToFavorite } =
    useCommonContext();

  const [products, setProducts] = useState([]);
  const [length, setLength] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(3);
  const [totalPage, setTotalPage] = useState(0);
  const [productDetailsModalIsOpen, setProductDetailsModalIsOpen] =
    useState(false);

  useEffect(() => {
    getProducts();
  }, []);

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

  return (
    <Fragment>
      <div className="sm:grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 lg:gap-3 sm:gap-5 sm:px-0 xs:px-28 2xs:px-20 3xs:px-10 4xs:px-5 px-0">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className=" sm:mx-0 mx-auto sm:mb-0 mb-5">
              <Product
                setProductDetailsModalIsOpen={setProductDetailsModalIsOpen}
                getProductForModal={getProductForModal}
                product={product}
                productAddToCart={productAddToCart}
                productAddToFavorite={productAddToFavorite}
              />
            </div>
          ))
        ) : (
          <div className=" mx-auto">Products not found</div>
        )}
      </div>
      <div className=" sm:flex justify-between items-center pt-3 md:pb-0 pb-7 text-center">
        <ShowingPaginationItems
          page={page}
          totalPage={totalPage}
          length={length}
        />
        <Pagination
          onChangeHandlePagination={onChangeHandlePagination}
          totalPage={totalPage}
          page={page}
        />
      </div>

      <ProductDetailModal
        productDetailsModalIsOpen={productDetailsModalIsOpen}
        setProductDetailsModalIsOpen={setProductDetailsModalIsOpen}
      />
    </Fragment>
  );
}
