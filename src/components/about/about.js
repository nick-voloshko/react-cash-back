import React from 'react';
import logo from './../../style/logo.svg';

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Its your first SPA application powered by ReactJs</h1>
                {
                    console.log("What's up!!")
                }
            </div>
        )
    }
});

export default About;