///////////////////////// 시작버튼 클릭 이벤트

const startBtn = document.querySelector(".start_btn");
const menuListWrap = document.querySelector(".menu_list_wrap");

function startClick (){
    if(menuListWrap.classList.contains("off")){
        menuListWrap.classList.remove("off");
        startBtn.classList.add("start_on");
    };
};

startBtn.addEventListener("click", startClick);

function startLeave (){
    if(!menuListWrap.classList.contains("off")){
        menuListWrap.classList.add("off");
        startBtn.classList.remove("start_on");
    };
};


menuListWrap.addEventListener("mouseleave", startLeave);



///////////////////////// 바탕화면 아이콘 클릭 이벤트

const icon = document.querySelectorAll(".icon");
const menuLiList = document.querySelectorAll(".menu_li_list");
const folder = document.querySelectorAll(".folder");
const waitItem = document.querySelectorAll(".wait_item");
let zindexCounter = 1;


function folderOpen (clickIcon, folderName, className){
    clickIcon.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            folderName[index].classList.remove(className);
            zindexCounter += 10;
            folderName[index].style.zIndex = zindexCounter;
            waitItem[index].classList.remove(className);
            waitItem.forEach((el)=>{
                el.classList.remove("wait_item_on");
            });
            waitItem[index].classList.add("wait_item_on");
        });
    });
};


folderOpen(icon, folder, "off");
folderOpen(menuLiList, folder, "off");
folderOpen(waitItem, folder, "off");



///////////////////////// 폴더 내 X버튼 클릭 이벤트

const xBox = document.querySelectorAll(".x_box");
const cancelBtn = document.querySelector(".cancel_btn")

function folderClose (clickIcon, folderName, className){
    clickIcon.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            folderName[index].classList.add(className);
            waitItem[index].classList.add(className);
            waitItem[index].classList.remove("wait_item_on");
        })
    });
};

folderClose(xBox, folder, "off");

cancelBtn.addEventListener("click", ()=>{
    folder[0].classList.add("off");
    waitItem[0].classList.add("off");
    waitItem[0].classList.remove("wait_item_on");
});

///////////////////////// 자기소개서 내 버튼 클릭 이벤트

const myselfListMenu = document.querySelectorAll(".myself_list_menu");
const myselfContWrap = document.querySelectorAll(".myself_cont_wrap");

function resumeBtnClick (clickIcon, folderName, className){
    clickIcon.forEach((item, index)=>{
        item.addEventListener("click", ()=>{
            clickIcon.forEach(el => el.classList.remove(className));
            item.classList.add(className);
            zindexCounter += 10;
            folderName[index].style.zIndex = zindexCounter;
        })
    });
};

resumeBtnClick(myselfListMenu, myselfContWrap, "list_on");



///////////////////////// 윈도우 로드 이벤트

const loadingWrap = document.querySelector(".loading_wrap");
const mobileImgWrap = document.querySelector(".mobile_wrap");
const container = document.querySelector(".container");

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        container.classList.remove("off")
        mobileImgWrap.classList.remove("off")
        loadingWrap.classList.add("off")
    },2000);
});

///////////////////////// 작업표시줄 시계

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.querySelector(".clock_box > span").innerText = timeString;
}

// 매 초마다 시계 업데이트
setInterval(updateClock, 1000);

// 페이지 로드 시에도 시계 업데이트
updateClock();