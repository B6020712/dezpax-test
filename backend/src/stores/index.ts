import express, { Request, Response } from 'express';
import database from '../database.json';

const router = express.Router();

router.get('', (req: Request, res: Response) => {
    try {
        if (!database) {
            return res.status(400).json({
                message: "Product not found!"
            })
        }
        
        return res.status(200).json({
            products: database
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error!, Please contact admin"
        })
    }
});

router.get('/:sku', (req: Request, res: Response) => {
    const route_param = req.params;
    const find_prod = database.filter((prod_ele) => prod_ele.sku === route_param.sku);

    try {
        if (find_prod.length === 0) {
            return res.status(400).json({
                message: "Product not found!",
            })
        }
        
        return res.status(200).json({
            product: find_prod
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error!, Please contact admin"
        })
    }
});

export default router;