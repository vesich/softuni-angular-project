import { IUser } from "./user";

export interface ICar {
    likes: string[];
    _id: string;
    make : string;
    model: string;
    year: number;
    carImage: string;
    description: string;
    owner: IUser,
    likedBy: IUser[];


}