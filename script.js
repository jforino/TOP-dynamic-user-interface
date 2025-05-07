const dropDownToggleButton = document.getElementById('drop-down-toggle-button'); 
const dropDownContent = document.getElementById('drop-down-content-div'); 


dropDownToggleButton.addEventListener('click', () => {
    if(dropDownContent.classList.contains('hidden')){
        dropDownContent.classList.remove('hidden'); 
    }
    else{
        dropDownContent.classList.add('hidden');
    }
})

