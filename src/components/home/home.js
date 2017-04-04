import React from 'react';
import {connect}  from 'react-redux';

var Home = React.createClass({

    onClickHandler: function(){
        this.props.router.push('/users');
    },

    render: function () {
        return (
            <div>
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to React</h2>
                        <p>New Scting Andrey</p>
                    </div>
					<div className="App-string">
						<h4>Some string</h4>
					</div>
                    <p className="App-intro">
                        <button onClick={this.onClickHandler}>Get Started</button>
                    </p>
                </div>
            </div>
        )
    }
});

export default connect()(Home);



