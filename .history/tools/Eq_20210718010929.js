import { Equalizer } from "../tools/Equalizer.js";
// import { defaultPic } from "../tools/default.js";

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
console.log(swiper.cubeEffect.setTransition);
document.addEventListener("DOMContentLoaded", () => {
    new WebkitInputRangeFillLower({
        selectors: ['bass', 'treble','stereo', 'treb-boost', 'bass-boost', 'vol-add', 'rate-xp', 'balance', 'audio-boost', 'audio-limit', 'd1-v', 's1-v', 'd2-v', 's2-v'],
        color: '#63cdff'
    });
    new WebkitInputRangeFillLower({
        selectors: ['audio-boost', 'rate-xp'],
        color: '#63cdff'
    });
});
(function($) {
    $('#effects-off').hide();
    $('#effects-on').on('click', function() {
        $(this).hide();
        $('#effects-off').show();
    });

    $('#effects-off').on('click', function() {
        $(this).hide();
        $('#effects-on').show();
    });

    $("#open-btn-container").click(function() {
        $(".button-container").toggleClass("active");
        //$(this).css("opacity","0");
    });
    $(window).on("load", function() {
        $("#changelog").show();
    });
    $("#close-log").click(function() {
        $("#changelog").hide();
    });
    


    $("#add-music").click(function() {
        $("#demo").click();
        // alert();
    })
    $('#feedback').click(function() {
        location = "mailto:brunohectre@gmail.com";
    })

})(jQuery);
$(function() {
    setInterval(function() {
        var num = Math.floor(Math.random() * 100)
        return num;
    }, 1000)
    $("#slider1").slider({
        value: function() {

        }
    });
});
$(window).on("load", function() {
    document.querySelector(".swiper-container").style.backgroundImage = "url(" + defaultPic.image + ")";
    $("#trackId").attr("src", defaultPic.image);
    //   alert("Cordova");
});
//   switch visualizers
$(".bar").hide();
$(".spectrum").click(function() {
    $(this).hide();
    $(".bar").show();
    $("#spec-visual").show();
    $("#bars-visual").hide();
});
$(".bar").click(function() {
    $(this).hide();
    $(".spectrum").show();
    $("#spec-visual").hide();
    $("#dw-bars-visual").show();
});

$("#visual-select").click(function() {
    $(".box").show();
});
$(".box").click(function() {
    $(this).hide();
});
// Default selection
$(".norm-visual").show();
$("#bars-visual").show().css("transform", "translateY(115px)");
$("#spec-visual").hide();
$("#up-bars-visual").hide();
$("#dw-bars-visual").hide();
$(".spiral").hide();


$(".body p").eq(0).click(function() {
    $("#bars-visual").show();
    $("#spec-visual").hide();
    $(".double-visual").hide();
    $(".spiral").hide();

});

$(".body p").eq(1).click(function() {
    $("#spec-visual").show();
    $("#bars-visual").hide();
    $(".double-visual").hide();
    $(".spiral").hide();

});

$(".body p").eq(2).click(function() {
    $(".double-visual").show();
    $("#up-bars-visual").show();
    $("#dw-bars-visual").show();
    $("#spec-visual").hide();
    $("#bars-visual").hide();
    $(".spiral").hide();

});
// $(".spiral").click(function() { $(this).hide(); });
$(".body p").eq(3).click(function() {
    $(".double-visual").hide();
    $("#up-bars-visual").hide();
    $("#dw-bars-visual").hide();
    $("#spec-visual").hide();
    $("#bars-visual").hide();
    $(".spiral").show();
});

$(".auto button").click(function() {
    $(".load-body").show().addClass("active");
});

// playlist
$('#playlist').click(function(){
    $(".plist").addClass('w3-show')

})

// getTrackId("#demo");
//resetSetting("#reset");

var q = new Equalizer();/**Initiating the Equalizer Engine */
q.getFile('#demo');
q.getProgressData('#prog');
q.getControlButtons(".btn");
q.timeUpdate(".time");
q.getTempo("#rate-xp", "#sp-rate");
q.getAudioVolume("#vol-add", "#vol");
q.repeatStopTrack(".repeat-on",".repeat-off");
q.getPlaylist("#tracks");