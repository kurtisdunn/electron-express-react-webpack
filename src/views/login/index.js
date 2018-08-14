import React from 'react';
import styles from './index.scss';

import Button from '../../components/button';
import Card from '../../components/card';
import Input from '../../components/input';
import Form from '../../components/form';
import Config from '../../utils/config';
// this also works with react-router-native
import { NavLink } from 'react-router-dom';


// import Authenticate from '../../api/auth';

function Authenticate(elem){
  Config.isLoggedIn = true;
  return elem.props.history.push('/');
}


const $ = window.$;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageModal: false };
  }
  componentDidMount(){
    window.resizeTo(800,850);
    
  }
  render() {
    return (
      <div className="home container">
        <br />
        <div className="text-center">

          <br />
          <br />
          <h1>Demo App</h1>
        </div>
        <br />
        <div className="row justify-content-md-center">
          <div className="col"></div>
          <div className="col-6">
            <Card heading={'Login'}>
              <Form method={ Authenticate }>
                <Input title={'Username'} name={'username'} validator={'required'} autoFocus />
                <Input title={'Password'} name={'password'} type={'password'} validator={'required'} />
                {/* <Button type="submit" class="btn-full-rounded" title={'Submit'} /> */}
                <Button class="btn-full-rounded" title={'Submit'} onClick={ () => Authenticate(this) } />
              </Form>
            </Card>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}
