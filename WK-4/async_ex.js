{
    const posts = [
        {title: "post one", body: "this is post one"},
        {title: "post two", body: "this is post two"}
    ]
    button = document.getElementById("new")
    count = 3
    function getPosts(){
        setTimeout(() => {
            let output = ''
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`
            })
            document.getElementById("posts").innerHTML = output
        },2000)
        
    }

    function createPost (post, callback) {
        setTimeout(()=> {
            posts.push(post)
            callback()
        }, 2000)
    }

    getPosts()

    button.addEventListener('click', () => {
        count++
        newPost = {title: `Post ${count}`, body: `this is ${count}`}
        createPost(newPost, getPosts)
    })
    createPost({title:"post three", body:"this is post three"}, getPosts)
}