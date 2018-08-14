import React from 'react';
import './index.scss';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table className={'table  mb-0'}>
        {this.props.children}
      </table>
    );
  }
}
