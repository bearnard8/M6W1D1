import { Router } from "express";
import Author from "../models/author.model.js";

export const authorsRoute = Router();

// Richiesta GET all'indirizzo "/"
authorsRoute.get("/", async (req, res) => {
    let authors = await Author.find({});
    //Risposta dell'API al Route "/"
    res.send(authors);
})

// Richiesta GET all'indirizzo "/:id" (Esempio: http:localhost:3001/api/affsfsasdf84594j)
authorsRoute.get("/:id", async (req, res, next) => {
    try {
        //Inizializziamo una variabile author con l'id uguale a quello passato come parametro
        let author = await Author.findById(req.params.id);
        //Mandiamo in risposta al client l'autore trovato
        res.send(author);
    } catch (err) {
        next.err;
    }
})

// Richiesta POST all'indirizzo "/" (Esempio: http:localhost:3001/api)
authorsRoute.post("/", async (req, res, next) => {
    try {
        //Inizializziamo una variabile author con il body inviato dalla richiesta
        let author = await Author.create(req.body);
        //Mandiamo in risposta al client l'autore creato e lo status code 400
        res.send(author).status(400);
    } catch (err) {
        next.err;
    }
})

// Richiesta PUT all'indirizzo "/:id" (Esempio: http:localhost:3001/api/affsfsasdf84594j)
authorsRoute.put("/:id", async (req, res, next) => {
    try {
        //Inizializziamo una variabile author con il body inviato dalla richiesta
        let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        //Mandiamo in risposta al client l'autore creato e lo status code 400
        res.send(author).status(400);
    } catch (err) {
        next.err;
    }
})

// Richiesta DELETE all'indirizzo "/:id" (Esempio: http:localhost:3001/api/affsfsasdf84594j)
authorsRoute.delete("/:id", async (req, res, next) => {
    try {
        await Author.deleteOne({
            _id: req.params.id,
        });
        res.send("L'utente è stato eliminato con successo!").status(204);
    } catch (err) {
        next.err;
    }
})