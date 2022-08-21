
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
