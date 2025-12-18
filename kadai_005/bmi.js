
let submitButton=document.getElementById("submit")  //fetching the submit button
submitButton.addEventListener("click",function(event){ // when the submit button is clicked, do the below
  event.preventDefault();// preventing a page reload

  /////your code goes here///////////////////
let height=parseFloat(document.querySelector('#height').value)/100
let weight=parseFloat(document.querySelector('#weight').value)

console.log(`height is ${height}`);
console.log(`height is ${weight}`);








let BMI=(weight/(height*height)).toFixed(1);

document.write(`your BMI is ${BMI}`);
console.log(BMI);


});