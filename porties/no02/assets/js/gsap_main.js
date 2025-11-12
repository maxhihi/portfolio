gsap.registerPlugin(ScrollTrigger);

gsap.from(".sec02_cont_span", {
    scrollTrigger: {
        trigger: ".sec02_cont_span",
        start: "0% 80%",
        end: "100% 90%",
        scrub: 2
    },
    x: -30,
    opacity: 0
});

gsap.from(".sec02_cont_p", {
    scrollTrigger: {
        trigger: ".sec02_cont_p",
        start: "0% 90%",
        end: "100% 100%",
        scrub: 2
    },
    x: 30,
    opacity: 0
});

gsap.from(".sec01_cont01", {
    scrollTrigger: {
        trigger: ".sec01_cont01",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 0,
    },
    x: 30,
    opacity: 0,
});

gsap.from(".sec01_cont02", {
    scrollTrigger: {
        trigger: ".sec01_cont02",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 0,
    },
    x: 30,
    opacity: 0,
});

gsap.from(".sec01_cont03", {
    scrollTrigger: {
        trigger: ".sec01_cont03",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 0,
    },
    x: 30,
    opacity: 0,
});

gsap.from(".sec01_cont04", {
    scrollTrigger: {
        trigger: ".sec01_cont04",
        start: "0% 80%",
        end: "100% 100%",
        scrub: 0,
    },
    x: 30,
    opacity: 0,
});