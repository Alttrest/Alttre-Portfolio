/* 
  =========================================
  ARCH-HYPRLAND CYBER-TERMINAL PORTFOLIO
  Author: Alttre (Alttrest)
  Interactive Vanilla JS Ecosystem
  =========================================
*/

// --- 1. Global Setup & State ---
const state = {
    audioEnabled: false,
    terminalHistory: [],
    typingText: [
        "Bilişim Teknolojileri Öğrencisi",
        "Otonom AI Ajan Geliştirici (Venus AI)",
        "Ödüllü Sumo Robot Maker",
        "Arch Linux & Hyprland Güç Kullanıcısı",
        "Elektronik & Donanım Modifikasyoncusu"
    ],
    typingIdx: 0,
    charIdx: 0,
    isDeleting: false,
    sumoSimInterval: null,
    matrixActive: false,
    matrixIntervalId: null
};

// --- 2. Web Audio API Synthetic Key Click Generator ---
// We synthesize high-end mechanical keyboard click sounds directly in code (Zero external assets needed!)
let audioCtx = null;
function playKeyClick() {
    if (!state.audioEnabled) return;
    
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        // We combine a short pitch frequency and white noise to emulate a clicky blue switch
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        // High-pass filter to give a clean crisp "clack"
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1000, audioCtx.currentTime);

        osc.type = 'triangle';
        // Randomize pitch slightly to sound natural
        const pitch = 2200 + Math.random() * 800;
        osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
        console.error("Audio error:", e);
    }
}

// Toggle Audio Function
const audioBtn = document.getElementById('audio-btn');
const audioStatusTxt = document.getElementById('audio-status-txt');

audioBtn.addEventListener('click', () => {
    state.audioEnabled = !state.audioEnabled;
    audioBtn.classList.toggle('on', state.audioEnabled);
    audioStatusTxt.innerText = `Audio: ${state.audioEnabled ? 'ON' : 'OFF'}`;
    
    // Play a crisp confirmation chime if turned on
    if (state.audioEnabled) {
        state.audioEnabled = true; // force
        playConfirmChime();
    }
});

function playConfirmChime() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {}
}

// --- 3. Typing Effect (Hero Slogan) ---
const typingHook = document.getElementById('typing-hook');
function handleTyping() {
    const currentStr = state.typingText[state.typingIdx];
    
    if (state.isDeleting) {
        state.charIdx--;
    } else {
        state.charIdx++;
    }
    
    typingHook.innerText = currentStr.substring(0, state.charIdx);
    
    let speed = 100;
    if (state.isDeleting) speed /= 2;
    
    if (!state.isDeleting && state.charIdx === currentStr.length) {
        speed = 2200; // Pause at full string
        state.isDeleting = true;
    } else if (state.isDeleting && state.charIdx === 0) {
        state.isDeleting = false;
        state.typingIdx = (state.typingIdx + 1) % state.typingText.length;
        speed = 400; // Pause before typing next
    }
    
    setTimeout(handleTyping, speed);
}

// --- 4. Interactive Terminal Command Parser ---
const termInput = document.getElementById('terminal-input');
const termBody = document.getElementById('term-body');
const terminalWindow = document.getElementById('terminal');

// Active border feedback on terminal click
termInput.addEventListener('focus', () => terminalWindow.classList.add('focused'));
termInput.addEventListener('blur', () => terminalWindow.classList.remove('focused'));

termInput.addEventListener('keydown', (e) => {
    playKeyClick();
    if (e.key === 'Enter') {
        const cmdText = termInput.value.trim();
        termInput.value = '';
        if (cmdText) {
            executeTermCmd(cmdText);
        }
    }
});

function appendTermLine(htmlContent, delay = 0) {
    const p = document.createElement('p');
    p.innerHTML = htmlContent;
    termBody.insertBefore(p, termInput.parentElement);
    termBody.scrollTop = termBody.scrollHeight;
}

function executeTermCmd(cmd) {
    // Stop matrix rain if active
    if (state.matrixActive) {
        state.matrixActive = false;
        clearInterval(state.matrixIntervalId);
        appendTermLine("[SİSTEM] Matrix dijital yağmuru sonlandırıldı.");
    }

    appendTermLine(`<span class="term-prompt">alttre@arch</span>:<span class="term-dir">~</span>$ ${cmd}`);
    
    const lowerCmd = cmd.toLowerCase().trim();
    
    switch (lowerCmd) {
        case 'help':
            appendTermLine(`
                <span class="term-cyan">Kullanılabilir Sistem Komutları:</span><br>
                &nbsp;&nbsp;<b>neofetch</b>&nbsp;&nbsp;- Alttre'nin sistem özelliklerini ve donanım spec'lerini listeler.<br>
                &nbsp;&nbsp;<b>skills</b>&nbsp;&nbsp;&nbsp;&nbsp;- Yetkinlik düzeylerini terminal çubuk grafiği ile çizer.<br>
                &nbsp;&nbsp;<b>projects</b>&nbsp;&nbsp;- Seçilmiş projeleri ve kısa teknik detayları listeler.<br>
                &nbsp;&nbsp;<b>logic</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Dijital lojik kapı (AND/OR/NOT) simülasyonu başlatır.<br>
                &nbsp;&nbsp;<b>matrix</b>&nbsp;&nbsp;&nbsp;&nbsp;- Terminal ekranına dijital yeşil matrix yağmuru döker.<br>
                &nbsp;&nbsp;<b>clear</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Terminal pencere satırlarını temizler.<br>
                &nbsp;&nbsp;<b>help</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bu yardım tablosunu gösterir.
            `);
            break;
            
        case 'neofetch':
            appendTermLine(`
<span class="term-cyan">       /\         </span>   <span class="term-prompt">Alttre</span>
<span class="term-cyan">      /  \\        </span>   -------------------
<span class="term-cyan">     /\\   \\       </span>   <span class="term-cyan">OS</span>: Arch Linux x86_64 / Pop!_OS Dual Setup
<span class="term-cyan">    /  __  \\      </span>   <span class="term-cyan">WM</span>: Hyprland v0.41.2 (Wayland)
<span class="term-cyan">   /  (  )  \\     </span>   <span class="term-cyan">Shell</span>: zsh 5.9
<span class="term-cyan">  /  ______  \\    </span>   <span class="term-cyan">CPU</span>: Ryzen 7 7600 (Desktop) | i5-8300H (Mobile)
<span class="term-cyan"> /_ /      \\ _\\   </span>   <span class="term-cyan">GPU</span>: RTX 5060 8GB | GTX 1050 Ti
                     <span class="term-cyan">RAM</span>: 32GB DDR5 / 16GB DDR4
                     <span class="term-cyan">CDO</span>: Necati (Chief Debugging Fluffy Cat 🐈)
                     <span class="term-cyan">Tutku</span>: Yapay Zeka, Gömülü Sistemler, Lojik Devreler
            `);
            break;
            
        case 'skills':
            appendTermLine(`
                <span class="term-cyan">Yetenekler ve Seviyeler (Terminal Grafik Gösterimi):</span><br>
                &nbsp;&nbsp;Python & Backend : [██████████████░░░░] 75%<br>
                &nbsp;&nbsp;C++ & Donanım    : [████████████████░░] 80%<br>
                &nbsp;&nbsp;Linux & Bash     : [█████████████████░] 85%<br>
                &nbsp;&nbsp;Lojik & Otomasyon: [██████████████████] 90%<br>
                &nbsp;&nbsp;AI Agent/LLM API : [██████████████░░░░] 70%
            `);
            break;
            
        case 'projects':
            appendTermLine(`
                <span class="term-gold">Geliştirilen Seçkin Projeler:</span><br>
                1. <b>Venus AI v3.0</b> - Reasoning & Acting otonom yapay zeka operatörü.<br>
                2. <b>AlttreHub</b> - Socket.io tabanlı gerçek zamanlı mesajlaşma platformu.<br>
                3. <b>Mini Sumo Robot</b> - Kompakt otonom C++ taktik kodlu dövüş robotu.<br>
                4. <b>Type-C Donanım Modifikasyonları</b> - Özel şarj kontrol entegreli gömülü sistemler.<br>
                <span class="term-muted">İpucu: Sitedeki kartlara tıklayarak detaylı interaktif modalları ve simülatörleri görebilirsiniz!</span>
            `);
            break;
            
        case 'logic':
            appendTermLine("<span class='term-gold'>> Dijital Lojik Kapı Kaskad Simülasyonu Başlatıldı...</span>");
            appendTermLine("<span class='term-cyan'>Tick 1:</span> Giriş A=1, B=1  ──▶  AND Kapısı  ──▶  Çıkış: <span class='term-success'>1</span>");
            setTimeout(() => appendTermLine("<span class='term-cyan'>Tick 2:</span> Çıkış AND  ──▶  OR Kapısı (C=0)  ──▶  Çıkış: <span class='term-success'>1</span>"), 300);
            setTimeout(() => appendTermLine("<span class='term-cyan'>Tick 3:</span> Çıkış OR   ──▶  NOT Kapısı  ──▶  Çıkış: <span class='term-gold'>0</span>  (Sinyal Terslenmiş)"), 600);
            setTimeout(() => appendTermLine("<span class='term-success'>[OK]</span> Lojik devre simülasyonu tamamlandı. Tüm kapılar stabil."), 900);
            break;
            
        case 'matrix':
            runMatrixRain();
            break;
            
        case 'clear':
            termBody.innerHTML = `
                <p><span class="term-prompt">alttre@arch</span>:<span class="term-dir">~</span>$ clear</p>
                <div id="terminal-interactive-content"></div>
                <div style="display: flex; align-items: center; margin-top: 10px;">
                    <span class="term-prompt">alttre@arch</span>:<span class="term-dir">~</span>$&nbsp;
                    <input type="text" id="terminal-input" class="term-input" placeholder="yardım almak için 'help' yazın..." autocomplete="off">
                </div>
            `;
            // Re-fetch input reference and bind listeners
            const newInput = document.getElementById('terminal-input');
            newInput.addEventListener('keydown', (e) => {
                playKeyClick();
                if (e.key === 'Enter') {
                    const cmdText = newInput.value.trim();
                    newInput.value = '';
                    if (cmdText) executeTermCmd(cmdText);
                }
            });
            newInput.addEventListener('focus', () => terminalWindow.classList.add('focused'));
            newInput.addEventListener('blur', () => terminalWindow.classList.remove('focused'));
            newInput.focus();
            break;
            
        default:
            appendTermLine(`<span class="term-prompt">bash: ${cmd}: komut bulunamadı.</span> Yardım almak için <b>help</b> yazın.`);
    }
}

// Interactive Matrix Rain simulation inside mock terminal
function runMatrixRain() {
    state.matrixActive = true;
    appendTermLine("<span class='term-success'>$ matrix_digital_rain.sh başlatıldı. Sonlandırmak için başka bir komut girin.</span>");
    
    let iterations = 0;
    state.matrixIntervalId = setInterval(() => {
        if (!state.matrixActive || iterations > 40) {
            clearInterval(state.matrixIntervalId);
            state.matrixActive = false;
            return;
        }
        
        let line = "";
        for (let i = 0; i < 45; i++) {
            line += Math.random() > 0.85 ? `<span style="color: #fff; text-shadow: 0 0 5px #fff">${Math.floor(Math.random()*10)}</span>` : `<span style="color: #0f0; opacity: ${Math.random().toFixed(2)}">${String.fromCharCode(33 + Math.floor(Math.random() * 93))}</span>`;
        }
        appendTermLine(line);
        iterations++;
    }, 120);
}

// --- 5. Project Modals & Dynamic Micro-Widgets ---
const projectDetails = {
    venus_ai: {
        title: "🤖 Venus AI v3.0 & Flux (Otonom Ajan)",
        summary: "<b>Venus AI v3.0</b>, Windows işletim sistemi üzerinde klavye ve fare komutlarını yürütebilen, Playwright API'leri üzerinden tarayıcı otomasyonlarını koordine edebilen gelişmiş bir <b>ReAct (Reasoning and Acting)</b> yapay zeka ajanıdır.<br><br>Dil modellerinin (Gemini, Qwen, DeepSeek) akıl yürütme döngüsünü işletim sistemi seviyesinde çalıştırarak karmaşık yazılım geliştirme, test etme ve donanım firmware derleme adımlarını tek başına planlayıp icra edebilir.",
        widget: "venus",
        sources: [
            { name: "Nebula Team GitHub", url: "https://github.com/Alttrest" },
            { name: "ReAct Ajan Mimarisi", url: "https://arxiv.org/abs/2210.03629" }
        ]
    },
    alttrehub: {
        title: "🚀 AlttreHub (SocketIO Ekosistemi)",
        summary: "Geleneksel web sitelerindeki ağır HTTP Polling (sürekli sunucu sorgulama) yükünü engellemek adına tasarlanmış gerçek zamanlı mesajlaşma ve dosya transfer altyapısıdır.<br><br><b>Flask-SocketIO</b> mimarisi kullanılarak, sunucu ile istemci arasında çift yönlü ve anlık WebSocket tüneli oluşturuldu. Bu sayede sunucu üzerindeki ağ trafiği ve gecikmeler %80 oranında düşürüldü.",
        widget: "socket",
        sources: [
            { name: "GitHub Reposu", url: "https://github.com/Alttrest" },
            { name: "Flask SocketIO Dökümantasyon", url: "https://flask-socketio.readthedocs.io/" }
        ]
    },
    athletix: {
        title: "🏋️ Athletixfitness (CMS & Web Çözümü)",
        summary: "Alanya'da faaliyet gösteren spor salonları ve antrenörler için özel olarak kodlanmış, dinamik bir İçerik Yönetim Sistemidir (CMS).<br><br>Yönetim paneli sayesinde antrenörler üye listelerini, çalışma programlarını ve blog yazılarını tamamen bağımsız bir panelden güncelleyebilir. SQLite/PostgreSQL veritabanı şemaları ile optimize edilmiş backend yapısına sahiptir. Aşağıda simüle edilmiş antrenör CMS yönetim arayüzünü inceleyebilirsiniz:",
        widget: "fitness",
        sources: [
            { name: "Proje Demosu", url: "https://github.com/Alttrest" }
        ]
    },
    minisumo: {
        title: "🤖 Mini Sumo Robot (Ödüllü Otonom)",
        summary: "<b>Fibonacci Robotik Yarışmasında Jüri Özel Ödülü</b> alan bu robot, Arduino Nano kontrolcüsü ve C++ ile yazılmış anlık sensör tarama algoritmalarına sahiptir.<br><br>MZ80 kızılötesi mesafe sensörlerinden gelen verileri 20ms'lik bir döngüyle süzerek, rakip robotun konumunu hesaplar ve taktiksel motor sürücüsü tetiklemeleri (ters tork, ani atılım) gerçekleştirir. Aşağıdaki simülatörden robotun lojik çevrimini test edebilirsiniz!",
        widget: "sumo",
        sources: [
            { name: "Sumo Robot Kodu", url: "https://github.com/Alttrest" },
            { name: "Fibonacci Yarışması", url: "https://fibonacciturkiye.com" }
        ]
    },
    hardware_mods: {
        title: "⚙️ Gömülü Donanım Modifikasyonları",
        summary: "Eski şarj girişlerine sahip mikrodenetleyicileri ve elektronik donanımları günümüz standardı olan <b>Type-C</b> ve Li-Po pillere yükseltme projesidir.<br><br>Arduino Nano gibi 5V regülatörlerine sahip kartlara TP4056 Li-Po şarj entegreleri ve Type-C dişi soketler lehimlenerek, güvenli şarj çevrimi oluşturuldu. Modern USB-C PD şarj cihazlarının kartı algılayıp 5V vermesi için gerekli CC1 ve CC2 pinlerine <b>5.1kΩ pull-down dirençleri</b> yerleştirildi. Aşağıdaki interaktif şemaya tıklayarak lojiği inceleyin:",
        widget: "hardware",
        sources: [
            { name: "Mod Rehberi", url: "https://github.com/Alttrest" }
        ]
    },
    vtol: {
        title: "🚁 Teknofest VTOL İHA Projesi",
        summary: "Hibrit dikey kalkış yapabilen ve yatay uçuş moduna geçebilen yenilikçi bir İnsansız Hava Aracı projesidir.<br><br><b>Pixhawk 4</b> otonom uçuş kontrol kartı üzerinde ArduPilot/PX4 konfigürasyonları yapılarak, 4 dikey motor ile dikey kalkış (VTOL) gerçekleştikten sonra 1 itici arka motor devreye sokulur ve aerodinamik kaldırma kuvveti ile yatay uçuşa geçiş (transition) sağlanır. Aşağıdaki telemetri panelinden kalkış ve seyir simülatörünü test edebilirsiniz:",
        widget: "vtol",
        sources: [
            { name: "Teknofest Havacılık", url: "https://teknofest.org" }
        ]
    },
    ai_agent: {
        title: "🧠 Yerel Yapay Zeka Masaüstü Asistanı",
        summary: "İnternet bağlantısına ihtiyaç duymadan, yerelde çalışan <b>Llama-3</b> gibi hafif dil modellerini kullanarak bilgisayar işletim sistemini kontrol etmeyi sağlayan akıllı masaüstü otomasyonudur.<br><br>Python <b>subprocess</b> modülü ile Arch Linux/Pop!_OS terminaline bağlanan sistem, 'tarayıcıyı aç', 'sistemi güncelle' veya 'arka plan müziğini çal' gibi sesli veya yazılı komutları güvenli lojik süzgeçlerden geçirerek terminale yansıtır. Aşağıdan asistanı test edebilirsiniz:",
        widget: "assistant",
        sources: [
            { name: "Lokal Llama Entegrasyonu", url: "https://ollama.com" }
        ]
    },
    devlog_arch: {
        title: "🐧 Arch Linux (Hyprland WM) Optimizasyonu",
        summary: "Performansı en üst düzeye çıkarmak için minimal <b>Arch Linux</b> çekirdeği üzerine kurulu <b>Hyprland Tiling Window Manager</b> yapılandırmamdır.<br><br>Razer ve SteelSeries çevre birimlerinin sürücü uyumunu sağlamak için özel udev kuralları tanımlanmış, sistem kaynaklarının %98'inin projelere ve robotik derlemelere ayrılabilmesi amacıyla arka plan servisleri optimize edilmiştir. Dotfile dosyalarım aktif olarak güncellenmektedir. Aşağıdan canlı Waybar sistem kaynak monitörü simülatörünü izleyebilirsiniz:",
        widget: "arch_stats",
        sources: [
            { name: "Dotfiles Reposu", url: "https://github.com/Alttrest" }
        ]
    },
    devlog_socket: {
        title: "⚡ WebSocket vs Polling Performans Devlog",
        summary: "Gerçek zamanlı uygulamalarda HTTP Polling ve WebSockets arasındaki veri transferi karşılaştırmasıdır.<br><br>Yaptığım testlerde, her 1 saniyede bir veri kontrolü yapan polling yöntemi sunucuda yoğun bir header trafiği oluştururken, WebSocket (Flask-SocketIO) tüneli kurulduktan sonra paket yükü <b>%92 oranında azaltılmış</b> ve gecikme süresi 150ms'den anlık 8ms seviyelerine indirilmiştir. Aşağıdaki grafikten gerçek zamanlı gecikme farkını izleyebilirsiniz:",
        widget: "benchmark",
        sources: [
            { name: "Socket.io Standartları", url: "https://socket.io" }
        ]
    }
};

const detailModal = document.getElementById('detail-modal');
const modalHeader = document.getElementById('modal-header');
const modalSummary = document.getElementById('modal-summary');
const modalInteractiveWidget = document.getElementById('modal-interactive-widget');
const modalSources = document.getElementById('modal-sources');

function openDetailModal(projKey) {
    playKeyClick();
    const data = projectDetails[projKey];
    if (!data) return;

    modalHeader.innerHTML = data.title;
    modalSummary.innerHTML = data.summary;
    
    // Clear previous widget
    modalInteractiveWidget.innerHTML = '';
    
    // Mount custom interactive widget based on selection
    if (data.widget === 'sumo') {
        mountSumoSimulator();
    } else if (data.widget === 'hardware') {
        mountHardwareSchematic();
    } else if (data.widget === 'venus') {
        mountVenusLogWidget();
    } else if (data.widget === 'socket') {
        mountSocketIOLogWidget();
    } else if (data.widget === 'fitness') {
        mountFitnessWidget();
    } else if (data.widget === 'vtol') {
        mountVTOLWidget();
    } else if (data.widget === 'assistant') {
        mountAssistantWidget();
    } else if (data.widget === 'arch_stats') {
        mountArchStatsWidget();
    } else if (data.widget === 'benchmark') {
        mountBenchmarkWidget();
    }

    // Sources Setup
    modalSources.innerHTML = '';
    data.sources.forEach(src => {
        const a = document.createElement('a');
        a.className = 'source-link';
        a.href = src.url;
        a.target = '_blank';
        a.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            ${src.name}
        `;
        a.addEventListener('click', playKeyClick);
        modalSources.appendChild(a);
    });

    detailModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Global widget interval holders for clean cleanup
let vtolSimInterval = null;
let archStatsInterval = null;
let benchmarkInterval = null;

function closeDetailModal() {
    playKeyClick();
    detailModal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Clean up simulation loops
    if (state.sumoSimInterval) {
        clearInterval(state.sumoSimInterval);
        state.sumoSimInterval = null;
    }
    if (vtolSimInterval) {
        clearInterval(vtolSimInterval);
        vtolSimInterval = null;
    }
    if (archStatsInterval) {
        clearInterval(archStatsInterval);
        archStatsInterval = null;
    }
    if (benchmarkInterval) {
        clearInterval(benchmarkInterval);
        benchmarkInterval = null;
    }
}

// --- 5.5. Additional Interactive Widgets ---

// 5.5.1. Athletix Fitness CMS Widget
let fitnessMemberCount = 148;

function mountFitnessWidget() {
    modalInteractiveWidget.innerHTML = `
        <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--card-border); border-radius: 12px; padding: 20px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 10px; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <h4 style="font-family: var(--font-display); color: var(--arch-cyan); margin: 0;">Athletix Fitness - Yönetici Paneli (CMS)</h4>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--term-green);">Veritabanı: SQLite</span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px;">
                <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid var(--card-border); text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted);">Toplam Üye</div>
                    <div id="fitness-members-count" style="font-size: 1.25rem; font-weight: bold; color: var(--text-white);">${fitnessMemberCount}</div>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid var(--card-border); text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted);">Aktif Planlar</div>
                    <div style="font-size: 1.25rem; font-weight: bold; color: var(--hypr-purple);">64</div>
                </div>
                <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 8px; border: 1px solid var(--card-border); text-align: center;">
                    <div style="font-size: 0.75rem; color: var(--text-muted);">Sunucu Durumu</div>
                    <div style="font-size: 1rem; font-weight: bold; color: var(--term-green);">Online</div>
                </div>
            </div>

            <div style="max-height: 120px; overflow-y: auto; background: #080b0f; border-radius: 8px; padding: 10px; font-family: var(--font-mono); font-size: 0.8rem; margin-bottom: 15px; text-align: left; border: 1px solid var(--card-border);" id="fitness-log-list">
                <p style="color: var(--text-muted); margin-bottom: 4px;">[SYS] Üye veritabanı yüklendi.</p>
                <p style="color: var(--text-muted); margin-bottom: 4px;">[SYS] Antrenman planları önbelleklendi.</p>
            </div>

            <div style="display: flex; gap: 10px;">
                <button class="sumo-btn" onclick="addFitnessMember()" style="flex: 1; border-color: var(--arch-cyan); color: var(--arch-cyan); background: rgba(0, 210, 255, 0.05);">Yeni Üye Ekle</button>
                <button class="sumo-btn" onclick="updateFitnessRoutine()" style="flex: 1; border-color: var(--hypr-purple); color: var(--hypr-purple); background: rgba(189, 147, 249, 0.05);">Planı Güncelle</button>
            </div>
        </div>
    `;
}

window.addFitnessMember = function() {
    playKeyClick();
    fitnessMemberCount++;
    const countEl = document.getElementById('fitness-members-count');
    if (countEl) countEl.innerText = fitnessMemberCount;
    
    const logList = document.getElementById('fitness-log-list');
    if (logList) {
        const names = ["Ege", "Alperen", "Buse", "Selin", "Mert", "Deniz", "Kaan", "Melis"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const p = document.createElement('p');
        p.style.color = "var(--term-green)";
        p.style.marginBottom = "4px";
        p.innerText = `[SQL] INSERT INTO members (name, joined) VALUES ('${randomName}', datetime('now'));`;
        logList.appendChild(p);
        logList.scrollTop = logList.scrollHeight;
    }
};

window.updateFitnessRoutine = function() {
    playKeyClick();
    const logList = document.getElementById('fitness-log-list');
    if (logList) {
        const routines = ["Split Programı v2.1", "Full-Body Güç / Hipertrofi", "Kardiyo Odaklı HIIT Dayanıklılık"];
        const randomRoutine = routines[Math.floor(Math.random() * routines.length)];
        const p = document.createElement('p');
        p.style.color = "var(--award-gold)";
        p.style.marginBottom = "4px";
        p.innerText = `[CMS] Antrenör güncelleme yaptı: '${randomRoutine}' şablonu güncellendi.`;
        logList.appendChild(p);
        logList.scrollTop = logList.scrollHeight;
    }
};


// 5.5.2. Teknofest VTOL Flight Instrument Widget
function mountVTOLWidget() {
    modalInteractiveWidget.innerHTML = `
        <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--card-border); border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 10px; margin-bottom: 15px; text-align: left; flex-wrap: wrap; gap: 10px;">
                <h4 style="font-family: var(--font-display); color: var(--award-gold); margin: 0;">Teknofest VTOL - Uçuş Telemetri Paneli</h4>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--arch-cyan);">Firmware: PX4 Autopilot</span>
            </div>
            
            <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 15px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 130px; background: #080b0f; border-radius: 8px; padding: 10px; border: 1px solid var(--card-border);">
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 4px;">YÜKSEKLİK</div>
                    <div id="vtol-alt" style="font-size: 1.3rem; font-weight: bold; color: var(--text-white); font-family: var(--font-mono);">0.0 m</div>
                </div>
                <div style="flex: 1; min-width: 130px; background: #080b0f; border-radius: 8px; padding: 10px; border: 1px solid var(--card-border);">
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 4px;">MOTOR RPM</div>
                    <div id="vtol-rpm" style="font-size: 1.3rem; font-weight: bold; color: var(--hypr-purple); font-family: var(--font-mono);">0</div>
                </div>
                <div style="flex: 1; min-width: 130px; background: #080b0f; border-radius: 8px; padding: 10px; border: 1px solid var(--card-border);">
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-bottom: 4px;">UÇUŞ MODU</div>
                    <div id="vtol-mode" style="font-size: 1.1rem; font-weight: bold; color: var(--text-muted);">LANDED</div>
                </div>
            </div>

            <canvas id="vtol-canvas" width="320" height="160" style="background: #05070a; border: 1.5px solid var(--card-border); border-radius: 8px; margin-bottom: 15px; display: block; margin: 0 auto 15px auto; max-width: 100%;"></canvas>

            <button class="sumo-btn" onclick="startVTOLFlightSim()" id="vtol-sim-btn" style="width: 100%; border-color: var(--award-gold); color: var(--award-gold); background: rgba(255, 184, 108, 0.05);">Simüle Uçuş Testi Başlat</button>
        </div>
    `;
    drawVTOLHorizon(0, 0);
}

function drawVTOLHorizon(pitch, roll) {
    const canvas = document.getElementById('vtol-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    ctx.fillStyle = "#05070a";
    ctx.fillRect(0, 0, w, h);
    
    // Draw horizon indicator sphere
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(roll * Math.PI / 180);
    
    // Sky (Blue half)
    ctx.fillStyle = "#1e293b";
    ctx.beginPath();
    ctx.arc(0, 0, 55, Math.PI, 0);
    ctx.fill();
    
    // Ground (Green half)
    ctx.fillStyle = "#14532d";
    ctx.beginPath();
    ctx.arc(0, 0, 55, 0, Math.PI);
    ctx.fill();
    
    // Horizon divider
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-55, 0);
    ctx.lineTo(55, 0);
    ctx.stroke();
    
    // Pitch indicator lines
    ctx.strokeStyle = "rgba(255,255,255,0.4)";
    ctx.lineWidth = 1;
    // +10 pitch
    ctx.beginPath();
    ctx.moveTo(-15, -15 - pitch * 1.5);
    ctx.lineTo(15, -15 - pitch * 1.5);
    // -10 pitch
    ctx.moveTo(-15, 15 - pitch * 1.5);
    ctx.lineTo(15, 15 - pitch * 1.5);
    ctx.stroke();
    
    ctx.restore();
    
    // Airplane HUD fixed element
    ctx.strokeStyle = "var(--arch-cyan)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 35, h / 2);
    ctx.lineTo(w / 2 - 12, h / 2);
    ctx.lineTo(w / 2 - 4, h / 2 + 8);
    ctx.lineTo(w / 2 + 4, h / 2 + 8);
    ctx.lineTo(w / 2 + 12, h / 2);
    ctx.lineTo(w / 2 + 35, h / 2);
    ctx.stroke();
    
    // Center point
    ctx.fillStyle = "var(--arch-cyan)";
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, 3, 0, Math.PI * 2);
    ctx.fill();
}

window.startVTOLFlightSim = function() {
    playKeyClick();
    if (vtolSimInterval) {
        clearInterval(vtolSimInterval);
    }
    
    const modeEl = document.getElementById('vtol-mode');
    const altEl = document.getElementById('vtol-alt');
    const rpmEl = document.getElementById('vtol-rpm');
    const btn = document.getElementById('vtol-sim-btn');
    
    if (btn) {
        btn.disabled = true;
        btn.style.opacity = 0.5;
    }
    
    let stage = 0; // 0: takeoff, 1: transition, 2: cruise, 3: descent
    let alt = 0.0;
    let rpm = 0;
    let roll = 0;
    let pitch = 0;
    let tickCount = 0;
    
    vtolSimInterval = setInterval(() => {
        tickCount++;
        
        if (stage === 0) { // VTOL Takeoff
            if (modeEl) { modeEl.innerText = "VTOL CLIMB"; modeEl.style.color = "var(--arch-cyan)"; }
            rpm = 8400 + Math.floor(Math.random() * 300);
            alt += 0.8;
            pitch = -10;
            roll = Math.sin(tickCount * 0.4) * 4;
            if (alt >= 12.0) stage = 1;
        } 
        else if (stage === 1) { // Transition
            if (modeEl) { modeEl.innerText = "TRANSITION"; modeEl.style.color = "var(--award-gold)"; }
            rpm = 6800 + Math.floor(Math.random() * 300);
            alt += 0.3;
            pitch = 6;
            roll = 10 + Math.sin(tickCount * 0.3) * 5;
            if (tickCount > 45) stage = 2;
        }
        else if (stage === 2) { // Cruise
            if (modeEl) { modeEl.innerText = "CRUISE H-FLIGHT"; modeEl.style.color = "var(--term-green)"; }
            rpm = 5100 + Math.floor(Math.random() * 200);
            alt = 15.0 + Math.sin(tickCount * 0.1) * 0.4;
            pitch = 0;
            roll = Math.sin(tickCount * 0.15) * 3;
            if (tickCount > 85) stage = 3;
        }
        else if (stage === 3) { // Landing descent
            if (modeEl) { modeEl.innerText = "DESCENT & LAND"; modeEl.style.color = "var(--danger-red)"; }
            rpm = 3800 + Math.floor(Math.random() * 200);
            alt -= 0.6;
            pitch = 5;
            roll = Math.sin(tickCount * 0.3) * 3;
            if (alt <= 0.2) {
                alt = 0.0;
                rpm = 0;
                pitch = 0;
                roll = 0;
                if (modeEl) { modeEl.innerText = "LANDED"; modeEl.style.color = "var(--text-muted)"; }
                if (btn) {
                    btn.disabled = false;
                    btn.style.opacity = 1;
                }
                clearInterval(vtolSimInterval);
                playConfirmChime();
            }
        }
        
        if (altEl) altEl.innerText = alt.toFixed(1) + " m";
        if (rpmEl) rpmEl.innerText = rpm.toLocaleString();
        
        drawVTOLHorizon(pitch, roll);
    }, 120);
};


// 5.5.3. Natural Language Assistant Simulation Widget
function mountAssistantWidget() {
    modalInteractiveWidget.innerHTML = `
        <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--card-border); border-radius: 12px; padding: 20px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 10px; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <h4 style="font-family: var(--font-display); color: var(--arch-cyan); margin: 0;">Lokal AI Asistanı - ReAct Döngüsü Test Cihazı</h4>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--hypr-purple);">Model: Llama-3-Local</span>
            </div>
            
            <div style="background: #05070a; border-radius: 8px; padding: 15px; font-family: var(--font-mono); font-size: 0.8rem; height: 160px; overflow-y: auto; line-height: 1.6; margin-bottom: 15px; text-align: left; border: 1px solid var(--card-border);" id="assistant-terminal">
                <p style="color: var(--text-muted); margin-bottom: 4px;">[SYS] Lokal Llama sunucusuna bağlanıldı. Komut almaya hazır.</p>
                <p style="color: var(--text-white); margin-bottom: 4px;">Örnek komutlar: 'sistemi güncelle', 'müzik çal', 'hava durumu'</p>
            </div>

            <div style="display: flex; gap: 10px;">
                <input type="text" id="assistant-input" placeholder="Yapay zeka asistanına komut fısıldayın..." style="flex: 1; background: rgba(255,255,255,0.02); border: 1px solid var(--card-border); border-radius: 6px; padding: 8px 12px; font-family: var(--font-sans); font-size: 0.85rem; color: #fff;" autocomplete="off">
                <button class="sumo-btn" onclick="sendAssistantCommand()" style="border-color: var(--arch-cyan); color: var(--arch-cyan); background: rgba(0, 210, 255, 0.05); padding: 8px 16px;">Gönder</button>
            </div>
        </div>
    `;
    
    const input = document.getElementById('assistant-input');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') sendAssistantCommand();
        });
    }
}

window.sendAssistantCommand = function() {
    const input = document.getElementById('assistant-input');
    if (!input) return;
    const cmd = input.value.trim();
    if (!cmd) return;
    input.value = '';
    
    playKeyClick();
    
    const term = document.getElementById('assistant-terminal');
    if (!term) return;
    
    const pUser = document.createElement('p');
    pUser.style.color = "var(--arch-cyan)";
    pUser.style.marginBottom = "4px";
    pUser.innerHTML = `> Kullanıcı: ${cmd}`;
    term.appendChild(pUser);
    term.scrollTop = term.scrollHeight;
    
    // Simulating ReAct cycles
    let steps = [];
    if (cmd.toLowerCase().includes('güncel') || cmd.toLowerCase().includes('update') || cmd.toLowerCase().includes('sistem')) {
        steps = [
            "<span style='color: var(--hypr-purple);'>[Düşünce]</span> Kullanıcı sistem güncellemesi istiyor. Bash terminal yetkisine ihtiyacım var.",
            "<span style='color: var(--award-gold);'>[Eylem]</span> Subprocess: sudo pacman -Syu --noconfirm",
            "<span style='color: var(--text-muted);'>[Gözlem]</span> Güncelleme başlatıldı. Toplam 12 paket güncellenecek.",
            "<span style='color: var(--term-green);'>[Sonuç]</span> Güncelleme tamamlandı. Sistem kararlı ve güncel."
        ];
    } else if (cmd.toLowerCase().includes('müzik') || cmd.toLowerCase().includes('music') || cmd.toLowerCase().includes('çal')) {
        steps = [
            "<span style='color: var(--hypr-purple);'>[Düşünce]</span> Kullanıcı müzik çalmamı istiyor. 'spotify' veya yerel oynatıcıyı kontrol edebilirim.",
            "<span style='color: var(--award-gold);'>[Eylem]</span> Subprocess: playerctl play || spotify &",
            "<span style='color: var(--text-muted);'>[Gözlem]</span> Spotify daemon yanıt verdi. Müzik oynatılıyor.",
            "<span style='color: var(--term-green);'>[Sonuç]</span> Nebula Chillout çalma listesi arka planda başlatıldı."
        ];
    } else if (cmd.toLowerCase().includes('hava') || cmd.toLowerCase().includes('weather') || cmd.toLowerCase().includes('derece')) {
        steps = [
            "<span style='color: var(--hypr-purple);'>[Düşünce]</span> Alanya lokasyonundaki hava durumunu sorgulamam gerek. Curl wttr.in kullanabilirim.",
            "<span style='color: var(--award-gold);'>[Eylem]</span> Subprocess: curl -s wttr.in/Alanya?format=3",
            "<span style='color: var(--text-muted);'>[Gözlem]</span> Yanıt: Alanya: ☀️ +28°C Rüzgar: 14km/s",
            "<span style='color: var(--term-green);'>[Sonuç]</span> Alanya'da hava güneşli ve sıcaklık 28 derece."
        ];
    } else {
        steps = [
            `<span style='color: var(--hypr-purple);'>[Düşünce]</span> '${cmd}' komutunu aldım. Uygun bir yerel shell komutu planlıyorum.`,
            "<span style='color: var(--award-gold);'>[Eylem]</span> Subprocess: echo 'Simulated execution'",
            "<span style='color: var(--text-muted);'>[Gözlem]</span> Standard output: Success.",
            `<span style='color: var(--term-green);'>[Sonuç]</span> Komut güvenli bir şekilde simüle edildi.`
        ];
    }
    
    let idx = 0;
    const interval = setInterval(() => {
        if (!term || idx >= steps.length) {
            clearInterval(interval);
            return;
        }
        const p = document.createElement('p');
        p.innerHTML = steps[idx];
        p.style.marginBottom = "4px";
        term.appendChild(p);
        term.scrollTop = term.scrollHeight;
        
        if (state.audioEnabled) playKeyClick();
        idx++;
    }, 800);
};


// 5.5.4. Waybar Custom System Resource Monitor Chart
let archStatsHistory = Array(40).fill(15);

function mountArchStatsWidget() {
    modalInteractiveWidget.innerHTML = `
        <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--card-border); border-radius: 12px; padding: 20px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 10px; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <h4 style="font-family: var(--font-display); color: var(--arch-cyan); margin: 0;">Waybar Monitor - Canlı Kaynak Tüketimi (60fps)</h4>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--term-green);">Kernel: 6.9.1-arch1-1</span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 15px; font-family: var(--font-mono); font-size: 0.85rem;">
                <div style="background: #080b0f; padding: 10px; border-radius: 8px; border: 1px solid var(--card-border); text-align: center;">
                    <div style="color: var(--text-muted); font-size: 0.68rem; margin-bottom: 4px;">CPU KULLANIMI</div>
                    <div id="arch-cpu-val" style="font-size: 1.2rem; font-weight: bold; color: var(--arch-cyan);">12%</div>
                </div>
                <div style="background: #080b0f; padding: 10px; border-radius: 8px; border: 1px solid var(--card-border); text-align: center;">
                    <div style="color: var(--text-muted); font-size: 0.68rem; margin-bottom: 4px;">RAM KULLANIMI</div>
                    <div id="arch-ram-val" style="font-size: 1.2rem; font-weight: bold; color: var(--hypr-purple);">4.2 GB</div>
                </div>
                <div style="background: #080b0f; padding: 10px; border-radius: 8px; border: 1px solid var(--card-border); text-align: center;">
                    <div style="color: var(--text-muted); font-size: 0.68rem; margin-bottom: 4px;">CPU SICAKLIĞI</div>
                    <div id="arch-temp-val" style="font-size: 1.2rem; font-weight: bold; color: var(--award-gold);">48°C</div>
                </div>
            </div>

            <canvas id="arch-chart-canvas" width="400" height="150" style="background: #05070a; border: 1px solid var(--card-border); border-radius: 8px; display: block; margin: 0 auto; max-width: 100%;"></canvas>
        </div>
    `;
    startArchStatsSim();
}

function startArchStatsSim() {
    if (archStatsInterval) clearInterval(archStatsInterval);
    
    const cpuEl = document.getElementById('arch-cpu-val');
    const ramEl = document.getElementById('arch-ram-val');
    const tempEl = document.getElementById('arch-temp-val');
    const canvas = document.getElementById('arch-chart-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    archStatsInterval = setInterval(() => {
        if (!canvas || !document.getElementById('arch-chart-canvas')) {
            clearInterval(archStatsInterval);
            return;
        }
        
        // Simulating fluctuations
        const usage = Math.max(5, Math.min(95, archStatsHistory[archStatsHistory.length - 1] + (Math.random() - 0.5) * 8));
        archStatsHistory.push(usage);
        archStatsHistory.shift();
        
        // Updates UI
        if (cpuEl) cpuEl.innerText = `${Math.round(usage)}%`;
        if (ramEl) ramEl.innerText = `${(3.8 + (usage/50)).toFixed(1)} GB`;
        if (tempEl) tempEl.innerText = `${Math.round(42 + (usage/3))}°C`;
        
        // Draw Chart
        const w = canvas.width;
        const h = canvas.height;
        ctx.fillStyle = "#05070a";
        ctx.fillRect(0, 0, w, h);
        
        // Draw grid
        ctx.strokeStyle = "rgba(255,255,255,0.03)";
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 40) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y < h; y += 30) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
        
        // Draw Line graph
        ctx.strokeStyle = "var(--arch-cyan)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        const step = w / (archStatsHistory.length - 1);
        for (let i = 0; i < archStatsHistory.length; i++) {
            const x = i * step;
            const y = h - (archStatsHistory[i] / 100 * (h - 20) + 10);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Glow gradient fill under line
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, "rgba(0, 210, 255, 0.15)");
        grad.addColorStop(1, "rgba(0, 210, 255, 0.0)");
        ctx.fillStyle = grad;
        ctx.fill();
        
    }, 200);
}


// 5.5.5. WebSocket vs HTTP Polling Latency Benchmark Chart Widget
let wsHistory = Array(45).fill(8);
let pollingHistory = Array(45).fill(140);

function mountBenchmarkWidget() {
    modalInteractiveWidget.innerHTML = `
        <div style="background: rgba(0,0,0,0.25); border: 1px solid var(--card-border); border-radius: 12px; padding: 20px; margin: 20px 0;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 10px; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <h4 style="font-family: var(--font-display); color: var(--hypr-purple); margin: 0;">Gecikme Grafiği - WebSocket vs HTTP Polling (Canlı)</h4>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--arch-cyan);">Bant Genişliği Tasarrufu: %92</span>
            </div>
            
            <div style="display: flex; justify-content: space-around; font-family: var(--font-mono); font-size: 0.75rem; margin-bottom: 15px; flex-wrap: wrap; gap: 10px;">
                <div>
                    <span style="display:inline-block; width:10px; height:10px; background:var(--term-green); margin-right:6px; border-radius:3px;"></span>
                    <span style="color:#fff;">WebSocket (Ortalama: 8ms)</span>
                </div>
                <div>
                    <span style="display:inline-block; width:10px; height:10px; background:var(--danger-red); margin-right:6px; border-radius:3px;"></span>
                    <span style="color:#fff;">HTTP Polling (Ortalama: 140ms)</span>
                </div>
            </div>

            <canvas id="benchmark-canvas" width="400" height="150" style="background: #05070a; border: 1px solid var(--card-border); border-radius: 8px; display: block; margin: 0 auto; max-width: 100%;"></canvas>
        </div>
    `;
    startBenchmarkSim();
}

function startBenchmarkSim() {
    if (benchmarkInterval) clearInterval(benchmarkInterval);
    
    const canvas = document.getElementById('benchmark-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    benchmarkInterval = setInterval(() => {
        if (!canvas || !document.getElementById('benchmark-canvas')) {
            clearInterval(benchmarkInterval);
            return;
        }
        
        // Simulating data streams
        const wsVal = 6 + Math.random() * 4;
        const pollingVal = 100 + Math.random() * 80 + (Math.random() > 0.92 ? 100 : 0);
        
        wsHistory.push(wsVal);
        wsHistory.shift();
        
        pollingHistory.push(pollingVal);
        pollingHistory.shift();
        
        const w = canvas.width;
        const h = canvas.height;
        ctx.fillStyle = "#05070a";
        ctx.fillRect(0, 0, w, h);
        
        // Draw grid
        ctx.strokeStyle = "rgba(255,255,255,0.03)";
        ctx.lineWidth = 1;
        for (let x = 0; x < w; x += 40) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
        }
        for (let y = 0; y < h; y += 30) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
        }
        
        const step = w / (wsHistory.length - 1);
        
        // Draw HTTP Polling line (red)
        ctx.strokeStyle = "var(--danger-red)";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        for (let i = 0; i < pollingHistory.length; i++) {
            const x = i * step;
            const y = h - (pollingHistory[i] / 300 * (h - 20) + 10);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Draw WebSocket line (green)
        ctx.strokeStyle = "var(--term-green)";
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        for (let i = 0; i < wsHistory.length; i++) {
            const x = i * step;
            const y = h - (wsHistory[i] / 300 * (h - 20) + 10);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
    }, 200);
}


// --- 6. Sumo Arena Canvas Simulator Widget ---
function mountSumoSimulator() {
    modalInteractiveWidget.innerHTML = `
        <div class="sumo-arena-container">
            <div class="sumo-arena-title">
                <span>Dohyo Ring Arena (C++ Otonom Lojik Simülatörü)</span>
                <span id="sumo-state" style="color: var(--term-green);">Beklemede</span>
            </div>
            <canvas id="sumo-canvas" width="400" height="250"></canvas>
            <div class="sumo-controls">
                <button class="sumo-btn" onclick="startSumoCPPLogic()">Taktiksel C++ Algoritmasını Çalıştır</button>
                <button class="sumo-btn" style="background: rgba(255,255,255,0.03); color: #fff; border-color: var(--card-border);" onclick="resetSumoSim()">Reset</button>
            </div>
        </div>
    `;
    resetSumoSim();
}

let sumoPhysics = {
    ringX: 200, ringY: 125, ringR: 95,
    myRobot: { x: 160, y: 125, r: 16, angle: 0, speed: 0, state: 'search' },
    enemyRobot: { x: 240, y: 120, r: 16, angle: Math.PI, speed: 0.8 },
    active: false
};

function drawSumoArena(ctx) {
    // Clear
    ctx.fillStyle = "#0d1117";
    ctx.fillRect(0, 0, 400, 250);
    
    // Draw Dohyo Ring (Black with white border)
    ctx.beginPath();
    ctx.arc(sumoPhysics.ringX, sumoPhysics.ringY, sumoPhysics.ringR, 0, 2 * Math.PI);
    ctx.fillStyle = "#080b0f";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();

    // Tawara start lines (Two parallel brown-red marks in center)
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(175, 110, 4, 30);
    ctx.fillRect(221, 110, 4, 30);

    // Draw Opponent Robot (Gray box representation)
    ctx.save();
    ctx.translate(sumoPhysics.enemyRobot.x, sumoPhysics.enemyRobot.y);
    ctx.rotate(sumoPhysics.enemyRobot.angle);
    ctx.fillStyle = "#ff5555"; // Opponent is Red
    ctx.fillRect(-12, -12, 24, 24);
    // Sensor wedge
    ctx.fillStyle = "#888";
    ctx.fillRect(10, -8, 4, 16);
    ctx.restore();

    // Draw Alttre's Robot (Arch-themed Cyan glowing robot)
    ctx.save();
    ctx.translate(sumoPhysics.myRobot.x, sumoPhysics.myRobot.y);
    ctx.rotate(sumoPhysics.myRobot.angle);
    // Draw body
    ctx.fillStyle = "#00d2ff"; 
    ctx.fillRect(-12, -12, 24, 24);
    // Front steel shield / wedge
    ctx.fillStyle = "#bd93f9";
    ctx.fillRect(10, -10, 4, 20);
    // Sensor IR beam (dashed line when active)
    if (sumoPhysics.active) {
        ctx.strokeStyle = "rgba(80, 250, 123, 0.4)";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(12, 0);
        ctx.lineTo(150, 0);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    ctx.restore();
}

window.resetSumoSim = function() {
    playKeyClick();
    if (state.sumoSimInterval) {
        clearInterval(state.sumoSimInterval);
    }
    
    sumoPhysics.myRobot = { x: 155, y: 125, r: 16, angle: 0, speed: 0, state: 'search' };
    sumoPhysics.enemyRobot = { x: 245, y: 125, r: 16, angle: Math.PI, speed: 0.5 };
    sumoPhysics.active = false;
    
    const canvas = document.getElementById('sumo-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        drawSumoArena(ctx);
    }
    
    const statusLabel = document.getElementById('sumo-state');
    if (statusLabel) {
        statusLabel.innerText = "BEKLEMEDE (C++ Tetiklenmedi)";
        statusLabel.style.color = "var(--text-muted)";
    }
};

window.startSumoCPPLogic = function() {
    playKeyClick();
    if (sumoPhysics.active) return;
    
    sumoPhysics.active = true;
    const canvas = document.getElementById('sumo-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const statusLabel = document.getElementById('sumo-state');
    statusLabel.innerText = "C++ ALGORİTMASI ÇALIŞIYOR";
    statusLabel.style.color = "var(--term-green)";
    
    state.sumoSimInterval = setInterval(() => {
        // --- Simulated C++ Control Loop Logic ---
        // 1. Sensörleri Oku (Read MZ80 sensors / calculate distance & bearing)
        const dx = sumoPhysics.enemyRobot.x - sumoPhysics.myRobot.x;
        const dy = sumoPhysics.enemyRobot.y - sumoPhysics.myRobot.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        // Target angle to face enemy
        const targetAngle = Math.atan2(dy, dx);
        
        // C++ Code Logic mapping
        if (dist < 180) {
            // Sensör algıladı! Hızlanarak doğrudan saldır.
            sumoPhysics.myRobot.state = "ATTACK";
            // Smoothly rotate towards enemy
            let diff = targetAngle - sumoPhysics.myRobot.angle;
            sumoPhysics.myRobot.angle += diff * 0.15;
            sumoPhysics.myRobot.speed = 2.4;
        } else {
            // Arama modu: Kendi ekseninde dönerek sensör araması yap.
            sumoPhysics.myRobot.state = "SEARCH";
            sumoPhysics.myRobot.angle += 0.08;
            sumoPhysics.myRobot.speed = 0;
        }

        // Enemy AI (Simulated opponent logic)
        sumoPhysics.enemyRobot.x += Math.cos(sumoPhysics.enemyRobot.angle) * sumoPhysics.enemyRobot.speed;
        sumoPhysics.enemyRobot.y += Math.sin(sumoPhysics.enemyRobot.angle) * sumoPhysics.enemyRobot.speed;
        
        // Keep enemy slowly drifting or rotating towards center if going out
        const enemyDistFromCenter = Math.sqrt(Math.pow(sumoPhysics.enemyRobot.x - sumoPhysics.ringX, 2) + Math.pow(sumoPhysics.enemyRobot.y - sumoPhysics.ringY, 2));
        if (enemyDistFromCenter > sumoPhysics.ringR - 10) {
            sumoPhysics.enemyRobot.angle = Math.atan2(sumoPhysics.ringY - sumoPhysics.enemyRobot.y, sumoPhysics.ringX - sumoPhysics.enemyRobot.x);
        }

        // Move my robot
        sumoPhysics.myRobot.x += Math.cos(sumoPhysics.myRobot.angle) * sumoPhysics.myRobot.speed;
        sumoPhysics.myRobot.y += Math.sin(sumoPhysics.myRobot.angle) * sumoPhysics.myRobot.speed;

        // Collision Check (Push physics)
        const separation = Math.sqrt(Math.pow(sumoPhysics.enemyRobot.x - sumoPhysics.myRobot.x, 2) + Math.pow(sumoPhysics.enemyRobot.y - sumoPhysics.myRobot.y, 2));
        if (separation < 24) { // Collision bound
            // Force push back opposing robot!
            sumoPhysics.enemyRobot.x += Math.cos(sumoPhysics.myRobot.angle) * 3;
            sumoPhysics.enemyRobot.y += Math.sin(sumoPhysics.myRobot.angle) * 3;
            
            // Soft click audio on impact
            if (Math.random() > 0.4) playKeyClick();
        }

        // Check Out of Ring limits
        const myDistFromCenter = Math.sqrt(Math.pow(sumoPhysics.myRobot.x - sumoPhysics.ringX, 2) + Math.pow(sumoPhysics.myRobot.y - sumoPhysics.ringY, 2));
        const enemyDistCenter = Math.sqrt(Math.pow(sumoPhysics.enemyRobot.x - sumoPhysics.ringX, 2) + Math.pow(sumoPhysics.enemyRobot.y - sumoPhysics.ringY, 2));

        if (enemyDistCenter > sumoPhysics.ringR) {
            clearInterval(state.sumoSimInterval);
            statusLabel.innerText = "KAZANDIN! C++ TAKTİĞİ BAŞARILI 🏆";
            statusLabel.style.color = "var(--award-gold)";
            playConfirmChime();
        } else if (myDistFromCenter > sumoPhysics.ringR) {
            clearInterval(state.sumoSimInterval);
            statusLabel.innerText = "YENİLDİN! Ring dışına düştün.";
            statusLabel.style.color = "var(--danger-red)";
        }

        drawSumoArena(ctx);
    }, 1000 / 30);
};

// --- 7. Interactive Type-C Schematic Modder Widget ---
function mountHardwareSchematic() {
    modalInteractiveWidget.innerHTML = `
        <div class="schematic-container">
            <h4 style="font-family: var(--font-mono); color: var(--arch-cyan); margin-bottom: 10px;">USB Type-C Gömülü Modifikasyon Şeması</h4>
            
            <div style="background: #0d1117; padding: 15px; border-radius: 8px; border: 1px solid var(--card-border); font-family: var(--font-mono); font-size: 0.8rem; line-height: 1.6; color: var(--text-white);">
                <div style="color: var(--text-muted); text-align: center;">--- USB-C GÜÇ GİRİŞİ DÖNGÜSÜ ---</div>
                <div style="display: flex; justify-content: space-around; margin: 15px 0; font-size: 1.1rem;">
                    <span style="color: var(--arch-cyan);">[USB-C Soketi]</span> 
                    <span>──▶</span> 
                    <span style="color: var(--hypr-purple);">[5.1kΩ Pull-Down]</span> 
                    <span>──▶</span> 
                    <span style="color: var(--term-green);">[TP4056 IC]</span>
                </div>
            </div>

            <div class="schematic-nodes">
                <div class="schematic-node active" id="node-cc" onclick="selectSchematicNode('cc')">
                    <h4>CC1 / CC2 Hatları</h4>
                    <p style="font-size: 0.7rem; color: var(--text-muted);">Pull-down Lojiği</p>
                </div>
                <div class="schematic-node" id="node-tp" onclick="selectSchematicNode('tp')">
                    <h4>TP4056 Şarj Entegresi</h4>
                    <p style="font-size: 0.7rem; color: var(--text-muted);">Li-Po Koruma</p>
                </div>
                <div class="schematic-node" id="node-vbus" onclick="selectSchematicNode('vbus')">
                    <h4>VBUS & GND Modu</h4>
                    <p style="font-size: 0.7rem; color: var(--text-muted);">5V Güç Hattı</p>
                </div>
            </div>

            <div class="schematic-desc-box" id="schematic-desc">
                <strong>CC1/CC2 Pull-Down Dirençleri:</strong> Modern USB-C PD (Power Delivery) şarj adaptörleri, şarj edilecek cihazın algılanması için CC hatlarında direnç bekler. Her iki CC pinine de şasiye (GND) bağlı 5.1kΩ pull-down direnci yerleştirilerek adaptörün kartımıza güvenli bir şekilde 5V vermesi sağlanır.
            </div>
        </div>
    `;
}

window.selectSchematicNode = function(nodeKey) {
    playKeyClick();
    const nodes = document.querySelectorAll('.schematic-node');
    nodes.forEach(n => n.classList.remove('active'));
    
    document.getElementById(`node-${nodeKey}`).classList.add('active');
    const descBox = document.getElementById('schematic-desc');

    if (nodeKey === 'cc') {
        descBox.innerHTML = `<strong>CC1/CC2 Pull-Down Dirençleri:</strong> Modern USB-C PD (Power Delivery) şarj adaptörleri, şarj edilecek cihazın algılanması için CC hatlarında direnç bekler. Her iki CC pinine de şasiye (GND) bağlı 5.1kΩ pull-down direnci yerleştirilerek adaptörün kartımıza güvenli bir şekilde 5V vermesi sağlanır.`;
    } else if (nodeKey === 'tp') {
        descBox.innerHTML = `<strong>TP4056 Lityum Batarya Şarj IC:</strong> Li-Po pillerin güvenli sınır olan 4.2V değerinde şarj edilmesini yönetir. Devreye eklenen dirençler yardımıyla şarj akımı (I_chg) 1A seviyesine sabitlenmiştir. Aşırı deşarj koruması barındırır.`;
    } else if (nodeKey === 'vbus') {
        descBox.innerHTML = `<strong>VBUS ve GND Güç Köprüsü:</strong> Type-C soketinin güç taşıyan ana pinleridir. Bu pinlerden çekilen 5V doğrudan Arduino Nano regülatörüne veya harici devre elemanlarına sigorta (fuse) üzerinden köprülenerek besleme tamamlanır.`;
    }
};

// --- 8. Dynamic Mock Venus AI ReAct Log Widget ---
function mountVenusLogWidget() {
    modalInteractiveWidget.innerHTML = `
        <div style="background: #080b0f; border: 1px solid var(--card-border); border-radius: 10px; padding: 15px; font-family: var(--font-mono); font-size: 0.8rem; color: #fff;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 8px; margin-bottom: 10px; color: var(--text-muted);">
                <span>venus-ai-react-loop.log</span>
                <span style="color: var(--term-green); animate: pulse 1s infinite;">● LIVE</span>
            </div>
            <div id="venus-log-lines" style="height: 140px; overflow-y: auto; line-height: 1.6;">
                <p style="color: var(--text-muted);">[SYS] Venus AI döngüsü başlatılıyor...</p>
            </div>
        </div>
    `;
    
    const logBox = document.getElementById('venus-log-lines');
    const logSteps = [
        "<span style='color: var(--hypr-purple);'>[Düşünce]</span> Hedef donanım test pin yapılandırmasını doğrulamam gerekiyor.",
        "<span style='color: var(--arch-cyan);'>[Eylem]</span> Subprocess API çağrısıyla Arduino pinout okundu.",
        "<span style='color: var(--text-muted);'>[Gözlem]</span> Pin 13 LED çıkışı AKTİF.",
        "<span style='color: var(--hypr-purple);'>[Düşünce]</span> Çıkış alındığına göre web panelini WebSocket üzerinden bilgilendir.",
        "<span style='color: var(--arch-cyan);'>[Eylem]</span> Playwright entegrasyonuyla AlttreHub web arayüzünü tetikle.",
        "<span style='color: var(--term-green);'>[Sonuç]</span> Durum: Tamamlandı. Venus AI kontrol döngüsü stabil."
    ];
    
    let stepIdx = 0;
    const logInterval = setInterval(() => {
        if (!logBox || stepIdx >= logSteps.length) {
            clearInterval(logInterval);
            return;
        }
        const p = document.createElement('p');
        p.innerHTML = logSteps[stepIdx];
        logBox.appendChild(p);
        logBox.scrollTop = logBox.scrollHeight;
        
        if (state.audioEnabled) playKeyClick();
        stepIdx++;
    }, 1200);
}

// --- 9. SocketIO WebSockets Log Widget ---
function mountSocketIOLogWidget() {
    modalInteractiveWidget.innerHTML = `
        <div style="background: #080b0f; border: 1px solid var(--card-border); border-radius: 10px; padding: 15px; font-family: var(--font-mono); font-size: 0.8rem; color: #fff;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--card-border); padding-bottom: 8px; margin-bottom: 10px; color: var(--text-muted);">
                <span>alttrehub-websocket-traffic.io</span>
                <span style="color: var(--arch-cyan);">8ms latency</span>
            </div>
            <div id="socket-log-lines" style="height: 140px; overflow-y: auto; line-height: 1.6;">
                <p style="color: var(--text-muted);">[WS] Flask-SocketIO sunucusuna bağlanıldı...</p>
            </div>
        </div>
    `;
    
    const logBox = document.getElementById('socket-log-lines');
    const socketSteps = [
        "<span style='color: var(--term-green);'>[CONNECT]</span> Client connected. SID: WS-3918a",
        "<span style='color: var(--arch-cyan);'>[SEND]</span> emit('chat_message', {msg: 'Merhaba ekosistem!'})",
        "<span style='color: var(--hypr-purple);'>[RECEIVE]</span> broadcast('new_message_received', data) - Delay: 4ms",
        "<span style='color: var(--text-muted);'>[PING]</span> Sunucu kalp atışı (heartbeat) algılandı.",
        "<span style='color: var(--term-green);'>[STATUS]</span> WebSocket kanalı kararlı, veri akışı aktif."
    ];
    
    let stepIdx = 0;
    const socketInterval = setInterval(() => {
        if (!logBox || stepIdx >= socketSteps.length) {
            clearInterval(socketInterval);
            return;
        }
        const p = document.createElement('p');
        p.innerHTML = socketSteps[stepIdx];
        logBox.appendChild(p);
        logBox.scrollTop = logBox.scrollHeight;
        
        if (state.audioEnabled) playKeyClick();
        stepIdx++;
    }, 1000);
}

// --- 10. Workspace /uses Setup Modal Controls ---
const usesModal = document.getElementById('uses-modal');

window.openUsesModal = function() {
    playKeyClick();
    usesModal.classList.add('show');
    document.body.style.overflow = 'hidden';
};

window.closeUsesModal = function(e) {
    if (e) playKeyClick();
    usesModal.classList.remove('show');
    document.body.style.overflow = 'auto';
};

// Double Setup Tab Switcher Logic
window.switchSetupTab = function(setupNumber) {
    playKeyClick();
    
    const tabs = document.querySelectorAll('.setup-tab');
    const lists = document.querySelectorAll('.hardware-list');
    
    tabs.forEach(t => t.classList.remove('active'));
    lists.forEach(l => l.classList.remove('active'));
    
    document.getElementById(`tab-setup${setupNumber}`).classList.add('active');
    document.getElementById(`specs-setup${setupNumber}`).classList.add('active');
};

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        closeDetailModal();
    }
    if (e.target === usesModal) {
        closeUsesModal();
    }
});

// --- 11. Custom Scroll reveals ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// --- 12. Init Systems ---
window.addEventListener('DOMContentLoaded', () => {
    // Start typist animation
    handleTyping();
    
    // Auto focus terminal input on load
    termInput.focus();
    
    // Check elements already visible in viewport
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            }
        });
    }, 150);
});

// Scroll Listener for Glass navbar transition
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Explicit window bindings to prevent module scope/click handler reference errors
window.openDetailModal = openDetailModal;
window.closeDetailModal = closeDetailModal;
window.executeTermCmd = executeTermCmd;
