import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const urlDb = process.env.DB_URL;

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(urlDb);

    console.log("Mongo DB Conectado");

    // Eventos de conexión
    mongoose.connection.on('connected', () => {
      console.log('Conexión a MongoDB establecida.');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Error de conexión a MongoDB:', err.message);
    });

    // Manejo adecuado de la desconexión
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log("Conexión a MongoDB cerrada.");
      process.exit(0);
    });

  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};
