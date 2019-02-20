export default () => (
  <style jsx global>{`
    body {
      font-family: 'Noto Sans JP', sans-serif;
      font-display: swap;
      font-weight: 300;
      word-break : break-all;
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

    h3 {
      font-weight: 400;
      font-size: 1.1em;
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

    hr {
      border-width: 0.5px;
    }

    table {
      border-collapse: collapse;
    }

    th {
      padding: 0.2em 1em;
      font-size: 0.9em;
    }

    td {
      border-top: 1px solid #ddd;
      padding: 0.2em 1em;
      font-size: 0.9em;
    }

    blockquote {
      margin: 0;
      padding-left: 0.8em;
      border-left-style: solid;
      color: #808080;
    }

    code {
      font-family: monaco;
      font-size: 0.9em;
      background-color: #F0F0F0;
      padding: 0.2em;
      border-radius: 0.3em;
    }
    
    .jump {
      text-align: center;
    }
  `}</style>
);