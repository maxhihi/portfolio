



// 상단 네비게이션
const headerTopWrap = document.querySelector(".header_top_wrap");
// 상단 메뉴바
const headerMiddle = document.querySelector(".header_middle");
// 로드 된 페이지의 현재 너비
const currentWinWidth = window.innerWidth;


// 최초 초드 후 리사이즈 이벤트
function navResizeEvent (){
    let resizeWinWidth = window.innerWidth;
    let winResizeScrollTop = document.documentElement.scrollTop;
    if(resizeWinWidth > 1025 && winResizeScrollTop == 0){
        headerTopWrap.style.height = "44px"
        headerMiddle.style.top = "44px"
        headerMiddle.style.height = "100px"
        if(headerMiddle.classList.contains("header_middle_on")){
            headerMiddle.classList.remove("header_middle_on");
        }
        nav.addEventListener("mouseover", navover);
        nav.addEventListener("mouseleave", navleave);
        // 리사이즈 이벤트 후 스크롤 이벤트
        window.addEventListener("scroll", () => {
            let resizeAfterScrollTop = document.documentElement.scrollTop;
            if(resizeWinWidth > 1025 && resizeAfterScrollTop == 0){
            headerTopWrap.style.height = "44px"
            headerMiddle.style.top = "44px"
            }else if(resizeWinWidth > 1025 && resizeAfterScrollTop > 0){
            headerTopWrap.style.height = "0px"
            headerMiddle.style.top = "0px"
            }else{
            headerTopWrap.style.height = "0px"
            headerMiddle.style.top = "0px"
            };
        });
    }else if(resizeWinWidth > 1025 && winResizeScrollTop > 0){
        headerTopWrap.style.height = "0px"
        headerMiddle.style.top = "0px"
        headerMiddle.style.height = "100px"
        if(headerMiddle.classList.contains("header_middle_on")){
            headerMiddle.classList.remove("header_middle_on");
        }
        nav.addEventListener("mouseover", navover);
        nav.addEventListener("mouseleave", navleave);
        // 리사이즈 이벤트 후 스크롤 이벤트
        window.addEventListener("scroll", () => {
            let resizeAfterScrollTop = document.documentElement.scrollTop;
            if(resizeWinWidth > 1025 && resizeAfterScrollTop == 0){
            headerTopWrap.style.height = "44px"
            headerMiddle.style.top = "44px"
            }else if(resizeWinWidth > 1025 && resizeAfterScrollTop > 0){
            headerTopWrap.style.height = "0px"
            headerMiddle.style.top = "0px"
            }else{
            headerTopWrap.style.height = "0px"
            headerMiddle.style.top = "0px"
            };
        });
    }else{
        headerMiddle.style.top = "0px"
        headerMiddle.style.height = "56px"
        hamBtn.addEventListener("click", clickHamOn);
        // 리사이즈 이벤트 후 스크롤 이벤트
        window.addEventListener("scroll", () => {
            let resizeAfterScrollTop = document.documentElement.scrollTop;
            if(resizeWinWidth > 1025 && resizeAfterScrollTop == 0){
            headerTopWrap.style.height = "44px"
            headerMiddle.style.top = "44px"
            }else if(resizeWinWidth > 1025 && resizeAfterScrollTop > 0){
            headerTopWrap.style.height = "0px"
            headerMiddle.style.top = "0px"
            }else{
            headerTopWrap.style.height = "0px"
            headerMiddle.style.top = "0px"
            };
        });
    };
};

// 최초 로드 후 스크롤 이벤트
function navScrollEvent (){
    let winScrollTop = document.documentElement.scrollTop;
    if(currentWinWidth > 1025 && winScrollTop == 0){
        headerTopWrap.style.height = "44px"
        headerMiddle.style.top = "44px"
    }else if(currentWinWidth > 1025 && winScrollTop > 0){
        headerTopWrap.style.height = "0px"
        headerMiddle.style.top = "0px"
    }else{
        headerMiddle.style.top = "0px"
    };
};


//최초 로드 함수
function winLoadnav (){
    // 현재 창의 scrollTop
    const currentWinTop = document.documentElement.scrollTop;
    // 창의 너비가 1025보다 크고 scrollTop이 0일경우
    if(currentWinWidth > 1025 && currentWinTop == 0){
        headerTopWrap.style.height = "44px"
        headerMiddle.style.top = "44px"
        window.addEventListener("scroll", navScrollEvent);
        window.addEventListener("resize", navResizeEvent);
        nav.addEventListener("mouseover", navover);
        nav.addEventListener("mouseleave", navleave);
    }
    // 창의 너비가 1025보다 크고 scrollTop이 0보다 클경우
    else if(currentWinWidth > 1025 && currentWinTop > 0){
        headerTopWrap.style.height = "0px"
        headerMiddle.style.top = "0px"
        window.addEventListener("scroll", navScrollEvent);
        window.addEventListener("resize", navResizeEvent);
        nav.addEventListener("mouseover", navover);
        nav.addEventListener("mouseleave", navleave);
    }
    // 창의 너비가 1025보다 작을 경우
    else{
        headerMiddle.style.top = "0px"
        hamBtn.addEventListener("click", clickHamOn);
        window.addEventListener("scroll", navScrollEvent);
        window.addEventListener("resize", navResizeEvent);
    };

};

// 최초 페이지 로드시 네이게이션 이벤트
window.addEventListener('load', winLoadnav);





// 네이게이션 바 호버 시 이벤트
// nav 변수
const container = document.querySelector(".container");


// 메뉴 열리고 닫힐 시 햄버거 버튼 모양 변환 이벤트

const hamBtn = document.querySelector(".ham_btn");
const hamBtnDivF = document.querySelector(".ham_btn > div:first-child");
const hamBtnDivM = document.querySelector(".ham_btn div:nth-of-type(2)");
const hamBtnDivL = document.querySelector(".ham_btn > div:last-child");

// 햄버거 메뉴 x자 변형 이벤트
function hamOn (){
    hamBtnDivF.style.top = "50%";
    hamBtnDivF.style.transform = "translate(-50%, -50%) rotate(45deg)";
    hamBtnDivM.style.display = "none";
    hamBtnDivL.style.bottom = "50%";
    hamBtnDivL.style.transform = "translate(-50%, 50%) rotate(-45deg)";
};

// 햄버거 메뉴 기존 변형 이벤트
function hamOff (){
    hamBtnDivF.style.top = "19px";
    hamBtnDivF.style.transform = "translate(-50%, 0%) rotate(0deg)";
    hamBtnDivM.style.display = "block";
    hamBtnDivL.style.bottom = "19px";
    hamBtnDivL.style.transform = "translate(-50%, 0%) rotate(0deg)";
};


const nav = document.querySelector("nav");
// 웹에서 nav 오버 시 함수
function navover (){
    headerMiddle.style.height = "540px";
    nav.style.height = "540px";
};

// 웹에서 nav 리브 시 함수
function navleave (){
    headerMiddle.style.height = "100px";
    nav.style.height = "100px";
};


//모바일 메뉴 오픈/클로즈 함수
function clickHamOn (){
        if(headerMiddle.classList.contains("header_middle_on")){
            headerMiddle.classList.remove("header_middle_on");
        }else{
            headerMiddle.classList.add("header_middle_on");
        };
};










// 각 메뉴 마우스 오버 및 리브 시 이벤트
const headerMiddleList = document.querySelectorAll(".header_middle_list");
const headerMiddleListA = document.querySelectorAll(".header_middle_list > a");


headerMiddleList.forEach((item, i) => {
    item.addEventListener("mouseover", () => { 
        headerMiddleListA[i].style.color = "#183da3";
    });
    item.addEventListener("mouseleave", () => { 
        headerMiddleListA[i].style.color = "#222222";
    });
});

// 각 하위 메뉴 마우스 오버 및 리브 시 이벤트
const headerMiddleListUnder = document.querySelectorAll(".header_middle_list_under")
const headerMiddleListUnderA = document.querySelectorAll(".header_middle_list_under > a")

headerMiddleListUnder.forEach((item, i)=>{
    item.addEventListener("mouseover", () => {
        headerMiddleListUnderA[i].style.color = "#26a460";
    });
    item.addEventListener("mouseleave", () => {
        headerMiddleListUnderA[i].style.color = "#323234";
    });
});
// 각 하위 메뉴 마우스 오버 및 리브 시 이벤트
const headerMiddleListLast = document.querySelectorAll(".header_middle_list_last")
const headerMiddleListLastA = document.querySelectorAll(".header_middle_list_last > a")
headerMiddleListLast.forEach((item, i)=>{
    item.addEventListener("mouseover", () => {
        headerMiddleListLastA[i].style.color = "#323234";
    });
    item.addEventListener("mouseleave", () => {
        headerMiddleListLastA[i].style.color = "#bcbdbd";
    });
});


headerMiddleListA.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.style.color = "#183da3";
    });
})

    