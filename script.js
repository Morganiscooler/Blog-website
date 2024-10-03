let text = document.getElementById("ParallaxText1");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.35 + 'px';
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