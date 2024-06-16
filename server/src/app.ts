import express, { Application, Request, Response } from "express";
import { skaiciuokleRouter } from "./routes/skaiciuokle.router";
import bodyParser from "body-parser";
import { corsHeaders } from "./middlewares/cors.middleware";
import { productsRouter } from "./routes/products.router";
import { authRouter } from "./routes/auth.router";

const app: Application = express();

//sutvarkomi duomenys, jei buvo siusta forma
app.use(express.urlencoded());

//sutvarkomi duomenys, jei buvo atsiustas json failas
app.use(express.json());

//i visus response headerius ikeliami cors nurodymai
app.use(corsHeaders);

//uzkraunamas route failas (kur nurodyti skaiciuokles url)
app.use("/skaiciuokle", skaiciuokleRouter);

app.use("/products", productsRouter);

app.use("/auth", authRouter);

export { app };