import { Equalizer } from "../tools/Equalizer.js";
 new Swiper('.swiper-container', {
    spaceBetween: 0,
    parallax:true,
    speed:600,
    effect:"cube",// flip coverflow cube fade
    gradCursor:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    //   },
    //   cubeEffect: {
    //     shadow: true,
    //     slideShadows: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.94,
    //   },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
// console.log(new Swiper('.swiper-container'));
document.addEventListener("DOMContentLoaded", () => {
    new WebkitInputRangeFillLower({
        selectors: ['bass', 'treble','stereo', 'treb-boost', 'bass-boost', 'vol-add', 'rate-xp', 'balance', 'audio-boost', 'audio-limit', 'd1-v', 's1-v', 'd2-v', 's2-v'],
        color: '#63cdff'
    });
    new WebkitInputRangeFillLower({
        selectors: ['audio-boost','.progress-bar' ,'rate-xp'],
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
// default display
$(window).on("load", function() {
    document.querySelector(".swiper-container").style.backgroundImage = "url(" + defaultPic.image + ")";
    $("#trackId").attr("src", defaultPic.image);
    $('.fab-btn').addClass('active')
    //   alert("Cordova");
});

$("#visual-select").click(function() {
    $(".box").slideDown();
});
$(".box").click(function() {
    $(this).slideUp();
});

// Default selection
$("#bars-visual").show().css("transform", "translateY(115px)");;
$("#spec-visual").hide();
$("#up-bars-visual").hide();
$("#dw-bars-visual").hide();
$(".spiral").hide();

// .css("transform", "translateY(115px)");

// bars visualizer
$(".body p").eq(0).click(function() {
    $("#bars-visual").show().css("transform", "translateY(115px)");;
    $("#spec-visual").hide();
    $(".double-visual").hide();
    $(".spiral").hide();

});

// Spectrum visualizer
$(".body p").eq(1).click(function() {
    $("#spec-visual").show();
    $("#bars-visual").hide();
    $(".double-visual").hide();
    $(".spiral").hide();

});

// double visulizer
$(".body p").eq(2).click(function() {
    $(".double-visual").show();
    $("#up-bars-visual").show();
    $("#dw-bars-visual").show();
    $("#spec-visual").hide();
    $("#bars-visual").hide();
    $(".spiral").hide();

});
// Spiral visualizer
$(".body p").eq(3).click(function() {
    $(".double-visual").hide();
    $("#up-bars-visual").hide();
    $("#dw-bars-visual").hide();
    $("#spec-visual").hide();
    $("#bars-visual").hide();
    $(".spiral").show();
});

// Show no visualizer
$(".body p").eq(4).click(function() {
    $(".double-visual").hide();
    $("#up-bars-visual").hide();
    $("#dw-bars-visual").hide();
    $("#spec-visual").hide();
    $("#bars-visual").hide();
    $(".spiral").hide();
});


$(".auto button").click(function() {
    $(".load-body").show().addClass("active");
});

// playlist
$('#playlist').click(function(){
    $(".plist").addClass('w3-show')

})

var q = new Equalizer();/**
    Initiating the Equalizer Engine
     */
q.getFile('#demo');
q.getProgressData('#prog');
q.getControlButtons(".btn-tn");
q.timeUpdate(".time");
q.getTempo("#rate-xp", "#sp-rate");
q.getAudioVolume("#vol-add", "#vol");
q.repeatStopTrack(".repeat-on",".repeat-off",'.mute-on','.mute-off');
q.getPlaylist("#tracks");