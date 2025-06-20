const contactButtonEl = document.querySelector('.header__contact-button')
const burgerButtonEl = document.querySelector('.header__burger')
const headerNavEl = document.querySelector('.header__nav')
const headerEl = document.querySelector('.header')

contactButtonEl.addEventListener("click", (e) => {
    const headerContactEl = e.currentTarget.closest('.header__contact')
    console.log(headerContactEl)
    headerContactEl.classList.toggle('header__contact--open')
})

burgerButtonEl.addEventListener("click", (e) => {
    headerEl.classList.toggle("header--open")
})