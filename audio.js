import { Visualizer } from "./file.js";
var audio = new Audio();
var visual = new Visualizer(audio, "canvas");
visual.getDisplay();
// console.log(visual);
document.querySelector("#ld").onchange = function(e) {
    var file = e.currentTarget.files[0];
    audio.src = URL.createObjectURL(file);
    console.log(audio.src);
    audio.play();
    // audio.muted = true;
}