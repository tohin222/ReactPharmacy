import {GET_SHOP,ADD_SHOP} from '../actions/types'

const initialState = {
    shops: [
       
    ]
}
const shopReducer = (state = initialState,action)=>{
    if(action.type ===  GET_SHOP){
       return{
        ...state,
       }

    }
    if(action.type ===  ADD_SHOP){
        return{
         ...state,
         shops: [action.payload,...state.shops]   
        }
 
     }
   
    
  else{
    return state
    }
    
}

export default shopReducer 

