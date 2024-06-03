{
    /* JabaScript*/
    // my pub-key
    // pub_45504b42d4951e1117e1ca71cff33b6f4625f

    async function getNews(){
        let newsData = await fetch("https://newsdata.io/api/1/latest?apikey=pub_45504b42d4951e1117e1ca71cff33b6f4625f&language=en")
        let news = await newsData.json()
        

        let output = ''

        for (let i=0; i<10; i++) {
            output+=`
            <div class="card">
                    <div class="card-img-holder">
                        <img src="${news.results[i].image_url}" alt="Modern way of planting used in Cagayan" srcset="">
                    </div>
                    <h3 class="blog-title">${news.results[i].title}</h3>
                    <span class="blog-time">${news.results[i].pubDate}</span>
                    <span>${news.results[i].country}</span>
                    <p class="description">${news.results[i].description}</p>
                    <span>Read Full Blog</span>
                    <button class="btn"><a href="${news.results[i].link}" target="_blank" rel="">Blog</a></button>
                </div>
            
            `
        }
        document.getElementById("newsContainer").innerHTML = output
    }

    getNews()

}



{
    let openHam = document.querySelector('#openHam');
    let closeHam = document.querySelector('#closeHam');
    let navigationItems = document.querySelector('#navigation-items');

    const hamburgerEvent = (navigation, close, open) => {
        navigationItems.style.display = navigation;
        closeHam.style.display = close;
        openHam.style.display = open 
    };

    openHam.addEventListener('click', () => hamburgerEvent('flex', 'block', 'none'));
    closeHam.addEventListener('click', () => hamburgerEvent('flex', 'block', 'none'));

}