import { db } from '../config/dbConfig';
const orders = db.collection('orders')


export const getOrdersFromDB = async () => await orders.get();