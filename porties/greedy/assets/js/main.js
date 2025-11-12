

const loadingWrap = document.querySelector(".loading_wrap")

window.addEventListener("load", ()=>{
    loadingWrap.style.opacity = 0;
    setTimeout(() => {
        loadingWrap.style.display = "none";
    }, 300);
});