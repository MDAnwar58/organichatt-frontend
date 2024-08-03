import { useDispatch } from "react-redux";
import {
  cart_product_count,
  cart_product_qty_decrement,
  cart_product_qty_increment,
  favorite_product_count,
  get_carts,
  get_favorites,
  get_product_for_modal,
  getCategoriesForManus,
  product_add_to_cart,
  product_add_to_favorite,
  remove_cart_item,
  remove_fovrite_item,
} from "../_api/action";
import useNotify from "../../common/components/notify";

export default function useCommonContext() {
  const { notify } = useNotify();
  const dispatch = useDispatch();
  const getAllCategoryForManus = () => {
    dispatch(getCategoriesForManus());
  };
  const getProductForModal = (id) => {
    dispatch(get_product_for_modal(id));
  };
  const getCarts = (userId) => {
    dispatch(get_carts(userId));
  };
  const cartProductQtyIncrement = (id, qty, productId, userId) => {
    dispatch(cart_product_qty_increment(id, qty, productId, userId, notify));
  };
  const cartProductQtyDecrement = (id, qty, userId) => {
    dispatch(cart_product_qty_decrement(id, qty, userId, notify));
  };
  const productAddToCart = (
    userId,
    productId,
    qty,
    weightId,
    sizeId,
    sizeNumberId
  ) => {
    const formData = {
      product_id: productId,
      qty: qty,
      weight_id: weightId,
      size_id: sizeId,
      size_number_id: sizeNumberId,
    };
    dispatch(product_add_to_cart(userId, formData, notify));
  };
  const cartProductCount = (userId) => {
    dispatch(cart_product_count(userId));
  };
  const removeCartItem = (id, userId) => {
    dispatch(remove_cart_item(id, userId, notify));
  };
  const getFavorites = (userId) => {
    dispatch(get_favorites(userId));
  };
  const productAddToFavorite = (userId, productId) => {
    const formData = {
      product_id: productId,
    };
    dispatch(product_add_to_favorite(userId, formData, notify));
  };
  const favoriteProductCount = (userId) => {
    dispatch(favorite_product_count(userId));
  };
  const removeFavoriteItem = (id, userId) => {
    dispatch(remove_fovrite_item(id, userId, notify));
  };

  return {
    getAllCategoryForManus,
    getProductForModal,
    getCarts,
    productAddToCart,
    cartProductQtyIncrement,
    cartProductQtyDecrement,
    cartProductCount,
    removeCartItem,
    getFavorites,
    productAddToFavorite,
    favoriteProductCount,
    removeFavoriteItem,
  };
}
