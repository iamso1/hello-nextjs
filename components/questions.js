import React, { Component } from 'react';

export default class Questions extends Component {
  constructor(props) {
    super(props);
  }

  genItem = question => {
    return (
      <li>
        {question}
        <button>完成回答</button>
      </li>
    );
  };

  render() {
    const content = this.props.data.map(this.genItem);
    return (
      <div>
        <div>
          <label>{this.props.title}</label>
          <div>{content}</div>
        </div>
      </div>
    );
  }
}
