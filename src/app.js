(function($){

    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    $(document).scroll(function() {
        var $scroll = window.scrollY
        console.log("SCROLL", $scroll);
    	$("#slide").css("top", Math.max(180 - 0.2*window.scrollY, 0) + "px");
        $("#static").css("opacity", Math.max(1 - 0.002*window.scrollY, 0));
        $("#slide").css("position", "fixed");
        if ($scroll > 350 && $scroll < 850) {
            $("#copy1").removeClass("visible");
            $("#copy1").removeClass("hidden");
            $("#copy1").addClass("visible");
            $("#copy2").addClass("hidden");
        } else if ($scroll > 950 && $scroll < 1250){
            $("#copy2").removeClass("hidden");
            $("#copy2").removeClass("visible");
            $("#copy1").addClass("hidden");
            $("#copy2").addClass("visible");
        }

    });

    $('copy-wrap').scroll(function() {
        alert("scrolling")
    })

console.log("Alex's site");
})(window.jQuery || {});
