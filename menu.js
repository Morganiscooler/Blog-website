let menu = document.getElementById("menu");
menu.classList.add("hideMenu");

function OnMenuClick(){
    if(menu.classList.contains("hideMenu"))
    {
        menu.style.display = "block";
        // Ask why animation isn't working?
        menu.classList.remove("hideMenu");
        menu.classList.add("showMenu");
        // menu.style.transform = "translateX(-10em)";
    }
    // else{
    //     menu.classList.remove("showMenu");
    //     menu.classList.add("hideMenu");
        
    // }
}