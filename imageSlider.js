document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider'); // Adjust selector if necessary
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let count = 0; // Use 'let' to allow changes

    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    const slideImage = () => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;
        });
    };

    const goNext = () => {
        count = (count + 1) % slides.length; // Loop back to the first slide
        slideImage();
    };

    const goPrev = () => {
        count = (count - 1 + slides.length) % slides.length; // Loop back to the last slide
        slideImage();
    };

    // Event listeners for buttons
    nextButton.addEventListener('click', goNext);
    prevButton.addEventListener('click', goPrev);

    // Initialize the slider
    slideImage();
});