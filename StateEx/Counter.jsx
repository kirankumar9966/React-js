import React from "react";
class Counter extends React.Component{
    state={
        Counter:1
    }
    incrHandler=()=>{
        this.setState({
            Counter:this.state.Counter +1
        });
    }
    decrHandler=()=>{
        this.setState({
            Counter:this.state.Counter -1
        })
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h1>Countervalue:{this.state.Counter}</h1>
            <button onClick={this.incrHandler}>Incr</button>
            <button onClick={this.decrHandler}>Decr</button>

        </div>

    }
}
export default Counter