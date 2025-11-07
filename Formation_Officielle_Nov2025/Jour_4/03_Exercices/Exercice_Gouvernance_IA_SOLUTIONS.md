# SOLUTIONS: GOUVERNANCE IA - CAS DISTRIB TOGO

**Correction détaillée de l'exercice pratique**

---

## CAS PRATIQUE: SYSTÈME IA RH - DISTRIB TOGO

### Rappel du contexte

```
Entreprise: DistribTogo SARL
Secteur: Distribution (supermarchés)
Taille: 150 employés
CA: 8 milliards FCFA/an

Projet IA RH:
1. Screening CVs
2. Prédiction performance
3. Recommandations promotions
4. Optimisation plannings
```

---

## GRILLE 1: ANALYSE DES RISQUES ÉTHIQUES

### Risques identifiés et mesures d'atténuation

| Principe | Risques identifiés | Niveau | Mesures d'atténuation |
|----------|-------------------|--------|------------------------|
| **ÉQUITÉ** | | | |
| Biais genre dans promotions | Élevé | Auditer données historiques, équilibrer dataset |
| Discrimination géographique (Lomé vs régions) | Élevé | Tests d'équité par région, calibration si nécessaire |
| Biais âge dans recrutement | Moyen | Exclure âge des variables, tests générationnels |
| Favorisation anciens de certaines écoles | Moyen | Diversifier sources recrutement, blind screening |
| Pénalisation pauses carrière (maternité) | Élevé | Variables de continuité pondérées différemment |
| **TRANSPARENCE** | | | |
| Décisions IA opaques pour employés | Élevé | Explication systématique scores IA, dashboard personnel |
| Manque compréhension algorithmes RH | Moyen | Formation managers, documentation accessible |
| Absence traçabilité décisions passées | Élevé | Logs complets, audit trail, archivage 5 ans |
| Boîte noire modèles ML complexes | Moyen | Utiliser modèles explicables (decision trees, linear) |
| **VIE PRIVÉE** | | | |
| Collecte excessive données personnelles | Élevé | Minimisation: collecter strict nécessaire uniquement |
| Accès non autorisés dossiers employés | Critique | Contrôles accès stricts, 2FA, logs détaillés |
| Partage données avec tiers (fournisseur IA) | Élevé | Anonymisation avant envoi, contrat strict DPA |
| Stockage données cloud étranger | Moyen | Préférer hébergement local/CEDEAO, chiffrement |
| Durée rétention indéfinie | Moyen | Politique claire: suppression après départ + 1 an |
| **RESPONSABILITÉ** | | | |
| Décisions 100% automatisées sans humain | Critique | Human-in-the-loop obligatoire décisions majeures |
| Absence responsable clairement identifié | Élevé | DRH responsable final, validation systématique |
| Impossibilité contester décision IA | Élevé | Processus recours formalisé, révision humaine |
| Dilution responsabilité ("c'est l'IA") | Moyen | Formation: IA = outil, humain = responsable |
| **BÉNÉFICE SOCIAL** | | | |
| Licenciements liés à optimisation IA | Critique | Engagement: reconversion, pas licenciement IA |
| Déshumanisation relations RH | Moyen | IA = outil aide décision, pas remplacement RH |
| Stress employés (surveillance) | Élevé | Communication transparente, opt-out possible |
| Fracture numérique (exclusion moins tech-savvy) | Moyen | Formation, support, alternatives non-tech |
| Concentration pouvoir RH via IA | Moyen | Comité mixte (RH + représentants employés) |

---

## GRILLE 2: PRIVACY IMPACT ASSESSMENT

### Évaluation conformité vie privée

| Question | Réponse | Commentaire | Action nécessaire |
|----------|---------|-------------|-------------------|
| **Base légale claire?** | PARTIEL | Contrat travail pour employés OK. Candidats externes: consentement nécessaire | Formulaire consentement candidats, clause contrat employés |
| **Données minimales?** | NON | Collecte excessive: âge exact, adresse précise non nécessaires | Remplacer par: tranche âge, région. Supprimer: photo, situation familiale |
| **Consentement éclairé?** | NON | Information vague, pas de consentement explicite | Notice claire usage IA, consentement opt-in actif, possibilité refus |
| **Durée rétention définie?** | NON | Aucune politique claire | Définir: CVs non retenus 2 ans, employés départ + 1 an, évaluations 5 ans |
| **Sécurité adéquate?** | PARTIEL | Chiffrement transport OK, mais stockage en clair | Implémenter: chiffrement AES-256 au repos, coffre-fort secrets |
| **Droits respectés?** | NON | Pas de procédure accès/rectification/effacement | Créer formulaires + processus (délai 15 jours max) |
| **Transferts sécurisés?** | NON | Fournisseur IA = cloud US, pas de DPA | Négocier DPA (Data Processing Agreement), clauses contractuelles types EU |
| **DPO consulté?** | NON | DPO pas encore nommé | URGENT: Nommer DPO (obligation légale >20 employés) |

**Score:** 1.5 / 8 = **19%** ⛔ NON CONFORME

**Décision:** Révision MAJEURE requise avant tout déploiement

---

## GRILLE 3: ÉVALUATION ÉQUITÉ ALGORITHMIQUE

### Tests à effectuer

| Test | Méthodologie détaillée | Seuil | Actions si dépassement |
|------|------------------------|-------|------------------------|
| **Disparité démographique** | | | |
| Genre | Mesurer: Taux promotion H vs F, Taux recrutement H vs F | Ratio max 1.25:1 | 1. Identifier variables causales<br>2. Ré-échantillonnage dataset<br>3. Contraintes fairness algorithme<br>4. Si persiste: calibration par groupe |
| Région | Taux recrutement Lomé vs Régions, Promotions Lomé vs Régions | Ratio max 1.25:1 | 1. Vérifier variables proxy (code postal, école)<br>2. Surpondérer exemples régions<br>3. Quotas géographiques si légal |
| Âge | Taux recrutement par tranche (25-35, 35-45, 45-55) | Ratio max 1.25:1 | 1. Exclure âge direct<br>2. Vérifier proxies (ancienneté, formation)<br>3. Tests générationnels |
| **Disparité d'erreur** | | | |
| Faux positifs | % mauvais recrutements par groupe (embauché puis licencié <1 an) | Écart max 10% | 1. Analyser prédicteurs faibles par groupe<br>2. Modèles spécialisés si nécessaire<br>3. Revue humaine renforcée groupes à risque |
| Faux négatifs | % bons candidats écartés par groupe (via tests externes) | Écart max 10% | 1. Baisser seuil groupe défavorisé<br>2. Révision humaine échantillon refusés<br>3. Diversifier critères évaluation |
| **Calibration** | | | |
| Précision score | Corréler score IA avec performance réelle, par groupe | Écart R² max 5% | 1. Recalibrer modèle par groupe<br>2. Ajouter features spécifiques<br>3. Ensembles de modèles |
| **Audit variables** | | | |
| Variables proxy | Identifier corrélations: Code postal↔ethnie, École↔classe sociale, Prénom↔genre/origine | Aucune >0.7 | 1. Exclure variables proxy flagrantes<br>2. Anonymiser prénoms (initiales)<br>3. Utiliser uniquement région, pas adresse |

---

### Plan de test détaillé

**Phase 1: Avant déploiement (obligatoire)**

```
Semaine 1-2: Préparation données test
- Créer dataset test représentatif (30% données totales)
- Équilibrer par genre, région, âge
- Annoter avec ground truth (performance réelle connue)

Semaine 3-4: Tests d'équité
- Exécuter tous les tests ci-dessus
- Documenter résultats dans rapport
- Identifier disparités problématiques

Semaine 5-6: Corrections
- Implémenter mesures d'atténuation
- Re-tester jusqu'à conformité
- Validation DPO + AI Lead

Semaine 7: Validation Comité
- Présentation résultats tests
- Décision go/no-go déploiement
```

**Phase 2: Après déploiement (monitoring continu)**

```
Mois 1-3: Monitoring intensif
- Tests hebdomadaires (tous indicateurs)
- Alertes automatiques si seuils dépassés
- Revue bihebdomadaire Comité

Mois 4-12: Monitoring standard
- Tests mensuels
- Dashboard temps réel (top management)
- Revue trimestrielle Comité

Année 2+: Monitoring maintenance
- Tests trimestriels
- Audit externe annuel
- Revue annuelle complète
```

---

## GRILLE 4: DÉCISION FINALE DU COMITÉ

### Évaluation détaillée

| Critère | Score / 10 | Justification |
|---------|------------|---------------|
| **Alignement stratégique** | 8 | Excellent alignement: réduction coûts RH, amélioration qualité recrutement, optimisation opérationnelle. Objectifs clairs et mesurables. |
| **Faisabilité technique** | 7 | Techniquement faisable avec outils existants (ML classique). Données disponibles. Mais nécessite expertise data science (recrutement ou formation). |
| **ROI estimé** | 6 | ROI positif mais modeste: économies 2-3 ETP RH (15-20M FCFA/an), investissement initial 30M + 10M/an maintenance = break-even 2-3 ans. |
| **Conformité légale** | 3 | **ROUGE:** Nombreuses non-conformités RGPD et loi togolaise. DPO absent, consentements manquants, rétention non définie, transferts non sécurisés. |
| **Conformité éthique** | 4 | **ORANGE:** Risques équité élevés non adressés, transparence insuffisante, absence human-in-the-loop. Besoin révision majeure. |
| **Gestion des risques** | 5 | Risques identifiés mais mesures d'atténuation incomplètes. Plan de contingence absent. Assurance RC professionnelle non mentionnée. |
| **Acceptabilité sociale** | 4 | **ORANGE:** Employés non consultés, communication absente, risque forte résistance. CSE/délégués personnel pas impliqués. |

**Score total:** 37 / 70 = **53%**

---

### DÉCISION FINALE: ⚠️ APPROUVÉ SOUS CONDITIONS STRICTES

**Projet prometteur MAIS révision majeure nécessaire avant déploiement.**

---

### CONDITIONS IMPÉRATIVES (bloquantes):

**1. CONFORMITÉ LÉGALE (délai: 1 mois)**
- ✅ Nommer DPO immédiatement (obligation légale)
- ✅ Rédiger politique de rétention des données
- ✅ Créer formulaires consentement candidats
- ✅ Négocier DPA avec fournisseur cloud
- ✅ Déclarer traitement auprès CNPD Togo
- ✅ Implémenter procédures exercice droits (accès, rectification, effacement)

**2. SÉCURITÉ DONNÉES (délai: 1 mois)**
- ✅ Chiffrement AES-256 au repos (toutes DB)
- ✅ Contrôles accès granulaires (RBAC)
- ✅ 2FA obligatoire accès système IA
- ✅ Logs d'audit complets et inaltérables
- ✅ Tests de pénétration avant déploiement

**3. ÉQUITÉ ET TESTS (délai: 2 mois)**
- ✅ Audit complet biais sur données historiques
- ✅ Correction biais détectés (méthodes techniques appropriées)
- ✅ Tests d'équité validant conformité seuils
- ✅ Validation externe résultats (expert indépendant)

**4. GOUVERNANCE (délai: 1 mois)**
- ✅ Human-in-the-loop obligatoire: DRH valide toute décision critique (licenciement, promotion, sanction)
- ✅ Processus de recours formalisé et communiqué
- ✅ Comité d'éthique IA constitué (incluant représentants employés)
- ✅ Documentation complète système (explicabilité)

**5. COMMUNICATION ET CONSULTATION (délai: 1 mois)**
- ✅ Consultation CSE/délégués du personnel
- ✅ Communication transparente tous employés (réunions, Q&A)
- ✅ Notice d'information claire et accessible
- ✅ Formation managers RH utilisation éthique IA

---

### CONDITIONS RECOMMANDÉES (fortement conseillées):

**6. DÉPLOIEMENT PROGRESSIF (délai: 6 mois)**
- ⚡ Phase pilote: 1 département uniquement (3 mois)
- ⚡ Monitoring intensif et ajustements
- ⚡ Évaluation indépendante résultats pilote
- ⚡ Décision go/no-go extension après pilote

**7. MESURES ADDITIONNELLES**
- ⚡ Assurance RC professionnelle couvrant erreurs IA (50M FCFA min)
- ⚡ Plan de repli: processus RH classique si IA défaillante
- ⚡ Budget formation continue: 200h/an équipe IA
- ⚡ Audit externe annuel (cabinet spécialisé)

---

### PROCHAINES ÉTAPES CONCRÈTES

**MOIS 1: Mise en conformité légale et sécurité**

Semaine 1-2:
- Recruiter/nommer DPO (profil: juriste + tech)
- Lancer audit sécurité infrastructure
- Rédiger politique rétention données
- Initier négociation DPA fournisseur

Semaine 3-4:
- Implémenter chiffrement + contrôles accès
- Créer formulaires consentement
- Déclarer traitement CNPD Togo
- Finaliser DPA

Responsable: Directeur Juridique + DSI
Budget: 10M FCFA (consultant DPO + infra sécu)

---

**MOIS 2: Tests équité et gouvernance**

Semaine 1-2:
- Constituer Comité Éthique IA (7 membres)
- Lancer audit biais données historiques
- Documenter architecture IA (explicabilité)
- Rédiger processus recours employés

Semaine 3-4:
- Corriger biais identifiés
- Tests d'équité complets
- Validation externe (expert indépendant)
- Préparer communication employés

Responsable: DRH + AI Lead + DPO
Budget: 15M FCFA (expert externe + formation)

---

**MOIS 3: Communication et consultation**

Semaine 1-2:
- Consultation CSE/délégués (2 sessions)
- Réunions d'information tous employés
- Publication notice IA (intranet + affichage)
- Hotline questions/préoccupations

Semaine 3-4:
- Formation managers RH (16h)
- Ajustements selon feedbacks
- Validation finale Comité Éthique
- Préparation lancement pilote

Responsable: DRH + Communication
Budget: 5M FCFA (formation + com)

---

**MOIS 4-6: Phase pilote**

- Département sélectionné: Lomé Centre (30 employés)
- Périmètre: Recrutement + optimisation planning uniquement
- Monitoring: Hebdomadaire (KPIs éthiques + business)
- Ajustements: Bi-hebdomadaires si nécessaire

Responsable: Chef projet IA + DRH
KPIs pilote:
- Satisfaction employés: >70%
- Équité H/F: ratio <1.15
- Qualité recrutements: >85%
- Incidents éthiques: 0

---

**MOIS 7: Évaluation et décision extension**

- Audit indépendant résultats pilote
- Présentation Comité Éthique + Direction
- Décision: Extension / Ajustements / Arrêt
- Si extension: déploiement progressif autres départements

---

### BUDGET TOTAL RÉVISÉ

**Investissement initial:** 60M FCFA (vs 30M initialement)
- Développement IA: 20M
- Conformité légale: 10M
- Sécurité infrastructure: 15M
- Tests et audits: 10M
- Formation et communication: 5M

**Coûts récurrents:** 15M FCFA/an
- Maintenance IA: 5M
- Audits annuels: 5M
- Formation continue: 3M
- Assurance RC: 2M

**ROI révisé:** Break-even 4 ans (vs 2-3 ans initial)

---

### RISQUES RÉSIDUELS ET MITIGATION

**Risque #1: Résistance employés**
- Probabilité: Moyenne (40%)
- Impact: Élevé (échec projet)
- Mitigation: Communication intensive, co-construction, opt-out possible

**Risque #2: Biais persistants**
- Probabilité: Moyenne (30%)
- Impact: Critique (sanctions, réputation)
- Mitigation: Monitoring continu, audits externes, comité vigilance

**Risque #3: Violation données**
- Probabilité: Faible (10%)
- Impact: Critique (amendes, confiance)
- Mitigation: Sécurité renforcée, assurance, plan incident

**Risque #4: ROI non atteint**
- Probabilité: Moyenne (35%)
- Impact: Moyen (coûts non récupérés)
- Mitigation: Pilote rigoureux, KPIs clairs, clause sortie fournisseur

---

### INDICATEURS DE SUCCÈS (12 mois post-déploiement)

**KPIs Business:**
- ✅ Réduction temps recrutement: -30%
- ✅ Qualité recrutements (rétention 1 an): >90%
- ✅ Optimisation plannings (heures sup): -20%
- ✅ Satisfaction managers RH: >80%

**KPIs Éthiques:**
- ✅ Ratio équité genre: 1.0-1.1
- ✅ Ratio équité région: 1.0-1.15
- ✅ Transparence (compréhension employés): >75%
- ✅ Incidents éthiques: 0
- ✅ Conformité audits: 100%

**KPIs Sociaux:**
- ✅ Satisfaction employés: >70%
- ✅ Taux adoption IA: >80%
- ✅ Nombre réclamations: <5/an
- ✅ Temps résolution réclamation: <7 jours

---

### RESPONSABLE GLOBAL ET GOUVERNANCE

**Chef de projet:** DRH (Marie Koffi)
**Sponsor exécutif:** Directeur Général
**Comité de pilotage (mensuel):**
- DG, DRH, DSI, DPO, AI Lead, Directeur Juridique, Représentant CSE

**Comité d'éthique IA (trimestriel):**
- DG (président)
- DRH, DSI, Juridique, DPO (permanents)
- 2 représentants employés (élus)
- Expert externe (advisor)

**Reporting:**
- Comité pilotage: Rapport mensuel (avancement, KPIs, risques)
- Comité éthique: Rapport trimestriel (conformité, incidents, audits)
- Direction Générale: Rapport annuel public (version résumée)

---

### DATE REVUE ET JALONS

**Revue M1:** 15 décembre 2025
- Conformité légale complète
- Sécurité renforcée
- DPO opérationnel

**Revue M2:** 15 janvier 2026
- Tests équité validés
- Gouvernance en place
- Validation externe obtenue

**Revue M3:** 15 février 2026
- Communication employés complète
- Formation managers terminée
- Go/no-go pilote

**Revue M6:** 15 mai 2026
- Évaluation pilote
- Décision extension
- Ajustements si nécessaire

**Revue M12:** 15 novembre 2026
- Bilan annuel complet
- Audit externe
- Décision pérennisation

---

## LEÇONS CLÉS DE CET EXERCICE

### Ce qu'il faut retenir

**1. L'éthique n'est pas optionnelle**
- Projet techniquement faisable mais éthiquement problématique = NON GO
- Conformité légale = prérequis absolu
- Budget éthique/conformité = 50-100% du budget technique

**2. Évaluation multicritère essentielle**
- ROI seul insuffisant
- 7 critères minimum (stratégique, technique, ROI, légal, éthique, risques, social)
- Veto possible sur un seul critère critique

**3. Gouvernance robuste nécessaire**
- Comité d'éthique avec pouvoir décisionnel
- DPO indépendant et compétent
- Human-in-the-loop sur décisions critiques
- Processus de recours formalisé

**4. Transparence et communication clés**
- Employés parties prenantes essentielles
- Communication ≠ information descendante
- Co-construction > imposition
- Opt-out doit rester possible

**5. Déploiement progressif prudent**
- Pilote obligatoire (pas big bang)
- Monitoring intensif phase initiale
- Validation externe indépendante
- Clause de sortie si échec

**6. Équité nécessite vigilance continue**
- Tests pré-déploiement insuffisants
- Monitoring permanent requis
- Biais peuvent apparaître dans le temps
- Audits externes réguliers

---

## COMPARAISON: BON VS MAUVAIS PROJET IA

### ❌ MAUVAIS PROJET IA RH

**Caractéristiques:**
- Décision 100% automatisée
- Aucun test d'équité
- Données sensibles non protégées
- DPO absent, conformité ignorée
- Employés non consultés
- Déploiement big bang
- Aucun recours possible
- Budget uniquement technique

**Résultat prévisible:**
- Discrimination systémique
- Violation RGPD → amendes
- Révolte employés/syndicats
- Scandale médiatique
- Projet abandonné
- Réputation entreprise dégradée
- Coûts >>> bénéfices

---

### ✅ BON PROJET IA RH

**Caractéristiques:**
- Human-in-the-loop systématique
- Tests d'équité rigoureux
- Sécurité données renforcée
- DPO compétent, conformité totale
- Employés co-constructeurs
- Déploiement progressif (pilote)
- Recours humain garanti
- Budget éthique = budget tech

**Résultat prévisible:**
- Décisions équitables et transparentes
- Conformité légale totale
- Adoption employés élevée
- Différenciation positive (employeur)
- ROI positif durable
- Amélioration continue
- Référence industrie

---

## CONCLUSION

**Le projet DistribTogo est sauvable, MAIS nécessite:**
1. Investissement éthique/conformité significatif (+100%)
2. Délai supplémentaire 6 mois (pilote + ajustements)
3. Gouvernance robuste et indépendante
4. Engagement direction sur long terme

**Si ces conditions acceptées:**
→ Projet peut devenir référence IA RH responsable au Togo

**Si conditions refusées (coût, délai):**
→ Mieux vaut abandonner le projet maintenant
→ Risques juridiques/réputationnels trop élevés

**L'IA éthique coûte plus cher et prend plus de temps.**
**Mais c'est le seul moyen durable et responsable.**
