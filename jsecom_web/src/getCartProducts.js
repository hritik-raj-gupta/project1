
import { updateCartValue } from "./updateCartValue.js";

export const getCartProductFromLS = () => {
    console.log("kkkkkkk")
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    console.log("hhh")
    return [];
  }
  cartProducts = JSON.parse(cartProducts);

  //update the cart button value
 updateCartValue(cartProducts);

  return cartProducts;
};













