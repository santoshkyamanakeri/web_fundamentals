import React from 'react'
import ReactDom from 'react-dom'


function Greeting() {
  return  <h4>This is Santosh, It's my first component </h4>;
  console.log(React);
}

ReactDom.render(<Greeting />, document.getElementById('root'));
