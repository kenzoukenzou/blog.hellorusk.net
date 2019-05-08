export default () => (
  <div className="header">
    <div className="bio">
      <picture>
        <source type="image/webp" srcSet="/static/mika.webp" alt="mika"/>
        <img src="/static/mika.png" alt="mika"/><br/>
      </picture>
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
        margin-bottom: 0.2em;
        padding: 5px;
        border-radius: 150px;
        -webkit-border-radius: 150px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      }
    `}</style> 
  </div>
);