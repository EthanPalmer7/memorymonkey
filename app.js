const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");
const formContainer = document.querySelector(".form-container");
const addButton = document.querySelector(".add-btn");

let words = {
  hello: "bonjour",
  goodbye: "chao",
  omg: "oh my gawd",
};

let data = Object.entries(words);

function getRandomWord() {
  randomTerm = data[Math.floor(Math.random() * data.length)];
  term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
  definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

// <br>
const lineBreak = document.createElement("br");

// <form class="form"></form>
const inputForm = document.createElement("form");
inputForm.setAttribute("class", "form");

// <input type="submit" class="submit-btn" value="click me to submit">
const submitInput = document.createElement("input");
submitInput.setAttribute("type", "submit");
submitInput.setAttribute("class", "submit-btn");
submitInput.setAttribute("value", "click me to submit");

// <textarea rows="5" cols="50" placeholder="Enter your texrt here!!!" class="textarea"></textarea>
const textArea = document.createElement("textarea");
textArea.setAttribute("rows", "5");
textArea.setAttribute("cols", "50");
textArea.setAttribute("placeholder", "Enter your texrt here!!!");
textArea.setAttribute("class", "textarea");

/*
<form class="form">
  <textarea rows="5" cols="50" placeholder="Enter your texrt here!!!" class="textarea"></textarea>
  <br>
  <input type="submit" class="submit-btn" value="click me to submit">
</form>
*/
inputForm.appendChild(textArea);
inputForm.appendChild(lineBreak);
inputForm.appendChild(submitInput);

/*
<div class="form-container">
  <form class="form">
    <textarea rows="5" cols="50" placeholder="Enter your texrt here!!!" class="textarea"></textarea>
    <br>
    <input type="submit" class="submit-btn" value="click me to submit">
  </form>
</div>
*/
addButton.addEventListener("click", () => {
  formContainer.appendChild(inputForm);
  inputForm.style.display = "grid";
});

inputForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let userInput = textArea.value;
  console.log(userInput);
  inputForm.style.display = "none";
});

checkButton.addEventListener("click", () => {
  definition.style.display = "block";
});

nextButton.addEventListener("click", () => {
  definition.style.display = "none";
  getRandomWord();
});
