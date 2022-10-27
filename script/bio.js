
var apiKey = "?api_key=a3a286f3-5e28-43cf-b547-6ac20705ab03"

const addComments = function (comments, commentContainer) {

    commentContainer.innerText = ""

    for (let i = 0; i < comments.length; i++) {
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
        const dateFormat = new Date(comments[i].timestamp)
        const formattedDate = dateFormat.toLocaleDateString("en-us")
        topRight.innerText = formattedDate


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

const commentURL = "https://project-1-api.herokuapp.com/comments" + apiKey

function getComments() {
    axios.get(commentURL).then(response => {
        const commentArray = response.data

        const sortedCommentArray = commentArray.sort(
            (a, b) => b.timestamp - a.timestamp)
        addComments(sortedCommentArray, commentContainer)


    })
}

getComments()

const nameForm = document.getElementById("newCommentName")
const commentForm = document.getElementById("comment-form")
const date = new Date()



commentForm.addEventListener("submit", function (event) {
    event.preventDefault()

    if (event.target.name.value === "" && event.target.comment.value === "") {
        const nameForm = document.getElementById("newCommentName")
        const commentForm = document.getElementById("newCommentBody")
        nameForm.classList.add("new-comment__error")
        commentForm.classList.add("new-comment__error")
        return;
    } else if (event.target.name.value === "") {
        const nameForm = document.getElementById("newCommentName")
        nameForm.classList.add("new-comment__error")
        return;
    } else if (event.target.comment.value === "") {
        const commentForm = document.getElementById("newCommentBody")
        commentForm.classList.add("new-comment__error")
        return;
    } else {

        const newComment = {
            name: event.target.name.value,
            comment: event.target.comment.value
        }
        axios
            .post(commentURL, newComment)
            .then(response => {
                const commentArray = response.data

                addComments(commentArray, commentContainer)
                getComments()
            })

        nameForm.value = ""
        nameForm.classList.remove("new-comment__error")
        const commentForm = document.getElementById("newCommentBody")
        commentForm.value = ""
        commentForm.classList.remove("new-comment__error")
    }
})

