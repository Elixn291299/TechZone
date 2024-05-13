// pages/api/getData.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getClientesData, getUsuariosData } from '../../controllers/dataController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const clientesData = await getClientesData();
    const usuariosData = await getUsuariosData();

    res.status(200).json({ clientesData, usuariosData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
