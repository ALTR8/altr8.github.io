(function($){

    $(".nav-anchors").click(function() {
        target = $(this).attr("href").slice(1);
        target = $("#" + target);
        scrollT = target.offset().top-50;
        if (target.length) {
            $('html,body').animate({
                scrollTop: scrollT
            }, 500);
        }
        return false;
    });

    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".collapse").hasClass("collapse show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $("button.navbar-toggler").click();
        }
    });
});


    console.log("Hello World!");
})(window.jQuery || {});
