// models/database.ts
import { createConnection, Connection } from 'mysql2/promise';

export async function connect(): Promise<Connection> {
  return createConnection({
    host: 'http://nasabytechzone.com',
    user: 'techzone_users_admin',
    password: 'LD9bdL^fyWi&',
    database: 'techzone_user_files',
  });
}
