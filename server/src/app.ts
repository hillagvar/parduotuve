import express, { Application, Request, Response } from "express";
import { skaiciuokleRouter } from "./routes/skaiciuokle.router";
import bodyParser from "body-parser";

const app: Application = express();

//sutvarkomi duomenys, jei buvo siusta forma
app.use(express.urlencoded());

//sutvarkomi duomenys, jei buvo atsiustas json failas
app.use(express.json());

app.use((req: Request,res: Response, next: any) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

    next();
})

app.use("/skaiciuokle", skaiciuokleRouter);

export { app };