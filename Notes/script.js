{/* <p contenteditable="true" class="input-box">
<img src="./delete.png" >.


</p> */}

const createBtn=document.querySelector(".Btn");
const  notesContainer=document.querySelector(".notes-container");
// let notes =document.querySelectorAll(".input-box");

createBtn.addEventListener("click",()=> {
    let inputBox=document.createElement('p');
    let img1=document.createElement('img');
    let img2=document.createElement('img');
    inputBox.className='input-box';
    inputBox.setAttribute("contenteditable",'true');
    img1.className='img1';
    img2.className='img2';
    img1.src="./delete.png";
    img2.src="./download (1).png";
    inputBox.appendChild(img1);
    inputBox.appendChild(img2);
    notesContainer.appendChild(inputBox);


})

// notesContainer.addEventListener("click",function(e){
//     if(e.target.tagName === "IMG"){
//       let parentNote=  e.target.parentElement;
//       if(e.target.classList.contains("img1")){
//         parentNote.remove();
//       }
//       else if(e.target.classList.contains("img2")){
//         let texContent=parentNote.innerText;
//         let a=document.createElement('a');
//         a.download="note.txt";
//         // let url='data:text/plain;charset=utf-8,' + encodeURIComponent(texContent);
//  

//         a.href=url;
//         a.click();
//         a.remove();
//       }
//     }
// })
// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;
      
//       if (e.target.classList.contains("img1")) {
//           // Delete note
//           parentNote.remove();
//       } 
      
//       else if (e.target.classList.contains("img2")) {
//           // Extract only the text content
//           let textContent = parentNote.cloneNode(true); // Clone to avoid modifying original
//           textContent.querySelectorAll("img").forEach(img => img.remove()); // Remove images
//           let noteText = textContent.innerText.trim(); // Get clean text

//           if (noteText.length > 0) { // Prevent empty downloads
//               let a = document.createElement('a');
//               a.download = "note.txt";
//               let url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(noteText.replace(/\n/g, "\r\n"));
//               a.href = url;
//               a.click();
//               a.remove();
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });

// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;

//       if (e.target.classList.contains("img1")) {
//           // Delete note
//           parentNote.remove();
//       } 
//       else if (e.target.classList.contains("img2")) {
//           // Extract only the text content
//           let textContent = parentNote.cloneNode(true); // Clone to avoid modifying the original
//           textContent.querySelectorAll("img").forEach(img => img.remove()); // Remove images
//           let noteText = textContent.textContent.trim(); // Get clean text

//           if (noteText.length > 0) { // Prevent empty downloads
//               let bom = "\uFEFF"; // UTF-8 BOM (fix for Notepad)
//               let blob = new Blob([bom + noteText.replace(/\n/g, "\r\n")], { type: "text/plain;charset=utf-8" });

//               let a = document.createElement('a');
//               a.download = "note.txt";
//               a.href = URL.createObjectURL(blob);
//               a.click();
//               URL.revokeObjectURL(a.href); // Clean up memory
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });


// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;
      
//       if (e.target.classList.contains("img1")) {
//           parentNote.remove(); // Delete the note
//       } 
//       else if (e.target.classList.contains("img2")) {
//           let textContent = parentNote.cloneNode(true); // Clone to avoid modifying the original
//           textContent.querySelectorAll("img").forEach(img => img.remove()); // Remove images
          
//           // Convert innerHTML to preserve new lines by replacing <br> with \n
//           let noteText = textContent.innerHTML.replace(/<br\s*\/?>/g, "\n").trim(); 

//           if (noteText.length > 0) { // Prevent empty downloads
//               let bom = "\uFEFF"; // UTF-8 BOM for Notepad
//               let blob = new Blob([bom + noteText.replace(/\n/g, "\r\n")], { type: "text/plain;charset=utf-8" });

//               let a = document.createElement('a');
//               a.download = "note.txt";
//               a.href = URL.createObjectURL(blob);
//               a.click();
//               URL.revokeObjectURL(a.href); // Clean up memory
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });


// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;
      
//       if (e.target.classList.contains("img1")) {
//           parentNote.remove(); // Delete the note
//       } 
//       else if (e.target.classList.contains("img2")) {
//           let textContent = parentNote.cloneNode(true); // Clone to avoid modifying the original
//           textContent.querySelectorAll("img").forEach(img => img.remove()); // Remove images
          
//           let noteText = textContent.innerHTML
//               .replace(/<div>/g, "\n")  // Replace <div> with newlines
//               .replace(/<\/div>/g, "")  // Remove closing div tags
//               .replace(/<br\s*\/?>/g, "\n") // Replace <br> with newlines
//               .trim(); 

//           if (noteText.length > 0) { // Prevent empty downloads
//               let url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(noteText);

//               let a = document.createElement("a");
//               a.download = "note.txt";  // Save as a text file
//               a.href = url;
//               a.click();
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });


// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;
      
//       if (e.target.classList.contains("img1")) {
//           parentNote.remove(); // Delete the note
//       } 
//       else if (e.target.classList.contains("img2")) {
//           let textContent = parentNote.cloneNode(true); // Clone to avoid modifying the original
//           textContent.querySelectorAll("img").forEach(img => img.remove()); // Remove images
          
//           // Convert HTML to plain text with proper line breaks
//           let noteText = textContent.innerHTML
//               .replace(/<div>/g, "\n")  // Convert <div> to newlines
//               .replace(/<\/div>/g, "")  // Remove closing divs
//               .replace(/<br\s*\/?>/g, "\n") // Convert <br> to newlines
//               .trim();

//           if (noteText.length > 0) { // Prevent empty downloads
//               let blob = new Blob([noteText], { type: "text/plain" });
//               let a = document.createElement("a");
//               a.href = URL.createObjectURL(blob);
//               a.download = "note.txt";
//               document.body.appendChild(a); // Append to body to ensure click works
//               a.click();
//               document.body.removeChild(a); // Remove after download
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });


// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;
      
//       if (e.target.classList.contains("img1")) {
//           parentNote.remove(); // Delete the note
//       } 
//       else if (e.target.classList.contains("img2")) {
//           let noteText = parentNote.innerText.trim(); // Use innerText instead of innerHTML

//           if (noteText.length > 0) { // Prevent empty downloads
//               let blob = new Blob([noteText], { type: "text/plain" });
//               let a = document.createElement("a");
//               a.href = URL.createObjectURL(blob);
//               a.download = "note.txt";
//               document.body.appendChild(a); // Append to body to ensure click works
//               a.click();
//               document.body.removeChild(a); // Remove after download
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });



// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;

//       if (e.target.classList.contains("img1")) {
//           parentNote.remove(); // Delete the note
//       } 
//       else if (e.target.classList.contains("img2")) {
//           let noteText = "";
          
//           // Extract all child nodes and properly handle line breaks
//           parentNote.childNodes.forEach(node => {
//               if (node.nodeType === Node.TEXT_NODE) {
//                   noteText += node.textContent.trim() + "\n"; // Text directly inside the note
//               } 
//               else if (node.tagName === "DIV" || node.tagName === "P") {
//                   noteText += node.innerText.trim() + "\n"; // Each div or paragraph is a new line
//               }
//           });

//           noteText = noteText.trim(); // Remove extra new lines

//           if (noteText.length > 0) { // Prevent empty downloads
//               let blob = new Blob([noteText], { type: "text/plain" });
//               let a = document.createElement("a");
//               a.href = URL.createObjectURL(blob);
//               a.download = "note.txt";
//               document.body.appendChild(a); // Append to body to ensure click works
//               a.click();
//               document.body.removeChild(a); // Remove after download
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });

// notesContainer.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//       let parentNote = e.target.parentElement;

//       if (e.target.classList.contains("img1")) {
//           parentNote.remove(); // Delete the note
//       } 
//       else if (e.target.classList.contains("img2")) {
//           let noteText = parentNote.innerHTML // Get HTML content
//               .replace(/<div>/g, "\n")   // Convert <div> to new lines
//               .replace(/<\/div>/g, "")   // Remove closing <div>
//               .replace(/<br\s*\/?>/g, "\n") // Convert <br> to new lines
//               .replace(/<\/?[^>]+(>|$)/g, "") // Remove all remaining HTML tags
//               .trim(); 

//           if (noteText.length > 0) { // Prevent empty downloads
//               let blob = new Blob([noteText], { type: "text/plain" });
//               let a = document.createElement("a");
//               a.href = URL.createObjectURL(blob);
//               a.download = "note.txt";
//               document.body.appendChild(a); // Append to body to ensure click works
//               a.click();
//               document.body.removeChild(a); // Remove after download
//           } else {
//               alert("Note is empty!"); // Warn user if there's no text
//           }
//       }
//   }
// });

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
      let parentNote = e.target.parentElement;

      if (e.target.classList.contains("img1")) {
          parentNote.remove(); // Delete the note
      } 
      else if (e.target.classList.contains("img2")) {
          // Extract text properly, preserving line breaks
          let noteText = getTextWithLineBreaks(parentNote);

          if (noteText.length > 0) { // Prevent empty downloads
              let blob = new Blob([noteText], { type: "text/plain" });
              let a = document.createElement("a");
              a.href = URL.createObjectURL(blob);
              a.download = "note.txt";
              document.body.appendChild(a); // Append to body to ensure click works
              a.click();
              document.body.removeChild(a); // Remove after download
          } else {
              alert("Note is empty!"); // Warn user if there's no text
          }
      }
  }
});

// Function to extract text with correct line breaks
// function getTextWithLineBreaks(element) {
//   let textLines = [];
  
//   element.childNodes.forEach(node => {
//       if (node.nodeType === Node.TEXT_NODE) {
//           textLines.push(node.textContent.trim()); // Add text nodes
//       } 
//       else if (node.tagName === "DIV" || node.tagName === "P" || node.tagName === "BR") {
//           textLines.push(node.innerText.trim()); // Add text from divs & paragraphs
//       }
//   });

//   return textLines.join("\n").trim(); // Join lines with new lines
// }

// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "IMG") {
//         let parentNote = e.target.parentElement;

//         if (e.target.classList.contains("img1")) {
//             parentNote.remove(); // Delete the note
//         } 
//         else if (e.target.classList.contains("img2")) {
//             let noteText = getNoteText(parentNote);

//             if (noteText.length > 0) { // Prevent empty downloads
//                 let blob = new Blob([noteText], { type: "text/plain" });
//                 let a = document.createElement("a");
//                 a.href = URL.createObjectURL(blob);
//                 a.download = "note.txt";
//                 document.body.appendChild(a); // Append to body to ensure click works
//                 a.click();
//                 document.body.removeChild(a); // Remove after download
//             } else {
//                 alert("Note is empty!"); // Warn user if there's no text
//             }
//         }
//     }
// });

// // ✅ Extracts text properly from contenteditable
// function getNoteText(element) {
//     let lines = [];

//     element.childNodes.forEach(node => {
//         if (node.nodeType === Node.TEXT_NODE) {
//             lines.push(node.textContent.trim()); // Normal text
//         } 
//         else if (node.tagName === "DIV" || node.tagName === "P") {
//             lines.push(node.innerText.trim()); // Handle divs/paragraphs
//         } 
//         else if (node.tagName === "BR") {
//             lines.push(""); // Preserve empty lines
//         }
//     });

//     return lines.join("\n").trim(); // Ensure correct new lines
// }


// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "IMG") {
//         let parentNote = e.target.parentElement;

//         if (e.target.classList.contains("img1")) {
//             parentNote.remove(); // Delete the note
//         } 
//         else if (e.target.classList.contains("img2")) {
//             let noteText = getNoteText(parentNote);

//             if (noteText.length > 0) { // Prevent empty downloads
//                 let blob = new Blob([noteText], { type: "text/plain" });
//                 let a = document.createElement("a");
//                 a.href = URL.createObjectURL(blob);
//                 a.download = "note.txt";
//                 document.body.appendChild(a); // Append to body to ensure click works
//                 a.click();
//                 document.body.removeChild(a); // Remove after download
//             } else {
//                 alert("Note is empty!"); // Warn user if there's no text
//             }
//         }
//     }
// });

// // ✅ Extracts text properly from contenteditable
// function getNoteText(element) {
//     let lines = [];

//     element.childNodes.forEach(node => {
//         if (node.nodeType === Node.TEXT_NODE) {
//             lines.push(node.textContent.trim()); // Normal text
//         } 
//         else if (node.tagName === "DIV" || node.tagName === "P") {
//             lines.push(node.innerText.trim()); // Handle divs/paragraphs
//         } 
//         else if (node.tagName === "BR") {
//             lines.push(""); // Preserve empty lines
//         }
//     });

//     return lines.join("\n").trim(); // Ensure correct new lines
// }


notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        let parentNote = e.target.parentElement;

        if (e.target.classList.contains("img1")) {
            parentNote.remove(); // Delete the note
        } 
        else if (e.target.classList.contains("img2")) {
            let noteText = parentNote.textContent.replace(/\n+/g, "\n").trim(); 
            
            if (noteText.length > 0) {
                let blob = new Blob([noteText], { type: "text/plain" });
                let a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = "note.txt";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                alert("Note is empty!");
            }
        }
    }
});










