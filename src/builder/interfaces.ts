import {
  DoorsBrand,
  KitchenBrand,
  TechniquesBrand,
  WindowsBrand,
} from "./enums.js";

export interface IApartment {
  kitchen?: KitchenBrand;
  windows?: WindowsBrand;
  doors?: DoorsBrand;
  technique?: TechniquesBrand;
}

export interface IApartmentBuilder {
  apartment: IApartment;
  addKitchen(kitchenBrand: KitchenBrand): IApartmentBuilder;
  addWindows(windowsBrand: WindowsBrand): IApartmentBuilder;
  addDoors(doorsBrand: DoorsBrand): IApartmentBuilder;
  addTechnique(techniqueBrand: TechniquesBrand): IApartmentBuilder;
  build(): IApartment;
}
