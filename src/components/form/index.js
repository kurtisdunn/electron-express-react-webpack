import React from 'react';
import assign from 'object-assign';
import emit from '../../utils/emit';
import Alert from '../../components/alert';
import validate from '../../utils/validator/form';

const $ = window.$;

function emitResponse (elem, cmpnt) {
  return function (response) {
    console.log('emitResponse', response);
    emit(elem, 'response', {
      detail: response
    });
  };
}

function emitSuccess (elem, cmpnt) {
  return function (response) {
    cmpnt.setState({ response: response.toString(), responseType: 'success' });
  };
}

function emitError (elem, cmpnt) {
  return function (response) {
    cmpnt.setState({ response: response.toString(), responseType: 'danger' });
  };
}

function serialize(elem) {
  return $(elem).serializeArray().reduce(function(prev, curr) {
    var selects = [].slice.call(elem.querySelectorAll('select'));
    let selectArray;

    if (selects.length > 0) {
      selectArray = selects.reduce(function(prev, curr) {
        if (prev.hasOwnProperty(curr.id)) {
          if (Array.isArray(prev[curr.id])) {
            prev[curr.id].push(curr.value);
          } else {
            prev[curr.id] = [prev[curr.name], curr.value];
          }
        } else {
          prev[curr.id] = curr.value;
        }
        return prev;
      }, {});
    }

    if (prev.hasOwnProperty(curr.name)) {
      if (Array.isArray(prev[curr.name])) {
        prev[curr.name].push(curr.value);
      }
    } else {
      prev[curr.name] = curr.value;
    }

    const result = assign({}, prev, selectArray);
    return result;
  }, {});
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      erros: null,
      response: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const that = this;
    const form = event.target;
    const handler = this.props.method;

    if (handler) {
     event.preventDefault();
    }

     validate(event.target, function (field, errors) {
       // console.log('field :', field);
       // console.log('errors :', errors);
       that.setState({
         errors: errors
       });
      }, function (form, errors) {
        if (!handler || errors.length) {
          return;
        }
        handler(serialize(form))
          .then(emitResponse(form))
          .then(emitSuccess(form, that))
          .catch(emitError(form, that));
      });
  }

  render() {
    const that = this;
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        errors: that.state.errors
      })
    );
    return (
      <form onSubmit={this.handleSubmit} data-method={this.props.method}>
        { that.state.response ? <Alert type={ this.state.responseType } message={ this.state.response }/> : null}
        { childrenWithProps }
      </form>
    );
  }
}

{/* <Form method={ ContactPost }>
  <Input title={'First Name'} name={'firstName'} validator={'required'} />
  <Input title={'Last Name'} name={'lastName'} validator={'required'}/>
  <Input title={'Email'} name={'email'} type={'email'} validator={'required, email'} />
  <Input title={'Address'} name={'address'} validator={'required'} />
  <Input title={'Address 2'} name={'address2'} />
  <Textarea rows={'10'} title={'Message'} name={'message'} validator={'required'} />
  <Button value={'Send!'} class={'btn-submit'} type={'submit'} />
</Form> */}
