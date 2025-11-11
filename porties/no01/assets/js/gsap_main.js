gsap.registerPlugin(ScrollTrigger);

gsap.from('.sec01_img', {x: 80, opacity: 0, duration: 1},0)


gsap.from(".main_section_title01", {
    scrollTrigger: {
        trigger: ".main_section_title01",
        start: "0% 60%",
        end: "100% 80%",
        scrub: 2
    },
    y: 30,
    opacity: 0
});

gsap.from(".main_section_title02", {
    scrollTrigger: {
        trigger: ".main_section_title02",
        start: "0% 60%",
        end: "100% 80%",
        scrub: 2
    },
    y: 30,
    opacity: 0
});

gsap.from(".main_section_title03", {
    scrollTrigger: {
        trigger: ".main_section_title03",
        start: "0% 60%",
        end: "100% 80%",
        scrub: 2
    },
    y: 30,
    opacity: 0
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".m_sec02_grid_item01",
        start: "0% 60%",
        end: "100% 80%",
        scrub: 2
    }
});

tl.from(".m_sec02_grid_item01",{y:20, opacity:0, duration: 2})
.from(".m_sec02_grid_item02",{y:20, opacity:0, duration: 2})
.from(".m_sec02_grid_item03",{y:20, opacity:0, duration: 2})
.from(".m_sec02_grid_item04",{y:20, opacity:0, duration: 2});

gsap.from(".m_sec04_img_wrap", {
    scrollTrigger: {
        trigger: ".m_sec04_img_wrap",
        start: "0% 60%",
        end: "100% 80%",
        scrub: 2
    },
    opacity: 0
});




