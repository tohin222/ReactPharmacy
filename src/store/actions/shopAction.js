import {GET_SHOP,ADD_SHOP} from './types'



export const get_shop= ()=>{
    return{
        type: GET_SHOP
    }
}
export const add_shop= (shop)=>{
    return{
        type: ADD_SHOP,
        payload: shop
    }
}

