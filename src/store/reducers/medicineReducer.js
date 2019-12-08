

// const initialState = {
//     medicines: [
//         {
//             id:1,
//             midicineName: 'Napa',
//             medicinePrice: 4,
//             medicineQuantity: 120
//         },
//         {
//             id:2,
//             midicineName: 'Ace',
//             medicinePrice: 5,
//             medicineQuantity: 220
//         },
//         {
//             id:3,
//             midicineName: 'Ace-Plus',
//             medicinePrice: 3,
//             medicineQuantity: 100
//         },
//     ]
// }

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,QNTY_UPDATE } from '../actions/types'


const initState = {
    items: [
        {id:1,title:'Napa',  price:10,quantity:78},
        {id:2,title:'Ace',  price:20,quantity: 58},
        {id:3,title:'Ace-Plus',price:1,quantity: 24},
        {id:4,title:'Peracitamol',  price:2,quantity:14},
        {id:5,title:'Renitin', price:6,quantity: 458},
        {id:6,title:'Neoteck',price:4,quantity: 78}
    ],
    addedItems:[],
    total: 0,
    qnty: 10

}
const medicineReducer= (state = initState,action)=>{
    if(action.type ===  QNTY_UPDATE){
        
       return{
        ...state,
        qnty: action.payload
       }

    }
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            // addedItem.quantity += 1 
            // addedItem.quantity = this.qnty
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total * 1.06
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total / 1.06
        }
  }
    
  else{
    return state
    }
    
}




export default medicineReducer