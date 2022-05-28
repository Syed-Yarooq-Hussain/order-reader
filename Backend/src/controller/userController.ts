import { Request, Response } from 'express';
import { db } from '../config/dbConfig'
import jwt from 'jsonwebtoken'
const user = db.collection('users')


export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const snapshot = await user.get();
        let userList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
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

export const login = async (req: Request, res: Response) => {
    try{
        const payload = {...req.body}
        
        const snapshot = await user.doc(payload.id).get();
        let  currentUser : any = snapshot.data();
        
        if(!currentUser){
            return res.json({ code: 401,  message: 'your provided id not exist' })    
        }

        const tokenKey : any = process.env.TOKEN_KEY
        const token : any= jwt.sign(currentUser, tokenKey);
        currentUser['token'] = token;
        
        return res.json({ code: 200, data: currentUser, message: 'Successfully get Login' })
    }catch(e){
        console.log(e);
        return res.json({ code: 500, error: e, message: 'Server Error' })
    }
}

