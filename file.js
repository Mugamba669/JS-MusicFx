class Visualizer {
    constructor(audio, canvas) {
        this.audio = audio;
        console.log(this.audio);
        this.canvas = canvas;
        this.audioCtx = new AudioContext();
        this.bass = this.audioCtx.createBiquadFilter();
        this.treble = this.audioCtx.createBiquadFilter();
        this.source = this.audioCtx.createMediaElementSource(this.audio);
        this.analyser = this.audioCtx.createAnalyser();
        this.visualise = () => {
            this.bass.type = 'lowpass';
            this.bass.frequency.value = 80;
            this.source.connect(this.bass);
            this.bass.connect(this.analyser);
            this.analyser.connect(this.audioCtx.destination);

            this.treble.type = 'bandpass';
            this.treble.frequency.value = 2000;
            // connections
            this.source.connect(this.treble);
            this.treble.connect(this.analyser);
            this.analyser.connect(this.audioCtx.destination);

            this.analyser.fftSize = 256;
            this.analyser.maxDecibels = 0;
            this.analyser.minDecibels = -90;
            this.renderCanvas();
        }
        this.renderCanvas = () => {
            window.requestAnimationFrame(this.renderCanvas);
            var freqDomain = new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(freqDomain);

            var visuals = document.querySelectorAll(`${this.canvas}`);
            var context;
            console.log(visuals);
            visuals.forEach(elem => {
                console.log(elem);
                context = elem.getContext("2d");
                context.clearRect(0, 0, elem.width, elem.height);

                context.fillStyle = "gold";
                for (let index = 0; index < elem.width; index++) {
                    var barX = index * 2;
                    var barWidth = 1.5;
                    var element = freqDomain[index] / 200;
                    var offset = elem.height * element;
                    var height = elem.height - offset - 1;
                    context.fillRect(barX, height, barWidth, offset);

                }
            });
        }
    }
    getDisplay() {
        this.audio.addEventListener("playing", this.visualise, false);
    }
}

export { Visualizer };