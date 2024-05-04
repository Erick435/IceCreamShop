"use strict";

let numberOfScoops = document.getElementById("numberOfScoops");

// Cone or Cup Option
let coneOption = document.getElementById("coneOption");
let cupOption = document.getElementById("cupOption");

// toppings section
let toppingsSection;
let sprinklesOption = document.getElementById("sprinklesOption");
let whippedCreamOption = document.getElementById("whippedCreamOption");
let hotFudgeOption = document.getElementById("hotFudgeOption");
let cherryOption = document.getElementById("cherryOption");

let baseAmountPrice = document.getElementById("basePriceAmount");
let taxAmountPrice = document.getElementById("taxAmount");

let finalAmount = document.getElementById("totalAmount");

let totalAmount = 0;
let taxAmount = 0;
let basePriceAmount = 0;

const scoopPriceAmount = 2.25;
const additionalScoops = 1.25;


window.onload = function () {
    
    const submitOrderButton = document.getElementById("submitOrderButton");
    coneOption = document.getElementById("coneOption");
    cupOption = document.getElementById("cupOption");
    toppingsSection = document.getElementById("toppingsSection");


    coneOption.onclick = hideOrShowToppings;
    cupOption.onclick = hideOrShowToppings;

    submitOrderButton.onclick = calculateOrder;

}

function calculateOrder() {

    checkNumberOfScoops();

    calculateNumberOfScoops();

    addToppingsAmount();

    replacePriceSection();

}

function checkNumberOfScoops() {
    if (numberOfScoops.value < 1 || numberOfScoops.value > 4){
        alert("Please enter a number between 1 and 4");
    }
}

function calculateNumberOfScoops() {
    let priceOfScoops = scoopPriceAmount;

    console.log("Number of scoops: " + numberOfScoops.value);

    if (numberOfScoops.value == 2) {
        priceOfScoops += additionalScoops;
    }
    else if (numberOfScoops.value == 3) {
        priceOfScoops += (additionalScoops * 2);
    }
    else if (numberOfScoops.value == 4) {
        priceOfScoops += (additionalScoops * 3);
    }

    totalAmount = priceOfScoops;

    console.log("NumberOfScoops: " + numberOfScoops.value + "\nTotalPrice: " + priceOfScoops);

}

function addToppingsAmount() {

    console.log("\nTotalPrice currently: " + totalAmount);

    if (cupOption.checked) {

        if (sprinklesOption.checked) {
            totalAmount += .5;
            console.log("\nWith Sprinkles (.50) added, the total is now: " + totalAmount);
        }
        if (whippedCreamOption.checked) {
            totalAmount += .25;
            console.log("\nWith whipped cream (.25) added, the total is now: " + totalAmount);
        }

        if (hotFudgeOption.checked) {
            totalAmount += 1.25;
            console.log("\nWith Hot Fudge (1.25) added, the total is now: " + totalAmount);
        }

        if (cherryOption.checked) {
            totalAmount += .25;
            console.log("\nWith Cherry (.25) added, the total is now: " + totalAmount);
        }
    }

    basePriceAmount = totalAmount;

    // Add tax amount
    taxAmount = totalAmount * .03;
    console.log("\nTax amount added: " + taxAmount);

    // add all amounts to get total amount
    totalAmount += taxAmount;
    console.log("\nNew total amount added: " + totalAmount);

}


function hideOrShowToppings() {

    if (coneOption.checked) {
        toppingsSection.style.display = "none";
        console.log("Toppings section has been hidden");
    }
    else if (cupOption.checked) {
        toppingsSection.style.display = "block";
        console.log("Toppings section has been shown")
    }
    else {
        console.log("Error: " + toppingsSection.style.display)
    }

    console.log(toppingsSection.style.display);

}

function replacePriceSection() {

    baseAmountPrice.innerText = basePriceAmount;
    taxAmountPrice.innerText = taxAmount.toFixed(2);
    finalAmount.innerText = totalAmount.toFixed(2);
}
