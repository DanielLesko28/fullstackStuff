import React from 'react'
import { CurrencyFilter } from '../../redux/currencyFilter/CurenncyFilter';
import { Inventory } from '../../redux/inventory/Inventory';
import { useSelector, useDispatch } from 'react-redux';

const RecipesPage = () => {
    const inventory = useSelector((state) => state.inventory)

    const dispatch = useDispatch()

    console.log('inventory', inventory)
   
  
    return (
     <>
     <CurrencyFilter />
     <Inventory inventory={inventory} dispatch={dispatch} />
     </>
    );
}

export default RecipesPage