import React      from 'react';
import {connect}  from 'react-redux';

import Payment    from '../payments/payment';
import AddPayment from '../payments/add-payment';

var PaymentList = React.createClass({

    renderPayments: function () {
        let {id, payments} = this.props.selectedUser;

        if(payments)
        if(payments.length > 0){
            return payments.map((payment)=>{
                return (
                   <Payment key={payment.id} payment={payment} userId={id}></Payment>
                );
            });
        }
        else {
            return (<tr><td>No payments</td></tr>);
        }
    },

    render: function () {
        return (
            <div>
                {/*<ul>*/}
                    {/*{this.renderPayments()}*/}
                {/*</ul>*/}

                <table className="table">
                    <thead className="thead-inverse">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Delete</th>
                        <th>Save Changes</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderPayments()}
                    </tbody>
                </table>

                <AddPayment/>
            </div>
        )
    },

    mapStateToProps: function (state) {
        return { selectedUser: state.selectedUser }
    }
});

export default connect((state)=>{return state})(PaymentList);