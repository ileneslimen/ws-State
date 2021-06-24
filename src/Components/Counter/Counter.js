import React, { Component } from 'react'
import './Counter.css'
import { Button, Form } from 'react-bootstrap'


class Counter extends Component {
constructor(props){
    super(props);
    this.state={
      count:0,
      text:""
    }
    console.log("constructor")
}
// life cycle
componentDidMount(){
    console.log("component did mount")
}

componentDidUpdate(){
    console.log("component did update")
}
componentWillUnmount(){
    console.log("component will un mount")
}



HandleAdd=()=>{
    this.setState({count:this.state.count+1})
}
HandleMin=()=>{
   this.state.count>0 && this.setState({count:this.state.count-1})
}

    render() {
    console.log("render")
        return (
            <div className="counterContainer" >
                <h1>This is a counter :</h1>
                <div className="counterContent">
                    <Button variant="success" className="counterBtns"
                      onClick={this.HandleAdd}
                    >+</Button>
                    <h2>{this.state.count} </h2>
                    <Button variant="success" className="counterBtns"
                 
                     onClick={this.HandleMin}
                    >-</Button>
                </div>
                <Form.Control type="text" placeholder="Enter text ..."
                onChange={(event)=>this.setState({text:event.target.value})}
                />
                <h3>{this.state.text}</h3>
            </div>
            
        )
    }
}

export default Counter
