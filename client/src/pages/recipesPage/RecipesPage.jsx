import React from 'react'
import { CurrencyFilter } from '../../redux/currencyFilter/CurenncyFilter';
import { Inventory } from '../../redux/inventory/Inventory';
import { useSelector, useDispatch } from 'react-redux';

const RecipesPage = () => {
    const inventory = useSelector((state) => state.inventory)

    console.log('inventory', inventory)
   
  
    return (
     <>
     <CurrencyFilter />
     <Inventory />
     </>
    );
}

export default RecipesPage