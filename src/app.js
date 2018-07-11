(function($) {

    $(document).ready(function() {
        $(this).scrollTop(0);
        $("scroll-down-arrow").fadeIn(400);
        clearFirstAnimation();
        clearSecondAnimation();
    });

    function firstAnimation() {
        $(".scroll-up-arrow").removeClass("hidden")
        $("#copy1").removeClass("hidden");
        $("#copy1").addClass("visible");
    }

    function secondAnimation() {
        $(".scroll-down-arrow").addClass("hidden");
        $(".scroll-up-arrow").removeClass("hidden");
        $("#copy2").removeClass("hidden");
        $("#copy2").addClass("visible");
    }

    function clearFirstAnimation() {
        $("#copy1").addClass("hidden");
        $("#copy1").removeClass("visible");
    }

    function clearSecondAnimation() {
        $(".scroll-down-arrow").removeClass("hidden");
        $("#copy2").addClass("hidden");
        $("#copy2").removeClass("visible");
    }

    $(document).scroll(function() {
        var $top = $("#slide").css("top");
        var $height = $(window).height()
        var $scroll = window.scrollY
        $("#slide").css("top", Math.max(180 - 0.2 * window.scrollY, 0) + "px");
        $("#static").css("opacity", Math.max(1 - 0.002 * window.scrollY, 0));
        $("#slide").css("position", "fixed");

        if ($scroll === 0) {
            $(".scroll-up-arrow").addClass("hidden");
            clearFirstAnimation()
        } else if ($scroll > $height && $scroll < $height + 349) {
            clearSecondAnimation()
            firstAnimation()
        } else if ($scroll > $height + 350 && $scroll < $height + 352) {
            clearFirstAnimation()
            clearSecondAnimation()
        } else if ($scroll > $height + 353 && $scroll < $height + 700) {
            clearFirstAnimation()
            secondAnimation()
        }
    });

    console.log("Alex's site");
})(window.jQuery || {});
