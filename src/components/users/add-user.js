import React            from 'react';
import {connect}        from 'react-redux';
import {startAddUserAction}  from './../../actions/actions';
import uuid             from 'node-uuid';

var UsersAdd = React.createClass({

    onAddNewUser: function(e){
        e.preventDefault();
        let {dispatch} = this.props;

        let name = this.refs.name.value;
        let age  = this.refs.age.value;

        if(typeof name === 'string' && typeof parseInt(age) === 'number'){
            if (name.length > 0 && parseInt(age) > 0){

                this.refs.name.value = '';
                this.refs.age.value = '';

                dispatch(startAddUserAction({
                    name: name,
                    age: age,
                    payments: []
                }));
            }
        }
    },

    render: function () {
        return (
            <div className="container">
                <div id="loginbox" style={{marginTop: '50px'}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info" >
                <h1>Add new user</h1>

                <form onSubmit={this.onAddNewUser}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" ref="name"/>
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="text" className="form-control"  ref="age"/>
                    </div>

                    <button className="btn btn-default">Submit</button>
                </form>
                    </div>
            </div>
            </div>
        )
    }
});

export default connect()(UsersAdd);