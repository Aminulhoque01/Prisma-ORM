import { Request, Response } from "express";
import { userService } from "./user.service";


const inserIntoDB = async (req:Request, res:Response)=>{
    try {
        const result = await userService.inserIntoDB(req.body);
        res.status(200).json({
            message:"User created successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: (error as Error).message
        })
        
    }
}

const inserOrUpdateProfile = async (req:Request, res:Response)=>{
    try {
        const result = await userService.inserOrUpdateProfile(req.body);
        res.status(200).json({
            message:"User created successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: (error as Error).message
        })
        
    }
};

const getUser = async (req:Request, res:Response)=>{
    try {
        const result = await userService.getUser();
        res.status(200).json({
            message:"User created successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: (error as Error).message
        })
        
    }
}

const getSingleUser = async (req:Request, res:Response)=>{
    try {
        const id = Number(req.params.id);
        const result = await userService.getSingleUser(id);
        res.status(200).json({
            message:"User created successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            message:"Internal server error",
            error: (error as Error).message
        })
        
    }
}


export  const  UserController = {
    inserIntoDB,
    inserOrUpdateProfile,
    getUser,
    getSingleUser
}