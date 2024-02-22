document.addEventListener("DOMContentLoaded", function() {
    const contentElements = document.querySelectorAll('h1, h2, p');
    const img = document.querySelector('img');
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

    function adjustStylesBasedOnScroll() {
        const scrollPercentage = window.scrollY / maxScrollHeight;

        // Adjust letter spacing for text elements
        contentElements.forEach(el => {
            const initialSpacing = 20; // Starting letter spacing
            // Allow letter spacing to go negative near the end of scroll
            const letterSpacing = Math.max(initialSpacing - (scrollPercentage * (initialSpacing + 10)), -5); // Adjusted for more extreme effect
            el.style.letterSpacing = `${letterSpacing}px`;
        });

        // Adjust the image's width more conservatively
        const initialWidth = 2000; // Smaller initial width in pixels
        const minWidth = 300; // Minimum width as it gets smaller
        const widthDiff = initialWidth - minWidth;
        const imgWidth = Math.max(minWidth + (widthDiff * (1 - scrollPercentage)), minWidth);
        img.style.width = `${imgWidth}px`; // Apply the calculated width
    }

    // Apply initial styles and update on scroll
    adjustStylesBasedOnScroll();
    window.addEventListener('scroll', adjustStylesBasedOnScroll);
});


function toggleFullscreenView() {
    var fullscreenView = document.getElementById("fullscreenView");
    var img = document.getElementById("dynamicImage");
    var fullscreenImage = document.getElementById("fullscreenImage");
    
    // Toggle visibility of the fullscreen view
    if (fullscreenView.style.display === "none") {
        fullscreenView.style.display = "flex";
        fullscreenImage.src = img.src; // Set the src for the fullscreen image
    } else {
        fullscreenView.style.display = "none";
    }
}

// Add event listener to your image for clicking
document.getElementById("dynamicImage").addEventListener("click", toggleFullscreenView);
