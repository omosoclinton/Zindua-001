{

    let button = document.getElementById("button")
    let jokebtn = document.getElementById("jokebtn")
    async function getData ()
    {
        let img = document.getElementById("dogimage")
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await response.json()
        console.log(data)

        img.src = data.message
        
    }

    async function getJoke (){
        let joke = await fetch("https://official-joke-api.appspot.com/random_joke")
        let jokedata = await joke.json()
        console.log(jokedata)
        document.getElementById("type").innerHTML = jokedata.type
        document.getElementById("setup").innerHTML = jokedata.setup
        document.getElementById("punchline").innerHTML = jokedata.punchline

    }

    async function getPhotos (){

        let photo = await fetch("https://jsonplaceholder.typicode.com/photos")
        let photodata = await photo.json()
        console.log(photodata)

        for (let i=0; i<11; i++){
            let img = document.createElement('img');
            img.src = photodata[i].url
            document.getElementById("photos").appendChild(img)

        }

        // photodata.forEach((photo, index)=> {
        //     img.src = photo.ur
        // })

    }

    getPhotos()

    button.addEventListener('click', getData)
    jokebtn.addEventListener('click', getJoke)
}