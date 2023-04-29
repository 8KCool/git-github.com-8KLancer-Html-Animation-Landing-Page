
$(document).ready(function() {
    // width: 2160, height: 4096
    var contentWidth = $(window).width();
    var contentHeight = $(window).height();

    if(contentWidth / 2160 > contentHeight / 4096) {
        $("#content").width(contentHeight/4096 * 2160);
        $("#content").height(contentHeight);
    }else {
        $("#content").width(contentWidth);
        $("#content").height(contentWidth / 2160 * 4096);
    }

});

$(window).resize(function() {
    var contentWidth = $(window).width();
    var contentHeight = $(window).height();
    if(contentWidth / 2160 > contentHeight / 4096) {
        $("#content").width(contentHeight/4096 * 2160);
        $("#content").height(contentHeight);
    }else {
        $("#content").width(contentWidth);
        $("#content").height(contentWidth / 2160 * 4096);
    }
});