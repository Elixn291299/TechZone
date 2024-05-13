import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import DocumentList from '../pages/components/DocumentList';
import { useRouter } from 'next/router';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const ViewerPage: React.FC = () => {
  const [documents, setDocuments] = useState<string[]>([]);
  const [data, setData] = useState<any>();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener datos de la API getData
        const response = await axios.get('/api/getData');
        setData(response.data);

        // Obtener lista de documentos
        const documentsResponse = await axios.get('/api/getDocuments');
        setDocuments(documentsResponse.data);
      } catch (error) {
        console.error('Error fetching data or documents:', error);
      }
    };

    fetchData();
  }, []);

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => router.push('/')
    },
    {
      label: 'Dashboard',
      icon: 'pi pi-chart-bar',
      command: goToDashboard
    }
  ];

  const end = (
    <>
      <Button label="Toggle Dark Mode" icon="pi pi-adjust" className="p-button-secondary" onClick={toggleDarkMode} />
      <Button label="Logout" icon="pi pi-power-off" className="p-button-danger" onClick={() => console.log('Logout')} />
    </>
  );

  return (
    <div className={`page-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Menú de navegación */}
      <Menubar model={items} end={end} className="menu-bar" />

      <div className="container mt-4">
        <h1>Clientes Data:</h1>
        {data?.clientesData.length > 0 ? (
          <DataTable value={data.clientesData}>
            <Column field="customer_id" header="ID"></Column>
            <Column field="first_name" header="First Name"></Column>
            <Column field="last_name" header="Last Name"></Column>
            <Column field="mothers_last_name" header="Mothers Last Name"></Column>
            <Column field="company" header="Company"></Column>
            <Column field="industry" header="Industry"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="brand" header="Brand"></Column>
          </DataTable>
        ) : (
          <p>No hay datos de clientes.</p>
        )}

        <h1>Usuarios Data:</h1>
        {data?.usuariosData.length > 0 ? (
          <DataTable value={data.usuariosData}>
            <Column field="user_id" header="ID"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="password" header="Password"></Column>
            <Column field="status" header="Status"></Column>
            <Column field="full_name" header="Full Name"></Column>
            <Column field="brand" header="Brand"></Column>
          </DataTable>
        ) : (
          <p>No hay datos de usuarios.</p>
        )}
        <h1>Documentos:</h1>
        <DocumentList documents={documents} />
      </div>

      <style jsx>{`
        .page-container {
          width: 100%;
          min-height: 100vh;
          transition: background-color 0.3s ease;
        }

        .dark-mode {
          background-color: #333;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default ViewerPage;
 