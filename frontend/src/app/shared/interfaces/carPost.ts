import { IUser } from "./user";

export interface ICar {
    likes: string[];
    make : string;
    model: string;
    year: number;
    carImage: string;
    description: string;
    owner: IUser,
    likedBy: IUser[];


}