///////////////////////// 네이게이션 바 위치에 관련된 함수

const nav = document.querySelector("nav"); // 네이게이션 바 변수

// 네이게이션 바의 상단 위치에 따른 position top 값을 바꾸는 함수
function navScroll (){
    let winTop = document.documentElement.scrollTop;
    if(winTop > 0){
        nav.style.top = "0px";
    }else{
        nav.style.top = "41px";
    }
};


window.addEventListener("load", navScroll); //페이지가 로드 될 시 네비게이션 바의 위치
window.addEventListener("scroll", navScroll); //페이지를 스크롤 할 시 네비게이션 바의 위치






///////////////////////// 사이드 메뉴에 관련된 함수

const sideMenu = document.querySelector(".side_menu"); // 사이드 메뉴의 변수
const hamBtn = document.querySelector(".ham_btn"); // 햄버거 버튼의 변수
const sideBtn = document.querySelector(".side_btn") // 사이드 메뉴 x 버튼의 변수
const sideMenuList = document.querySelectorAll(".side_menu_list") // 사이드 메뉴의 리스트 변수

// 사이드 메뉴를 보여주는 함수
function sideMenuShow (){
        sideMenu.style.right = "0%";
        sideMenuList.forEach((item, e) => {
            setTimeout(function(){
                item.style.opacity = "1";
                item.style.top = "0";
            },200+(e*50));
        });
}

//사이드 메뉴를 감추는 함수
function sideMenuHide (){
        sideMenu.style.right = "-100%";
        sideMenuList.forEach((item, e) => {
            setTimeout(function(){
                item.style.opacity = "0";
                item.style.top = "10px";
            },200+(e*50));
        });
}

hamBtn.addEventListener("click", sideMenuShow) // 햄버거 메뉴 클릭 시 사이드 메뉴를 보여주는 이벤트
sideBtn.addEventListener("click", sideMenuHide) // 햄버거 메뉴 클릭 시 사이드 메뉴를 감추는 이벤트






///////////////////////// 네비게이션의 리스트 하단 라인에 관련된 함수

const navList = document.querySelectorAll(".navigation_bar > li > a"); // 네비게이션 리스트의 변수


// 리스트에 마우스를 오버시 애니메이션을 보여주는 이벤트
navList.forEach((item)=>{
    item.addEventListener("mouseenter", ()=>{
        item.classList.add("active");
    })
    item.addEventListener("mouseleave", ()=>{
        item.classList.remove("active");
    })
})



///////////////////////// 네비게이션의 리스트 하단 라인에 관련된 함수

const itemMenuList = document.querySelectorAll(".item_menu > li > a"); // 세번째 article의 상단 메뉴부분 리스트의 변수

// 클릭한 메뉴 리스트에 텍스트를 강조하는 이벤트
itemMenuList.forEach((item)=>{
    item.addEventListener("click", (e)=>{
        e.preventDefault();
        itemMenuList.forEach((el)=>{el.classList.remove("item_on")});
        e.currentTarget.classList.add("item_on");
    })
});