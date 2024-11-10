let clickAnywhere = document.getElementById("clickAnywhere");
// let menu = document.getElementById("menu");

function closeMenu(){
    if(menu.classList.contains("showMenu"))
    {
        menu.classList.remove("showMenu");
        menu.classList.add("hideMenu");
        menu.style.pointerEvents = "none";
        document.body.style.overflowY = "";
    }
    
}
