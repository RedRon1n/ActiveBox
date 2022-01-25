$(function () {
   
    /* Fixed Header */
    
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();  /* Сколько  было проскролено от верха страницы */
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    checkScroll(scrollPos,introH);
    
    $(window).on("scroll resize", function (){    /* При скроле страницы пишется действие которое нужно выполнить */
        introH = intro.innerHeight(); 
        scrollPos = $(this).scrollTop();
            
        checkScroll(scrollPos,introH);
    })

    function checkScroll(scrollPos,introH) {
        if(scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */

    $("[data-scroll]").on("click", function(event) {
       event.preventDefault();      /* event.preventDefault() отменяет стандартное поведение ссылки при клике */

       let elementId = $(this).data('scroll');    /* при помощи конструкции this мы получаем доступ к элементу по которому кликнули и мы  хотим получить его датаатрибут */
       let elementOffset = $(elementId).offset().top;

       nav.removeClass("show");

       $("html, body").animate({   /* Плавный скрол */
            scrollTop: elementOffset - 66
        },700); /* Скорость прокрутки */

    });



    /* nav Toggle */

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");       /* При клике скрывает при повторном клике показывает */

    });



    /* Reviews, link slider https://kenwheeler.github.io/slick/  */

    let slider = $("#reviewsSlider");

    
    slider.slick({
        infinite: true,         /* если элементы заканчиваются, они повторяются заново */
        slidesToShow: 1,        /* Сколько мы хотим показывать слайдов */
        slidesToScroll: 1,       /* Сколько слайдов будет прокручено */
        fade: true,             /* Затемняет одзыв, один появляется другой исчезает */
        arrows: false,
        dots: true               /* Показывает точки по умолчанию  */
  });

});