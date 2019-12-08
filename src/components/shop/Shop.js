import React, { Component } from 'react'
import {get_shop} from '../../store/actions/shopAction'
import {connect}  from 'react-redux'

class Shop extends Component {
    componentDidMount(){
        this.props.get_shop()
      }
    render() {
        const {shops} = this.props
        return (
            <div>
                 <div className="container mt-3 mb-5">
                    <div className="card text-center">
                        <div className="card-header">
                        <h2>Shop & Shift</h2>
                        </div>
                    {shops.map(shop => (              
                        <div className="card-body"  key={shop.id}>
                            <h5 className="card-title">Shop Name: {shop.selectedStoreName}</h5>
                            <p className="card-text">Shift: {shop.selectedSession}</p>
                            <p className="card-text">Address: {shop.address}</p>
                            
                        </div>
                        ))}
                        </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    shops : state.shops.shops
  })
  
export default connect(mapStateToProps,{get_shop})(Shop);

