import { Request, Response } from "express";
import { ListUserReceivedService } from "../services/ListUserReceivedService";

class ListUserReceivedComplimentsController {
    async handle(request: Request, response: Response){

        const { user_id } = request;
        
        const service = new ListUserReceivedService();

        const compliments = await service.execute(user_id);

        return response.json(compliments);

    }

}

export { ListUserReceivedComplimentsController }