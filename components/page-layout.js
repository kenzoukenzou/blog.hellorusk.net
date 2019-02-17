export default () => (
  <style jsx global>{`
    body {
      font-family: 'Noto Sans JP', sans-serif;
      font-display: swap;
      font-weight: 300;
      max-width: 656px;
      margin-right: auto;
      margin-left: auto; 
      padding: 0 2%;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h2 {
      font-weight: 400;
      font-size: 1.3em;
    }

    h4 {
      font-weight: 300;
      font-size: 0.9em;
      color: #666666;
      font-style: italic;
    }
    
    a {
      text-decoration: none;
    }
    
    p {
      text-align: left;
    }

    span {
      text-align: center;
    }
    
    ul {
      list-style-type: none;
    }
    
    .jump {
      text-align: center;
    }
  `}</style>
);