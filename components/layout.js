import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <h1>歡迎加入海產自救會</h1>
        {this.props.children}{' '}
      </div>
    );
  }
}
