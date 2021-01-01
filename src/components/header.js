import React from 'react';


export class Header extends React.Component {

    //renders the components onto the webpage

    //text is outputted onto the webpage

    render() {
        return (
            <div>
                <card-header> <h1><u>Welcome To <i><b>Recipe</b>Reminder </i></u></h1>
                    <h2>The current time is: <b>{new Date().toLocaleTimeString()}</b>.</h2><h3>Before you start cooking please take note of the following: </h3></card-header>
            </div>
        );
    }

}