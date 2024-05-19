document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector("nav");
    var links = navbar.querySelectorAll("a");
    var stickyTrigger = navbar.offsetTop - (0.4*navbar.offsetHeight);
    var placeholder = document.querySelector(".nav-placeholder");

    function updatePlaceholderHeight() {
        placeholder.style.height = 0.75*navbar.offsetHeight + "px";
    }

    window.onscroll = function() {
        if (window.scrollY >= stickyTrigger) {
            navbar.classList.add("sticky");
            updatePlaceholderHeight(); // Update placeholder height when sticky
            links.forEach(link => link.style.opacity = "0.5"); // Reduce opacity when sticky
        } else {
            navbar.classList.remove("sticky");
            placeholder.style.height = "0px"; // Reset placeholder height
            links.forEach(link => link.style.opacity = "1"); // Restore full opacity
        }
    };

    window.onresize = updatePlaceholderHeight; // Update placeholder height on resize 
});