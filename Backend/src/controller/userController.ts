import { Request, Response } from 'express';
import { db } from '../config/dbConfig'

const user = db.collection('users')

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const snapshot = await user.get();
        let userList = snapshot.docs.map((doc)=> ({id: doc.id , ...doc.data()}))
        return res.json({ code: 200, data: userList, message: 'Successfully get Users' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })

    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const snapshot = await user.doc(id).get();

        return res.json({ code: 200, data: snapshot.data(), message: 'Successfully get User' })

    } catch (e) {
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}

