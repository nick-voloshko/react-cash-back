import React            from 'react';
import ReactDOM         from 'react-dom';
import {Provider}       from 'react-redux';
import { Router,
         Route,
         hashHistory,
         IndexRoute }   from 'react-router';

import firebase,
       {firebaseRef}    from './firebase/firebase';

import Home             from './components/home/home';
import Main             from './components/main/main';
import About            from './components/about/about';
import UsersList        from './components/users/users-list';
import UserDetails      from './components/users/user-details';
import Login            from './components/login/Login';
import store            from './store/store';

import './style/bootstrap-3.3.7-dist/css/bootstrap.css';
import './style/style.css';

import {avatarUrlAction,
        login,
        logout,
        startAddSetOfUsers} from './actions/actions';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid, user.accessToken));
        if(user.photoURL)
            store.dispatch(avatarUrlAction(user.photoURL));
        store.dispatch(startAddSetOfUsers());
    } else {
        store.dispatch(logout);
    }
});

const requireAuth = (nextState, replace, callback) => {
    var user = firebase.auth().currentUser;
    if (user) {
        callback();
    } else {
        hashHistory.push('login');
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <Route path="about" component={About}/>
                <Route path="users" component={UsersList} onEnter={requireAuth}/>
                <Route path="user-details" component={UserDetails} onEnter={requireAuth}/>
                <IndexRoute component={Home}/>
                {/*<Route path="*" component={NoMatch}/>*/}
                <Route path="login" component={Login}/>
            </Route>
        </Router>
    </Provider>
,document.getElementById('app'));
