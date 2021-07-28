window.it = 0
window.onload = function () {
    // Elements
    var audio = document.getElementById("audio");
    var video = document.getElementById("video");
    var canvas = document.getElementById("canvas");
    var WIDTH = (canvas.width = window.innerWidth);
    var HEIGHT = (canvas.height = window.innerHeight);

    var ctx = canvas.getContext("2d");

    var mouseX = 0;
    var mouseY = 0;
    window.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Local File //
    var fbtn = document.getElementById("file");
    fbtn.addEventListener("click", function () {
        var file = document.createElement("input");
        file.type = "file";
        file.accept = "audio/*";
        file.click();
        file.onchange = function () {
            var files = this.files;

            audio.src = URL.createObjectURL(files[0]);
            audio.load();
            audio.play();
            audio.style.display = "block";
            visualize(0, audio);
        };
    });

    // Desktop Audio //
    var captureBtn = document.getElementById("capture");
    captureBtn.addEventListener("click", async function () {
        var desktopStream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: true
        });
        video.src = desktopStream;
        video.muted = true;
        audio.style.display = "none";
        visualize(1, desktopStream);
    });

    // Microphone //
    var cbx = document.getElementById("cbx");
    async function mic() {
        var micStream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        audio.style.display = "none";
        visualize(2, micStream);
        cbx.addEventListener("change", async function () {
            var micMode = cbx.checked;
            if (micMode) {
                audio.style.display = "none";
                visualize(2, micStream);
            }
        });
    }

    mic();

    function visualize(from, source) {
        var context = new AudioContext();
        var select = document.querySelector("select#mode");
        if (0 == from) {
            var src = context.createMediaElementSource(source);
        } else if (1 == from) {
            var src = context.createMediaStreamSource(source);
        } else if (2 == from) {
            var src = context.createMediaStreamSource(source);
        }
        console.log(src);
        var analyser = context.createAnalyser();
        var listen = context.createGain();

        src.connect(listen);
        listen.connect(analyser);
        if (from == 0) {
            analyser.connect(context.destination);
        }
        analyser.fftSize = 2 ** 12;
        var frequencyBins = analyser.fftSize / 2;

        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);
        let dataArray = new Uint8Array(bufferLength);
        var dataHistory = [];

        renderFrame();

        function renderFrame() {
            requestAnimationFrame(renderFrame);

            analyser.smoothingTimeConstant = 0.5;

            if (from == 2) {
                if (cbx.checked) {
                    listen.gain.setValueAtTime(1, context.currentTime);
                } else {
                    listen.gain.setValueAtTime(0, context.currentTime);
                }
            } else {
                listen.gain.setValueAtTime(1, context.currentTime);
            }

            var WIDTH = (canvas.width = window.innerWidth);
            var HEIGHT = (canvas.height = window.innerHeight);
            var sliceWidth = WIDTH * 1.0 / bufferLength;

            var x = 0;
            var scale = Math.log(frequencyBins - 1) / WIDTH;

            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);

            ctx.lineWidth = 1;
            ctx.strokeStyle = "#fff";
            ctx.beginPath();
            ctx.moveTo(mouseX, 0);
            ctx.lineTo(mouseX, HEIGHT);
            ctx.stroke();
            ctx.closePath();

            let mouseHz = -10 / Math.log((mouseX / WIDTH)) / (Math.log(441000 / 2 - 1) / WIDTH)

            if (select.value == "bar-graph") {
                analyser.getByteFrequencyData(dataArray);
                for (var i = 0; i < bufferLength; i++) {
                    let x = Math.floor(Math.log(i) / scale);
                    barHeight = dataArray[i];
                    /* var r = barHeight + (25 * (i/bufferLength));
                             var g = 250 * (i/bufferLength);
                             var b = 50; */
                    var h = 300 - barHeight * 300 / 255;
                    var s = 100 + "%";
                    var l = barHeight < 64 ? barHeight * 50 / 64 + "%" : "50%";
                    ctx.fillStyle = "hsl(" + h + "," + s + "," + l + ")";
                    // ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                    ctx.fillRect(
                        x,
                        HEIGHT - barHeight * HEIGHT / 255,
                        Math.floor(Math.log(i + 1) / scale) - Math.floor(Math.log(i) / scale),
                        HEIGHT
                    );
                }
            } else if (select.value == "waveform") {
                analyser.getByteFrequencyData(dataArray);
                let start = 0 //dataArray.find(a=> Math.max.apply('',dataArray));
                analyser.getByteTimeDomainData(dataArray);
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#fff";
                ctx.beginPath();
                x = 0;
                for (var i = start; i < bufferLength; i++) {
                    var v = dataArray[i] / 128.0;
                    var y = v * HEIGHT / 2;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }

                    x = i * sliceWidth //frequencyBins/analyser.sampleRate;
                }
                ctx.lineTo(WIDTH, dataArray[0] / 128.0 * HEIGHT / 2);
                ctx.stroke();
            } else if (select.value == "rgb-bar-graph") {
                //ctx.globalCompositeOperation = "hue";
                analyser.getByteFrequencyData(dataArray);
                var imgData = ctx.createImageData(WIDTH, HEIGHT);
                // for (var i = 0; i < bufferLength; i += 2) {
                //   let x = i / 3 *  WIDTH / bufferLength;
                //   var r = dataArray[i];
                //   var g = dataArray[i + 1];
                //   var b = dataArray[i + 2];
                for (j = 0; j < imgData.data.length; j += 4) {
                    let y = j / 4 / WIDTH;
                    let x = Math.floor(((j / 4) % WIDTH) * bufferLength / WIDTH);
                    imgData.data[j + 0] =
                        255 - dataArray[x] <= y * (255 / HEIGHT) ? dataArray[x] : 0;
                    imgData.data[j + 1] =
                        255 - dataArray[x + 1] <= y * (255 / HEIGHT) ? dataArray[x + 1] : 0;
                    imgData.data[j + 2] =
                        255 - dataArray[x + 2] <= y * (255 / HEIGHT) ? dataArray[x + 2] : 0;
                    imgData.data[j + 3] = 255;
                }
                ctx.putImageData(imgData, 0, 0);
                // ctx.fillStyle = "rgb(" + r + "," + 0 + "," + 0 + ")";
                // ctx.fillRect(x, HEIGHT - (r * HEIGHT / 255), 1, HEIGHT);
                // ctx.fillStyle = "rgb(" + 0 + "," + g + "," + 0 + ")";
                // ctx.fillRect(x, HEIGHT - (g * HEIGHT / 255), 1, HEIGHT);
                // ctx.fillStyle = "rgb(" + 0 + "," + 0 + "," + b + ")";
                // ctx.fillRect(x, HEIGHT - (b * HEIGHT / 255), 1, HEIGHT);
                // }
            } else {
                if (typeof (a)) {
                    analyser.getByteFrequencyData(dataArray);
                    if (window.it % 2 == 0) dataHistory.unshift(new Uint8Array(dataArray));
                    window.it++
                }
                if (dataHistory.length > 32) {
                    dataHistory.pop();
                }
                for (let j = 0; j < dataHistory.length; j++) {
                    for (var i = 0; i < bufferLength; i++) {
                        let x = Math.floor(Math.log(i) / scale);
                        barHeight = dataHistory[j][i];
                        /* var r = barHeight + (25 * (i/bufferLength));
                               var g = 250 * (i/bufferLength);
                               var b = 50; */
                        var h = 300 - barHeight * 300 / 255;
                        var s = 100 + "%";
                        var l = barHeight < 64 ? barHeight * 50 / 64 + "%" : "50%";
                        ctx.fillStyle = "hsl(" + h + "," + s + "," + l + ")";
                        // ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                        ctx.fillRect(
                            x,
                            HEIGHT / dataHistory.length * j,
                            Math.floor(Math.log(i + 1) / scale) -
                            Math.floor(Math.log(i) / scale),
                            HEIGHT * j +
                            1 / dataHistory.length -
                            HEIGHT * j / dataHistory.length
                        );
                    }
                }
            }

            ctx.textBaseline = "bottom";
            ctx.textAlign = "left";
            ctx.font = "16px Courier";
            ctx.fillStyle = "white";
            ctx.fillText(mouseHz + " Hz",
                mouseX,
                mouseY
            );
        }
    }
}