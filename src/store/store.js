import * as redux from 'redux';
import thunk from 'redux-thunk';

import {usersReduser, selectedUsersReduser, authReducer, avatarReducer}  from './../reducers/redusers';

var configure = (initialState = {}) => {

    var reducer = redux.combineReducers({
        users: usersReduser,
        selectedUser: selectedUsersReduser,
        auth: authReducer,
        avatar: avatarReducer
    });

    var _store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return _store;
};

var store = configure();

export default store;