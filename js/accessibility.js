// high contrast toggle
document.querySelector(".button-high-contrast").addEventListener("click", function(event) {
    // prevent default link behavior
    event.preventDefault();
    document.body.classList.toggle("high-contrast");
});
