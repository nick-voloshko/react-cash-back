import React from 'react';
import NavBar from './../navigationBar/navBar';

var Main = React.createClass({
    render: function () {
        return (
        <div>
            <NavBar/>
            <div className="container">
                <div>
                    {this.props.children}
                </div>
            </div>
        </div>
        )
    }
});

export default Main;


