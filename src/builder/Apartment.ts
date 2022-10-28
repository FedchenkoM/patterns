import {
  DoorsBrand,
  KitchenBrand,
  TechniquesBrand,
  WindowsBrand,
} from "./enums.js";
import { IApartment } from "./interfaces.js";

export class Apartment implements IApartment {
  kitchen?: KitchenBrand | undefined;
  windows?: WindowsBrand | undefined;
  doors?: DoorsBrand | undefined;
  technique?: TechniquesBrand | undefined;
}
