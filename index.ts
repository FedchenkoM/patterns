import { Nation } from "./src/factoryMethod/enums.js";
import { FootballWorld } from "./src/factoryMethod/footballWorld.js";
import { Sun } from "./src/singleton/Sun.js";

//Factory method////////////////////////////////////////////////////////////////////////////////////////
// Фабричный метод позволяет создавать однотипные объекты, объединенные
// общим интерфейсом, но со своей реализацией абстракных методов определенных в интерфейсе
//для каждого конкретного случая.
// const Football = new FootballWorld();

// const BrasilAcademy = Football.createAcademy(Nation.Brasil);
// const BrasilPlayer = BrasilAcademy.trainPlayers();
// BrasilPlayer.speak();
// BrasilPlayer.trainByProgram();

// const BritishAcademy = Football.createAcademy(Nation.British);
// const BritishPlayer = BritishAcademy.trainPlayers();
// BritishPlayer.speak();
// BritishPlayer.trainByProgram();
////////////////////////////////////////////////////////////////////////////////////////////////////////


//Singleton////////////////////////////////////////////////////////////////////////////////////////////////////////
//Синглтон необходим тогда, когда в нашем коде есть необходимость создать что-то в единичном экземпляре
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
////////////////////////////////////////////////////////////////////////////////////////////////////////


