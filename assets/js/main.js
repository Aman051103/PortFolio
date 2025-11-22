/*===== LOADING SCREEN =====*/
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
});

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== TYPING EFFECT =====*/
const typingText = document.querySelector('.typing-text');
const typingSubtitle = document.querySelector('.typing-subtitle');

if (typingText && typingSubtitle) {
    const name = 'Aman Pandey';
    const subtitle = 'ML Engineer';
    let nameIndex = 0;
    let subtitleIndex = 0;
    let isDeleting = false;
    let isNameComplete = false;

    function typeName() {
        if (!isNameComplete) {
            if (nameIndex < name.length && !isDeleting) {
                typingText.textContent = name.substring(0, nameIndex + 1);
                nameIndex++;
                setTimeout(typeName, 150);
            } else if (nameIndex === name.length) {
                isNameComplete = true;
                setTimeout(() => {
                    typeSubtitle();
                }, 1000);
            }
        }
    }

    function typeSubtitle() {
        if (subtitleIndex < subtitle.length) {
            typingSubtitle.textContent = subtitle.substring(0, subtitleIndex + 1);
            subtitleIndex++;
            setTimeout(typeSubtitle, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(typeName, 500);
}

/*===== ANIMATED SKILL BARS =====*/
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skills__bar');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage + '%';
                observer.unobserve(bar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
};

// Initialize skill bars animation
document.addEventListener('DOMContentLoaded', animateSkillBars);

/*===== SCROLL TO TOP BUTTON =====*/
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/*===== ENHANCED PROJECT CARDS =====*/
const projectCards = document.querySelectorAll('.project__card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

/*===== SMOOTH SCROLL FOR ANCHOR LINKS =====*/
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

/*===== PARALLAX EFFECT FOR HOME SECTION =====*/
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeImg = document.querySelector('.home__img');
    if (homeImg && scrolled < window.innerHeight) {
        homeImg.style.transform = `translateY(${scrolled * 0.5}px)`;
        homeImg.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

/*===== ENHANCED CONTACT FORM VALIDATION =====*/
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const inputs = this.querySelectorAll('.contact__input');
        let isValid = true;

        inputs.forEach(input => {
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = '#ff4444';
                } else {
                    input.style.borderColor = 'var(--first-color)';
                }
            } else if (input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = '#ff4444';
            } else {
                input.style.borderColor = 'transparent';
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all fields correctly.');
        }
    });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
sr.reveal('.project__card', {interval: 100, origin: 'bottom'});
sr.reveal('.platforms__container a', {interval: 100, origin: 'bottom'});

/*===== CURSOR EFFECT (Optional Enhancement) =====*/
const createCursorEffect = () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--first-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.display = 'block';
    });

    document.querySelectorAll('a, button, .project__card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'rgba(138, 43, 226, 0.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'transparent';
        });
    });
};

// Uncomment to enable cursor effect (may conflict with some browsers)
// createCursorEffect(); 
