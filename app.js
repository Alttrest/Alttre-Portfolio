// ================= PROJECT DATA ================= //
const projects = [
    {
        id: 1,
        title: "NexusAI-PhoneAgent",
        category: "Mobil Yapay Zeka",
        tag: "Yeni / Aktif",
        shortDesc: "React Native ve Expo tabanlı mobil yapay zeka asistanı.",
        description: "NexusAI-PhoneAgent, akıllı telefonunuzda çalışan gelişmiş bir yapay zeka asistanıdır. React Native ve Expo ile geliştirilmiş olan bu sistem, kullanıcının cihaz üzerindeki işlemlerini koordine eder ve arka planda LLM (Büyük Dil Modeli) entegrasyonuyla kişiselleştirilmiş bir mobil operasyon deneyimi sunar.",
        technologies: ["React Native", "Expo", "TypeScript", "LLM APIs", "JSON-RPC"],
        gradient: "linear-gradient(135deg, #e6dcc4 0%, #d46a43 100%)",
        icon: "📱",
        image: "assets/nexusai_phone.png",
        github: "https://github.com/Alttrest/NexusAI-PhoneAgent",
        live: null
    },
    {
        id: 2,
        title: "AI-POST Ekosistemi",
        category: "Yapay Zeka Otomasyon",
        tag: "Otonom",
        shortDesc: "Yapay zeka destekli sosyal medya otomasyon, gönderi ve yönetim araçları bütünü.",
        description: "AI-POST, sosyal medya platformlarında içerik planlama, görsel ve metin üretimi ile otomatik paylaşım süreçlerini uçtan uca yöneten akıllı bir ajan ekosistemidir. API entegrasyonları sayesinde insan müdahalesi olmadan trendleri analiz eder ve içerik üretir.",
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
        category: "Masaüstü Yapay Zeka",
        tag: "Gelişmiş",
        shortDesc: "Electron ve React tabanlı masaüstü yapay zeka operatörü (Flux-Agent serisi).",
        description: "NexusAI-Agent, bilgisayarınızda yerel veya bulut tabanlı çalışan, işletim sistemi seviyesindeki görevleri otomatikleştirebilen gelişmiş bir masaüstü yapay zeka asistanıdır. ReAct (Reasoning and Acting) mimarisini kullanarak kullanıcının yerine dosya yönetebilir, tarayıcı işlemlerini gerçekleştirebilir.",
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
        category: "Siber İstihbarat & OSINT",
        tag: "Hızlı",
        shortDesc: "Groq AI ve DuckDuckGo arama API'sini kullanan Python tabanlı kişi arama motoru.",
        description: "Ven-s-Finder, açık kaynak kodlu istihbarat (OSINT) yöntemleriyle internet üzerindeki genel bilgileri tarayıp analiz eden bir kişi/veri arama motorudur. DuckDuckGo API'si ile topladığı verileri Groq AI üzerinden geçirerek anlamlandırılmış bir profil raporu oluşturur.",
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
        category: "Gerçek Zamanlı İletişim",
        tag: "WebSockets",
        shortDesc: "WebSockets, Socket.io ve Flask tabanlı gerçek zamanlı sohbet altyapısı.",
        description: "FBMTAL Chat, okul ortamında veya yerel ağlarda güvenli ve yüksek hızlı mesajlaşma sağlamak üzere kurgulanmış, Socket.io tabanlı gerçek zamanlı bir sohbet uygulamasıdır. Kullanıcı yönetimi, odalar ve anlık bildirimler Flask backend'i ile yönetilir.",
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
        category: "Robotik & Gömülü Sistem",
        tag: "Ödüllü 🏆",
        shortDesc: "Fibonacci Robot Yarışması Jüri Özel Ödüllü otonom robot projesi.",
        description: "Fibonacci Robot Yarışması'nda Jüri Özel Ödülü kazanan, otonom kararlar verebilen mini sumo robotu. Arduino mimarisi üzerine C++ ile yazılmış olan kod, kızılötesi ve mesafe sensörlerinden gelen verileri saniyede yüzlerce kez işleyerek (sensör füzyonu) rakibini ring dışına itecek motor tork stratejilerini belirler.",
        technologies: ["C/C++", "Arduino", "Sensör Füzyonu", "Motor Sürücüler", "Li-Po Güç"],
        gradient: "linear-gradient(135deg, #FAF6EE 0%, #DA291C 100%)",
        icon: "⚙️",
        image: "assets/sumo_robot.png",
        github: "https://github.com/Alttrest",
        live: null
    },
    {
        id: 7,
        title: "Hype-NEWS",
        category: "Yapay Zeka Medya",
        tag: "Dinamik",
        shortDesc: "Yapay zeka destekli interaktif haber istasyonu platformu.",
        description: "Hype-NEWS, internet üzerindeki gelişmeleri tarayarak, yapay zeka algoritmalarıyla tarafsız, özetlenmiş ve interaktif haber akışları oluşturan yenilikçi bir web portalıdır. Kullanıcılar haberleri kendi ilgi alanlarına göre yapay zekaya yeniden yazdırabilirler.",
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
        category: "Masaüstü Araç",
        tag: "Yeni",
        shortDesc: "Windows başlangıç uygulamalarını listeleyen, açıklayan ve yöneten Electron uygulaması.",
        description: "StartupCMD, Windows işletim sisteminde başlangıçta otomatik olarak çalışan komut satırı araçlarını, script dosyalarını ve uygulamaları tarayan, yapay zeka desteğiyle açıklayan ve yöneten profesyonel bir masaüstü uygulamasıdır.",
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
        category: "Web Uygulaması",
        tag: "Dinamik",
        shortDesc: "JavaScript ile yazılmış, tarayıcıda çalışan otonom web işletim sistemi arayüzü.",
        description: "Web OS, tarayıcı üzerinde zengin masaüstü pencereleri, görev çubuğu ve çeşitli araçları barındıran tam teşekküllü bir simülatör web uygulamasıdır. İçerisinde özel terminal uygulamaları ve dosya sistemleri barındırır.",
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
        category: "Web Animasyon",
        tag: "Görsel",
        shortDesc: "Tarayıcı kaydırma tekerleği hareketlerine duyarlı modern web animasyon kütüphanesi.",
        description: "Scroll Animation, web sayfalarında ağır fizik kütüphaneleri yerine hafif CSS 3D transformasyonları kullanan, tamamen performansa odaklı scroll tetiklemeli animasyon modülüdür.",
        technologies: ["JavaScript", "HTML5", "CSS3", "Scroll Handling"],
        gradient: "linear-gradient(135deg, #e6dcc4 0%, #d46a43 100%)",
        icon: "✨",
        image: "assets/scroll_animation.png",
        github: "https://github.com/Alttrest/scroll-animation",
        live: null
    },
    {
        id: 11,
        title: "Sefa Mühendislik",
        category: "Kurumsal Vitrin",
        tag: "Tamamlandı",
        shortDesc: "Sefa Mühendislik için tasarlanan modern ve minimalist kurumsal web sitesi.",
        description: "Sefa Mühendislik firması için özel olarak sıfırdan tasarlanan ve geliştirilen modern, minimalist kurumsal web sitesi projesi. Hızlı yüklenme süreleri, SEO uyumluluğu ve temiz bir arayüz ile kurumsal kimliği yansıtacak şekilde kurgulanmıştır.",
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
        category: "Artırılmış Gerçeklik (AR)",
        tag: "Yeni / Public",
        shortDesc: "Kullanıcıların mobilyayı almadan yaşam alanlarında 3D/AR ile görmesini sağlayan uygulama.",
        description: "ar-furniture-viewer, web tabanlı artırılmış gerçeklik (WebXR) kullanarak, kullanıcıların mobilyaları satın almadan önce kendi odalarında gerçek boyutlarıyla 3D olarak konumlandırıp görüntülemesini sağlayan modern ve public bir uygulamadır.",
        technologies: ["Three.js", "WebXR", "Model-Viewer", "JavaScript", "HTML/CSS"],
        gradient: "linear-gradient(135deg, #e8dec9 0%, #d46a43 100%)",
        icon: "🛋️",
        image: "assets/ar_furniture.png",
        github: "https://github.com/Alttrest/ar-furniture-viewer",
        live: "https://3d-furniture-viewer.vercel.app"
    }
];

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


// ================= TYPEWRITER EFFECT ================= //
const introLines = [
    "Merhaba, ben Ali Turan (Alttre).",
    "Bilişim Teknolojileri alanında Mesleki ve Teknik Anadolu Lisesi öğrencisiyim.",
    "Yapay zeka ajanları, donanım projeleri ve sıfırdan web sistemleri geliştiriyorum.",
    "Aynı zamanda Nebula Team kurucu üyesiyim.",
    "Projelerimi mouse tekerleğiyle kaydırarak incelemek için hazır mısın?.."
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
        const cardVisualContent = proj.image 
            ? `<img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1;">`
            : `<div class="card-graphic" style="position: relative; z-index: 2;">${proj.icon}</div>`;
        
        card.innerHTML = `
            <div class="card-visual" style="background: ${proj.gradient}">
                <span class="card-tag ${tagClass}">${proj.tag}</span>
                ${cardVisualContent}
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
        ? `<a href="${project.live}" target="_blank" class="modal-link-btn">Canlı Proje &nearr;</a>`
        : "";
    
    const heroVisualContent = project.image
        ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1;">`
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
                    <a href="${project.github}" target="_blank" class="modal-link-btn secondary-link">GitHub Kodları &nearr;</a>
                </div>
            </div>
            
            <div class="modal-section-grid">
                <div class="modal-desc-panel" id="modalParallaxDesc">
                    <h3 class="modal-section-title">Proje Detayları</h3>
                    <p class="modal-text">${project.description}</p>
                </div>
                <div class="modal-sidebar">
                    <div class="sidebar-box">
                        <h4>Kullanılan Teknolojiler</h4>
                        <div class="tech-tags">
                            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                        </div>
                    </div>
                    <div class="sidebar-box">
                        <h4>Geliştirici İmzası</h4>
                        <p class="modal-text" style="font-size: 0.85rem; color: var(--text-muted);">Bu proje Alttre tarafından sıfırdan kodlanmış ve geliştirilmiştir.</p>
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


// ================= INFO SUB-PANELS (SKILLS, SETUP) ================= //
const skillsPanel = document.getElementById("skillsPanel");
const setupPanel = document.getElementById("setupPanel");

const navSkillsBtn = document.getElementById("navSkillsBtn");
const navSetupBtn = document.getElementById("navSetupBtn");
const navProjectsBtn = document.getElementById("navProjectsBtn");

const skillsCloseBtn = document.getElementById("skillsCloseBtn");
const setupCloseBtn = document.getElementById("setupCloseBtn");
const skillsOverlay = document.getElementById("skillsOverlay");
const setupOverlay = document.getElementById("setupOverlay");

// Skills Panel Actions
navSkillsBtn.addEventListener("click", () => {
    closeSetupPanel(); // Close setup first
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

navProjectsBtn.addEventListener("click", () => {
    closeSkillsPanel();
    closeSetupPanel();
    stopSkillsGraph();
    setActiveNav(navProjectsBtn);
});

function setActiveNav(activeBtn) {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
    setupCursorHovers();
}

function resetActiveNav() {
    if (!skillsPanel.classList.contains("active") && !setupPanel.classList.contains("active")) {
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
    { id: "cat-lang", label: "Programlama Dilleri", type: "category", size: 10 },
    { id: "cat-ai", label: "Yapay Zeka (AI)", type: "category", size: 10 },
    { id: "cat-framework", label: "Framework & Server", type: "category", size: 10 },
    { id: "cat-hardware", label: "Donanım & Lab", type: "category", size: 10 },
    { id: "cat-system", label: "Sistem & Araçlar", type: "category", size: 10 },
    
    // Languages
    { id: "python", label: "Python", type: "skill", size: 7 },
    { id: "cpp", label: "C++", type: "skill", size: 7 },
    { id: "javascript", label: "JavaScript", type: "skill", size: 7 },
    { id: "htmlcss", label: "HTML5 / CSS3", type: "skill", size: 7 },
    { id: "bash", label: "Bash / Zsh", type: "skill", size: 6 },
    
    // AI
    { id: "llm", label: "LLM API", type: "skill", size: 7 },
    { id: "prompt", label: "Prompt Mühendisliği", type: "skill", size: 7 },
    { id: "agents", label: "ReAct Ajanları", type: "skill", size: 7 },
    { id: "playwright", label: "Playwright", type: "skill", size: 6 },
    
    // Frameworks
    { id: "flask", label: "Flask", type: "skill", size: 7 },
    { id: "socket", label: "Socket.io / WebSockets", type: "skill", size: 7 },
    { id: "expo", label: "Expo / React Native", type: "skill", size: 7 },
    { id: "nodejs", label: "Node.js", type: "skill", size: 7 },
    
    // Hardware
    { id: "arduino", label: "Arduino", type: "skill", size: 7 },
    { id: "pixhawk", label: "Pixhawk / ArduPilot", type: "skill", size: 7 },
    { id: "circuit", label: "Devre Tasarımı", type: "skill", size: 6 },
    { id: "soldering", label: "Lehimleme", type: "skill", size: 6 },
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
                let category = "GitHub Deposu";
                let icon = "📦";
                let gradient = "linear-gradient(135deg, #e8dec9 0%, #8e8274 100%)";
                
                if (lang.toLowerCase() === "python") {
                    category = "Python Projesi";
                    icon = "🐍";
                    gradient = "linear-gradient(135deg, #e8dec9 0%, #5e7060 100%)";
                } else if (lang.toLowerCase() === "javascript" || lang.toLowerCase() === "typescript") {
                    category = "JavaScript Projesi";
                    icon = "🟨";
                    gradient = "linear-gradient(135deg, #FAF6EE 0%, #D46A43 100%)";
                } else if (lang.toLowerCase() === "c++" || lang.toLowerCase() === "c") {
                    category = "Sistem / Gömülü";
                    icon = "⚙️";
                    gradient = "linear-gradient(135deg, #f3ece0 0%, #1e1b18 100%)";
                } else if (lang.toLowerCase() === "html" || lang.toLowerCase() === "css") {
                    category = "Arayüz Tasarımı";
                    icon = "🌐";
                    gradient = "linear-gradient(135deg, #e6dcc4 0%, #d46a43 100%)";
                }
                
                // Formulate preview image URL. Drop portfolio-preview.png in the main/master branch root to auto-load!
                const previewImgUrl = `https://raw.githubusercontent.com/Alttrest/${repo.name}/main/portfolio-preview.png`;
                
                const newProj = {
                    id: projects.length + 1,
                    title: repo.name,
                    category: category,
                    tag: "GitHub Otonom",
                    shortDesc: repo.description || "GitHub üzerinden otomatik yüklenen public yazılım projesi.",
                    description: `${repo.description || "Bu depo, GitHub üzerinde public olarak paylaşılan bir kod tabanı projesidir."} Geliştirilen kodları, kullanılan algoritmaları ve commit geçmişini incelemek için aşağıdaki bağlantılardan GitHub reposunu ziyaret edebilirsiniz.`,
                    technologies: [lang, "Git", "GitHub API"],
                    gradient: gradient,
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
            renderDeck();
            updateDeckLayout();
        }
    } catch (err) {
        console.warn("GitHub dynamic sync error:", err);
    }
}
