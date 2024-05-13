// pages/login.tsx

import React from 'react';
import LoginForm from './components/LoginForm';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const LoginPage: React.FC = () => {
  const router = useRouter();

  // Manejar la lógica de redirección después del inicio de sesión exitoso
  const handleLogin = (username: string, password: string) => {
    // Simulando una lógica de autenticación exitosa
    // En un escenario real, aquí realizarías la autenticación y redirección

    // Guardar la información de inicio de sesión en una cookie
    cookies.set('userInfo', { username, password }, { path: '/' });

    // Redirigir al usuario a la página viewer.tsx después del inicio de sesión
    router.push('/viewer');
  };

  return (
    <div className="login-container">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
