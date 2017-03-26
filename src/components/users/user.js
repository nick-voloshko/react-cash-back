import React              from 'react';
import {connect}          from 'react-redux';
import {hashHistory} from 'react-router';
import 'hover.css/css/hover.css';

import {startRemoveUserAction, selectUserAction, startUpdateUserAction} from './../../actions/actions';


var User = React.createClass({

    onDeleteUser: function() {
      let {id} = this.props.user;
      let {dispatch} = this.props;

      dispatch(startRemoveUserAction(id));
    },

    onUpdateUser: function() {
        let {dispatch} = this.props;

        dispatch(startUpdateUserAction({
            id: this.state.id,
            name: this.state.name,
            age: this.state.age
        }));
    },

    onClickHandler: function(){
        let {dispatch} = this.props;
        dispatch(selectUserAction(this.props.user));
        hashHistory.push('/user-details');
    },

    getInitialState(){
      return {
          ...this.props.user
      };
    },

    render: function () {
        return (
            <tr>
                <td className="hvr-curl-top-left" onClick={this.onClickHandler}>
                    <label>{this.state.id}</label>
                </td>

                <td >
                    <input type="text" value={this.state.name} ref="name" onChange={()=>{
                        let name = this.refs.name.value;
                        this.setState({
                            name
                        });
                    }}/>
                </td>

                <td>
                    <input type="text" value={this.state.age} ref="age" onChange={()=>{
                        let age = this.refs.age.value;
                        this.setState({
                            age
                        });
                    }}/>
                </td>
                <td>
                    <button onClick={this.onDeleteUser}>X</button>
                </td>
                <td>
                    <button onClick={this.onUpdateUser}>Save Changes</button>
                </td>
            </tr>
        )
    }
});

export default connect()(User);