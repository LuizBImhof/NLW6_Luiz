import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IAunthenticateRequest {
    email: string;
    password: string
}

class AuthenticateUserService {

    async execute({email, password}: IAunthenticateRequest) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorrect");
        }
        
        const passwordMatch = await compare (password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }       

        const token = sign({ //aqui verificar a ideia de refresh token
            email: user.email
        },"b75013155ffdcb7be5ad4fcc1b38395b", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;

    }
}

export { AuthenticateUserService }