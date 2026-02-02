// high contrast toggle
$(".button-high-contrast").click(function(event) {
    // prevent default link behavior
    event.preventDefault();
    $("body").toggleClass("high-contrast");
});