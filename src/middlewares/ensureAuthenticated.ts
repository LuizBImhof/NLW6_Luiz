import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authToken = request.headers.authorization;

    const [, token] = authToken.split(" "); //remove o "Bearer" que vem antes do token em si

    if(!token){
        return response.status(401).json({error: "invalid token"});
    }

    try{
        const { sub }= verify( token, "b75013155ffdcb7be5ad4fcc1b38395b") as IPayload;
        
        request.user_id = sub;
        return next();
    } catch(err){
        return response.status(401).end();
    }

    
    
}