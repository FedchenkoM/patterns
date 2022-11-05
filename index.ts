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

// DECORATOR////////////////////////////////////////////////////////////////////////////////////////////////////////
// Декоратор помогает когда нам нужно расширить или усовершенствовать функционал методов экземпляров классов
// import { CDecorator } from "./src/decorator/decorators/CDecorator.js";
// import { JavaDecorator } from "./src/decorator/decorators/JavaDecorator.js";
// import { SoftWareEngineer } from "./src/decorator/SoftWareEngineer.js";
// let softWareEngineer = new SoftWareEngineer(); // Создаем инженера который не умеет ничего
// softWareEngineer.writeCode();
// softWareEngineer.codeReview();
// softWareEngineer = new CDecorator(softWareEngineer); //Обучаем инженера языку С
// softWareEngineer.writeCode();
// softWareEngineer.codeReview();
// softWareEngineer = new JavaDecorator(softWareEngineer); // Обучаем еще и java
// softWareEngineer.writeCode();
// softWareEngineer.codeReview();

// ADAPTER////////////////////////////////////////////////////////////////////////////////////////////////////////
// Адаптер необходим когда нам нужно адаптировать метод одного обьекта для другого обьекта
// import { AdapterAndroid } from "./src/adapter/AdapterAndroidCharge.js";
// import { Android, IOSPhone } from "./src/adapter/enums.js";
// import { IOS } from "./src/adapter/IphoneCharging.js";
// const IOSCharge = new IOS(IOSPhone.iphoneX); // Создаем айфон зарядку
// console.log(IOSCharge.charging()); //  Пользуемся айфон зарядкой
// const AndroidCharge = new AdapterAndroid(IOSCharge, Android.xiaomi); // Подключаем к айфон зарядке адаптер на андройд
// console.log(AndroidCharge.charging()); // Заряжаем андройд зарядкой для айфона через адаптер;

// ABSTRACT FACTORY////////////////////////////////////////////////////////////////////////////////////////////////////////
// Абстрактная фабрика некая надстройка над фабриками, которая позволяет управлять этими фабриками и помогает создавать однотипные объекты но с разным данными
// import { AvtoVAZ } from "./src/abstractFactory/AvtoVAZ.js";
// const LadaOffRoadFactory = AvtoVAZ.offRoadFactory(); // Создаем фабрику внедорожников с помощью абстрактной фабрики
// console.log(LadaOffRoadFactory.makeChevyNiva()); // Создаем внедорожник
// console.log(LadaOffRoadFactory.makeNiva());
// const LadaCityCarFactory = AvtoVAZ.cityCar(); // Создаем фабрику городсикх авто с помощью абстрактной фабрики
// console.log(LadaCityCarFactory.makeGranta()); // Создаем городской авто
// console.log(LadaCityCarFactory.makeVesta());
// const LadaSportCarFactory = AvtoVAZ.sportCarFactory(); // Создаем фабрику спорткаров с помощью абстрактной фабрики
// console.log(LadaSportCarFactory.makeLadaRevolution()); // Создаем спорткар

// FACADE////////////////////////////////////////////////////////////////////////////////////////////////////////
// Фасад позволяет нам иметь единый интерфейс доступа к какому либо объекту, а так же позволяет из огромного множества методов
// которые могут содержаться в данном объекте использовать только необходимые нам в контексте задачи
// import { VolumeSettings } from "./src/facade/VolumeSettings.js";
// import { SoundSettings } from "./src/facade/SoundSettings.js";
// const soundSettings = new SoundSettings();
// console.log(soundSettings); // Объект soundSettings может иметь огромное количество методов дя работы со звуком
// const volumeSettings = new VolumeSettings();// Но с помощью фасада volumeSettings мы можем работать только с громкостью
// console.log(volumeSettings.volumeMinus());
// console.log(volumeSettings.volumePlus());
// console.log(volumeSettings.volumeMute());

// COMPOSITE////////////////////////////////////////////////////////////////////////////////////////////////////////
// Компоновщик полезен когда у нас в проекте есть некая древовидная структура
// он делегирует вызовы методов конкретным узлам 
// import { BigestMatryoshka } from "./src/composite/BigestMatryoshka.js";
// import { MatryoshkaSize, MatryoshkaWeight } from "./src/composite/enums.js";
// import { Matryoshka } from './src/composite/Matryoshka.js';
// const compositeMatryoshka = new BigestMatryoshka();
// console.log(compositeMatryoshka.getTotalWeight(), 'Вес самой крупной матрешки');
// compositeMatryoshka.add(new Matryoshka(MatryoshkaWeight.S, MatryoshkaSize.S));
// console.log(compositeMatryoshka.getTotalWeight(), 'Вес крупной матрешки с вложеной матрешкой S');
// compositeMatryoshka.add(new Matryoshka(MatryoshkaWeight.M, MatryoshkaSize.M));
// console.log(compositeMatryoshka.getTotalWeight(), 'Вес крупной матрешки с вложенными матрешками S и M');
// compositeMatryoshka.add(new Matryoshka(MatryoshkaWeight.L, MatryoshkaSize.L));
// console.log(compositeMatryoshka.getTotalWeight(), 'Вес крупной матрешки с вложенными матрешками S,M,L');
// compositeMatryoshka.add(new Matryoshka(MatryoshkaWeight.XL, MatryoshkaSize.XL));
// console.log(compositeMatryoshka.getTotalWeight(), 'Вес крупной матрешки с вложенными матрешками S,M,L,XL');

// PROXY////////////////////////////////////////////////////////////////////////////////////////////////////////
// Прокси помогает когда нам нужен некий дополнительны слой.
// Прокси может перехватывать какие либо запросы и выполнять работу вместо основного класса,
// а затем возвращать какие либо преобразованнные им данные, либо делегировать работу основному классу.
// Существует много различных видов прокси: Защищающие, логирующие, кэширующие
// Каждый из этих видов сужит для определенных целей
// import { CEO } from "./src/proxy/CEO.js";
// import { CEOProxy } from "./src/proxy/CEOProxy.js";
// import { Company } from "./src/proxy/Company.js";
// const Ceo = new CEO(Company.getCompany()); // Инициализиурем директора
// const CeoProxy = new CEOProxy(Company.getCompany(), Ceo); // Инициализируем заместителя директора
// CeoProxy.makeDeal('Продажа активов twitterу'); // Пока директор занят делаем сделку от имени его зама
// Ceo.busy = false; // Директор освободился и может делать сделки сам
// CeoProxy.makeDeal('Покупка нового здания под офис'); // Делаем сделку от имени директора
// Ceo.busy = true; // Директор снова занят и все последующие сделки выполняет его зам или прокси
// CeoProxy.makeDeal('Продажа служебного авто');
// CeoProxy.makeDeal('Прокупка утюга');
// CeoProxy.donation();
// CeoProxy.donation();
// console.log(Company.deals);



