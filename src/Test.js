import React from 'react';
import PropTypes from 'prop-types';

const Test = ({ name }) => (
  <div>
    <span>Test {name}</span>
  </div>
);

Test.propTypes = {
  name: PropTypes.string
};

export default Test;
