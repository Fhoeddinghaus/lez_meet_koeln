// high contrast toggle
// add for every button with button-high-contrast class

document.querySelectorAll(".button-high-contrast").forEach(function(button) {
    button.addEventListener("click", function(event) {
        // prevent default link behavior
        event.preventDefault();
        document.body.classList.toggle("high-contrast");
    });
});
