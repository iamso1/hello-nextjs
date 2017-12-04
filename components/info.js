import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    return (
      <div>
        <span style={{ display: 'block' }}>
          {' '}
          請輸入你的大名:{' '}
          <input
            type="text"
            value={this.props.userName}
            onChange={this.props.userNameOnChange}
          />
        </span>
        <span style={{ display: 'block' }}>
          {' '}
          請輸入你的問題主題:{' '}
          <input
            type="text"
            value={this.props.questionTitle}
            onChange={this.props.questionTitleOnChange}
          />
        </span>
        <span style={{ display: 'block' }}>
          {' '}
          請輸入你的問題:{' '}
          <input
            type="text"
            value={this.props.question}
            onChange={this.props.questionOnChange}
          />
        </span>
        <span style={{ display: 'block' }}>
          <button>送出問題</button>
        </span>
      </div>
    );
  }
}
