import { Product } from "../models/product.js";
import { pool } from "../db/connect.js";

export class ProductsController {
    static async getAll(req: any, res: any) {
   
        const sql = "SELECT * FROM products";
        const [result] = await pool.query<Product[]>(sql);

        res.json(result);
    }

    static async getProduct(req: any, res: any) {
        
        const sql = "SELECT * FROM products WHERE id=?";
        const [result] = await pool.query<Product[]>(sql, [req.params.id]);

        if (result.length == 0) {
            res.status(404).json({
                "text": "Įrašas nerastas"
            });

        } else {
            res.json(result[0]);

        }

    }

    static async insert(req: any, res: any){

        if (isNaN(req.body.price)) {
            return res.status(400).json({
                "text": "Kaina privalo būti skaičius"
            });
        }

        if (req.body.name == "") {
            return res.status(400).json({
                "text": "Neįvestas pavadinimas"
            });
            
        }

        const sql = "INSERT INTO products (name, price) VALUES ( ?, ? )";

        try {
            await pool.query(sql, [req.body.name, req.body.price]);
            
            res.json({
                "success" : true
            });
        } catch(error) {
            
            res.status(500).json({
                "text": "Įvyko pridėjimo klaida"
            });

        }
    }
       

   static async update(req: any, res: any){
        const sql = "UPDATE products SET name=?, price=? WHERE id=?";

        if (isNaN(req.body.price)) {
            return res.status(400).json({
                "text": "Kaina privalo būti skaičius"
            });
        }

         if (req.body.name == "") {
            return res.status(400).json({
                "text": "Neįvestas pavadinimas"
            });
        }

        try {
            await pool.query(sql, [req.body.name, req.body.price, req.body.id]);
            res.json({
                "success" : true
            });
        } catch(error) {
            
            res.status(500).json({
                "text": "Įvyko atnaujinimo klaida"
            });

        }
        
    }

    static async delete(req: any, res: any){
        const sql="DELETE FROM products WHERE id=?";

        try {
            await pool.query(sql, [req.params.id]);
            res.json({
                "success" : true
            });
        } catch(error) {
            res.status(500).json({
                "text": "Įvyko ištrynimo klaida"
            });

        }
        
    }
}