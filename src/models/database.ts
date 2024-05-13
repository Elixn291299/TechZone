// models/database.ts
import { createConnection, Connection } from 'mysql2/promise';

export async function connect(): Promise<Connection> {
  return createConnection({
    host: 'localhost',
    user: 'root',
    database: 'ginga',
  });
}
