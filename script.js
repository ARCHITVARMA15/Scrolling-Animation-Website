let tl = gsap.timeline()



gsap.from(".front",{
    y:1000,
    duration:1,
})

tl.from("#coffeec",{
    y:800,
    duration:1,
    scale:2
})

tl.from(".front h1",{
    y:1000,
    duration:1,
})


tl.from("#coffeeb1",{
    y:800,
    duration:1,
    scale:2
})
tl.from("#coffeeb2",{
    y:800,
    duration:1,
    scale:2
})
tl.from("#coffeeb3",{
    y:800,
    duration:1,
    scale:2
})
tl.from("#coffeeb4",{
    y:800,
    duration:1,
    scale:2
})
tl.from("#coffeeb5",{
    y:800,
    duration:1,
    scale:1.5
})

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        start:"0% 90%",
        end:"50% 50%"
    }
})

tl2.to("#coffeec",{
    top:600,//different from video-753
    left:105,
    scale:0.9,
},"hi")

tl2.to("#coffeeb1",{
    top:600,//different from video-753
    left:253,
    scale:0.9,
    rotate:142,
},"hi")


let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        
        start:"0% 90%",
        end:"50% 50%"
    }
},)
tl3.to("#coffeec",{
    top:1100,//different from video-753
    left:525,
    scale:0.9,
    duration:0.5
},"hi")

tl3.to("#coffeeb1",{
    top:1150,//different from video-753
    left:625,
    scale:0.9,
    rotate:239,
},"hi")

tl3.from("#can1",{
    x:-105,
    duration:0.5,
},"hi")

tl3.from("#can2",{
    x:105,
    duration:0.5,
},"hi")
tl3.from("#bean1",{
    x:-105,
    duration:0.5,
    rotate:200,
},"hi")
tl3.from("#bean2",{
    x:105,
    duration:0.5,
    rotate:200,
},"hi")


let tl4=gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
        
        start:"0% 90%",
        end:"50% 50%"
    }
})

tl4.to("#coffeec",{
    top:1700,//different from video-753
    left:750,
    duration:1,
    zIndex:3,
},"hi")

tl4.to("#coffeeb1",{
    top:1650,//different from video-753
    left:750,
    zIndex:2,
    rotate:20,
    duration:1,
},"hi")

tl4.to("#can1",{
    left:350,
    top:550,
    rotate:-20,
    duration:1,
    zIndex:2,
},"hi")

tl4.to("#can2",{
    left:75,
    top:550,
    rotate:20,
    duration:1,
    zIndex:2,
},"hi")
