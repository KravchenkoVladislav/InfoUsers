import { IDob } from "./IForUsers/IDob";
import { Id } from "./IForUsers/Id";
import { ILocation } from "./IForUsers/ILocation";
import { IName } from "./IForUsers/IName";
import { IPicture } from "./IForUsers/IPicture";

export interface IUsers {
    email: string;
    dob: IDob;
    gender: string;
    id: Id;
    location: ILocation;
    phone: string;
    name: IName;
    picture: IPicture;
}