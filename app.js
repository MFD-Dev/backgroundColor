/*
-- create html paragraph
-- create html buttons for each color
-- variable for color change on each button
-- create function to change color on click
*/
// create a variable to grab the button id
let btnRed = document.querySelector('#btn-red');
let btnGreen = document.querySelector('#btn-green');
let btnBlue = document.querySelector('#btn-blue');
// add a eventListener and a function to hold the code.
btnRed.addEventListener('click', ()=> {
    // console.log('here');
    // this grabbing the entire window and setting it to 
    // the specific color
    document.body.style.background  = 'red';
})

btnGreen.addEventListener('click', ()=> {
    // console.log('here');
    // this grabbing the entire window and setting it to 
    // the specific color
    document.body.style.background  = 'green';
})

btnBlue.addEventListener('click', ()=> {
    // console.log('here');
    // this grabbing the entire window and setting it to 
    // the specific color
    document.body.style.background  = 'blue';
})

