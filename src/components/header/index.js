import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

// import Icon from '../icon';
// import Logo from '../../images/bg-logo@2x.png';

const $ = window.$;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    // chooseDefaultColor();
    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-dark">
        <div className="container">
        <a className="navbar-brand animated" href="#">
          <img src="" alt="Kurt D Photography" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link" exact={true} to="/" >Home</NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            {/* <li className="nav-item py-sm-4" activeclassName="active">
              <span className="navbar-text" style={{fontSize:'6px', color:'rgba(139, 140, 141, 1.000)' }}>
                <Icon type="circle" />
              </span>
            </li> */}
            {/* <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link nav-icon" to="">
                <Icon type="facebook" />
              </NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link nav-icon" to="">
                <Icon type="instagram" />
              </NavLink>
            </li>
            <li className="nav-item py-sm-4" activeclassName="active">
              <NavLink className="nav-link nav-icon" to="/shop/cart">
                <Icon type="shopping-cart"  />
              </NavLink>
            </li> */}
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}
