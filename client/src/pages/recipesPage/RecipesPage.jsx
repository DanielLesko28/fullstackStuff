import React from 'react'
import { CurrencyFilter } from '../../redux/currencyFilter/CurenncyFilter';
import { Inventory } from '../../redux/inventory/Inventory';
import { useSelector, useDispatch } from 'react-redux';
import { Cart } from '../../redux/cart/Cart';

const RecipesPage = () => {
    const inventory = useSelector((state) => state.inventory)
    const currencyFilter = useSelector((state) => state.CurrencyFilter)
    const cart = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    console.log('inventory', inventory)
   
  
    return (
     <>
     <CurrencyFilter dispatch={dispatch} currencyFilter={currencyFilter} />
     <Inventory inventory={inventory} dispatch={dispatch} />
     <Cart cart={cart} currencyFilter={currencyFilter} dispatch={dispatch}  />
     </>
    );
}

export default RecipesPage