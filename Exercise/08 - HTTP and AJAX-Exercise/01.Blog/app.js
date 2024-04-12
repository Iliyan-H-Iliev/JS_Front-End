// function attachEvents() {
//     const postUrl = 'http://localhost:3030/jsonstore/blog/posts'
//     const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments'
//
//     const loadPostButtonElement = document.getElementById('btnLoadPosts')
//     const viewPostButtonElement = document.getElementById('btnViewPost')
//     const selectPostElement = document.getElementById('posts')
//     const postTitleElement = document.getElementById('post-title')
//     const postBodyElement = document.getElementById('post-body')
//     const postCommentsUlElement = document.getElementById('post-comments')
//
//     let allObjPost = {}
//
//     loadPostButtonElement.addEventListener('click', () =>{
//         selectPostElement.innerHTML = ''
//
//         fetch(postUrl)
//             .then(response => response.json())
//             .then(data => {
//                 allObjPost = data
//                 for (const element of Object.entries(data)) {
//                     const optionElement = document.createElement('option')
//                     optionElement.textContent = element[1].title
//                     optionElement.value = element[0]
//                     selectPostElement.appendChild(optionElement)
//                 }
//             })
//     })
//
//     viewPostButtonElement.addEventListener('click', () => {
//         const postId = selectPostElement.value
//         postCommentsUlElement.innerHTML = ''
//         postTitleElement.textContent = allObjPost[postId].title
//         postBodyElement.textContent = allObjPost[postId].body
//
//         fetch(commentsUrl)
//             .then(response => response.json())
//             .then(allComments => {
//                 const postComments =  Object.values(allComments).filter(comment => comment.postId === postId)
//                 postComments.forEach(comment => {
//                     const liElement = document.createElement('li')
//                     liElement.id = comment.id
//                     liElement.textContent = comment.text
//                     postCommentsUlElement.appendChild(liElement)
//                 })
//             })
//     })
// }
// attachEvents();


// function attachEvents() {
//     const postsURL = 'http://localhost:3030/jsonstore/blog/posts'
//     const commentsURL = 'http://localhost:3030/jsonstore/blog/comments'
//
//     let loadPostsButton = document.getElementById('btnLoadPosts')
//     loadPostsButton.addEventListener('click', loadPostsEvent)
//
//     let postsSelect = document.getElementById('posts')
//
//     let viewPostButton = document.getElementById('btnViewPost')
//     viewPostButton.addEventListener('click', viewPostEvent)
//
//     let allPosts = {}
//
//     async function loadPostsEvent(event) {
//         postsSelect.innerHTML = ''
//         let allPostsResponse = await fetch(postsURL)
//         allPosts = await allPostsResponse.json()
//
//         for (let postArr of Object.entries(allPosts)) {
//             let option = document.createElement('option')
//             option.textContent = postArr[1].title
//             option.value = postArr[0]
//             console.log(postArr)
//             console.log(`${postArr[0]} / ${postArr[1].id}`)
//            
//             postsSelect.appendChild(option)
//         }
//     }
//
//     async function viewPostEvent(event) {
//         let currentPostObject = document.getElementById('posts')
//         let currentPostComments = []
//
//         let allCommentsResponse = await fetch(commentsURL)
//         let allComments = await allCommentsResponse.json()
//
//         for (let commentArr of Object.entries(allComments)) {
//             if (commentArr[1].postId === currentPostObject.value) {
//                 currentPostComments.push(commentArr[1].text)
//             }
//         }
//
//         let chosenPost = allPosts[currentPostObject.value]
//
//         let titleElement = document.getElementById('post-title')
//         titleElement.textContent = chosenPost.title
//
//         let postContentElement = document.getElementById('post-body')
//         postContentElement.textContent = chosenPost.body
//
//         let ul = document.getElementById('post-comments')
//         ul.innerHTML = ''
//         for (let comment of currentPostComments) {
//             let li = document.createElement('li')
//             li.textContent = comment
//             ul.appendChild(li)
//         }
//     }
// }
//
// attachEvents();

function attachEvents() {
    const postsURL = "http://localhost:3030/jsonstore/blog/posts"
    const commentsURL = "http://localhost:3030/jsonstore/blog/comments"


    const loadPostsButton = document.getElementById("btnLoadPosts")
    const viewPostButton = document.getElementById("btnViewPost")

    const selectedPost = document.getElementById("posts")
    const postBody = document.getElementById("post-body")
    const postTitle = document.getElementById("post-title")
    const postedComments = document.getElementById("post-comments")

    let allObjPost = {}

    loadPostsButton.addEventListener("click", async() => {
        selectedPost.innerHTML = ""
        const postsResponse = await fetch(postsURL)
        const posts = await postsResponse.json()
        allObjPost = posts
        for (const post of Object.entries(posts)) {
            const optionElement = document.createElement("option")
            optionElement.value = post[0]
            optionElement.textContent = post[1].title
            selectedPost.appendChild(optionElement)
        }

    })
    viewPostButton.addEventListener("click", async () => {
        
        const postID = selectedPost.value
        postedComments.innerHTML = ""

        postTitle.textContent = allObjPost[postID].title
        postBody.textContent = allObjPost[postID].body

        //
        // const postResponse = await fetch(`${postsURL}/${postID}`)
        // const selectedResponse = await postResponse.json()

        


        const commentsResponse = await fetch(commentsURL)
        const comments = await commentsResponse.json()
        
        
        for (const value of Object.values(comments)) {
            if (value.postId === postID) {
                const newLi = document.createElement("li")
                newLi.id = value.id
                newLi.textContent = value.text
                postedComments.appendChild(newLi)
            }
        }
    })
}

attachEvents();

