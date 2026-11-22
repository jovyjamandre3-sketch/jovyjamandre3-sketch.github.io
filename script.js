// ===================================
// MOBILE NAVIGATION MENU
// ===================================

const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');

// Open and close menu
toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});

// Close menu after clicking a navigation link
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        links.classList.remove('active');
    });
});


// ===================================
// AUTOMATIC COPYRIGHT YEAR
// ===================================

document.getElementById('year').textContent =
    new Date().getFullYear();


// ===================================
// BACK TO TOP BUTTON
// ===================================

const topBtn = document.getElementById('topBtn');

// Show button when scrolling down
window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }

});

// Return to top when clicked
topBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});


// ===================================
// CONTACT FORM
// ===================================

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();

    const subject = Portfolio Message from ${name};

    const body =
        Name: ${name}\n +
        Email: ${email}\n\n +
        ${msg};

    const mailtoLink =
        mailto:jovyjamandre3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)};

    document.getElementById('form-status').textContent =
        'Opening your email app...';

    window.location.href = mailtoLink;

});
