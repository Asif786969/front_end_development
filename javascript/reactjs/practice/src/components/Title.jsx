import { Component } from "react";

class Title extends Component{
    render(){
        return <h1>Task List is {this.props.title}</h1>
    }

}
export default Title;