import { Apartment } from "./Apartment.js";
import { DoorsBrand, KitchenBrand, TechniquesBrand, WindowsBrand } from "./enums.js";
import { IApartment, IApartmentBuilder } from "./interfaces.js";

export class ApartmentBuilder implements IApartmentBuilder {
  apartment: IApartment;
  constructor() {
    this.apartment = new Apartment();
  }
  addKitchen(kitchenBrand: KitchenBrand): IApartmentBuilder {
    this.apartment.kitchen = kitchenBrand;
    return this; //В каждом методе из цепочки методов строителя должен быть возвращен его контекст, чтобы иметь возможность вызывать методы по цепочке
  }
  addWindows(windowsBrand: WindowsBrand): IApartmentBuilder {
    this.apartment.windows = windowsBrand;
    return this;
  }
  addDoors(doorsBrand: DoorsBrand): IApartmentBuilder {
    this.apartment.doors = doorsBrand;
    return this;
  }
  addTechnique(techniqueBrand: TechniquesBrand): IApartmentBuilder {
    this.apartment.technique = techniqueBrand;
    return this;
  }
  build(): IApartment {
    return this.apartment; // Здесь возваращать контекст строителя не нужно, потому что мы возвращаем результат нашего строительства
  }
}
