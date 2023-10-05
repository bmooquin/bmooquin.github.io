const articleButton = document.querySelector("#artbutton");
const articleDesign = document.querySelector("#articlesbutton");
const mainArea = document.querySelector("#writingarea");
const sideMenu = document.querySelector("#sidepanel");

// mainArea.classList.add("active");
// sideMenu.classList.add("active");
// articleDesign.classList.add("active");

articleButton.addEventListener("click",function(){
    mainArea.classList.toggle("active");
    sideMenu.classList.toggle("active");
    articleDesign.classList.toggle("active");
})

