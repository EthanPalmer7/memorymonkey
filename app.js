const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

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

checkButton.addEventListener("click", () => {
  definition.style.display = "block";
});

nextButton.addEventListener("click", () => {
  definition.style.display = "none";
  getRandomWord();
});
