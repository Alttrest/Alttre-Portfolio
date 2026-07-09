// ================= PROJECT DATA ================= //
const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: "NexusAI-PhoneAgent",
        category: "Mobile AI",
        tag: "New / Active",
        shortDesc: "React Native and Expo based mobile AI assistant.",
        description: "NexusAI-PhoneAgent is an advanced artificial intelligence assistant running on your smartphone. Developed with React Native and Expo, this system coordinates user operations on the device and offers a personalized mobile experience with background LLM integration.",
        technologies: ["React Native", "Expo", "TypeScript", "LLM APIs", "JSON-RPC"],
        gradient: "linear-gradient(135deg, #e6dcc4 0%, #d46a43 100%)",
        icon: "📱",
        image: "assets/nexusai_phone.png",
        github: "https://github.com/Alttrest/NexusAI-PhoneAgent",
        live: null
    },
    {
        id: 2,
        title: "AI-POST Ecosystem",
        category: "AI Automation",
        tag: "Autonomous",
        shortDesc: "AI-powered social media automation, posting, and management tool suite.",
        description: "AI-POST is an autonomous agent ecosystem that manages social media content planning, image and text generation, and automatic posting workflows end-to-end. Powered by API integrations, it analyzes trends and creates content without human intervention.",
        technologies: ["Python", "Flask", "Gemini API", "Playwright", "Docker"],
        gradient: "linear-gradient(135deg, #FAF6EE 0%, #5e7060 100%)",
        icon: "🤖",
        image: "assets/ai_post_ecosystem.png",
        github: "https://github.com/Alttrest/AI-POST",
        live: null
    },
    {
        id: 3,
        title: "NexusAI-Agent",
        category: "Desktop AI",
        tag: "Advanced",
        shortDesc: "Electron and React based desktop AI operator (Flux-Agent series).",
        description: "NexusAI-Agent is an advanced desktop AI assistant that runs locally or in the cloud to automate operating system-level tasks. Using ReAct (Reasoning and Acting) architecture, it can manage files, execute terminal actions, and navigate the web on behalf of the user.",
        technologies: ["Electron", "React", "Node.js", "Python", "ReAct Framework"],
        gradient: "linear-gradient(135deg, #f3ece0 0%, #1e1b18 100%)",
        icon: "🧠",
        image: "assets/nexusai_agent.png",
        github: "https://github.com/Alttrest/NexusAI-Agent",
        live: null
    },
    {
        id: 4,
        title: "Ven-s-Finder",
        category: "Cyber Intel & OSINT",
        tag: "Fast",
        shortDesc: "Python-based person search engine using Groq AI and DuckDuckGo search API.",
        description: "Ven-s-Finder is a query-driven open source intelligence (OSINT) tool that searches and analyzes public information on the web. It queries DuckDuckGo APIs and processes retrieved data using Groq AI to build structured profiles and reports.",
        technologies: ["Python", "Groq AI", "DuckDuckGo API", "BeautifulSoup"],
        gradient: "linear-gradient(135deg, #e8dec9 0%, #8e8274 100%)",
        icon: "🔍",
        image: "assets/vens_finder.png",
        github: "https://github.com/Alttrest/Ven-s-Finder",
        live: null
    },
    {
        id: 5,
        title: "FBMTAL Chat & AlttreHub",
        category: "Real-Time Comms",
        tag: "WebSockets",
        shortDesc: "WebSockets, Socket.io, and Flask based real-time chat infrastructure.",
        description: "FBMTAL Chat is a secure, high-speed instant messaging platform designed for local school networks using Socket.io. Chat rooms, user accounts, and real-time push notifications are fully managed by a robust Flask backend.",
        technologies: ["Flask", "Socket.io", "WebSockets", "JavaScript", "HTML/CSS"],
        gradient: "linear-gradient(135deg, #f3ece0 0%, #5e7060 100%)",
        icon: "💬",
        image: "assets/fbmtal_chat.png",
        github: "https://github.com/Alttrest",
        live: null
    },
    {
        id: 6,
        title: "Mini Sumo Robot",
        category: "Robotics & Embedded",
        tag: "Award Winning 🏆",
        shortDesc: "Autonomous mini sumo robot project, winner of the Fibonacci Robot Cup Jury Special Award.",
        description: "An autonomous decision-making mini sumo robot that won the Jury Special Award at the Fibonacci Robotics Tournament. Built using C++ on Arduino architecture, the code processes infrared and distance sensor data hundreds of times per second (sensor fusion) to calculate optimal motor torque and tactical push strategies to defeat opponents.",
        technologies: ["C/C++", "Arduino", "Sensor Fusion", "Motor Drivers", "Li-Po Power"],
        gradient: "linear-gradient(135deg, #FAF6EE 0%, #DA291C 100%)",
        icon: "⚙️",
        image: "assets/sumo_robot.png",
        github: "https://github.com/Alttrest",
        live: null
    },
    {
        id: 7,
        title: "Hype-NEWS",
        category: "AI Media",
        tag: "Dynamic",
        shortDesc: "AI-powered interactive news station platform.",
        description: "Hype-NEWS is an innovative web portal that parses global internet feeds and uses AI models to generate unbiased, summarized, and interactive news. Users can prompt the AI to rewrite articles based on custom tones or topics.",
        technologies: ["JavaScript", "Flask", "Gemini API", "HTML5", "CSS Grid"],
        gradient: "linear-gradient(135deg, #e6dcc4 0%, #D46A43 100%)",
        icon: "📰",
        image: "assets/hype_news.png",
        github: "https://github.com/Alttrest/Hype-NEWS",
        live: null
    },
    {
        id: 8,
        title: "StartupCMD",
        category: "Desktop Utility",
        tag: "New",
        shortDesc: "Electron application to list, document, and manage Windows startup processes.",
        description: "StartupCMD is a professional desktop tool that scans command line arguments, scripts, and applications starting automatically with Windows. It explains startup impacts using AI assistance and manages startup behavior via PowerShell integrations.",
        technologies: ["Electron", "JavaScript", "HTML/CSS", "PowerShell API"],
        gradient: "linear-gradient(135deg, #f3ece0 0%, #1e1b18 100%)",
        icon: "⚙️",
        image: "assets/startupcmd.png",
        github: "https://github.com/Alttrest/startupcmd1",
        live: null
    },
    {
        id: 9,
        title: "Web OS",
        category: "Web Application",
        tag: "Dynamic",
        shortDesc: "Browser-based autonomous web operating system simulator written in JavaScript.",
        description: "Web OS is a full-featured browser-based OS simulator featuring drag-and-drop windows, custom terminal utilities, web apps, and virtual filesystem controllers.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Vite"],
        gradient: "linear-gradient(135deg, #e8dec9 0%, #5e7060 100%)",
        icon: "🌐",
        image: "assets/web_os.png",
        github: "https://github.com/Alttrest/web-os",
        live: null
    },
    {
        id: 10,
        title: "scroll-animation",
        category: "Web Animation",
        tag: "Visual",
        shortDesc: "High-performance web scroll animation library reactive to viewport scroll inputs.",
        description: "Scroll Animation is an ultra-lightweight scroll-driven web layout engine built using CSS 3D transforms instead of heavy JavaScript physics engines.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Scroll Handling"],
        gradient: "linear-gradient(135deg, #e6dcc4 0%, #d46a43 100%)",
        icon: "✨",
        image: "assets/scroll_animation.png",
        github: "https://github.com/Alttrest/scroll-animation",
        live: null
    },
    {
        id: 11,
        title: "Sefa Engineering",
        category: "Corporate Showcase",
        tag: "Completed",
        shortDesc: "Modern, minimalist corporate website designed for Sefa Mühendislik.",
        description: "A fast, SEO-friendly, and modern showcase site built from scratch to represent Sefa Mühendislik's corporate brand. Focuses on responsiveness, accessibility, and high performance.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        gradient: "linear-gradient(135deg, #f3ece0 0%, #8e8274 100%)",
        icon: "🏗️",
        image: "assets/sefa_muhendislik.png",
        github: "https://github.com/Alttrest",
        live: "https://sefamuhendislik.com"
    },
    {
        id: 12,
        title: "ar-furniture-viewer (3D-Furniture)",
        category: "Augmented Reality (AR)",
        tag: "New / Public",
        shortDesc: "Immersive WebXR furniture visualizer enabling users to view 3D models in their space before buying.",
        description: "ar-furniture-viewer is a web-based augmented reality (WebXR) app that allows users to place and view real-scale 3D furniture models inside their rooms prior to purchasing.",
        technologies: ["Three.js", "WebXR", "Model-Viewer", "JavaScript", "HTML/CSS"],
        gradient: "linear-gradient(135deg, #e8dec9 0%, #d46a43 100%)",
        icon: "🛋️",
        image: "assets/ar_furniture.png",
        github: "https://github.com/Alttrest/ar-furniture-viewer",
        live: "https://3d-furniture-viewer.vercel.app"
    },
    {
        id: 13,
        title: "İş-Bul (Job-Finder)",
        category: "Jobs & Careers",
        tag: "Istanbul · Active",
        shortDesc: "Modern job matching and career tracker application developed for job seekers.",
        description: "İş-Bul is a modern platform connecting job seekers with recruiters, featuring smart filter queries and job tracking boards. Developed with Istanbul-focused scope. I am actively seeking internships and career opportunities in software development — feel free to reach out!",
        technologies: ["JavaScript", "HTML5", "CSS3", "Vercel"],
        gradient: "linear-gradient(135deg, #EEF2FF 0%, #3B4DC8 100%)",
        icon: "💼",
        image: "assets/isbul.png",
        github: "https://github.com/Alttrest",
        live: "https://is-bul.vercel.app"
    }
];

let projects = JSON.parse(localStorage.getItem("portfolio_projects")) || [...DEFAULT_PROJECTS];

function saveProjects() {
    localStorage.setItem("portfolio_projects", JSON.stringify(projects));
}

// ================= GLOBAL STATE ================= //
let activeIndex = 0;
let isScrollThrottled = false;
let startTouchY = 0;
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let cursorRing = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

// ================= CUSTOM CURSOR SYSTEM (TRACKPOINT RED) ================= //
const cursor = document.getElementById("customCursor");
const cursorDot = document.getElementById("customCursorDot");

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    cursorDot.style.left = `${mouse.x}px`;
    cursorDot.style.top = `${mouse.y}px`;
});

function updateCursorRing() {
    cursorRing.x += (mouse.x - cursorRing.x) * 0.15;
    cursorRing.y += (mouse.y - cursorRing.y) * 0.15;
    
    cursor.style.left = `${cursorRing.x}px`;
    cursor.style.top = `${cursorRing.y}px`;
    
    requestAnimationFrame(updateCursorRing);
}
updateCursorRing();

function setupCursorHovers() {
    const interactiveElements = document.querySelectorAll("a, button, .project-card, .nav-btn, .info-panel-close-btn");
    
    interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
    });
}

function handleMouseEnter() {
    cursor.classList.add("hovered");
    cursorDot.classList.add("hovered");
}

function handleMouseLeave() {
    cursor.classList.remove("hovered");
    cursorDot.classList.remove("hovered");
}

window.addEventListener("mousedown", () => {
    cursor.classList.add("clicked");
});

window.addEventListener("mouseup", () => {
    cursor.classList.remove("clicked");
});


const introLines = [
    "Hello, I'm Ali Turan (Alttre).",
    "I'm an Information Technology student and software developer.",
    "I build web systems from scratch, custom embedded hardware, and AI agents.",
    "I am also the co-founder of Nebula Team.",
    "Ready to explore? Scroll down or click Explore..."
];

const typewriterText = document.getElementById("typewriterText");
const exploreBtn = document.getElementById("exploreBtn");
const introActionContainer = document.querySelector(".intro-action-container");
const introScrollPrompt = document.getElementById("introScrollPrompt");

let currentLineIndex = 0;
let currentCharIndex = 0;
let typewriterBuffer = "";

function typeNextChar() {
    if (currentLineIndex < introLines.length) {
        const currentLine = introLines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
            typewriterBuffer += currentLine.charAt(currentCharIndex);
            typewriterText.textContent = typewriterBuffer;
            currentCharIndex++;
            setTimeout(typeNextChar, 25 + Math.random() * 30);
        } else {
            typewriterBuffer += "\n";
            currentLineIndex++;
            currentCharIndex = 0;
            setTimeout(typeNextChar, 600);
        }
    } else {
        // Typing finished! Fade in button & scroll prompt
        introActionContainer.classList.add("visible");
        if (introScrollPrompt) {
            introScrollPrompt.classList.add("visible");
        }
        setupCursorHovers();
    }
}

// Horizontal slide transition trigger
const introSection = document.getElementById("introSection");
const portfolioSection = document.getElementById("portfolioSection");

function triggerTransition() {
    if (introSection.classList.contains("dismissed")) return;
    
    introSection.classList.add("dismissed");
    portfolioSection.classList.add("active");
    
    localStorage.setItem("portfolio_transitioned", "true");
    
    renderDeck();
    updateDeckLayout();
    setTimeout(setupCursorHovers, 500);
    
    // Automatically load new projects from GitHub in the background
    fetchGithubProjects();
}

// Start typewriter on load or restore transitioned state
function initPortfolio() {
    updateAdminNavButton();
    const transitioned = localStorage.getItem("portfolio_transitioned");
    if (transitioned === "true") {
        // Skip typewriter animation
        introSection.style.transition = "none";
        portfolioSection.style.transition = "none";
        introSection.classList.add("dismissed");
        portfolioSection.classList.add("active");
        
        renderDeck();
        updateDeckLayout();
        
        setTimeout(() => {
            introSection.style.transition = "";
            portfolioSection.style.transition = "";
            setupCursorHovers();
        }, 50);
        
        // Fetch new projects in background
        fetchGithubProjects();
    } else {
        setTimeout(typeNextChar, 1000);
    }
}

if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initPortfolio);
} else {
    initPortfolio();
}

exploreBtn.addEventListener("click", triggerTransition);


// ================= DYNAMIC 3D CARD DECK CAROUSEL ================= //
const projectDeck = document.getElementById("projectDeck");
const deckBullets = document.getElementById("deckBullets");
const projectTagline = document.getElementById("projectTagline");

function renderDeck() {
    projectDeck.innerHTML = "";
    deckBullets.innerHTML = "";
    
    projects.forEach((proj, index) => {
        const card = document.createElement("div");
        card.className = `project-card ${index === activeIndex ? 'active' : ''}`;
        card.dataset.index = index;
        
        const tagClass = proj.tag.includes("Ödüllü") || proj.tag.includes("Yeni") ? "card-tag highlight" : "card-tag";
        
        card.innerHTML = `
            <div class="card-visual" style="background: ${proj.gradient}">
                <span class="card-tag ${tagClass}">${proj.tag}</span>
                ${proj.image ? `<img class="card-img" src="${proj.image}" alt="${proj.title}">` : ''}
                <div class="card-graphic card-img-fallback" style="display: ${proj.image ? 'none' : 'flex'};">${proj.icon}</div>
            </div>
            <div class="card-details">
                <div>
                    <span class="card-category">${proj.category}</span>
                    <div class="card-title-row">
                        <h3 class="card-title">${proj.title}</h3>
                    </div>
                    <p class="card-intro-desc">${proj.shortDesc}</p>
                </div>
                <div class="card-footer">
                    <span class="card-stack">${proj.technologies.slice(0, 3).join(" · ")}</span>
                    <span class="card-action-hint">Açıklama &rarr;</span>
                </div>
            </div>
        `;
        
        // Programmatic image fallback (reliable across all browsers)
        if (proj.image) {
            const imgEl = card.querySelector(".card-img");
            const fallbackEl = card.querySelector(".card-img-fallback");
            if (imgEl && fallbackEl) {
                imgEl.addEventListener("error", () => {
                    imgEl.style.display = "none";
                    fallbackEl.style.display = "flex";
                });
            }
        }
        
        card.addEventListener("click", () => {
            if (index === activeIndex) {
                openProjectDetails(proj);
            }
        });
        
        projectDeck.appendChild(card);
        
        const bullet = document.createElement("div");
        bullet.className = `bullet ${index === activeIndex ? 'active' : ''}`;
        bullet.dataset.index = index;
        bullet.addEventListener("click", () => {
            activeIndex = index;
            updateDeckLayout();
        });
        deckBullets.appendChild(bullet);
    });
}

function updateDeckLayout() {
    const cards = document.querySelectorAll(".project-card");
    const bullets = document.querySelectorAll(".bullet");
    
    cards.forEach((card, index) => {
        const diff = index - activeIndex;
        card.className = `project-card ${index === activeIndex ? 'active' : ''}`;
        
        if (diff === 0) {
            card.style.transform = `translate3d(0, 0, 0) scale(1) rotateY(0deg)`;
            card.style.opacity = "1";
            card.style.zIndex = "10";
            card.style.pointerEvents = "auto";
        } else if (diff === -1) {
            card.style.transform = `translate3d(-110%, 0, -200px) scale(0.82) rotateY(32deg)`;
            card.style.opacity = "0.55";
            card.style.zIndex = "5";
            card.style.pointerEvents = "none";
        } else if (diff === 1) {
            card.style.transform = `translate3d(110%, 0, -200px) scale(0.82) rotateY(-32deg)`;
            card.style.opacity = "0.55";
            card.style.zIndex = "5";
            card.style.pointerEvents = "none";
        } else if (diff < -1) {
            card.style.transform = `translate3d(-200%, 0, -450px) scale(0.65) rotateY(55deg)`;
            card.style.opacity = "0";
            card.style.zIndex = "1";
            card.style.pointerEvents = "none";
        } else if (diff > 1) {
            card.style.transform = `translate3d(200%, 0, -450px) scale(0.65) rotateY(-55deg)`;
            card.style.opacity = "0";
            card.style.zIndex = "1";
            card.style.pointerEvents = "none";
        }
    });
    
    bullets.forEach((bullet, index) => {
        if (index === activeIndex) {
            bullet.classList.add("active");
        } else {
            bullet.classList.remove("active");
        }
    });
    
    if (projects[activeIndex]) {
        projectTagline.textContent = projects[activeIndex].title;
    }
    
    setupCursorHovers();
}

// Mouse Scroll-wheel handler for both intro page and projects carousel
function handleWheelEvent(e) {
    // 1. If intro section is NOT dismissed, handle page transition via scroll
    if (!introSection.classList.contains("dismissed")) {
        if (currentLineIndex >= introLines.length && e.deltaY > 0) {
            e.preventDefault();
            triggerTransition();
        }
        return;
    }
    
    // Stop if modal overlays are active
    if (document.getElementById("projectDetailsModal").classList.contains("active")) return;
    if (document.getElementById("skillsPanel").classList.contains("active")) return;
    if (document.getElementById("setupPanel").classList.contains("active")) return;
    if (document.getElementById("adminPanel") && document.getElementById("adminPanel").classList.contains("active")) return;
    if (document.getElementById("contactPanel") && document.getElementById("contactPanel").classList.contains("active")) return;
    
    e.preventDefault();
    
    if (isScrollThrottled) return;
    
    isScrollThrottled = true;
    setTimeout(() => { isScrollThrottled = false; }, 850);
    
    if (e.deltaY > 0) {
        if (activeIndex < projects.length - 1) {
            activeIndex++;
        } else {
            activeIndex = 0;
        }
    } else if (e.deltaY < 0) {
        if (activeIndex > 0) {
            activeIndex--;
        } else {
            activeIndex = projects.length - 1;
        }
    }
    
    updateDeckLayout();
}
window.addEventListener("wheel", handleWheelEvent, { passive: false });

// Mobile Swipe (Touch) support for intro and carousel
window.addEventListener("touchstart", (e) => {
    startTouchY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
    // 1. Intro scroll trigger
    if (!introSection.classList.contains("dismissed")) {
        if (currentLineIndex >= introLines.length) {
            const endTouchY = e.changedTouches[0].clientY;
            if (startTouchY - endTouchY > 50) { // swipe up
                triggerTransition();
            }
        }
        return;
    }
    
    if (document.getElementById("projectDetailsModal").classList.contains("active")) return;
    if (document.getElementById("skillsPanel").classList.contains("active")) return;
    if (document.getElementById("setupPanel").classList.contains("active")) return;
    if (document.getElementById("adminPanel") && document.getElementById("adminPanel").classList.contains("active")) return;
    if (document.getElementById("contactPanel") && document.getElementById("contactPanel").classList.contains("active")) return;
    
    const endTouchY = e.changedTouches[0].clientY;
    const diffY = startTouchY - endTouchY;
    
    if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
            if (activeIndex < projects.length - 1) {
                activeIndex++;
            } else {
                activeIndex = 0;
            }
        } else {
            if (activeIndex > 0) {
                activeIndex--;
            } else {
                activeIndex = projects.length - 1;
            }
        }
        updateDeckLayout();
    }
});


// ================= MOUSE TILT PARALLAX EFFECT FOR ACTIVE CARD ================= //
const deckOuter = document.querySelector(".deck-outer-container");

deckOuter.addEventListener("mousemove", (e) => {
    const activeCard = document.querySelector(".project-card.active");
    if (!activeCard) return;
    
    const rect = activeCard.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    
    const offsetX = e.clientX - cardCenterX;
    const offsetY = e.clientY - cardCenterY;
    
    const normX = offsetX / (window.innerWidth / 2);
    const normY = offsetY / (window.innerHeight / 2);
    
    const maxTilt = 18;
    const tiltX = -normY * maxTilt;
    const tiltY = normX * maxTilt;
    
    activeCard.style.transform = `translate3d(0, 0, 15px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
});

deckOuter.addEventListener("mouseleave", () => {
    const activeCard = document.querySelector(".project-card.active");
    if (!activeCard) return;
    activeCard.style.transform = `translate3d(0, 0, 0) scale(1) rotateY(0deg)`;
});


// ================= INTERACTIVE GLOW CANVAS (AMBIENT SYSTEM) ================= //
const canvas = document.getElementById("ambientGlowCanvas");
const ctx = canvas.getContext("2d");

let points = [];
const pointCount = 3;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

for (let i = 0; i < pointCount; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        radius: 250 + Math.random() * 200,
        lag: 0.01 + i * 0.015,
        color: i === 0 ? "rgba(212, 106, 67, 0.07)" : i === 1 ? "rgba(232, 222, 201, 0.25)" : "rgba(94, 112, 96, 0.05)"
    });
}

function animateAmbientCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points[0].targetX = mouse.x;
    points[0].targetY = mouse.y;
    
    for (let i = 1; i < pointCount; i++) {
        if (Math.random() < 0.01) {
            points[i].targetX = mouse.x + (Math.random() - 0.5) * 600;
            points[i].targetY = mouse.y + (Math.random() - 0.5) * 600;
        }
    }
    
    points.forEach(pt => {
        pt.x += (pt.targetX - pt.x) * pt.lag;
        pt.y += (pt.targetY - pt.y) * pt.lag;
        
        const gradient = ctx.createRadialGradient(pt.x, pt.y, 10, pt.x, pt.y, pt.radius);
        gradient.addColorStop(0, pt.color);
        gradient.addColorStop(1, "rgba(250, 246, 238, 0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(animateAmbientCanvas);
}
animateAmbientCanvas();


// ================= MODAL & PANELS MANAGEMENT ================= //
const projectDetailsModal = document.getElementById("projectDetailsModal");
const modalContent = document.getElementById("modalContent");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalOverlay = document.getElementById("modalOverlay");

function openProjectDetails(project) {
    // Deconflict modal overlays
    closeSkillsPanel();
    closeSetupPanel();
    
    const liveLinkMarkup = project.live 
        ? `<a href="${project.live}" target="_blank" class="modal-link-btn">Live Project &nearr;</a>`
        : "";
    
    const heroVisualContent = project.image
        ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <div class="modal-hero-graphic" id="modalHeroGraphic" style="position: relative; z-index: 2; display: none;">${project.icon}</div>`
        : `<div class="modal-hero-graphic" id="modalHeroGraphic" style="position: relative; z-index: 2;">${project.icon}</div>`;
        
    modalContent.innerHTML = `
        <div class="modal-hero" style="background: ${project.gradient}">
            <span class="card-tag highlight">${project.tag}</span>
            ${heroVisualContent}
        </div>
        <div class="modal-body">
            <div class="modal-meta-row">
                <div class="modal-title-area">
                    <span class="modal-category">${project.category}</span>
                    <h2 class="modal-title" id="modalParallaxTitle">${project.title}</h2>
                </div>
                <div class="modal-links">
                    ${liveLinkMarkup}
                    <a href="${project.github}" target="_blank" class="modal-link-btn secondary-link">GitHub Source &nearr;</a>
                </div>
            </div>
            
            <div class="modal-section-grid">
                <div class="modal-desc-panel" id="modalParallaxDesc">
                    <h3 class="modal-section-title">Project Details</h3>
                    <p class="modal-text">${project.description}</p>
                </div>
                <div class="modal-sidebar">
                    <div class="sidebar-box">
                        <h4>Technologies Used</h4>
                        <div class="tech-tags">
                            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                        </div>
                    </div>
                    <div class="sidebar-box">
                        <h4>Developer Signature</h4>
                        <p class="modal-text" style="font-size: 0.85rem; color: var(--text-muted);">This project has been designed and built from scratch by Alttre.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    projectDetailsModal.classList.add("active");
    setupCursorHovers();
    
    projectDetailsModal.addEventListener("mousemove", handleModalParallax);
}

function closeProjectDetails() {
    projectDetailsModal.classList.remove("active");
    projectDetailsModal.removeEventListener("mousemove", handleModalParallax);
    setupCursorHovers();
}

modalCloseBtn.addEventListener("click", closeProjectDetails);
modalOverlay.addEventListener("click", closeProjectDetails);

function handleModalParallax(e) {
    const title = document.getElementById("modalParallaxTitle");
    const desc = document.getElementById("modalParallaxDesc");
    const graphic = document.getElementById("modalHeroGraphic");
    
    if (!title || !desc) return;
    
    const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    
    if (graphic) {
        graphic.style.transform = `translate3d(${normX * -35}px, ${normY * -35}px, 0) scale(1.08)`;
    }
    title.style.transform = `translate3d(${normX * 15}px, ${normY * 8}px, 0)`;
    desc.style.transform = `translate3d(${normX * 8}px, ${normY * 4}px, 0)`;
}


// ================= INFO SUB-PANELS (SKILLS, SETUP, ADMIN, CONTACT) ================= //
const skillsPanel = document.getElementById("skillsPanel");
const setupPanel = document.getElementById("setupPanel");
const adminPanel = document.getElementById("adminPanel");
const contactPanel = document.getElementById("contactPanel");

const navSkillsBtn = document.getElementById("navSkillsBtn");
const navSetupBtn = document.getElementById("navSetupBtn");
const navProjectsBtn = document.getElementById("navProjectsBtn");
const navContactBtn = document.getElementById("navContactBtn");
const navHomeBtn = document.getElementById("navHomeBtn");

const skillsCloseBtn = document.getElementById("skillsCloseBtn");
const setupCloseBtn = document.getElementById("setupCloseBtn");
const skillsOverlay = document.getElementById("skillsOverlay");
const setupOverlay = document.getElementById("setupOverlay");

const adminCloseBtn = document.getElementById("adminCloseBtn");
const adminOverlay = document.getElementById("adminOverlay");

const contactCloseBtn = document.getElementById("contactCloseBtn");
const contactOverlay = document.getElementById("contactOverlay");

// Home/Intro Transition
if (navHomeBtn) {
    navHomeBtn.addEventListener("click", () => {
        goBackToIntro();
    });
}

function goBackToIntro() {
    closeSkillsPanel();
    closeSetupPanel();
    closeAdminPanel();
    closeContactPanel();
    closeProjectDetails();
    stopSkillsGraph();
    
    localStorage.removeItem("portfolio_transitioned");
    
    portfolioSection.classList.remove("active");
    introSection.classList.remove("dismissed");
    
    // Reset Typewriter Animation
    currentLineIndex = 0;
    currentCharIndex = 0;
    typewriterBuffer = "";
    typewriterText.textContent = "";
    introActionContainer.classList.remove("visible");
    if (introScrollPrompt) introScrollPrompt.classList.remove("visible");
    
    setTimeout(typeNextChar, 1000);
}

// Skills Panel Actions
navSkillsBtn.addEventListener("click", () => {
    closeSetupPanel(); // Close setup first
    closeAdminPanel(); // Close admin panel
    closeContactPanel(); // Close contact panel
    closeProjectDetails();
    
    skillsPanel.classList.add("active");
    setActiveNav(navSkillsBtn);
    setTimeout(startSkillsGraph, 700);
});

skillsCloseBtn.addEventListener("click", () => {
    closeSkillsPanel();
    stopSkillsGraph();
});
skillsOverlay.addEventListener("click", () => {
    closeSkillsPanel();
    stopSkillsGraph();
});

function closeSkillsPanel() {
    skillsPanel.classList.remove("active");
    resetActiveNav();
}

// Setup Panel Actions
navSetupBtn.addEventListener("click", () => {
    closeSkillsPanel(); // Close skills first
    closeAdminPanel(); // Close admin panel
    closeContactPanel(); // Close contact panel
    closeProjectDetails();
    stopSkillsGraph();
    
    setupPanel.classList.add("active");
    setActiveNav(navSetupBtn);
});

setupCloseBtn.addEventListener("click", closeSetupPanel);
setupOverlay.addEventListener("click", closeSetupPanel);

function closeSetupPanel() {
    setupPanel.classList.remove("active");
    resetActiveNav();
}

// Contact Panel Actions
if (navContactBtn) {
    navContactBtn.addEventListener("click", () => {
        closeSkillsPanel();
        closeSetupPanel();
        closeAdminPanel();
        closeProjectDetails();
        stopSkillsGraph();
        
        contactPanel.classList.add("active");
        setActiveNav(navContactBtn);
    });
}

if (contactCloseBtn) contactCloseBtn.addEventListener("click", closeContactPanel);
if (contactOverlay) contactOverlay.addEventListener("click", closeContactPanel);

function closeContactPanel() {
    if (contactPanel) {
        contactPanel.classList.remove("active");
    }
    resetActiveNav();
}

// Admin Panel Actions
if (adminCloseBtn) adminCloseBtn.addEventListener("click", closeAdminPanel);
if (adminOverlay) adminOverlay.addEventListener("click", closeAdminPanel);

function closeAdminPanel() {
    if (adminPanel) {
        adminPanel.classList.remove("active");
    }
    resetActiveNav();
}

navProjectsBtn.addEventListener("click", () => {
    closeSkillsPanel();
    closeSetupPanel();
    closeAdminPanel();
    closeContactPanel();
    stopSkillsGraph();
    setActiveNav(navProjectsBtn);
});

function setActiveNav(activeBtn) {
    document.querySelectorAll("#portfolioNav .nav-btn, #portfolioNav .nav-contact-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    if (activeBtn) activeBtn.classList.add("active");
    setupCursorHovers();
}

function resetActiveNav() {
    const isSkillsActive = skillsPanel && skillsPanel.classList.contains("active");
    const isSetupActive = setupPanel && setupPanel.classList.contains("active");
    const isAdminActive = adminPanel && adminPanel.classList.contains("active");
    const isContactActive = contactPanel && contactPanel.classList.contains("active");
    
    if (!isSkillsActive && !isSetupActive && !isAdminActive && !isContactActive) {
        setActiveNav(navProjectsBtn);
    }
}


// ================= OBSIDIAN-STYLE INTERACTIVE NODE GRAPH SYSTEM ================= //
let graphCanvas = null;
let graphCtx = null;
let graphAnimationId = null;
let gNodes = [];
let gLinks = [];
let dragNode = null;
let hoverNode = null;
let graphMouse = { x: 0, y: 0 };

const skillNodesData = [
    // Center Node
    { id: "root", label: "Ali Turan (Alttre)", type: "root", size: 14 },
    
    // Category Nodes
    { id: "cat-lang", label: "Programming Languages", type: "category", size: 10 },
    { id: "cat-ai", label: "Yapay Zeka (AI)", type: "category", size: 10 },
    { id: "cat-framework", label: "Framework & Server", type: "category", size: 10 },
    { id: "cat-hardware", label: "Hardware & Lab", type: "category", size: 10 },
    { id: "cat-system", label: "Systems & Utilities", type: "category", size: 10 },
    
    // Languages
    { id: "python", label: "Python", type: "skill", size: 7 },
    { id: "cpp", label: "C++", type: "skill", size: 7 },
    { id: "javascript", label: "JavaScript", type: "skill", size: 7 },
    { id: "htmlcss", label: "HTML5 / CSS3", type: "skill", size: 7 },
    { id: "bash", label: "Bash / Zsh", type: "skill", size: 6 },
    
    // AI
    { id: "llm", label: "LLM API", type: "skill", size: 7 },
    { id: "prompt", label: "Prompt Engineering", type: "skill", size: 7 },
    { id: "agents", label: "ReAct Agents", type: "skill", size: 7 },
    { id: "playwright", label: "Playwright", type: "skill", size: 6 },
    
    // Frameworks
    { id: "flask", label: "Flask", type: "skill", size: 7 },
    { id: "socket", label: "Socket.io / WebSockets", type: "skill", size: 7 },
    { id: "expo", label: "Expo / React Native", type: "skill", size: 7 },
    { id: "nodejs", label: "Node.js", type: "skill", size: 7 },
    
    // Hardware
    { id: "arduino", label: "Arduino", type: "skill", size: 7 },
    { id: "pixhawk", label: "Pixhawk / ArduPilot", type: "skill", size: 7 },
    { id: "circuit", label: "Circuit Design", type: "skill", size: 6 },
    { id: "soldering", label: "Soldering", type: "skill", size: 6 },
    { id: "power", label: "Li-Po & Type-C", type: "skill", size: 6 },
    
    // System
    { id: "git", label: "Git / GitHub", type: "skill", size: 7 },
    { id: "linux", label: "Linux (Hyprland)", type: "skill", size: 7 },
    { id: "docker", label: "Docker", type: "skill", size: 7 },
    { id: "zyxel", label: "Zyxel Nebula", type: "skill", size: 6 }
];

const skillLinksData = [
    // Categories to root
    { source: "cat-lang", target: "root", value: 90 },
    { source: "cat-ai", target: "root", value: 90 },
    { source: "cat-framework", target: "root", value: 90 },
    { source: "cat-hardware", target: "root", value: 90 },
    { source: "cat-system", target: "root", value: 90 },
    
    // Languages group
    { source: "python", target: "cat-lang", value: 50 },
    { source: "cpp", target: "cat-lang", value: 50 },
    { source: "javascript", target: "cat-lang", value: 50 },
    { source: "htmlcss", target: "cat-lang", value: 50 },
    { source: "bash", target: "cat-lang", value: 50 },
    
    // AI group
    { source: "llm", target: "cat-ai", value: 50 },
    { source: "prompt", target: "cat-ai", value: 50 },
    { source: "agents", target: "cat-ai", value: 50 },
    { source: "playwright", target: "cat-ai", value: 50 },
    
    // Framework group
    { source: "flask", target: "cat-framework", value: 50 },
    { source: "socket", target: "cat-framework", value: 50 },
    { source: "expo", target: "cat-framework", value: 50 },
    { source: "nodejs", target: "cat-framework", value: 50 },
    
    // Hardware group
    { source: "arduino", target: "cat-hardware", value: 50 },
    { source: "pixhawk", target: "cat-hardware", value: 50 },
    { source: "circuit", target: "cat-hardware", value: 50 },
    { source: "soldering", target: "cat-hardware", value: 50 },
    { source: "power", target: "cat-hardware", value: 50 },
    
    // System group
    { source: "git", target: "cat-system", value: 50 },
    { source: "linux", target: "cat-system", value: 50 },
    { source: "docker", target: "cat-system", value: 50 },
    { source: "zyxel", target: "cat-system", value: 50 },
    
    // Cross connections (Obsidian style)
    { source: "javascript", target: "nodejs", value: 65 },
    { source: "javascript", target: "expo", value: 65 },
    { source: "python", target: "flask", value: 65 },
    { source: "python", target: "agents", value: 65 },
    { source: "cpp", target: "arduino", value: 65 },
    { source: "cpp", target: "pixhawk", value: 65 },
    { source: "llm", target: "agents", value: 45 },
    { source: "arduino", target: "circuit", value: 55 },
    { source: "circuit", target: "soldering", value: 55 },
    { source: "linux", target: "bash", value: 55 }
];

function startSkillsGraph() {
    graphCanvas = document.getElementById("skillsGraphCanvas");
    if (!graphCanvas) return;
    
    graphCtx = graphCanvas.getContext("2d");
    
    // Use requestAnimationFrame to ensure layout is settled after panel transition
    requestAnimationFrame(() => {
        const container = graphCanvas.parentNode;
        const rect = container.getBoundingClientRect();
        
        // Calculate available height: panel height minus header and padding
        const panelContent = container.closest('.info-panel-content');
        let availableHeight = 480;
        if (panelContent) {
            const panelRect = panelContent.getBoundingClientRect();
            const header = panelContent.querySelector('.panel-header');
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            availableHeight = panelRect.height - headerHeight - 120; // 120 for padding
        }
        
        const w = rect.width > 10 ? rect.width : 480;
        const h = availableHeight > 100 ? availableHeight : 480;
        
        // Set canvas bitmap dimensions explicitly
        graphCanvas.width = w;
        graphCanvas.height = h;
        // Also set CSS dimensions to match
        graphCanvas.style.width = w + 'px';
        graphCanvas.style.height = h + 'px';
        // Set container height
        container.style.height = h + 'px';
        
        gNodes = skillNodesData.map(node => {
            let angle = Math.random() * Math.PI * 2;
            let radius = node.type === "root" ? 0 : node.type === "category" ? 75 : 155;
            return {
                ...node,
                x: graphCanvas.width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 45,
                y: graphCanvas.height / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 45,
                vx: 0,
                vy: 0
            };
        });
        
        gLinks = [...skillLinksData];
        
        graphCanvas.addEventListener("mousedown", onGraphMouseDown);
        graphCanvas.addEventListener("mousemove", onGraphMouseMove);
        window.addEventListener("mouseup", onGraphMouseUp);
        
        if (graphAnimationId) cancelAnimationFrame(graphAnimationId);
        runGraphSimulation();
    });
}

function stopSkillsGraph() {
    if (graphAnimationId) {
        cancelAnimationFrame(graphAnimationId);
        graphAnimationId = null;
    }
    if (graphCanvas) {
        graphCanvas.removeEventListener("mousedown", onGraphMouseDown);
        graphCanvas.removeEventListener("mousemove", onGraphMouseMove);
    }
    window.removeEventListener("mouseup", onGraphMouseUp);
    dragNode = null;
    hoverNode = null;
}

function runGraphSimulation() {
    if (!graphCanvas) return;

    // Auto-resize handler to solve initial zero-width/height issues during slide-in transitions
    if (graphCanvas.width !== graphCanvas.clientWidth || graphCanvas.height !== graphCanvas.clientHeight || graphCanvas.width === 0) {
        graphCanvas.width = graphCanvas.clientWidth || 400;
        graphCanvas.height = graphCanvas.clientHeight || 480;
        
        // Re-initialize node coordinates if they are clustered at boundary (20,20) or (0,0)
        const isClustered = gNodes.every(n => Math.abs(n.x - 20) < 5 && Math.abs(n.y - 20) < 5) || gNodes.every(n => n.x === 0 && n.y === 0);
        if (isClustered) {
            gNodes.forEach(node => {
                let angle = Math.random() * Math.PI * 2;
                let radius = node.type === "root" ? 0 : node.type === "category" ? 70 : 150;
                node.x = graphCanvas.width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 30;
                node.y = graphCanvas.height / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 30;
                node.vx = 0;
                node.vy = 0;
            });
        }
    }
    
    const cx = graphCanvas.width / 2;
    const cy = graphCanvas.height / 2;
    
    // Multi-body Repulsion Force
    for (let i = 0; i < gNodes.length; i++) {
        let nodeA = gNodes[i];
        for (let j = i + 1; j < gNodes.length; j++) {
            let nodeB = gNodes[j];
            let dx = nodeB.x - nodeA.x;
            let dy = nodeB.y - nodeA.y;
            let dist = Math.sqrt(dx * dx + dy * dy) || 1;
            
            let minDistance = 75;
            if (dist < minDistance) {
                let force = (minDistance - dist) * 0.12;
                let fx = (dx / dist) * force;
                let fy = (dy / dist) * force;
                
                if (nodeA !== dragNode) {
                    nodeA.vx -= fx;
                    nodeA.vy -= fy;
                }
                if (nodeB !== dragNode) {
                    nodeB.vx += fx;
                    nodeB.vy += fy;
                }
            }
        }
    }
    
    // Link Constraints (Spring attraction forces)
    gLinks.forEach(link => {
        let nodeSrc = gNodes.find(n => n.id === link.source);
        let nodeTgt = gNodes.find(n => n.id === link.target);
        
        if (nodeSrc && nodeTgt) {
            let dx = nodeTgt.x - nodeSrc.x;
            let dy = nodeTgt.y - nodeSrc.y;
            let dist = Math.sqrt(dx * dx + dy * dy) || 1;
            
            let force = (dist - link.value) * 0.045;
            let fx = (dx / dist) * force;
            let fy = (dy / dist) * force;
            
            if (nodeSrc !== dragNode) {
                nodeSrc.vx += fx;
                nodeSrc.vy += fy;
            }
            if (nodeTgt !== dragNode) {
                nodeTgt.vx -= fx;
                nodeTgt.vy -= fy;
            }
        }
    });
    
    // Apply forces & Update positions with containment limits
    gNodes.forEach(node => {
        if (node === dragNode) return;
        
        let dx = cx - node.x;
        let dy = cy - node.y;
        
        node.vx += dx * 0.007;
        node.vy += dy * 0.007;
        
        node.vx *= 0.75;
        node.vy *= 0.75;
        node.x += node.vx;
        node.y += node.vy;
        
        const pad = 20;
        if (node.x < pad) { node.x = pad; node.vx = 0; }
        if (node.x > graphCanvas.width - pad) { node.x = graphCanvas.width - pad; node.vx = 0; }
        if (node.y < pad) { node.y = pad; node.vy = 0; }
        if (node.y > graphCanvas.height - pad) { node.y = graphCanvas.height - pad; node.vy = 0; }
    });
    
    // Clear & Render
    graphCtx.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
    
    // Draw links
    gLinks.forEach(link => {
        let nodeSrc = gNodes.find(n => n.id === link.source);
        let nodeTgt = gNodes.find(n => n.id === link.target);
        
        if (nodeSrc && nodeTgt) {
            let isHighlighted = false;
            let isDimmed = false;
            
            if (hoverNode) {
                if (hoverNode.id === nodeSrc.id || hoverNode.id === nodeTgt.id) {
                    isHighlighted = true;
                } else {
                    isDimmed = true;
                }
            }
            
            graphCtx.beginPath();
            graphCtx.moveTo(nodeSrc.x, nodeSrc.y);
            graphCtx.lineTo(nodeTgt.x, nodeTgt.y);
            
            if (isHighlighted) {
                graphCtx.strokeStyle = "rgba(218, 41, 28, 0.6)";
                graphCtx.lineWidth = 1.8;
            } else {
                graphCtx.strokeStyle = isDimmed ? "rgba(30, 27, 24, 0.03)" : "rgba(30, 27, 24, 0.12)";
                graphCtx.lineWidth = 1.0;
            }
            graphCtx.stroke();
        }
    });
    
    // Draw nodes & labels
    gNodes.forEach(node => {
        let isHighlighted = hoverNode && (hoverNode.id === node.id || isConnected(hoverNode.id, node.id));
        let isDimmed = hoverNode && !isHighlighted;
        
        if (isHighlighted || (hoverNode && hoverNode.id === node.id)) {
            graphCtx.beginPath();
            graphCtx.arc(node.x, node.y, node.size + 6, 0, Math.PI * 2);
            graphCtx.fillStyle = "rgba(218, 41, 28, 0.15)";
            graphCtx.fill();
        }
        
        graphCtx.beginPath();
        graphCtx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        
        if (node.type === "root") {
            graphCtx.fillStyle = "#DA291C";
        } else if (node.type === "category") {
            graphCtx.fillStyle = isDimmed ? "rgba(94, 112, 96, 0.15)" : "#5E7060";
        } else {
            graphCtx.fillStyle = isDimmed ? "rgba(30, 27, 24, 0.15)" : "#1E1B18";
        }
        graphCtx.fill();
        
        graphCtx.strokeStyle = "#FAF6EE";
        graphCtx.lineWidth = 1.5;
        graphCtx.stroke();
        
        graphCtx.font = node.type === "root" ? "bold 11px Outfit" : node.type === "category" ? "bold 10px Outfit" : "9px JetBrains Mono";
        
        if (isDimmed) {
            graphCtx.fillStyle = "rgba(88, 80, 71, 0.15)";
        } else {
            graphCtx.fillStyle = (hoverNode && hoverNode.id === node.id) ? "#DA291C" : "#1E1B18";
        }
        
        graphCtx.textAlign = "left";
        graphCtx.textBaseline = "middle";
        graphCtx.fillText(node.label, node.x + node.size + 5, node.y);
    });
    
    graphAnimationId = requestAnimationFrame(runGraphSimulation);
}

function isConnected(idA, idB) {
    if (idA === idB) return true;
    return gLinks.some(link => 
        (link.source === idA && link.target === idB) || 
        (link.source === idB && link.target === idA)
    );
}

function onGraphMouseDown(e) {
    const rect = graphCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    
    for (let i = 0; i < gNodes.length; i++) {
        let node = gNodes[i];
        let dx = node.x - mx;
        let dy = node.y - my;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < node.size + 8) {
            dragNode = node;
            node.vx = 0;
            node.vy = 0;
            break;
        }
    }
}

function onGraphMouseMove(e) {
    const rect = graphCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    
    graphMouse.x = mx;
    graphMouse.y = my;
    
    if (dragNode) {
        dragNode.x = mx;
        dragNode.y = my;
        dragNode.vx = 0;
        dragNode.vy = 0;
        return;
    }
    
    let foundHover = null;
    for (let i = 0; i < gNodes.length; i++) {
        let node = gNodes[i];
        let dx = node.x - mx;
        let dy = node.y - my;
        let dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < node.size + 8) {
            foundHover = node;
            break;
        }
    }
    
    if (hoverNode !== foundHover) {
        hoverNode = foundHover;
        if (hoverNode) {
            cursor.classList.add("hovered");
        } else {
            cursor.classList.remove("hovered");
        }
    }
}

function onGraphMouseUp() {
    dragNode = null;
}

// ================= BRAND LOGO HOVER/CLICK EFFECT ================= //
document.addEventListener("click", (e) => {
    const brandLogo = e.target.closest(".brand-logo");
    if (brandLogo) {
        brandLogo.style.transform = "scale(0.85)";
        setTimeout(() => {
            brandLogo.style.transform = "";
        }, 150);
    }
});


// ================= AUTO GITHUB SYNC ENGINE ================= //
async function fetchGithubProjects() {
    try {
        const response = await fetch("https://api.github.com/users/Alttrest/repos?sort=pushed&per_page=30");
        if (!response.ok) return;
        const repos = await response.json();
        
        let newProjectsAdded = false;
        
        repos.forEach(repo => {
            // Check if already in static projects array (either by title or by matching github link)
            const exists = projects.some(p => 
                (p.github && p.github.toLowerCase().includes(repo.name.toLowerCase())) || 
                p.title.toLowerCase() === repo.name.toLowerCase() ||
                p.title.toLowerCase().replace(/-/g, " ") === repo.name.toLowerCase().replace(/-/g, " ")
            );
            
            if (!exists && !repo.fork) {
                const lang = repo.language || "JavaScript";
                let category = "GitHub Repository";
                let icon = "📦";
                let gradient = "linear-gradient(135deg, #e8dec9 0%, #8e8274 100%)";
                
                if (lang.toLowerCase() === "python") {
                    category = "Python Project";
                    icon = "🐍";
                    gradient = "linear-gradient(135deg, #e8dec9 0%, #5e7060 100%)";
                } else if (lang.toLowerCase() === "javascript" || lang.toLowerCase() === "typescript") {
                    category = "JavaScript Project";
                    icon = "🟨";
                    gradient = "linear-gradient(135deg, #FAF6EE 0%, #D46A43 100%)";
                } else if (lang.toLowerCase() === "c++" || lang.toLowerCase() === "c") {
                    category = "Systems / Embedded";
                    icon = "⚙️";
                    gradient = "linear-gradient(135deg, #f3ece0 0%, #1e1b18 100%)";
                } else if (lang.toLowerCase() === "html" || lang.toLowerCase() === "css") {
                    category = "UI Design";
                    icon = "🌐";
                    gradient = "linear-gradient(135deg, #e6dcc4 0%, #d46a43 100%)";
                }
                
                // Map of known repositories to their pre-generated minimalist logos
                const repoLogos = {
                    "Alttre-Portfolio": "assets/alttre_portfolio.png",
                    "3D-furniture": "assets/3d_furniture.png",
                    "Excel": "assets/excel_python.png",
                    "ifbmtalchat": "assets/ifbmtal_chat.png",
                    "ifbmtalchatsite": "assets/ifbmtal_chat.png",
                    "Alttrest": "assets/alttre_profile.png"
                };
                
                const previewImgUrl = repoLogos[repo.name] || `https://raw.githubusercontent.com/Alttrest/${repo.name}/main/portfolio-preview.png`;
                
                // Create a unique star count & fork based seed for gradient variation
                const seedHue = ((repo.stargazers_count || 0) * 37 + (repo.id || 0)) % 360;
                const uniqueGradient = `linear-gradient(${120 + (repo.id % 120)}deg, hsl(${seedHue},18%,92%) 0%, hsl(${(seedHue+120)%360},32%,42%) 100%)`;
                
                const newProj = {
                    id: projects.length + 1,
                    title: repo.name,
                    category: category,
                    tag: "GitHub Autonomous",
                    shortDesc: repo.description || "Autonomous public software repository synced from GitHub.",
                    description: `${repo.description || "This repository hosts a public codebase project synced from GitHub."} You can inspect the source code, implementation algorithms, and commit history by visiting the repository links below.`,
                    technologies: [lang, "Git", "GitHub API"],
                    gradient: uniqueGradient,
                    icon: icon,
                    image: previewImgUrl,
                    github: repo.html_url,
                    live: repo.homepage || null
                };
                
                projects.push(newProj);
                newProjectsAdded = true;
            }
        });
        
        if (newProjectsAdded) {
            saveProjects();
            renderDeck();
            updateDeckLayout();
        }
    } catch (err) {
        console.warn("GitHub dynamic sync error:", err);
    }
}


// ================= ADMIN SECURITY & MANAGEMENT SYSTEM ================= //
const adminPasscodeModal = document.getElementById("adminPasscodeModal");
const adminPasscodeField = document.getElementById("adminPasscodeField");
const adminPasscodeSubmitBtn = document.getElementById("adminPasscodeSubmitBtn");
const passcodeCloseBtn = document.getElementById("passcodeCloseBtn");
const passcodeErrorMessage = document.getElementById("passcodeErrorMessage");

// Track brand logo clicks for triple-click trigger
let brandLogoClicks = 0;
let brandLogoTimer;
const brandLogo = document.querySelector(".brand-logo");

if (brandLogo) {
    brandLogo.addEventListener("click", () => {
        brandLogoClicks++;
        clearTimeout(brandLogoTimer);
        brandLogoTimer = setTimeout(() => {
            brandLogoClicks = 0;
        }, 1000);
        
        if (brandLogoClicks === 3) {
            brandLogoClicks = 0;
            openPasscodeModal();
        }
    });
}

// Track key shortcut Ctrl + Shift + A
window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        openPasscodeModal();
    }
});

// Passcode Modal Control
function openPasscodeModal() {
    if (adminPasscodeModal) {
        adminPasscodeModal.classList.add("active");
        passcodeErrorMessage.style.display = "none";
        adminPasscodeField.value = "";
        adminPasscodeField.focus();
    }
}

function closePasscodeModal() {
    if (adminPasscodeModal) {
        adminPasscodeModal.classList.remove("active");
    }
}

if (passcodeCloseBtn) passcodeCloseBtn.addEventListener("click", closePasscodeModal);
const passcodeOverlay = document.getElementById("passcodeOverlay");
if (passcodeOverlay) passcodeOverlay.addEventListener("click", closePasscodeModal);

// Submit Passcode
if (adminPasscodeSubmitBtn) {
    adminPasscodeSubmitBtn.addEventListener("click", verifyAdminPasscode);
}
if (adminPasscodeField) {
    adminPasscodeField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") verifyAdminPasscode();
    });
}

function verifyAdminPasscode() {
    const entered = adminPasscodeField.value;
    if (entered === "alttre2026") {
        localStorage.setItem("alttre_admin_authorized", "true");
        closePasscodeModal();
        updateAdminNavButton();
        
        // Auto open admin panel
        setTimeout(() => {
            closeSetupPanel();
            closeSkillsPanel();
            closeProjectDetails();
            stopSkillsGraph();
            document.getElementById("adminPanel").classList.add("active");
            const adminBtn = document.getElementById("navAdminBtn");
            if (adminBtn) setActiveNav(adminBtn);
            renderAdminProjectsList();
        }, 300);
    } else {
        passcodeErrorMessage.style.display = "block";
        const content = adminPasscodeModal.querySelector(".passcode-content");
        if (content) {
            content.style.animation = "none";
            // trigger reflow
            void content.offsetWidth;
            content.style.animation = "shake 0.3s ease";
        }
    }
}

// Nav Button Dynamic Management
function updateAdminNavButton() {
    const nav = document.getElementById("portfolioNav");
    if (!nav) return;
    
    let adminBtn = document.getElementById("navAdminBtn");
    const isAuthorized = localStorage.getItem("alttre_admin_authorized") === "true";
    
    if (isAuthorized) {
        if (!adminBtn) {
            adminBtn = document.createElement("button");
            adminBtn.className = "nav-btn";
            adminBtn.id = "navAdminBtn";
            adminBtn.textContent = "Admin";
            
            const contactBtn = nav.querySelector(".nav-contact-btn");
            if (contactBtn) {
                nav.insertBefore(adminBtn, contactBtn);
            } else {
                nav.appendChild(adminBtn);
            }
            
            adminBtn.addEventListener("click", () => {
                closeSetupPanel();
                closeSkillsPanel();
                closeProjectDetails();
                stopSkillsGraph();
                
                document.getElementById("adminPanel").classList.add("active");
                setActiveNav(adminBtn);
                renderAdminProjectsList();
            });
        }
    } else {
        if (adminBtn) {
            adminBtn.remove();
        }
    }
}

// Custom Gradient Visibility
const projGradientSelect = document.getElementById("projGradientSelect");
const customGradientInputs = document.getElementById("customGradientInputs");

if (projGradientSelect && customGradientInputs) {
    projGradientSelect.addEventListener("change", () => {
        if (projGradientSelect.value === "custom") {
            customGradientInputs.style.display = "flex";
        } else {
            customGradientInputs.style.display = "none";
        }
    });
}

// Photo Upload / URL Handling
const projImageFile = document.getElementById("projImageFile");
const projImageUrl = document.getElementById("projImageUrl");
const imagePreviewContainer = document.getElementById("imagePreviewContainer");
const imagePreview = document.getElementById("imagePreview");
const removeImageBtn = document.getElementById("removeImageBtn");

let currentUploadedImageBase64 = null;

if (projImageFile) {
    projImageFile.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                currentUploadedImageBase64 = event.target.result;
                imagePreview.src = currentUploadedImageBase64;
                imagePreviewContainer.style.display = "block";
                projImageUrl.value = ""; // Clear URL input
            };
            reader.readAsDataURL(file);
        }
    });
}

if (projImageUrl) {
    projImageUrl.addEventListener("input", () => {
        if (projImageUrl.value.trim() !== "") {
            currentUploadedImageBase64 = projImageUrl.value.trim();
            imagePreview.src = currentUploadedImageBase64;
            imagePreviewContainer.style.display = "block";
            projImageFile.value = ""; // Clear file selector
        } else {
            clearPreviewImage();
        }
    });
}

if (removeImageBtn) {
    removeImageBtn.addEventListener("click", clearPreviewImage);
}

function clearPreviewImage() {
    currentUploadedImageBase64 = null;
    if (projImageFile) projImageFile.value = "";
    if (projImageUrl) projImageUrl.value = "";
    if (imagePreview) imagePreview.src = "";
    if (imagePreviewContainer) imagePreviewContainer.style.display = "none";
}

// Project Creation Logic
const adminAddProjectForm = document.getElementById("adminAddProjectForm");
if (adminAddProjectForm) {
    adminAddProjectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const title = document.getElementById("projTitle").value.trim();
        const category = document.getElementById("projCategory").value.trim();
        const tag = document.getElementById("projTag").value.trim();
        const shortDesc = document.getElementById("projShortDesc").value.trim();
        const description = document.getElementById("projDesc").value.trim();
        const techInput = document.getElementById("projTechs").value.trim();
        const techs = techInput.split(",").map(t => t.trim()).filter(Boolean);
        const icon = document.getElementById("projIcon").value.trim() || "📁";
        const github = document.getElementById("projGithub").value.trim() || "https://github.com/Alttrest";
        const live = document.getElementById("projLive").value.trim() || null;
        
        const gradSelect = projGradientSelect.value;
        let gradient = gradSelect;
        if (gradSelect === "custom") {
            const col1 = document.getElementById("gradColor1").value;
            const col2 = document.getElementById("gradColor2").value;
            gradient = `linear-gradient(135deg, ${col1} 0%, ${col2} 100%)`;
        }
        
        const newProj = {
            id: Date.now(),
            title,
            category,
            tag,
            shortDesc,
            description,
            technologies: techs,
            gradient,
            icon,
            image: currentUploadedImageBase64,
            github,
            live
        };
        
        projects.push(newProj);
        saveProjects();
        
        // Reset form & state
        adminAddProjectForm.reset();
        clearPreviewImage();
        if (customGradientInputs) customGradientInputs.style.display = "none";
        
        // Re-render components
        renderDeck();
        updateDeckLayout();
        renderAdminProjectsList();
        
        alert("Project added successfully!");
    });
}

// Admin Projects Listing & Deletion
function renderAdminProjectsList() {
    const listContainer = document.getElementById("adminProjectsList");
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    
    if (projects.length === 0) {
        listContainer.innerHTML = `<div style="font-size:0.9rem; color:var(--text-muted); font-style:italic;">No projects to display.</div>`;
        return;
    }
    
    projects.forEach((proj, idx) => {
        const item = document.createElement("div");
        item.className = "admin-project-item";
        
        item.innerHTML = `
            <div class="admin-proj-info">
                <span class="admin-proj-icon">${proj.icon}</span>
                <div>
                    <div class="admin-proj-title">${proj.title}</div>
                    <div class="admin-proj-cat">${proj.category}</div>
                </div>
            </div>
            <button class="admin-proj-delete-btn" data-index="${idx}">Delete</button>
        `;
        
        const delBtn = item.querySelector(".admin-proj-delete-btn");
        delBtn.addEventListener("click", () => {
            const index = parseInt(delBtn.dataset.index);
            if (confirm(`Are you sure you want to delete "${projects[index].title}"?`)) {
                projects.splice(index, 1);
                saveProjects();
                
                // Re-render
                renderDeck();
                // Ensure active index is within bounds
                if (activeIndex >= projects.length) {
                    activeIndex = Math.max(0, projects.length - 1);
                }
                updateDeckLayout();
                renderAdminProjectsList();
            }
        });
        
        listContainer.appendChild(item);
    });
    
    setupCursorHovers();
}

// Admin System Controls Actions
const adminExportBtn = document.getElementById("adminExportBtn");
const adminResetBtn = document.getElementById("adminResetBtn");
const adminRevokeBtn = document.getElementById("adminRevokeBtn");

if (adminExportBtn) {
    adminExportBtn.addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 4));
        const dlAnchorElem = document.createElement('a');
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", "projects.json");
        dlAnchorElem.click();
    });
}

if (adminResetBtn) {
    adminResetBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all projects to defaults?")) {
            projects = [...DEFAULT_PROJECTS];
            saveProjects();
            
            activeIndex = 0;
            renderDeck();
            updateDeckLayout();
            renderAdminProjectsList();
            alert("Projects reset successfully!");
        }
    });
}

if (adminRevokeBtn) {
    adminRevokeBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to revoke admin authorization on this device?")) {
            localStorage.removeItem("alttre_admin_authorized");
            updateAdminNavButton();
            closeAdminPanel();
            alert("Authorization revoked.");
        }
    });
}

// ================= CONTACT FORM SUBMISSION (WEB3FORMS AJAX) ================= //
const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");

if (contactForm && contactFormStatus) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        contactFormStatus.className = "contact-status-message sending";
        contactFormStatus.textContent = "Sending...";
        
        const formData = new FormData(contactForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        })
        .then(async (response) => {
            let res = await response.json();
            if (response.status == 200) {
                contactFormStatus.className = "contact-status-message success";
                contactFormStatus.textContent = "Message sent successfully!";
                contactForm.reset();
            } else {
                console.log(response);
                contactFormStatus.className = "contact-status-message error";
                contactFormStatus.textContent = res.message || "An error occurred!";
            }
        })
        .catch(error => {
            console.log(error);
            contactFormStatus.className = "contact-status-message error";
            contactFormStatus.textContent = "Network error! Please try again.";
        })
        .then(() => {
            setTimeout(() => {
                contactFormStatus.style.display = "none";
            }, 6000);
        });
    });
}

// Auto-grow inline textarea dynamically
function initAutogrowTextareas() {
    const inlineTxs = document.getElementsByClassName("inline-textarea");
    for (let i = 0; i < inlineTxs.length; i++) {
        inlineTxs[i].addEventListener("input", function() {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        });
    }
}
if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initAutogrowTextareas);
} else {
    initAutogrowTextareas();
}
