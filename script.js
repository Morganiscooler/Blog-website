let text = document.getElementById("ParallaxText1");
let body = document.getElementsByTagName('body')[0];

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.35 + 'px';
    // Find amount of scrollTop, then change the text when it scrolls past the second dark block
    if(body.scrollTop > 1){
        text.textContent = "Explore new worlds like you haven't before.";
        console.log("scroll works");
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