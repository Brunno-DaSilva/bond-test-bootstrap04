/*===================
==>  Variables
===================*/

const progress = document.querySelector(".progress-bar__completed");
const percentage_completion = document.getElementById("percentage_completion");
const BASE_URL = `https://res.friscoisd.org/services/Bond/ProjectCompletion?refresh=true`;
const data = 70;
const percentage_span = `<span>${data} Completion</span>`;
const dataSet = [];

/*=====================
==>  DOM Manipulation
=====================*/

function getData(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((jsonData) => {
      percentage_completion.innerHTML = `${jsonData.CompletionPercentage}`;
      progress.style.width = `${jsonData.CompletionPercentage}%`;
      progress.style.opacity = 1;
    })
    .catch((error) => {
      console.log("This is an error", error);
    });
}

getData(BASE_URL);
