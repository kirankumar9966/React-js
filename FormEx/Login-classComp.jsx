import React from "react";
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
    }
    render(){
        return <div>
            <h1>Login details</h1>
            <pre>JSON.stringyfy{this.state}</pre>
            <form onSubmit={this.submitHandler}></form>
            <label>Email</label>
            <input type="text" onChange={this.emailHandler}/>
            <label>password</label>
            <input type="text" onChange={this.passwordHandler}/>
            <input type="submit" />
        </div>
    }

}
export default Login