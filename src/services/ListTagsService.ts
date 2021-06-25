import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class ListTagsService {

    async execute(){
        const tagsRepository = getCustomRepository(TagsRepositories);

        const tags = await tagsRepository.find();

        return classToPlain(tags);
    }
}

export { ListTagsService }