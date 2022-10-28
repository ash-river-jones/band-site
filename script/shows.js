var apiKey = "?api_key=a3a286f3-5e28-43cf-b547-6ac20705ab03z";

const addShow = function (showsArray, showContainer) {
  showContainer.innerText = "";

  for (let i = 0; i < showsArray.length; i++) {
    // Show container element creation

    const show = document.createElement("div");
    show.classList.add("show");

    const showWrapper = document.createElement("section");
    showWrapper.classList.add("show__wrapper");

    show.appendChild(showWrapper);

    // Date creation

    const showInfoDate = document.createElement("div");
    showInfoDate.classList.add("show__info");

    const showInfoHeadingDate = document.createElement("div");
    showInfoHeadingDate.classList.add("show__info-heading");
    showInfoHeadingDate.innerText = "DATE";

    const showDate = document.createElement("div");
    showDate.classList.add("show__date");

    const dateFormat = new Date(showsArray[i].date);
    const formattedDate = dateFormat.toDateString();
    showDate.innerText = formattedDate;

    showInfoDate.appendChild(showInfoHeadingDate);
    showInfoDate.appendChild(showDate);

    // Venue creation

    const showInfoVenue = document.createElement("div");
    showInfoVenue.classList.add("show__info");

    const showInfoHeadingVenue = document.createElement("div");
    showInfoHeadingVenue.classList.add("show__info-heading");
    showInfoHeadingVenue.innerText = "VENUE";

    const showVenue = document.createElement("div");
    showVenue.classList.add("show__venue");
    showVenue.innerText = showsArray[i].place;

    showInfoVenue.appendChild(showInfoHeadingVenue);
    showInfoVenue.appendChild(showVenue);

    // Location creation

    const showInfoLocation = document.createElement("div");
    showInfoLocation.classList.add("show__info");

    const showInfoHeadingLocation = document.createElement("div");
    showInfoHeadingLocation.classList.add("show__info-heading");
    showInfoHeadingLocation.innerText = "LOCATION";

    const showLocation = document.createElement("div");
    showLocation.classList.add("show__location");
    showLocation.innerText = showsArray[i].location;

    showInfoLocation.appendChild(showInfoHeadingLocation);
    showInfoLocation.appendChild(showLocation);

    // Button creation

    const showBtnSection = document.createElement("div");
    showBtnSection.classList.add("show__btn-section");

    const showBtn = document.createElement("a");
    showBtn.classList.add("show__btn");
    showBtn.innerText = "BUY TICKETS";

    showBtnSection.appendChild(showBtn);

    // Appending show details to individual show

    showWrapper.appendChild(showInfoDate);
    showWrapper.appendChild(showInfoVenue);
    showWrapper.appendChild(showInfoLocation);
    showWrapper.appendChild(showBtnSection);

    // Injecting show into html

    showContainer.appendChild(showWrapper);
  }
};

const showsWrapper = document.querySelector(".show__container");

const showsURL = "https://project-1-api.herokuapp.com/showdates" + apiKey;
axios.get(showsURL).then((response) => {
  const showsArray = response.data;
  console.log(showsArray);
  addShow(showsArray, showsWrapper);
});

// Active show row background

let prevShow = null;

const wrapper = document.querySelector(".show__container");

wrapper.addEventListener("click", function (event) {
  const isShow = event.currentTarget.nodeName === "SECTION";

  if (!isShow) {
    return;
  }
  event.target.classList.add("active");

  if (prevShow !== null) {
    prevShow.classList.remove("active");
  }
  prevShow = event.target;
});
