// ========================================
// FORMATION IA TOGO - SCRIPT INTERACTIF
// ========================================

// === État Global ===
const AppState = {
    currentPage: 'accueil',
    completedModules: new Set(),
    progress: 0
};

// === Initialisation ===
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadProgress();
    updateProgress();
    setupEventListeners();
});

function initializeApp() {
    console.log('🚀 Formation IA Togo - App initialisée');

    // Charger l'état depuis localStorage
    const savedState = localStorage.getItem('iaTogoState');
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            AppState.completedModules = new Set(parsed.completedModules || []);
            AppState.currentPage = parsed.currentPage || 'accueil';
        } catch (e) {
            console.warn('Impossible de charger l\'état sauvegardé');
        }
    }

    // Afficher la page actuelle
    showPage(AppState.currentPage);
}

function saveState() {
    const state = {
        completedModules: Array.from(AppState.completedModules),
        currentPage: AppState.currentPage,
        lastVisit: new Date().toISOString()
    };
    localStorage.setItem('iaTogoState', JSON.stringify(state));
}

// === Navigation ===
function navigateToPage(pageName) {
    AppState.currentPage = pageName;
    showPage(pageName);
    saveState();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPage(pageName) {
    // Masquer toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Afficher la page demandée
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Mettre à jour navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
}

// === Event Listeners ===
function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.dataset.page;
            if (pageName) {
                navigateToPage(pageName);
            }
        });
    });

    // Module checkboxes
    document.querySelectorAll('.module-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleModuleComplete);
    });

    // Day expand buttons
    document.querySelectorAll('.btn-expand').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const day = e.target.closest('.journey-day');
            if (day) {
                day.classList.toggle('expanded');
            }
        });
    });
}

// === Progress Tracking ===
function handleModuleComplete(e) {
    const moduleId = e.target.id;

    if (e.target.checked) {
        AppState.completedModules.add(moduleId);
        showNotification('✅ Module complété!', 'success');
    } else {
        AppState.completedModules.delete(moduleId);
    }

    updateProgress();
    saveState();
}

function loadProgress() {
    // Restaurer les modules complétés
    AppState.completedModules.forEach(moduleId => {
        const checkbox = document.getElementById(moduleId);
        if (checkbox) {
            checkbox.checked = true;
        }
    });
}

function updateProgress() {
    // Compter total modules
    const totalModules = document.querySelectorAll('.module-checkbox').length;
    const completedCount = AppState.completedModules.size;

    // Calculer pourcentage
    const percentage = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;
    AppState.progress = percentage;

    // Mettre à jour UI
    const progressFill = document.getElementById('globalProgress');
    const progressPercent = document.getElementById('progressPercent');

    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    if (progressPercent) {
        progressPercent.textContent = `${percentage}%`;
    }

    // Mettre à jour compteurs par jour
    updateDayProgress();

    // Célébration si 100%
    if (percentage === 100 && completedCount > 0) {
        celebrate();
    }
}

function updateDayProgress() {
    document.querySelectorAll('.journey-day').forEach(dayElement => {
        const dayNumber = dayElement.dataset.day;
        const modulesInDay = dayElement.querySelectorAll('.module-checkbox');
        const completedInDay = Array.from(modulesInDay).filter(m => m.checked).length;

        // Mettre à jour le compteur
        const counter = dayElement.querySelector('.modules-completed');
        if (counter) {
            counter.textContent = `${completedInDay}/${modulesInDay.length}`;
        }
    });
}

// === Modules & Exercices ===
function openModule(moduleId) {
    showNotification('📚 Module en cours de chargement...', 'info');

    // TODO: Charger le contenu du module
    // Pour l'instant, juste une notification
    setTimeout(() => {
        showNotification('Module ouvert! (Contenu à implémenter)', 'success');
    }, 500);
}

function openExercice(exerciceId) {
    // Rediriger vers la page détaillée de l'exercice
    window.location.href = `exercice-${exerciceId}.html`;
}

function toggleDay(dayNumber) {
    const dayElement = document.querySelector(`.journey-day[data-day="${dayNumber}"]`);
    if (dayElement) {
        dayElement.classList.toggle('expanded');
    }
}

// === Notifications ===
function showNotification(message, type = 'info') {
    // Créer élément notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        background: getNotificationColor(type),
        color: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
        animation: 'slideInUp 0.3s ease-out',
        maxWidth: '300px',
        fontWeight: '500'
    });

    document.body.appendChild(notification);

    // Auto-remove après 3 secondes
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationColor(type) {
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#2563EB'
    };
    return colors[type] || colors.info;
}

// === Célébration ===
function celebrate() {
    // Confettis ou animation de célébration
    showNotification('🎉 Félicitations! Formation 100% complétée!', 'success');

    // Créer confettis (simple version)
    createConfetti();

    // Débloquer certificat
    enableCertificate();
}

function createConfetti() {
    const colors = ['#2563EB', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * 100}vw;
                opacity: 1;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: fall ${2 + Math.random() * 2}s linear forwards;
            `;

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

function enableCertificate() {
    const certButton = document.querySelector('.download-item:last-child button');
    if (certButton) {
        certButton.disabled = false;
        certButton.textContent = 'Télécharger';
        certButton.onclick = downloadCertificate;
    }
}

function downloadCertificate() {
    showNotification('📜 Génération de votre certificat...', 'info');

    // TODO: Générer vrai certificat PDF
    setTimeout(() => {
        showNotification('✅ Certificat téléchargé!', 'success');
    }, 1500);
}

// === Analytics & Stats ===
function getStats() {
    return {
        totalModules: document.querySelectorAll('.module-checkbox').length,
        completedModules: AppState.completedModules.size,
        progress: AppState.progress,
        timeSpent: calculateTimeSpent(),
        lastVisit: localStorage.getItem('lastVisit')
    };
}

function calculateTimeSpent() {
    // TODO: Implémenter tracking temps réel
    return 0;
}

// === Search ===
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();

    if (query.length < 2) {
        clearSearchResults();
        return;
    }

    // Rechercher dans modules et exercices
    const results = searchContent(query);
    displaySearchResults(results);
}

function searchContent(query) {
    const results = [];

    // Rechercher dans les modules
    document.querySelectorAll('.module label span:first-of-type').forEach(elem => {
        if (elem.textContent.toLowerCase().includes(query)) {
            results.push({
                type: 'module',
                title: elem.textContent,
                element: elem.closest('.module')
            });
        }
    });

    // Rechercher dans les exercices
    document.querySelectorAll('.exercice-card h3').forEach(elem => {
        if (elem.textContent.toLowerCase().includes(query)) {
            results.push({
                type: 'exercice',
                title: elem.textContent,
                element: elem.closest('.exercice-card')
            });
        }
    });

    return results;
}

function displaySearchResults(results) {
    // TODO: Afficher résultats dans une dropdown
    console.log('Résultats recherche:', results);
}

function clearSearchResults() {
    // TODO: Effacer résultats
}

// === Utilities ===
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// === Animations CSS ===
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// === Export pour usage global ===
window.AppFunctions = {
    navigateToPage,
    openModule,
    openExercice,
    toggleDay,
    getStats,
    downloadCertificate
};

// === Service Worker (pour mode offline - optionnel) ===
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('✅ Service Worker registered'))
            .catch(err => console.log('❌ Service Worker registration failed:', err));
    });
}

console.log('✨ App chargée avec succès!');
