class Eq {
	 constructor(){
		this.audio = new Audio();
		this._ =	function(selector){
		 	return document.querySelector(selector);
		 }
		this.q = function(select){
			return document.querySelectorAll(select);
		}
		this.upload = function(e){
			var file = e.currentTarget.files[0];
			this._("#title").textContent = this.fileInfo.size(file);
			this.audio.src = URL.createObjectURL(file);
			this.audio.play();
			}.bind(this);
		this.tune = ()=>{
	//Rendering the Canvas Api	
	 renderCanvas(this.audio);
}
	
	 this.fileInfo = {
	 		name:function(file){
	 			return file.name;
	 		},
	 		size:function(file){
	 			var result = (file.size/(1000*1000)).toFixed(2)+"MB";
	 			return result;
	 		},
	 		type:function(file){
	 			return file.type;
	 		}
	 };
}
//Equalizer methods
		 getFile(selector){
			alert(this.reader);
			this._(selector).addEventListener('change',this.upload,false);
	this.audio.addEventListener('playing',this.tune,false);
		}
	 getProgressData(ql){
			setInterval(()=>{
			this._(ql).value = this.audio.currentTime;
			this._(ql).max = this.audio.duration;
		},500);
	//value of progress bar
		this._(ql).addEventListener('change',function(){
			  this.audio.currentTime = this._(ql).value;
		}.bind(this),false);
		
	}
	getControlButtons(btn){
		var btns = this.q(btn);
		btns.forEach((item,index)=>{
		item.addEventListener('click',function(){
		index == 0 ? this.audio.pause() : this.audio.play();
		}.bind(this),false);
				});
		}
	getTempo(q,t){
		var slider = this._(q);
		var out = this._(t);
	slider.addEventListener('input',function(){
		out.textContent = parseFloat(slider.value).toFixed(2)+ ' xp';
			this.audio.playbackRate = slider.value;
		}.bind(this),false);
		
	}
		
	getAudioVolume(volu,ou){
		var volume = this._(volu);
		var out = this._(ou);
	volume.addEventListener('input',function(){
			out.textContent = Math.floor(parseFloat(volume.value).toFixed(2) * 100) +' %';
			this.audio.volume = volume.value;
		}.bind(this),false);
	}
	
	timeUpdate(tm){
		var tmp = this.q(tm);
		tmp.forEach((item,index)=>{
			switch(parseInt(index)){
			case 0:
		this.audio.addEventListener('timeupdate',function(){
			try{	
		var sec = parseInt(this.audio.currentTime % 60);
		var min = parseInt((this.audio.currentTime / 60) % 60);
			sec < 10 ? item.textContent = min +':'+'0'+ sec : item.textContent = min +':'+ sec;
			} catch(err){ alert(err); }
		}.bind(this),false);
		break;
//    Track Duration
			case 1:
			this.audio.addEventListener('timeupdate',function(){
			try{	
				var s = parseInt(this.audio.duration % 60);
				var m = parseInt((this.audio.duration / 60) % 60);
				s < 10 ? item.textContent = m +':'+'0'+ s :item.textContent = m +':'+ s;
				} catch(err){ alert(err); }
			}.bind(this),false);
			break;
			}
		});
	}
}
var analyser,roomDefault,tuneDefault,eqDefault,monoChannel,stereoChannel;
//------------------Reset room button
		 _('.room').onclick  = function(e){
			 $(".r-content").toggleClass("pop");
         	$(".r-container").toggleClass("pop");
		$("#r-done").click( _=> resetEffects()); 
			}
//------------------Reset tuning button
			
	_('.tuning').onclick  = function(e){
			 $(".t-content").toggleClass("pop");
         $(".t-container").toggleClass("pop");
			$("#t-done").click( _=> resetTune()); 
			}
		
//------------------Reset equalizer button
	_('.eq-reset').addEventListener('click',(e)=>{ 
	$(".pop-content").toggleClass("pop");
	       $(".pop-container").toggleClass("pop");
		$("#done").click(_=> resetEq());
	});

function resetTune(){
	$(".out-container").addClass("go");
		$(".out-content").addClass("go");
	var id;
	id ? clearInterval(id):console.log('again');
	id = setInterval(()=>{
	$(".out-container").removeClass("go");
	$(".out-content").removeClass("go");
	},3000);
	$(".t-content").removeClass("pop");
  $(".t-container").removeClass("pop");
  tuneDefault();
  _("#rate-xp").value = 1;
  _("#sp-rate").textContent = 1+" xp";
}

function resetEq(){
	$(".out-container").addClass("go");
		$(".out-content").addClass("go");
var id;
	id ? clearInterval(id):console.log('again');
	id = setInterval(()=>{
	$(".out-container").removeClass("go");
	$(".out-content").removeClass("go");
	},3000);
	$(".pop-content").removeClass("pop");
  $(".pop-container").removeClass("pop");
  eqDefault();
}

function resetEffects(){
		/*------UI setting----------------*/
	$(".out-container").addClass("go");
	$(".out-content").addClass("go");
	var id;
	id ? clearInterval(id):console.log('again');
	id = setInterval(()=>{
	$(".out-container").removeClass("go");
	$(".out-content").removeClass("go");
	},3000);
	$(".r-content").removeClass("pop");
  $(".r-container").removeClass("pop");
		roomDefault();
		}
		
	//---------------Monochannel setting;
		$('.mon button').eq(1).hide();
		$('.mon button').eq(0).click(function(){
			$(this).hide();
		$('.mon button').eq(1).show();
			//monoChannel();
		});
		
	$('.mon button').eq(1).click(function(){
			$(this).hide();
			$('.mon button').eq(0).show();
			//stereoChannel();
		});
function _(el){return document.querySelector(el); }
function q(el){return document.querySelectorAll(el); }

function renderCanvas(music){
		var audioCtx = new AudioContext();
		var source = audioCtx.createMediaElementSource(music);
		var stereo = audioCtx.createBiquadFilter();
		var treble = audioCtx.createBiquadFilter();
		var bass = audioCtx.createBiquadFilter();
		var echo = audioCtx.createDelay();
		analyser = audioCtx.createAnalyser();
		var feedback = audioCtx.createGain();
		var audioBoost = audioCtx.createGain();
		var delay1 = audioCtx.createDelay();
		var delay2 = audioCtx.createDelay();
		var size1 = audioCtx.createGain();
		var size2 = audioCtx.createGain();
		var bassBoost = audioCtx.createGain();
		var trebleBoost = audioCtx.createGain();
		var balance = audioCtx.createStereoPanner();
		var splitter = audioCtx.createChannelSplitter(2);
		var merger = audioCtx.createChannelMerger(2);
		var mono = audioCtx.createChannelMerger(1);
		var limit = audioCtx.createDynamicsCompressor();
		
		//----------Mono---
		
		monoChannel = function(){
		//source.disconnect(treble);
			source.disconnect(trebleBoost);
			source.connect(mono);
			mono.connect(audioCtx.destination);
		}
		
		stereoChannel = function(){
			source.disconnect(mono);
			
		
	
	
		}
	//.......Audio balance...............
	_('#balance').oninput = function(){
	_('#bal').textContent = parseFloat(this.value).toFixed(1) + ' dB';
	balance.pan.setValueAtTime(this.value,audioCtx.currentTime);
	}
	
	//Audio Gain
	_('#audio-boost').oninput = function(){
	_('#audio-b').textContent = parseFloat(this.value).toFixed(1) + ' dB';
	audioBoost.gain.setValueAtTime(this.value,audioCtx.currentTime);
	}
	//Audio limit
	_('#audio-limit').oninput = function(){
	_('#limit').textContent = parseFloat(this.value).toFixed(1)+ ' dB';
		limit.threshold.setValueAtTime(this.value,audioCtx.currentTime);
		}
		limit.knee.value = 20;
		limit.ratio.value = 6;
		limit.release.value = 0.25;
		limit.attack.value = 0;
//Equalizer nodes
	/*
		Equalizer to default values
	*/
	eqDefault = function(){
		_("#bass").value = 0
		_('#bb1').textContent = 0+" dB";
	treble.type = 'allpass';
	treble.frequency.setValueAtTime(2000,audioCtx.currentTime);
	_("#treble").value = 0;
	_('#tt1').textContent = 0+ ' dB';
	_("#treb-boost").value = 0;
	_('#tb2').textContent = 0+' dB';
	_('#bass-boost').value = 0;
	trebleBoost.gain.setValueAtTime(0,audioCtx.currentTime);
	bassBoost.gain.setValueAtTime(0,audioCtx.currentTime);
	bass.frequency.setValueAtTime(0,audioCtx.currentTime);
	 new WebkitInputRangeFillLower({
			 selectors:["bass-boost","treb-boost","treble","bass"],
			 color:'#63cdff'
			 });
	}
/*Treble node */
	_("#eqns").oninput = function(){
	treble.type = this.value;
	}
	_("#treble").oninput = function(){
		_('#tt1').textContent = Math.floor(parseFloat(this.value).toFixed(1))+ ' dB';
	treble.frequency.setValueAtTime(this.value,audioCtx.currentTime);
	}
	
//  	Stereo XT
	stereo.type = 'highpass';
	stereo.frequency.value = 2500;
//Connections	
	source.connect(trebleBoost);
	trebleBoost.connect(stereo);
	stereo.connect(analyser);
	analyser.connect(audioCtx.destination);
	
	_("#treb-boost").oninput = function(){
		_('#tb2').textContent = parseFloat(this.value).toFixed(3)+ ' dB';
		trebleBoost.gain.setValueAtTime(this.value,audioCtx.currentTime);
	}
	
	/*
	Bass node 
	*/
	bass.type = 'lowpass';
	_("#bass").oninput = function(){
		_('#bb1').textContent = Math.floor(parseFloat(this.value).toFixed(1))+ ' dB';
	bass.frequency.setValueAtTime(this.value,audioCtx.currentTime);
	}
	//-----------Bassbooster
	_('#bass-boost').oninput = function(){
	_('#bb2').textContent = parseFloat(this.value).toFixed(2)+ ' dB';
	bassBoost.gain.setValueAtTime(this.value,audioCtx.currentTime);
	var val = parseInt(this.value);
	nodeSwitch(val,source,bassBoost);
	}
	//disconnect nodes
var nodeSwitch = function(value,a,b){
		switch(value){
			case 0:
			a.disconnect(b);
			b.disconnect(bass);
			a.connect(bass);
			bass.connect(analyser);
			analyser.connect(audioCtx.destination);
			break;
			
			default:
			a.connect(b);
			b.connect(bass);
			bass.connect(analyser);
			analyser.connect(audioCtx.destination);
			break;
		}
	}
	//Connections
		source.connect(treble);
		treble.connect(limit);
		limit.connect(audioBoost);
		audioBoost.connect(balance);
		balance.connect(analyser);
		analyser.connect(audioCtx.destination);
		
		analyser.fftSize = 1024;
		analyser.minDecibels = -65;
		analyser.maxDecibels = 0;
		analyser.smoothingTimeContstant = 0.52;
	
	
	//--------------------Tune Default
	var tx = music;
		tuneDefault = function(){
	_('#audio-boost').value = 1;
	_('#audio-b').textContent = 1+" dB";
	_('#audio-limit').value = 0;
	_('#limit').textContent = 0+" dB";
	_("#vol-add").value = 0.45;
	_("#rate-xp").value = 1;
	_("#sp-rate").textContent = 1;
	_("#vol").textContent = 45+"%";
	tx.volume = 0.45;
	tx.playbackRate = 1;
audioBoost.gain.setValueAtTime(1,audioCtx.currentTime);
limit.threshold.setValueAtTime(0,audioCtx.currentTime);
balance.pan.setValueAtTime(0,audioCtx.currentTime);
 	new WebkitInputRangeFillLower({
		 selectors:["audio-boost","audio-limit","vol-add","rate-xp"],
		 color:'#63cdff'
			 });
		}
	
	/*
	*Room Effects
	*
		*/
	/*   Effects switch on
	*/
		_("#effects-on").onclick = function(){
			source.connect(splitter);
			merger.connect(audioCtx.destination);
		}
		// switch off
		_("#effects-off").onclick = function(){
			source.disconnect(splitter);
			merger.disconnect(audioCtx.destination);
		}
	/*____________________________________*/
		var Room = '';
	
		_("#r-effects").oninput = function(){
			 Room = this.value;
		chooseEffect(Room);
		}
	
	function chooseEffect(effect){
		switch(effect){
			case 'echo':
		d1 = 0.11;	s1 =0.36; d2 = 0.10;	s2 = 0.50;
		nodeCons();
	 updateREffects(d1,d2,s1,s2);
			break;
			
			case 'auditorium':
			d1 = 0.05;	s1 =0.46;	d2 = 0;	s2 = 0.50;
		nodeCons();
	 updateREffects(d1,d2,s1,s2);
			break;
			
			case 'scene':
			d1 = 0.04;	s1 =0.29; d2 = 0.07;	s2 = 0.25;
		nodeCons();
	 updateREffects(d1,d2,s1,s2);
			break;
			
			case 'smallroom':
			d1 = 0.03;	s1 =0.16;	d2 = 0.02;	s2 = 0.39;
		nodeCons();
	 updateREffects(d1,d2,s1,s2);
			break;
			
			case 'medium':
			d1 = 0.12; s1 =0.36; d2 = 0.6; s2 = 0.5;
	nodeCons();
	 updateREffects(d1,d2,s1,s2);
			break;
			
			case 'greathall':
			d1 = 0.21; s1 =0.42;	d2 = 0.26; s2 = 0.62;
	nodeCons();
	 updateREffects(d1,d2,s1,s2);
			break;
			
			case 'stadium':
			d1 = 0.26; s1 =0.45; d2 = 0.2; s2 = 0.7;
		nodeCons();
	 updateREffects(d1,d2,s1,s2);
			break;
		}
	}
	var d1,d2,s1,s2;

/*----------Delay 01-----------*/
	_("#d1-v").oninput = function(){
		_("#d1").textContent = this.value+' dB';
		delay1.delayTime.value = this.value;
	}
	
/*----------Delay 02--------------*/
		_("#d2-v").oninput = function(){
		_("#d2").textContent = this.value+' dB';
		delay2.delayTime.value = this.value;
	}
	
/*----------Size 01------------*/
		_("#s1-v").oninput = function(){
		_("#s1").textContent = this.value+' dB';
		size1.gain.value = this.value;
	}
	
/*----------Size 02----------*/
		_("#s2-v").oninput = function(){
		_("#s2").textContent = this.value+' dB';
		size2.gain.value = this.value;
	}
	
	//Room effects connections
function nodeCons(){
	//
		//source.connect(audioCtx.destination);
		splitter.connect(delay1 , 0);
		delay1.connect(size1);
		size1.connect(delay2);
		//right delay
		splitter.connect(delay2, 1);
		delay2.connect(size2);
		size2.connect(delay1);
		//left and right delay connected to the merger
		size1.connect(merger,0,0);
		size2.connect(merger,0,1);
		}
		

	//Reset to default
	 roomDefault = function(){
		_("#d1-v").value = 0;
		_("#d1").textContent = 0+' dB';
		_("#d2-v").value = 0;
		_("#d2").textContent = 0+' dB';
		_("#s1-v").value = 0;
		_("#s1").textContent = 0+' dB';
		_("#s2-v").value = 0;
		_("#s2").textContent = 0+' dB';
		//Echo
		echo.delayTime.value = 0;
		feedback.gain.value = 0;
		//Values
		delay1.delayTime.value = 0;
		delay2.delayTime.value = 0;
		size1.gain.value = 0;
		size2.gain.value = 0;
		
		_("#r-effects").value = 'None';
		/*-------------Styling siders on change*/
		 new WebkitInputRangeFillLower({
			 selectors:["s1-v","s2-v","d1-v","d2-v"],
			 color:'#63cdff'
			 });
		 }
	
//Update RoomEffects sliders
	function updateREffects(a,b,c,d){
		_("#d1-v").value = a;
		_("#d1").textContent = a+' dB';
		_("#d2-v").value = b;
		_("#d2").textContent = b+' dB';
		_("#s1-v").value = c;
		_("#s1").textContent = a+' dB';
		_("#s2-v").value = d;
		_("#s2").textContent = d+' dB';
		//Echo Values
		echo.delayTime.value = a;
		feedback.gain.value = b;
		
		//Other Values
		delay1.delayTime.value = a;
		delay2.delayTime.value = b;
		size1.gain.value = c;
		size2.gain.value = d;
		//-------------Styling siders on change
			 new WebkitInputRangeFillLower({
			 selectors:["s1-v","s2-v","d1-v","d2-v"],
			 color:'#63cdff'
			 });
	}
	/*
		Echo settings
	*/
function echoCons(){
	//disconnect splitter
	source.disconnect(splitter);
	merger.disconnect(audioCtx.destination);
	}

	 renderFrame();
}
/*			Rendering the Canvas    */
function renderFrame(){
	window.requestAnimationFrame(renderFrame);
		var freqDomain = new Uint8Array(analyser.frequencyBinCount);
		analyser.getByteFrequencyData(freqDomain);
		//analyser.getByteTimeDomainData(freqDomain);
		var canvas = _('canvas');
		var context = canvas.getContext("2d");
		context.clearRect(0,0,canvas.width,canvas.height);
		context.fillStyle = 'red';
		for(var i = 0; i < analyser.frequencyBinCount; i++){
		var barWidth = i*3;
		var barX = 2.2;
		var percent = freqDomain[i] / 256;
		var height = canvas.height * percent;
		var barHeight = canvas.height - height - 1;
		context.fillRect(barWidth,barHeight,barX,height);
		//context.fillRect(barWidth,barHeight,1,1);
			}
	}
	console.log(AudioContext);