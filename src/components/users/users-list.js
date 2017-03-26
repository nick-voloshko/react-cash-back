import React      from 'react';
import {connect}  from 'react-redux';

import User       from './user'
import UserAdd    from './add-user';

var UsersList = React.createClass({

    onAddNewUser: function(e){
        e.preventDefault();
    },


    renderUsers: function () {
        let {users} = this.props;

        if(users.length > 0){
            return users.map((user)=>{
                return (
                    <User key={user.id} user={user}/>
                );
            });
        }
        else {
            return <tr><td>No users</td></tr>
        }
    },

    render: function () {
        return (
            <div>
                <table className="table">
                    <thead className="thead-inverse">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Delete</th>
                        <th>Save Changes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderUsers()}
                    </tbody>
                </table>
                <div>
                    <UserAdd/>
                </div>
            </div>
        )
    }
});

export default connect(
    (state) => {
        return state;
    })(UsersList);