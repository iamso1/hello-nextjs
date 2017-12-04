import React, { Component } from 'react';
import List from './list';
import Create from './create';
import Info from './info';
import Questions from './questions';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        userName: 'iamso1',
        questionTitle: 'question subject',
        question: 'question content',
      },
      data_todo: ['帝王蟹怎麼賣', '海產新鮮嗎'],
      data_done: ['純問不下'],
    };
  }

  userNameOnChange = e => {
    this.setState({ userName: e.target.value });
  };

  questionTitleOnChange = e => {
    this.setState({ questionTitle: e.target.value });
  };

  questionOnChange = e => {
    this.setState({ question: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Info
          userName={this.state.userName}
          questionTitle={this.state.questionTitle}
          question={this.state.question}
          userNameOnChange={this.userNameOnChange}
          questionTitleOnChange={this.questionTitleOnChange}
          questionOnChange={this.questionOnChange}
        />
        <p />
        <Questions title="待處理問題" data={this.state.data_todo} />
        <p />
        <Questions title="已完成問題" data={this.state.data_done} />
      </div>
    );
  }
}
