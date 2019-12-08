import {combineReducers} from 'redux'
import medicineReducer from './medicineReducer'
import shopReducer from './shopReducer'


export default combineReducers({
     medicine: medicineReducer,
    shops: shopReducer,
})