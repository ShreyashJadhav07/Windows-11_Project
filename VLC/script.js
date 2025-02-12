const videoBtn=document.querySelector("#videoBtn");
const videoInput=document.querySelector("#videoInput");
const videoPlayer=document.querySelector("#main");
const currentTimeElem=document.querySelector("#current-time");
const totalTimeElem=document.querySelector("#total-time");
const slider=document.querySelector("#slider");

let video =""
let duration;
let timerObj;
let currentPlayTime=0;
let isplaying=false;
const handleInput = () => { 
    console.log("Input is clicked");
    videoInput.click();
}

const acceptInputHandler = (obj) => {
    let selectedVideo;

    if(obj.type == "drop"){
        selectedVideo =obj.dataTransfer.files[0];
    }
    else {
        selectedVideo=obj.target.files[0];
    }

    const link=URL.createObjectURL(selectedVideo);
    const videoElement=document.createElement("video");
    videoElement.src=link;
    videoElement.setAttribute("class","video");
     
     if (videoPlayer.children.length > 0) {

        
        videoPlayer.removeChild(videoPlayer.children[0]);
    }

    videoPlayer.appendChild(videoElement);
    video=videoElement;
    isplaying=true;
    setPlayPause();
    videoElement.play();
    videoElement.volume=0.3;
    playPauseContainer.innerHTML=`<i class="fa-solid fa-pause"></i>`;
    
    videoElement.addEventListener("loadedmetadata",function(){
        duration=Math.round(videoElement.duration);

        let time= timeFormat(duration);
        totalTimeElem.innerText=time;
        slider.setAttribute("max",duration);
        startTimer();


    })
    
}
videoBtn.addEventListener("click",handleInput);
videoInput.addEventListener("change",acceptInputHandler);


// volume and speed

const speedUp=document.querySelector("#SpeedUp");
const speedDown=document.querySelector("#SpeedDown");
const volumeUp=document.querySelector("#VolumeUp");
const volumeDown=document.querySelector("#VolumeDown");
const toast=document.querySelector(".toast");


const speedUpHandler = () => {
    const videoElement=document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.playbackRate > 3){
        return
    }

    const increaseSpeed=videoElement.playbackRate+0.5;
    videoElement.playbackRate=increaseSpeed;

    showToast(increaseSpeed + "x");
    

    
}

const speedDownHandler= () => {
    const videoElement=document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.playbackRate > 0){
        const decreasespeed=videoElement.playbackRate-0.5;
        videoElement.playbackRate=decreasespeed;
        showToast(decreasespeed + "x");
     }

}


const volumeUpHandler = () => {
    const videoElement=document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.volume >= 0.99){
        return;
    }
   

    const increaseVolume = Math.min(videoElement.volume + 0.1, 1); 
    videoElement.volume = increaseVolume;

    const percentage = Math.round(increaseVolume * 100) + "%"; 
    showToast(percentage);

}


const volumeDownHandler = () => {
    const videoElement=document.querySelector("video");
    if(videoElement == null){
        return;
    }
    if(videoElement.volume <= 0.1){
        videoElement.volume=0;
        showToast("0%");
        return;
        
    }
    const decreaseVolume = Math.max(videoElement.volume - 0.1, 0); 
    videoElement.volume = decreaseVolume;

    const percentage = Math.round(decreaseVolume * 100) + "%"; 
    showToast(percentage);

   
}


function showToast(message){
    toast.textContent=message;
    toast.style.display="block";

    setTimeout(() =>{
        toast.style.display="none";
    },2000);
}



speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);





slider.addEventListener("change",function(e){
    let value=e.target.value;
    video.currentTime=value;
})



const fullScreenElem=document.querySelector("#fullScreen");
const forwardBtn=document.querySelector("#forwardBtn");
const backWardBtn=document.querySelector("#backbtn");
const playPauseContainer=document.querySelector("#playpause");
const stopBtn=document.querySelector("#stopBtn");


const handleFullScreen = () =>{
    videoPlayer.requestFullscreen();

}

const forward = () => {
    currentPlayTime=Math.round(video.currentTime) + 5;
    video.currentTime=currentPlayTime;
    slider.setAttribute("value",currentPlayTime);
    showToast("Forward by 5 sec");
    let time= timeFormat(currentPlayTime);
    currentPlayTime.innerText=time;

}

const backward = () => {
    currentPlayTime=Math.round(video.currentTime) - 5;
    video.currentTime=currentPlayTime;
    slider.setAttribute("value",currentPlayTime);
    showToast("Backward by 5 sec");
    let time= timeFormat(currentPlayTime);
    currentPlayTime.innerText=time;

}


function setPlayPause () {
    if(isplaying === true){
        playPauseContainer.innerHTML=`<i class="fa-solid fa-pause"></i>`;
        // video.play();
        if (video) video.play(); 


    }
    else{
        playPauseContainer.innerHTML = `<i class="fa-solid fa-play"></i>`;
        // video.pause();
        if (video) video.pause(); 

    }
}

playPauseContainer.addEventListener("click",function(e){
    if(video) {
        isplaying = !isplaying;
        setPlayPause();
    }
})

const stopHandler = () => {
    if(video){
        video.pause();
        video.remove();
        isplaying=false;
        currentPlayTime=0;
        slider.value=0;
        video="";
        duration="";
        totalTimeElem.innerText= '--/--';
        currentTimeElem.innerText = '00:00';
        slider.setAttribute("value", 0);
        stopTimer();
        setPlayPause();

    }
}
fullScreenElem.addEventListener("click",handleFullScreen);
forwardBtn.addEventListener("click",forward);
backWardBtn.addEventListener("click",backward);
stopBtn.addEventListener("click",stopHandler);







function timeFormat(timeCount){
    let time='';
    const sec=parseInt(timeCount,10);
    let hours=Math.floor(sec/3600);
    let minutes=Math.floor((sec-(hours*3600))/60);
    let seconds=sec-(hours * 3600) -(minutes * 60);
    if (hours < 10)
        hours = "0" + hours;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds
    time = `${hours}:${minutes}:${seconds}`;
    return time;
    
}


function startTimer() {
    timerObj = setInterval(function () {
        currentPlayTime = Math.round(video.currentTime);
        slider.value = currentPlayTime;
        const time = timeFormat(currentPlayTime);
        currentTimeElem.innerText = time;
        if (currentPlayTime == duration) {
            state = "pause";
            stopTimer();
            setPlayPause();
            video.remove();
            slider.value = 0;
            currentTimeElem.innerText = "00:00:00";
            totalTimeElem.innerText = '--/--/--';
        }
    }, 1000);
}
function stopTimer() {
    clearInterval(timerObj);
}




videoPlayer.addEventListener('dragenter',(e) => {
    e.preventDefault();
})
videoPlayer.addEventListener('dragover', (e) => {
    e.preventDefault();
})
videoPlayer.addEventListener('dragleave', (e) => {
    e.preventDefault();
})

videoPlayer.addEventListener('drop', (e) => {
    e.preventDefault();
    acceptInputHandler(e);
})




const body = document.querySelector("body");

body.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (!video) return;
    if (e.code == "Space") {
        isplaying = !isplaying
        setPlayPause();
    }
    else if (e.key == "ArrowUp" ) {
        volumeUpHandler()
    }
    else if (e.key == "ArrowDown") {
        volumeDownHandler();
    }
    else if (e.key == "+") {
        speedUpHandler();
    }
    else if (e.key == "-") {
        speedDownhandler();
    }
    else if (e.key == "ArrowRight") {
        forward();
    }
    else if (e.key == "ArrowLeft") {
        backward();
    }
})










