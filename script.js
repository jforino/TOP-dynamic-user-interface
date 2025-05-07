const dropDownToggleButton = document.getElementById('drop-down-toggle-button'); 
const dropDownContent = document.getElementById('drop-down-content-div'); 

const imagesDiv = document.getElementById('images'); 
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow'); 

let currentPictureCount = 0; 
let currentPictureShowing = imagesDiv.children[0]; 
currentPictureShowing.classList.remove('hidden'); 


leftArrow.addEventListener('click', () => {
    currentPictureShowing.classList.add('hidden');
    if(currentPictureCount > 0){
        currentPictureCount -= 1;
        console.log(currentPictureCount); 
    }
    else if (currentPictureCount == 0){
        currentPictureCount = 3; 
        console.log(currentPictureCount);
    } 
    currentPictureShowing = imagesDiv.children[currentPictureCount]; 
    console.log(currentPictureShowing); 
    currentPictureShowing.classList.remove('hidden'); 
})

rightArrow.addEventListener('click', () => {
    currentPictureShowing.classList.add('hidden');
    if(currentPictureCount < 3){
        currentPictureCount += 1;
        console.log(currentPictureCount); 
    }
    else if (currentPictureCount = 3){
        currentPictureCount = 0;
        console.log(currentPictureCount); 
    }
    currentPictureShowing = imagesDiv.children[currentPictureCount]; 
    currentPictureShowing.classList.remove('hidden'); 
})



dropDownToggleButton.addEventListener('click', () => {
    if(dropDownContent.classList.contains('hidden')){
        dropDownContent.classList.remove('hidden'); 
    }
    else{
        dropDownContent.classList.add('hidden');
    }
})


