{
    let submitBtn = document.getElementById("submitBtn")

    async function getUniversity(countryName){
        let uniData = await fetch("http://universities.hipolabs.com/search?country="+ countryName)
        let university = await uniData.json()
        // let count = university.length

        let output = ''
        
        for (let i=0; i<university.length; i++){
            output += `
            <div class="unidata">
                <h3>${university[i].name}</h3>
                <p>Country: ${university[i].country}</p>
                <p>Province: ${university[i]['state-province']}</p>
                <a href="${university[i].web_pages}" target="_blank">Official Link</a>
        </div>`

        }
        document.getElementById("uniData").innerHTML = output
        document.getElementById("count").innerHTML =`<p>Total number of Unis: ${university.length}</p>`
    }

    function countrySelector(){
        let countryName = document.getElementById("countryName").value
        getUniversity(countryName)

    }
    submitBtn.addEventListener('click', countrySelector)
}

/*
{
    let object = {"domains": ["aiu.ac.ke"], 
    "name": "Africa International University", 
    "state-province": null, 
    "country": "Kenya", 
    "alpha_two_code": "KE", 
    "web_pages": ["http://www.aiu.ac.ke/"]}
}
*/