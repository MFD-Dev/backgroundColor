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

/////////  Bonus //////////
// let dropdown = document.querySelector('select');

// dropdown.addEventListener('change', function () {
//     const color = this.value; //using this keyword
//     // to reference current value of color in this scope
 
//     switch(color) { //switch stmnt to scroll through ea option
//         case 'red':
//             document.body.style.background = 'red';
//             break;
    
//         case 'green':
//             document.body.style.background = 'green';
//             break;
    
//         case 'blue':
//             document.body.style.background = 'blue';
//             break;
//         default:
//             document.body.style.background  = 'white';   
            
//     }

// })

//////////////// bonus 2 /////////////////

//HAVE TO FIX-- NOT DISPLAYING COLORS ON DROPDOWN//

// let dropdown = document.querySelector('select');

// dropdown.addEventListener('change', function () {
//     const color = this.value; //using this keyword
//     // to reference current value of color in this scope

// // // using if statement.  if color strict matches default
// // // display 'white', other wise display the color based on the 
// // // value that the this keyword is holding.            
//             if(color == 'default'){
//               document.body.style.background  = 'white';   
//             } else {
//                 document.body.style.background  = 'color'; 
//             }
// })          