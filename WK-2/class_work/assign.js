{
    let maths = "fail";
    let english = "pass";
    let chemistry = "pass";
    let physics = "pass";
    let kiswahili = "fail";
    let history = "pass";
    let geography = "pass"



    // comp sci - math or pass eng or swa
    // journalism - math, eng, kiswahili
    // engineer - math, eng or swa,  physics
    // medicine - math, eng or swa, chemistry
    // language - eng or swa
    // humanities - geog and phy
    // law - math, phy or chem, hist and geo

    // any course
    if (maths == "pass" && chemistry == "pass" && kiswahili == "pass" && english == "pass" && physics == "pass") {
        console.log("Can pursue any course")
    // journalism
    }else if (maths == "pass" && english == "pass" && kiswahili == "pass") {
        console.log("Can pursue Journalism")
    // engineer
    }else if (maths == "pass" && physics == "pass" && (kiswahili == "pass" || english == "pass") ) {
        console.log("Can pursue Engineering")
    // doctor
    }else if (maths == "pass" && chemistry == "pass" && (kiswahili == "pass" || english == "pass") ) {
        console.log("Can pursue Medicine")
    // Comp Sci   
    } else if (maths == "pass" && (english == "pass" || kiswahili == "pass")) {
        console.log("You can pursue any Computer Science")
    } else {
        console.log("You can't choose a course")
    }
}

