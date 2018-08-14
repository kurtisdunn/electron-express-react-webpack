import styles from './index.scss';
import assign from 'object-assign';

import React from 'react';

const $ = window.$;

function preventJqueryFromSelectingTheWrongElement (e) {
  e.stopPropagation();
}

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
      console.log('class Modal extends');
      this.state = {
        open: false
      };
  }

  cancel(e) {
    this.setState({ open: false });
  }

  componentDidMount(){

  }
  render() {
    if(this.props){
      $(this.props.id).modal(this.props.open ? 'show' : 'hide');
    }
    return (
      <div className="modal" id={ this.props.id }  tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-full" onClick={ preventJqueryFromSelectingTheWrongElement }>
          <div className="modal-content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}
