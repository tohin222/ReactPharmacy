import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../store/actions/medicineAction'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
componentDidMount(){
    console.log(this.props.items);
    
}
    render(){
        let {items} =  this.props

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Medicine Name</th>
                                    <th scope="col">Medicine Price</th>
                                    <th scope="col">Medicine Quantity</th>
                                    <th scope="col">Add</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                            items.map(item=>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                    <button to="/" className="btn btn-success" onClick={()=>{this.handleClick(item.id)}}>add</button>
                                    </td>
                                </tr>       
                            ))
                        }
                                   
                                  
                                </tbody>
                                </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.medicine.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)