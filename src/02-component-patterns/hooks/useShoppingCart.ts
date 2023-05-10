import React, { useState } from 'react'
import { onChangeArgs, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
      }>({});
    
      const onProductCountChange = ({ count, product }: onChangeArgs) => {
        setShoppingCart((oldShoppingCart) => {
       
            console.log(count)
          if (count === 0) {
            // delete oldShoppingCart[product.id];
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
          }
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          };
        });
      };


  return {shoppingCart, onProductCountChange}
}
