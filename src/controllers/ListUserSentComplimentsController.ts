import { Request, Response } from "express";
import { ListUserSentService } from "../services/ListUserSentService";


class ListUserSentComplimentsController{

    async handle(request: Request, response: Response){

        const { user_id } = request;
        
        const service = new ListUserSentService();

        const compliments = await service.execute(user_id);

        return response.json(compliments);

    }

}

export { ListUserSentComplimentsController }