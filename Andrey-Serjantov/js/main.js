// $(function() {
//
//     var Page = (function() {
//
//         var $navArrows = $( '#nav-arrows' ).hide(),
//             $navDots = $( '#nav-dots' ).hide(),
//             $nav = $navDots.children( 'span' ),
//             $shadow = $( '#shadow' ).hide(),
//             slicebox = $( '#sb-slider' ).slicebox( {
//                 onReady : function() {
//
//                     $navArrows.show();
//                     $navDots.show();
//                     $shadow.show();
//
//                 },
//                 onBeforeChange : function( pos ) {
//
//                     $nav.removeClass( 'nav-dot-current' );
//                     $nav.eq( pos ).addClass( 'nav-dot-current' );
//
//                 }
//             } ),
//
//             init = function() {
//
//                 initEvents();
//
//             },
//             initEvents = function() {
//
//                 // add navigation events
//                 $navArrows.children( ':first' ).on( 'click', function() {
//
//                     slicebox.next();
//                     return false;
//
//                 } );
//
//                 $navArrows.children( ':last' ).on( 'click', function() {
//
//                     slicebox.previous();
//                     return false;
//
//                 } );
//
//                 $nav.each( function( i ) {
//
//                     $( this ).on( 'click', function( event ) {
//
//                         var $dot = $( this );
//
//                         if( !slicebox.isActive() ) {
//
//                             $nav.removeClass( 'nav-dot-current' );
//                             $dot.addClass( 'nav-dot-current' );
//
//                         }
//
//                         slicebox.jump( i + 1 );
//                         return false;
//
//                     } );
//
//                 } );
//
//             };
//
//         return { init : init };
//
//     })();
//
//     Page.init();
//
// });

$(document).ready(function () {
    var link = $('.burger-link');
    var link_active = $('.burger-link_active');
    var navigation = $('.nav');
    var nav_active = $('.nav-active');

    link.click(function(){
        link.toggleClass('burger-link_active');
        navigation.toggleClass('nav-active');
    });

    link_active.click(function(){
        navigation.removeClass('nav-active');
    });
});

$(function() {
    $('.contributer-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<img src="images/left.svg">', '<img src="images/right.svg" alt="right">'],
        // startPosition:2,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
        e.preventDefault();
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
});
$(function() {
    $('a.burger-link').on('click', function(event) {
        event.preventDefault();
    });
});