document.addEventListener("DOMContentLoaded", () => {
  // Variables

  const app = document.getElementById("app");
  // const top_Container = document.getElementById("container__top");

  // [ ] = projectId
  // getParameterByName("pid")

  const project_ID = getParameterByName("projectId");
  const baseURL = `https://res.friscoisd.org/services/Bond/Project?filterType=id&filter=${project_ID}&refresh=true`;

  // const updateURL = `https://res.friscoisd.org/services/Bond/Updates?projectId=18BD-1009&refresh=true`;

  const dataSet = [];

  const NO_DATA_FOUND = `<div class="notFound">
  <div class="notFound__text">
    <h3>No results containing all your search terms were found.</h3>
    <p>Your search: <span>${this.value}</span></p>
    <p>Try searching for title, category, or campus type</p>
  </div>
</div>`;

  function getData() {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => {
        dataSet.push(...data);
        init();
      })
      .catch((error) => {
        app.innerHTML = `${NO_DATA_FOUND} ${error}`;
      });
  }

  function init() {
    const topContainerHTML = ({
      ThumbnailImg,
      ProjectTitle,
      ProjectedCompletionString,
      ProjectedBudget,
      PercentComplete,
      Description,
      IsComplete,
      ProjectId,
      Category,
      CampusType,
    }) => {
      return `
      <div class="container__top" id="container__top">
        <div class="top__info-isComplete">
          <div class="top__title">
            <h1>${ProjectTitle}</h1>
            <p>
              <em class="fa fa-graduation-cap" aria-hidden="true"></em> ${CampusType}
            </p>
          </div>

          <div class="isComplete">
          ${
            IsComplete
              ? `<div class="isComplete__label">
                    <p>Completed</p>
                </div>`
              : ``
          }              
          </div>
        </div>
      
      <div class="top__img">
        <img
          src="${ThumbnailImg}"
          alt="${ProjectTitle}"
        />
      </div>
      <div class="top__info">
        <!-- Estimated Completion Date -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-calendar-check-o" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Estimated Completion Date</span>
            <p>${
              ProjectedCompletionString == ""
                ? "12/12/2022"
                : ProjectedCompletionString
            }</p>
          </div>
        </div>
        <!-- Projected Budget -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-usd" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Projected Budget</span>
            <p>$${
              ProjectedBudget >= 1000000
                ? ProjectedBudget.toFixed(2).slice(0, 2)
                : ProjectedBudget.toFixed(2).slice(0, 3)
            } 
            ${ProjectedBudget >= 1000000 ? "M" : "K"}</p>
          </div>
        </div>
        <!-- Percentage Completed -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-tasks" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Percentage Completed</span>
            <p class="percentage">${PercentComplete}%</p>
          </div>
        </div>
        <!-- Category -->
        <div class="top__info-extra">
          <div class="info-extra__icon">
            <em class="fa fa-briefcase" aria-hidden="true"></em>
          </div>
          <div class="info-extra__title">
            <span>Category</span>
            <p>${Category}</p>
          </div>
        </div>
      </div>
      <div class="top__description">
        <p>
        ${Description}
        </p>
      </div>
    </div>
    <div class="container__middle">
      <div class="top__title_middle middle-title">
        <h1>Updates</h1>
        <p>
          <em class="fa fa-pencil-square" aria-hidden="true"></em> Updated
          information
        </p>
      </div>
      <div class="middle__news">
        <div class="news__top">
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598505085/tim-mossholder-WE_Kv_ZB1l0-unsplash_1_x8iqrj.jpg"
            alt="Updates and news"
          />
        </div>
        <div class="news__bottom">
          <div class="bottom__title">
            <h2>GroundBreaking Ceremony</h2>
          </div>
          <div class="bottom__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
              eos atque, nemo iste earum, alias quam rem quibusdam incidunt
              error commodi impedit magnam officia?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab quod eos atque, nemo iste earum
            </p>
          </div>
        </div>
      </div>
      <div class="middle__news">
        <div class="news__top">
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598505164/deleece-cook-zzjLGF_6dx4-unsplash_1_hjkqeh.jpg"
            alt="Updates and news"
          />
        </div>
        <div class="news__bottom">
          <div class="bottom__title">
            <h2>GroundBreaking Ceremony</h2>
          </div>
          <div class="bottom__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
              eos atque, nemo iste earum, alias quam rem quibusdam incidunt
              error commodi impedit magnam officia?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab quod eos atque, nemo iste earum
            </p>
          </div>
        </div>
      </div>
      <div class="middle__news">
        <div class="news__top">
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1602433185/hamilton-hs_siuobu.jpg"
            alt="Updates and news"
          />
        </div>
        <div class="news__bottom">
          <div class="bottom__title">
            <h2>GroundBreaking Ceremony</h2>
          </div>
          <div class="bottom__description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quod
              eos atque, nemo iste earum, alias quam rem quibusdam incidunt
              error commodi impedit magnam officia?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ab quod eos atque, nemo iste earum
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-bottom">
      <div class="top__title">
        <h1>Project Images</h1>
        <p>
          <em class="fa fa-picture-o" aria-hidden="true"></em> Image gallery
        </p>
      </div>
      <div class="swiper-container showMobile">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1602436864/small-hs-plano_x3hktu.jpg"
              alt="Picture of the project"
              loading="lazy"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1602436709/small-libra_p0at5d.jpg"
              alt="Picture of the project"
              loading="lazy"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1604074284/darkSchool_zgnvss.jpg"
              alt="Picture of the project"
              loading="lazy"
            />
          </div>
        </div>
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <ul class="hideMobile">
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1602436864/small-hs-plano_x3hktu.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1602436709/small-libra_p0at5d.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1602433275/hc-bus_znhbco.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1604074284/darkSchool_zgnvss.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1602433185/hamilton-hs_siuobu.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1604074281/question_rbfn2z.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1604074385/babyboy_pjrncc.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1604069785/erika-fletcher-MZxqc6n9qCw-unsplash_1_ajkdux.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598504075/friscoISD_sezpau.png"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598502460/pencil_sl098k.jpg"
            alt="Picture of the project"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598505021/ben-mullins-je240KkJIuA-unsplash_1_svdhzv.jpg"
            alt="Interior at Nong's"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598507472/qearl-hu-0aQuUvhlvvk-unsplash_idcwtz.jpg"
            alt="Free Meal"
            loading="lazy"
          />
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/duprwuo4j/image/upload/v1598505052/cdc-GDokEYnOfnE-unsplash_1_fmcyhc.jpg"
            alt="Free Meal"
            loading="lazy"
          />
        </li>
        <!-- Adding an empty <li> here so the final photo doesn't stretch like crazy. Try removing it and see what happens! 
                              <li></li> -->
      </ul>
    </div>`;
    };

    const middleContainerHTML = ({
      ThumbnailImg,
      ProjectTitle,
      ProjectedCompletionString,
      ProjectedBudget,
      PercentComplete,
      Description,
      IsComplete,
      ProjectId,
      Category,
      CampusType,
    }) => {
      return `
      `;
    };

    function displayMatches() {
      const html = dataSet
        .filter(function (data) {
          // Pass here dynamic ID
          return data.ProjectId === "18BD-1005";
        })
        .map((data) => {
          return topContainerHTML(data);
        })
        .join("");

      if (html.length > 0) {
        app.innerHTML = html;
      } else {
        app.innerHTML = `${NO_DATA_FOUND}`;
      }
    }
    displayMatches();
  }

  let mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.onload = () => {
    getData();
  };

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
});
