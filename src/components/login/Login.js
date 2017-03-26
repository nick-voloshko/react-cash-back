import React from 'react';
import {connect}  from 'react-redux';

import {startLoginWithGoogleAction, startLoginWithGitHubAction, startLoginWithEmailAndPassword} from './../../actions/actions';

var Login = React.createClass({

    loginWithGoogle(){
        let {dispatch} = this.props;
        dispatch(startLoginWithGoogleAction());
    },

    loginWithGitHub(){
        let {dispatch} = this.props;
        dispatch(startLoginWithGitHubAction());
    },

    loginEmailAndPassword(){
        let {dispatch} = this.props;

        let emailRef = this.refs.email;
        let passwordRef = this.refs.password;

        dispatch(startLoginWithEmailAndPassword(emailRef.value, passwordRef.value));
    },

    render(){
        return (
            <div className="container">
                <div id="loginbox" style={{marginTop: '50px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info" >
                        <div className="panel-heading">
                            <div className="panel-title">Sign In</div>
                            <div style={{float: 'right', fontSize: '80%', position: 'relative', top:'-10px'}}><a href="#">Forgot password?</a></div>
                        </div>

                        <div style={{paddingTop: '30px'}} className="panel-body" >

                            <div style={{display: 'none'}} id="login-alert" className="alert alert-danger col-sm-12"></div>

                            <form id="loginform" className="form-horizontal" role="form">

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                    <input id="login-username" type="text" className="form-control" name="email" placeholder="email" ref="email"/>
                                </div>

                                <div style={{marginBottom: '25px'}} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                    <input id="login-password" type="password" className="form-control" name="password" placeholder="password" ref="password"/>
                                </div>

                                <div style={{marginTop:'10px'}} className="form-group">

                                    <div className="col-sm-12 controls">
                                        <a id="btn-login" className="btn btn-success" onClick={this.loginEmailAndPassword}>Login</a>
                                        <a id="btn-fblogin"  className="btn btn-danger" onClick={this.loginWithGoogle}>Login with Google</a>
                                        <a id="btn-fblogin" className="btn btn-primary" onClick={this.loginWithGitHub}>Login with GitHub</a>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 control">
                                        <div style={{borderTop: '1px solid#888', paddingTop: '15px', fontSize: '85%'}} >
                                            Don't have an account! <a href="#"> Sign Up Here </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect()(Login);