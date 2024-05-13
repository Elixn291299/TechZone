// components/LoginForm.tsx

import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Pasar el nombre de usuario y la contraseña al componente padre
    onLogin(username, password);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label>
          Usuario:
          <br></br>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
