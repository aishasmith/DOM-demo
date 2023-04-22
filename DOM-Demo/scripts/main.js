// DOM Homework

// click button to set the background colour to pink

function myFunction() {
    document.body.style.backgroundColor = "pink";
  }

  // two click buttons with the option to change the colour of the text to red or blue

  function changeColor(newColor) {
    const dog = document.getElementById("para");
    dog.style.color = newColor;
  }

// ul & li list items removed  

document.querySelector('ul')
const removeList = document.querySelector('ul')
removeList.remove()

  // changes to paragraph text and style

  document.querySelector('p')
  var changeParagraph = document.querySelector('p');
  changeParagraph.textContent = "Mabel is now homeless!";
  changeParagraph.style.border = "5px solid black";
  changeParagraph.style.fontFamily = "san-serif";
  
  document.querySelector('h1')
  var changeParagraph = document.querySelector('h1');
  changeParagraph.textContent = "Missing Mabel!";
  changeParagraph.style.border = "5px solid black";
  changeParagraph.style.fontFamily = "san-serif";
  

