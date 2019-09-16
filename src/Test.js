import React from 'react';
import PropTypes from 'prop-types';

const Test = ({ name }) => (
  <div>
    <span>
      Test {name}
      <p />
      <label>Merhaba</label>
    </span>
    <style jsx>{`
      span {
        color: blue;
        label {
          color: rgb(27, 72, 197);
        }
      }
    `}</style>
  </div>
);

Test.propTypes = {
  name: PropTypes.string
};

export default Test;
