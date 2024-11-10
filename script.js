const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.querySelector('.logo').classList.toggle('active');
});

// cloing menu when window is resized to desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// tabs
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabPanels.forEach(panel => panel.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(`tab-${targetTab}`).classList.add("active");
    });
});

// faq
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove('active');
            }
        });

        faq.classList.toggle('active');
    });
});

// contact form
const emailInput = document.getElementById('email');
const errorIcon = document.getElementById('errorIcon');
const errorText = document.getElementById('errorText');
const inputBox = document.querySelector('.input') 

emailInput.addEventListener('input', () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(emailInput.value)) {
    emailInput.classList.remove('error');
    inputBox.classList.remove('error');
    errorIcon.style.display = 'none';
    errorText.style.display = 'none';
    } else if (emailInput.value === "") {
        emailInput.classList.remove('error');
        inputBox.classList.remove('error');
        errorIcon.style.display = 'none';
        errorText.style.display = 'none';
    } else {
    emailInput.classList.add('error');
    inputBox.classList.add('error');
    errorIcon.style.display = 'inline';
    errorText.style.display = 'block';
    }
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailInput.classList.contains('error')) {
    alert('Form submitted successfully!');
    emailInput.value = '';
    } else {
    alert('Please correct the errors before submitting.');
    }
});
