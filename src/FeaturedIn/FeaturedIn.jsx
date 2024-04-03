import React from 'react';
import './FeaturedIn-Module.css'; // Make sure to import your CSS file

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Objects</title>
        <link rel="stylesheet" href="FeaturedIn-Module.css" />
      </head>
      <body>
        <section>
          <div className="featured-in-section">
            <h1 style={{ textAlign: 'center', fontSize: '50pt' }}>Featured In</h1>
            <br />
            <br />
            <div className="featured-in-row">
              <img src="../../public/assets/Esquire_logo_.svg.png" alt="Esquire" />
              <img src="../../public/assets/GQ_Logo.svg.png" alt="GQ" />
              <img src="../../public/assets/320px-Men's_Health.svg.png" alt="Men's Health" />
            </div>
            <br />
            <br />
          </div>
        </section>
      </body>
    </html>
  );
}

export default App;
