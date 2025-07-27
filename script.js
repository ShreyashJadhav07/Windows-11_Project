// function handlepopUp (){
//     document.getElementById("popup").classList.toggle('active');
//     document.getElementById("popupSecond").classList.remove('active');



// }
// const imageFirst=document.getElementById("image1");
// imageFirst.addEventListener("click",handlepopUp);

// function handlepopUpSecond(){
//     console.log("image is selcted");
//     document.getElementById("popupSecond").classList.toggle('active');
//     document.getElementById("popup").classList.remove('active');

// }

// const secondImage=document.getElementById("image2");
// secondImage.addEventListener("click",handlepopUpSecond);

// // 



// document.getElementById("image3").addEventListener("click", function () {
//     const vlcFrame = document.getElementById("vlc-frame");

    
//     if (vlcFrame.classList.contains("hidden")) {
//         vlcFrame.classList.remove("hidden");  
//         setTimeout(() => {
//             vlcFrame.classList.add("visible");  
//         }, 90);  
//     } else {
//         vlcFrame.classList.remove("visible"); 
//         setTimeout(() => {
//             vlcFrame.classList.add("hidden");  
//         }, 90);  
//     }
// });


// // weather
// document.getElementById("image8").addEventListener("click",function(){
//     console.log("Weather is clicked")
//     const weatherFrame=document.getElementById("weather-frame");
//     if(weatherFrame.classList.contains("hidden")){
//         weatherFrame.classList.remove("hidden");
//         setTimeout(() =>{
//             weatherFrame.classList.add("visible");
//         },90);

//     } else{
//         weatherFrame.classList.remove("visible");
//         setTimeout(() => {
//             weatherFrame.classList.add("hidden");
//         },90);
//     }

// });


// // notes

// document.getElementById("image9").addEventListener("click",function(){
//     console.log("notes is clicked")
//     const noteFrame=document.getElementById("note-frame");
//     if(noteFrame.classList.contains("hidden")){
//         noteFrame.classList.remove("hidden");
//         setTimeout(() =>{
//             noteFrame.classList.add("visible");
//         },90);

//     } else{
//         noteFrame.classList.remove("visible");
//         setTimeout(() => {
//             noteFrame.classList.add("hidden");
//         },90);
//     }

// });

// // google-frame
// document.getElementById("image5").addEventListener("click",function(){
//     console.log("chrome is clicked")
//     const googleFrame=document.getElementById("google-frame");
//     if(googleFrame.classList.contains("hidden")){
//         googleFrame.classList.remove("hidden");
//         setTimeout(() =>{
//             googleFrame.classList.add("visible");
//         },90);

//     } else{
//         googleFrame.classList.remove("visible");
//         setTimeout(() => {
//             googleFrame.classList.add("hidden");
//         },90);
//     }

// });

// const whiteBoard=document.querySelector("#image6");
// const link=document.querySelector("#whiteboardLink");

// whiteBoard.addEventListener("click", () =>{
//     link.click();


// });



// // jio-frame toggle
// document.getElementById("image10").addEventListener("click", function () {
//     console.log("JioCinema icon clicked");
//     const jioFrame = document.getElementById("jio-frame");

//     if (jioFrame.classList.contains("hidden")) {
//         jioFrame.classList.remove("hidden");
//         setTimeout(() => {
//             jioFrame.classList.add("visible");
//         }, 90);
//     } else {
//         jioFrame.classList.remove("visible");
//         setTimeout(() => {
//             jioFrame.classList.add("hidden");
//         }, 90);
//     }
// });



// // file
// const input=document.querySelector("#input");
// function takeFile (){
//     input.click();
//     input.addEventListener("change",function(){
       

//     })
// }
// const file=document.querySelector("#image7")
// file.addEventListener("click",takeFile);

// ===== POPUPS =====
// ===== POPUPS =====
function handlepopUp() {
    document.getElementById("popup").classList.toggle('active');
    document.getElementById("popupSecond").classList.remove('active');
}
document.getElementById("image1").addEventListener("click", handlepopUp);

function handlepopUpSecond() {
    console.log("Image 2 is selected");
    document.getElementById("popupSecond").classList.toggle('active');
    document.getElementById("popup").classList.remove('active');
}
document.getElementById("image2").addEventListener("click", handlepopUpSecond);

// ====== Hide All Iframes ======
function hideAllIframes() {
    const allFrames = document.querySelectorAll("iframe");
    allFrames.forEach(frame => {
        frame.classList.remove("visible");
        frame.classList.add("hidden");
    });
}

// ===== VLC Toggle =====
document.getElementById("image3").addEventListener("click", function () {
    const vlcFrame = document.getElementById("vlc-frame");
    const isHidden = vlcFrame.classList.contains("hidden");
    hideAllIframes();
    if (isHidden) {
        vlcFrame.classList.remove("hidden");
        vlcFrame.classList.add("visible");
    }
});

// ===== Weather Toggle =====
document.getElementById("image8").addEventListener("click", function () {
    const weatherFrame = document.getElementById("weather-frame");
    const isHidden = weatherFrame.classList.contains("hidden");
    hideAllIframes();
    if (isHidden) {
        weatherFrame.classList.remove("hidden");
        weatherFrame.classList.add("visible");
    }
});

// ===== Notes Toggle =====
document.getElementById("image9").addEventListener("click", function () {
    const noteFrame = document.getElementById("note-frame");
    const isHidden = noteFrame.classList.contains("hidden");
    hideAllIframes();
    if (isHidden) {
        noteFrame.classList.remove("hidden");
        noteFrame.classList.add("visible");
    }
});

// ===== Google Clone Toggle =====
document.getElementById("image5").addEventListener("click", function () {
    const googleFrame = document.getElementById("google-frame");
    const isHidden = googleFrame.classList.contains("hidden");
    hideAllIframes();
    if (isHidden) {
        googleFrame.classList.remove("hidden");
        googleFrame.classList.add("visible");
    }
});

// ===== JioCinema Toggle =====
// document.getElementById("image10").addEventListener("click", function () {
//     const jioFrame = document.getElementById("jio-frame");
//     const isHidden = jioFrame.classList.contains("hidden");
//     hideAllIframes();
//     if (isHidden) {
//         jioFrame.classList.remove("hidden");
//         jioFrame.classList.add("visible");
//     }
// });

// ===== JioCinema: Open in Same Tab =====
document.getElementById("image10").addEventListener("click", function () {
    window.location.href = "https://jio-frontend-drab.vercel.app/";
});


// ===== WhiteBoard App: Open in New Tab =====
const whiteBoard = document.querySelector("#image6");
const link = document.querySelector("#whiteboardLink");
whiteBoard.addEventListener("click", () => {
    link.click();
});

// ===== File Upload =====
const input = document.querySelector("#input");
function takeFile() {
    input.click();
}
document.querySelector("#image7").addEventListener("click", takeFile);




