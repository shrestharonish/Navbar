const showlink = document.querySelector(".show-links");
const links = document.querySelector(".links");
const navtoggle = document.querySelector(".nav-toggle");

navtoggle.addEventListener("click", function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("links"));
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }else{
        links.classList.add("show-links");
    }
})