let menu = document.getElementById("menu");
menu.classList.add("hideMenu");

function OnMenuClick(){
    if(menu.classList.contains("hideMenu"))
    {
        menu.style.pointerEvents = "all";
        menu.style.display = "block";
        document.body.style.overflowY = "hidden";
        menu.classList.remove("hideMenu");
        menu.classList.add("showMenu");
    }
}