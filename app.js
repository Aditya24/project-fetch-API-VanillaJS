// Selecting the DOM
const textBtn = document.querySelector("#fetch-text");
const text = "text.txt";
//Adding Event Listener
textBtn.addEventListener("click", fetchText);

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
    .then((data) => console.log(data));
}
