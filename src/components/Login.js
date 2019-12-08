import React from 'react';
import { Link } from 'react-router-dom'
import TextInputGroup from './medicine/TextInputGroup';
import PropTypes from 'prop-types'

class Login extends React.Component {
    state = {
        id:'',
        password: '',
        errors: {}
      };
      onSubmit = (e) => {
        e.preventDefault();
        const {  id ,password } = this.state;
        if (id === '') {
            this.setState({ errors: { id: 'id is required' } });
            return;
          }
          if (password === '') {
            this.setState({ errors: { password: 'password is required' } });
            return;
          }
          
        else{
            if (id === '1234' && password === '1234') {
                this.props.history.push('/Dashboard');
              }
             else{
                this.setState({ errors: { 
                    id: 'id is required',
                    password: 'password is required',
                 } });
                return;
             }
          
        }
      };
      myChange= e =>{
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    render() {
        const { id,password,errors } = this.state;
        return (
            <div>
                <div className="bpl_full">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bpl">MyBPL</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form_full">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        {/* <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="MPE ID" /> */}
                                        <TextInputGroup
                                            name="id"
                                            placeholder="Enter MPE ID"
                                            value={id}
                                            onChange={this.myChange}
                                            error={errors.id}
                                            />
                                    </div>
                                    <div className="form-group">
                                        {/* <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" /> */}
                                <TextInputGroup
                                type="password"
                                  name="password"
                                  placeholder="Enter Password"
                                  value={password}
                                  onChange={this.myChange}
                                  error={errors.password}
                                  />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn btn-primary myButton" /> 
                                    </div>
                                    <div className="form-group">
                                        <p>Id: 1234</p>
                                        <p>Password: 1234</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;



