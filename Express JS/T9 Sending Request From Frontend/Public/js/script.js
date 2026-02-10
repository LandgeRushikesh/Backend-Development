const output = document.querySelector(".output")
const button = document.querySelector("#get-posts-btn")
const CreatePost = document.querySelector("#Create-post")

const getPosts = async () => {
    try {
        const res = await fetch("http://localhost:5000/api/posts")
        if (!res.ok) {
            throw new Error("Cannot Fetch Posts")
        }
        const posts = await res.json()
        output.innerHTML = ''

        posts.forEach((post) => {
            let postEl = document.createElement('div')
            postEl.textContent = post.title
            output.appendChild(postEl)
        });

    } catch (err) {
        console.log("Error Occured while fetching posts:", err);

    }
}

const addPost = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get('title')
    try {
        const res = await fetch("http://localhost:5000/api/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })

        if (!res.ok) {
            throw new Error("Cannot add Post")
        }

        getPosts()

        e.target.reset()
    } catch (error) {
        console.log(error);
    }

}

button.addEventListener("click", getPosts)

CreatePost.addEventListener("submit", addPost)