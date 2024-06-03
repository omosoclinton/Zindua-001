{
    let refreshBtn = document.getElementById("refreshBtn")
    let homeBtn = document.getElementById("homeBtn")

    async function getPosts(count) {
        let postData = await fetch("https://jsonplaceholder.typicode.com/posts")
        let posts = await postData.json()
        let output =''

        if (count < posts.length) {

            for(let i = count; i <= count+10; i++){
                output += `<div class="container">
                <h4>Title: ${posts[i].title}</h4>
                <p>${posts[i].body}</p>
            </div>`
            }
            
        }else {
            alert("no new feed")
        }
        document.getElementById("container").innerHTML = output
        
    }
    function homeButton () {
        count = 0
        getPosts(count)
    }
    function refreshButton () {
        count +=10
        getPosts(count)
    }

    refreshBtn.addEventListener('click', refreshButton);
    homeBtn.addEventListener('click', homeButton)

}
