console.log('Here are all the available people:', people);
$(document).ready(onReady); 


function onReady(){ 
  console.log("DOM rendered"); 
  //call intialRender in the onReady funcion to create the DOM 
//event listener for rendered event - click on photo, run clickedPhoto
} 


//initialRender function 
//create a global variable randomNumber
// run (randomNumber(min, max(people.length-1)))
// update the global variable randomNumber to it 
//apend Click on: people[ at randomNumber]
//loop through each of the people in the people array 
//append img for each photo infomation into html
//<img src="https://github.com/christopher-black.png?size=250" alt="Profile image of Chris">
//include a data.id for each, perhaps that corresponds to index  


//randomNumber function 
//function randomNumber(min, max){
//  return Math.floor(Math.random() * (1 + max - min) + min);
//}

//function clickedPhoto (){}
//grab the information from the clicked item, data.id
//set that information equal to a local variable
//run a conditional, test if local variable is equal to randomNumber 
//if true create an alert that says correct and tells to refresh page 
//if false alert try again 