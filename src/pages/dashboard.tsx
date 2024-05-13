// pages/Dashboard.tsx

import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Dashboard: React.FC = () => {
  // Obtener la información de inicio de sesión almacenada en la cookie
  const userInfo = cookies.get('userInfo');

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div>
        <h2>Información del Usuario:</h2>
        {userInfo ? (
          <div>
            <p>Usuario: {userInfo.username}</p>
            <p>Contraseña: {userInfo.password}</p>
          </div>
        ) : (
          <p>No se encontraron datos de inicio de sesión.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;