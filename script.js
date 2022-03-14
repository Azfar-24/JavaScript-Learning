// const cutPiecs = fruits => fruits * 4;
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${cutPiecs(apples)} Apples pieces and ${cutPiecs(oranges)} Oranges pieces`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

///////////////////////////////////         Array Basics           ///////////////////////////

// const frineds = ["Chotu", "Negi", "Beta", "Rajesh", "Anna"];
// console.log(frineds);
// frineds.push("Bhoga"); ////   add elements in the end     //////////
// console.log(frineds);
// frineds.unshift("Nikhil"); /////////   add elements in the start    //////////
// console.log(frineds);
// frineds.pop();          /////////    removes last elenent      ///////////
// frineds.shift();         /////////    removes first elenent      ///////////
// console.log(frineds);
// console.log(frineds.indexOf("Beta"));

// const bills = [125, 555, 45];
// for (const amount of bills) {
//   const tax = amount >= 300 ? amount * 0.2 : amount * 0.15;
//   console.log(
//     `The bill amount is ${amount} & tax is ${tax} & total amount is ${
//       amount + tax
//     }`
//   );
// }

// console.log(juice);
// function challange

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(20, 30, 40));

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(`The Average score of Dolphins are ${scoreDolphins}`);
// console.log(`The Average score of Koalas are ${scoreKoalas}`);

// const checkWinner = (scoreKoalas, scoreDolphins) => {
//   if (scoreDolphins >= 2 * scoreKoalas) {
//     console.log(
//       `Dolphins are the winners with ${scoreDolphins} vs ${scoreKoalas}`
//     );
//   } else if (scoreKoalas >= 2 * scoreDolphins) {
//     console.log(
//       `Koalas are the winners with ${scoreKoalas} vs ${scoreDolphins}`
//     );
//   } else {
//     console.log("No team wins the trophy");
//   }
// };
// checkWinner(scoreKoalas, scoreDolphins);
// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
// checkWinner(555, 111);
// checkWinner(111, 5555);

// // Arrays Challangconsol;

// const calcTip = amount => {
//   if (amount <= 300) {
//     console.log(
//       `The Bill amount is ${amount}. So the tip is ${
//         0.15 * amount
//       } and Total amount is ${amount + 0.15 * amount}.`
//     );
//     return 0.15 * amount;
//   } else {
//     console.log(
//       `The Bill amount is ${amount}. So the tip is ${
//         0.2 * amount
//       } and Total amount is ${amount + 0.2 * amount}.`
//     );
//     return 0.2 * amount;
//   }
// };
// const bill = [125, 555, 45];
// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// console.log(bill, tips);

// const sumOfTips = tips[0] + tips[1] + tips[2];
// console.log(sumOfTips);

// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
// console.log(total);

// const totalBill = bill.map(b => (b <= 300 ? b + b * 0.15 : b + b * 0.2));
// console.log(totalBill);
////////////////////////////////              Destructuring         ///////////////////////////

// const azfar = {
//   firstName: "Azfar",
//   lastName: "Khan",
//   age: 2021 - 1995,
//   job: "financial analyst",
//   location: "Ambernsth",
//   friends: ["Anna", "Negi", "PP", "Chotu"],
// };
// const { firstName, age, job } = azfar;
// console.log(firstName, age, job);

// for (const [i, fr] of azfar.friends.entries()) {
//   console.log(`${i + 1}: ${fr}`);
// }

/////////////////////////////////////////                    SETS                         ////////////////////////////////

// const friends = new Set(["Anna", "Negi", "PP", "Chotu", "Negi", "Chotu"]);
// console.log(friends);
// console.log(friends.size);
// console.log(friends.has("Chotu"));
// friends.add("Rajesh");
// friends.delete("PP");
// // friends.clear();
// console.log(friends);

// const unique = [...friends]; ////////////////////////            SET to ARRAY           /////////////////
// console.log(unique);

// for (const frnd of friends) console.log(frnd);

////////////////////////////                    Strings                       //////////////////////////////////////

// const airline = "TAP Air portugal";
// const plane = "A320";
// console.log(airline.length);
// console.log(airline.indexOf("A"));
// console.log(airline.lastIndexOf("A"));

// console.log(airline.slice(4, -4)); ////////////    Slice Method    /////////
// console.log(airline.slice(0, airline.indexOf(" "))); /////////     first word       //////////
// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); ////////           Last word     //////////

// const checkMiddleSeat = function (seat) {
//   ///     B and E are middle seat     ///////
//   const s = seat.slice(-1);
//   s === "B" || s === "E"
//     ? console.log("You got the middle seat 🥲")
//     : console.log("You got Lucky 😎");
// };
// checkMiddleSeat("11E");
// checkMiddleSeat("11C");
// checkMiddleSeat("11B");

// console.log(airline.toUpperCase());
// const name1 = "aZFar"; ////// Azfar   //////
// const correctName = name1[0].toUpperCase() + name1.slice(1).toLowerCase();
// console.log(correctName);

// //// Comparing Email

// const mail = "    aZFARK67@Gmail.Com";
// const correctMail = "azfark67@gmail.com";

// const email = mail.trim().toLowerCase();
// const rMail = mail.replaceAll(" ", "").toLowerCase(); ////////     Replacing    ////////
// const check = email === correctMail ? "Correct" : "Incorrect";
// console.log(check);
// console.log(email, rMail);

// const gMail = function (gmail) {
//   const cgmail = gmail.trimStart().toLowerCase();
//   cgmail === correctMail ? console.log("Correct") : console.log("Incorrect");
// };
// gMail("    aZFARK67@Gmail.Com");

// const text = "a+very+nice+array";
// const correctText = text.split("+").join(' ');
// console.log(correctText.toLocaleUpperCase());

// const name1 = function (str) {
//   const names = str.split(" ");
//   const nam = [];
//   for (const n of names) {
//     const na = n.replace(n[0], n[0].toUpperCase());
//     nam.push(na);
//   }
//   console.log(nam.join(" "));
// };
// name1("azfar khan");

// const {
//   birthPlace = (place = []), //////////////////////      setting default value               //////////////
//   location: newLocation,
//   friends: newFriends,
// } = azfar;
// console.log(birthPlace, newFriends, newLocation);

// let a = 100;
// let b = 125;
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// ({ a, b } = obj); ////////////////           mutating variables
// console.log(a, b);

// const temp = prompt('choose what you want to know. firstname , lastname, age, job, friends');
// if (azfar[temp]) {
//   console.log(azfar[temp]);
// } else {
//   console.log('Wrong Request');
// }

// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };
// const bmi = mark.calcBMI;
// console.log(bmi.call(mark));
// john.calcBMI();
// console.log(mark.BMI, john.BMI);

// mark.BMI > john.BMI
//   ? console.log(
//       `${mark.fullName} BMI (${mark.BMI}) is greater than ${john.fullName} BMI (${john.BMI})`
//     )
//   : console.log(
//       `${john.fullName} BMI (${john.BMI}) is greater than ${mark.fullName} BMI (${mark.BMI})`
//     );

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = function (amount) {
//   if (amount < 300) {
//     return 0.15 * amount;
//   } else {
//     return 0.2 * amount;
//   }
// };
// for (i = 0; i < bills.length; i++) {
//   const tipp = calcTip(bills[i]);
//   const totall = tipp + bills[i];
//   tips.push(tipp);
//   totals.push(totall);
// }
// console.log(tips);
// console.log(totals);

// const name = "azfar";
// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   let c = 3;
//   return c;
// };

// const x = first();
// console.log(x);

///////////////////////////////////////         functions          ///////////////////////////////////

// const booking = function (
//   flightNum,
//   numPassenger = 5, ////////////     Setting default parameters
//   bookingAmt = 500 * numPassenger
// ) {
//   const bookings = {
//     flightNum,
//     numPassenger,
//     bookingAmt,
//   };
//   console.log(bookings);
// };
// booking("A320");
// booking("A410", 50);
// booking("B820", 500, 5000);

/////////////////////////           Higher order function & Call back function
// const continued = function (str) {
//     return str.replaceAll(' ' , '');
// }

// const firstUpper = function (str) {
//     const [first , ...other]=str.split(' ');
//     return [first.toUpperCase() , ...other].join(' ');
// }
// console.log(firstUpper('javascript is not that difficult'));

// const transformer = function (str , fn) {
//     console.log(`this is transformed string : ${fn(str)}`);
//     console.log(`transformer by ${fn.name}`);
// }
// transformer('javascript is not that difficult',firstUpper);

///////////////////////           Function returning other function
// const greet = function (greeting) {
//   return function abc(name1) {
//     console.log(`${greeting} ${name1}`);
//   };
// };
// greet("Hello")("Azfar");
// const hello = greet("Hello");
// hello("Azfar");

// // const greet = greeting => name => console.log(`${greeting} ${name}`);
// // greet('Hello')('Azfar');

////////////////////////       Call Method          ///////////////////////////////

// const luftanga = {
//   airline: "Luftanga",
//   code: "LH",
//   booking: [],
//   // book: function(flightNum, name){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.code}${flightNum}`, name });
//   },
// };
// luftanga.book(124, "Azfar");
// console.log(luftanga);

// const eurowings = {
//   airline: "Eurowings",
//   code: "EW",
//   booking: [],
// };
// console.log(eurowings);
// const book = luftanga.book; /////  Book will become a normlal function
// book.call(eurowings, 104, "Raj"); ////    using this function this.key will point undefined

// // book.apply(eurowings ,[ 125 , 'Chotu']); //this is important function can be used for multuple objects.

// const myObject = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const fullName = myObject.fullName;
// const azfar = {
//   firstName: "Azfar",
//   lastName: "Khan",
// };
// console.log(fullName.apply(azfar));

// ////////////////////////             Bind Method             //////////////////////////

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
// };

// console.log(new Product('rive', 455));
// const product1 = new Product('azfar', 355);
// console.log(product1);
// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }

// console.log(new Food("cheese", 5).name);
// let a = 10;

// const number = function () {
//   a = 50;
//   const b = 20;
//   return (number1 = function () {
//     console.log(b);
//     console.log(a);
//   });
// };
// number()();

/////////////////////////////////////////////                       Closures               ///////////////////

// const booker = function () {
//   let countNumber = 0;
//   return function () {
//     return function () {
//       countNumber++;
//       console.log(`${countNumber}`);
//     };
//   };
// };
// const booking = booker()();
// console.log(booking);
// booking();

// const boarPassengers = function (n, wait) {
//   let preGroup = n / wait;
//   setTimeout(function () {
//     console.log(`We are oarding now all ${n} passengers.`);
//     console.log(`There are 3 groups with ${preGroup} passengers.`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} sec.`);
// };
// boarPassengers(240, 3);
// boarPassengers(900, 4);

// (function () {
//   const heading = document.querySelector("h1");
//   heading.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     heading.style.color = "blue";
//   });
// })();

// const name1 = "Azfar Khan";
// console.log(name1[8]);
// console.log(name1.lastIndexOf('a'));
// console.log(name1.slice(2,5));
// console.log(name1.length);
// console.log(name1.slice(0 , name1.indexOf(' ')));
// console.log(name1.slice(name1.lastIndexOf(' ')+1));

// const checkMySeat = function (seat) {
// // const s =  seat[seat.length-1];
// const s =  seat.slice(-1);
// if (s==='B'|| s==='E'){
//     console.log('You got the middle seat ');
// } else {
//     console.log('You got the side seat ')
// }
// }

// checkMySeat('11B');
// checkMySeat('11G');

// console.log(name1.toLocaleLowerCase());
// console.log(name1.toLocaleUpperCase());
// const passenger = name1[0].toLocaleUpperCase() + name1.slice(1).toLocaleLowerCase();
// console.log(passenger);

// const email = 'azfark67@gmail.com';
// const emailId = '   AzFarK67@Gmail.Com';
// const lower = emailId.toLocaleLowerCase().trim();
// console.log(lower);
// // const j =emailId.replaceAll(' ','').toLocaleLowerCase();
// // console.log(j);

// const newEmail = function (mail) {
//     const emailID = 'azfark67@gmail.com';
//     const correctedId = mail.toLocaleLowerCase().trim();
//     if (correctedId===emailID){
//         console.log("Challenge Successfully completed");
//     }

// }
// newEmail('   AzFarK67@Gmail.Com');

// const price = '244,343$'
// const usPrice = price.replace(',','.').replace('$','@');
// console.log(usPrice);

// const step1 = 'A+very+good+evening+everyone';
// const step2 = step1.split('+');
// console.log(step2);
// console.log(...step2);

// const [firstName , lastName] = name1.split(' ');
// console.log(`${firstName} , ${lastName.toLocaleUpperCase()}`);

// const fullName = ['Mr.', firstName , lastName].join(' ');
// console.log(fullName);

// const capitalizeName = function (item) {
//   const name3 = item.split(" ");
//   const nameUpper = [];
//   for (const n of name3) {
//     // nameUpper.push(n[0].toUpperCase()+n.slice(1));
//     nameUpper.push(n.replace(n[0], n[0].toLocaleUpperCase()));
//   }
//   console.log(nameUpper.join(" "));
// };
// capitalizeName("azfar khan");

// const greeting = ['welcome' , 'to' ,'Ambernath' , 'Station'];
// console.log(greeting.join(' '));

// const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [index , movement] of movements.entries()) {
//     if (movement>0){
//         console.log(`${index + 1} You have deposited ${movement}`)
//     } else {
//         console.log(`${index + 1} You have withdraw ${Math.abs(movement)}`)
//     }
// };

// const friends1 = new Set([
//   "Negi",
//   "Chotu",
//   "Rajesh",
//   "Beta",
//   "Chotu",
//   "Negi",
//   "Sawan",
// ]);
// friends1.add("Rohit");
// friends1.delete("Chotu");
// console.log(friends1.size);
// console.log(friends1);

//////////////////////////////////////////  forEach Method   //////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deleted = movements.splice(4, 1);
// console.log(movements);

// const movement = function (move) {
//   move.forEach((moveUsd, i) =>
//     moveUsd > 200
//       ? console.log(`${i + 1}: is converted into ${moveUsd}`)
//       : console.log(`${i + 1}: Cannaot be converted`)
//   );
// };
// movement(movements);

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsJuliaNew = dogsJulia.slice(1, -1).concat(dogsKate);
// const check = function (varify) {
//   varify.forEach(function (dog, i) {
//     const age =
//       dog > 3
//         ? `Dog number ${i + 1} is adult and is ${dog} years old`
//         : `Dog number ${i + 1} is still a Puppy`;
//     console.log(age);
//   });
// };
// check(dogsJuliaNew);

// console.log(dogsJuliaNew);

// const humanAge = dogsJuliaNew.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
// console.log(humanAge);

// const adultHuman = humanAge.filter(age18 => age18 > 18);
// console.log(adultHuman);

// const avgAge = adultHuman.reduce(function (acc, cur, i, arr) {
//   return acc + cur / arr.length;
// }, 0);
// console.log(avgAge);

// const averageAge = function (avg) {
//   const humanAge = avg
//     .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
//     .filter(age18 => age18 > 18);
//   const adultHuman = humanAge.filter(age18 => age18 > 18);
//   const average =
// adultHuman.reduce((acc, cur) => acc + cur) / adultHuman.length;
//   console.log(average);
// };
// averageAge(dogsJuliaNew);

// const averageAge = avg => {
//   const humanAge = avg
//     .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
//     .filter(age18 => age18 > 18)
//     .reduce((acc, cur, i, arr) => {
//       return acc + cur / arr.length;
//     }, 0);
//   console.log(humanAge);
// };
// averageAge(dogsJuliaNew);

// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));

//////////////////////////////////////  Map Method   ///////////////////////////////////

// const eurToUsd = 1.2;
// // const movemetsToUsd = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movemetsToUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movemetsToUsd);

// const movementsNature = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1} : You have ${
//       mov > 0 ? "Deposited" : "withdraw"
//     } ${Math.abs(mov)}`
// );
// console.log(movementsNature);

// const movement = function (move) {
//   const moveUsd = move.map(moveUsd => moveUsd * 1.2)
//   console.log(moveUsd);
// }
// movement(movements);

///////////////////////////////////////// Filter Method   ///////////////////////////////////////////

// const deposit = movements.filter(move => move > 0);
// console.log(deposit);

// const withdrew = mov => {
//   const withD = mov.filter(move => move < 0);
//   console.log(withD);
// };
// withdrew(movements);

///////////////////////////////////////// Reduce Method   ///////////////////////////////////////////

// const balance = movements.reduce((acc, current) => acc + current, 0);
// console.log(balance);

// const max = movements.reduce((acc, cur) => {
//   if (acc > cur) return acc;
//   else return cur;
// }, movements[0]);
// console.log(max);

///////////////////////////////       simplied version        /////////////////

// const max = movements.reduce(
//   (acc, cur) => (acc > cur ? acc : cur),
//   movements[0]
// );
// console.log(max);

// const depositAmt = movements
//   .filter(depo => depo > 0)
//   .map(movUsd => movUsd * 1.2)
//   .reduce((acc, mov) => acc + mov);
// console.log(depositAmt);

////////////////////////////        Find Method        ///////////////////////

// const findN = movements.find(mov => mov < 0);
// console.log(findN);

// const findOwner = function (mov) {
//   const owner1 = mov.find(owner => owner === "Sarah Smith");
//   console.log(owner1);
// };
// findOwner(accounts);

// const findOwner = function (mov) {
//   const owner1 = mov.find(acc => acc.owner === 'Sarah Smith');
//   console.log(owner1);
// };
// findOwner(accounts);

//////////////         Flat abd flatMap methods

// Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const allMov = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(dep => dep > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(allMov);

// //////////////////////                        Sorting                             /////////////////

// const friends = ["Negi", "Chotu", "Rajesh", "Beta", "Chotu", "Negi", "Sawan"];
// console.log(friends.sort());
// const num = [200, -200, 340, -300, -20, 50, 400, -460];
// // console.log(num.slice());
// num.sort((a, b) => b - a);
// console.log(num);

// // /////////////////                   Ways of creating and filling array                   /////////////////////
// const x = new Array(7);
// console.log(x);
// // x.fill(1); ///////////////             fill method (mutates the original array)
// console.log(x);
// x.fill(1, 3, 5); /////////    First argument is element and 2nd argument is index and 3rd argument is the index upto which you want to fill
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1); //////////    first argument is object where you have to define the length and 2nd argument is function
// console.log(y);
// const z = Array.from({ length: 100 }, (_, i) => i + 1); //////////       In function the first parameter is current and end is index
// console.log(z);
// const dice = Array.from({ length: 100 }, () =>
//   Math.floor(Math.random() * 6 + 1)
// );
// console.log(dice);

//////////////                         More practice with array                      //////////////

// const allMov2 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(dep => dep > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(allMov2);

// const allMov1 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(dep => dep > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(allMov1);

// const allMov5 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(dep => dep > 1000);
// // .reduce((acc, cur) => acc + cur, 0);
// console.log(allMov5.length);

// const { deposits, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawal += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawal: 0 }
//   );
// console.log(deposits, withdrawal);

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ["a", "and", "an", "the", "but", "or", "on", "with"];
//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(" ");
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too long"));
// console.log(convertTitleCase("and here is another title with an example"));

// TEST DATA
// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach(dog => (dog.recFood = dog.weight ** 0.75 * 28));
// console.log(dogs);

// dogs.forEach(dog => {
//   if (dog.owners.includes("Sarah")) {
//     dog.recFood < dog.curFood
//       ? console.log("Dog is not getting enough food")
//       : console.log("Dog is getting enough food");
//   }
// });

// const ownerGreaterFood = [];
// const ownerLeassFood = [];

// dogs.forEach(dog => {
//   if (dog.recFood < dog.curFood) {
//     ownerLeassFood.push(...dog.owners);
//   } else {
//     ownerGreaterFood.push(...dog.owners);
//   }
// });
// console.log(ownerGreaterFood);

// const greaterFood = "";
// const lessFood = "";
// ownerGreaterFood.forEach(owner => {
//   greaterFood + owner + "and" + " ";
// });
// console.log(greaterFood);

// dogs.sort((a, b) => a.recFood - b.recFood);
// console.log(dogs);

// /////////////////                          Converting              /////////////////
// console.log(Number("5") === +"5");

// // console.log(Number.parseInt("24rem"));
// // console.log(Number.parseInt("rem50"));
// // console.log(Number.parseInt("2.4rem"));
// // console.log(Number.parseFloat("2.4rem"));

// console.log(isNaN(20));
// console.log(isNaN("20k"));
// console.log(isNaN(+"20"));
// console.log(isNaN(20 / 0));

// // console.log(Number.isFinite(20));
// // console.log(Number.isFinite("20"));
// // console.log(Number.isFinite(20 / 0));

// //////////////////                Math & Rounding                     //////////////////////

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// console.log(Math.max(2, 3, 5, 8, 12, 17));
// console.log(Math.min(2, 3, 5, 8, 12, 17));

// console.log(Math.PI * Number.parseFloat("10x") ** 2);

// console.log(Math.floor(Math.random() * 6) + 1);
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 6) + 1);

// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + min);
// console.log(randomInt(10, 20));

// console.log(Math.floor(20.5));
// console.log(Math.trunc(20.5));
// console.log(Math.floor(-20.5));
// console.log(Math.trunc(-20.5));

// console.log(Math.round(20.5));
// console.log(Math.ceil(20.5));
// console.log(Math.round(-20.5));
// console.log(Math.ceil(-20.5));

// const future = new Date(2022, 01, 12, 14, 50);
// console.log(future.toISOString());

// const daysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);
// console.log(daysPassed(new Date(2022, 01, 12), new Date(2022, 01, 22)));

/////////////////        Advanced DOM
////////////////    Selecting elements
// const head = document.head;
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelectorAll(".btn"));

// document.getElementById("name");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(document.getElementsByClassName("course"));

// //////////      Creating and inserting element

// // .insertAdjucentElement
// const message = document.createElement("div");
// message.classList.add("cooki-message");
// message.textContent =
//   "Making website is now one of the easiest thing in the world. You just need to learn.";
// const message1 = document.querySelector(".text-box");

// // message1.prepend(message);
// // message1.append(message);

// // message1.before(message);
// // message1.after(message);

// document.createElement(".btn").addEventListener("click", function () {
//   message.remove;
// });

// document.documentElement.style.setProperty("--color-primary", "oranged");

/////////     Constractor function

// const Person = function (firstName, birthDate) {
//   this.firstName = firstName;
//   this.birthDate = birthDate;
// };
// const azfar = new Person("Azfar", 1995);
// console.log(azfar);
// Person.prototype.calAge = function () {
//   console.log(`${2022 - this.birthDate}`);
// };
// console.log(Person.prototype);
// azfar.calAge();

/////////   ES6 Classes

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// nik() {
//   this.firstName.forEach(nikNa => {
//     [nikNa[0], ...other] = nikNa;
//     console.log(nikNa[0]);
//   });
// }
// }
// Person.prototype.calAge = function () {
//   console.log(`${2022 - this.birthYear}`);
// };
// const azfar = new Person("Azfar", 1995);
// console.log(azfar);

// const azfar = ["azfar", "khan", "ak", "age"];
// [azfar[0], ...other] = azfar;
// console.log(other)

// const lottery = new Promise(function (resolve, reject) {
//   console.log("Lottery Draw is Happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You WON'💰💰`);
//     } else {
//       reject(new Error(`You LOST your Money 😭😭`));
//     }
//   }, 200);
// });
// lottery.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// };
// wait(1)
//   .then(() => {
//     console.log("1 sec passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 sec passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 sec passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 sec passed");
//     return wait(1);
//   });
// const loc = fetch("https://geocode.xyz/51.50354,-0.12768?geoit=json")
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));

// const countries = async function () {
//   const res = await fetch(`https://restcountries.com/v3.1/all`);
//   console.log(res);
//   const data = await res.json();
//   console.log(data.slice(0, 10));
//   data.slice(0, 10).forEach((data) =>
//     console.log(
//       // region: data.region,
//       // capital: data.capital,
//       data.continents
//     )
//   );
// };
// countries();
const age = [22, 23, 24, 24];
let details = [
  {
    Name: "Azfar",
    Surname: "Khan",
  },
  {
    Name: "Akash",
    Surname: "Negi",
  },
  {
    Name: "Rajesh",
    Surname: "Prasad",
  },
  {
    Name: "Suraj",
    Surname: "Thakur",
  },
];

const fullDetail = [];
for (let i = 0; i < age.length; i++) {
  const additional = { ...details[i], age: age[i] };
  fullDetail.push(additional);
}
// console.group(fullDetail);
details = details.map((detail, index) => ({ ...detail, age: age[index] }));
console.log(details);
