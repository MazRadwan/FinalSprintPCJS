import React from 'react';
import './QualityAssurance.module.css';

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="QualityAssurance.module.css" />
      </head>
      <body>
        <div className="quality-assurance-main-box">
          <div className="quality-assurance">
            <div className="empty-space"></div>
            <img src="../public/src/steelandstubbleLogo.png" width="432px" height="432px" />
            <div className="quality-assurance-pledge">
              <h1>Steel and Stubble Quality Guarantee</h1>
              <p>
                "Experience the Steel & Stubble Difference with Confidence. Our commitment to quality is as unwavering
                as your need for a perfect shave. Each product is meticulously crafted, ensuring a shave that’s not just
                close, but comfortable and sophisticated. Should our blades not meet the mark, or if you find anything less
                than excellence in our handles, we pledge to make it right. This is our Quality Guarantee to you—because
                your shave should be as reliable as the steel we stand by."
              </p>
            </div>
            <div className="empty-space"></div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
