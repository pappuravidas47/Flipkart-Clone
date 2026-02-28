document.addEventListener('DOMContentLoaded', function() {
    // Get slider elements
    const slider = document.getElementById('heroSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const slideCount = document.querySelectorAll('.hero-slide').length;
    
    let sliderInterval = setInterval(nextSlide, 5000);
    
    // Function to show a specific slide
    function showSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        
        currentSlide = index;
        
        slider.style.transform = `translateX(-${currentSlide * 20}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
        
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 5000);
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners for dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            showSlide(slideIndex);
        });
    });
    
    // Pause autoplay when hovering over slider
    const heroContainer = document.querySelector('.hero-banner');
    heroContainer.addEventListener('mouseenter', function() {
        clearInterval(sliderInterval);
    });
    
    heroContainer.addEventListener('mouseleave', function() {
        sliderInterval = setInterval(nextSlide, 5000);
    });
});