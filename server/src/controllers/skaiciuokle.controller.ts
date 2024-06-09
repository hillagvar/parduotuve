import { Request, Response } from "express";

export class SkaiciuokleController {
    static apskaiciuoti(req: Request, res: Response) {

        console.log("skaiciuojami rezultatai");

        res.json ( {
            "rezultatas": 5
        })

    }
}