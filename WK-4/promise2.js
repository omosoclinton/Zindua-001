{
    //something

    const posts = [
        {title:"post one", body:"this is post one"},
        {title:"post two", body:"this is post two"}
    ]
    
    function printHello(){
        setTimeout(()=>{
            document.getElementById("hello").innerHTML = "Hello World"
        }, 10000)
    }

    function getPosts (){
        setTimeout(()=> {
            let output = ''
            posts.forEach((post, index) => {
                output += `<li>${post.title}</li>`
            })
            document.getElementById("posts").innerHTML = output
        }, 1000)
    }
    function createPost (post) {
        return new Promise((resolve, reject)=> {
            setTimeout(()=>{
                posts.push(post)

                const error = false

                if(!error){
                    resolve("OK")
                }else{
                    reject("Error")
                }
            }, 2000)
        })
    }

    createPost({title:"post three", body:"this is post three"}).then((resp)=>{
        getPosts()
        console.log(resp)
    }).catch((err)=>{
        console.log(err)
    })

}