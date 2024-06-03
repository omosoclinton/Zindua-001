{
    function getPosts() {
        let output = ''
        fetch("https://jsonplaceholder.typicode.com/posts").then((resp)=> {
            resp.json().then((response) => {
                console.log(response)

                for(let i = 0; i <= 30; i++){
                    output += `<div class="container">
                    <h4>Title: ${response[i].title}</h4>
                    <p>${response[i].body}</p>
                </div>`
                }
                document.getElementById("posts").innerHTML = output
            }).catch()

        })
    }
    getPosts()
}