// Selecting the DOM
const textBtn = document.querySelector("#fetch-text");
const employeeBtn = document.querySelector("#fetch-employee");
const text = "text.txt";
const textOutput = document.querySelector("#text-output");
//Adding Event Listener
textBtn.addEventListener("click", fetchText);
employeeBtn.addEventListener("click", getEmployee);
//Creating Functions

function fetchText() {
  //Using ES5
  /*fetch("text.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
       console.log(data);
    });*/

  //By using ES6 Arrow function

  fetch("text.txt")
    .then((res) => res.text())
    .then((data) => {
      //Inserting the data into the DOM
      textOutput.innerHTML = data;
    })
    //catching errors from promises
    .catch((err) => console.log(err));
}
function getEmployee() {
  fetch("employee.json")
    .then((res) => res.json())
    .then((data) => {
      let showData = "<h3>Employee</h3>";
      data.forEach((employee) => {
        showData += `
       <ul>
       <li>ID:${employee.id} </li>
       <li>Name:${employee.name} </li>
       <li>Email:${employee.email} </li>
       </ul>
       `;
      });
      textOutput.innerHTML = showData;
    })
    .catch((err) => console.log(err));
}
