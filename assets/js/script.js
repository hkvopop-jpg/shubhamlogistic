// ===== Floating Contact Widget =====
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactMenu = document.getElementById('contactMenu');

    if (contactBtn && contactMenu) {
        // Toggle menu on button click
        contactBtn.addEventListener('click', function() {
            if (contactMenu.style.display === 'none' || contactMenu.style.display === '') {
                contactMenu.style.display = 'block';
            } else {
                contactMenu.style.display = 'none';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.floating-contact')) {
                contactMenu.style.display = 'none';
            }
        });
    }

    // Close menu when a link is clicked
    const contactLinks = document.querySelectorAll('.contact-option');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            contactMenu.style.display = 'none';
        });
    });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            company: formData.get('company'),
            shipmentType: formData.get('shipmentType'),
            origin: formData.get('origin'),
            destination: formData.get('destination'),
            weight: formData.get('weight'),
            message: formData.get('message')
        };

        // Create WhatsApp message
        const whatsappMessage = `Hi Shubham Logistics,

I would like to get a quote for my shipment.

*Sender Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || 'N/A'}

*Shipment Details:*
Type: ${data.shipmentType}
From: ${data.origin}
To: ${data.destination}
Weight: ${data.weight || 'Not specified'} kg
Additional Info: ${data.message || 'N/A'}

Please provide me with a quote and delivery timeline.

Thank you!`;

        // Send via WhatsApp
        const whatsappURL = `https://wa.me/919849169890?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');

        // Show success message
        const formContainer = contactForm.parentElement;
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
        successAlert.role = 'alert';
        successAlert.innerHTML = `
            <strong>Success!</strong> Your quote request has been sent via WhatsApp. Our team will contact you shortly.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        formContainer.insertBefore(successAlert, contactForm);

        // Reset form
        contactForm.reset();

        // Auto-remove alert after 5 seconds
        setTimeout(() => {
            successAlert.remove();
        }, 5000);
    });
}

// ===== Navbar Active Link Highlighting =====
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentLocation || 
            (currentLocation === '/' && href === 'index.html') ||
            (currentLocation.includes('index.html') && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== Scroll Animation for Elements =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .service-item, .process-step, .benefit-card, .value-card').forEach(el => {
    observer.observe(el);
});

// ===== Counter Animation for Statistics =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 20;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = counter.textContent;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
}

// Trigger counter animation when stats section is visible
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.bg-primary.text-white');
    if (statsSection && window.innerWidth > 768) {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.unobserve(entries[0].target);
            }
        });
        observer.observe(statsSection);
    }
});

// ===== Mobile Menu Collapse on Link Click =====
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        const navbarToggle = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggle && navbarCollapse) {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                navbarToggle.click();
            }
        }
    });
});

// ===== Scroll to Top Button =====
let scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Create scroll to top button if it doesn't exist
if (!scrollToTopBtn) {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    // Add CSS for scroll to top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: linear-gradient(135deg, #0d5dcc 0%, #0a47a9 100%);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
            cursor: pointer;
            display: none;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
        }
        
        .scroll-to-top.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 576px) {
            .scroll-to-top {
                bottom: 80px;
                right: 15px;
                width: 45px;
                height: 45px;
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Add Fade-in Animation on Page Load =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ===== Initialize Bootstrap Tooltips and Popovers =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips if any exist
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Bootstrap popovers if any exist
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// ===== Prevent Form Double Submission =====
document.addEventListener('submit', function(e) {
    const form = e.target;
    if (form.classList.contains('submitted')) {
        e.preventDefault();
        return false;
    }
    form.classList.add('submitted');
}, true);
