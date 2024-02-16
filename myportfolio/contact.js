//toggle dark mode
function changeMode(){
  const darkMode = document.body;
  darkMode.classList.toggle("dark_mode");
}
///hamburger
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".nav_item_wrapper ul");
hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  ul.classList.toggle("active");
});
document.querySelectorAll(".navlinks").forEach(n=>n.addEventListener("click", ()=>{
  hamburger.classList.remove("active");
  ul.classList.remove("active");
}))