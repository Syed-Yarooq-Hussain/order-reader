import { Request, Response } from 'express';
import { db } from '../config/dbConfig'
import { getOrdersList, getOrderByid , deleteOrderByid, EditOrderByid, addOrder } from '../service/orderService'


const orders = db.collection('orders')

interface Page {
    page: number;
}

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const {page} = req.query as unknown as Page; 
        let ordersList = await getOrdersList(page)

        return res.status(200).json({ code: 200, data: ordersList, message: 'Successfully get Orders' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const order = await getOrderByid(req.params.id);

        if(!order.data()){
            return res.status(200).json({ code: 200,  message: 'No order found for this id' })    
        }

        return res.status(200).json({ code: 200, data: order.data(), message: 'Successfully get Order' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}


export const deleteOrderById = async (req: Request, res: Response) => {
    try {
        const order = await deleteOrderByid(req.params.id);

        return res.status(200).json({ code: 200,  message: 'Successfully delete Order' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}


export const AddOrder = async (req: Request, res: Response) => {
    try {
        const order = await addOrder(req.body);

        return res.status(200).json({ code: 200,  message: 'Successfully delete Order' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}

export const EditOrderById = async (req: Request, res: Response) => {
    try {
        const order = await EditOrderByid(req.params.id , req.body);

        return res.status(200).json({ code: 200, data: order,  message: 'Successfully Edit Record Order' })

    } catch (e) {
        console.log(e)
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}


