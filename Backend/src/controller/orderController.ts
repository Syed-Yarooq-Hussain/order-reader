import { Request, Response } from 'express';
import { db } from '../config/dbConfig'
import { getOrdersList, getOrderByid } from '../service/orderService'


const orders = db.collection('orders')

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        let ordersList = await getOrdersList()

        return res.status(200).json({ code: 200, data: ordersList, message: 'Successfully get Orders' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await getOrderByid(req.params.id);

        return res.status(200).json({ code: 200, data: order.data(), message: 'Successfully get Order' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}
