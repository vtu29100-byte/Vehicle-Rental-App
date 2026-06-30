import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '../../database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false, // set to console.log to see SQL queries
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('SQLite Database Connected Successfully!');
    // Sync all defined models to the DB
    await sequelize.sync({ alter: true });
    console.log('Database Synced!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default sequelize;
