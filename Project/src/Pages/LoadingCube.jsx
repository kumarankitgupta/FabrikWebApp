import React, { useState, useEffect } from 'react';

const LoadingCube = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(true);
    });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      {!loaded &&
        <div style={{ fontSize: '24px', marginBottom: '16px' }}>
          Loading...
        </div>
      }
      <div style={{ width: '64px', height: '64px', backgroundColor: 'cyan', borderRadius: '50%', animation: 'rotate 2s linear infinite' }} />
    </div>
  );
};

export default LoadingCube;
