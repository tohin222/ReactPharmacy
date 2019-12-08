import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../store/actions/medicineAction'
import Recipe from './Recipe'
import Shop from './shop/Shop'
class Cart extends Component{
    
    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
//    componentDidMount(){
//       let newItem =  this.props.items
//       console.log(newItem);
     
       
//    }
    // onQuantityChange = (event) => {
    //     this.setState({quantity: event.target.value});
    //   }
    render(){
        let {items} =  this.props
       
       return(
           <div>
                <div className="bpl_full">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="bpl">
                                <Link to="/Dashboard"
                                style={{color: '#fff',hover:'#fff',textDecoration: 'none'}}
                                >
                                MyBPL
                                    </Link>                           
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bpl"
                                style={{textAlign: 'right'}}
                                >
                                    <Link to="/Cart"
                                style={{color: '#000',hover:'#000',textDecoration: 'none'}}
                                >
                                <i class="fas fa-shopping-cart mr-5"></i>
                                    </Link>
                                    {' '}
                                <Link to="/Medicine"
                                style={{color: '#fff',hover:'#fff',textDecoration: 'none'}}
                                >
                                Back
                                    </Link>
                                  
                                    </div>
                            </div>
                        </div>
                      
                    </div>
                   
                </div>
               <Shop />
               <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                    <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Medicine Name</th>
                                    <th scope="col">Medicine Price</th>
                                    <th scope="col">Medicine Quantity</th>
                                    <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                            items.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                    <Link to="/cart"><i class="fas fa-plus-square fa-2x"
                                     onClick={()=>{this.handleAddQuantity(item.id)}}
                                     style={{cursor:'pointer',color: '#9CCC65'}}
                                     ></i></Link>
                            {' '} <span className="h2 ml-2 mr-2">{item.quantity}</span>
                                    {' '}  <Link to="/cart">
                                    <i class="fas fa-minus-square fa-2x" 
                                    onClick={()=>{this.handleSubtractQuantity(item.id)}}
                                    style={{cursor:'pointer',color: '#FFB300'}}
                                    ></i>    
                                        </Link>

                                    </td>
                                    <td>
                                    <i class="fas fa-trash-alt fa-2x"
                                     onClick={()=>{this.handleRemove(item.id)}}
                                     style={{cursor:'pointer',color: '#FF5733'}}
                                     ></i>
                                    </td>
                                </tr>       
                            ))
                        }
                                   
                                  
                                </tbody>
                                </table>
                    </ul>
                </div> 
                <Recipe />          
            </div>
           </div>
         
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.medicine.addedItems,
        
        addedItems: state.medicine.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)