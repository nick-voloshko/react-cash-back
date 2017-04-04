import React                         from 'react';
import {connect}                     from 'react-redux';

import {startRemovePaymentFromUserAction, startUpdatePaymentOfUserAction} from '../../actions/actions';

var Payment = React.createClass({

    onRemovePaymentSecondary: function () {
        let {userId, payment, dispatch} = this.props;

        dispatch(startRemovePaymentFromUserAction(userId, payment.id));
    },

    onUpdatePayment: function () {
        let {userId, dispatch} = this.props;

        dispatch(startUpdatePaymentOfUserAction(userId, {
            id: this.state.id,
            title: this.state.title,
            amount: this.state.amount
        }));
    },

    getInitialState(){
        let {userId, payment} = this.props;
        return {
            userId,
            ...payment
        };
    },

    render: function () {
        let {userId, payment} = this.props;
        return (
            <tr>
                <th scope="row">{payment.id}</th>
                <td><input type="text" value={this.state.title} ref="title" onChange={()=>{
                    let title = this.refs.title.value;
                    this.setState({
                        title
                    });
                }}/></td>
                <td><input type="text" value={this.state.amount} ref="amount" onChange={()=>{
                    let amount = this.refs.amount.value;
                    this.setState({
                        amount
                    });
                }}/></td>
                <td><button onClick={this.onRemovePaymentSecondary}>X</button></td>
                <td><button onClick={this.onUpdatePayment}>Save</button></td>
            </tr>
        )
    }
});

export default connect()(Payment);