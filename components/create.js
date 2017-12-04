import React, { Component } from 'react';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'input something',
    };
  }

  render() {
    return (
      <div>
        <h3>問題內容</h3>
        <input
          type="text"
          value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
        />
        <button onClick={() => this.props.doAdd(this.state.title)}>
          Submit
        </button>
      </div>
    );
  }
}
