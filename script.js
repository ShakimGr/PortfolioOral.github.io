// Smooth scrolling for navigation links
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

// Active navigation link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Add interactive effects to sidebar contact items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('click', function() {
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(139, 92, 246, 0.4);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: 20px;
            height: 20px;
            left: 50%;
            top: 50%;
            margin-left: -10px;
            margin-top: -10px;
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
        `;
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add hover effects to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#4a9eff';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#444';
    });
});

// Add loading animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Animate sidebar
    sidebar.style.transform = 'translateX(-100%)';
    sidebar.style.transition = 'transform 0.8s ease-out';
    
    setTimeout(() => {
        sidebar.style.transform = 'translateX(0)';
    }, 200);
    
    // Animate main content
    mainContent.style.opacity = '0';
    mainContent.style.transform = 'translateX(50px)';
    mainContent.style.transition = 'all 0.8s ease-out';
    
    setTimeout(() => {
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateX(0)';
    }, 400);
});

// Add scroll effect for navigation
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.padding = '1rem 2rem';
        navbar.style.borderRadius = '15px';
        navbar.style.transition = 'all 0.3s ease';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.padding = '0';
        navbar.style.borderRadius = '0';
    }
});

// Add typing effect for the title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect after page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        const titleElement = document.querySelector('.title');
        const originalText = titleElement.textContent;
        typeWriter(titleElement, originalText, 80);
    }, 1000);
});

// Add particle effect on element click
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const colors = ['#8B5CF6', '#A855F7', '#C084FC', '#ffffff'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            pointer-events: none;
            z-index: 9999;
            animation: particle-float 1.2s ease-out forwards;
            box-shadow: 0 0 10px ${colors[Math.floor(Math.random() * colors.length)]};
        `;
        
        document.body.appendChild(particle);
        
        // Random direction
        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 60;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--vx', vx + 'px');
        particle.style.setProperty('--vy', vy + 'px');
        
        setTimeout(() => {
            particle.remove();
        }, 1200);
    }
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-float {
        to {
            transform: translate(var(--vx), var(--vy));
            opacity: 0;
        }
    }
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Enhanced contact item interactions
contactItems.forEach(item => {
    item.addEventListener('click', function() {
        createParticles(this);
    });
});

// Add interactive effects to skill cards (same as contact-item)
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('click', function() {
        // Ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(139, 92, 246, 0.4);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            width: 20px;
            height: 20px;
            left: 50%;
            top: 50%;
            margin-left: -10px;
            margin-top: -10px;
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.6);
        `;
        this.style.position = 'relative';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        // Particle effect
        createParticles(this);
    });
});
// Contenu des articles
const articlesData = {
    ai: {
        title: "Impact de l’IA sur la cybersécurité",
        content: `
            <h3>Avantages</h3>
            <ul>
                <li>Détection rapide des menaces</li>
                <li>Automatisation des réponses</li>
                <li>Analyse prédictive</li>
            </ul>
            <h3>Risques</h3>
            <ul>
                <li>Exploitation par des attaquants</li>
                <li>Biais dans les modèles</li>
                <li>Dépendance accrue</li>
            </ul>
        `
    },
    cloud: {
        title: "Sécurité du Cloud",
        content: `
            <h3>Principaux risques</h3>
            <ul>
                <li>Fuite de données</li>
                <li>Mauvaise configuration</li>
                <li>Attaques internes</li>
            </ul>
            <h3>Bonnes pratiques</h3>
            <ul>
                <li>Chiffrement des données</li>
                <li>Contrôle des accès</li>
                <li>Surveillance continue</li>
            </ul>
        `
    },
    "5g": {
        title: "Sécurité des réseaux 5G",
        content: `
            <h3>Nouveaux vecteurs de risque</h3>
            <ul>
                <li>Network Slicing</li>
                <li>Edge Computing</li>
                <li>Massive IoT</li>
                <li>Virtualisation</li>
            </ul>
            <h3>Mesures de protection</h3>
            <ul>
                <li>Zero Trust</li>
                <li>Sécurisation du slicing</li>
                <li>Monitoring avancé</li>
                <li>Chiffrement bout en bout</li>
            </ul>
        `
    }
};

// Sélection des éléments du DOM
const modal = document.getElementById("articleModal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");
const articles = document.querySelectorAll(".article-card");
const categoryButtons = document.querySelectorAll(".category-btn");

// Ouvrir le modal avec le contenu de l’article
articles.forEach(article => {
    article.addEventListener("click", () => {
        const articleKey = article.getAttribute("data-article");
        const articleData = articlesData[articleKey];
        modalTitle.innerHTML = articleData.title;
        modalBody.innerHTML = articleData.content;
        modal.style.display = "block";
    });
});

// Fermer le modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer le modal si clic à l’extérieur
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Filtrage par catégorie
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        articles.forEach(article => {
            if (category === "all" || article.getAttribute("data-category") === category) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});
