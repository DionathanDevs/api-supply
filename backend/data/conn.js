
import mysql from 'mysql2/promise';






export const pool = mysql.createPool({
  host: HOST,
  user: USER,
  database: DATABASE,
  password: PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, 
  idleTimeout: 60000, 
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
