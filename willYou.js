// document.querySelector(".no-js").onclick = () => {
//   alert("You clicked Yes! 💖");

// }

// document.querySelector(".no-js").onclick = function () {
//   this.style.transform = "scale(1.2)"; // Increase size by 20%
//   this.style.transition = "transform 0.3s ease"; // Smooth transition effect
// };
function increaseSize() {
  const yesButton = document.querySelector(".yes-js");
  let currentScale = parseFloat(yesButton.style.transform.replace("scale(", "").replace(")", "")) || 1;
  
  // Increase the size by 20% each time
  currentScale += 0.2;
  yesButton.style.transform = `scale(${currentScale})`; // Applying scale effect

  // Add transition for smooth effect
  yesButton.style.transition = "transform 0.5s ease-in-out"; 

  // If the size reaches a certain value (full screen), reset it
  if (currentScale >= 5) {
    yesButton.style.transform = "scale(1)"; // Reset size after covering the screen
  }
}


//on clicking the ye button

// function showGreetings()  {
//   window.location.href = "valentine-page.html";
  
// }
document.querySelector(".yes-button").addEventListener("click", function() {
  setTimeout(() => {
    window.location.href = "thankYou.html";
  }, 500); // Delays transition for a smooth effect
});

