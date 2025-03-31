document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a'); 
  
   
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
  
     
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      } else {
        mobileMenu.style.maxHeight = '0';
      }
    });
  
    
    mobileMenuLinks.forEach((link) => {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        mobileMenu.style.maxHeight = '0'; 
      });
    });

    const slider = document.getElementById('testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');

    let currentIndex = 0;

    
    function updateSlider() {
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateDots();
    }

    
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('bg-purple-500');
                dot.classList.remove('bg-neutral-600');
            } else {
                dot.classList.remove('bg-purple-500');
                dot.classList.add('bg-neutral-600');
            }
        });
    }

    
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    });

   
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

   
    updateSlider();


    emailjs.init("G5VdrJ_tQkBkODLsk"); 

    document.getElementById("newsletter-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const userEmail = document.getElementById("user-email").value;
  
      emailjs.send("service_3wvgtue", "template_s8pddk3", {
        user_email: userEmail,
      })
      .then(function (response) {
        alert("✅ Subscription Successful!");
        document.getElementById("newsletter-form").reset();
      }, function (error) {
        alert("❌ Subscription Failed. Try again.");
        console.error("EmailJS Error:", error);
      });
    });
  

  });


