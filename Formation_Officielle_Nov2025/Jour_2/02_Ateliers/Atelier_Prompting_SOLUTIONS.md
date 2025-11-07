# SOLUTIONS: ATELIER PROMPTING EFFICACE

**Formation Executive IA - Jour 2**

Ce document contient des exemples de solutions et bonnes pratiques pour créer des prompts efficaces.

---

## PARTIE 1: TRANSFORMATION DE PROMPTS BASIQUES

### Exemple 1: Rédaction

#### AVANT (Prompt basique):
```
Écris un email professionnel
```

**Problèmes:**
- Trop vague
- Aucun contexte
- Résultat imprévisible
- Nécessitera plusieurs itérations

---

#### APRÈS (Prompt efficace):

```
RÔLE:
Tu es un assistant de direction expérimenté, spécialisé dans la communication
professionnelle B2B en Afrique francophone.

CONTEXTE:
Je suis Directrice Commerciale chez AgriSupply Togo, entreprise de
distribution d'équipements agricoles. Nous avons un partenariat de 5 ans
avec FarmTech Ltd (Nigeria) pour l'importation de tracteurs. Le dernier
container est arrivé avec 3 semaines de retard, causant des pertes de
ventes importantes (estimation: 15M FCFA).

TÂCHE:
Rédige un email à M. Oluwaseun Adebayo (CEO FarmTech Ltd) pour:
1. Exprimer notre mécontentement professionnel concernant les retards
   répétés (3ème fois cette année)
2. Demander explication formelle et plan d'action correctif
3. Mentionner impact financier sur notre activité
4. Rappeler termes contractuels (clause de pénalité après 10 jours retard)
5. Proposer réunion téléphonique la semaine prochaine
6. Maintenir relation professionnelle (ton ferme mais respectueux)

FORMAT:
- Email formel B2B
- Structure: Salutation, contexte (1 paragraphe), problème identifié
  (2 paragraphes), demandes concrètes (liste), proposition dialogue,
  formule politesse
- Longueur: 250-300 mots
- Pièce jointe mentionnée: Rapport d'impact financier

CONTRAINTES:
- Ton: Ferme et professionnel, mais non agressif
- Éviter accusations personnelles
- Focus sur faits et chiffres
- Laisser porte ouverte au dialogue
- Respecter codes communication B2B internationale
- Mentionner relation de longue date
```

#### RÉSULTAT ATTENDU:

Email structuré, professionnel, équilibré entre fermeté et diplomatie,
avec actions concrètes demandées.

---

### Exemple 2: Analyse de données

#### AVANT (Prompt basique):
```
Analyse ces données
```

**Problèmes:**
- Quel type d'analyse?
- Pour qui? (CEO, analyste, équipe?)
- Quel objectif?
- Format de sortie?

---

#### APRÈS (Prompt efficace):

```
RÔLE:
Tu es un analyste financier senior spécialisé dans le secteur retail
en Afrique de l'Ouest, avec 10 ans d'expérience dans l'analyse de
performance commerciale.

CONTEXTE:
Entreprise: "ModeAfrik" - Chaîne de 5 boutiques vêtements à Lomé
Période analysée: T4 2024 (Oct-Nov-Déc)
Situation: Résultats mitigés, besoin de comprendre pourquoi
Audience du rapport: Comité de direction (3 membres, non-experts finance)
Objectif stratégique: Décider allocations budgets 2025 par boutique

Données fournies (tableau):
[COLLER ICI: Ventes mensuelles par boutique, par catégorie produit,
marges, trafic client, panier moyen]

TÂCHE:
Analyse complète des données T4 2024 et génère rapport exécutif incluant:

1. SYNTHÈSE EXÉCUTIVE (3 phrases max)
   - Verdict global trimestre
   - Chiffre clé principal
   - Recommandation #1 prioritaire

2. ANALYSE PAR BOUTIQUE
   - Classement performance (CA, marge, trafic)
   - Identification stars et sous-performers
   - Facteurs explicatifs (si visibles dans données)

3. ANALYSE PAR CATÉGORIE PRODUIT
   - Top 3 catégories performantes
   - Catégories en déclin
   - Opportunités identifiées

4. INDICATEURS CLÉS
   - Évolution panier moyen
   - Taux de conversion (si données disponibles)
   - Marge moyenne par boutique

5. RECOMMANDATIONS STRATÉGIQUES (5 max)
   - Priorisées par impact potentiel
   - Chiffrées quand possible
   - Actionnables immédiatement
   - Avec timeline suggérée

FORMAT:
- Rapport structuré en sections numérotées
- Tableaux comparatifs pour chiffres
- Bullet points pour insights
- Mise en évidence des alertes (baisse >15%)
- Ton: Professionnel mais accessible (pas jargon financier)
- Longueur: 2 pages A4 maximum

CONTRAINTES:
- Baser analyse uniquement sur données fournies (pas d'invention)
- Si données manquent pour analyse demandée, l'indiquer clairement
- Prioriser insights actionnables vs descriptions
- Adapter complexité au niveau audience (non-experts)
- Inclure au moins un graphique textuel (ASCII art ou description)
```

#### QUALITÉ DU PROMPT:

- **Contexte riche:** Secteur, taille entreprise, période, audience
- **Tâche structurée:** 5 sections clairement définies
- **Format précis:** Longueur, style, ton, structure
- **Contraintes importantes:** Pas d'invention, niveau audience adapté

---

## PARTIE 2: EXEMPLES DE PROMPTS PAR CATÉGORIE

### CATÉGORIE: COMMUNICATION

#### Prompt #1: Réponse automatique absence

```
TITRE: Générateur message absence email professionnel

RÔLE:
Tu es un assistant communication professionnelle.

CONTEXTE:
Je pars en mission terrain (zones rurales Togo) sans accès internet
fiable du 15 au 25 janvier 2025. Je suis Chargé de Projets dans une
ONG environnementale.

TÂCHE:
Génère message absence email professionnel incluant:
- Période absence exacte
- Raison (mission terrain)
- Impossibilité de consulter emails régulièrement
- Contact urgent: Adjointe Mme Koffi (email + tél)
- Promesse réponse au retour
- Ton sympathique et professionnel

FORMAT:
Message d'absence automatique (4-6 lignes max)

CONTRAINTES:
- Court (lecteurs pressés)
- Info essentielle uniquement
- Contact alternatif clair
- Français professionnel standard
```

**RÉSULTAT EXEMPLE:**

```
Bonjour,

Je suis en mission terrain dans les zones rurales du Togo du 15 au 25
janvier et n'aurai pas d'accès internet régulier.

Pour toute urgence, merci de contacter mon adjointe Mme Koffi:
- Email: a.koffi@ong-environnement.tg
- Tél: +228 90 XX XX XX

Je répondrai à votre message dès mon retour le 26 janvier.

Cordialement,
[Nom]
```

---

#### Prompt #2: Résumé réunion structuré

```
TITRE: Transformation notes réunion en compte-rendu

RÔLE:
Tu es un assistant de direction expert en synthèse de réunions.

CONTEXTE:
Réunions hebdomadaires comité direction (5 personnes)
Durée moyenne: 90 minutes
Nombreux sujets abordés
Besoin: CR structuré envoyé dans les 2h post-réunion

TÂCHE:
Transforme mes notes brutes de réunion en compte-rendu structuré.

[COLLER ICI: Notes brutes désordonnées]

FORMAT:
Compte-rendu structuré avec sections:
1. Informations (Date, présents, absents, durée)
2. Décisions prises (bullet points avec responsable)
3. Actions à mener (tableau: Action | Responsable | Deadline | Priorité)
4. Points de discussion (synthèse sans décision)
5. Prochaine réunion (date, sujets à préparer)

CONTRAINTES:
- Factuel uniquement (pas d'interprétation)
- Décisions en gras
- Deadlines en rouge (notation: **ROUGE: date**)
- Ton neutre et professionnel
- Longueur: 1-2 pages max
```

---

### CATÉGORIE: ANALYSE & DÉCISION

#### Prompt #3: Analyse SWOT assistée

```
TITRE: Générateur analyse SWOT pour nouveau projet

RÔLE:
Tu es un consultant en stratégie d'entreprise avec expertise PME
africaines et lancement de nouveaux produits/services.

CONTEXTE:
Entreprise: [Nom et secteur]
Projet: [Description nouveau produit/service]
Marché cible: [Qui, où, combien]
Budget: [Montant]
Timeline: [Quand]

TÂCHE:
Génère analyse SWOT complète pour ce projet, en tenant compte du
contexte togolais/africain.

Pour chaque quadrant (Forces, Faiblesses, Opportunités, Menaces):
- Identifier 5-7 éléments
- Prioriser par importance (★★★ très important, ★★ important, ★ secondaire)
- Ajouter brève explication (15-20 mots)
- Suggérer action concrète pour capitaliser (Forces/Opportunités) ou
  mitiger (Faiblesses/Menaces)

FORMAT:
Tableau SWOT classique 2x2
Puis section "Recommandations stratégiques" (5 actions prioritaires)

CONTRAINTES:
- Adapté au contexte local togolais
- Réaliste (pas trop optimiste)
- Actionnable (pas juste théorique)
- Considérer ressources limitées PME
```

---

#### Prompt #4: Aide à la décision multi-critères

```
TITRE: Comparateur options pour prise de décision

RÔLE:
Tu es un expert en aide à la décision pour dirigeants d'entreprise.

CONTEXTE:
Je dois choisir entre [X] options pour [décision à prendre].
[Décrire brièvement chaque option]

TÂCHE:
Aide-moi à comparer les options selon ces critères:
1. Coût (poids: 25%)
2. Délai de mise en œuvre (poids: 20%)
3. Impact sur activité (poids: 30%)
4. Risques (poids: 15%)
5. Facilité d'implémentation (poids: 10%)

Pour chaque option:
- Note par critère (0-10)
- Justification note (2-3 lignes)
- Calcul score pondéré
- Identification risques principaux

FORMAT:
1. Tableau comparatif détaillé
2. Classement final avec scores
3. Recommandation motivée
4. Plan B si option #1 échoue

CONTRAINTES:
- Objectif et factuel
- Pas de biais pro/contre une option
- Mentionner incertitudes
- Recommandation claire mais nuancée
```

---

### CATÉGORIE: CRÉATION CONTENU

#### Prompt #5: Générateur posts multi-plateformes

```
TITRE: Créateur contenu social media optimisé par plateforme

RÔLE:
Tu es un expert en marketing digital et social media, spécialisé dans
l'adaptation de contenu pour différentes plateformes.

CONTEXTE:
Entreprise: [Nom, secteur]
Annonce à promouvoir: [Quoi]
Public cible: [Qui]
Objectif: [Notoriété/Engagement/Conversion/Trafic]

TÂCHE:
Crée 4 versions du même message, optimisées pour:
1. Facebook (format natif)
2. LinkedIn (ton professionnel)
3. Instagram (visuel + légende courte)
4. Twitter/X (thread 3 tweets)

Pour chaque version:
- Adapter longueur à la plateforme
- Ajuster ton et style
- Hashtags appropriés (quantité selon plateforme)
- CTA adapté au comportement utilisateurs
- Suggestion format visuel

FORMAT:
4 posts prêts à publier, chacun avec:
- Texte complet
- Hashtags
- CTA
- Note sur meilleur moment publication
- Suggestion visuel/média

CONTRAINTES:
- Message core reste identique
- Adaptation vraie (pas juste copier-coller)
- Respecter codes chaque plateforme
- Emojis avec parcimonie
- Accessible audience togolaise
```

---

#### Prompt #6: Générateur storytelling entreprise

```
TITRE: Créateur histoires inspirantes pour brand storytelling

RÔLE:
Tu es un storyteller professionnel et consultant en communication
d'entreprise.

CONTEXTE:
Mon entreprise: [Description]
Élément à valoriser: [Produit/Valeur/Projet/Équipe/Client]
But: Créer connexion émotionnelle avec audience

TÂCHE:
Transforme cet élément factuel en histoire inspirante suivant
structure storytelling classique:

1. SITUATION INITIALE: Contexte, personnage, cadre
2. PROBLÈME/DÉFI: Obstacle rencontré, enjeux
3. ACTIONS: Ce qui a été entrepris, efforts
4. RÉSOLUTION: Comment problème résolu
5. LEÇON/MESSAGE: Ce qu'on en retient, valeurs véhiculées

Histoire doit:
- Être authentique et crédible
- Inclure détails concrets (pas générique)
- Susciter émotion (inspiration, fierté, espoir)
- Véhiculer valeurs entreprise
- Être mémorable

FORMAT:
Narrative de 300-400 mots
Ton: Inspirant mais naturel (pas forced)
Style: Storytelling (pas corporate speak)

CONTRAINTES:
- 100% véridique (pas d'embellissement excessif)
- Ancré dans contexte togolais/africain
- Éviter clichés ("success story", "challenge", etc.)
- Langage accessible
- Fin positive mais réaliste
```

---

### CATÉGORIE: ORGANISATION

#### Prompt #7: Planificateur de semaine intelligent

```
TITRE: Générateur planning semaine optimisé

RÔLE:
Tu es un expert en productivité et gestion du temps pour dirigeants et
cadres à forte charge de travail.

CONTEXTE:
Mes responsabilités: [Lister]
Mes horaires: [Ex: Lundi-Vendredi 8h-17h]
Mes pics énergie: [Ex: Matin tâches complexes, après-midi réunions]
Contraintes: [Ex: Réunion direction chaque lundi 9h, pas dispo mardi AM]

Cette semaine, je dois accomplir:

URGENT & IMPORTANT:
- [Tâche 1: description, durée estimée]
- [Tâche 2: description, durée estimée]

IMPORTANT NON URGENT:
- [Tâche 3...]
- [Tâche 4...]

URGENT NON IMPORTANT:
- [Tâche 5...]

NON URGENT NON IMPORTANT:
- [Tâche 6...]

TÂCHE:
Crée planning semaine optimisé en:
1. Priorisant selon matrice Eisenhower
2. Bloquant créneaux focused work (90-120 min)
3. Regroupant réunions/appels
4. Incluant pauses
5. Tenant compte de mes pics énergie
6. Laissant 20% temps pour imprévus

FORMAT:
Planning jour par jour (Lun-Ven)
Pour chaque jour:
- Bloc horaire: [Heure] - [Activité] - [Durée]
- Priorités du jour (top 3)
- Objectif fin de journée

CONTRAINTES:
- Réaliste (pas surbooké)
- Flexible (time buffers)
- Équilibré (pas 100% tâches lourdes)
- Respect rythme biologique
- Bloc focus minimum 90 min
```

---

#### Prompt #8: Créateur checklist projet

```
TITRE: Générateur checklist complète lancement projet

RÔLE:
Tu es un chef de projet senior avec 15 ans expérience en gestion de
projets PME africaines, tous secteurs.

CONTEXTE:
Type de projet: [Décrire]
Durée: [Timeline]
Budget: [Montant]
Équipe: [Nombre personnes, compétences]
Livrables: [Quoi]

TÂCHE:
Génère checklist exhaustive pour ce projet, couvrant toutes les phases:

1. PHASE PRÉPARATION (avant démarrage)
2. PHASE LANCEMENT (semaine 1)
3. PHASE EXÉCUTION (bulk du projet)
4. PHASE CONTRÔLE (jalons)
5. PHASE CLÔTURE (finalisation)

Pour chaque phase:
- Toutes actions nécessaires
- Responsable suggéré
- Deadline relative (J-7, J+14, etc.)
- Documents/livrables associés
- Points de validation (signoff)

FORMAT:
Checklist interactive avec:
- [ ] Cases à cocher
- Regroupement par phase
- Sous-tâches indentées
- Codes couleur priorités (🔴 Critique, 🟡 Important, 🟢 Nice to have)
- Estimation durée par tâche

CONTRAINTES:
- Adapté à taille/complexité du projet
- Réaliste pour contexte PME togolaise
- Inclure risques fréquents et mitigation
- Prévoir temps validation/approbation
- Considérer jours fériés locaux
```

---

## PARTIE 3: PROMPTS PAR SECTEUR

### AGRICULTURE

#### Prompt: Conseil culture saison

```
TITRE: Assistant agronomique personnalisé

RÔLE:
Tu es un agronome expert des cultures vivrières et maraîchères en zone
tropicale, spécialisé dans le contexte togolais (climat, sols, pratiques
locales).

CONTEXTE:
Localisation: [Région du Togo]
Superficie: [Hectares]
Type sol: [Si connu]
Accès eau: [Pluie uniquement / Irrigation / Puits]
Expérience agriculteur: [Débutant / Intermédiaire / Expérimenté]
Budget intrants: [Montant] FCFA

TÂCHE:
Recommande cultures optimales pour la saison prochaine [préciser saison]

Analyse:
1. Top 3 cultures recommandées (rentabilité + facilité + demande marché)
2. Calendrier cultural détaillé pour chaque culture
3. Intrants nécessaires avec coûts estimés
4. Rendements attendus et revenus potentiels
5. Risques principaux et prévention
6. Débouchés commerciaux locaux

FORMAT:
Fiche technique par culture:
- Pourquoi cette culture (rentabilité, facilité, marché)
- Calendrier (semis à récolte)
- Tableau intrants & coûts
- Prévisions revenus (scénario bas/moyen/haut)
- Conseils pratiques adaptés au contexte

CONTRAINTES:
- Adapté au climat et saison précise
- Intrants disponibles localement
- Techniques accessibles niveau agriculteur
- Budget respecté
- Débouchés vérifiables
- Conseils pratiques (pas théorie pure)
```

---

### COMMERCE

#### Prompt: Stratégie prix compétitive

```
TITRE: Analyseur prix et stratégie pricing

RÔLE:
Tu es un consultant pricing spécialisé retail et distribution en Afrique.

CONTEXTE:
Mon produit: [Description]
Mon coût revient: [Montant] FCFA
Mes concurrents directs:
- Concurrent A: Prix [X], positionnement [Y]
- Concurrent B: Prix [X], positionnement [Y]
- Concurrent C: Prix [X], positionnement [Y]

Ma clientèle: [Qui, pouvoir achat, sensibilité prix]
Mon positionnement souhaité: [Haut gamme/Milieu/Entrée gamme/Low cost]
Mes avantages vs concurrents: [Lister]

TÂCHE:
Recommande stratégie de prix optimale incluant:

1. ANALYSE CONCURRENTIELLE
   - Mapping prix marché
   - Positionnement chaque acteur
   - Gaps et opportunités

2. RECOMMANDATION PRIX
   - Prix de vente optimal
   - Marge réalisée
   - Justification (psycho pricing, valeur perçue)
   - Comparaison vs concurrents

3. VARIANTES TARIFAIRES
   - Prix lancement (si nouveau produit)
   - Prix promo / soldes
   - Prix volume (gros / détail)
   - Remises possibles

4. STRATÉGIE COMMUNICATION PRIX
   - Comment présenter le prix
   - Éléments de justification valeur
   - Réponses objections "trop cher"

5. SIMULATIONS
   - 3 scénarios prix (bas/moyen/haut)
   - Volumes attendus par scénario
   - Revenus et marges comparés
   - Recommandation finale

FORMAT:
Rapport structuré avec tableaux comparatifs et recommandation claire

CONTRAINTES:
- Basé sur données marché réelles
- Marge minimum 25% à respecter
- Prix psychologique optimisé
- Cohérent avec positionnement
```

---

### SERVICES / ONG

#### Prompt: Rédaction demande subvention

```
TITRE: Assistant rédaction dossier subvention ONG

RÔLE:
Tu es un expert en fundraising pour ONG et associations, spécialisé dans
la rédaction de demandes de financement auprès de bailleurs internationaux
(UE, Banque Mondiale, fondations, coopération bilatérale).

CONTEXTE:
Notre ONG: [Nom, mission, ancienneté, réalisations]
Projet à financer: [Description détaillée]
Bénéficiaires: [Qui, combien, où]
Budget total: [Montant]
Montant demandé: [Montant]
Bailleur ciblé: [Qui, ses priorités]
Durée projet: [Mois/années]

TÂCHE:
Rédige dossier de demande de subvention suivant structure standard
bailleurs internationaux:

1. RÉSUMÉ EXÉCUTIF (1 page)
   - Pitch projet
   - Objectif principal
   - Montant demandé
   - Impact attendu chiffré

2. CONTEXTE ET JUSTIFICATION
   - Problématique adressée (données chiffrées)
   - Pourquoi ce projet, pourquoi maintenant
   - Alignement avec priorités bailleur

3. OBJECTIFS ET RÉSULTATS ATTENDUS
   - Objectif général
   - Objectifs spécifiques (SMART)
   - Résultats attendus mesurables
   - Indicateurs de performance

4. MÉTHODOLOGIE
   - Approche et stratégie
   - Activités détaillées
   - Chronogramme
   - Parties prenantes

5. BUDGET DÉTAILLÉ
   - Par poste de dépense
   - Par activité
   - Justification coûts

6. CAPACITÉS ORGANISATION
   - Expérience pertinente
   - Équipe projet
   - Partenariats

7. PÉRENNITÉ ET SCALABILITÉ
   - Durabilité post-financement
   - Potentiel réplication

FORMAT:
Document formel structuré, ton académique mais accessible
Longueur: 15-20 pages
Tableaux pour budgets et chronogramme

CONTRAINTES:
- Langage ONG international standard
- Tous les chiffres justifiés/sourcés
- Approche "résultats" (pas "activités")
- Indicateurs SMART
- Alignement strict avec priorités bailleur
- Budget réaliste et détaillé
```

---

## PARTIE 4: TECHNIQUES AVANCÉES

### Technique: Few-shot Learning

**Principe:** Donner 2-3 exemples avant de demander la tâche

**Prompt exemple:**

```
Transforme ces descriptions produits ternes en descriptions vendeuses.

EXEMPLE 1:
Avant: "Chaussures en cuir noir taille 42"
Après: "Élégantes chaussures en cuir véritable, finition noir profond.
Confort optimal pour journées actives. Taille 42. Style intemporel qui
s'adapte à toutes vos tenues professionnelles."

EXEMPLE 2:
Avant: "Sac à dos 20L bleu"
Après: "Sac à dos urbain 20L au bleu vibrant. Parfait pour vos trajets
quotidiens ou escapades week-end. Multiples compartiments pour organisation
optimale. Bretelles ergonomiques et dos matelassé."

EXEMPLE 3:
Avant: "Lampe de bureau LED blanc"
Après: "Lampe de bureau LED design épuré. Lumière blanche ajustable pour
protection yeux. Idéale travail, lecture, études. Économique: -80%
consommation vs ampoule classique."

À TON TOUR, transforme ces produits:
1. "Téléphone Samsung A15 128Go noir"
2. "Ordinateur portable HP i5 8Go RAM"
3. "Montre homme acier argenté"
```

---

### Technique: Chain-of-Thought (Pensée en chaîne)

**Principe:** Demander à l'IA de montrer son raisonnement étape par étape

**Prompt exemple:**

```
Aide-moi à décider si je dois investir dans ce projet.

Projet: Ouvrir 2ème restaurant à Lomé
Investissement: 25M FCFA
Revenu mensuel estimé: 3.5M FCFA
Charges mensuelles estimées: 2.2M FCFA
Restaurant actuel: Rentable depuis 2 ans

Raisonne étape par étape:
1. Calcule retour sur investissement (temps récupération capital)
2. Identifie risques principaux
3. Évalue ma capacité financière actuelle
4. Compare avec alternatives (développer restaurant actuel, autre secteur)
5. Donne recommandation finale avec justification

Pour chaque étape, montre tes calculs et raisonnement.
```

---

### Technique: Role-Based Prompting

**Principe:** Donner un rôle très spécifique à l'IA

**Comparaison:**

**❌ Faible:**
```
Tu es un consultant marketing
```

**✅ Fort:**
```
Tu es Sarah Mensah, consultante marketing avec 15 ans d'expérience
spécifiquement dans le retail mode en Afrique de l'Ouest. Tu as accompagné
50+ boutiques de vêtements africains dans leur développement. Ton expertise
couvre particulièrement: positionnement marché local, stratégie réseaux
sociaux pour PME, et marketing low budget. Tu connais parfaitement les
codes culturels togolais et les attentes des consommatrices de pagnes et
vêtements africains. Ton style de conseil: pragmatique, orienté action,
avec toujours 3-5 recommandations concrètes.
```

**Effet:** Réponses beaucoup plus contextualisées et pertinentes

---

## PARTIE 5: ERREURS COURANTES ET CORRECTIONS

### Erreur #1: Prompt trop vague

**❌ Mauvais:**
```
Donne-moi des idées marketing
```

**✅ Bon:**
```
Tu es expert marketing PME togolaises.

Contexte: Boutique cosmétiques naturels, Lomé, budget 50K FCFA/mois,
cible femmes 20-40 ans

Donne-moi 10 idées marketing concrètes:
- 5 gratuites (0 FCFA)
- 5 payantes (budget total 50K)

Pour chacune: Description, coût, temps nécessaire, impact attendu, KPI
```

---

### Erreur #2: Oublier le contexte

**❌ Mauvais:**
```
Rédige un email de bienvenue pour nouveaux clients
```

**✅ Bon:**
```
Contexte: E-commerce vente pagnes wax en ligne, Togo, clientèle locale,
première commande reçue

Rédige email bienvenue incluant:
- Remerciement chaleureux
- Info livraison (3-5 jours Lomé, 7-10 jours régions)
- Code promo -10% 2ème achat (BIENVENUE10)
- Invitation suivre Instagram
- Signature authentique (fondatrice, histoire entreprise)

Ton: Chaleureux, authentique, proche, fier de produits locaux
```

---

### Erreur #3: Pas de format spécifié

**❌ Mauvais:**
```
Analyse ces données de ventes
```

**✅ Bon:**
```
Analyse ces données et présente résultats en:
1. Synthèse (3 bullets)
2. Tableau comparatif (mois par mois)
3. Top 3 insights actionnables
4. 1 graphique ASCII montrant tendance
5. Recommandations (liste numérotée)

Format: Markdown, prêt à copier dans email
```

---

### Erreur #4: Oublier les contraintes

**❌ Mauvais:**
```
Crée plan marketing
```

**✅ Bon:**
```
Crée plan marketing avec contraintes:
- Budget: 100K FCFA total
- Équipe: 2 personnes, pas skills techniques
- Délai: 3 mois
- Zone: Lomé uniquement
- Pas de compétences vidéo/design avancé
- Focus: Réseaux sociaux gratuits + bouche-à-oreille
```

---

## PARTIE 6: CHECKLIST PROMPT PARFAIT

Avant de valider votre prompt, vérifiez:

**STRUCTURE:**
- [ ] Rôle clair et spécifique
- [ ] Contexte complet (qui, quoi, où, pourquoi)
- [ ] Tâche précise et sans ambiguïté
- [ ] Format de sortie détaillé
- [ ] Contraintes importantes listées

**CONTENU:**
- [ ] Informations suffisantes (pas de questions implicites)
- [ ] Détails pertinents (secteur, taille entreprise, budget...)
- [ ] Objectif final explicite
- [ ] Audience cible mentionnée (si pertinent)

**QUALITÉ:**
- [ ] Langage clair et direct
- [ ] Pas d'ambiguïtés
- [ ] Exemples fournis (si tâche complexe)
- [ ] Longueur appropriée (ni trop court ni trop long)

**TESTING:**
- [ ] Testé avec résultat satisfaisant
- [ ] Itéré si premier résultat moyen
- [ ] Validé sur 2-3 cas similaires
- [ ] Documenté pour réutilisation

---

## CONCLUSION: BONNES PRATIQUES

1. **Investissez du temps sur vos prompts**
   - 10 min créer bon prompt = heures gagnées ensuite
   - Prompts réutilisables = ROI élevé

2. **Créez une bibliothèque d'entreprise**
   - Centralisez vos meilleurs prompts
   - Partagez avec équipe
   - Documentez cas d'usage

3. **Itérez systématiquement**
   - Premier résultat rarement parfait
   - Affinez et testez
   - Gardez meilleures versions

4. **Adaptez à votre contexte**
   - Tous les exemples sont adaptables
   - Changez contexte, pas structure
   - Contexte togolais = avantage compétitif

5. **Formez votre équipe**
   - Prompting = compétence clé 2025
   - Partagez techniques
   - Apprenez ensemble

---

**Vous maîtrisez maintenant l'art du prompting efficace!**
