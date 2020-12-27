import  React  from 'react';


export class Content extends React.Component{

    render(){
        return(
            <div>
             <h1><u>Welcome To Recipe Reminder </u></h1>
            <h2>The current time is: <b>{new Date().toLocaleTimeString()}</b>.</h2>
            </div>
        );
    }

}