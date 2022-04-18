import React, { Component } from 'react'
import { render } from 'react-dom'
export class Product extends Component {
    state={Message:"hello"}
    MessageHandler=()=>{
        this.setState({Message:"i also coming to movie"})
    }
    render(){
        return <div>
            <h1>Message:{this.state.Message}</h1>
            <pre>JSON.Stringyfy{this.state}</pre>
            <button onClick={this.MessageHandler.bind(this,"gm")}>GM</button>
            <button onClick={this.MessageHandler.bind(this,"gf")}>GM</button>
            <button onClick={this.MessageHandler.bind(this,"gn")}>GM</button>
        </div>
    }


}
export default Product