let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")

img1.addEventListener('click', ()=>{
  img1.style.left = "75px"
  img1.style.top = "35px"
  
  img2.style.left = "25px"
  img2.style.top = "100px"
  
  img3.style.left = "0"
  img3.style.top = "0"
  
  img1.classList.add("active")
  img2.classList.remove("active")
  img3.classList.remove("active")
  
  img1.style.zIndex = "2"
  img2.style.zIndex = "0"
  img3.style.zIndex = "1"
})

img2.addEventListener('click', () => {
  img1.style.left = "0"
  img1.style.top = "0"
  
  img2.style.left = "75px"
  img2.style.top = "35px"
  
  img3.style.left = "25px"
  img3.style.top = "100px"
  
  img1.classList.remove("active")
  img2.classList.add("active")
  img3.classList.remove("active")
  
  img1.style.zIndex = "1"
  img2.style.zIndex = "2"
  img3.style.zIndex = "0"
})

img3.addEventListener('click', () => {
  img1.style.left = "25px"
  img1.style.top = "100px"
  
  img2.style.left = "0"
  img2.style.top = "0"
  
  img3.style.left = "75px"
  img3.style.top = "35px"
  
  img1.classList.remove("active")
  img2.classList.remove("active")
  img3.classList.add("active")
  
  img1.style.zIndex = "0"
  img2.style.zIndex = "1"
  img3.style.zIndex = "2"
})
