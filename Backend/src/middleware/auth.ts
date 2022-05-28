
import { Request, Response, NextFunction } from 'express';
import  jwt  from 'jsonwebtoken';

export const authenticateToken = async (req: any, res: Response, next : NextFunction) => {   
     const authHeader = req.headers['authorization']
     const token = authHeader && authHeader.split(' ')[1];

     let tokenKey: any = process.env.TOKEN_KEY
     if(!token) return res.sendStatus(401);
     jwt.verify(token, tokenKey, (err: any , user: any) => {
         if(err) return res.sendStatus(403)
         req.user = user;
         next()
     })
}