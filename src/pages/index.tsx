// pages/index.tsx

import React, { useState } from 'react';
import LoginPage from './login';
import ViewerPage from './viewer';

const IndexPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Manejar el inicio de sesión exitoso
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <ViewerPage />
      ) : (
        <LoginPage  />
      )}
    </div>
  );
};

export default IndexPage;