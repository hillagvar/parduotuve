import { app } from "./app.js";
import dotenv from "dotenv";

//uzkraunama .env biblioteka ir paimami kintamieji

dotenv.config();

console.log("app paleista");

//serveris paleidziamas ant porto, kuris nurodytas .env faile

app.listen(process.env.PORT, () => {
    console.log("express serveris paleistas ant porto: " + process.env.PORT);
});