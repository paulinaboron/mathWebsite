
$(document).ready(function () {

    // Showing navigation with scroll up
    const nav = $("#nav")
    let lastScroll = 0

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset

        if (currentScroll <= 0) {
            nav.removeClass('scrollUp')
        }

        if (currentScroll > lastScroll && !nav.hasClass('scrollDown')) {
            nav.removeClass('scrollUp')
            nav.addClass('scrollDown')
        }

        if (currentScroll < lastScroll && nav.hasClass('scrollDown')) {
            nav.removeClass('scrollDown')
            nav.addClass('scrollUp')
        }

        lastScroll = currentScroll
    })



})

const faders = document.querySelectorAll(".fadeIn")
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
}
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target)
        }
    } )
}, appearOptions)

faders.forEach(fader =>{
    appearOnScroll.observe(fader)
})