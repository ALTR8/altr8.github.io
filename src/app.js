(function($){

    function firstAnimation() {
        $("#copy1").removeClass("hidden");
        $("#copy1").addClass("visible");
    }

    function secondAnimation() {
        $("#copy2").removeClass("hidden");
        $("#copy2").addClass("visible");
    }

    function clearFirstAnimation() {
        $("#copy1").addClass("hidden");
        $("#copy1").removeClass("visible");
    }

    function clearSecondAnimation() {
        $("#copy2").addClass("hidden");
        $("#copy2").removeClass("visible");
    }

    $(document).ready(function(){
        $(this).scrollTop(0);
        clearFirstAnimation()
        clearSecondAnimation()
    });

    $(document).scroll(function() {
        var $top = $("#slide").css("top");
        var $height = $(window).height()*(0.3)
        console.log($height);
        var $scroll = window.scrollY
    	$("#slide").css("top", Math.max(180 - 0.2*window.scrollY, 0) + "px");
        $("#static").css("opacity", Math.max(1 - 0.002*window.scrollY, 0));
        $("#slide").css("position", "fixed");

        if ($scroll === 0) {
            clearFirstAnimation()
        } else if ($scroll > $height && $scroll < $height+349) {
            clearSecondAnimation()
            firstAnimation()
        } else if ($scroll > $height+650 && $scroll < $height+670) {
            clearFirstAnimation()
            clearSecondAnimation()
        } else if ($scroll > $height+671 && $scroll < $height+950){
            clearFirstAnimation()
            secondAnimation()
        }
    });

console.log("Alex's site");
})(window.jQuery || {});
