/**
 * Created by robertk on 4/26/2016.
 */
$(document).ready(function() {
    $('.hpb-button').click(function () {
        if (!$(this).hasClass('disabled')) {
            Hpb.swapImage($(this).attr('id'));
        }
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

        $('.hpb-button').css('cursor', 'wait').addClass('disabled');
        $('#' + chartLinkId).attr('href', imgSrc);

        $('#' + chartImageId).css('cursor', 'wait').on('load', function () {
            console.log('loaded');
            $('.hpb-button').css('cursor', 'pointer').removeClass('disabled');
            $('#' + chartImageId).css('cursor', 'pointer').off('load');
        }).attr('src', imgSrc);
        return true;
    };
    return my;
}());