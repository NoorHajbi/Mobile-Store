'use strict';
//declerations
let phones = [];
let headerElements = ['User', 'Type', 'Price', 'Condition'];
let table = document.getElementById('table');
let form = document.getElementById('form');
let submitBtn = document.getElementById('submit');
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}
// Add a fourth column to the table 
function fourthCol(value) {
    if (value <= 200) {
        return "Used";
    }
    else if (value > 200) {
        return "new";
    }
}
//constructor
function Mobile(name, type, price, condition) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.condition = condition;
    phones.push(this);
    this.render();
}
//setter last
function setItems() {
    let settedData = JSON.stringify(phones);
    localStorage.setItem('phones', settedData); //form lis

}
//theader
function tableHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    for (let cells = 0; cells < headerElements.length; cells++) {
        let headerCell = document.createElement('td');
        headerRow.appendChild(headerCell);
        headerCell.textContent = headerElements[cells];

    }
}
tableHeader();
//checkheader
Mobile.prototype.render = function () {
    let bodyRow = document.createElement('tr');
    table.appendChild(bodyRow);
    let nameCell = document.createElement('td');
    bodyRow.appendChild(nameCell);
    nameCell.textContent = this.name;
    let typeCell = document.createElement('td');
    bodyRow.appendChild(typeCell);
    typeCell.textContent = this.type;
    let priceCell = document.createElement('td');
    bodyRow.appendChild(priceCell);
    priceCell.textContent = this.price;
    let conditionCell = document.createElement('td');
    bodyRow.appendChild(conditionCell);
    conditionCell.textContent = this.condition;
}
form.addEventListener('submit', submitter);
function submitter(event) {
    event.preventDefault();
    let userName = event.target.userName.value;
    let phoneType = event.target.phoneType.value;
    let price = randomNumber(100, 500);
    let condition = fourthCol(price);
    new Mobile(userName, phoneType, price, condition);
    setItems();
}
//tbody
function getItems() {
    let getData = localStorage.getItem('phones');
    let parse = JSON.parse(getData);
    if (parse) {
        for (let i = 0; i < headerElements.length; i++) {
            new Mobile(parse[i].name, parse[i].type, parse[i].price, parse[i].condition);

        }
    }

}
getItems();