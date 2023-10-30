import React from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) {
    throw new Error('The portal root element does not exist in the DOM.');
  }

  return ReactDOM.createPortal(children, portalRoot);
};

export default PortalComponent;
