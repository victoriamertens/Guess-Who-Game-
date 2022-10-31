console.log('Here are all the available people:', people);
$(document).ready(onReady); 


function onReady(){ 
  console.log("DOM rendered"); 
  //call intialRender in the onReady funcion to create the DOM 
  initialRender(); 
//event listener for rendered event - click on photo, run clickedPhoto
} 

let randomNumber = 0; 
function initialRender (){ 
//create a global variable randomNumber
// run (randomNumber(min, max(people.length-1)))
randomNumber = randomNumberFunction(0,people.length-1); 
// update the global variable randomNumber to it 
console.log(randomNumber);
//apend Click on: people[ at randomNumber]
$('#starting-people').append(`
<h2>Click on: ${people[randomNumber].name}</h2>
`)
//loop through each of the people in the people array 
//append img for each photo infomation into html
for (let i = 0; i<people.length; i++){ 
  $('#starting-people').append(`
  <div><img src="${people[i].imgSource}" data.id="${i}"></div>
  `);
}
//include a data.id for each, perhaps that corresponds to index
} 

function randomNumberFunction (min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
   } 


//function clickedPhoto (){}
//grab the information from the clicked item, data.id
//set that information equal to a local variable
//run a conditional, test if local variable is equal to randomNumber 
//if true create an alert that says correct and tells to refresh page 
//if false alert try again 