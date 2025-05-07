const dropDownToggleButton = document.getElementById('drop-down-toggle-button'); 
const dropDownContent = document.getElementById('drop-down-content-div'); 

const imagesDiv = document.getElementById('images'); 
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow'); 

const navCirclesDiv = document.getElementById('nav-circles-div'); 

let currentNavCircleCount = 0;
let currentNavCircleHighlighted = navCirclesDiv.children[0]; 
currentNavCircleHighlighted.classList.add('selected'); 

let currentPictureCount = 0; 
let currentPictureShowing = imagesDiv.children[0]; 
currentPictureShowing.classList.remove('hidden'); 

const circleToPictureObject = {
    'circle-1' : 0,
    'circle-2' : 1,
    'circle-3' : 2,
    'circle-4' : 3,
}

// ADD TIMER TO SWITCH PICS AUTOMATICALLY

const navCirclesDivArray = Array.from(navCirclesDiv.children); 

navCirclesDivArray.forEach(element => {
    element.addEventListener('click', () => {
        currentNavCircleCount = circleToPictureObject[element.id];
        currentPictureCount = circleToPictureObject[element.id]; 

        currentPictureShowing.classList.add('hidden');
        currentNavCircleHighlighted.classList.remove('selected'); 

        currentNavCircleHighlighted = navCirclesDiv.children[currentNavCircleCount];
        currentNavCircleHighlighted.classList.add('selected');
        
        currentPictureShowing = imagesDiv.children[currentPictureCount]
        currentPictureShowing.classList.remove('hidden'); 

        console.log(circleToPictureObject[element.id]); 
    })
})




leftArrow.addEventListener('click', () => {
    currentPictureShowing.classList.add('hidden');
    currentNavCircleHighlighted.classList.remove('selected'); 
    if(currentPictureCount > 0){
        currentPictureCount -= 1;
        currentNavCircleCount -= 1;
        console.log(currentPictureCount); 
    }
    else if (currentPictureCount == 0){
        currentPictureCount = 3; 
        currentNavCircleCount = 3;
        console.log(currentPictureCount);
    } 
    currentPictureShowing = imagesDiv.children[currentPictureCount]; 
    
    currentNavCircleHighlighted = navCirclesDiv.children[currentNavCircleCount];
    currentNavCircleHighlighted.classList.add('selected');
    console.log(currentNavCircleHighlighted);
    currentPictureShowing.classList.remove('hidden'); 
})

rightArrow.addEventListener('click', () => {
    currentPictureShowing.classList.add('hidden');
    currentNavCircleHighlighted.classList.remove('selected'); 
    if(currentPictureCount < 3){
        currentPictureCount += 1;
        currentNavCircleCount += 1; 
        console.log(currentPictureCount); 
    }
    else if (currentPictureCount == 3){
        currentPictureCount = 0;
        currentNavCircleCount = 0;
        console.log(currentPictureCount); 
    }
    currentNavCircleHighlighted = navCirclesDiv.children[currentNavCircleCount];
    currentNavCircleHighlighted.classList.add('selected');
    currentPictureShowing = imagesDiv.children[currentPictureCount]; 
    currentPictureShowing.classList.remove('hidden'); 
})


dropDownToggleButton.addEventListener('click', () => {
    if(dropDownContent.classList.contains('hidden')){
        dropDownContent.classList.remove('hidden'); 
    }
    else {
        dropDownContent.classList.add('hidden'); 
    }
   
})


