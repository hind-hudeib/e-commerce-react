import React, { useState } from 'react';

const Portal = ({ children }) => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const togglePortal = () => {
    setIsPortalOpen(!isPortalOpen);
  };

  return (
    <div className='text-center flex flex-col justify-center items-center'>
      <button className='border-2 border-slate-600 rounded-lg bg-slate-500 px-10 py-4 ' onClick={togglePortal}>Toggle Portal</button>
      {isPortalOpen && (
        <div className="portal border-2 border-slate-400 rounded-lg p-20 m-10 bg-gray-200">
          <div className="portal-content">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Portal;
