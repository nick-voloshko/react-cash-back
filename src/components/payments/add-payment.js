import React      from 'react';
import {connect}  from 'react-redux';
import uuid       from 'node-uuid';

import {startAddPaymentToUserAction} from '../../actions/actions';

var AddPayment = React.createClass({

    onAddPaymentToUser: function (e) {
        e.preventDefault();

        let {dispatch} = this.props;
        let {id} = this.props.selectedUser;

        let title = this.refs.title.value;
        let amount  = this.refs.amount.value;

        if(typeof title === 'string' && typeof parseInt(amount) === 'number'){
            if (title.length > 0 && parseInt(amount) > 0){

                this.refs.title.value = '';
                this.refs.amount.value = '';

                dispatch(startAddPaymentToUserAction(id,
                    {
                        title: title,
                        amount: amount,
                        // date: new Date()
                    }
                ));
            }
        }


    },

    render: function () {
        return (
            <div className="container">
                <div id="loginbox" style={{marginTop: '50px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info" >
                        <h1>Add new payment</h1>

                        <form onSubmit={this.onAddPaymentToUser}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" ref="title"/>
                            </div>
                            <div className="form-group">
                                <label>Amount:</label>
                                <input type="text" className="form-control"  ref="amount"/>
                            </div>

                            <button className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    },

    mapStateToProps: function (state) {
        return { selectedUser: state.selectedUser }
    }
});

export default connect((state)=>{return state})(AddPayment);