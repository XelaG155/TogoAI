# 📝 SOLUTIONS: DIAGNOSTICS DE PROCESSUS PAR SECTEUR

**Document formateur:** Exemples de diagnostics complets par secteur

---

## 🌾 SECTEUR 1: AGRICULTURE & AGROALIMENTAIRE

### PARTIE 1: CARTOGRAPHIE DES PROCESSUS

**Nom du Groupe:** Agri-Innovation Togo
**Secteur:** Conseil agricole et distribution intrants

| # | Processus | Département | Fréquence | Personnes |
|---|-----------|-------------|-----------|-----------|
| 1 | Conseil technique aux agriculteurs | Agronomie | Quotidien | 5 agronomes |
| 2 | Commandes intrants (semences, engrais) | Commercial | Hebdo | 2 commerciaux |
| 3 | Prévisions des récoltes | Agronomie | Mensuel | 3 agronomes |
| 4 | Gestion des stocks d'intrants | Logistique | Quotidien | 2 magasiniers |
| 5 | Facturation clients agriculteurs | Comptabilité | Hebdo | 1 comptable |
| 6 | Formation agriculteurs (nouvelles techniques) | Formation | Mensuel | 4 formateurs |
| 7 | Suivi qualité des cultures | Agronomie | Hebdo | 3 agronomes |
| 8 | Rapports d'activités pour bailleurs | Direction | Mensuel | 1 directeur |
| 9 | Gestion des plaintes clients | SAV | Quotidien | 2 personnes |
| 10 | Analyse des sols | Laboratoire | Hebdo | 1 technicien |
| 11 | Communication (SMS/WhatsApp) avec agriculteurs | Marketing | Quotidien | 1 community manager |
| 12 | Veille prix du marché (maïs, riz, etc.) | Commercial | Quotidien | 1 commercial |

---

### Analyse détaillée - Processus #1: Conseil technique aux agriculteurs

**Description du processus actuel:**
Les agriculteurs appellent ou envoient WhatsApp avec questions techniques (maladies cultures, fertilisation, irrigation, etc.). Agronomes répondent selon disponibilité. Questions fréquemment répétitives. Pas de traçabilité ni capitalisation des réponses.

**Étapes du processus:**
1. Agriculteur appelle/écrit avec question
2. Agronome reçoit demande (si disponible)
3. Recherche information dans documentation/expérience
4. Formule réponse verbale ou écrite
5. Envoie réponse à agriculteur
6. (Parfois) Note réponse dans cahier personnel

**Goulots d'étranglement:**
- Agronomes surchargés: 50-80 appels/jour
- Indisponibilité: 40% des appels sans réponse immédiate
- Questions répétitives: 60% sont similaires
- Pas de base de connaissances centralisée
- Temps de recherche long (10-15 min par question complexe)

**Tâches répétitives:**
- [X] Saisie de données (noter questions/réponses)
- [ ] Copier-coller entre systèmes
- [X] Envoi d'emails/messages standardisés (réponses similaires)
- [X] Création de documents similaires (conseils techniques)
- [ ] Tri et classement
- [X] Vérifications manuelles (consulter documentation)

---

### PARTIE 2: ÉVALUATION DU POTENTIEL D'AUTOMATISATION

| # | Processus | RÉPÉTITIVITÉ | TEMPS | ERREURS | STRUCTURE | IMPACT | FAISABILITÉ | SCORE |
|---|-----------|--------------|-------|---------|-----------|--------|-------------|-------|
| 1 | Conseil technique agriculteurs | 5 | 5 | 3 | 4 | 5 | 5 | 27/30 |
| 2 | Commandes intrants | 4 | 3 | 4 | 5 | 4 | 4 | 24/30 |
| 3 | Prévisions récoltes | 2 | 4 | 4 | 3 | 5 | 3 | 21/30 |
| 4 | Gestion stocks | 5 | 4 | 5 | 5 | 4 | 4 | 27/30 |
| 5 | Facturation clients | 4 | 3 | 3 | 5 | 3 | 5 | 23/30 |
| 6 | Formation agriculteurs | 2 | 3 | 2 | 3 | 4 | 2 | 16/30 |
| 7 | Suivi qualité cultures | 3 | 3 | 3 | 4 | 4 | 3 | 20/30 |
| 8 | Rapports bailleurs | 2 | 5 | 2 | 4 | 5 | 4 | 22/30 |
| 9 | Gestion plaintes | 4 | 3 | 3 | 3 | 4 | 4 | 21/30 |
| 10 | Analyse sols | 3 | 2 | 2 | 5 | 3 | 3 | 18/30 |
| 11 | Communication agriculteurs | 5 | 4 | 2 | 4 | 4 | 5 | 24/30 |
| 12 | Veille prix marché | 5 | 2 | 2 | 4 | 3 | 5 | 21/30 |

**Justifications scores processus #1:**
- **Répétitivité: 5/5** - 50-80 appels par jour
- **Temps: 5/5** - 120 heures/mois (5 agronomes × 24h)
- **Erreurs: 3/5** - Parfois infos obsolètes ou contradictoires entre agronomes
- **Structuration: 4/5** - Questions récurrentes bien identifiables, réponses documentées
- **Impact: 5/5** - Critique pour satisfaction clients et adoption nouvelles techniques
- **Faisabilité: 5/5** - Chatbot WhatsApp + base FAQ + IA = outils accessibles

---

### PARTIE 3: MATRICE DE PRIORISATION

**ZONE VERTE (Impact ≥4, Faisabilité ≥4): PRIORITÉ 1**
1. **Conseil technique agriculteurs** (Score: 27/30) ← SÉLECTIONNÉ
2. **Gestion des stocks d'intrants** (Score: 27/30)
3. **Communication agriculteurs** (Score: 24/30)

**ZONE JAUNE (Impact ≥4, Faisabilité 2-3): PRIORITÉ 2**
1. **Prévisions des récoltes** (Score: 21/30)
2. **Rapports bailleurs** (Score: 22/30)

**ZONE BLANCHE (Impact 2-3): PRIORITÉ 3**
1. **Veille prix marché** (Score: 21/30)
2. **Facturation clients** (Score: 23/30)

**ZONE ROUGE: À ÉVITER**
1. **Formation agriculteurs** (Score: 16/30) - Requiert présence humaine forte
2. **Analyse sols** (Score: 18/30) - Technique de labo non automatisable facilement

---

### PARTIE 4: SÉLECTION DU PROCESSUS PRIORITAIRE

**Processus sélectionné:** Conseil technique aux agriculteurs

**Justification:**
- **Score le plus élevé (27/30)** avec impact et faisabilité maximums
- **Volume énorme:** 50-80 demandes/jour = 1500-2400/mois
- **ROI immédiat:** Économie 60% du temps agronomes = 720h/mois
- **Outils accessibles:** WhatsApp Business API + ChatGPT + Make.com
- **Amélioration service:** Disponibilité 24/7, réponses instantanées
- **Capitalisation:** Base de connaissances centralisée et évolutive

---

### A. ÉTAT ACTUEL (Situation problématique)

**Description détaillée:**
Actuellement, 5 agronomes passent 80% de leur temps à répondre aux mêmes questions techniques par téléphone ou WhatsApp. Les agriculteurs doivent souvent attendre plusieurs heures, voire jours, pour une réponse. 40% des appels ne reçoivent pas de réponse en temps utile (agronomes en déplacement, débordés). Les connaissances ne sont pas capitalisées: chaque agronome a ses propres notes, pas de système centralisé. Cela crée des incohérences dans les conseils et empêche la montée en compétence de nouveaux agronomes.

**Schéma du flux actuel:**
```
[Agriculteur]
    ↓ Appel/WhatsApp
[Attente disponibilité agronome] (40% perdus ici)
    ↓
[Agronome cherche info] (10-15 min)
    ↓
[Formule réponse verbale]
    ↓
[Répond à agriculteur]
    ↓
[Note dans cahier personnel] (50% du temps oublié)
```

**Points de douleur:**
1. **Surcharge agronomes:** 80% du temps sur questions répétitives, pas assez de temps pour accompagnement terrain de qualité
2. **Insatisfaction agriculteurs:** 40% des demandes sans réponse rapide, frustration
3. **Perte de connaissances:** Pas de capitalisation, départs d'agronomes = perte expertise
4. **Incohérence réponses:** 3 agronomes peuvent donner 3 réponses différentes à même question

**Ressources consommées actuellement:**
- Temps: 120 heures/mois (5 agronomes × 24h)
- Coût: 600 000 FCFA/mois (5 000 FCFA/h)
- Opportunité manquée: 40% appels perdus = 200 000 FCFA manque à gagner

**Conséquences:**
- **Clients:** Frustration, adoption lente des bonnes pratiques, pertes de récoltes évitables
- **Équipe:** Burn-out agronomes, démotivation, turnover
- **Financier:** Perte clients potentiels, image dégradée, coût agronomes élevé
- **Stratégique:** Impossible de scaler (servir plus d'agriculteurs sans embaucher)

---

### B. DONNÉES DISPONIBLES

| Type de données | Format actuel | Disponibilité | Qualité |
|-----------------|---------------|---------------|---------|
| Questions fréquentes agriculteurs | Cahiers papier + mémoire | Oui (dispersé) | 3/5 |
| Fiches techniques cultures | PDF + Word | Oui | 4/5 |
| Historique conversations WhatsApp | Messages WhatsApp | Oui (non structuré) | 2/5 |
| Base de connaissances agronomiques | Livres + sites web | Oui (externe) | 5/5 |
| Coordonnées agriculteurs | Excel | Oui | 4/5 |

**Problèmes de données identifiés:**
- [X] Données dispersées dans plusieurs systèmes (cahiers + WhatsApp + têtes agronomes)
- [X] Données non structurées (conversations WhatsApp, notes manuscrites)
- [X] Données de mauvaise qualité (conversations WhatsApp = bruit, fautes, éwé/français mélangé)
- [ ] Données non numérisées - partiellement (cahiers papier)

**Action préparatoire:** Structurer FAQ (500 Q&A) dans Airtable en 1 semaine

---

### C. OPPORTUNITÉS D'AUTOMATISATION

| Tâche du processus | Type d'IA applicable | Gain estimé |
|--------------------|---------------------|-------------|
| Répondre questions fréquentes (60%) | [X] Analyse [X] Génération | 90% temps |
| Répondre questions complexes (30%) | [X] Analyse [X] Génération | 70% temps |
| Escalade vers humain (10%) | [ ] Classification | 0% (nécessaire) |
| Capitalisation connaissances | [X] Classification | 100% temps |
| Traduction éwé ↔ français | [X] Génération | 80% temps |

**Gain total estimé:** 60% de réduction du temps (72h/mois libérées)

**Autres bénéfices attendus:**
- [X] Réduction des erreurs (cohérence réponses)
- [X] Amélioration qualité (base connaissances centralisée, à jour)
- [X] Satisfaction client accrue (disponibilité 24/7, réponse <2 min)
- [X] Meilleure traçabilité (toutes conversations loggées)
- [X] Libération temps pour tâches à plus forte valeur (visites terrain, R&D)
- [X] Scalabilité (servir 10x plus d'agriculteurs sans embaucher)

---

### D. OUTILS IA POTENTIELS

| Outil IA | Fonction | Coût estimé |
|----------|----------|-------------|
| **OpenAI GPT-4** | Moteur conversationnel + analyse | [X] Payant (25 000 FCFA/mois) |
| **WhatsApp Business API** | Interface communication | [X] Payant (15 000 FCFA/mois) |
| **Make.com** | Orchestration workflow | [X] Payant (10 000 FCFA/mois) |
| **Airtable** | Base de données FAQ | [X] Gratuit (plan free) |

**Total coût:** 50 000 FCFA/mois

**Intégrations nécessaires:**
- WhatsApp Business API ↔ Make.com (webhook)
- Make.com ↔ Airtable (recherche FAQ)
- Make.com ↔ OpenAI (appel API)
- Make.com ↔ Notification Slack (alertes agronomes si escalade)

---

### PARTIE 5: PLAN D'ACTION

**Phase 1: Préparation (semaines 1-2)**
- [X] Structurer FAQ (500 Q&A) dans Airtable
- [X] Créer comptes: Make.com, OpenAI, WhatsApp Business
- [X] Former 2 agronomes référents aux outils
- [X] Définir workflow escalade (quand passer à humain)
- [X] Préparer prompts IA (contexte agronomique Togo)

**Phase 2: Prototypage (semaines 3-4)**
- [X] Construire workflow Make.com de base
- [X] Paramétrer GPT-4 avec base connaissances
- [X] Tester avec 10 agriculteurs pilotes
- [X] Ajuster prompts selon feedback
- [X] Mesurer: taux réponses correctes, satisfaction, temps réponse

**Phase 3: Déploiement (semaines 5-6)**
- [X] Déployer pour 100 agriculteurs
- [X] Former équipe complète (5 agronomes)
- [X] Monitoring quotidien performances
- [X] Documenter workflows et procédures
- [X] Amélioration continue base FAQ

### Obstacles potentiels et solutions

| Obstacle prévu | Solution envisagée |
|----------------|-------------------|
| **Résistance agronomes** (peur de perdre emploi) | Communication: IA = assistant, libère temps pour travail terrain à plus forte valeur. Impliquer dans construction. |
| **Questions en éwé non comprises par IA** | Intégrer traduction éwé↔français dans workflow. Former IA sur expressions locales. |
| **Agriculteurs préfèrent contact humain** | Garder possibilité d'escalade vers agronome. IA = 1er niveau, humain = 2e niveau. |
| **Qualité réponses IA insuffisante** | Phase pilote 1 mois, taux validation humaine 95%. Amélioration continue prompts. |
| **Coûts API dépassent budget** | Optimiser: FAQ Airtable d'abord (gratuit), IA seulement si pas de match. Surveiller usage. |

---

### AUTO-ÉVALUATION

| Critère | Oui | Partiel | Non |
|---------|-----|---------|-----|
| Avons-nous identifié au moins 10 processus? | X |  |  |
| Avons-nous évalué tous les critères? | X |  |  |
| Le processus sélectionné est-il dans la zone verte/jaune? | X (zone verte) |  |  |
| Avons-nous des données chiffrées (temps, coûts)? | X |  |  |
| Le plan d'action est-il réaliste? | X |  |  |

**Principaux apprentissages:**
1. Un diagnostic structuré permet d'objectiver le choix du processus (pas d'intuition)
2. Les critères Impact × Faisabilité sont décisifs pour prioriser
3. La préparation des données (FAQ structurée) est 50% du succès

---

## 🛒 SECTEUR 2: COMMERCE & DISTRIBUTION

### PARTIE 1: CARTOGRAPHIE

**Nom du Groupe:** Supermarché ModerneTogo
**Secteur:** Grande distribution alimentaire

| # | Processus | Département | Fréquence | Personnes |
|---|-----------|-------------|-----------|-----------|
| 1 | Gestion des stocks et réapprovisionnement | Logistique | Quotidien | 3 |
| 2 | Encaissement clients | Caisse | Quotidien | 8 caissiers |
| 3 | Contrôle qualité produits frais | Qualité | Quotidien | 2 |
| 4 | Promotions et marketing | Marketing | Hebdo | 2 |
| 5 | Gestion des plaintes clients | SAV | Quotidien | 1 |
| 6 | Comptabilité et facturation fournisseurs | Compta | Hebdo | 1 comptable |
| 7 | Inventaire physique | Logistique | Mensuel | 5 (tous) |
| 8 | Recrutement et formation personnel | RH | Mensuel | 1 RH |
| 9 | Analyse des ventes | Direction | Hebdo | 1 directeur |
| 10 | Relation fournisseurs (négociation prix) | Achat | Hebdo | 1 acheteur |
| 11 | Affichage et mise en rayon | Magasin | Quotidien | 4 employés |
| 12 | Suivi des dates de péremption | Qualité | Quotidien | 2 |

### Processus sélectionné: Gestion des stocks et réapprovisionnement

**Score:** 28/30 (Répétitivité: 5, Temps: 5, Erreurs: 5, Structure: 5, Impact: 4, Faisabilité: 4)

**État actuel:**
- Ruptures de stock: 15% des produits (coût opportunité: 800 000 FCFA/mois)
- Surstock: 1 200 000 FCFA immobilisés (produits à rotation lente)
- Temps gestion: 30h/mois (manuel, Excel)
- Erreurs de commande: 20% (quantités inadaptées)

**Solution IA:**
Système prédictif qui analyse historique ventes (2 ans), détecte tendances/saisonnalité, prédit besoins 14 jours, génère bons de commande automatiques.

**Outils:** Google Sheets + ChatGPT (analyse) + Make.com + Gmail

**ROI:**
- Gains: 535 000 FCFA/mois (réduction ruptures + surstock + temps)
- Coût: 80 000 FCFA/mois
- **ROI: 669%**
- Délai retour: 18 jours

---

## 💼 SECTEUR 3: SERVICES & CONSEIL

### PARTIE 1: CARTOGRAPHIE

**Nom du Groupe:** ConseilBusiness Togo
**Secteur:** Cabinet de conseil en stratégie et management

| # | Processus | Département | Fréquence | Personnes |
|---|-----------|-------------|-----------|-----------|
| 1 | Rédaction propositions commerciales | Commercial | Hebdo | 3 consultants |
| 2 | Rédaction rapports d'analyse clients | Consulting | Hebdo | 5 consultants |
| 3 | Prospection nouveaux clients | Commercial | Quotidien | 2 commerciaux |
| 4 | Veille sectorielle et benchmark | R&D | Hebdo | 1 analyste |
| 5 | Gestion des contrats | Admin | Mensuel | 1 admin |
| 6 | Facturation et suivi paiements | Compta | Hebdo | 1 comptable |
| 7 | Formation interne équipe | RH | Mensuel | 1 RH |
| 8 | Gestion de projets clients | Consulting | Quotidien | 5 consultants |
| 9 | Présentations PowerPoint clients | Consulting | Hebdo | 5 consultants |
| 10 | Analyse de données clients (Excel) | Consulting | Hebdo | 3 consultants |
| 11 | Reporting direction (KPIs, CA) | Direction | Mensuel | 1 directeur |
| 12 | Gestion des emails clients | Tous | Quotidien | Tous |

### Processus sélectionné: Rédaction rapports d'analyse et propositions commerciales

**Score:** 26/30 (Répétitivité: 4, Temps: 5, Erreurs: 3, Structure: 4, Impact: 5, Faisabilité: 5)

**État actuel:**
- Temps: 3h/rapport × 12 rapports/mois = 36h
- Coût: 360 000 FCFA/mois
- Opportunités perdues: 5 prospects/mois (manque de temps) = 500 000 FCFA

**Solution IA:**
Outil qui génère rapports et propositions personnalisées en 15 min (vs 3h) à partir d'un formulaire structuré.

**Outils:** Claude AI + Google Docs API + Make.com + Airtable (templates)

**ROI:**
- Gains: 615 000 FCFA/mois (temps + nouveaux clients)
- Coût: 60 000 FCFA/mois
- **ROI: 925%**
- Délai retour: 12 jours

---

## 🏛️ SECTEUR 4: ONG & SECTEUR PUBLIC

### PARTIE 1: CARTOGRAPHIE

**Nom du Groupe:** ONG Développement Rural Togo
**Secteur:** ONG développement communautaire

| # | Processus | Département | Fréquence | Personnes |
|---|-----------|-------------|-----------|-----------|
| 1 | Collecte données terrain (enquêtes) | Programmes | Hebdo | 6 agents |
| 2 | Rapports mensuels bailleurs | M&E | Mensuel | 2 M&E officers |
| 3 | Suivi indicateurs projets (KPIs) | M&E | Hebdo | 2 M&E officers |
| 4 | Gestion des bénéficiaires (base données) | Programmes | Quotidien | 3 coordinateurs |
| 5 | Communication avec communautés | Communication | Hebdo | 1 comm officer |
| 6 | Gestion budget et comptabilité | Finance | Quotidien | 2 comptables |
| 7 | Recrutement et formation volontaires | RH | Mensuel | 1 RH |
| 8 | Planification activités terrain | Programmes | Hebdo | 4 coordinateurs |
| 9 | Archivage et documentation | Admin | Hebdo | 1 admin |
| 10 | Évaluation impact projets | M&E | Trimestriel | 2 M&E + externe |
| 11 | Relation bailleurs (reporting) | Direction | Mensuel | 1 directeur |
| 12 | Suivi des plaintes bénéficiaires | Safeguarding | Quotidien | 1 focal point |

### Processus sélectionné: Collecte données terrain + Rapports mensuels bailleurs

**Score:** 25/30 (Répétitivité: 4, Temps: 5, Erreurs: 4, Structure: 4, Impact: 5, Faisabilité: 3)

**État actuel:**
- Temps collecte: 20h/mois (papier + saisie Excel)
- Temps rapports: 15h/mois (rédaction + mise en forme)
- Total: 35h/mois = 105 000 FCFA
- Erreurs fréquentes, retards, risque perte financement

**Solution IA:**
Système automatisé: Google Forms (terrain) → Google Sheets → ChatGPT (analyse + rédaction) → Looker Studio (dashboards) → Google Docs (rapport formaté)

**Outils:** Google Forms + Sheets + ChatGPT + Make.com + Looker Studio

**ROI:**
- Gains: 120 000 FCFA/mois (temps) + sécurisation financement
- Coût: 40 000 FCFA/mois
- **ROI: 200%**
- Délai retour: 2 mois

---

## 💻 SECTEUR 5: TECH & INNOVATION

### PARTIE 1: CARTOGRAPHIE

**Nom du Groupe:** StartupTech Lomé
**Secteur:** Développement applications mobiles

| # | Processus | Département | Fréquence | Personnes |
|---|-----------|-------------|-----------|-----------|
| 1 | Support client (tickets, bugs) | Support | Quotidien | 2 agents |
| 2 | Développement fonctionnalités | Tech | Quotidien | 4 développeurs |
| 3 | Tests et QA | Tech | Quotidien | 1 testeur |
| 4 | Onboarding nouveaux clients | Sales | Hebdo | 1 sales |
| 5 | Documentation technique | Tech | Hebdo | 1 dev senior |
| 6 | Gestion du code (revue, merge) | Tech | Quotidien | 4 développeurs |
| 7 | Marketing digital et social media | Marketing | Quotidien | 1 marketer |
| 8 | Analyse des données utilisateurs | Product | Hebdo | 1 product manager |
| 9 | Prospection partenaires | Business | Hebdo | 1 CEO |
| 10 | Facturation abonnements | Finance | Mensuel | 1 comptable |
| 11 | Recrutement tech | RH | Mensuel | 1 CEO |
| 12 | Gestion backlog produit | Product | Hebdo | 1 product manager |

### Processus sélectionné: Support client (tickets niveau 1)

**Score:** 27/30 (Répétitivité: 5, Temps: 5, Erreurs: 3, Structure: 5, Impact: 5, Faisabilité: 4)

**État actuel:**
- 300 tickets/mois
- 2 agents × 160h/mois = 320h
- Coût: 1 120 000 FCFA/mois
- Temps réponse: 4h en moyenne
- CSAT: 3.5/5

**Solution IA:**
Chatbot multicanal (web, WhatsApp, email) + RAG (Retrieval-Augmented Generation) qui résout 70% des tickets automatiquement.

**Outils:** Claude AI + Pinecone (vector DB) + Zendesk + Make.com

**ROI:**
- Gains: 705 000 FCFA/mois (70% tickets automatisés)
- Coût: 100 000 FCFA/mois
- **ROI: 605%**
- Délai retour: 18 jours

---

## 📊 GRILLE D'ÉVALUATION FORMATEURS

### Critères d'évaluation des diagnostics étudiants

**Excellent diagnostic (90-100%):**
- 10+ processus identifiés avec détails précis
- Scores justifiés et cohérents
- Données chiffrées (temps, coûts) réalistes
- Processus sélectionné = meilleur score impact×faisabilité
- Plan d'action détaillé et réaliste
- Obstacles anticipés avec solutions concrètes

**Bon diagnostic (70-89%):**
- 8-10 processus identifiés
- Scores globalement cohérents
- Quelques données chiffrées
- Processus sélectionné pertinent
- Plan d'action correct mais générique

**Diagnostic à améliorer (50-69%):**
- <8 processus ou descriptions vagues
- Scores incohérents ou non justifiés
- Peu de données chiffrées
- Processus sélectionné pas optimal
- Plan d'action superficiel

**Diagnostic insuffisant (<50%):**
- <5 processus
- Scores aléatoires
- Pas de données chiffrées
- Mauvais choix de processus
- Pas de plan d'action

### Questions fréquentes et réponses

**Q: "Notre processus a score 18/30, peut-on quand même le choisir?"**
R: Non recommandé. Un score <20 indique faible potentiel ROI. Mieux vaut un processus simple (score 25) qu'un complexe (score 18).

**Q: "On a 2 processus à score 27, comment choisir?"**
R: Prenez celui avec impact le plus fort, ou faisabilité la plus élevée selon vos contraintes (budget, temps, compétences).

**Q: "Notre processus nécessite expertise très technique, faisabilité = 2. Abandonner?"**
R: Oui pour un MVP. Peut être un projet long terme (Priorité 2-3). Focus sur quick wins d'abord.

**Q: "Pas de données chiffrées disponibles, comment scorer?"**
R: Estimations basées sur observation. Exemple: "Agent passe ~50% temps sur ce processus" → 80h/mois si temps plein = 160h.
