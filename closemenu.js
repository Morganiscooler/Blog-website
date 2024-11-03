let clickAnywhere = document.getElementById("clickAnywhere");
// let menu = document.getElementById("menu");

function closeMenu(){
    if(menu.classList.contains("showMenu"))
    {
        menu.classList.remove("showMenu");
        menu.classList.add("hideMenu");
        // !!!fix the issue with taking pointer events away after closing menu!!!
        menu.style.pointerEvents = "none";
    }
    
}
