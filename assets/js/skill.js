let aboutSection = document.getElementById ("about")
let valueContainer = document.getElementById ("value-container");
let progressBar = document.getElementById ("progress-bar");
let secondValueContainer = document.getElementById ("second-value--container")


let progressValue = 0;
let progressEndValue = 80 ;
let containerValue = 0 ;
let secondEndValue = 90;
let speed = 50;








let progress = setInterval(()=> {
    
    progressValue++;
   valueContainer.textContent = `${progressValue}% `;
   
   
  
    if(progressValue == progressEndValue){
        clearInterval(progress);
    }
  
},speed);


let prog = setInterval(()=> {
    containerValue++;
   secondValueContainer.textContent = `${containerValue}% `;
   
   
  
    if(containerValue == secondEndValue){
        clearInterval(prog);
    }
  
},speed);



