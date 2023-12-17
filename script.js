const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var mouse = document.querySelector(".mousecircle");
function mousecicle(){
    window.addEventListener("mousemove", function(dets){
        mouse.style.left = dets.clientX + "px";
        mouse.style.top = dets.clientY + "px";
    })
}

mousecicle();

gsap.from("nav, .footerleft h5, .footerright a", {
    opacity:0,
    y:-10 ,
    duration:1.5,
    delay:0.5,
    ease: Expo.easeInOut
})
gsap.from(".firsth1, .sech1, .h5, .chotiheadings h5", {
    opacity:0,
    y:100,
    duration:1,
    delay:0.5,
    stagger:0.3,
})


document.querySelectorAll(".elem").forEach(function(elem){

    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
        })
    })


    elem.addEventListener("mouseenter", function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power3,
            top: diff,
            left: dets.clientX,
        })
    })
})