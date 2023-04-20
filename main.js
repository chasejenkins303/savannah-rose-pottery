import {data} from "./data.js"

console.log(data)

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    console.log(reveals.length)
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    //   else {
    //     reveals[i].classList.remove("active");
    //   }
    }
  }

 const makeDiv = (data2) => {
    console.log(data2)
    // <div class="image-box">
    // <img src="./images/Droplet.jpeg">
    // </div>
    return `
    <div class="image-box reveal">
        <img class="main-image" src="${data2.image_loc}"/>
        <p>${data2.caption}</p>
    </div>
    ` 
  }

  function showData(){
    const htmlChunk = data.map(makeDiv).join('')
    document.querySelector('.image-container').innerHTML = htmlChunk
  }
  // data.map(makeDiv).join('')
  // document.querySelector('.image-box').innerHTML =  
  showData()

  window.addEventListener("scroll", reveal);
