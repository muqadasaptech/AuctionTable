//  Aos Animation

AOS.init({
    offset: 200,
    duration: 1300
});


// Testimonial data
const testimonials = [
    {
        content: "Fantastic Bidding Item! Experience able to alter the main characteristics of each plan in accordance with what services and tactics you provide. Prospective customers can better grasp the particular value at each price point with the aid of this analysis.",
        author: "Weston Bennett",
        position: "CEO at Triprex",
        image: "image/testimanial.jpeg"
    },
    {
        content: "Fantastic Bidding Item! Experience able to alter the main characteristics of each plan in accordance with what services and tactics you provide. Prospective customers can better grasp the particular value at each price point with the aid of this analysis.",
        author: "Sophia Turner",
        position: "Marketing Director at Marque",
        image: "image/testimanial1.jpeg"
    },
    {
        content: "Fantastic Bidding Item! Experience able to alter the main characteristics of each plan in accordance with what services and tactics you provide. Prospective customers can better grasp the particular value at each price point with the aid of this analysis.",
        author: "Alex Smith",
        position: "Product Manager at SyncWorks",
        image: "image/testimanial2.jpeg"
    }
];

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonialContent = document.getElementById('testimonial-content');
    const authorInfo = document.getElementById('author-info');

    // Remove active class for fade-out effect
    testimonialContent.classList.remove('active');
    authorInfo.classList.remove('active');

    setTimeout(() => {
        // Update content after fade-out
        testimonialContent.textContent = testimonials[currentTestimonial].content;
        authorInfo.querySelector('h3').textContent = testimonials[currentTestimonial].author;
        authorInfo.querySelector('span').textContent = testimonials[currentTestimonial].position;
        authorInfo.querySelector('img').src = testimonials[currentTestimonial].image;

        // Add active class for fade-in effect
        testimonialContent.classList.add('active');
        authorInfo.classList.add('active');
    }, 500); // Duration should match the transition time
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}


// Accordion

function toggleAnswer(faqElement) {
    const answer = faqElement.querySelector('.answer');
    const icon1 = faqElement.querySelector('.icon1');

    if (faqElement.classList.contains('open')) {
        faqElement.classList.remove('open');
        icon1.classList.replace('fa-minus', 'fa-plus');
    } else {
        document.querySelectorAll('.faq').forEach(faq => {
            faq.classList.remove('open');
            faq.querySelector('.icon1').classList.replace('fa-minus', 'fa-plus');
        });
        faqElement.classList.add('open');
        icon1.classList.replace('fa-plus', 'fa-minus');
    }
}