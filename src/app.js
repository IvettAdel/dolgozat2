/*
* File: app.js
* Author: Erős István
* Copyright: 2023, Verebélyi Ivett
* Group: Szoft I-2 E
* Date: 2023-03-06
* Github: https://github.com/erosistvan/
* Licenc: GNU GPL
*/

const tbody = document.querySelector('#tbody');
var empList = [
    { name: 'cassis', Wheel: 28, Use:'offroad', Price: 557900 },
    { name: 'Alboin 900', Wheel: 28, Use:'trekking', Price: 519900 },
    { name: 'Asgard', Wheel: 29, Use:'technikás utak', Price: 519900 },
    { name: 'Ruga', Wheel: 29, Use: 'hegyi', Price: 372900 },
    { name: 'Reptila', Wheel: 28, Use:'városi', Price: 308900 },
    { name: 'Sirmium' , Wheel: 29, Use:'hegyi', Price: 264900 }
];

function createTable() {
    empList.forEach((emp) => {
        console.log(emp.name)   
        let tr = document.createElement('tr');

       
        let tdName = document.createElement('td');
        let tdWheel = document.createElement('td');
        let tdUse = document.createElement('td');
        let tdPrice = document.createElement('td');

        
        tdName.textContent = emp.name;
        tdWheel.textContent = emp.Wheel;
        tdUse.textContent = emp.Use;
        tdPrice.textContent = emp.Price;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdWheel);
        tr.append(tdUse);
        tr.append(tdPrice);
    });
};
createTable();


