import { Request, Response } from "express";

export class SkaiciuokleController {
    static apskaiciuoti(req: Request, res: Response) {

        console.log("skaiciuojami rezultatai");
        
        const x = parseInt(req.body.x);
        const y = parseInt(req.body.y);

        res.json ( {
            "rezultatas": (x+y)
        })

    }
}