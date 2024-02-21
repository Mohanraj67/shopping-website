let sidenav=document.querySelector(".side-nav")
sidenav.addEventListener("click", shownavbar);
sidenav.addEventListener("click", closenavbar);
function shownavbar()
{
    sidenav.style.left="0";
}
function closenavbar(){
    sidenav.style.left="-60%";
}

