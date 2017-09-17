import React, { Component } from 'react';
import Create from './create';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['item1', 'item2', 'item3'],
      currentItem: -1,
    };
  }

  add = info => {
    const data = this.state.data;
    const newData = [...data, info];
    this.setState({ data: newData });
  };

  delete = index => {
    const data = this.state.data;
    data.splice(index, 1);
    this.setState({ data });
  };

  update = (index, value) => {
    const newData = [...this.state.data];
    newData[index] = value;
    this.setState({ data: newData });
  };

  renderItem = (item, index) => {
    const itemEdit =
      index === this.state.currentItem ? (
        <input
          type="text"
          value={item}
          onChange={e => {
            this.update(index, e.target.value);
          }}
        />
      ) : (
        <span onClick={() => this.setState({ currentItem: index })}>
          {item}
        </span>
      );

    return (
      <li key={index}>
        {itemEdit}
        <button
          onClick={() => {
            this.delete(index);
          }}
        >
          Delete Me
        </button>
      </li>
    );
  };

  render() {
    const resutl = this.state.data.map(this.renderItem);
    return (
      <div>
        <div>{resutl}</div>
        <Create doAdd={this.add} />
      </div>
    );
  }
}

List.defaultProps = {
  data: ['item1', 'item2', 'item3'],
};
