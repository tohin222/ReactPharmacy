import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import Shop from '../shop/Shop'

class Medicine extends Component {
    render() {
        return (
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
                                <Link to="/Preview"
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
                    <div className="row">
                            <div className="col-md-12">
                                <Home />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

  
export default Medicine
