import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';

const Title = () => <div>Ey</div>;

ReactDOM.render(
  <div>
    <Title />
    <Test name={5} />
  </div>,
  window.document.getElementById('app')
);
