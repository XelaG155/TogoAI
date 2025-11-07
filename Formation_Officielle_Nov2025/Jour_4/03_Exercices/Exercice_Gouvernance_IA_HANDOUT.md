# EXERCICE PRATIQUE: GOUVERNANCE IA EN ENTREPRISE

**Formation Executive IA - Jour 4**
**Durée:** 60 minutes
**Format:** Cas pratique guidé en binômes

---

## OBJECTIFS

À l'issue de cet exercice, vous saurez:
- Mettre en place un cadre de gouvernance IA
- Définir rôles et responsabilités
- Créer un processus d'approbation de projets IA
- Utiliser des outils d'audit et de conformité
- Appliquer votre charte éthique à un cas concret

---

## CADRE DE GOUVERNANCE IA

### Qu'est-ce que la gouvernance IA?

**Définition:**
> L'ensemble des structures, rôles, processus et règles qui assurent que l'IA est développée et utilisée de façon éthique, légale et alignée avec les objectifs de l'organisation.

**En plus simple:**
> Le "système de contrôle qualité" pour vos projets IA.

---

### Les 4 piliers de la gouvernance IA

**Pilier 1: STRUCTURE (Qui?)**
- Comité d'éthique IA
- Rôles et responsabilités clairs
- Lignes de reporting définies

**Pilier 2: PROCESSUS (Comment?)**
- Workflow d'approbation projets
- Méthodologie d'évaluation éthique
- Procédures d'audit

**Pilier 3: OUTILS (Avec quoi?)**
- Checklist conformité
- Grilles d'évaluation
- Tableaux de bord (KPIs)

**Pilier 4: CULTURE (Pourquoi?)**
- Valeurs et principes
- Formation continue
- Communication et transparence

---

### Rôles et responsabilités clés

#### 1. Comité d'Éthique IA

**Composition recommandée:**
- **Président:** Directeur Général ou DG Adjoint
- **Membres permanents:**
  - DSI / CTO
  - DRH
  - Directeur Juridique / Compliance
  - Responsable Data & IA
- **Membres invités selon projet:**
  - Experts métier concernés
  - Représentant employés
  - Expert externe (si budget permet)

**Fréquence:** Minimum trimestrielle + réunions ad hoc si projet critique

**Responsabilités:**
- Valider tous projets IA avant déploiement
- Définir et réviser charte éthique IA
- Examiner audits et incidents
- Recommander actions correctives
- Former et sensibiliser l'organisation

---

#### 2. Data Protection Officer (DPO)

**Profil:**
- Connaissance juridique (RGPD, lois locales)
- Compréhension technique IA (niveau général)
- Indépendance (ne peut être DSI en même temps!)

**Responsabilités:**
- Veiller conformité réglementaire
- Conseiller sur privacy by design
- Point de contact autorités (CNPD Togo)
- Gérer demandes d'exercice de droits
- Former équipes aux obligations légales

**Obligation légale:** Requis si >20 employés au Togo

---

#### 3. Responsable IA / AI Lead

**Profil:**
- Expertise technique IA
- Vision stratégique
- Capacité pédagogique

**Responsabilités:**
- Piloter projets IA
- Évaluer faisabilité technique
- Assurer qualité des modèles
- Documenter systèmes IA
- Veille technologique

---

#### 4. Champions IA par département

**Profil:**
- Collaborateur de chaque département
- Intérêt pour l'IA
- Crédibilité auprès des pairs

**Responsabilités:**
- Identifier cas d'usage IA dans son département
- Relayer questions/préoccupations au Comité
- Former collègues aux outils IA
- Tester et donner feedback sur projets

---

### Processus d'approbation de projets IA

**Workflow en 5 étapes:**

```
ÉTAPE 1: SOUMISSION
↓
Porteur projet soumet dossier au Comité
- Description projet
- Objectifs business
- Données nécessaires
- Risques identifiés

ÉTAPE 2: ÉVALUATION INITIALE (DPO + AI Lead)
↓
Screening rapide (7 jours max)
- Conformité légale basique
- Faisabilité technique
- Risque éthique apparent

ÉTAPE 3: ÉVALUATION APPROFONDIE (Comité)
↓
Analyse complète (21 jours max)
- Privacy Impact Assessment
- Algorithmic Impact Assessment
- Évaluation ROI
- Décision: Approuver / Modifier / Rejeter

ÉTAPE 4: DÉVELOPPEMENT ET TESTS
↓
Si approuvé, développement avec:
- Points de contrôle intermédiaires
- Tests éthique/sécurité
- Documentation continue

ÉTAPE 5: DÉPLOIEMENT ET MONITORING
↓
Après déploiement:
- KPIs éthiques suivis
- Audits périodiques
- Revue annuelle minimale
```

---

### Indicateurs de performance éthique (KPIs)

**KPIs de conformité:**
- % projets IA avec AIA complété: Cible 100%
- Délai moyen approbation projet: Cible <21 jours
- % projets audités annuellement: Cible 100%
- Nombre incidents éthiques: Cible 0

**KPIs d'équité:**
- Taux de disparité max entre groupes: Cible <10%
- Nombre biais détectés et corrigés: Tracker
- Score d'équité moyen projets: Cible >80/100

**KPIs de sécurité:**
- Nombre violations données: Cible 0
- Temps moyen correction vulnérabilité: Cible <7 jours
- % systèmes avec chiffrement: Cible 100%
- Score audit sécurité: Cible >90/100

**KPIs de transparence:**
- % décisions IA explicables: Cible 100%
- Satisfaction utilisateurs (transparence): Cible >80%
- Délai moyen réponse demandes: Cible <15 jours

---

## CAS PRATIQUE GUIDÉ

### Scénario: Système IA de gestion RH

**Contexte:**
```
Entreprise: DistribTogo SARL
Secteur: Distribution (supermarchés)
Taille: 150 employés (100 Lomé, 50 régions)
CA: 8 milliards FCFA/an

Projet proposé:
Déployer IA pour:
1. Screening automatisé CVs (recrutement)
2. Prédiction performance employés
3. Recommandations promotions internes
4. Optimisation plannings (shifts)

Données utilisées:
- CVs candidats externes
- Dossiers employés (âge, genre, poste, ancienneté, formation)
- Évaluations performance (3 dernières années)
- Données présence/ponctualité
- Historique formations suivies
- Feedbacks managers
```

---

### Exercice guidé en binômes (25 min)

**Instructions:**
Vous êtes le Comité d'Éthique IA. Vous devez évaluer ce projet.

**Travail par binôme:**
Remplir les 4 grilles d'évaluation ci-dessous.

---

#### GRILLE 1: Analyse des risques éthiques (7 min)

**Identifiez les risques pour chaque principe:**

| Principe | Risques identifiés | Niveau (F/M/É) | Mesures d'atténuation proposées |
|----------|-------------------|----------------|----------------------------------|
| **Équité** | | | |
| Exemple: Biais genre dans promotions | Élevé | Auditer données historiques, équilibrer dataset |
| | | | |
| | | | |
| **Transparence** | | | |
| | | | |
| | | | |
| **Vie privée** | | | |
| | | | |
| | | | |
| **Responsabilité** | | | |
| | | | |
| | | | |
| **Bénéfice social** | | | |
| | | | |
| | | | |

**Légende:** F = Faible, M = Moyen, É = Élevé

---

#### GRILLE 2: Privacy Impact Assessment simplifié (7 min)

**Évaluez la conformité vie privée:**

| Question | Oui / Non / Partiel | Commentaire | Action nécessaire |
|----------|---------------------|-------------|-------------------|
| **Base légale claire?** | | | |
| Exemples: Contrat travail, consentement, intérêt légitime | | | |
| **Données minimales?** | | | |
| Collecte uniquement nécessaire? | | | |
| **Consentement éclairé?** | | | |
| Employés/candidats informés et consentants? | | | |
| **Durée rétention définie?** | | | |
| Combien de temps garder données? | | | |
| **Sécurité adéquate?** | | | |
| Chiffrement, contrôles accès, etc.? | | | |
| **Droits respectés?** | | | |
| Accès, rectification, effacement possibles? | | | |
| **Transferts sécurisés?** | | | |
| Si données envoyées hors Togo (cloud) | | | |
| **DPO consulté?** | | | |
| | | | |

**Score:** __ / 8 items conformes

**Décision:**
- 8/8: ✅ Conforme
- 6-7/8: ⚠️ Ajustements mineurs nécessaires
- 4-5/8: ⚠️ Révision importante requise
- <4/8: ⛔ Non conforme - projet à revoir

---

#### GRILLE 3: Évaluation d'équité algorithmique (6 min)

**Tests à effectuer AVANT déploiement:**

| Test | Comment le faire? | Seuil acceptable | Statut |
|------|-------------------|------------------|--------|
| **Disparité démographique** | | | |
| Mesurer taux d'acceptation/promotion par genre, âge, région | Ratio max 1.25:1 | À tester |
| **Disparité d'erreur** | | | |
| Taux faux positifs/négatifs par groupe | Écart max 10% | À tester |
| **Calibration par groupe** | | | |
| Précision de l'IA similaire pour tous groupes | Écart max 5% | À tester |
| **Audit variables** | | | |
| Identifier variables proxy discriminantes | Aucune trouvée | À faire |

**Plan de test:**
```
1. Avant déploiement:
   - Tester IA sur données historiques
   - Mesurer disparités par groupe
   - Corriger si seuils dépassés

2. Après déploiement:
   - Monitoring hebdomadaire mois 1-3
   - Monitoring mensuel ensuite
   - Audit complet annuel
```

---

#### GRILLE 4: Décision finale du Comité (5 min)

**Synthèse et recommandation:**

| Critère | Score / 10 | Commentaires |
|---------|------------|--------------|
| **Alignement stratégique** | | Projet sert objectifs entreprise? |
| **Faisabilité technique** | | Techniquement réalisable? |
| **ROI estimé** | | Retour sur investissement positif? |
| **Conformité légale** | | Respect RGPD, lois togolaises? |
| **Conformité éthique** | | Respect charte éthique? |
| **Gestion des risques** | | Risques identifiés et atténués? |
| **Acceptabilité sociale** | | Employés accepteront le système? |

**Score total:** __ / 70

**Décision finale:**
- ✅ **APPROUVÉ** - Déploiement autorisé
- ⚠️ **APPROUVÉ SOUS CONDITIONS** - Modifications requises: _______________
- ⛔ **REJETÉ** - Raisons: _______________
- 🔄 **REPORT** - Informations manquantes: _______________

**Conditions d'approbation (si applicable):**
1. _______________________________________
2. _______________________________________
3. _______________________________________

**Prochaines étapes:**
- Phase pilote (3 mois, 1 département)
- Tests d'équité sur données réelles
- Formation utilisateurs (managers RH)
- Communication transparente employés
- Revue post-déploiement (6 mois)

**Responsable suivi:** _______________________
**Date revue:** _______________________

---

## OUTILS ET FRAMEWORKS

### Checklist de conformité

**À utiliser pour CHAQUE projet IA:**

```
PROJET: _______________________
DATE ÉVALUATION: _______________
ÉVALUATEUR: ___________________

☐ PHASE 1: CONCEPTION
  ☐ Objectif clairement défini
  ☐ Nécessité de l'IA justifiée
  ☐ Parties prenantes consultées
  ☐ Risques éthiques identifiés
  ☐ Données sources auditées
  ☐ Base légale établie
  ☐ Privacy by design appliqué

☐ PHASE 2: DÉVELOPPEMENT
  ☐ Dataset équilibré et représentatif
  ☐ Biais testés et atténués
  ☐ Algorithme documenté
  ☐ Explicabilité assurée
  ☐ Tests d'équité effectués
  ☐ Sécurité implémentée
  ☐ Code reviewé

☐ PHASE 3: VALIDATION
  ☐ Privacy Impact Assessment complété
  ☐ Algorithmic Impact Assessment complété
  ☐ Tests utilisateurs effectués
  ☐ DPO a validé
  ☐ Comité Éthique a approuvé
  ☐ Documentation complète
  ☐ Formation utilisateurs planifiée

☐ PHASE 4: DÉPLOIEMENT
  ☐ Communication transparente
  ☐ Mécanismes de recours en place
  ☐ Monitoring automatisé activé
  ☐ Logs et traçabilité opérationnels
  ☐ Plan réponse incidents préparé
  ☐ Responsable désigné

☐ PHASE 5: MAINTENANCE
  ☐ Audits périodiques planifiés
  ☐ KPIs éthiques suivis
  ☐ Feedback utilisateurs collecté
  ☐ Mises à jour sécurité appliquées
  ☐ Revue annuelle effectuée

SCORE: _____ / 35 items

< 25: ⛔ Projet non prêt
25-30: ⚠️ Améliorations nécessaires
31-35: ✅ Conformité excellente
```

---

### Matrice de risque éthique

```
         IMPACT
          ↑
    Élevé │ MOYEN  │ ÉLEVÉ  │ CRITIQUE
          │ (6-11) │ (12-17)│ (18-25)
          ├────────┼────────┼─────────
    Moyen │ FAIBLE │ MOYEN  │ ÉLEVÉ
          │ (2-5)  │ (6-11) │ (12-17)
          ├────────┼────────┼─────────
    Faible│ MINEUR │ FAIBLE │ MOYEN
          │ (1)    │ (2-5)  │ (6-11)
          └────────┴────────┴─────────→
               Faible  Moyen  Élevé
                  PROBABILITÉ

Actions selon niveau:
- MINEUR: Documenter
- FAIBLE: Surveiller
- MOYEN: Atténuer
- ÉLEVÉ: Traiter prioritairement
- CRITIQUE: Bloquer jusqu'à résolution
```

**Comment noter:**
```
Probabilité:
- Faible (1): <10% chance
- Moyen (3): 10-50% chance
- Élevé (5): >50% chance

Impact:
- Faible (1): Impact limité, réversible
- Moyen (3): Impact significatif
- Élevé (5): Impact majeur, irréversible

Score risque = Probabilité × Impact
```

---

## RESSOURCES

### Outils open source gratuits

**1. AI Fairness 360 (IBM)**
- URL: github.com/IBM/AIF360
- Usage: Détection et atténuation biais
- Langages: Python

**2. Fairlearn (Microsoft)**
- URL: fairlearn.org
- Usage: Évaluation équité algorithmes ML
- Intégration: Scikit-learn, Azure ML

**3. What-If Tool (Google)**
- URL: pair-code.github.io/what-if-tool
- Usage: Exploration visuelles modèles ML
- Détection biais et analyse contrefactuels

**4. Aequitas (University of Chicago)**
- URL: github.com/dssg/aequitas
- Usage: Audit d'équité
- Focus: Disparités par groupe

---

## SYNTHÈSE

### Ce que vous avez appris

**Compétences acquises:**
- Structure de gouvernance IA
- Processus d'évaluation projets
- Utilisation grilles d'audit
- Prise de décision éthique
- Documentation et traçabilité

**Livrables:**
- Grilles d'évaluation remplies
- Checklist de conformité
- Templates utilisables
- Liste d'outils gratuits

---

### Prochaines étapes dans votre organisation

**À faire dans les 30 jours:**
- Nommer responsable IA / DPO
- Constituer Comité Éthique IA
- Adapter charte éthique créée aujourd'hui
- Créer registre projets IA

**À faire dans les 90 jours:**
- Auditer projets IA existants
- Mettre en place processus approbation
- Former équipes aux principes éthiques
- Déployer premier projet avec nouvelle gouvernance

**À faire dans l'année:**
- Audit externe (si budget permet)
- Certification ISO 27001 ou équivalent
- Revue annuelle charte et processus
- Bilan public (transparence)
