var x = document.querySelectorAll(".drum");
for (var i = 0; i < x.length; i++) {
  x[i].addEventListener("click",function () {
    console.log(this.textContent)
    this.style.color="white"
    var audio = new Audio("./sounds/tom-1.mp3")
    audio.play()
})
}