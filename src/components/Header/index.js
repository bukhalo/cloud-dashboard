import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (<div>
      <ul>
        <li>
          <Link exact to="/">Home</Link>
        </li>
        <li>
          <Link exact to="/login">Login</Link>
        </li>
        <li>
          <Link exact to="/signup">signup</Link>
        </li>
        <li>
          <Link exact to="/forgot">forgot</Link>
        </li>
      </ul>
    </div>);
}

export default Header;
