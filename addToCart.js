import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();
export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();
    const currentProdElement = document.querySelector(`#card${id}`);

    let quantity = currentProdElement.querySelector(".productQuantity").innerText;
    let price = currentProdElement.querySelector(".productPrice").innerText;

   price = price.replace("₹", "");
   price = Number(price*quantity);
   quantity = Number(quantity);

   let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);
   if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price*quantity);
    let updatedCart = {id, quantity, price};

    updatedCart = arrLocalStorageProduct.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;

            });
            console.log(updatedCart);

            
            localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
   }
   
   
   
   if (existingProd) {
    alert("duplicate");
    return false;
   }

   arrLocalStorageProduct.push({id, quantity, price});
   localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

   updateCartValue(arrLocalStorageProduct);
   };
