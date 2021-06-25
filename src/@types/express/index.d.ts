declare namespace Express{
    export interface Request{
        user_id: string;
    }

}

/**
 * Para sobescrever e o node entender corretamente é necessario adicionar a pasta "./src/@types" no tsconfig.json, no campo typeRoots
 */