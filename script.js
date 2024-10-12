let text = document.getElementById("ParallaxText1");
let image1 = document.getElementById("testimg");
let image2 = document.getElementById("testimg2");

// Images will pop up when they are loaded in upon scroll
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.25 + 'px';
    window.onscroll = function(){myFunction()};
    // Find amount of scrollTop, then change the text when it scrolls past the second dark block
    function myFunction(){
        if(document.documentElement.scrollTop > 850){
            text.innerText = "Explore worlds like you've never before.";
            // image2.animate([{
            //     transform: "scale(1.5)",
            //     opacity: 0.25,
            // },
            // {
            //     transform: "scale(1)",
            //     opacity: 1,
            // }],{
            //     duration: 1500, fill: "forwards", easing: "ease"
            // })
        }
        else{
            text.innerText = "Step into a vast new world of adventures.";
            // image1.animate([{
            //     transform: "scale(2)",
            //     opacity: 0.25,
            // },
            // {
            //     transform: "scale(1)",
            //     opacity: 1,
            // }],{
            //     duration: 1500, fill: "forwards", easing: "ease"
            // })
        }
    }
});

// Make scroll animation when DOMcontent loads maybe??