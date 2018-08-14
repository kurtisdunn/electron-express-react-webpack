import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import validate from '../../utils/validator/field';

const $ = window.$;

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

  }

  handleChange(event) {
    const that = this;
    this.props.onChange(event);
    validate(event.target, function (field, errors) {
      that.setState({
        errors: errors
      });
    });
  }

  handleBlur(event) {
    const that = this;
    validate(event.target, function (field, errors) {
      that.setState({
        errors: errors
      });
    });
  }

  componentWillReceiveProps(props) {
    if(props.errors){
      if (props.errors.length) {
        this.setState({ errors: props.errors });
      }
    }
  }

  getComponent(key) {
   this.props.onChange(key);
  }

  render() {
    const that = this;
    const hasErrors = this.state.errors && this.state.errors.length;

    function option(){
        const options = that.props.options ? that.props.options : null;
        return (
           options ?
            options.map(o => {
              return <option value={ o.option ? o.option : '' } key={o.option ? o.option : ''}>{ o.option ? o.option : '' }</option>;
            })
            : null
        );
    }

    return (
      <div className={`form-group ${ hasErrors ? 'has-danger' : ''} custom-select-wrapper`} >
        <select
          className={`custom-select ${ hasErrors ? 'form-control-danger' : '' }`}
          data-validators={ this.props.validator ? this.props.validator : '' }
          onChange={ this.handleChange }
          disabled={ this.props.disabled }
          id={ this.props.id ? this.props.id : '' }
          >
          <option value="">{ this.props.title ? this.props.title : '' } </option>
          {option()}

          <option value="country1">Country 1</option>
          <option value="country2">Country 2</option>
          <option value="country3">Country 3</option>
          <option value="country4">Country 4</option>
        </select>
        { hasErrors ? <div className="form-control-feedback">{this.state.errors[0]}</div> : '' }
      </div>
    );
  }
}
