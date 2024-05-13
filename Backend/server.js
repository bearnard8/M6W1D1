import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import { authorsRoute } from "./services/routes/authors.route.js";
import { blogPostsRoute } from "./services/routes/blogPost.route.js";
import {
    badRequestHandler,
    genericErrorHandler,
    notFoundHandler,
    unauthorizedHandler,
} from "./services/middlewares/errorHandler.js"

// Inizializzazione del file .env
config();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

// Creazione del server
const app = express();

// Abilita l'utilizzo di file .json
app.use(express.json());
app.use(cors());

//Importa routes
// http/localhost:3001/api
app.use("/api/authors", authorsRoute);
app.use("/api/blogPosts", blogPostsRoute);

// Middlewares per la gestione degli errori
app.use(badRequestHandler);
app.use(unauthorizedHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);

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

//Invochiamo la funzione per inizializzare il server
initServer();

 








