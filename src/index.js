import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component and this component should produce some HTML
// some HTML
const App = () => {
  return <div>Hi!</div>;
}
// Take this component's generated HTML and

// put on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
