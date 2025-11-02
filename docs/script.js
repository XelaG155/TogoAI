// ========================================
// FORMATION IA TOGO - INTERACTIVE SCRIPT
// ========================================

// === Global State ===
let moduleProgress = {};
let quizState = {
    currentQuestion: 1,
    answers: {},
    score: 0
};

// === Initialize on Page Load ===
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProgressFromStorage();
    setupEventListeners();
    updateAllProgress();
    setupQuiz();

    // Initialize first page
    const hash = window.location.hash.slice(1) || 'accueil';
    navigateToPage(hash);
}

// === Local Storage Functions ===
function loadProgressFromStorage() {
    const saved = localStorage.getItem('formationIAProgress');
    if (saved) {
        try {
            moduleProgress = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading progress:', e);
            moduleProgress = {};
        }
    }

    // Apply saved progress to checkboxes
    Object.keys(moduleProgress).forEach(moduleId => {
        const checkbox = document.getElementById(moduleId);
        if (checkbox && moduleProgress[moduleId]) {
            checkbox.checked = true;
        }
    });
}

function saveProgressToStorage() {
    try {
        localStorage.setItem('formationIAProgress', JSON.stringify(moduleProgress));
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

function resetAllProgress() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser tout votre progrès?')) {
        moduleProgress = {};
        saveProgressToStorage();

        // Uncheck all checkboxes
        document.querySelectorAll('.module-checkbox').forEach(checkbox => {
            checkbox.checked = false;
        });

        updateAllProgress();
        alert('Votre progrès a été réinitialisé!');
    }
}

// === Event Listeners ===
function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navigateToPage(page);
        });
    });

    // Module checkboxes
    document.querySelectorAll('.module-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            moduleProgress[this.id] = this.checked;
            saveProgressToStorage();
            updateAllProgress();

            // Visual feedback
            if (this.checked) {
                showNotification('Module complété! 🎉');
            }
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Reset progress button
    const resetBtn = document.getElementById('resetProgress');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetAllProgress);
    }

    // Download certificate button
    const certBtn = document.getElementById('downloadCertificate');
    if (certBtn) {
        certBtn.addEventListener('click', downloadCertificate);
    }
}

// === Navigation ===
function navigateToPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });

    // Update URL hash
    window.location.hash = pageName;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToExercice(type) {
    navigateToPage('exercices');
    setTimeout(() => {
        const card = document.querySelector(`[data-exercice="${type}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.style.animation = 'pulse 1s ease-in-out 2';
        }
    }, 300);
}

// === Day Toggle ===
function toggleDay(dayNumber) {
    const dayElement = document.querySelector(`.program-day [data-day="${dayNumber}"]`)?.closest('.program-day');
    if (dayElement) {
        dayElement.classList.toggle('expanded');
    }
}

// === Progress Calculation ===
function updateAllProgress() {
    const totalModules = document.querySelectorAll('.module-checkbox').length;
    const completedModules = Object.values(moduleProgress).filter(v => v).length;
    const percentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

    // Update global progress bar
    const progressFill = document.getElementById('globalProgressFill');
    const progressText = document.getElementById('progressText');
    const completedText = document.getElementById('completedModules');

    if (progressFill) progressFill.style.width = percentage + '%';
    if (progressText) progressText.textContent = `Progrès: ${percentage}%`;
    if (completedText) completedText.textContent = `${completedModules}/${totalModules} modules complétés`;

    // Update day progress bars
    for (let day = 1; day <= 5; day++) {
        updateDayProgress(day);
    }

    // Update certificate progress
    updateCertificateProgress(percentage, completedModules, totalModules);
}

function updateDayProgress(dayNumber) {
    const dayCheckboxes = document.querySelectorAll(`.module-checkbox[data-day="${dayNumber}"]`);
    const total = dayCheckboxes.length;
    const completed = Array.from(dayCheckboxes).filter(cb => cb.checked).length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;

    const progressBar = document.querySelector(`.day-progress-fill[data-day="${dayNumber}"]`);
    const progressText = document.querySelector(`.program-day:nth-child(${dayNumber}) .day-progress-text`);

    if (progressBar) progressBar.style.width = percentage + '%';
    if (progressText) progressText.textContent = `${completed}/${total} modules`;
}

function updateCertificateProgress(percentage, completed, total) {
    const certProgressFill = document.getElementById('certificateProgress');
    const certProgressText = document.getElementById('certificateProgressText');
    const certButton = document.getElementById('downloadCertificate');

    if (certProgressFill) certProgressFill.style.width = percentage + '%';
    if (certProgressText) certProgressText.textContent = `${percentage}% complété`;

    if (certButton) {
        if (percentage === 100) {
            certButton.disabled = false;
            certButton.innerHTML = '<i class="fas fa-download"></i> Télécharger le Certificat';
        } else {
            certButton.disabled = true;
            certButton.innerHTML = `<i class="fas fa-lock"></i> Complétez tous les modules (${completed}/${total})`;
        }
    }
}

// === Theme Toggle ===
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// === Quiz Functions ===
function setupQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', handleQuizAnswer);
    });
}

function handleQuizAnswer(e) {
    const button = e.currentTarget;
    const questionDiv = button.closest('.quiz-question');
    const questionNum = parseInt(questionDiv.dataset.question);
    const isCorrect = button.dataset.correct === 'true';
    const allOptions = questionDiv.querySelectorAll('.quiz-option');
    const feedback = questionDiv.querySelector('.quiz-feedback');
    const nextBtn = document.getElementById('quizNext');

    // Disable all options
    allOptions.forEach(opt => {
        opt.disabled = true;
        if (opt.dataset.correct === 'true') {
            opt.classList.add('correct');
        }
    });

    // Mark selected answer
    if (isCorrect) {
        button.classList.add('correct');
        feedback.textContent = '✓ Excellente réponse!';
        feedback.className = 'quiz-feedback show correct';
        quizState.score++;
    } else {
        button.classList.add('incorrect');
        feedback.textContent = '✗ Pas tout à fait. La bonne réponse est surlignée en vert.';
        feedback.className = 'quiz-feedback show incorrect';
    }

    // Save answer
    quizState.answers[questionNum] = isCorrect;

    // Enable next button
    if (nextBtn) nextBtn.disabled = false;
}

function nextQuestion() {
    const currentQ = quizState.currentQuestion;
    const totalQuestions = document.querySelectorAll('.quiz-question').length;

    if (currentQ < totalQuestions) {
        // Hide current question
        document.querySelector(`.quiz-question[data-question="${currentQ}"]`).classList.remove('active');

        // Show next question
        quizState.currentQuestion++;
        document.querySelector(`.quiz-question[data-question="${quizState.currentQuestion}"]`).classList.add('active');

        // Update navigation
        updateQuizNavigation();
    } else {
        // Show results
        showQuizResults();
    }
}

function previousQuestion() {
    if (quizState.currentQuestion > 1) {
        // Hide current question
        document.querySelector(`.quiz-question[data-question="${quizState.currentQuestion}"]`).classList.remove('active');

        // Show previous question
        quizState.currentQuestion--;
        document.querySelector(`.quiz-question[data-question="${quizState.currentQuestion}"]`).classList.add('active');

        // Update navigation
        updateQuizNavigation();
    }
}

function updateQuizNavigation() {
    const prevBtn = document.getElementById('quizPrev');
    const nextBtn = document.getElementById('quizNext');
    const progressText = document.getElementById('quizProgressText');
    const totalQuestions = document.querySelectorAll('.quiz-question').length;
    const currentQuestion = quizState.currentQuestion;

    // Update prev button
    if (prevBtn) {
        prevBtn.disabled = currentQuestion === 1;
    }

    // Update next button
    if (nextBtn) {
        const answered = quizState.answers[currentQuestion] !== undefined;
        nextBtn.disabled = !answered;

        if (currentQuestion === totalQuestions) {
            nextBtn.innerHTML = 'Voir les résultats <i class="fas fa-check"></i>';
        } else {
            nextBtn.innerHTML = 'Suivant <i class="fas fa-arrow-right"></i>';
        }
    }

    // Update progress text
    if (progressText) {
        progressText.textContent = `Question ${currentQuestion}/${totalQuestions}`;
    }
}

function showQuizResults() {
    // Hide all questions
    document.querySelectorAll('.quiz-question').forEach(q => q.classList.remove('active'));

    // Hide navigation
    const nav = document.querySelector('.quiz-navigation');
    if (nav) nav.style.display = 'none';

    // Show results
    const results = document.querySelector('.quiz-results');
    if (results) {
        results.style.display = 'block';

        // Update score
        const scoreNumber = document.getElementById('quizScore');
        const scoreMessage = document.getElementById('scoreMessage');
        const totalQuestions = document.querySelectorAll('.quiz-question').length;

        if (scoreNumber) scoreNumber.textContent = quizState.score;

        if (scoreMessage) {
            const percentage = (quizState.score / totalQuestions) * 100;
            if (percentage === 100) {
                scoreMessage.textContent = '🎉 Parfait! Vous maîtrisez tous les concepts!';
            } else if (percentage >= 80) {
                scoreMessage.textContent = '👍 Très bien! Vous avez une excellente compréhension!';
            } else if (percentage >= 60) {
                scoreMessage.textContent = '📚 Bien joué! Continuez à apprendre!';
            } else {
                scoreMessage.textContent = '💪 Bon début! Relisez le matériel et réessayez!';
            }
        }
    }
}

function restartQuiz() {
    // Reset quiz state
    quizState = {
        currentQuestion: 1,
        answers: {},
        score: 0
    };

    // Reset all questions
    document.querySelectorAll('.quiz-question').forEach((q, index) => {
        q.classList.remove('active');
        if (index === 0) q.classList.add('active');

        // Reset options
        q.querySelectorAll('.quiz-option').forEach(opt => {
            opt.disabled = false;
            opt.classList.remove('correct', 'incorrect', 'selected');
        });

        // Reset feedback
        const feedback = q.querySelector('.quiz-feedback');
        if (feedback) {
            feedback.className = 'quiz-feedback';
            feedback.textContent = '';
        }
    });

    // Hide results
    const results = document.querySelector('.quiz-results');
    if (results) results.style.display = 'none';

    // Show navigation
    const nav = document.querySelector('.quiz-navigation');
    if (nav) nav.style.display = 'flex';

    // Update navigation
    updateQuizNavigation();
}

// === Notification System ===
function showNotification(message, duration = 3000) {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, var(--primary), var(--accent));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        z-index: 1000;
        animation: slideInUp 0.3s ease-out;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// === Certificate Download ===
function downloadCertificate() {
    const totalModules = document.querySelectorAll('.module-checkbox').length;
    const completedModules = Object.values(moduleProgress).filter(v => v).length;

    if (completedModules === totalModules) {
        // Generate certificate (simplified - in production, this would generate a real PDF)
        alert('🎓 Félicitations!\n\nVotre certificat de formation IA Togo est prêt!\n\nDans une vraie application, un PDF serait généré ici avec:\n- Votre nom\n- La date de completion\n- Le détail des modules complétés\n- Une signature officielle\n\nBravo pour avoir terminé la formation!');

        showNotification('🎓 Certificat téléchargé avec succès!');
    } else {
        alert(`Vous devez compléter tous les ${totalModules} modules pour obtenir votre certificat.\n\nModules complétés: ${completedModules}/${totalModules}`);
    }
}

// === Utility Functions ===

// Handle browser back/forward
window.addEventListener('hashchange', function() {
    const page = window.location.hash.slice(1) || 'accueil';
    navigateToPage(page);
});

// Add smooth animations for module completion
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('module-checkbox')) {
        const label = e.target.nextElementSibling;
        if (e.target.checked) {
            label.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                label.style.animation = '';
            }, 500);
        }
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }

    .notification {
        animation: slideInUp 0.3s ease-out;
    }
`;
document.head.appendChild(style);

// Console welcome message
console.log('%c🤖 Formation IA Togo', 'font-size: 24px; font-weight: bold; color: #2563EB;');
console.log('%cBienvenue dans la plateforme interactive de formation!', 'font-size: 14px; color: #6B7280;');
console.log('%cVotre progrès est automatiquement sauvegardé localement.', 'font-size: 12px; color: #9CA3AF;');
