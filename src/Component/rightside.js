import React from 'react';


class Rightside extends React.Component{
    render(){

        return(
            <div>
               <h1>{this.props.heading}</h1>
               <p>{this.props.content}</p>
           </div>
        )
    }
   
}

export default Rightside;