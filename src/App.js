import React from 'react'
import {Button} from 'react-bootstrap'
import "./App.css"
import Counter from "./Components/Counter/Counter"
class App extends React.Component{
state={
  show:false
}


  render(){
   
    return (
      <div className="App" >
        <Button variant="secondary" onClick={()=>this.setState({show:!this.state.show})} >show</Button>
     {
       this.state.show &&   <Counter />
     }
      </div>
  
    );
  }
}

export default App

