// pages/api/getDocuments.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

// Ruta al directorio que contiene los documentos
const documentsDirectory = path.join(process.cwd(), 'public/documents');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Obtener la lista de nombres de archivos en el directorio
    const documentFiles = await fs.readdir(documentsDirectory);

    // Enviar la lista de documentos como respuesta JSON
    res.status(200).json(documentFiles);
  } catch (error) {
    // Manejar errores en caso de fallo al leer el directorio
    console.error('Error fetching documents:', error);

    // Responder con un error interno del servidor
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
