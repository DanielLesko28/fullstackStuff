import React from 'react'
import { CurrencyFilter } from '../../redux/currencyFilter/CurenncyFilter';
import { Inventory } from '../../redux/inventory/Inventory';
import { useSelector, useDispatch } from 'react-redux';

const RecipesPage = () => {
    const inventory = useSelector((state) => state.inventory)
    const currencyFilter = useSelector((state) => state.CurrencyFilter)

    const dispatch = useDispatch()

    console.log('inventory', inventory)
   
  
    return (
     <>
     <CurrencyFilter dispatch={dispatch} currencyFilter={currencyFilter} />
     <Inventory inventory={inventory} dispatch={dispatch} />
     </>
    );
}

export default RecipesPage