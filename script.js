document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 100
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Random quotes with fade effect
    const quotes = [
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Innovation distinguishes between a leader and a follower.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "The only way to do great work is to love what you do."
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('random-quote').textContent = `"${randomQuote}"`;

    // Services data
    const services = [
        { icon: "fas fa-handshake", emoji: "🤝", title: "Consultancy", description: "Expert guidance in business strategies and growth" },
        { icon: "fas fa-bullhorn", emoji: "📢", title: "Digital Marketing", description: "Comprehensive digital marketing solutions" },
        { icon: "fas fa-code", emoji: "💻", title: "Web Development", description: "Custom website development services" },
        { icon: "fas fa-palette", emoji: "🎨", title: "Website Design", description: "Creative and responsive website designs" },
        { icon: "fab fa-instagram", emoji: "📱", title: "Social Media Marketing", description: "Strategic social media management" },
        { icon: "fab fa-youtube", emoji: "🎥", title: "YouTube Ads", description: "Effective YouTube advertising campaigns" },
        { icon: "fab fa-google", emoji: "🔍", title: "Google Ads", description: "Results-driven Google advertising" },
        { icon: "fas fa-mobile-alt", emoji: "📱", title: "App Development", description: "Custom mobile application development" },
        { icon: "fab fa-telegram", emoji: "✈️", title: "Telegram Bots", description: "Automated Telegram bot solutions" },
        { icon: "fas fa-brain", emoji: "🧠", title: "NLP Sessions", description: "Neuro-linguistic programming sessions with Habibur Rahman", link: "https://www.instagram.com/habib_frames/", linkText: "DM for details" },
        { icon: "fas fa-user-graduate", emoji: "👨‍🏫", title: "Mentorship Sessions", description: "Personal growth sessions with Habibur Rahman", link: "https://www.instagram.com/habib_frames/", linkText: "DM for details" }
    ];

    // Render services
    const servicesGrid = document.getElementById('services-grid');
    services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.setAttribute('data-aos', 'zoom-in-up');
        serviceCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        let cardContent = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
                <span class="service-emoji">${service.emoji}</span>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        
        if (service.link) {
            cardContent += `
                <a href="${service.link}" target="_blank" class="service-link">
                    ${service.linkText} <i class="fas fa-arrow-right"></i>
                </a>
            `;
        }
        
        serviceCard.innerHTML = cardContent;
        servicesGrid.appendChild(serviceCard);
    });

    // Add team compliments
    const teamCompliments = {
        'habib-compliment': "🌟 Global Digital Marketing Virtuoso",
        'aftab-compliment': "💫 Innovation Leadership Pioneer",
        'zishan-compliment': "⚡ Growth Strategy Maven"
    };

    Object.entries(teamCompliments).forEach(([id, text]) => {
        const element = document.getElementById(id);
        if (element) {
            element.className = 'team-compliment';
            element.textContent = text;
        }
    });

    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});