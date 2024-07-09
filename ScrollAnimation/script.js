let tl = gsap.timeline({
    scrollTrigger: {
        trigger : ".front-page", //when you want to start animation
        start: "top", // ani starting position
        end: "100%",  //where the ani end- here at the bottom of front-page
        // markers: true, //shows start and end position for reference
        scrub: true,  //to animate based on the scroll
        pin : true  //pin content still ani is over

    }
})

tl.fromTo('.front-page', {clipPath: "circle(5%)"}, {clipPath: "circle(75%)", duration : 3})

tl.fromTo(".music-note", {scale: 0.5}, { scale:0, opacity: 0, duration : 1}, "-=3");

tl.fromTo(".title", {opacity: 0}, {opacity: 1, duration : 1});
tl.fromTo(".sub-title", {opacity: 0}, {opacity: 1, duration : 1});