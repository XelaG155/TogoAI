# 🌐 Formation IA Togo - Plateforme Web

Plateforme d'apprentissage en ligne moderne et interactive pour le séminaire IA Togo.

## ✨ Fonctionnalités

### 🎯 **Interface Moderne**
- Design responsive (mobile-first)
- Animations smooth et transitions fluides
- Dark/Light mode
- Navigation intuitive

### 📚 **Contenu Structuré**
- **Accueil:** Landing page attractive avec statistiques
- **Parcours:** 5 jours de formation (20 modules)
- **Exercices Business:** 5 cas concrets togolais avec ROI
- **Ressources:** Outils gratuits + communauté

### 📊 **Tracking & Progress**
- Progression globale sauvegardée (localStorage)
- Checkboxes modules interactifs
- Compteurs par jour
- Célébration 100% completion

### 🎨 **Design System**
- Palette couleurs "IA Togo" cohérente
- Typography moderne (Inter + Poppins)
- Composants réutilisables
- Fully responsive (mobile, tablet, desktop)

## 🚀 Démarrage Rapide

### Option 1: Ouvrir Directement (Local)
```bash
# Depuis le dossier TogoAI/web/
open index.html  # macOS
# OU
xdg-open index.html  # Linux
# OU
start index.html  # Windows
```

### Option 2: Serveur Local (Recommandé)
```bash
# Python 3
cd /Users/alexgiss/TogoAI/web
python3 -m http.server 8000

# Puis ouvrir: http://localhost:8000
```

### Option 3: Live Server (VS Code)
1. Installer extension "Live Server"
2. Clic droit sur `index.html` → "Open with Live Server"
3. Auto-refresh à chaque modification!

## 📁 Structure Fichiers

```
web/
├── index.html          # Page principale (SPA)
├── styles.css          # Styles complets
├── script.js           # Logique interactive
├── README.md           # Ce fichier
└── assets/             # (À créer si besoin)
    ├── images/
    ├── icons/
    └── fonts/
```

## 🎨 Personnalisation

### Changer les Couleurs
Éditer les variables CSS dans `styles.css`:
```css
:root {
    --primary: #2563EB;     /* Bleu principal */
    --secondary: #10B981;   /* Vert succès */
    --accent: #8B5CF6;      /* Violet accent */
    /* ... */
}
```

### Ajouter du Contenu
1. **Nouveau module:** Ajouter dans section `#parcours`
2. **Nouvel exercice:** Dupliquer `.exercice-card` dans `#exercices`
3. **Nouvelle page:** Créer `<section id="ma-page" class="page"></section>`

### Modifier Navigation
```javascript
// Dans script.js
function navigateToPage(pageName) {
    // Ta logique custom ici
}
```

## 🔧 Fonctionnalités Techniques

### LocalStorage
- Sauvegarde automatique progression
- Persistance dark/light mode
- État application conservé

### Responsive Design
- **Mobile:** <480px
- **Tablet:** 480-1024px
- **Desktop:** >1024px

### Animations
- Fade in pages
- Slide up éléments
- Float hero visual
- Confettis célébration (100% completion)

## 📝 TODO / Améliorations Futures

### ✅ Déjà Implémenté
- [x] Navigation SPA
- [x] Progress tracking
- [x] Dark/Light mode
- [x] Responsive design
- [x] LocalStorage persistence

### 🚧 À Implémenter
- [ ] **Contenu modules détaillés** (actuellement placeholder)
- [ ] **Exercices interactifs complets** (modal ou pages dédiées)
- [ ] **Certificat PDF générateur** (jsPDF)
- [ ] **Vidéos intégrées** (YouTube/Vimeo embeds)
- [ ] **Quiz avec auto-correction**
- [ ] **Forum/commentaires** (Firebase ou backend)
- [ ] **Mode offline complet** (Service Worker)
- [ ] **Authentification utilisateur** (optionnel)
- [ ] **Analytics** (Google Analytics ou plausible.io)
- [ ] **Search fonctionnalité**

## 🌐 Déploiement en Ligne

### Option 1: GitHub Pages (Gratuit)
```bash
# 1. Créer repo GitHub
git init
git add .
git commit -m "Initial commit - Formation IA Togo"
git remote add origin https://github.com/[username]/ia-togo-formation.git
git push -u origin main

# 2. Activer GitHub Pages
# Settings → Pages → Source: main branch → /web folder

# 3. Site accessible à: https://[username].github.io/ia-togo-formation/
```

### Option 2: Netlify (Gratuit, Facile)
```bash
# 1. Drag & drop le dossier /web sur netlify.com/drop
# 2. Site déployé instantanément!
# 3. Domaine custom possible (ia-togo.netlify.app)
```

### Option 3: Vercel (Gratuit, Pro)
```bash
npm install -g vercel
cd /Users/alexgiss/TogoAI/web
vercel

# Suivre instructions CLI
```

### Option 4: Hébergement Togolais
- **Togo Hosting:** https://togohosting.com
- **Prix:** ~15,000-30,000 FCFA/an (~23-46€/an)
- Uploader via FTP les 3 fichiers (HTML, CSS, JS)

## 📱 QR Code pour Mobile

Pour générer QR code vers site:
```bash
# Avec npx
npx qrcode-terminal "https://votre-url.com"

# Ou sur: https://qr-code-generator.com
```

## 🤝 Contribution

### Ajouter Traduction (Ewé/Anglais)
1. Dupliquer `index.html` → `index_ewe.html`
2. Traduire textes statiques
3. Ajouter sélecteur langue dans header

### Ajouter Contenu
1. Fork repo
2. Ajouter contenu dans branch `feature/nouveau-contenu`
3. PR avec description claire

## 📞 Support & Contact

**Formateur:** Alexandre Giss
**GitHub:** [Lien repo]

## 📄 Licence

© 2025 Formation IA Togo - Tous droits réservés

---

## 🎓 Notes Pédagogiques

### Philosophie Design
- **Clarté > Complexité**
- **Mobile-first** (60%+ utilisateurs togolais sur mobile)
- **Chargement rapide** (pas de librairies lourdes)
- **Accessible** (contraste WCAG AA+)

### Performance
- **HTML:** ~50KB
- **CSS:** ~30KB
- **JS:** ~15KB
- **Total:** <100KB (sans images)
- **Chargement:** <1s sur 3G

### Compatibilité Navigateurs
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE11 non supporté (obsolète)

## 🔥 Quick Tips

### Debug Mode
```javascript
// Dans la console navigateur:
AppFunctions.getStats()  // Voir statistiques
localStorage.clear()     // Reset progression
```

### Tester Dark Mode
```javascript
// Console:
document.documentElement.setAttribute('data-theme', 'dark')
```

### Simuler Completion
```javascript
// Cocher tous les modules:
document.querySelectorAll('.module-checkbox').forEach(cb => cb.checked = true)
// Puis refresh pour update progress
```

---

**🚀 Prêt à apprendre! Bonne formation!**
