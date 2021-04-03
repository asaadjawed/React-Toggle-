
import React from 'react';
import Leftside from './Component/leftside';
import Rightside from './Component/rightside';
import './App.css';

class App extends React.Component{

  constructor(){
    super()

    this.state = {
        
        paragraph: "Lorem ipsum content",
    }


 this.change_state=()=>{

  this.setState({

   paragraph: this.state.paragraph === "Lorem ipsum content"?"":"Lorem ipsum content"

  })
}
}
  render()
  {
    return(

      <div>
        <button onClick={this.change_state}>Toggle</button>
        <p>{this.state.paragraph}</p>
      </div>
    
    )
  }

}

export default App;
