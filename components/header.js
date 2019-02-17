export default () => (
  <div className="header">
    <div className="bio">
      <img src="/static/mika.png" alt="mika"></img><br/>
        HelloRusk<br/>
        <span>Contact: hellorusk1998 [at] gmail.com</span>
    </div>
    <style jsx>{`
      .header {
        margin-top: 15px;
        text-align: center;
      }

      .bio {
        min-width: 290px;
        display: inline-block;
        height: 150px;
      }
      
      .bio span {
        font-size: 0.9em;
        color: #808080;
      }
      
      .bio img {
        height: 110px;
        margin-bottom: 1em;
      }
    `}</style> 
  </div>
);