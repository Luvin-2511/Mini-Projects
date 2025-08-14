function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotive();

gsap.to("#nav .one svg",{
    transform:"translateY(-100%)",
    ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0",
        end:"top -15%",
        scrup:"true",
    }
})
// gsap.to("#nav #right .links",{
//     transform:"translateY(-100%)",
//     ScrollTrigger:{
//         opacity:0,
//         trigger:"#page1",
//         scroller:"#main",
//         start:"top 0",
//         end:"top -15%",
//         scrup:"true",
//     }
// })

function playhover() {

    let imgc = document.querySelector("#imgcont")
    let play = document.querySelector("#play")
    imgc.addEventListener("mouseenter", () => {
        gsap.to(play, {
            scale: 1,
            opacity: 1
        })
    })
    imgc.addEventListener("mouseleave", () => {
        gsap.to(play, {
            scale: 0,
            opacity: 0
        })
    })
    imgc.addEventListener("mousemove", (dets) => {
        gsap.to(play, {
            left: dets.x - 50,
            top: dets.y - 50
        })
    })
}

playhover();

function hoverimg() {

    let page = document.querySelector("#dabbe1")
    let gola = document.querySelector("#circle")
    page.addEventListener("mouseenter", () => {
        gsap.to(gola, {
            scale: 1,
            opacity: 1
        })
    })
    page.addEventListener("mouseleave", () => {
        gsap.to(gola, {
            scale: 0,
            opacity: 0
        })
    })
    page.addEventListener("mousemove", (dets) => {
        gsap.to(gola, {
            left: dets.x - 100,
            top: dets.y
        })
    })
}

hoverimg();

function loadanimation() {
    gsap.from("#page1>h1", {
        y: 100,
        opacity: 0,
        delay: 0.2,
        duration: 0.6,
        stagger: 0.4
    })
    gsap.from("#page1>#imgcont", {
        y: 60,
        scale: 1.2,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.3
    })
}

loadanimation()


