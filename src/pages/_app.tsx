import "@/styles/globals.css";
import type { AppProps } from "next/app";

// _app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; //estilos de FontAwesome
import '../styles/login.css'; // Estilos específicos del login
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../styles/styles.css'; // Importa el archivo CSS de estilos

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Desactiva la autoadición de estilos de FontAwesome


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}