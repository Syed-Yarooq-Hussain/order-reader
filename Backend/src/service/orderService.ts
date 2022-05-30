import { db } from '../config/dbConfig';
const orders = db.collection('orders')



export const getOrdersList = async (page= 1) => {
    let limit = (page-1)*10; 
    let offset = page*10

    let snapshot = await orders.get();
    let orderss = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return orderss.slice(limit , offset)
}

export const getOrderByid = async (id: string) => await orders.doc(id).get();

export const deleteOrderByid = async (id: string) => await orders.doc(id).delete();

export const EditOrderByid = async (id: string ,body: any) => {
    await orders.doc(id).set(body);
    return await getOrderByid(id)
}

export const addOrder = async (body: any) => {
    await orders.doc(body.id).set(body);

    return await getOrderByid(body.id)
}