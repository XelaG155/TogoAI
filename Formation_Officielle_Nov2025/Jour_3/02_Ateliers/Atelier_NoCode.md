# 🔧 ATELIER: OUTILS NO-CODE / LOW-CODE POUR L'IA

**Durée:** 90 minutes
**Format:** Démonstrations + Pratique en binômes
**Objectif:** Créer un prototype IA fonctionnel sans écrire une ligne de code

---

## 🎯 OBJECTIFS DE L'ATELIER

À la fin de cet atelier, chaque participant saura:

1. ✅ Comprendre ce qu'est le no-code/low-code et ses avantages
2. ✅ Utiliser Make.com ou Zapier pour automatiser des workflows
3. ✅ Intégrer une IA (ChatGPT/Claude) dans un workflow
4. ✅ Créer un prototype simple fonctionnel
5. ✅ Identifier les bons outils no-code pour ses besoins

---

## 📋 PRÉ-REQUIS

### Comptes à créer AVANT l'atelier:
- [ ] **Make.com** (gratuit - 1000 opérations/mois) → make.com
- [ ] **Airtable** (gratuit - base limitée) → airtable.com
- [ ] **OpenAI** (API avec crédit gratuit) → platform.openai.com

### Optionnels (pour aller plus loin):
- [ ] **Zapier** (gratuit - 100 tâches/mois) → zapier.com
- [ ] **n8n** (auto-hébergé, gratuit) → n8n.io

### Matériel:
- Ordinateur avec navigateur récent
- Connexion Internet STABLE (critique!)
- Adresse email professionnelle

---

## 🧩 PARTIE 1: INTRODUCTION AU NO-CODE (20 minutes)

### Qu'est-ce que le no-code/low-code?

**Définition:**
Le no-code permet de créer des applications, automatisations et workflows sans écrire de code, en utilisant des interfaces visuelles (glisser-déposer, connecteurs, etc.).

**Différence no-code vs low-code:**
- **No-code:** 0% de code, 100% visuel (exemple: Make.com, Zapier)
- **Low-code:** ~10% de code pour personnalisation (exemple: n8n avec expressions)

### Avantages pour les PME africaines

| Avantage | Impact |
|----------|--------|
| **💰 Coût réduit** | Pas besoin d'embaucher développeurs |
| **⚡ Rapidité** | Prototypes en heures, pas en semaines |
| **🎯 Autonomie** | Les équipes métier créent leurs propres outils |
| **🔄 Flexibilité** | Facile à modifier et adapter |
| **🌍 Accessibilité** | Outils cloud, accessibles partout |

### Cas d'usage typiques

**✅ Ce qu'on peut faire facilement:**
- Automatiser envoi d'emails personnalisés
- Synchroniser données entre outils (CRM, tableur, etc.)
- Créer des chatbots simples
- Générer des contenus avec IA
- Traiter des formulaires automatiquement
- Créer des alertes et notifications
- Analyser et résumer des documents

**⚠️ Limites à connaître:**
- Traitement de très gros volumes (> 10 000 opérations/jour)
- Logique métier très complexe
- Calculs scientifiques avancés
- Applications temps réel critiques
- Personnalisation graphique poussée

---

## 🔧 PARTIE 2: DÉMONSTRATIONS OUTILS (30 minutes)

### A. Make.com / Zapier (10 minutes)

**Concept:**
Connecter des applications entre elles pour automatiser des workflows (scénarios).

**Vocabulaire Make.com:**
- **Scénario** = Un workflow automatisé
- **Module** = Une étape du workflow
- **Trigger** = Déclencheur (ce qui lance le scénario)
- **Action** = Ce qui est exécuté
- **Router** = Branchement conditionnel

**Exemple de scénario simple:**
```
TRIGGER: Nouveau email reçu (Gmail)
    ↓
ACTION 1: Analyser email avec ChatGPT
    ↓
ACTION 2: Créer tâche dans outil de gestion (Trello/Notion)
    ↓
ACTION 3: Envoyer résumé par SMS
```

**Démonstration live (5 min):**
Le formateur crée un scénario:
1. Trigger: Nouveau formulaire Google Forms
2. Action: Analyser réponse avec ChatGPT
3. Action: Enregistrer dans Airtable
4. Test en temps réel

**Tarification:**
- Gratuit: 1 000 opérations/mois
- Starter: ~10 000 FCFA/mois pour 10 000 opérations
- Pro: ~20 000 FCFA/mois pour opérations illimitées

### B. n8n (10 minutes)

**Concept:**
Alternative open-source à Make.com, plus technique mais gratuit si auto-hébergé.

**Avantages n8n:**
- ✅ Gratuit (auto-hébergement)
- ✅ Pas de limite d'opérations
- ✅ Contrôle total des données
- ✅ Workflows complexes possibles

**Inconvénients:**
- ❌ Nécessite compétences techniques pour installation
- ❌ Maintenance serveur
- ❌ Moins de connecteurs pré-faits

**Démonstration rapide (3 min):**
Montrer l'interface n8n et un workflow simple.

**Recommandation:**
- Débutants: Commencer avec Make.com (plus simple)
- Avancés: Migrer vers n8n quand volumes augmentent

### C. Intégrations IA (10 minutes)

**APIs IA disponibles:**

| Service IA | API | Coût | Utilisation |
|------------|-----|------|-------------|
| **OpenAI (ChatGPT)** | ✅ | Pay-as-you-go | Texte, chat, analyse |
| **Anthropic (Claude)** | ✅ | Pay-as-you-go | Texte, analyse, raisonnement |
| **Google Gemini** | ✅ | Gratuit (limité) | Multimodal |
| **Stability AI** | ✅ | Pay-as-you-go | Génération d'images |

**Comment intégrer une IA dans Make.com:**

**Méthode 1: Module HTTP**
```
1. Ajouter module "HTTP Request"
2. URL: https://api.openai.com/v1/chat/completions
3. Headers: Authorization: Bearer YOUR_API_KEY
4. Body (JSON):
   {
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Votre prompt"}]
   }
```

**Méthode 2: Connecteur natif** (si disponible)
```
1. Rechercher "OpenAI" dans modules Make
2. Sélectionner "Create a Completion"
3. Configurer prompt et paramètres
4. Connecter à votre workflow
```

**Démonstration (5 min):**
Créer un workflow qui:
1. Reçoit un texte (formulaire)
2. L'envoie à ChatGPT pour résumé
3. Retourne le résumé par email

---

## 💻 PARTIE 3: ATELIER PRATIQUE GUIDÉ (40 minutes)

### Exercice: Créer un assistant IA de traitement d'emails

**Objectif:**
Automatiser le tri et la réponse aux emails professionnels avec l'IA.

**Workflow à créer:**
```
1. [TRIGGER] Nouveau email reçu dans Gmail/Outlook
2. [ANALYSE] ChatGPT catégorise l'email (urgent/normal/spam)
3. [DÉCISION] Router selon catégorie:
   - Si URGENT → Envoyer notification SMS
   - Si NORMAL → Créer tâche dans Notion
   - Si SPAM → Archiver
4. [ACTION] ChatGPT génère brouillon de réponse
5. [SAUVEGARDE] Stocker dans Airtable pour suivi
```

### Étapes détaillées

#### ÉTAPE 1: Configuration de base (5 min)

1. **Créer un nouveau scénario dans Make.com**
   - Se connecter à Make.com
   - Cliquer sur "Create a new scenario"
   - Donner un nom: "Assistant Email IA"

2. **Ajouter le trigger**
   - Chercher "Gmail" ou "Outlook"
   - Sélectionner "Watch emails"
   - Se connecter à son compte
   - Configuration: Surveiller boîte de réception

#### ÉTAPE 2: Intégration ChatGPT (10 min)

3. **Ajouter module OpenAI**
   - Cliquer sur le "+" après trigger
   - Chercher "OpenAI"
   - Sélectionner "Create a Chat Completion"

4. **Configurer le prompt d'analyse**
   ```
   Rôle: Tu es un assistant de tri d'emails professionnel.

   Tâche: Analyse cet email et catégorise-le en 3 catégories:
   - URGENT: nécessite réponse immédiate
   - NORMAL: à traiter dans les 24h
   - SPAM: publicité ou non pertinent

   Email:
   Sujet: {{1.subject}}
   De: {{1.from}}
   Contenu: {{1.text}}

   Réponds uniquement par: URGENT, NORMAL ou SPAM
   ```

5. **Mapper les données**
   - `{{1.subject}}` = Sujet de l'email du trigger
   - `{{1.from}}` = Expéditeur
   - `{{1.text}}` = Contenu

#### ÉTAPE 3: Router selon catégorie (8 min)

6. **Ajouter un Router**
   - Cliquer sur "+" après OpenAI
   - Sélectionner "Flow Control > Router"

7. **Créer 3 chemins**
   - **Chemin 1 - URGENT:**
     - Condition: `{{2.choices[0].message.content}}` contient "URGENT"
   - **Chemin 2 - NORMAL:**
     - Condition: contient "NORMAL"
   - **Chemin 3 - SPAM:**
     - Condition: contient "SPAM"

#### ÉTAPE 4: Actions selon catégorie (12 min)

8. **Chemin URGENT:**
   - Ajouter module "Twilio" ou "Email"
   - Envoyer notification: "Email urgent de {{1.from}}"

9. **Chemin NORMAL:**
   - Ajouter module "Notion" ou "Trello"
   - Créer tâche avec:
     - Titre: "Répondre à {{1.from}}"
     - Description: Résumé de l'email
     - Date limite: Aujourd'hui + 1 jour

10. **Chemin SPAM:**
    - Ajouter module Gmail "Move Email"
    - Déplacer vers dossier "Spam" ou "Archive"

#### ÉTAPE 5: Génération de réponse (5 min)

11. **Ajouter second module OpenAI**
    - Après le router (ou sur chemin NORMAL)
    - Prompt de génération de réponse:
    ```
    Génère un brouillon de réponse professionnelle à cet email:

    Email reçu:
    {{1.text}}

    Consignes:
    - Ton courtois et professionnel
    - Réponse en français
    - Maximum 150 mots
    ```

12. **Sauvegarder brouillon**
    - Ajouter module "Gmail > Create a Draft"
    - Contenu: `{{dernierOpenAI.choices[0].message.content}}`

### Test et débogage (5 min)

13. **Tester le scénario**
    - Cliquer sur "Run once"
    - Envoyer un email test à soi-même
    - Vérifier que chaque étape s'exécute

14. **Déboguer si erreurs**
    - Cliquer sur les bulles d'erreur
    - Vérifier les mappings de données
    - Ajuster les prompts si nécessaire

### Activation et monitoring (2 min)

15. **Activer le scénario**
    - Basculer le switch "ON"
    - Définir fréquence: toutes les 15 min

16. **Surveiller l'exécution**
    - Aller dans "History"
    - Vérifier les exécutions
    - Analyser les opérations consommées

---

## 🎨 VARIANTES ET EXTENSIONS

### Autres workflows utiles à créer

**1. Assistant de veille automatique:**
```
Google Alerts → ChatGPT résume → Notion database
```

**2. Générateur de contenu social media:**
```
Airtable (calendrier) → ChatGPT génère posts → Buffer/Hootsuite
```

**3. Analyseur de feedback clients:**
```
Google Forms → ChatGPT analyse sentiment → Airtable + Slack notification
```

**4. Traducteur automatique de documents:**
```
Google Drive (nouveau fichier) → ChatGPT traduit → Drive (dossier traduit)
```

**5. Assistant de facturation:**
```
Formulaire client → ChatGPT génère facture → PDF → Email
```

---

## 🧰 BOÎTE À OUTILS NO-CODE

### Catégories d'outils

**Automatisation & workflows:**
- Make.com (recommandé pour débuter)
- Zapier (alternative payante, plus simple)
- n8n (gratuit, plus technique)
- Integromat (ancien nom de Make)

**Bases de données & spreadsheets:**
- Airtable (tableur enrichi)
- Notion (tout-en-un)
- Google Sheets (gratuit, puissant avec scripts)

**Interfaces & apps:**
- Bubble (créer applications web)
- Softr (transformer Airtable en app)
- Glide (apps mobiles depuis sheets)

**IA & traitement:**
- OpenAI API (ChatGPT)
- Anthropic API (Claude)
- Replicate (IA opensource)

**Communication:**
- Twilio (SMS)
- SendGrid (emails en masse)
- Slack/Discord webhooks

---

## 💡 BONNES PRATIQUES NO-CODE

### ✅ DO (À faire):

1. **Commencer simple**
   - 1 trigger + 2-3 actions maximum
   - Tester chaque étape avant d'ajouter la suivante

2. **Documenter ses workflows**
   - Renommer les modules clairement
   - Ajouter notes explicatives
   - Maintenir un registre des scénarios

3. **Gérer les erreurs**
   - Ajouter "Error handler" sur étapes critiques
   - Prévoir workflows de fallback
   - Recevoir notifications d'erreurs

4. **Optimiser les coûts**
   - Surveiller consommation d'opérations
   - Utiliser filtres pour éviter exécutions inutiles
   - Grouper actions quand possible

5. **Sécuriser les données**
   - Ne jamais exposer API keys
   - Utiliser variables d'environnement
   - Limiter accès aux workflows sensibles

### ❌ DON'T (À éviter):

1. ❌ Créer des workflows trop complexes dès le début
2. ❌ Oublier de tester avec données réelles
3. ❌ Négliger la gestion d'erreurs
4. ❌ Utiliser son email personnel pour tests
5. ❌ Activer sans vérifier les limites de taux
6. ❌ Copier-coller des API keys dans les workflows

---

## 📊 CALCUL DES COÛTS

### Exemple de calcul Make.com

**Scénario:** Assistant email (comme créé en atelier)

| Étape | Opérations | Nombre/jour | Total/mois |
|-------|------------|-------------|------------|
| Trigger (Gmail watch) | 1 | 50 emails | 1 500 |
| OpenAI analyse | 1 | 50 | 1 500 |
| Router | 1 | 50 | 1 500 |
| Actions (moyenne 2) | 2 | 50 | 3 000 |
| **TOTAL** | | | **7 500** |

**Coût:**
- Gratuit jusqu'à 1 000 opérations → Insuffisant
- Plan Starter (10 000 ops): ~9 € soit ~6 000 FCFA/mois
- **ROI:** Si économise 5h/semaine = 20h/mois × tarif horaire

### Coût API OpenAI

**Tarifs (approximatifs):**
- GPT-3.5-turbo: $0.002 / 1K tokens (~750 mots)
- GPT-4: $0.03 / 1K tokens (input)

**Exemple 50 emails/jour:**
- Moyenne 200 tokens par analyse
- 50 × 200 × 30 = 300 000 tokens/mois = 300K tokens
- Coût: 300 × $0.002 = $0.60 soit ~400 FCFA/mois

**Total mensuel Make + OpenAI: ~6 400 FCFA/mois**

---

## 🎯 LIVRABLES DE L'ATELIER

À la fin de cet atelier, chaque participant a:

1. ✅ Un workflow IA fonctionnel dans Make.com
2. ✅ Compréhension du no-code et ses avantages
3. ✅ Liste d'outils no-code adaptés à ses besoins
4. ✅ Capacité à créer d'autres workflows seul
5. ✅ Idées d'automatisations pour son entreprise

---

## 📚 RESSOURCES POUR ALLER PLUS LOIN

### Tutoriels vidéo:
- Make.com Academy (gratuit): academy.make.com
- Chaîne YouTube "No Code MBA"
- Tutoriels Airtable Universe

### Communautés:
- Make.com Community Forum
- Reddit: r/nocode
- Groupe Facebook "No-Code Africa"

### Templates prêts à l'emploi:
- Make.com Templates
- Zapier Zap Templates
- n8n Workflow Templates

---

**🎉 Félicitations! Vous savez maintenant créer des automatisations IA sans coder!**
