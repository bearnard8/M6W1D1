import { Router } from "express";
import Post from "../models/post.model.js";

// Creazione ed esportazione del Router
export const blogPostsRoute = Router();

// Richiesta GET all'indirizzo "/blogPosts"
blogPostsRoute.get("/", async (req, res) => {
    let posts = await Post.find({});
    res.send(posts);
})

// Richiesta GET all'indirizzo "/blogPosts/:id"
blogPostsRoute.get("/:id", async (req, res, next) => {
    try {
        //Inizializziamo una variabile author con l'id uguale a quello passato come parametro
        let post = await Post.findById(req.params.id);
        //Mandiamo in risposta al client l'autore trovato
        res.send(post);
    } catch (err) {
        next.err;
    }
})

// Richiesta POST all'indirizzo "/blogPosts"
blogPostsRoute.post("/", async (req, res, next) => {
    try {
        let post = await Post.create(req.body);
        res.send(post).status(400);
    } catch (err) {
        next.err;
    }
})