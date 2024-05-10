import { Coordinates } from "./coordinates";
import { Info} from "./info";
import { Name } from "./name";
import { Picture } from "./picture";
import { Location } from "./location";

export interface Userinterface 
{

    cellphone : string;
    nationality : string;
    phone: string;
    uuid : string;
    coordinates : Coordinates;
    info: Info;
    pictureInfo : Picture;
    email: string;
    name: Name;
    gender: string;
    location: Location;
}
