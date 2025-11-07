---
marp: true
theme: default
paginate: true
---

# 🧠 Fondamentaux de l'Intelligence Artificielle

**Formation Executive IA - Jour 1**

---

## Plan du Cours

**Module 1:** Types d'IA et Historique (30 min)
**Module 2:** Machine Learning et Deep Learning (30 min)
**Module 3:** Large Language Models (30 min)
**Module 4:** Applications Pratiques (30 min)

---

# MODULE 1: TYPES D'IA

---

## Qu'est-ce que l'IA?

> **Intelligence Artificielle:** Capacité d'une machine à imiter des fonctions cognitives humaines.

**En termes simples:**
> "Faire faire à un ordinateur des tâches qui nécessitent normalement l'intelligence humaine"

**L'IA peut:**
- 👁️ Voir (reconnaître images, visages)
- 👂 Entendre (comprendre parole, traduire)
- 💬 Parler (générer texte, converser)
- 🧠 Raisonner (résoudre problèmes)
- 🎨 Créer (images, musique, textes)

<!-- Notes: Définition accessible, exemples concrets -->

---

## Historique de l'IA: Dates Clés

**1950** - Test de Turing
**1956** - Naissance officielle ("Artificial Intelligence")
**1997** - Deep Blue bat Kasparov (échecs)
**2011** - Watson gagne Jeopardy!
**2012** - Deep Learning Revolution (AlexNet)
**2016** - AlphaGo bat champion Go
**2022** - ChatGPT démocratise l'IA

> De la théorie au grand public en 70 ans!

<!-- Notes: Montrer accélération exponentielle -->

---

## IA Faible vs IA Forte

**IA Faible (Narrow AI)**
- ✅ EXISTE
- Spécialisée dans UNE tâche
- Pas de conscience
- 100% de l'IA actuelle

**Exemples:** ChatGPT, reconnaissance faciale, assistants vocaux

**IA Forte (AGI)**
- ❌ N'EXISTE PAS
- Intelligente dans TOUS les domaines
- Conscience, émotions
- Horizon: 10-50 ans?

> **Cette formation = IA faible. C'est suffisant pour transformer votre business!**

<!-- Notes: Rassurer que pas besoin AGI pour avoir impact -->

---

## IA Prédictive vs IA Générative

| Critère | Prédictive | Générative |
|---------|-----------|-----------|
| **Fonction** | Analyser | Créer |
| **Output** | Chiffre, catégorie | Texte, image, audio |
| **Exemple** | "Risque: 15%" | "Article complet" |
| **Depuis** | 1990s | 2022 |
| **Accessibilité** | Expert data | Tout le monde |

**Révolution:** IA générative démocratise l'IA!

<!-- Notes: Insister sur démocratisation -->

---

## IA Prédictive: Exemples

**ANALYSER et PRÉDIRE**

- 💰 Prédiction ventes
- 📧 Filtre spam
- 🏥 Diagnostic médical
- 💳 Détection fraude
- 📊 Analyse comportement clients

> Ne crée rien de nouveau, analyse l'existant

<!-- Notes: Exemples familiers pour l'audience -->

---

## IA Générative: Exemples

**CRÉER du NOUVEAU**

- ✍️ ChatGPT: Articles, emails, rapports
- 🎨 DALL-E: Images sur commande
- 🎵 Suno: Musiques originales
- 💻 GitHub Copilot: Code informatique
- 🎬 Sora: Vidéos

> Crée quelque chose qui n'existait pas avant

<!-- Notes: Montrer variété d'applications créatives -->

---

## IA Symbolique vs Connexionniste

**IA Symbolique (1950-1990)**
- Règles explicites: "SI condition ALORS action"
- Programmée par humains
- Rigide, pas d'adaptation

**IA Connexionniste (2010+)**
- Apprentissage automatique
- Réseaux de neurones
- S'adapte automatiquement

**Exemple:** Montrer 100 000 photos de chats → IA apprend à reconnaître chats

<!-- Notes: Expliquer pourquoi Deep Learning a gagné -->

---

# MODULE 2: MACHINE LEARNING

---

## Qu'est-ce que le Machine Learning?

> **Machine Learning:** Machines apprennent à partir de données, sans être explicitement programmées.

**Analogie:**
Comme un enfant apprenant à reconnaître un chien:
- Pas de règles explicites
- On montre plein de chiens
- Il comprend le pattern
- Reconnaît nouveaux chiens jamais vus

<!-- Notes: Analogie enfant très parlante -->

---

## Type 1: Apprentissage Supervisé

**Principe:** Exemples avec réponses correctes

**Processus:**
1. Données avec labels (étiquettes)
2. Algorithme apprend patterns
3. Prédit labels pour nouvelles données

**Exemple:**
- 10 000 emails étiquetés "spam"/"non-spam"
- ML apprend à distinguer
- Prédit si nouveau email = spam

**Applications:** Classification, régression, reconnaissance

<!-- Notes: Type le plus courant en entreprise -->

---

## Type 2: Apprentissage Non-Supervisé

**Principe:** Pas de réponses, algorithme trouve patterns

**Processus:**
1. Données sans labels
2. Algorithme groupe similaires
3. Découvre structures cachées

**Exemple:**
- 1000 clients, historique achats
- ML groupe clients similaires
- Découvre: "Segment A achète matin, Segment B soir"

**Applications:** Segmentation, détection anomalies, recommandations

<!-- Notes: Utile pour découvrir insights cachés -->

---

## Type 3: Apprentissage par Renforcement

**Principe:** Essai-erreur avec récompenses

**Processus:**
1. Agent dans environnement
2. Essaie actions différentes
3. Récompense si bon, punition si mauvais
4. Apprend stratégie optimale

**Exemple:** Jeu vidéo
- IA essaie boutons au hasard
- Gagne points si bonne action
- Après millions d'essais → expert

**Applications:** Jeux (AlphaGo), robotique, trading

<!-- Notes: Moins courant en business, mais puissant -->

---

# MODULE 2: DEEP LEARNING

---

## Qu'est-ce que le Deep Learning?

> **Deep Learning:** ML utilisant réseaux de neurones artificiels à plusieurs couches.

**Inspiré du cerveau:**
- Neurones interconnectés
- Signaux transmis
- Apprentissage par ajustement connexions

```
INPUT → [Couche 1] → [Couche 2] → [Couche 3] → OUTPUT
```

<!-- Notes: "Deep" = profond (plusieurs couches) -->

---

## Réseaux de Neurones: Fonctionnement

**Exemple: Reconnaissance image de chat**

1. **Input:** Pixels d'image
2. **Couche 1:** Détecte lignes (horizontales/verticales)
3. **Couche 2:** Détecte formes (oreilles, yeux)
4. **Couche 3:** Détecte objets (tête de chat)
5. **Output:** "Chat" (98% confiance)

**Chaque couche extrait caractéristiques de plus en plus complexes**

<!-- Notes: Utiliser schéma visuel si possible -->

---

## Types de Réseaux de Neurones

**CNN (Convolutional Neural Networks)**
- Pour: Images, vidéos
- Applications: Reconnaissance faciale, diagnostic médical

**RNN (Recurrent Neural Networks)**
- Pour: Séquences (texte, audio)
- Applications: Traduction, génération texte

**Transformer**
- Pour: Langage naturel
- Base de: GPT, Claude, Gemini
- Innovation: Attention mechanism

<!-- Notes: Transformer = révolution pour LLMs -->

---

## Pourquoi Deep Learning a Explosé?

**3 Facteurs clés:**

**1. Big Data**
- Internet génère données massives
- Plus de données = meilleur apprentissage

**2. Puissance de Calcul (GPUs)**
- GPUs 100x plus rapides
- Cloud démocratise accès
- Heures vs mois d'entraînement

**3. Algorithmes Améliorés**
- Meilleures architectures
- Open-source (TensorFlow, PyTorch)

**2012 = Point de bascule** (AlexNet)

<!-- Notes: Convergence de 3 facteurs = explosion -->

---

# MODULE 3: LARGE LANGUAGE MODELS

---

## Qu'est-ce qu'un LLM?

> **Large Language Model:** Modèle entraîné sur milliards de mots pour comprendre et générer langage humain.

**"Large" = Gigantesque:**
- GPT-4: 1 700 milliards de paramètres
- Entraîné sur: presque tout Internet
- Coût: 100+ millions USD

**ChatGPT, Claude, Gemini = LLMs**

<!-- Notes: "Large" impressionnant mais utilisable par tous -->

---

## Comment Fonctionne un LLM?

**Principe: Prédiction du mot suivant**

**Analogie:**
> "Le ciel est..." → Votre cerveau: "bleu"

**LLM fait pareil à échelle massive!**

**Processus:**
1. **Entraînement:** Lire milliards de phrases
2. **Apprentissage:** Patterns linguistiques, faits, culture
3. **Génération:** Prédire mot suivant le plus probable

<!-- Notes: Simplifier au maximum -->

---

## Exemple de Prédiction

**Input:** "Le président du Togo est"

**LLM analyse:**
- "Togo" = pays africain
- "président" = chef d'État
- Patterns appris: noms présidents
- Probabilité: "Faure Gnassingbé" (98%)

**Output:** "Faure Gnassingbé"

> Statistiques + patterns = réponse cohérente

<!-- Notes: Exemple local important -->

---

## Architecture: Transformer

**Innovation clé: Attention Mechanism**

**Analogie:**
> "Le chat noir de Marie est sur le tapis"
> Votre cerveau lie automatiquement "chat" à "noir" et "Marie"

**Attention fait pareil:**
- Identifie relations entre mots
- Focus sur parties importantes
- Comprend contexte global

**2017:** "Attention is All You Need" (Google)
**Révolution:** Base de tous LLMs modernes

<!-- Notes: Pas besoin détails techniques, juste concept -->

---

## GPT-4 (OpenAI)

**Caractéristiques:**
- 1 700 milliards paramètres
- Multimodal: Texte + Images
- Contexte: 128 000 tokens (~100 000 mots)

**Forces:**
- Très créatif
- Excellent raisonnement
- Polyvalent

**Produits:**
- ChatGPT (gratuit + payant)
- Microsoft Copilot

<!-- Notes: Le plus connu, bon point de départ -->

---

## Claude 3 (Anthropic)

**Caractéristiques:**
- Focus: Sécurité, éthique
- Contexte: 200 000 tokens (record!)
- Raisonnement approfondi

**Forces:**
- Analyse complexe
- Moins d'hallucinations
- Respect instructions

**3 Versions:**
- Opus (puissant)
- Sonnet (équilibré)
- Haiku (rapide, économique)

<!-- Notes: Alternative sérieuse à GPT-4 -->

---

## Gemini (Google)

**Caractéristiques:**
- Multimodal natif
- Intégration Google Workspace
- Accès Search temps réel

**Forces:**
- Informations à jour
- Excellent recherche
- Gratuit avec Google Account

**3 Versions:**
- Ultra (comparable GPT-4)
- Pro (usage quotidien)
- Nano (mobile)

<!-- Notes: Avantage = accès Google Search -->

---

## Autres LLMs Notables

**Llama 3 (Meta)**
- Open-source gratuit
- Hébergeable localement
- Bon pour données sensibles

**Mistral (France)**
- Alternative européenne
- Respecte RGPD
- Open-source

**DeepSeek (Chine)**
- Raisonnement avancé
- Moins cher
- Bon pour maths/logique

<!-- Notes: Diversité d'options importante -->

---

## Capacités des LLMs

**1. Génération Texte**
- Articles, emails, rapports
- Traductions, résumés

**2. Analyse**
- Sentiment, extraction infos
- Classification documents

**3. Raisonnement**
- Problèmes logiques, maths
- Programmation

**4. Conversation**
- Dialogue naturel
- Assistance personnalisée

**5. Créativité**
- Brainstorming
- Noms de marque, slogans

<!-- Notes: Polyvalence impressionnante -->

---

## Limites des LLMs

**1. Hallucinations**
> Inventent faits de manière convaincante

**TOUJOURS VÉRIFIER FAITS IMPORTANTS!**

**2. Connaissance Figée**
- GPT-4: Coupure janvier 2024
- Ne sait rien après

**3. Biais**
- Hérite biais humains d'Internet
- Stéréotypes culturels

**4. Pas de Vraie Compréhension**
- Patterns statistiques
- Simule bien, mais pas conscience

<!-- Notes: CRITIQUE pour usage responsable -->

---

## Tokens: L'Unité de Base

> **Token:** Morceau de texte (~0,75 mot en français)

**Exemples:**
- "Intelligence" = 2 tokens
- "IA" = 1 token

**Pourquoi Important?**
- APIs facturent par tokens
- Limite contexte conversation

**Tarifs 2025:**
- GPT-4: 0,03$ / 1000 tokens
- Claude 3: 0,015$ / 1000 tokens

**Pratique:** 1 page A4 ≈ 500 tokens

<!-- Notes: Utile pour budgétisation -->

---

# MODULE 4: APPLICATIONS PRATIQUES

---

## Marketing & Communication

**Outils:** ChatGPT, Canva AI, Jasper

**Cas d'usage:**
- ✍️ 10 posts réseaux sociaux en 5 min
- 🎨 Visuels Instagram
- 📧 Campagnes emails
- 😊 Analyse sentiments clients

**Démonstration:**
> Prompt: "Écris 5 posts Facebook pour boutique tissu Lomé"
> Résultat: Instantané, qualité pro

<!-- Notes: Démo live si possible -->

---

## Ressources Humaines

**Outils:** ChatGPT, HireVue, Pymetrics

**Cas d'usage:**
- 📄 Tri 500 CVs en 10 min
- ✍️ Rédaction offres emploi
- 💬 Chatbot RH
- 📊 Analyse performance

**Exemple:**
> Besoin: Recruter commercial
> IA génère: Offre + questions entretien + grille évaluation
> Temps: 15 min vs 2h

<!-- Notes: ROI très clair -->

---

## Finance & Comptabilité

**Outils:** ChatGPT, DataRobot, Vic.ai

**Cas d'usage:**
- 📊 Rapports financiers auto
- 📈 Prévisions ventes
- 🛡️ Détection fraude
- 💬 Chatbot budgétaire

**Impact:**
- Temps analyse: 3h → 30 min
- Détection anomalies: +85%

<!-- Notes: Gains temps impressionnants -->

---

## Service Client

**Outils:** Chatbots GPT, Zendesk AI, Intercom

**Cas d'usage:**
- 💬 Support 24/7
- 🌍 Traduction temps réel
- 😊 Analyse satisfaction
- 🎯 Routage intelligent

**ROI:**
- Coût support: -40%
- Temps réponse: Instantané
- Satisfaction: +30%

<!-- Notes: Impact client direct -->

---

## Commercial & Ventes

**Outils:** ChatGPT, Salesforce Einstein, Gong.io

**Cas d'usage:**
- 🎯 Scoring leads
- ✍️ Propositions personnalisées
- 📧 Prospection automatisée
- 📊 Prévisions ventes

**Exemple:**
- 100 leads → IA score chaque lead
- Commercial focus top 20
- Taux conversion: x2

<!-- Notes: Impact chiffre affaires direct -->

---

## Mesurer ROI de l'IA

**Indicateurs:**
- ⏱️ Temps gagné (heures/semaine)
- 💰 Coûts réduits
- 📈 Productivité (%)
- 💵 Revenus additionnels

**Exemple Calcul:**
- Avant: 10h/semaine rédaction (200$/semaine)
- Avec IA: 3h/semaine
- Économie: 560$/mois
- Coût IA: 20$/mois
- **ROI: 2700%!**

<!-- Notes: Chiffres concrets convaincants -->

---

## Démonstration Live

**Scénario:** Restaurant "Saveurs du Golfe" Lomé

**Prompt ChatGPT:**
> "Écris post Facebook pour nouveau plat 'Poulet yassa revisité'. Ton chaleureux, 100 mots max."

**Résultat:** 3 secondes, texte pro

**Questions:**
- Temps que vous auriez mis?
- Utilisable tel quel?
- Modifications?

<!-- Notes: Impliquer l'audience, interaction -->

---

## Quel Outil pour Débuter?

**Recommandations:**

**1. ChatGPT** (GRATUIT)
- Le plus polyvalent
- Interface française
- Courbe apprentissage douce

**2. Canva AI** (Freemium)
- Pour visuels/design
- Très intuitif

**3. Notion AI** (Si vous utilisez Notion)
- Intégré workflow

<!-- Notes: ChatGPT = meilleur point de départ -->

---

# RÉCAPITULATIF

---

## Ce que Nous Avons Appris

**1. Types d'IA:**
- IA faible vs forte
- Prédictive vs Générative
- ML vs DL

**2. Fonctionnement:**
- Apprentissage automatique
- Réseaux de neurones
- LLMs

**3. Applications:**
- Tous secteurs
- ROI mesurable
- Outils accessibles

<!-- Notes: Résumer points clés -->

---

## Messages Clés

**1. L'IA n'est pas magique**
> Mathématiques et statistiques avancées

**2. Pas besoin comprendre détails techniques**
> Juste savoir utiliser

**3. L'IA est un outil, pas solution miracle**
> Amplifie vos compétences

**4. Commencez maintenant!**
> Chaque jour de retard = avantage perdu

<!-- Notes: Messages inspirants et actionnables -->

---

## Prochaines Étapes

**Cet après-midi:**
- Atelier pratique
- Identifier opportunités IA dans VOTRE secteur
- Cartographier cas d'usage

**Cette semaine:**
- Pratiquer avec outils
- Construire mini-projet
- Mesurer premiers résultats

**Pause déjeuner maintenant!**
> Retour à 13h30

<!-- Notes: Transition vers atelier -->

---

# Questions?

---
