import { Button } from '@chakra-ui/react';
import { currenciesData } from '../data.js';
import { setCurrency } from './currencyFilterSlice.js';

export const CurrencyFilter = ({ currencyFilter, dispatch }) => {
  const onClickHandler = (currency) => {
    dispatch(setCurrency(currency));
  };

//   console.log('currencyFilter', currencyFilter)

const basedStyle = {
    backgroundColor: '#4B0082',
    color: 'white'
}



  return (
    <div id="currency-filters-container">
      <h3>Choose a currency</h3>
      {currenciesData.map(createCurrencyButton)}
    </div>
  );

  function createCurrencyButton(currency) {

    const conditionalStyle = currencyFilter === currency ? { opacity: '1' } : {opacity: '0.4'}
    const combinedStyle = {...basedStyle, ...conditionalStyle}

    return (
      <Button m={2}
        className={`currency-button ${
          currencyFilter === currency && 'selected'
        }`}
        style={combinedStyle}
        key={currency}
        onClick={() => onClickHandler(currency)}
      >
        {currency}
      </Button>
    );
  }
};
