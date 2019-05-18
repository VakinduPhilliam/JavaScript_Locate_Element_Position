
/* Simple JavaScript Function to locate an element's position in HTML DOM. */

function getPosition(el) {

  var xPos = 0;
  var yPos = 0;
  
      // Identify element coordinates and parse results to parent
 
     xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
     yPos += (el.offsetTop - el.scrollTop + el.clientTop);
 
    el = el.offsetParent;

  return {
    x: xPos,
    y: yPos
  };
}
 
var myElement = document.querySelector("#ball"); 
var position = getPosition(myElement);
alert("The image is located at: " + position.x + ", " + position.y);