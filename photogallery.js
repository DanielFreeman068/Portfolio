let slideIndex = 1;//sets the index for photos
function openModal() {
    document.getElementById("myModal").style.display = "block";//if photo clicked this changed the display and pops up slideshow
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";//if exit button is clicked this takes off the slideshoww
}

function plusSlides(n) {
    showSlides(slideIndex += n);//this function changes slide based on which arrow the user interacts wit
}

function currentSlide(n) {
    showSlides(slideIndex = n);//uses parameter from html onclick to set which image was clicked based on index
}

// Function to display the slideshow image at the specified index
function showSlides(n) {
    // Get all slides
    let slides = document.getElementsByClassName("mySlides");
    // If the index is greater than the number of slides, set it to 1 (start of slideshow)
    if (n > slides.length) {
        slideIndex = 1;
    }
    // If the index is less than 1, set it to the last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Display the slide at the correct index
    slides[slideIndex - 1].style.display = "block";
}

// When the DOM content is fully loaded, display the slideshow starting from slideIndex
document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});