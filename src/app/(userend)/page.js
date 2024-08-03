"use client";
import { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Banner from "./components/Banner";
import OurCategory from "./components/OurCategory";
import OfferBanner from "./components/OfferBanner";
import ProductCollection from "./components/ProductCollection";
import ProductDetailModal from "./common/components/ProductDetailModal";
import useHomeContext from "./_context/HomeContext";
import useCommonContext from "./common/_context/CommonContext";

export default function Home() {
  const { getBanner, getOurCategories, getOfferBanners, getCollections } =
    useHomeContext();
  const { getProductForModal, productAddToCart, productAddToFavorite } =
    useCommonContext();
  const [someValue, setSomeValue] = useState("initial value");
  const [productDetailsModalIsOpen, setProductDetailsModalIsOpen] =
    useState(false);

  useEffect(() => {
    getBanner();
    getOurCategories();
    getOfferBanners();
    getCollections();
  }, []);

  return (
    <main>
      <Banner />
      <div className=" xl:px-20 lg:px-[5.5rem] 2md:px-[5.5rem] md:px-[3rem] sm:px-[1.5rem] 4xs:px-7 px-5 sm:py-3 py-1">
        <OurCategory />
        <OfferBanner someValue={someValue} />
        <ProductCollection
          someValue={someValue}
          setProductDetailsModalIsOpen={setProductDetailsModalIsOpen}
          getProductForModal={getProductForModal}
          productAddToCart={productAddToCart}
          productAddToFavorite={productAddToFavorite}
        />

        <ProductDetailModal
          productDetailsModalIsOpen={productDetailsModalIsOpen}
          setProductDetailsModalIsOpen={setProductDetailsModalIsOpen}
        />
      </div>
    </main>
  );
}
