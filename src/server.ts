import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database"
const app = express();

// app.get("/test", (request, response) => {
//     return response.send("Olá teste")
// })

// app.post ("/test-post", (request, response) => {
//     return response.send("Olá teste post") 
// })

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("server is running"));