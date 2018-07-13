(function($) {

    var $height = $(window).height()

    $('.header-wrap').css({"height": $height, width: "100%"})
    $('.copy-wrap').css({"height": $height, width: "100%"})

    $(document).ready(function() {
        $(this).scrollTop(0);
        // clearFirstAnimation();
        // clearSecondAnimation();
    });

    // function firstAnimation() {
    //     $(".scroll-up-arrow").removeClass("hidden")
    //     $("#copy1").removeClass("hidden");
    //     $("#copy1").addClass("visible");
    // }
    //
    // function secondAnimation() {
    //     $(".scroll-down-arrow").addClass("hidden");
    //     $(".scroll-up-arrow").removeClass("hidden");
    //     $("#copy2").removeClass("hidden");
    //     $("#copy2").addClass("visible");
    // }
    //
    // function clearFirstAnimation() {
    //     $("#copy1").addClass("hidden");
    //     $("#copy1").removeClass("visible");
    // }
    //
    // function clearSecondAnimation() {
    //     $(".scroll-down-arrow").removeClass("hidden");
    //     $("#copy2").addClass("hidden");
    //     $("#copy2").removeClass("visible");
    // }

    $(document).scroll(function() {
        var $top = $("#slide").css("top");
        var $height = $(window).height()
        var $scroll = window.scrollY
        var $slide = $(slide).position()
        console.log("SLIDe", $slide);
        $("#slide").removeClass('set-nav');
        $("#slide").css("top", Math.max(180 - 0.2 * window.scrollY, 0) + "px");
        $("#slide").css("left", Math.max(100 - 0.02 * window.scrollY, 0) + "px");
        $("#static").css("opacity", Math.max(1 - 0.002 * window.scrollY, 0));
        $("#slide").css("position", "fixed");
        console.log("SCROLL", $scroll);
        console.log($height);

        if ($scroll < $height/10) {
            $(".scroll-down-arrow").removeClass("hidden");
        } else if ($scroll == $height) {
            $(".scroll-down-arrow").addClass("hidden");
        }
    });

    console.log("Alex's site");
})(window.jQuery || {});
