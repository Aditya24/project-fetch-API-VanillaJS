// Selecting the DOM
const textBtn = document.querySelector("#fetch-text");
const employeeBtn = document.querySelector("#fetch-employee");
const commentsBtn = document.querySelector("#fetch-comments");
const textOutput = document.querySelector("#text-output");
const addComments = document.querySelector("#addComments");
const text = "text.txt";
const url = "https://jsonplaceholder.typicode.com/comments";
//Adding Event Listener
textBtn.addEventListener("click", fetchText);
employeeBtn.addEventListener("click", getEmployee);
commentsBtn.addEventListener("click", getComments);
addComments.addEventListener("submit", addComment);
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
       <ul class="list-group mb-4">
       <li class="list-group-item">ID:${employee.id} </li>
       <li class="list-group-item">Name:${employee.name} </li>
       <li class="list-group-item">Email:${employee.email} </li>
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
      let showData = '<h3 class="mb-4">Comments</h3>';
      data.forEach((comment) => {
        showData += `
       <div class="card-card-body mb-4">
       <ul class="list-group mb-4>
       <li class="list-group-item"><strong>ID:</strong>${comment.postId} </li>
       <li class="list-group-item"><strong>Name:</strong>${comment.name} </li>
       <li class="list-group-item"><strong>Email:</strong>${comment.email} </li>
       <li class="list-group-item"><strong>Comment:</strong>${comment.body} </li>
       </ul>
       </div>
       `;
      });
      textOutput.innerHTML = showData;
    })
    .catch((err) => console.log(err));
}

function addComment(e) {
  //Because it's a form, we prevent it from submitting to a file
  e.preventDefault();
  //Getting the values of the title and the comment field
  let name = document.querySelector("#name").value;
  let body = document.querySelector("#body").value;

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name: name, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
