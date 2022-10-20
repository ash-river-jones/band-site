const shows = [
{
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
},
{
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
},
{
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
},
{
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
},
{
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
},
{
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
}
]


const addShow = function(showList, showContainer){

    showContainer.innerText = ""

for (let i = 0; i < showList.length; i++){

const show = document.createElement("div")
show.classList.add("show")

const showWrapper = document.createElement("div")
showWrapper.classList.add("show__wrapper")

show.appendChild(showWrapper)

// Date

const showInfoDate = document.createElement("div")
showInfoDate.classList.add("show__info")

const showInfoHeadingDate = document.createElement("div")
showInfoHeadingDate.classList.add("show__info-heading")
showInfoHeadingDate.innerText = ("DATE")

const showDate = document.createElement("div")
showDate.classList.add("show__date")
showDate.innerText = showList[i].date

showInfoDate.appendChild(showInfoHeadingDate)
showInfoDate.appendChild(showDate)

// Venue

const showInfoVenue = document.createElement("div")
showInfoVenue.classList.add("show__info")

const showInfoHeadingVenue = document.createElement("div")
showInfoHeadingVenue.classList.add("show__info-heading")
showInfoHeadingVenue.innerText = ("VENUE")

const showVenue = document.createElement("div")
showVenue.classList.add("show__venue")
showVenue.innerText = showList[i].venue

showInfoVenue.appendChild(showInfoHeadingVenue)
showInfoVenue.appendChild(showVenue)

// Location

const showInfoLocation = document.createElement("div")
showInfoLocation.classList.add("show__info")

const showInfoHeadingLocation = document.createElement("div")
showInfoHeadingLocation.classList.add("show__info-heading")
showInfoHeadingLocation.innerText = ("LOCATION")

const showLocation = document.createElement("div")
showLocation.classList.add("show__location")
showLocation.innerText = showList[i].location

showInfoLocation.appendChild(showInfoHeadingLocation)
showInfoLocation.appendChild(showLocation)

// Button

const showBtnSection = document.createElement("div")
showBtnSection.classList.add("show__btn-section")

const showBtn = document.createElement("a")
showBtn.classList.add("show__btn")
showBtn.innerText = ("BUY TICKETS")

showBtnSection.appendChild(showBtn)

// Appending 

showWrapper.appendChild(showInfoDate)
showWrapper.appendChild(showInfoVenue)
showWrapper.appendChild(showInfoLocation)
showWrapper.appendChild(showBtnSection)

showContainer.appendChild(showWrapper)
}
}

const showsWrapper = document.querySelector(".show__container")
console.log(showsWrapper)

addShow(shows, showsWrapper)