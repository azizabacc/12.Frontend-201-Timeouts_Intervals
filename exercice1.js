/* Using setInterval display the word prout one character at a time (one letter per second). 
Once the word is written on the screen clear the interval. */


// Display character
function displayChar(char) {
  console.log(char);
}

let str = "prout";
let i = 0;

let interval = setInterval(() => {
  displayChar(str[i]);
  i++;

  if (i === str.length) {
      clearInterval(interval); // Clear the interval once all characters are displayed
  }
}, 1000);