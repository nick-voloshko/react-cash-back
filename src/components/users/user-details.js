import React              from 'react';
import {connect}          from 'react-redux';
import {hashHistory} from 'react-router';

import {lostFocusUserAction} from './../../actions/actions';
import PaymentList from '../payments/payments-list';

var UserDetails = React.createClass({

    render: function () {

        let {id, name, age, payments} = this.props.selectedUser;

        if(!this.props.selectedUser) {
            return (
                <div>
                    <h1>You have not chosen user yet.</h1>
                    <button onClick={()=>{hashHistory.goBack();}}>Previous page</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1>USER DETAILS</h1>
                    <div><label>Name: {name}</label></div>
                    <div><label>Age: {age}</label></div>
                    <button onClick={this.onGoBackHandler}>Previous page</button>
                    <PaymentList/>
                </div>
            )
        }
    },

    onGoBackHandler: function () {
        let {dispatch} = this.props;
        dispatch(lostFocusUserAction());
        hashHistory.goBack();
    },

    mapStateToProps: function (state) {
        return { selectedUser: state.selectedUser }
    }
});

export default connect((state)=>{return state})(UserDetails);