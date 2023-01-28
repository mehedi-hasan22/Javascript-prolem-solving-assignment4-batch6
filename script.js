/*-------------------------------
Problem: 1 radianToDegree
---------------------------------*/
function radianToDegree(radians) {
// here if user enters an invalid input, it wil give an error msg
if (radians < 0 || typeof radians == 'string') {
return 'please provide a valid input'
}
// it returns the result in 2 decimal places
else {
// pi value {3.141692...}
const pi = Math.PI;
return radians * (180 / pi).toFixed(3);
}
}
/*---------------------------------
Problem:2 isJavaScriptFile
-----------------------------------*/
function isJavaScriptFile(fileName) {
// here if user enters an invalid input, it wil give an error msg
if (typeof fileName !== 'string') {
return 'please provide a valid file name'
}
// if input is okay, it check if the file is an javaScript file & returns true
else if (fileName.endsWith('.js')) {
return true;
}
// if inputs are okay but the file isn't a JS file, it returns false
else {
return false;
}
}
/*-----------------------
Problem 3: oilPrice
-------------------------*/
function oilPrice(dieselLitre, petrolLitre, octaneLitre) {
// constant oil prices per litre
const perLitreDiesel = 114;
const perLitrePetrol = 130;
const perLitreOctane = 135;
// constant cost for 1 oil
const dieselPrice = perLitreDiesel * dieselLitre;
const petrolPrice = perLitrePetrol * petrolLitre;
const octanePrice = perLitreOctane * octaneLitre;
// total price
const totalCost = dieselPrice + petrolPrice + octanePrice;
// here if user enters a invalid input, it wil give an error msg
if (typeof dieselLitre !== 'number' || typeof petrolLitre !== 'number' || typeof octaneLitre !== 'number') {
return 'please enter a valid input'
}
// if every input is okay, it returns the total price
else {
return totalCost;
}
}
/*------------------------------
Problem 4: publicBusFare
--------------------------------*/
function publicBusFare(peopleNumber) {
// constant capacity given at assignment
const busCapacity = 50;
const microBusCapacity = 11;
// here if user enters a invalid input, it wil give an error msg
if (typeof peopleNumber !== 'number') {
return 'please enter a valid input'
}
// main code which will find extra people who cannot have a micro bus for picnic. and it return their public transport fair
else {
let busPassenger = peopleNumber - (peopleNumber % busCapacity);
let restBusPassenger = peopleNumber - busPassenger;
let microBusPassenger = restBusPassenger - (restBusPassenger % microBusCapacity);
let restMicroBusPassenger = restBusPassenger - microBusPassenger;
let PublicBusPassenger = restMicroBusPassenger;
return PublicBusPassenger * 250;
}
}
/*-----------------------------
Problem 5: isBestFriend
-------------------------------*/
function isBestFriend(firstPerson, secondPerson) {
// here if user enters an invalid input, it wil give an error msg
if (isBestFriend == Number) {
return 'please enter a valid input'
}
// main code here
else if (firstPerson.name === secondPerson.friend && secondPerson.name === firstPerson.friend) {
return true;
}
// if doesn't meet main code condition, code will run via this loop. it means objects aren't equal. so it returns false
else {
return false;
}
}