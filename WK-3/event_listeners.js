{
    /*
    Element.addEventListener("click", functionOne();)
    Element.addEventListener("mouseover", functionOne();)
    Element.addEventListener("mouseout", functionOne();)
    */
   const button = document.getElementById("button")
   let bodyDefault = true

   function changeBackground() {
        if (bodyDefault){
            document.body.style.backgroundColor = 'violet'
            bodyDefault = false
        }else {
            document.body.style.backgroundColor = 'white'
            bodyDefault = true
        }
   }

   /*

   function changeBackgroundBack() {
    document.body.style.backgroundColor = 'white'
   }
   */
   function changeHeaderColorGreen(){
    document.getElementById("header").style.color = 'green'
   }
   function changeHeaderColorBlack(){
    document.getElementById("header").style.color = 'black'
   }
   button.addEventListener('mouseover', changeHeaderColorGreen)
   button.addEventListener('click', changeBackground)
   button.addEventListener('mouseout', changeHeaderColorBlack)

   /* */
   /* */

   /* insert parameters in a event listeners*/
   const button1 = document.getElementById('button1')
   function chooseBackgroundColor(user_color){
        document.body.style.backgroundColor = user_color
   }

   button1.addEventListener('click', function(){
    let user_input = prompt("Give a color")
    chooseBackgroundColor(user_input)
   })

   /*
   UserCapture
   
   bubbling - inner to outside - default - false
   capturing - outer to inner - true
   
   
   */
}

