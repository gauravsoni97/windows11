let startmenu = document.getElementsByClassName("startmenubox")[0]
let menuitems = document.getElementsByClassName("startwindows")[0]

menuitems.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})


// music icon ==========================================================
const musicicon = document.querySelector(".musicicon");
const musicimg = document.querySelector(".musicimg");
musicicon.addEventListener("click", ()=>{
if(musicimg.style.bottom == "44px"){
    musicimg.style.bottom = "-1000px"
}
else{
    musicimg.style.bottom = "44px"
}
});



// files explore ==========================================================


const fileicon = document.querySelector(".fileicon");
const files = document.querySelector(".files");
fileicon.addEventListener("click", ()=>{

if(files.style.bottom == "44px"){
    files.style.bottom = "-1000px"
}
else{
    files.style.bottom = "44px"
}
});