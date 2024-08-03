import React from "react";
import { GrView } from "react-icons/gr";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { FaCartPlus } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export function ViewIcon({ className }) {
  return <GrView className={className} />;
}
export function ViewFinderIcon({ className }) {
  return <HiOutlineViewfinderCircle className={className} />;
}
export function CartPlusIcon({ className }) {
  return <FaCartPlus className={className} />;
}
export function CartIcon({ className }) {
  return <FaCartShopping className={className} />;
}
export function FavoriteBorderIcon({ className }) {
  return <MdFavoriteBorder className={className} />;
}
export function FavoriteIcon({ className }) {
  return <MdFavorite className={className} />;
}
export function ArrowBackIcon({ className }) {
  return <IoIosArrowBack className={className} />;
}
export function ArrowForwardIcon({ className }) {
  return <IoIosArrowForward className={className} />;
}
export function CloseIcon({ className }) {
  return <IoMdClose className={className} />;
}
