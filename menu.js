let menu = document.getElementById("menu");

function OnMenuClick(){
    if(menu.style.display == "none")
    {
        menu.style.display = "block";
        // Ask why animation isn't working?
        menu.classList.add("is-visible");
        // menu.style.transform = "translateX(-10em)";
    }
    else{
        menu.style.display = "none";
        menu.classList.remove("is-visible");
    }
}