'use strict'


function randomValue(min, max){  // from MDN
    return Math.floor(Math.random() * (max - min + 1) + min); }

let form = document.getElementById('form');
let contain = document.getElementById('contain');
let table = document.createElement('table');
contain.appendChild(table);



let arrOfall=[];

function Donation(fname,amount){

    this.fname = fname;
    this.amount = amount;
    this.age =null;
  
    arrOfall.push(this);
    
console.log(arrOfall);

}



Donation.prototype.randomAge = function () {
    for (let i=0 ; i< arrOfall.length ; i++){
        this.age=(randomValue(19, 30));
    }
}

function randomTwo() { // this is to convert data while get it from local storage as the orginal random function was prototype
for (let j=0 ; j<arrOfall; j++){
    for (let i=0 ; i< arrOfall.length ; i++){
        this.age=(randomValue(19, 30));
    }
}
}


function handelsubmit(event) {
    event.preventDefault();
    let first = event.target;
    let fname = first.fname.value;
    let amount = first.amount.value;
   let newIns = new Donation(fname,amount);
   
   
   saveTols();
   render();
   newIns.randomAge();
   newIns.renderPro();
  
  
}

let title = ['Donor Name' , 'Donor Age' , 'Amount']

function headerRow(){
    let tableHead = document.createElement('tr');
    table.appendChild(tableHead);
    for (let i = 0 ; i <title.length; i++){
        let headData = document.createElement('th');
        tableHead.appendChild(headData);
        headData.textContent = title[i];
    }
}


Donation.prototype.renderPro = function (){
    let tableInfo = document.createElement('tr');
    table.appendChild(tableInfo);

    let dataInfo;
     dataInfo = document.createElement('td');
    tableInfo.appendChild(dataInfo);
    dataInfo.textContent = this.fname;
     dataInfo = document.createElement('td');
    tableInfo.appendChild(dataInfo);
    dataInfo.textContent = this.age;
     dataInfo = document.createElement('td');
    tableInfo.appendChild(dataInfo);
    dataInfo.textContent = this.amount;
}


function render(){// this is to convert data while get it from local storage as the orginal rendering function was prototype
    for (let j=0 ; j<arrOfall; j++){
    let tableInfo = document.createElement('tr');
    table.appendChild(tableInfo);

    let dataInfo;
     dataInfo = document.createElement('td');
    tableInfo.appendChild(dataInfo);
    dataInfo.textContent = arrOfall[i].fname;
     dataInfo = document.createElement('td');
    tableInfo.appendChild(dataInfo);
    dataInfo.textContent = arrOfall[i].age;
     dataInfo = document.createElement('td');
    tableInfo.appendChild(dataInfo);
    dataInfo.textContent = arrOfall[i].amount;
    
}
}


form.addEventListener('submit', handelsubmit);

getFromls();
headerRow();
randomTwo();


function saveTols() {
    let arr = JSON.stringify(arrOfall);
    localStorage.setItem('saved' , arr)
}

function getFromls() {
   let data = localStorage.getItem('saved');
   let order = JSON.parse(data);
if (order) {
    arrOfall=order;
}
}


