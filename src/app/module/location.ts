
import { Street} from "./street";

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    
  }