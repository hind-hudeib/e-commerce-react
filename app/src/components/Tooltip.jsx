import React, { useState } from 'react';

// Tooltip component
const Tooltip = ({ text, position }) => (
  <div className="tooltip" style={{ top: position.y, left: position.x }}>
    {text}
  </div>
);

export default Tooltip