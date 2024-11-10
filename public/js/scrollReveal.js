
const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:200,
    reset: true
})

sr.reveal(`.hero__data,
     .course__top, .testimonial__top, 
    .pricing__top, .fqa,
    .footer__icon, .footer__content, .copy__right,
    .alert_nav,
    .goal__content,
    .video__card`
)
sr.reveal(`.banner__card, .goal__image`, {delay:200, scale:0.5})
sr.reveal(`.wrapper__card`, {delay:500})

sr.reveal(`.card, .card_testimonial`, {interval:100})
sr.reveal(`.course-1, .course-3, .course-5, .price__1, .price__3, .navbar,.contact__left `, {origin:'left'})
sr.reveal(`.course-2, .course-4, .course-6, .price__2, .price__4,.nav__right,.cta__wrapper, .contact__right `, {origin:'right'})
sr.reveal(`.logo`, {delay:1000, origin:"left"})
sr.reveal('.cta__wrapper', {origin:"bottom"})

