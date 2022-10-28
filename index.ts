// FACTORY METHOD////////////////////////////////////////////////////////////////////////////////////////
// Фабричный метод позволяет создавать однотипные объекты, объединенные
// общим интерфейсом, но со своей реализацией абстракных методов определенных в интерфейсе
//для каждого конкретного случая.
// import { Nation } from "./src/factoryMethod/enums.js";
// import { FootballWorld } from "./src/factoryMethod/footballWorld.js";
// const Football = new FootballWorld();
// const BrasilAcademy = Football.createAcademy(Nation.Brasil);
// const BrasilPlayer = BrasilAcademy.trainPlayers();
// BrasilPlayer.speak();
// BrasilPlayer.trainByProgram();
// const BritishAcademy = Football.createAcademy(Nation.British);
// const BritishPlayer = BritishAcademy.trainPlayers();
// BritishPlayer.speak();
// BritishPlayer.trainByProgram();

// SINGLETON////////////////////////////////////////////////////////////////////////////////////////////////////////
//Синглтон необходим тогда, когда в нашем коде есть необходимость создать что-то в единичном экземпляре
// import { Sun } from "./src/singleton/Sun.js";
// console.log('Содаём instance солнца', Sun.getSun());
// console.log('Смотрим количество взрывов на солнце', Sun.getNumbersOfExplosion());
// console.log('Делаем 1 взрыв', Sun.explosion());
// console.log('Делаем 2 взрыв', Sun.explosion());
// console.log('Делаем 3 взрыв', Sun.explosion());
// console.log('Снова смотрим количество взрывов на солнце', Sun.getNumbersOfExplosion());
// console.log('Пробуем создать второе солнце', Sun.getSun());
// console.log('По количеству взрывов убеждаемся что солнце у нас по прежнему старое и единственное', Sun.getNumbersOfExplosion());
// console.log('Делаем 4 взрыв', Sun.explosion());
// console.log('Делаем 5 взрыв', Sun.explosion());
// console.log('Пробуем создать второе солнце', Sun.getSun());
// console.log('Делаем 6 взрыв', Sun.explosion());
// console.log('По количеству взрывов убеждаемся что солнце у нас по прежнему старое и единственное', Sun.getNumbersOfExplosion());

// FACTORY////////////////////////////////////////////////////////////////////////////////////////////////////////
// Фабрика необходима тогда, когда нам нужно создавать объекты имеющие общий интерфейс, но
// отличающиеся лишь значениями своих полей
// import { DonutFactory } from "./src/factory/DonutFactory.js";
// import { DonutType } from "./src/factory/enums.js";
// console.log('Создаем пончик с шоколадом');
// DonutFactory.getDonut(DonutType.chocolate);
// console.log('Создаем пончик с ванилью');
// DonutFactory.getDonut(DonutType.vanilla);

// PROTOTYPE////////////////////////////////////////////////////////////////////////////////////////////////////////
// Этот паттерн помгает нам на основе прототипа объекта делать его копии, при необходимости меняя какие-либо поля, методы, параметры.
// import { Edc, Phisique } from "./src/prototype/enums.js";
// import { Man } from "./src/prototype/Man.js";
// const idealManPrototype = new Man(190, 85, Edc.college, Phisique.high);//  Создаем прототип идеального мужчины
// const weakMan = idealManPrototype.clone();
// weakMan.power = Phisique.low; // Здесь мы на основе прототипа идеального мужчины создали тоже неплохого, но слабого.
// console.log('This man is', weakMan.power);
// const dumbMan = idealManPrototype.clone();
// dumbMan.edc = Edc.school; // А здесь создадим слегка туповатого, вроде меня
// console.log('This man has', dumbMan.edc, 'edc');

// BUILDER////////////////////////////////////////////////////////////////////////////////////////////////////////
// Патерн строитель может быть полезен тогда когда нам нужно конструировать обьект с множеством полей и
// передавать в конструктор класса огромное множестов параметров становится неудобно.
// Ключевой особенностью этого патерна является то, что мы можем вызывать цепочку методов для того чтобы
// конструировать наш объект.
// import { ApartmentBuilder } from "./src/builder/ApartmentBuilder.js";
// import { KitchenBrand, WindowsBrand } from "./src/builder/enums.js";
// const apartmentBuilder1 = new ApartmentBuilder();
// const apartmentWithKitchenIkea = apartmentBuilder1
//   .addKitchen(KitchenBrand.ikea)
//   .build();
// console.log(apartmentWithKitchenIkea);
// const apartmentBuilder2 = new ApartmentBuilder();
// const apartmentWithWindowsRehau = apartmentBuilder2
//   .addWindows(WindowsBrand.rehau)
//   .build();
// console.log(apartmentWithWindowsRehau);
