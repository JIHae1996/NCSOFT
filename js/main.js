// main.js
// top 버튼
const btnTop = document.querySelector('div.top')

window
addEventListener('scroll', () => {
  let scroll = document.querySelector('html').scrollTop
  console.log(scroll)
})

btnTop.addEventListener('click', e => {
  e.preventDefault()
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})

// /* main_visual*/
const mainVideo = document.querySelector('.main_visual')

window.addEventListener('scroll', () => {
  var scroll = document.querySelector('html').scrollTop
  console.log(scroll)

  mainVideo.style.transform = `scale(${(100 / scroll) * 100}%)`

  if (scroll <= 0) {
    mainVideo.style.transform = `scale(100%)`
    mainVideo.style.margin = `0px`
    mainVideo.style.transition = `all 0.5s linear 0s`
  } else {
    mainVideo.style.margin = `354px`
    mainVideo.style.transform = `scale(100%)`
    mainVideo.style.transition = `all 0.5s linear 0s`
  }
})

/* 검색 버튼 */

const srchOpen = document.querySelector('.srch_open')
const srchInner = document.querySelector('.srch_inner')
const srchColose = document.querySelector('.btn_srch_close')

srchOpen.addEventListener('click', e => {
  e.preventDefault()
  srchInner.classList.add('on')
  srchColose.classList.add('on')
})

srchColose.addEventListener('click', e => {
  e.preventDefault()
  srchInner.classList.remove('on')
  srchColose.classList.remove('on')
})

/* 전체메뉴 열기닫기 */
const allMenu = document.querySelector('.allMenu')

allMenu.addEventListener('click', e => {
  e.preventDefault()
  allMenu.classList.toggle('on')

  if (e.currentTarget.classList.contains('on')) {
    e.currentTarget.setAttribute('title', '전체메뉴 닫기')
  } else {
    e.currentTarget.setAttribute('title', '전체메뉴 열기')
  }
})

// 가로스크롤
const scrollNext = document.querySelector('.btn_next')
const scrollPrev = document.querySelector('.btn_prev')

scrollNext.addEventListener('click', e => {
  const article_wrap = document.querySelector('.article_wrap')
  e.preventDefault()
  article_wrap.scroll({
    top: 0,
    left: 80,
    behavior: 'smooth',
  })
})
scrollPrev.addEventListener('click', e => {
  const article_wrap = document.querySelector('.article_wrap')
  e.preventDefault()
  article_wrap.scroll({
    top: 0,
    left: -80,
    behavior: 'smooth',
  })
})

/* content3 열기 닫기 */
const cont3Div = document.querySelectorAll('.content3_inner>div')

for (let z = 0; z < cont3Div.length; z++) {
  cont3Div[z].addEventListener('click', e => {
    e.preventDefault()
    cont3Div[z].classList.toggle('on')

    if (e.currentTarget.classList.contains('on')) {
      e.currentTarget.setAttribute('title', '전체메뉴 닫기')
    } else {
      e.currentTarget.setAttribute('title', '전체메뉴 열기')
    }
  })
}
