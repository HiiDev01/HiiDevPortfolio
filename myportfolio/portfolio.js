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
////////////filter btn
const filterButton = document.querySelectorAll(".port_btn");
const projectChild = document.querySelectorAll(".project_child");

filterButton.forEach((button)=>{
  button.addEventListener("click", ()=>{
    filterButton.forEach((btn)=> btn.classList.remove("activebtn"));
    button.classList.add("activebtn");

    const flitterCategory = button.getAttribute("data-filter");

    projectChild.forEach((box)=>{
      if(flitterCategory === "All" || box.classList.contains(flitterCategory)){
        box.style.display = "block";
      }else{
        box.style.display = "none"
      }
    })
  })
})