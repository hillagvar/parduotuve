import { pool } from "../db/connect";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

export class AuthController {
    static async signIn (req: any, res: any) {
        const username = req.body.username;
        const email = req.body.email;
        let password: string = req.body.password;

        password = await bcrypt.hash(password, 12);

        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        await pool.query(sql, [username, email, password]);

        res.json({
            "status": "Ok"
        });
    }

    static async login(req: any, res: any) {
        const email = req.body.email;
        const password: string = req.body.password;

        const sql = "SELECT * FROM users WHERE email like ?";
        const [result] = await pool.query<User[]>(sql, [email]);

        if (result.length != 1) {
            return res.status(400).json({
                "text": "Vartotojas nerastas"
            });
        }

        const user = result[0];

        let passwordOk = await bcrypt.compare(password, user.password);

        if (!passwordOk) {
            return res.status(400).json({
                "text": "Neteisingas username arba el.pastas"
            });
        }

        let token = jwt.sign(
            {
            "id": user.id
            },
        "hagkfdhsd6572shfuaq238hd+9342-&6835", 
        {
            expiresIn: "2 days"
        })

        

        res.json({
            "name": user.name,
            "email": user.email,
            "token": token
        });
    }
}