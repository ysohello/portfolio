'use strict';
{

    //scroll Effect
    (function () {
        var $elems = $('.card-effect');
        var show = 0.7;

        function init() {
            setup();
            scroll();
        }

        function setup() {
            if ($elems.length) {
                for (var i = 0; i < $elems.length; i++) {
                    var tg = $elems.eq(i);
                    tg.addClass('is-hidden');
                }
            }
        }

        function scroll() {
            var sT = $(window).scrollTop();
            var winH = window.innerHeight;
            if ($elems.length) {
                for (var i = 0; i < $elems.length; i++) {
                    var tg = $elems.eq(i);
                    var getTop = tg.offset().top;
                    if (sT + winH * show > getTop) {
                        tg.removeClass('is-hidden');
                    }
                }
            }
        }

        $(window).on('load', init);
        $(window).on('scroll resize', scroll);
        document.addEventListener('touchmove', scroll);
    })();


    //loading
    (function () {
        var $loader = $('#loading');
        $(window).on('load', function (e) {
            if ($loader.hasClass('splash')) {
                $loader.addClass('s1');
                setTimeout(function () {
                    $loader.addClass('s2');
                }, 1250);
                setTimeout(function () {
                    $loader.addClass('out');
                }, 2400);
                setTimeout(function () {
                    $loader.remove();
                }, 3500);
            } else {
                $loader.fadeOut(1000, 'easeOutQuad', function () {
                    $loader.remove();
                });
            }
        });
    })();


    const cover = document.querySelector("#portfolio");
    const slider = document.querySelector(".slider");
    const logo = document.querySelector(".logo-link h3");
    const nav = document.querySelector("nav");
    const headline = document.querySelector("#portfolio");
    const footer = document.querySelector("footer");
    const h1 = document.querySelector("h1");
    const fadeIn = document.querySelectorAll(".fadeIn");


    const tl = gsap.timeline();

    tl.fromTo(
        cover,
        1,
        { height: "0vh" },
        { height: "75vh", ease: Power2.easeInOut }
    ).fromTo(
        cover,
        1.2,
        { width: "100%" },
        { width: "80%" }
    ).fromTo(
        slider,
        1.2,
        { y: "-100%" },
        { y: "0%", ease: Power2.easeInOut },
        "-=1.2"
    ).fromTo(
        logo,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=0.5"
        // logo 0.5秒間かけて 透明度0から1 x軸30から0 タイミングは0.5秒早く　表示させる
    ).fromTo(
        nav,
        // .5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "-=0.5"
        // meun 0.5秒間かけて 透明度0から1 x軸30から0 タイミングは0.5秒早く　表示させる
    ).fromTo(
        headline,
        0.5,
        { opacity: 0, x: 0 },
        { opacity: 1, x: 30 },
        "-=0.5"
        // headline 0.5秒間かけて 透明度0から1 x軸0から30 タイミングは0.5秒早く　表示させる
    ).fromTo(
        footer,
        0.5,
        { opacity: 0, x: 0 },
        { opacity: 1, x: 30 },
        "-=0.5"
        // headline 0.5秒間かけて 透明度0から1 x軸0から30 タイミングは0.5秒早く　表示させる
    ).fromTo(
        h1,
        0.5,
        { opacity: 0, x: 0 },
        { opacity: 1, x: 30 },
        "-=0.5"
    ).fromTo(
        fadeIn,
        1.5,
        { opacity: 0, x: 0 },
        { opacity: 1, x: 30 },
        // "-=0.5"
    );





}

