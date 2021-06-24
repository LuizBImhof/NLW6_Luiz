import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {
    async execute({tag_id, user_receiver, user_sender, message}: IComplimentRequest){

        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const userRepository = getCustomRepository(UsersRepositories);
        const tagRepository = getCustomRepository(TagsRepositories);

        if(user_sender == user_receiver){
            throw new Error ("Incorrect user receiver");
        }

        const userReceiverexists = await userRepository.findOne(user_receiver);

        if (!userReceiverexists) {
            throw new Error("User Receiver doesn't exist");
        }

        const TagExists = await tagRepository.findOne(tag_id);

        if (!TagExists) {
            throw new Error("Tag doesn't exist");
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepository.save(compliment);

        return compliment;

    }
}

export { CreateComplimentService }