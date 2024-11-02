let menu = document.getElementById("menu");

function OnMenuClick(){
    if(menu.style.display == "none")
    {
        menu.style.display = "block";
        // Ask why animation isn't working?
        menu.classList.remove("hideMenu");
        menu.classList.add("showMenu");
        // menu.style.transform = "translateX(-10em)";
    }
    else{
        menu.classList.remove("showMenu");
        menu.classList.add("hideMenu");
        menu.style.display = "none";
    }
}