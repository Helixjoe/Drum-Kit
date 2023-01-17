var numberOfdrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfdrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    alert("Button just got clicked.");
  });
}
