/**
 * Created by robertk on 4/26/2016.
 */
$(document).ready(function() {
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $('.hpb-button').click(function () {
        Hpb.swapImage($(this).attr('id'));
    });
});

var Hpb = (function() {
    var my = {};
    my.swapImage = function(buttonId) {
        var els = buttonId.split('-'),
            symbol = els[1],
            ymd = els[2],
            interval = els[3],
            suffix = els[4];

        var chartLinkId = 'chartlink-' + symbol + '-' + ymd;
        var chartImageId = 'chartimage-' + symbol + '-' + ymd;
        var imgSrc = '/charts/' + ymd.substr(0, 2) + '/' + ymd.substr(2, 2) + '/' + ymd.substr(4, 2) + '/' + symbol + '_' + ymd + '_' + interval + '.' + suffix;

        $('#' + chartLinkId).attr('href', imgSrc);
        $('#' + chartImageId).on('load', function () {
            console.log('loaded');
            $('#' + buttonId).addClass('active').siblings().removeClass('active');
            $('#' + chartImageId).off('load');
        }).attr('src', imgSrc);
        return true;
    };
    return my;
}());