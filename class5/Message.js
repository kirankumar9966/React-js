import react from 'React'
class Message extends React.Component{
state={
    msg:"Hello"
}
MessageHandler=()=>{
    this.setstate({msg:"gm"})
}
render(){
    return <div>
        <h1>Message:{this.state.msg}</h1>
        <button onclick={this.MessageHandler}>GM</button>
    </div>
}
}
export default Message