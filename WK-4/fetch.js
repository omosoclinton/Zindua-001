{

    let button = document.getElementById("button")
    async function getData ()
    {
        let img = document.getElementById("dogimage")
        let response = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await response.json()
        console.log(data)

        img.src = data.message
        
    }

    button.addEventListener('click', getData)
}