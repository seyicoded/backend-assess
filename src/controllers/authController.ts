import express, { Request, Response} from 'express';
import Joi from 'joi';
import { WrapperResponse } from '../helper/wrapResponse';

type createUser = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

const createUserScheme = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required().label("Last Name"),
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
}

export const registerController = (request: Request, response: Response)=>{
    const data: createUser = request.body;

    // validate 
    const {error, value} = Joi.object(createUserScheme).validate(data)

    if(error){
        return WrapperResponse("error", {
            message: error.message,
            status: "failed"
        }, response)
    }

    // check if user exist
}