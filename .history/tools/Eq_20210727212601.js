import { Equalizer } from "../tools/Equalizer.js";

var controls = {
    spaceBetween: 0,
    parallax:true,
    speed:1000,
    effect:"flip",// flip coverflow cube fade
    gradCursor:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
}
new Swiper('.swiper-container',controls );

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
    
    // load one track
    $("#add-music").click(function() {
        $("#demo").click();
    })
    // trigger email app
    $('#feedback').click(function() {
        location = "mailto:brunohectre@gmail.com";
    })

})(jQuery);

// default display
$(window).on("load", function() {
    document.querySelector(".swiper-container").style.backgroundImage = "url(" + defaultPic.image + ")";
    $("#trackId").attr("src", defaultPic.image);
    $('.fab-btn').addClass('active')
    //   alert("Cordova");
});
(function($){
    $(document).ready(function(){

        $("#visual-select").click(function() {
            $(".box").slideDown();
        });
        $(".box").click(function() {
            $(this).hide();
        });
        try {
            // Default selection
        $("#bars-visual").show().css("transform", "translateY(115px)");;
        $("#spec-visual").hide();
        $("#up-bars-visual").hide();
        $("#dw-bars-visual").hide();
        $(".spiral").hide();
        } catch (error) {
            console.log(error)
        }
        
        
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
        
        
    })
})(jQuery)

$(".auto button").click(function() {
    $(".load-body").show().addClass("active");
});

// playlist
$('#playlist').click(function(){
    $(".plist").addClass('w3-show')
})
// lyrics
$('.lyrics-container').hide()
$("#lyrics-btn").click(function(){
    $('.lyrics-container').show(function(){
        $(".lyrics-wrapper").addClass('active')
    });
})
$('.lyrics-container').click(function(){
    $(".lyrics-wrapper").removeClass("active",function(){
        $('.lyrics-container').delay(2000).slideUp()
    });
})
// 
$(".bottom-container").hide();
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