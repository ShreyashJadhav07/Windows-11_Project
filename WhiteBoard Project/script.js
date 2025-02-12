const canvas=document.querySelector("#canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let tool=canvas.getContext("2d");


let toolBar=document.querySelector("#toolBar");





let isdrawing=false;
let currentLineWidth = 1;
let currentcolor="#000000";
let undoStack=[];
let redoStack=[];

const drawWithPencil= (e) =>{




canvas.addEventListener("mousedown",function(e){
    console.log("mouse down",e);
    

  
    let sidex=e.clientX;
    let sidey=e.clientY;
   
    tool.beginPath();
    tool.lineWidth=currentLineWidth;
    tool.strokeStyle=currentcolor;
    let toolBarheight=getYDelta();
    tool.moveTo(sidex,sidey - toolBarheight);
    isdrawing=true;
    let ponitDesc={
        x:sidex,
        y:sidey-toolBarheight,
        desc:"md",
        color:tool.strokeStyle,
        lineWidth:tool.lineWidth

    }
    undoStack.push(ponitDesc);
    

});

canvas.addEventListener("mousemove",function(e){
    if(isdrawing==false)
        return;
   
    let eidx=e.clientX;
    let eidy=e.clientY;
    let toolBarheight=getYDelta();
    tool.lineTo(eidx,eidy-toolBarheight);
    tool.stroke();
    let ponitDesc ={
        desc:"mm",
        x:eidx,
        y:eidy-toolBarheight
    }
    undoStack.push(ponitDesc);

})

canvas.addEventListener("mouseup",function(e){
    isdrawing=false

})

}

function getYDelta(){
    let heightofToolBar=toolBar.getBoundingClientRect().height;
    return heightofToolBar
}

const pencil=document.querySelector("#pencil");
pencil.addEventListener("click",drawWithPencil);


// **********************************//

const toSelectSize= (e) => {
    let size=parseInt(e.target.value,10);
    currentLineWidth=size;

}

const toselectColor=(e) => {
    currentcolor=e.target.dataset.color;
}

// *******************************//
const selectSize=document.querySelector("#input");
selectSize.addEventListener("input",toSelectSize);


const button=document.querySelectorAll("#color-btn");

button.forEach((button)=>{
    button.addEventListener("click",toselectColor);
})


// eraser


let currentLineWidtheraser=1;
const eraseDrawing= (e) =>{
  

    


    canvas.addEventListener("mousedown",function(e){
        
        console.log("mouse down",e);


        
    
      
        let sidex=e.clientX;
        let sidey=e.clientY;
       
        tool.beginPath();
        tool.lineWidth=currentLineWidtheraser;
        tool.strokeStyle = "#ffffff";
        let toolBarheight=getYDelta();
        tool.moveTo(sidex,sidey - toolBarheight);
        isdrawing=true;
        
    
    });
    
    canvas.addEventListener("mousemove",function(e){
        if(isdrawing==false)
            return;
       
        let eidx=e.clientX;
        let eidy=e.clientY;
        let toolBarheight=getYDelta();
        tool.lineTo(eidx,eidy-toolBarheight);
        tool.stroke();
    
    })
    
    canvas.addEventListener("mouseup",function(e){
        isdrawing=false
    
    })

}

const toselecteraserSize =(e) =>{
    let sizeer=parseInt(e.target.value,10);
    currentLineWidtheraser=sizeer;

}

const eraser=document.querySelector("#eraser");
eraser.addEventListener("click",eraseDrawing);

const inputeraser=document.querySelector("#inputeraser");
inputeraser.addEventListener("input",toselecteraserSize);


// ****Download*************//

const downloadFile=() =>{
    console.log("Download was clicked");
    let a=document.createElement("a");
    a.download="File.jpeg";
    let url=canvas.toDataURL("image/jpeg;base64");
    a.href=url;
    a.click();

    a.remove();
}


const  download=document.querySelector("#download");
download.addEventListener("click",downloadFile);





function createOuterShell(content){
    let stickyDiv=document.createElement("div");
    let navDiv=document.createElement("div");
    let closeDiv=document.createElement("div");
    let minimizeDiv=document.createElement("div");
    let closebtn=document.createElement("button");
    let minbtn=document.createElement("button")

    stickyDiv.setAttribute("class","sticky");
    navDiv.setAttribute("class","nav");
    closebtn.setAttribute("class","color-btnn");
    minbtn.setAttribute("class","color-btnn");
    
    closebtn.style.backgroundColor = "red";
    minbtn.style.backgroundColor = "green";

    stickyDiv.appendChild(navDiv);
    navDiv.appendChild(closeDiv);
    navDiv.appendChild(minimizeDiv);
    closeDiv.appendChild(closebtn);
    minimizeDiv.appendChild(minbtn);
    document.body.appendChild(stickyDiv);

    let isminimized=false;
    closebtn.addEventListener("click",function(){
        stickyDiv.remove();
    })

    minbtn.addEventListener("click",function(){
        content.style.display = isminimized==true ? "block" : "none";
        isminimized = !isminimized


    })

    let ismoving=false;
    let initialX, initialY;


    navDiv.addEventListener("mousedown",function(e){
        
    
         initialX=e.clientX;
         initialY=e.clientY;
         ismoving=true;
        
    
    })
    
    navDiv.addEventListener("mousemove",function(e){
        if(ismoving==false)
            return;
            
       
        let finalX=e.clientX;
        let finalY=e.clientY;

        let dx=finalX-initialX;
        let dy=finalY-initialY;
        let { top, left } = stickyDiv.getBoundingClientRect()
             stickyDiv.style.top = top + dy + "px";
            stickyDiv.style.left = left + dx + "px";
           initialX=finalX;
           initialY=finalY;
         
        
        

    
    });
    
    navDiv.addEventListener("mouseup",function(){
        ismoving=false;
    })
  return stickyDiv;
    
};

function makeSticky (){
    let textArea=document.createElement("textarea");
    textArea.setAttribute("class","textarea");
   
    let stickyDiv=createOuterShell(textArea);

    stickyDiv.appendChild(textArea);

    
    
}

const  sticky=document.querySelector("#sticky");
sticky.addEventListener("click",makeSticky);

// let inputTag=document.querySelector("#input");
let inputTag=document.querySelector(".input-tag")
function uploadImage(){
    
    inputTag.click()
    inputTag.addEventListener("change",function() {
        let data=inputTag.files[0];
        let img=document.createElement("img");
        let url=URL.createObjectURL(data);
        img.src=url;
        img.setAttribute("class","upload-img");

        let stickyDiv=createOuterShell(img);
        stickyDiv.appendChild(img);

        

    })
    
}
const upload=document.querySelector("#upload");
upload.addEventListener("click",uploadImage);



// cancel all
function handleCancelAll(){
    tool.clearRect(0,0,canvas.width,canvas.height);
    undoStack.length=0;
    redoStack.length=0;

    inputeraser.value=0;
    selectSize.value=0;
    currentLineWidth=1
    currentLineWidtheraser=1;


    
}

const cancelALL=document.querySelector("#cancelAll");
cancelALL.addEventListener("click",handleCancelAll);



// undo and redo

function handleUndoFunction(){
    if(undoStack.length > 0){
        tool.clearRect(0,0,canvas.width,canvas.height);
        redoStack.push(undoStack.pop());
        for(let i=0;i<undoStack.length;i++){
            let {x,y,desc,color,lineWidth}=undoStack[i];
            if(desc == "md"){
                tool.beginPath();
                tool.strokeStyle=color;
                tool.lineWidth=lineWidth
                tool.moveTo(x,y);
            }
            else if (desc=="mm"){
                tool.lineTo(x,y);
                tool.stroke();

            }
        }
          
    }
}


function handleRedoFunction(){
    if(redoStack.length>0){
        tool.clearRect(0,0,canvas.width,canvas.height);
        undoStack.push(redoStack.pop());
        for(let i=0;i<undoStack.length;i++){
            let {x,y,desc,color,lineWidth}=undoStack[i];
            if(desc == "md"){
                tool.beginPath();
                tool.strokeStyle=color;
                tool.lineWidth=lineWidth
                tool.moveTo(x,y);
            }
            else if (desc=="mm"){
                tool.lineTo(x,y);
                tool.stroke();

            }
        }

      
        
    }
}

const undo=document.querySelector("#undo");
undo.addEventListener("click",handleUndoFunction);

const redo=document.querySelector("#redo");
redo.addEventListener("click",handleRedoFunction)





document.addEventListener("DOMContentLoaded", function () {
    const colorButtons = document.querySelectorAll(".color-btn");

    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
       
            colorButtons.forEach(btn => btn.classList.remove("selected"));

  
            this.classList.add("selected");
        });
    });
});


// 
document.addEventListener("DOMContentLoaded", function () {
    const tools = document.querySelectorAll(".tool");

    tools.forEach(tool => {
        tool.addEventListener("click", function () {
         
            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
            } else {
        
                tools.forEach(t => t.classList.remove("selected"));

                this.classList.add("selected");
            }
        });
    });
});


























