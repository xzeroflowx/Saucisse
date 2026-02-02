// ========================================
// GESTION DU BOUTON RETOUR EN HAUT
// ========================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    smoothScrollTo(0, 800);
});

// ========================================
// GESTION DU SCROLLSPY (OPTIMISÉE)
// ========================================
document.body.addEventListener('activate.bs.scrollspy', function (e) {
    console.log('Section active :', e.relatedTarget);
    
    // Animation fluide lors du changement de section
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        activeLink.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        activeLink.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            activeLink.style.transform = 'scale(1.05)';
        }, 400);
    }
    
    document.querySelectorAll('.nav-link:not(.active)').forEach(link => {
        link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        link.style.transform = 'scale(1)';
    });
});

// ========================================
// ANIMATION DES BARRES DE COMPÉTENCES
// ========================================
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

window.addEventListener('load', animateSkillBars);

// ========================================
// ANIMATION AU SCROLL (FADE IN)
// ========================================
function setupScrollAnimations() {
    const cards = document.querySelectorAll('.content-card, .info-card, .veille-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease-out';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
}

window.addEventListener('load', setupScrollAnimations);

// ========================================
// EFFET PARALLAXE LÉGER SUR LE HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.getElementById('apropos');
    
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// NAVIGATION RESPONSIVE - FERMETURE AUTO
// ========================================
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

// ========================================
// EFFET DE TYPING SUR LE TITRE HERO
// ========================================
function typewriterEffect() {
    const heroName = document.querySelector('.hero-name');
    if (!heroName) return;
    
    const originalText = heroName.textContent;
    heroName.textContent = '';
    heroName.style.borderRight = '3px solid white';
    
    let i = 0;
    const speed = 100;
    
    function type() {
        if (i < originalText.length) {
            heroName.textContent += originalText.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                heroName.style.borderRight = 'none';
            }, 500);
        }
    }
    
    setTimeout(type, 500);
}

window.addEventListener('load', typewriterEffect);

// ========================================
// COMPTEUR ANIMÉ POUR LES STATISTIQUES
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (target > 1 ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

function setupCounterAnimations() {
    const statItems = document.querySelectorAll('.stat-item h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    element.textContent = '0';
                    animateCounter(element, number);
                }
                
                observer.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    statItems.forEach(item => observer.observe(item));
}

window.addEventListener('load', setupCounterAnimations);

// ========================================
// EFFET HOVER SUR LES TECH BADGES
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const techBadges = document.querySelectorAll('.tech-badge');
    
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ========================================
// SMOOTH SCROLL AMÉLIORÉ AVEC EASING
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            smoothScrollTo(offsetTop, 800);
        }
    });
});

// Fonction de scroll fluide personnalisée
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function (ease-in-out)
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ========================================
// DÉTECTION DE LA SECTION ACTIVE (OPTIMISÉE)
// ========================================
let ticking = false;

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 150;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1);
        
        if (href === currentSection) {
            if (!link.classList.contains('active')) {
                link.classList.add('active');
                link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            }
        } else {
            link.classList.remove('active');
        }
    });
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);
window.addEventListener('load', updateActiveSection);

// ========================================
// ANIMATION DES CARTES AU SURVOL
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.content-card, .info-card, .veille-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ========================================
// PRÉCHARGEMENT
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    const heroSection = document.getElementById('apropos');
    if (heroSection) {
        heroSection.style.opacity = '0';
        setTimeout(() => {
            heroSection.style.transition = 'opacity 1s ease-in';
            heroSection.style.opacity = '1';
        }, 100);
    }
});

// ========================================
// GESTION DES ERREURS
// ========================================
window.addEventListener('error', (e) => {
    console.error('Erreur détectée:', e.error);
});

// ========================================
// CONSOLE LOG ARTISTIQUE
// ========================================
console.log('%c🚀 Portfolio BTS SIO', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cDéveloppé avec ❤️ et Bootstrap', 'font-size: 14px; color: #8b5cf6;');
console.log('%cScrollspy activé ✓', 'font-size: 12px; color: #22c55e;');
