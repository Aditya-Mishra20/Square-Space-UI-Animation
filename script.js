var tl = gsap.timeline();

tl.from(".logo, .nav-part2, .nav-login", {
    y: -100,
    duration: 0.8,
    delay: 1.5,
    opacity: 0,
    stagger: 0.2

})
tl.from(".head-text", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
})
tl.from(".head-btn", {
    opacity: 0,
    y: 100,
})
tl.to(".head-btn",{
    y: 5,
    repeat: -1,
    duration: 1,
    yoyo: true,
})
tl.from("#left-img", {
    opacity: 0,
    x: -100,
    duration: 0.6,
}, 'a')
tl.from("#right-img", {
    opacity: 0,
    x: 100,
    duration: 0.6,
}, 'a')
tl.from("h5", {
    scale: 0,
    opacity: 0,
})
tl.to("h5", {
    y: 15,
    duration: 0.7,
    repeat: -1,
    yoyo: true
})
tl.from("#dwn-left, #up-right, .icons", {
    scale:0,
    opacity: 0,
    duration: 1,
})

// second page 

gsap.from("#page2 #box1", {
    scale: 0,
    // duration: 0.5,
    rotation: 360,
    scrollTrigger:{
        trigger: "#page2 #box1",
        scroller: "body",
        markers: false,
        start: "top 50%",
        end: "bottom 20%",
        scrub: 2,
    }
    
})