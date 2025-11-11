
const langButton = document.querySelector(".header_lang_wrap button");
const langSubMenu = document.querySelector(".header_lang_sub_wrap");
const langSubMenuList = document.querySelectorAll(".header_lang_sub_wrap span");

//언어 창 opacity 조정
function opacityControl (){
    langSubMenu.classList.toggle("sub_show02");
}

//언어 창 display 조정
function showLangMenu (){
    langSubMenu.classList.toggle("sub_show01");
    setTimeout(opacityControl, 10);
};

//상단 언어 버튼 클릭 이벤트
langButton.addEventListener("click", showLangMenu);

//언어 창 선택 언어 변경 함수
function changeLang (){
    if(true){
        const selectedSpan = document.querySelector(".selected_leng");
        selectedSpan.classList.remove("selected_leng");
        this.classList.add("selected_leng");
        const currentText = this.innerText;
        const langTxt = document.querySelector(".currentLang");
        if(langTxt.innerText !== currentText){
            langTxt.innerHTML = currentText;
        }
    }
};

//언어 창 내 언어 클릭 이벤트
for(let i = 0; i < langSubMenuList.length; i++){
    langSubMenuList[i].addEventListener("click", changeLang)
}

const headerMenuFirst = document.querySelector(".header_nav > ul > li:first-child");
const headerNavDown = document.querySelector(".header_nav_down");

//상단 메뉴 보이기 함수
function menuShow (e){
    e.preventDefault();
    if(!headerNavDown.classList.contains("header_nav_down_display")){
        headerNavDown.classList.add("header_nav_down_display");
        headerNavDown.style.opacity = "1"
        const headerNavDownList = document.querySelectorAll(".header_nav_down_list");
        for (let i = 0; i < headerNavDownList.length; i++){
            setTimeout(() => {
                    headerNavDownList[i].style.transform = "translateY(0px)"
                    headerNavDownList[i].style.opacity = "1"
            }, i * 50 + 10);
        };
    }else{
        headerNavDown.classList.remove("header_nav_down_display");
        headerNavDown.style.opacity = "0"
        const headerNavDownList = document.querySelectorAll(".header_nav_down_list");
        for (let i = 0; i < headerNavDownList.length; i++){
                    headerNavDownList[i].style.transform = "translateY(50px)"
                    headerNavDownList[i].style.opacity = "0"
        };
    }
};

const headerNavDownX = document.querySelector(".header_nav_down_x");

//상단 메뉴 숨기기 함수
function menuHide (e){
    e.preventDefault();
    if(headerNavDown.classList.contains("header_nav_down_display")){
        headerNavDown.classList.remove("header_nav_down_display");
        headerNavDown.style.opacity = "0"
        const headerNavDownList = document.querySelectorAll(".header_nav_down_list");
        for (let i = 0; i < headerNavDownList.length; i++){
                    headerNavDownList[i].style.transform = "translateY(50px)"
                    headerNavDownList[i].style.opacity = "0"
        };
    }
};

//상단 메뉴 닫기/열기 클릭 이벤트
headerMenuFirst.addEventListener("click", menuShow);
headerNavDownX.addEventListener("click", menuHide);

// mobile menu 변수
const wrap01 = document.querySelector(".wrap");
const wrap02 = document.querySelector(".wrap02");
const wrap03 = document.querySelector(".wrap03");
const mobileMenuWrap = document.querySelector(".mobile_menu_wrap");
const hamMenu = document.querySelector(".ham_menu");
const mobileBtmMenu = document.querySelector(".mobile_btm_menu");
const mobileX = document.querySelector(".mobile_x");

// mobile menu 보이기 함수
function mMenuShow (){
    mobileMenuWrap.style.display = "block";
    wrap01.style.display = "none";
    wrap02.style.display = "none";
    wrap03.style.display = "none";
    setTimeout(() => {
        mobileBtmMenu.style.opacity = "1"
    }, 100);
};

// mobile menu 보이기 클릭 이벤트
hamMenu.addEventListener("click", mMenuShow);

// mobile menu 숨기기 함수
function mMenuHide (){
    wrap01.style.display = "block";
    wrap02.style.display = "block";
    wrap03.style.display = "block";
    mobileMenuWrap.style.display = "none";
    mobileBtmMenu.style.opacity = "0"
};

mobileX.addEventListener("click", mMenuHide);

//  mobile menu 카테고리 변수
const mobilePro = document.querySelector(".mobile_pro");
const mobileProSpan = document.querySelector(".mobile_pro > span");
const mobileProI = document.querySelector(".mobile_pro > i");
const mobileBtmSubMenuWrap = document.querySelector(".mobile_btm_sub_menu_wrap");

// mobile menu 카테고리 보이기 함수
function mobileCateShow (e){
    e.preventDefault();
    const mobileBtmSubList = document.querySelectorAll(".mobile_btm_sub_list");
    if(mobileBtmSubMenuWrap.classList.contains("mobile_btm_sub_menu_wrap_hide")){
        mobileBtmSubMenuWrap.classList.remove("mobile_btm_sub_menu_wrap_hide");
        mobileProSpan.classList.add("mobile_pro_black");
        mobileProI.classList.add("mobile_pro_black");
        for(let i = 0; i < mobileBtmSubList.length; i++){
            setTimeout(() => {
                mobileBtmSubList[i].style.transform = "translateY(0px)"
                mobileBtmSubList[i].style.opacity = "1"
            }, i * 10 + 10);
        };
    }else{
        mobileBtmSubMenuWrap.classList.add("mobile_btm_sub_menu_wrap_hide");
        mobileProSpan.classList.remove("mobile_pro_black");
        mobileProI.classList.remove("mobile_pro_black");
        for(let i = 0; i < mobileBtmSubList.length; i++){
            mobileBtmSubList[i].style.transform = "translateY(10px)"
            mobileBtmSubList[i].style.opacity = "0"
        };
    }
};

// mobile menu 카테고리 보이기 클릭 이벤트
mobilePro.addEventListener("click", mobileCateShow);

// mobile menu 언어 버튼 변수
const lengFormSpan = document.querySelector(".leng_form > span");
const lengFormWrap = document.querySelector(".leng_form_wrap");

function mLengShow01 (){
    lengFormWrap.classList.toggle("sub_show02");
};

function mLengShow02 (){
    lengFormWrap.classList.toggle("sub_show01");
    setTimeout(mLengShow01, 10);
};

lengFormSpan.addEventListener("click", mLengShow02);


const leng_form_li = document.querySelectorAll(".leng_form_li");

//언어 창 선택 언어 변경 함수
function changeLang02 (){
    if(true){
        const selectedLi = document.querySelector(".selected_leng02");
        selectedLi.classList.remove("selected_leng02");
        this.classList.add("selected_leng02");
        const currentText = this.innerText;
        const langTxt = document.querySelector(".leng_form > span > span");
        if(langTxt.innerText !== currentText){
            langTxt.innerHTML = currentText;
        }
        lengFormWrap.classList.remove("sub_show01");
        lengFormWrap.classList.remove("sub_show02");
    }
};

//언어 창 내 언어 클릭 이벤트
for(let i = 0; i < langSubMenuList.length; i++){
    leng_form_li[i].addEventListener("click", changeLang02)
}