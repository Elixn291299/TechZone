// controllers/dataController.ts

import { connect } from '../models/database';

export async function getClientesData() {
  const connection = await connect();

  try {
    const result = await connection.query('SELECT * FROM gg_customers');
    return result[0];
  } finally {
    await connection.end();
  }
}

export async function getUsuariosData() {
  const connection = await connect();

  try {
    const result = await connection.query('SELECT * FROM gg_users');
    return result[0];
  } finally {
    await connection.end();
  }
}
