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


/* content4 열기 닫기 */
const cont4Div = document.querySelectorAll(".content4_inner>div");

for(let z=0; z<cont4Div.length; z++){
    cont4Div[z].addEventListener('click', (e) =>{
        e.preventDefault();
        cont4Div[z].classList.toggle("on") 
    
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.setAttribute("title", "전체메뉴 닫기");
        }else{
            e.currentTarget.setAttribute("title", "전체메뉴 열기");
        }
    });
}