let text = document.getElementById("ParallaxText1");
let body = document.getElementsByTagName('body')[0];

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.15 + 'px';
    window.onscroll = function(){myFunction()};
    // Find amount of scrollTop, then change the text when it scrolls past the second dark block
    function myFunction(){
        if(document.documentElement.scrollTop > 850){
            text.innerText = "Explore worlds like you've never before.";
        }
        else{
            text.innerText = "Step into a vast new world of adventures.";
        }
    }
//     text.animate([{
//         transform: "scale(35)",
//         opacity: 0.25,
//     },
//     {
//         transform: "scale(2)",
//         opacity: 1,
//     }],{
//         duration: 300, fill: "forwards", easing: "ease"
//     })
});

// Make scroll animation when DOMcontent loads maybe??