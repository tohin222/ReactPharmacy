import React from 'react';
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <div className="das_full">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 d_header">

                                <div className="d_logo">
                                    <img src="images/Pure-Pharmacy-Logo.png" height="40" width="60" alt="" /> <br />
                                    <p>MPI ID: 1485547485</p>
                                </div>
                                <div className="d_logo"><i className="fa fa-bell"></i> <br /> Notifications</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="form_full">
                    <div className="container">
                        <div className="row d_chart_1">
                            <div className="col-sm-6 ">
                                <div className="m">
                                    <Link to="/Preview">
                                    <i className="fas fa-chart-line fa-5x mt-5 mb-3"></i>
                                    </Link>
                                    <p>mSales</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="m">
                                <i className="fas fa-chart-bar fa-5x mt-5 mb-3"></i>
                                    <p>mExpense</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 d_chart_1">
                            <div className="col-sm-6 ">
                                <div className="m">
                                <i className="fas fa-globe fa-5x mt-5 mb-3"></i>
                                    <p>Web View</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="m">
                                    <Link to="/">
                                        <i className="fas fa-sign-out-alt fa-5x mt-5 mb-3"></i>
                                    </Link>
                                    <p>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Dashboard;



