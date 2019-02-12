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
        <style jsx>{`
          .header {
            margin-top: 15px;
            text-align: center;
          }

          .bio {
            min-width: 290px;
            display: inline-block;
            height: 28vh;
          }
          
          .bio span {
            font-size: 0.9em;
            color: #808080;
          }
          
          .bio img {
            height: 20vh;
          }
        `}</style> 
      </div>
    );
  }
}

export default Header;