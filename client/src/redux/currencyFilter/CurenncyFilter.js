import { Button } from '@chakra-ui/react';
import { currenciesData } from '../data.js';
import { setCurrency } from './currencyFilterSlice.js';

export const CurrencyFilter = ({ currencyFilter, dispatch }) => {
  const onClickHandler = (currency) => {
    dispatch(setCurrency(currency));
  };

  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {
    return (
      <Button m={2}
        className={`currency-button ${
          currencyFilter === currency && 'selected'
        }`}
        style={currencyFilter === currency ? { backgroundColor: 'black' } : {}}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </Button>
    );
  }
};
