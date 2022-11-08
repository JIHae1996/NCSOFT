// main.js
// top 버튼
const btnTop = document.querySelector('div.top');

window;addEventListener('scroll' , ()=>{
    let scroll = document.querySelector('html').scrollTop;
    console.log(scroll);
})

btnTop.addEventListener('click' , e =>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})


// /* main_visual*/
   const mainVideo = document.querySelector(".main_visual");

   window.addEventListener('scroll',() =>{
       var scroll =document.querySelector('html').scrollTop;
       console.log(scroll);

       mainVideo.style.transform =`scale(${(100/scroll)*100}%)`;
    
       if(scroll<=0){
        mainVideo.style.transform =`scale(100%)`;
        mainVideo.style.margin =`0px`;
        }else{
        mainVideo.style.margin =`354px`;
        }
    
   });


/* 검색 버튼 */

const srchOpen = document.querySelector(".srch_open");
const srchInner = document.querySelector(".srch_inner");
const srchColose = document.querySelector(".btn_srch_close");

srchOpen.addEventListener('click', (e) =>{
    e.preventDefault();
    srchInner.classList.add("on") 
    srchColose.classList.add("on") 
});

srchColose.addEventListener('click', (e) =>{
    e.preventDefault();
    srchInner.classList.remove("on") 
    srchColose.classList.remove("on") 
});


/* 전체메뉴 열기닫기 */
const allMenu = document.querySelector(".allMenu");


allMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    allMenu.classList.toggle("on") 

    if (e.currentTarget.classList.contains("on")){
        e.currentTarget.setAttribute("title", "전체메뉴 닫기");
    }else{
        e.currentTarget.setAttribute("title", "전체메뉴 열기");
    }
});

// 가로스크롤
const main_visual = document.querySelector('.main_visual');
const banner_bg = document.querySelector('.banner_bg');

const cont_1 = document.querySelector('.content1_inner');
const slider = document.querySelector('.content1_inner>.article_wrap');
const s_wid = slider.offsetWidth;
const s_li = slider.children;
let win_wid = window.innerWidth;
let s_move_max = (s_wid - (win_wid/2)) * -1;


let s_pos = 0;
let li_pos = 0;
let pct = 0;



cont_1.addEventListener('wheel',function(e){
    e.preventDefault;
    if(e.deltaY< 0 && s_pos >= 0){
    setTimeout(()=>{
        cont_1.style.top = `100%`;
    },500);
    return;
    }
    move_slider(e.deltaY);
    });
    
    function move_slider(amount){
    s_pos -= amount;
    if(s_pos < s_move_max){
    s_pos = s_move_max;
    return;
    }else if(s_pos > 0){
    s_pos = 0;
    return;
    }
    slider.style.transform = `translateX(${s_pos}px)`;
    banner_bg.classList.add = "on"
    }
    
 
    



/* content3 열기 닫기 */
const cont3Div = document.querySelectorAll(".content3_inner>div");

for(let z=0; z<cont3Div.length; z++){
    cont3Div[z].addEventListener('click', (e) =>{
        e.preventDefault();
        cont3Div[z].classList.toggle("on") 
    
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.setAttribute("title", "전체메뉴 닫기");
        }else{
            e.currentTarget.setAttribute("title", "전체메뉴 열기");
        }
    });
}

