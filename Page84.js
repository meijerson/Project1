/**
 *   Bloswick, Mackenzie (bloswickm@student.ncmich.edu)
 *   Project 1 || created: 09.25.2016
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNum, numBed, numBath, numCar;
let houseTotal;
let basePrice = 50000;

function main() {
    setLotNum();
    setNumBed();
    setNumBath();
    setNumCar();
    setTotal();
    printTotal();
}

main();

function setLotNum() {
    lotNum = PROMPT.question(`\nWhich lot in River Falls would you like? `);
}
function setNumBed() {
    numBed = PROMPT.question(`\nPlease enter desired bedrooms: `);
}

function setNumBath() {
    numBath = PROMPT.question(`\nPlease enter desired bathrooms: `);
}

function setNumCar() {
    numCar = PROMPT.question(`\nHow many cars would you like your garage to hold? `);
}

function setTotal() {

    houseTotal = numBed * 17000 + numBath * 12500 + numCar * 6000 + basePrice;
}
function printTotal() {
    console.log("\nYour house will be built in lot " + lotNum + " ");
    console.log("\nYou have requested " + numBed + " bedrooms, " + numBath + " bathrooms, and a " + numCar + " vehicle garage.");
    console.log("\nYour total price is " + houseTotal + ".")
}