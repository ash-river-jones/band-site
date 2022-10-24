const comments = [
{
    name: "Connor Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
},
{
    name: "Emilie Beach",
    date: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
},
{
    name: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
}
]

const addComments = function(commentList, commentContainer){

    commentContainer.innerText = ""
    
for (let i =0; i < commentList.length; i++){
// Comment container

const comment = document.createElement("div")
comment.classList.add("comments-section__comment")

// Icon Section

const iconSection = document.createElement("div")
iconSection.classList.add("comments-section__icon-section")

const icon = document.createElement("div")
icon.classList.add("comments-section__icon")

iconSection.appendChild(icon)

// Comment Section (Container)

const commentSection = document.createElement("div")
commentSection.classList.add("comments-section__comment-section")

// Comment Section -- heading
const commentHeading = document.createElement("div")
commentHeading.classList.add("comments-section__comment-heading")

const topLeft = document.createElement("div")
topLeft.classList.add("comments-section__top-left")
topLeft.innerText = comments[i].name

const topRight = document.createElement("div")
topRight.classList.add("comments-section__top-right")
topRight.innerText = comments[i].date

commentHeading.appendChild(topLeft)
commentHeading.appendChild(topRight)

// Comment Section -- body

const commentBody = document.createElement("div")
commentBody.classList.add("comments-section__comment-body")
commentBody.innerText = comments[i].comment

// Appending together 

commentSection.appendChild(commentHeading)
commentSection.appendChild(commentBody)


comment.appendChild(iconSection)
comment.appendChild(commentSection)

commentContainer.appendChild(comment)

}
}

const commentContainer = document.querySelector(".comments-section__container")
addComments(comments, commentContainer)


const nameForm = document.getElementById("newCommentName")
const commentForm = document.getElementById("comment-form")
const date = new Date()



commentForm.addEventListener("submit",function(event){
    event.preventDefault()

if(event.target.name.value ==="" && event.target.comment.value ===""){
    const nameForm = document.getElementById("newCommentName")
    const commentForm = document.getElementById("newCommentBody")
    nameForm.classList.add("new-comment__error")
    commentForm.classList.add("new-comment__error")
    return;
} else if(event.target.name.value ===""){
    const nameForm = document.getElementById("newCommentName")
    nameForm.classList.add("new-comment__error")
    return;
}else if(event.target.comment.value ===""){
    const commentForm = document.getElementById("newCommentBody")
    commentForm.classList.add("new-comment__error")
    return;
} else {
    
    const newComment = {
        name: event.target.name.value,
        date: date.toLocaleDateString(),
        comment: event.target.comment.value
    }

    comments.unshift(newComment)
    addComments(comments, commentContainer)
    nameForm.value = ""
    nameForm.classList.remove("new-comment__error")
    const commentForm = document.getElementById("newCommentBody")
    commentForm.value = ""
    commentForm.classList.remove("new-comment__error")
}})

