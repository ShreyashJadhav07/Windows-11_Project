function handlepopUp (){
    document.getElementById("popup").classList.toggle('active');
    document.getElementById("popupSecond").classList.remove('active');



}
const imageFirst=document.getElementById("image1");
imageFirst.addEventListener("click",handlepopUp);

function handlepopUpSecond(){
    console.log("image is selcted");
    document.getElementById("popupSecond").classList.toggle('active');
    document.getElementById("popup").classList.remove('active');

}

const secondImage=document.getElementById("image2");
secondImage.addEventListener("click",handlepopUpSecond);

// 



document.getElementById("image3").addEventListener("click", function () {
    const vlcFrame = document.getElementById("vlc-frame");

    
    if (vlcFrame.classList.contains("hidden")) {
        vlcFrame.classList.remove("hidden");  
        setTimeout(() => {
            vlcFrame.classList.add("visible");  
        }, 90);  
    } else {
        vlcFrame.classList.remove("visible"); 
        setTimeout(() => {
            vlcFrame.classList.add("hidden");  
        }, 90);  
    }
});


// weather
document.getElementById("image8").addEventListener("click",function(){
    console.log("Weather is clicked")
    const weatherFrame=document.getElementById("weather-frame");
    if(weatherFrame.classList.contains("hidden")){
        weatherFrame.classList.remove("hidden");
        setTimeout(() =>{
            weatherFrame.classList.add("visible");
        },90);

    } else{
        weatherFrame.classList.remove("visible");
        setTimeout(() => {
            weatherFrame.classList.add("hidden");
        },90);
    }

});


// notes

document.getElementById("image9").addEventListener("click",function(){
    console.log("notes is clicked")
    const noteFrame=document.getElementById("note-frame");
    if(noteFrame.classList.contains("hidden")){
        noteFrame.classList.remove("hidden");
        setTimeout(() =>{
            noteFrame.classList.add("visible");
        },90);

    } else{
        noteFrame.classList.remove("visible");
        setTimeout(() => {
            noteFrame.classList.add("hidden");
        },90);
    }

});

// google-frame
document.getElementById("image5").addEventListener("click",function(){
    console.log("chrome is clicked")
    const googleFrame=document.getElementById("google-frame");
    if(googleFrame.classList.contains("hidden")){
        googleFrame.classList.remove("hidden");
        setTimeout(() =>{
            googleFrame.classList.add("visible");
        },90);

    } else{
        googleFrame.classList.remove("visible");
        setTimeout(() => {
            googleFrame.classList.add("hidden");
        },90);
    }

});

const whiteBoard=document.querySelector("#image6");
const link=document.querySelector("#whiteboardLink");

whiteBoard.addEventListener("click", () =>{
    link.click();


});





// file
const input=document.querySelector("#input");
function takeFile (){
    input.click();
    input.addEventListener("change",function(){
       

    })
}
const file=document.querySelector("#image7")
file.addEventListener("click",takeFile);





