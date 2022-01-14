const author = document.getElementById("author_name")
const job = document.getElementById("job_title")
const info = document.getElementById ("review_content")
const img = document.getElementById ("author_image")

//buttons


const prevButton = document.querySelector(".prev_button")
const nextButton = document.querySelector(".next_button")
const randomButton = document.getElementById("random_button")


let currentReview = 0

//Window DOMContent Loaded 

window. addEventListener("DOMContentLoaded", function(){

    
   showReview ()

})
    

function showReview (){
    

    img.src = reviews[currentReview].img
    author.textContent= reviews[currentReview].name
    job.textContent = reviews[currentReview].job
    info.textContent = reviews[currentReview].text

}



nextButton.addEventListener("click", function(){

    currentReview++
    if (currentReview > reviews.length - 1){

         currentReview = 0


      }

    showReview()


})


prevButton.addEventListener("click", function(){

    currentReview--
    if (currentReview < 0){

    currentReview = reviews.length- 1


      }

      showReview()


})



randomButton.addEventListener("click", function(){

    
    currentReview = Math.floor(Math.random()* reviews.length)
    showReview ()


})









