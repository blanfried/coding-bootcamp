import React from 'react';

const name = 'Baer';
const thoughts = 'just thinking about the birds... Oh, and React';

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is ({name})</h1>
          <h2>My name has ({name.length}) letters</h2>
          <h2>I am just ({thoughts})</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
