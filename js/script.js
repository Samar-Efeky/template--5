// NavBar ////////////////////////////////////////////////////////
var navToggle = document.getElementById("navToggle");
var closeNavList = document.getElementById("closeNavList");
var navList = document.getElementById("navList");
navToggle.addEventListener("click",function(){
    navList.style.display= "block";
});
closeNavList.addEventListener("click",function(){
    navList.style.display= "none";
});

// showcase ///////////////////////////////////////////////////////////
var showcaseContent = document.querySelectorAll(".showcase-content ");
var lightBoxContainer =document.getElementById("lightBoxContainer");
var lightBoxItem = document.querySelector("#lightBoxItem img");
for(var i=0; i<showcaseContent.length; i++){
    showcaseContent[i].addEventListener("click",function(e){
        lightBoxContainer.style.display="flex";
        var imgSrc = e.target.getAttribute("src");
        lightBoxItem.setAttribute("src",`${imgSrc}`);
        lightBoxContainer.addEventListener("click",function(e){
            if(e.target!=lightBoxItem){
                lightBoxContainer.style.display="none";
              }
        })
    })
};
