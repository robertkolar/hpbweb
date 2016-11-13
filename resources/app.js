/**
 * Created by robertk on 4/26/2016.
 */
$(document).ready(function() {
    Hpb.initSwapChartImage();
    Hpb.initFrontPageCarousel();
    Hpb.initScrollUp();
    Hpb.initEkkoLightbox();
    Hpb.initGoogleAnalytics();
});

var Hpb = (function() {
    var my = {};

    my.initSwapChartImage = function() {
        $('.hpb-button').click(function () {
            var buttonId = $(this).attr('id'),
                els = buttonId.split('-'),
                symbol = els[1],
                ymd = els[2],
                interval = els[3],
                suffix = els[4],
                yy = ymd.substr(0, 1);

            var chartLinkId = 'chartlink-' + symbol + '-' + ymd;
            var chartImageId = 'chartimage-' + symbol + '-' + ymd;
            var imgSrc = 'http://charts.highpowerbear.com/' + yy + '/' + ymd + '/' + symbol + '_' + ymd + '_' + interval + '.' + suffix;

            $('#' + chartLinkId).attr('href', imgSrc);
            $('#' + chartImageId).on('load', function () {
                console.log('loaded');
                $('#' + buttonId).addClass('active').siblings().removeClass('active');
                $('#' + chartImageId).off('load');
            }).attr('src', imgSrc);
            return true;
        });
    };
    
    my.initFrontPageCarousel = function() {
        // Activate Carousel
        $("#front-page-carousel").carousel();

        // Enable Carousel Indicators
        $(".item1").click(function() {
            $("#front-page-carousel").carousel(0);
        });
        $(".item2").click(function() {
            $("#front-page-carousel").carousel(1);
        });
        // Enable Carousel Controls
        $(".left").click(function() {
            $("#front-page-carousel").carousel("prev");
        });
        $(".right").click(function() {
            $("#front-page-carousel").carousel("next");
        });
    };
    
    my.initScrollUp = function() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.hpb-scrollup').fadeIn();
            } else {
                $('.hpb-scrollup').fadeOut();
            }
        });

        $('.hpb-scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    };

    my.initEkkoLightbox = function() {
        $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    };

    my.initGoogleAnalytics = function() {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-11271802-3', 'auto');
        ga('send', 'pageview');
    };

    return my;
}());
