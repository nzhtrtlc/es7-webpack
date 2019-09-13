import './style.scss'

import React from 'react'
import ReactDOM from 'react-dom'

const Title = () => (
  <div style={{ fontSize: 20, color: 'red' }}>
    Ey,
  </div>
)

ReactDOM.render(
  <div>
    <Title/>
  </div>,
  window.document.getElementById('app')
)
