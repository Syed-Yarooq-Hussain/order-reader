import { Request, Response } from 'express';
import { db } from '../config/dbConfig'


const orders = db.collection('orders')

export const getAllOrders = async (req: Request, res: Response) => {
    try {
         const snapshot = await orders.get();
        let userList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        return res.json({ code: 200, data: userList, message: 'Successfully get Orders' }) 
        
    } catch (e) {
        console.log(e)
        return res.json({ code: 500, error: e, message: 'Server Error' })

    }
}

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const snapshot = await orders.doc(id).get();

        return res.json({ code: 200, data: snapshot.data(), message: 'Successfully get Order' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}
