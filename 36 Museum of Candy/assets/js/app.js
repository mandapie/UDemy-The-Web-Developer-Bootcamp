$(function () {
    $(window).scroll(function () {
        console.log("scrolling...");
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});