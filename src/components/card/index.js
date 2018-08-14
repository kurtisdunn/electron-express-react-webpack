import React from 'react';
import './index.scss';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.header = this.header.bind(this);
  }
  header(){
    return (
      <div className="card-header">
        { this.props.heading }
      </div>
    );
  }
  render() {
    // console.log(this.props)
    return (
      <div className="card mb-1">
        { this.props.heading ? this.header() : null }
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
