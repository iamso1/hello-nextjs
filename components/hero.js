import React, { Component } from 'react'

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'guest',
            count:0
        }
    }
    
    //這方式可以避免bind this重複複製
    changeTitle = () => {
        this.setState({
            title:'iamso2',
            count:this.state.count+1
        });
        
    }

    render() {
        return (
            <div>
                <div>hello {this.props.title}</div>
                <div>Hi {this.state.title}</div>
                <button onClick={() => this.setState({title:'iamso1'})}>Change</button>
                <button onClick={this.changeTitle}>Change By Function</button>
                {this.state.count}
            </div>
        )
    }
}
