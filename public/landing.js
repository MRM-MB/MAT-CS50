// Varibles for the speed of text
var fast = 60;
var slow = 600;
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var p = document.querySelector("p");
var delay = h1.innerHTML.length * slow + slow;

// For header
typeEffect(h1, slow);

// For beginning text
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, fast);
}, delay);


// For each letter make the corresponding speed and adjust the time
function typeEffect(element, fast) {
	var text = element.innerHTML;
	element.innerHTML = "";
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, fast);
}

// Popup message for button "What is MAT ?"
let popup = document.querySelector(".popup"),
    button = document.querySelector(".button");

button.addEventListener("click", openPop);

function openPop(){
  popup.style.display = "Block";
}

window.addEventListener("click", closePop);

function closePop(e){
  if(e.target == popup) {
  popup.style.display = "none";
}
}




$(document).ready(function () {
  all_notes = $("li a");

  all_notes.on("keyup", function () {
    note_title = $(this).find("h2").text();
    note_content = $(this).find("p").text();

    item_key = "list_" + $(this).parent().index();

    data = {
      title: note_title,
      content: note_content
    };

    window.localStorage.setItem(item_key, JSON.stringify(data));
  });

  all_notes.each(function (index) {
    data = JSON.parse(window.localStorage.getItem("list_" + index));

    if (data !== null) {
      note_title = data.title;
      note_content = data.content;

      $(this).find("h2").text(note_title);
      $(this).find("p").text(note_content);
    }
  });
});