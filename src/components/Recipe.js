import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping,qnty_update } from '../store/actions/medicineAction'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }
    myOnChange=e=>{
        const { qnty } = e.target.value
        this.props.qnty_update(qnty)
        // const { qnty } = this.props;
        // qnty(e.target.value)
    }
    render(){

        return(
            <div className="container">
              
                            <div class="card">
                            <div class="card-header">
                                Total Bill
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>With Percentage(.06$)</span>
                            </label>
                                </li>
                                <li class="list-group-item">
                                Total: {this.props.total} $
                                </li>
                            </ul>

                    </div>
                   
                    
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.medicine.addedItems,
        total: state.medicine.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
