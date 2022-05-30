import { db } from '../config/dbConfig';

const orders = db.collection('orders');

export const getAllOrders = async () => {

    const snapshot = await orders.get();
    const userList = await snapshot.docs.map((doc)=> ({id: doc.id , ...doc.data()}))
    
    return userList;
}
