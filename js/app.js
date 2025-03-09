//Start Top Message animation
window.addEventListener("scroll", function() {
    const topMessage = document.querySelector('#top-message');
    const navbar = this.document.querySelector('#navbar');
    const topMessageHeight = topMessage.offsetHeight;
    const scrollHeight = window.scrollY;
    if (scrollHeight > topMessageHeight) {
        navbar.classList.add('sticky');
        navbar.classList.remove('box-shadow');
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.add('box-shadow');
    }
});
//End Top Message animation


//Start Vertical Carousel
let images = ["./images/carousel-sportshirt-1.png", "./images/carousel-tshirt-2.png", "./images/carousel-hoodie-3.png", "./images/carousel-cup-4.png"];
let currentIndex = 0;
let mainImage = document.getElementById('mainImage');
let thumbnails = document.querySelectorAll('.thumbnail');


function changeImage(src, element) {
    mainImage.src = src;
    thumbnails.forEach(img => img.classList.remove('active'));
    element.classList.add('active');
    currentIndex = images.indexOf(src);
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function updateImage() {
    mainImage.src = images[currentIndex];
    thumbnails.forEach(img => img.classList.remove('active'));
    thumbnails[currentIndex].classList.add('active');
    
}

function autoSlide() {
    nextImage();
}
setInterval(autoSlide, 3000); // Auto move every 3 seconds
// End Vertical Carousel


//Start Inside 7 Eleven Carousel section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2, // Show 2 slides at a time
    spaceBetween: 0, // No gap between cards
    slidesPerGroup: 2, // Moves 2 cards per click
    loop: true, // Infinite loop scrolling
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: true, // Keeps autoplay active after user interaction
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allows clicking the dots to jump to slides
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        480: {
            slidesPerView: 1, // 1 card per view on smaller screens
            slidesPerGroup: 1, // Moves 1 at a time on mobile
        }
    }
});
//End Inside 7 Eleven Carousel section

// Start Feeback Modal Section
    // Open the modal
    function openModal() {
        $('#feedbackModal').modal('show');
    }

    // Close the modal
    function closeModal() {
        $('#feedbackModal').modal('hide');
    }

    // Close the feedback button
    function closeFeedbackBtn(event) {

        document.getElementById("feedbackBtnContainer").style.display = "none";
    }
// End Feeback Modal Section
