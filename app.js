/*
-- create html paragraph
-- create html buttons for each color
-- variable for color change on each button
-- create function to change color on click
*/

//  I want to challenge you to clean this code up a bit by not repeating the same/similar code multiple times.
// ​
// Google: javascript get value from select

// Update your select dropdown options to be colors (ex: red, blue, etc.), and write JavaScript code that 
//sets the background color when the select dropdown is chosen/changed.

// Let me know if you need help with this. You should end up with only one function in your code.
///////////////////////////////////////////////////////////////////
document.getElementById('submit').onclick = function() {
    var checked = document.querySelectorAll('#color-names :checked');
    var selected = [...checked].map(option => option.value);
  if (selected == 'btn-red') {
    document.body.style.backgroundColor = 'red';
  }
    else  if (selected == 'btn-green') {
    document.body.style.backgroundColor = 'green';
  }
  else   {
    document.body.style.backgroundColor = 'blue';
  }
}
