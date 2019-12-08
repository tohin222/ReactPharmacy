import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom'
import {add_shop} from '../store/actions/shopAction'
import {connect}  from 'react-redux'
import TextInputGroup from './medicine/TextInputGroup';
import PropTypes from 'prop-types'
import uuid from 'uuid'

const options = [
    { value: 'Sadek Medical Store', label: 'Sadek Medical Store' },
    { value: 'Rafiq Medical Store', label: 'Rafiq Medical Store' },
    { value: 'tohin medical store', label: 'tohin medical store' },
    { value: 'Galib medical store', label: 'Galib medical store' },
  ];
  const sessions = [
    { value: 'Morning', label: 'Morning' },
    { value: 'Evening', label: 'Evening' },
  ];
class Preview extends React.Component {
    state = {
        selectedStoreName: '',
        selectedSession: '',
        address: '',
        errors: {}
      };
      onSubmit = (e) => {
        e.preventDefault();
        const {  selectedStoreName,selectedSession,address  } = this.state;
        if (selectedStoreName === '') {
            this.setState({ errors: { selectedStoreName: 'Name is required' } });
            return;
          }
      
          if (selectedSession === '') {
            this.setState({ errors: { selectedSession: 'Email is required' } });
            return;
          }
      
          if (address === '') {
            this.setState({ errors: { address: 'Phone is required' } });
            return;
          }
        const newshop = {
            id: uuid(),
            selectedStoreName,
            selectedSession,
            address,
            
        };
    this.props.add_shop(newshop)
        //// SUBMIT CONTACT ////
    
        // Clear State
        this.setState({
            selectedStoreName: '',
            selectedSession: '',
            address: '',
            errors: {}
        });
    console.log(newshop)
        this.props.history.push('/Medicine');
      };
    
      myChange= e =>{
          this.setState({
            [e.target.name]: e.target.value
          })
      }
    render() {
        const { selectedStoreName,selectedSession,address,errors } = this.state;
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
                                <Link to="/Dashboard"
                                style={{color: '#fff',hover:'#fff',textDecoration: 'none'}}
                                >
                                Back
                                    </Link>
                                  
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form_full">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={this.onSubmit}>
                                <TextInputGroup
                                  
                                    name="selectedStoreName"
                                    placeholder="Enter Store Name"
                                    value={selectedStoreName}
                                    onChange={this.myChange}
                                    error={errors.selectedStoreName}
                                    />
                                     <TextInputGroup
                                
                                    name="selectedSession"
                                    placeholder="Enter Session"
                                    value={selectedSession}
                                    onChange={this.myChange}
                                    error={errors.selectedSession}
                                    />
                                      <TextInputGroup
                               
                                    name="address"
                                    placeholder="Enter address"
                                    value={address}
                                    onChange={this.myChange}
                                    error={errors.address}
                                    />
                                {/* <div className="form-group">
                                        <input  type="text"
                                        name="selectedStoreName"
                                         value={selectedStoreName}
                                         onChange={this.myChange}
                                         className="form-control"
                                         placeholder="selectedStoreName" 
                                        
                                         />
                                    </div> */}
                                     {/* <div className="form-group">
                                        <input  type="text"
                                        name="selectedSession"
                                         value={selectedSession}
                                         onChange={this.myChange}
                                         className="form-control"
                                         placeholder="selectedSession" 
                                        
                                         />
                                    </div>
                                    <div className="form-group">
                                        <input  type="text"
                                        name="address"
                                         value={address}
                                         onChange={this.myChange}
                                         className="form-control"
                                         placeholder="Address" 
                                        
                                         />
                                    </div> */}
                                    <div className="form-group w-100">
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-primary myButton" /> 
                                        {/* <Link to="/Medicine" className="btn btn-primary myButton">
                                        Medicine
                                    </Link> */}
                                    </div>
                                </form>
                                {/* <div className="form-group">
                                        <Select
                                            value={selectedStoreName}
                                            onChange={this.handleChange}
                                            options={options}
                                            placeholder="Select Store Name"
                                        />    
                                    </div>
                                    <div className="form-group">
                                        <Select
                                            value={selectedSession}
                                            onChange={this.SessionChange}
                                            options={sessions}
                                            placeholder="Select Shift"
                                            
                                        />
                                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

Preview.propTypes={
    add_shop: PropTypes.func.isRequired
  }

export default connect(null,{add_shop})(Preview);