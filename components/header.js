import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="bio">
          <img src="/static/mika.png" alt="mika"></img>
          <p>HelloRusk<br/>
          <span>Contact: hellorusk1998 [at] gmail.com</span></p>
        </div> 
      </div>
    );
  }
}

export default Header;