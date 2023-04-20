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

  function makeDiv(){
    htmlChunk = 
    document.querySelector('.image-box').innerHTML = `<img class="main-image" src="./images/rule_of_thirds_bad.jpeg"/>` 
  }
  makeDiv()

  window.addEventListener("scroll", reveal);
