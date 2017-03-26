import React from 'react';
import {connect}  from 'react-redux';
import { Link }   from 'react-router';
import {startLogoutAction} from './../../actions/actions';
import _ from 'lodash';

var NavBar = React.createClass({

    logout(){
        let {dispatch} = this.props;
        dispatch(startLogoutAction());
    },

    authRender(){
        let {auth} = this.props;

        if(_.isEmpty(auth))
            return (<div className="navbar-brand"><Link to="/login">Login</Link></div>);
        else
            return (<div className="navbar-brand"><Link to="/" onClick={this.logout}>Logout</Link></div>)
    },

    render: function () {

        return (
        <div >
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                         <img className="d-inline-block align-left navbar-left" src={this.props.avatar} width="50" height="50"/>
                            <div className="navbar-brand"><Link to="/">Home</Link></div>
                            <div className="navbar-brand"><Link to="/users">Users</Link></div>
                            <div className="navbar-brand"><Link to="/user-details">User Details</Link></div>
                            <div className="navbar-brand"><Link to="/about">About</Link></div>
                            {this.authRender()}
                        </div>
                    </div>
                </nav>
        </div>
        );
    }
});

export default connect((state) => {return state;})(NavBar);