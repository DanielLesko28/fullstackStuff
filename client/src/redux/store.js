import {createStore, combineReducers} from 'redux'
import { inventoryReducer } from './inventory/inventorySlice'
import { cartReducer } from './cart/cartSlice'
import { currencyFilterReducer } from './currencyFilter/currencyFilterSlice'


const initialState = 28

//This will later go to own slice
const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case 'increment':
            return state + 1

            case 'decrement':
                return state - 1
        default:{
            return state
        }
    
    }
}

const reducers = {
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    counter: counterReducer
}

const rootReducer = combineReducers(reducers)


const store = createStore(rootReducer)

export default store
