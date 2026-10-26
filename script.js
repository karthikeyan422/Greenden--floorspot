
var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var rightbtn = document.getElementById("rightbtn")


menubtn.addEventListener("click",function(){

sidenav.style.right=0

})


rightbtn.addEventListener("click",function(){

    sidenav.style.right="-80%"
    
})