import React from "react";
class counter extends React.Component {
    constructor(props){
        super(props);
        this.state= {coount:0};
    }
    render(){
        return (
            <div>
                <p>You click {this.state.count} times</p>
                <button onClick={()=> this.setState({count: this.state.count+1})}>
              Click me
              </button>
            </div>                
    }
}
export default counter;