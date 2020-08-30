// Selecting the DOM
const textBtn = document.querySelector("#fetch-text");
const employeeBtn = document.querySelector("#fetch-employee");
const commentsBtn = document.querySelector("#fetch-comments");
const textOutput = document.querySelector("#text-output");
const text = "text.txt";
const url = "https://jsonplaceholder.typicode.com/comments";
//Adding Event Listener
textBtn.addEventListener("click", fetchText);
employeeBtn.addEventListener("click", getEmployee);
commentsBtn.addEventListener("click", getComments);
//Creating Functions
//Get Text
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
//Get Users
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
//Get Comments

function getComments() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let showData = "<h3>Comments</h3>";
      data.forEach((comment) => {
        showData += `
       <ul>
       <li><strong>ID:</strong>${comment.postId} </li>
       <li><strong>Name:</strong>${comment.name} </li>
       <li><strong>Email:</strong>${comment.email} </li>
       <li><strong>Comment:</strong>${comment.body} </li>
       </ul>
       `;
      });
      textOutput.innerHTML = showData;
    })
    .catch((err) => console.log(err));
}
