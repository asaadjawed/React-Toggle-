import React from 'react';


class Leftside extends React.Component{
    render(){
        return(

           <div>
               <h1>{this.props.heading}</h1>
               <p>{this.props.content}</p>
           </div>
        )
    }
   
}
export default Leftside;