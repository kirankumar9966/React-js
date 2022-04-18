import React from 'react'
class eventbinding extends React.Component{
    state={
        emp_Sal:50000,
    }
    btnHandler(value){
        console.log("Reading button data......");
        this.setState({emp_Sal: 30000+value})
    }
    render(){
        return( <div>
            <h1>Employee sal:{this.state.emp_Sal}</h1>
            <button onClick={this.btnHandler.bind(this,50000)}>Hike50k</button>
            
            <button onClick={this.btnHandler.bind(this,100000)}>Hike100k</button>
            <button onClick={this.btnHandler.bind(this,0)}>Hike0</button>
        </div>
        )
    }

}
export default eventbinding