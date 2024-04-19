import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { apiRoute } from "./routes/api.route.js";

// Inizializzazione del file .env
config();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

// Creazione del server
const app = express();

// Abilita l'utilizzo di file .json
app.use(express.json());

//Importa routes
// http/localhost:3001/api
app.use("/api", apiRoute);

// Funzione per inizializzare il server
const initServer = async () => {
    try {
        await mongoose.connect(MONGO_URL);

        console.log("Sono connesso al database")

        //Abilito il server
        app.listen(PORT, () => {
            console.log(`server avviato alla porta ${PORT}`)
        })
    } catch (err) {
        console.log("Connessione al database fallita!", err);
    }
}

//INvochiamo la funzione per inizializzare il server
initServer();










