export default () => (
  <div className="header">
    <div className="bio">
      <picture>
        <source type="image/webp" srcSet="/mika.webp" />
        <img src="/mika.png" alt="mika" />
        <br />
      </picture>
      HelloRusk
      <br />
      <span>
        <a href="mailto:k@hellorusk.net">k＠hellorusk.net</a>
      </span>
    </div>
    <style jsx>{`
      .header {
        margin-top: -10px;
        text-align: center;
      }

      .bio {
        min-width: 290px;
        display: inline-block;
        height: 150px;
      }

      .bio span {
        font-size: 0.9em;
        color: #a0a0a0;
      }

      .bio span a {
        color: #a0a0a0;
      }

      .bio img {
        height: 110px;
        margin-bottom: 0.2em;
        padding: 5px;
        border-radius: 150px;
        -webkit-border-radius: 150px;
        filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
        -webkit-filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
      }
    `}</style>
  </div>
);
