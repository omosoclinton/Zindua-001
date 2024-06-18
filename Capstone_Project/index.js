{

    /* 
    > First we need to have the user enter the id, names on id, and location where the ID will be left
    > On submitting the inputs are stored in variables idinput, fullname, loaction
    > We then store the variables in an object
    > That concludes found_id
    
    */
    const submit_button = document.getElementById("submit-btn");
    const search_button = document.getElementById("mysearch")
    let dataRecords =[];
   
    function getIdDetails(){
        idInput = document.getElementById("idNumber").value;
        fullName = document.getElementById("fullName").value;
        locationValue = document.getElementById("location").value;

        dataObject = {
            idValue:idInput,
            nameValue:fullName,
            locationData:locationValue,
        };
        dataRecords.push(dataObject)
        localStorage.setItem("userData", JSON.stringify(dataRecords))
    }
    function loadData(){
        const retrievedData = localStorage.getItem("userData");
        if (retrievedData) {
            dataRecords = JSON.parse(retrievedData)
        }
        //console.log(dataRecords)
    }
    loadData()
    //localStorage.clear() clears localStorage
    //localStorage.removeItem(dataRecords[5])
    console.log(dataRecords)
    

    function searchID(){
        lostID = document.getElementById("searchB").value
        let output = ''
        for (let storedID of dataRecords) {
            if (storedID.idValue == lostID){
                output += `
                <div class="output">
                    <p>Your ID has been found</p>
                </div>`
            }else {
                output += `
                <div class="output">
                    <p>Your ID has not been added to our database</p>
                </div>`
            }          
        };
        document.getElementById("output").innerHTML = output  
    }
    search_button.addEventListener('click', searchID);
    submit_button.addEventListener('click', getIdDetails);
   


}
