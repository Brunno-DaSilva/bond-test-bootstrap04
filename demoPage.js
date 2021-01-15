const cardsData = document.getElementById("data");
const fetchedDataArr = [];

const URL =
  "https://res.friscoisd.org/services/Bond/Project?filterType=id&filter=" +
  getParameterByName("pid") +
  "&refresh=true";

console.log(URL);

const htmlData = ({
  ThumbnailImg,
  ProjectTitle,
  ProjectedCompletionString,
  ProjectedBudget,
  PercentComplete,
  Description,
  IsComplete,
  ProjectId,
}) => {
  return `
    <div class="searched-items">
      <div class="items-head">
        <div class="img-container">
          <img src=${ThumbnailImg} alt=${ProjectTitle} />
          ${
            IsComplete
              ? `<div class="img-container__label">
                    <p>Completed</p>
                 </div>`
              : `""`
          }

        </div>
        <div class="item-wrapper">
          <div class="items-short-info">
            <div class="short-info-holder">
              <i class="fas fa-calendar-alt"></i>
              <span>${ProjectedCompletionString}</span>
            </div>
            <div class="short-info-holder">
              <i class="fas fa-coins"></i>
              <span>$${
                ProjectedBudget >= 1000000
                  ? ProjectedBudget.toFixed(2).slice(0, 2)
                  : ProjectedBudget.toFixed(2).slice(0, 3)
              } 
              ${ProjectedBudget >= 1000000 ? "M" : "K"}
              </span>
            </div>
  
            <div class="short-info-holders progress-bar">
              <div class="progress-bar-value">
                ${PercentComplete}% 
              </div>
              <div class="progress-bar-fill"></div>
            </div>
  
          </div>
  
          <h2 class="item-wrapper-title">
            ${ProjectTitle}
          </h2>
        </div>
      </div>
      <div class="items__body">
        <div class="item__text-wrapper">
          <p class="item__text">${Description}</p>
        </div>
        <div class="item__btn-container">
          <button type="button">
            <a class="anchor-override" href="http://dev.friscoisd.org/about/2018-bond-program/project-info-details-demo?pid=${ProjectId}">
            Details
            </a>
          </button>
        </div>
      </div>
    </div>`;
};

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    fetchedDataArr.push(...data);
    console.log(fetchedDataArr[1]);
    const markup = fetchedDataArr
      .map((data) => {
        return htmlData(data);
      })
      .join("");
    cardsData.innerHTML = markup;
  })
  .catch((error) => {
    cardsData.innerHTML = `
      
      <div class="notFound">
        <div class="notFound__img">
          <img src="https://res.cloudinary.com/duprwuo4j/image/upload/v1608312445/fisd-logo-full-color-rgb_mqunwz.png" alt="Search Icons">
        </div>
        <div class="notFound__text">
          <h3>No results containing all your search terms were found.</h3>
          <p>Your search: <span>${this.value}</span></p>
          <p>Try searching for title, category, or campus type</p>
        </div>
      </div>`;
  });

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
