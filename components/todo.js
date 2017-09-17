import React, { Component } from 'react'
import List from './list'

export default class Todo extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                {this.props.title}
                <List></List>
            </div>
        )
    }
}
