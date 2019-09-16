let element = document.getElementById("hoge");
  
// This handler will be executed only once when the cursor
// moves over the unordered list
element.addEventListener("mouseenter", event => {   
  // highlight the mouseenter target
  event.target.style.color = "red";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
element.addEventListener("click", event => {   
  // highlight the mouseover target
  event.target.style.color = "green";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
}, false);
