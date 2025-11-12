# LICENCES ET AUTORISATIONS - PROJET MOBILE MONEY TOGO

## TABLE DES MATIÈRES
1. [Vue d'Ensemble Réglementaire](#1-vue-densemble-réglementaire)
2. [Licence BCEAO - Établissement de Monnaie Électronique (EME)](#2-licence-bceao---établissement-de-monnaie-électronique-eme)
3. [Autorisation ARCEP Togo](#3-autorisation-arcep-togo)
4. [Licence Bancaire Partenaire](#4-licence-bancaire-partenaire)
5. [Conformité AML/CFT](#5-conformité-amlcft)
6. [Protection des Données (RGPD/CNDP)](#6-protection-des-données-rgpdcndp)
7. [Autres Autorisations et Certifications](#7-autres-autorisations-et-certifications)
8. [Calendrier et Processus d'Obtention](#8-calendrier-et-processus-dobtention)
9. [Coûts Détaillés](#9-coûts-détaillés)
10. [Maintien de la Conformité](#10-maintien-de-la-conformité)

---

## 1. VUE D'ENSEMBLE RÉGLEMENTAIRE

### 1.1 Contexte Légal et Réglementaire

**Juridiction**: République Togolaise, membre de l'UEMOA (Union Économique et Monétaire Ouest-Africaine)

**Cadre Réglementaire Multi-Niveau**:

1. **Niveau Régional (UEMOA/BCEAO)**
   - Instruction N° 001-01-2024 de la BCEAO (23 janvier 2024)
   - Règlement relatif aux systèmes de paiement dans l'UMOA
   - Directive BCEAO sur la monnaie électronique
   - Réglementation anti-blanchiment CENTIF-UEMOA

2. **Niveau National (Togo)**
   - Loi N° 2012-018 sur les communications électroniques
   - Code monétaire et financier togolais
   - Loi sur la protection des données personnelles (2019)
   - Réglementation ARCEP (Autorité de Régulation des Communications Électroniques et des Postes)

3. **Niveau International**
   - Recommandations GAFI (Groupe d'Action Financière)
   - Normes ISO 27001 (sécurité information)
   - Standards PCI-DSS (sécurité paiements)

### 1.2 Autorités de Régulation

| Autorité | Rôle | Contact |
|----------|------|---------|
| **BCEAO** (Banque Centrale des États de l'Afrique de l'Ouest) | Licence EME, supervision monétaire, interopérabilité | Avenue Abdoulaye Fadiga, Dakar, Sénégal<br>Tel: +221 33 839 05 00<br>www.bceao.int |
| **ARCEP Togo** | Autorisation télécoms/USSD, protection consommateurs | Rue du Lac Togo, Lomé<br>Tel: +228 22 23 88 88<br>www.arcep.tg |
| **Direction Générale du Trésor et de la Comptabilité Publique** | Approbation comptes séquestres | Ministère de l'Économie et des Finances, Lomé |
| **CNDP** (Commission Nationale de Protection des Données Personnelles) | Protection données, RGPD local | Lomé, Togo<br>www.cndp.tg |
| **CENTIF Togo** (Cellule Nationale de Traitement des Informations Financières) | Lutte anti-blanchiment/financement terrorisme | Lomé, Togo |
| **Ministère de la Poste et de l'Économie Numérique** | Politique sectorielle, signature électronique | Lomé, Togo |

### 1.3 Échéance Réglementaire Critique

**Deadline BCEAO**: 31 août 2025
- À partir du 1er septembre 2025, seuls les opérateurs titulaires d'une licence BCEAO peuvent proposer des services de paiement dans l'UEMOA
- Cette échéance a été repoussée 3 fois (initialement prévue en mai 2025)
- **Notre projet doit impérativement obtenir la licence avant cette date**

---

## 2. LICENCE BCEAO - ÉTABLISSEMENT DE MONNAIE ÉLECTRONIQUE (EME)

### 2.1 Qu'est-ce qu'une Licence EME?

**Définition**:
Un Établissement de Monnaie Électronique (EME) est une institution autorisée par la BCEAO à:
- Émettre de la monnaie électronique
- Proposer des services de paiement
- Opérer dans un ou plusieurs pays de l'UEMOA

**Types de Licences BCEAO**:

| Type | Capital Min | Périmètre | Services Autorisés |
|------|-------------|-----------|-------------------|
| **EME Complet** | 100M FCFA (~165K USD) | Portefeuille électronique, transferts, paiements marchands | ✓ Émission monnaie électronique<br>✓ Transferts P2P<br>✓ Paiements marchands<br>✓ Paiements factures<br>✓ Services à valeur ajoutée |
| **Établissement de Paiement (EP)** | 10-100M FCFA selon services | Services de paiement sans émission monnaie électronique | ✓ Agrégation de comptes<br>✓ Initiation de paiements<br>✓ Acquiring marchand |
| **Intermédiaire Technique** | 10M FCFA | Fourniture infrastructure technique | ✓ Plateforme technique pour EME/EP |

**Pour notre projet**: Nous demandons une **Licence EME Complète** pour opérer un service mobile money intégral.

### 2.2 Exigences de Capital

**Capital Social Minimum**: 100 000 000 FCFA (~165 000 USD)

**Détails**:
- Doit être entièrement libéré dès le dépôt de la demande
- Doit être détenu dans une banque agréée de l'UEMOA
- Attestation bancaire requise (preuve de fonds)
- Interdiction de réduction pendant les 5 premières années d'exploitation

**Ratio de Solvabilité**:
- Fonds propres ≥ 3% de la monnaie électronique en circulation
- Exemple: Si 3 milliards FCFA de float utilisateurs, fonds propres requis: 90M FCFA minimum

**Garanties Financières**:
- Cantonnement d'actifs équivalent à 100% de la monnaie électronique émise
- Comptes séquestres auprès d'une banque agréée
- Séparation stricte des fonds clients des fonds propres de l'entreprise

### 2.3 Conditions d'Éligibilité

**Conditions Générales**:
1. **Siège Social**: Obligatoirement situé dans un pays de l'UEMOA
   - Pour nous: Lomé, Togo

2. **Forme Juridique**: Société Anonyme (SA) ou SARL
   - Capital minimum: 100M FCFA
   - Inscription au Registre du Commerce et du Crédit Mobilier (RCCM)

3. **Dirigeants et Administrateurs**:
   - Honorabilité: casier judiciaire vierge
   - Compétence: expérience professionnelle pertinente (finance, télécoms, tech)
   - Disponibilité: résidence dans le pays d'établissement
   - Indépendance: pas de conflits d'intérêts

4. **Actionnaires**:
   - Identification complète de tous actionnaires >5%
   - Si personne morale: structure de propriété jusqu'aux bénéficiaires effectifs
   - Honorabilité de tous actionnaires significatifs

5. **Moyens Techniques et Organisationnels**:
   - Infrastructure technique robuste et sécurisée
   - Locaux appropriés
   - Personnel qualifié et en nombre suffisant
   - Procédures opérationnelles formalisées

6. **Conformité Réglementaire**:
   - Dispositif anti-blanchiment/financement terrorisme (AML/CFT)
   - Sécurité des systèmes d'information (ISO 27001)
   - Protection des données personnelles (RGPD)
   - Plan de continuité d'activité (PCA/PRA)

### 2.4 Dossier de Demande

**Composition du Dossier** (liste exhaustive):

**I. Informations Générales**
1. Lettre de demande signée par le représentant légal
2. Statuts de la société (certifiés conformes)
3. Extrait RCCM (moins de 3 mois)
4. Attestation d'immatriculation fiscale
5. PV d'assemblée générale autorisant la demande de licence

**II. Informations sur le Capital et Actionnaires**
6. Tableau de répartition du capital (détail jusqu'aux bénéficiaires effectifs)
7. Attestation bancaire de libération intégrale du capital
8. Pour chaque actionnaire >5%:
   - Pièce d'identité (passeport/CNI)
   - CV détaillé
   - Attestation de casier judiciaire (<3 mois)
   - Déclaration de patrimoine
   - Si personne morale: statuts, RCCM, organigramme propriété

**III. Informations sur les Dirigeants**
9. Pour chaque dirigeant (DG, DGA, administrateurs):
   - CV détaillé (formation, expérience professionnelle)
   - Copies diplômes certifiées
   - Pièce d'identité
   - Casier judiciaire (<3 mois)
   - Lettre d'engagement et de disponibilité
   - Déclaration d'absence de conflits d'intérêts

**IV. Programme d'Activité**
10. Business plan détaillé (3-5 ans) incluant:
    - Analyse de marché
    - Stratégie commerciale
    - Projections financières (compte de résultat, bilan, flux de trésorerie)
    - Plan d'investissement
    - Analyse des risques et mitigation

11. Description des services proposés:
    - Services de base (P2P, cash-in/out, paiements)
    - Services à valeur ajoutée (épargne, crédit, assurance, etc.)
    - Tarification complète

12. Stratégie de distribution:
    - Modèle de réseau d'agents
    - Critères de sélection agents
    - Formation et supervision agents
    - Gestion de la liquidité

**V. Organisation et Moyens**
13. Organigramme détaillé:
    - Fonctions et responsabilités
    - Effectifs prévisionnels (3 ans)
    - Profils de poste clés

14. Moyens matériels:
    - Descriptif des locaux (plans, photos)
    - Bail ou titre de propriété
    - Équipements et infrastructure

15. Moyens informatiques:
    - Architecture technique détaillée
    - Schéma d'infrastructure
    - Fournisseurs et partenaires technologiques
    - Contrats d'hébergement (cloud ou data center)
    - Capacité et scalabilité

**VI. Sécurité et Conformité**
16. Politique de sécurité des systèmes d'information:
    - Normes appliquées (ISO 27001, PCI-DSS)
    - Architecture de sécurité (firewalls, HSM, encryption)
    - Gestion des accès et authentification
    - Monitoring et détection d'intrusions
    - Audits de sécurité planifiés

17. Plan de continuité d'activité (PCA) et Plan de reprise d'activité (PRA):
    - Identification des risques majeurs
    - Mesures de prévention
    - Procédures de sauvegarde et restauration
    - Site de secours (disaster recovery)
    - Tests et maintenance du plan

18. Manuel de procédures anti-blanchiment et financement du terrorisme (AML/CFT):
    - Politique KYC (Know Your Customer)
    - Procédures d'identification et vérification clients
    - Due diligence renforcée (PEP, clients à risque)
    - Monitoring des transactions suspectes
    - Déclarations d'opérations suspectes (DOS)
    - Formation du personnel
    - Nomination d'un Compliance Officer

19. Politique de protection des données personnelles:
    - Conformité RGPD/loi togolaise
    - Registre des traitements
    - Mesures de sécurité des données
    - Gestion des droits des personnes
    - Notification des violations
    - Nomination d'un DPO (Data Protection Officer)

**VII. Aspects Financiers**
20. États financiers prévisionnels (3-5 ans):
    - Compte de résultat prévisionnel
    - Bilan prévisionnel
    - Tableau de flux de trésorerie
    - Hypothèses détaillées

21. Politique de tarification:
    - Grilles tarifaires complètes (clients, agents, marchands)
    - Justification de la structure de prix
    - Comparaison avec le marché

22. Gestion des fonds clients:
    - Schéma de cantonnement des fonds
    - Banque(s) partenaire(s) pour comptes séquestres
    - Procédures de réconciliation
    - Gestion des flux financiers

**VIII. Partenariats**
23. Conventions avec partenaires stratégiques:
    - Banque(s) pour comptes séquestres
    - Opérateurs télécoms (accès USSD)
    - Fournisseurs technologiques
    - Assureurs
    - Autres partenaires clés

**IX. Interopérabilité**
24. Engagement d'interopérabilité:
    - Adhésion au système régional GIMAC-WARI
    - Connexion au switch national (si existant)
    - Procédures d'interopérabilité avec autres EME

**X. Autres Documents**
25. Attestation d'assurance responsabilité civile professionnelle
26. Attestation d'assurance couvrant les risques opérationnels
27. Politique de gestion des réclamations clients
28. Modèles de contrats (contrat client, contrat agent, contrat marchand)
29. Supports de communication (brochures, tarifs, CGU)

### 2.5 Processus d'Instruction

**Étapes du Processus**:

**Étape 1: Dépôt du Dossier**
- Dépôt auprès de la Direction des Systèmes de Paiement de la BCEAO (Dakar, Sénégal)
- Possibilité de pré-dépôt via la Direction Nationale de la BCEAO au Togo (Lomé)
- 3 exemplaires papier + 1 version électronique (CD/USB)
- Accusé de réception délivré

**Étape 2: Examen de Recevabilité (2-4 semaines)**
- Vérification de la complétude du dossier
- Si incomplet: notification avec liste des pièces manquantes
- Dossier complété sous 30 jours, sinon rejet

**Étape 3: Instruction du Dossier (3-6 mois)**
- Analyse détaillée par la BCEAO:
  - Analyse financière (viabilité du projet)
  - Analyse juridique (conformité statuts, contrats)
  - Analyse technique (robustesse infrastructure)
  - Analyse des risques (sécurité, AML/CFT)
  - Évaluation des dirigeants et actionnaires
- Possibles demandes d'informations complémentaires
- Auditions des dirigeants à Dakar
- Visite sur site (Lomé) possible

**Étape 4: Rapport d'Instruction**
- Rédaction rapport par l'équipe d'instruction
- Avis de la Direction des Systèmes de Paiement
- Consultation des autres départements BCEAO (Supervision Bancaire, Juridique)

**Étape 5: Décision du Gouverneur (1-2 mois)**
- Présentation au Comité de Direction de la BCEAO
- Décision finale du Gouverneur de la BCEAO
- Trois issues possibles:
  - **Agrément accordé** (avec éventuelles conditions suspensives)
  - **Agrément refusé** (avec motivations)
  - **Dossier mis en attente** (demande d'informations supplémentaires)

**Étape 6: Notification et Publication**
- Notification écrite de la décision au demandeur
- Si accord: publication au Journal Officiel de l'UEMOA
- Envoi aux Directions Nationales de tous les pays membres

**Durée Totale**: **6 à 12 mois** (en moyenne 9 mois)

### 2.6 Conditions Suspensives et Mise en Conformité

Après accord de principe, la BCEAO peut imposer des **conditions suspensives** à lever avant le démarrage effectif:

**Conditions Suspensives Fréquentes**:
1. Certification ISO 27001 obtenue
2. Audit de sécurité indépendant réalisé
3. Tests d'interopérabilité réussis
4. Formation du personnel complétée et attestée
5. Réseau d'agents minimum déployé (ex: 100 agents)
6. Procédures opérationnelles finalisées et approuvées
7. Assurances souscrites et attestations fournies

**Délai de Levée**: Généralement 3 à 6 mois après accord de principe

**Inspection Finale**:
- Visite de la BCEAO pour vérifier la levée des conditions
- Validation technique du système en condition réelle (sandbox)
- Entretiens avec le personnel clé
- Si satisfaisant: **Autorisation de Démarrage Effectif**

### 2.7 Coûts de la Licence BCEAO

| Poste | Montant (FCFA) | Montant (USD) | Notes |
|-------|----------------|---------------|-------|
| **Frais de dossier** | 5 000 000 | ~8 300 | Non remboursable, même en cas de refus |
| **Frais d'instruction** | 10 000 000 | ~16 600 | Couvre analyse du dossier |
| **Frais d'agrément** | 15 000 000 | ~24 900 | À payer si agrément accordé |
| **Contribution initiale au Fonds de Garantie** | 20 000 000 | ~33 200 | Garantie solidarité système |
| **Total Licence BCEAO** | **50 000 000** | **~83 000** | |
| | | | |
| **Cotisation annuelle** (années suivantes) | 5 000 000 | ~8 300 | Par an, à partir An 2 |

**Note**: Ces montants sont des estimations basées sur les pratiques actuelles. La BCEAO peut ajuster les frais. Prévoir 10-15% de marge.

### 2.8 Obligations Post-Licence

Une fois la licence obtenue, l'EME doit respecter des obligations continues:

**Obligations de Reporting**:
- **Mensuelles**:
  - États statistiques d'activité (volume transactions, nombre utilisateurs, float)
  - État de la monnaie électronique en circulation
  - État des incidents techniques majeurs

- **Trimestrielles**:
  - Situations comptables
  - Ratios prudentiels (solvabilité, liquidité)
  - Rapports de conformité AML/CFT

- **Annuelles**:
  - États financiers audités (par auditeur agréé BCEAO)
  - Rapport d'activité
  - Rapport du commissaire aux comptes
  - Rapport de l'audit interne
  - Mise à jour du dossier d'agrément (changements actionnariat, dirigeants, etc.)

**Obligations de Conformité Continue**:
- Maintien du capital minimum et ratios prudentiels
- Respect des normes de sécurité (audits réguliers)
- Formation continue du personnel
- Tests PCA/PRA annuels
- Interopérabilité avec les autres EME
- Protection des consommateurs (transparence tarifaire, traitement réclamations)

**Supervision et Contrôle**:
- Contrôles sur pièces par la BCEAO
- Missions d'inspection sur site (préavis ou surprises)
- Audits techniques périodiques
- Sanctions possibles en cas de non-conformité:
  - Avertissement
  - Injonction de mise en conformité
  - Sanctions pécuniaires (amendes jusqu'à 100M FCFA)
  - Suspension temporaire de tout ou partie des activités
  - Retrait de l'agrément (cas extrêmes)

---

## 3. AUTORISATION ARCEP TOGO

### 3.1 Rôle de l'ARCEP

**ARCEP** (Autorité de Régulation des Communications Électroniques et des Postes) est le régulateur des télécommunications au Togo.

**Compétences de l'ARCEP pour Mobile Money**:
1. **Accès au réseau USSD**: Autorisation d'utiliser les codes courts USSD (*XXX#)
2. **Interconnexion avec opérateurs télécoms**: Convention tripartite (EME-Opérateur-ARCEP)
3. **Protection des consommateurs**: Approbation des tarifs, traitement des plaintes
4. **Qualité de service**: Monitoring de la disponibilité et performance
5. **Numéros de téléphone**: Attribution de numéros courts (ex: 8888 pour call center)

### 3.2 Autorisations Requises

**1. Autorisation d'Exploitation de Service Mobile Money**

**Prérequis**: Obtention de la licence BCEAO (l'ARCEP vérifie)

**Dossier de Demande**:
- Copie de la licence BCEAO
- Statuts de la société
- Description technique du service
- Architecture d'interconnexion avec les opérateurs télécoms
- Grille tarifaire proposée
- Procédures de traitement des réclamations clients
- Engagement de transparence et protection consommateurs

**Délai d'Instruction**: 2-3 mois

**Coût**: ~2 000 000 FCFA (~3 300 USD)

**2. Attribution de Code Court USSD**

Les codes courts USSD sont des ressources rares et stratégiques.

**Codes Actuels au Togo**:
- *155# : Flooz (Moov Africa)
- *144# : T-Money (Togocel)
- *666# : Gozem Money (prévu)

**Demande**:
- Préférences de codes (liste de 3-5 codes souhaités)
- Justification du besoin
- Description de l'utilisation (menu USSD complet)

**Coût**:
- Frais d'attribution: 1 000 000 FCFA (~1 650 USD)
- Redevance annuelle: 500 000 FCFA (~830 USD)

**Exemple de Code Souhaité**: *777# (simple, facile à retenir)

**3. Attribution de Numéro Court pour Call Center**

**Demande**: Numéro à 4 chiffres (ex: 8888)

**Coût**:
- Attribution: 500 000 FCFA (~830 USD)
- Redevance annuelle: 200 000 FCFA (~330 USD)

### 3.3 Conventions d'Interconnexion avec Opérateurs Télécoms

**Opérateurs au Togo**:
1. **Togocel** (Yas) - opérateur historique
2. **Moov Africa Togo** (Atlantique Telecom Togo)

**Objet des Conventions**:
- Accès au réseau USSD pour nos services
- Session USSD initiée par *XXX# redirigée vers notre plateforme
- Réponses de notre serveur affichées sur le mobile de l'utilisateur

**Négociation**:
- Bilatérale avec chaque opérateur
- Sous supervision de l'ARCEP (en cas de désaccord)

**Coûts d'Interconnexion** (estimation):
- **Frais de connexion initiale**: 5 000 000 FCFA par opérateur (~8 300 USD)
- **Tarifs de session USSD**:
  - Par session: 5-15 FCFA
  - Ou forfait mensuel: 2 000 000 - 5 000 000 FCFA (~3 300 - 8 300 USD)
- **Revenus partagés** (potentiel):
  - Si l'opérateur accepte un partage de revenus (rare): 5-10% des revenus générés via leur réseau

**Convention Type** inclut:
- Durée: 3-5 ans renouvelable
- Garantie de service (SLA): disponibilité >99%
- Responsabilités (opérateur assure connectivité, EME assure contenu)
- Tarification
- Clause de résiliation
- Résolution des litiges

**Délai de Négociation et Signature**: 2-4 mois

**Total Coût Interconnexion (2 opérateurs)**:
- Initial: ~10 000 000 FCFA (~16 600 USD)
- Annuel: ~24 000 000 - 60 000 000 FCFA (~40 000 - 100 000 USD) selon volume

### 3.4 Obligations ARCEP Post-Autorisation

**Reporting**:
- Rapport trimestriel d'activité (nombre d'utilisateurs, transactions, réclamations)
- Tout incident technique majeur (>2h d'interruption) doit être notifié sous 24h

**Qualité de Service**:
- Disponibilité minimum: 99% (mensuel)
- Temps de réponse USSD: <5 secondes (90e percentile)
- Résolution réclamations: <15 jours ouvrables

**Protection Consommateurs**:
- Transparence totale des tarifs (affichés sur site, app, USSD)
- Notification par SMS de chaque transaction avec montant et frais séparés
- Procédure de réclamation gratuite et accessible
- Rapport annuel des réclamations soumis à l'ARCEP

**Sanctions Possibles**:
- Avertissement
- Amendes: jusqu'à 50 000 000 FCFA (~83 000 USD)
- Suspension du service (temporaire)
- Retrait de l'autorisation (cas extrême)

---

## 4. LICENCE BANCAIRE PARTENAIRE

### 4.1 Obligation de Compte Séquestre

**Principe Fondamental**:
Un EME **ne peut pas détenir directement les fonds des clients**. Ces fonds doivent être:
- **Cantonnés** (ségrégués des fonds propres de l'EME)
- **Déposés** dans un ou plusieurs comptes séquestres auprès d'une **banque agréée** par la BCEAO

**Objectif**: Protéger les utilisateurs en cas de faillite de l'EME (les fonds clients ne font pas partie de l'actif saisissable).

### 4.2 Sélection de la Banque Partenaire

**Critères de Sélection**:
1. **Agrément BCEAO**: Banque commerciale agréée dans l'UEMOA
2. **Solidité Financière**: Notation, ratios prudentiels solides
3. **Réseau**: Présence nationale (facilite gestion liquidité agents)
4. **Capacité Technique**: APIs, connexion temps réel, reporting automatisé
5. **Expérience Mobile Money**: Idéalement déjà partenaire d'autres EME
6. **Conditions Commerciales**: Frais de tenue de compte, rémunération des dépôts

**Banques Potentielles au Togo**:
1. **Ecobank Togo** - Groupe pan-africain, solide
2. **Orabank Togo** (ex-BSIC) - Expérience mobile money
3. **BTD** (Banque Togolaise pour le Commerce et l'Industrie) - Banque locale de référence
4. **UBA Togo** (United Bank for Africa) - Groupe nigérian solide
5. **Bank of Africa Togo** - Groupe marocain, bonne réputation

**Recommandation**: **Ecobank Togo** ou **Orabank Togo** (expérience mobile money prouvée)

### 4.3 Convention de Compte Séquestre

**Éléments de la Convention**:

1. **Ouverture de Comptes Séquestres**:
   - 1 compte principal (agrégation des fonds)
   - Éventuellement comptes secondaires par région (gestion liquidité)

2. **Cantonnement des Fonds**:
   - 100% de la monnaie électronique en circulation doit être couverte
   - Réconciliation quotidienne automatique
   - Interdiction pour l'EME de retirer des fonds au-delà du nécessaire opérationnel

3. **Mouvements Autorisés**:
   - Crédits: Dépôts agents, recharges float, revenus de l'EME
   - Débits: Retraits agents, règlements marchands, paiements factures
   - Tous mouvements tracés et documentés

4. **Reporting**:
   - Position quotidienne communiquée à l'EME et à la BCEAO
   - Alertes si couverture <100%

5. **Rémunération**:
   - Les fonds clients peuvent être rémunérés (intérêts)
   - Négociation du taux (ex: taux BCEAO - 1%)
   - Revenus d'intérêts: soit conservés par EME, soit partagés avec clients (épargne)

6. **Garantie**:
   - Clause de nantissement au profit des clients
   - En cas de faillite EME, banque bloque les comptes et BCEAO gère remboursement clients

7. **Durée et Résiliation**:
   - Durée indéterminée (tant que licence active)
   - Résiliation: préavis 6 mois, accord BCEAO requis

**Coûts**:
- Frais d'ouverture comptes: 500 000 FCFA (~830 USD)
- Frais de tenue de compte: 200 000 FCFA/mois (~330 USD/mois) = 2 400 000 FCFA/an
- Frais de transaction: 50-100 FCFA par virement
- Intérêts perçus (revenus): ~2-3% annuel sur solde moyen

**Exemple**:
- Solde moyen An 1: 500M FCFA
- Intérêts perçus (2,5%): 12,5M FCFA
- Frais totaux: 2,4M FCFA
- **Net**: +10,1M FCFA (revenu pour l'EME)

### 4.4 Intégration Technique Bancaire

**APIs Requises**:
1. **API de Compte**:
   - Consultation solde en temps réel
   - Historique des mouvements

2. **API de Paiement**:
   - Initiation de virements (paiements marchands, factures)
   - Notification de réception de fonds

3. **API de Réconciliation**:
   - Export automatisé des relevés
   - Fichiers de rapprochement

**Protocoles**:
- RESTful APIs (HTTPS, JSON)
- Authentification: OAuth 2.0 ou certificats mutuels
- Encryption: TLS 1.3
- Disponibilité: 99,9% garanti

**Tests et Validation**:
- Environnement sandbox fourni par la banque
- Tests de charge (volume, latence)
- Tests de sécurité
- Validation par la BCEAO avant mise en production

---

## 5. CONFORMITÉ AML/CFT

### 5.1 Cadre Réglementaire Anti-Blanchiment

**Textes Applicables**:
1. **Loi Uniforme UEMOA** relative à la lutte contre le blanchiment de capitaux et le financement du terrorisme
2. **Règlement BCEAO** relatif aux mesures de vigilance des institutions financières
3. **Recommandations du GAFI** (Groupe d'Action Financière)
4. **Réglementation CENTIF Togo**

**Autorité de Contrôle**: CENTIF (Cellule Nationale de Traitement des Informations Financières) Togo

### 5.2 Obligations KYC (Know Your Customer)

**Identification des Clients**:

**Personnes Physiques**:
- Nom et prénoms
- Date et lieu de naissance
- Nationalité
- Adresse résidentielle
- Profession
- **Document d'identité officiel**: CNI, passeport, permis de conduire
  - Numéro
  - Date d'émission et expiration
  - Copie ou photo du document
  - Vérification d'authenticité
- **Photo du client** (selfie)

**Vérification**:
- Rencontre physique obligatoire (face-to-face) lors de l'inscription chez un agent
- Ou vidéo-vérification avec IA (si autorisé par BCEAO - à confirmer)

**Personnes Morales** (Marchands, Entreprises):
- Raison sociale
- Forme juridique
- Numéro RCCM
- Secteur d'activité
- Adresse du siège social
- Identification des bénéficiaires effectifs (>25% du capital)
- Identification du représentant légal (même que personne physique)

**Limites selon Niveau KYC**:

| Niveau KYC | Vérification | Limites Mensuelles | Solde Max |
|------------|--------------|-------------------|-----------|
| **Niveau 0** (Non vérifié) | Aucune | Interdit par BCEAO | 0 |
| **Niveau 1** (Basique) | Nom + Numéro | 100 000 FCFA | 50 000 FCFA |
| **Niveau 2** (Standard) | ID + Photo + Adresse | 2 000 000 FCFA | 500 000 FCFA |
| **Niveau 3** (Complet) | ID + Photo + Justif domicile + Profession | 10 000 000 FCFA | 2 000 000 FCFA |

**Note**: La BCEAO impose au minimum le Niveau 2 pour tous les nouveaux comptes (depuis 2024).

### 5.3 Due Diligence Renforcée

**Clients à Haut Risque** (Enhanced Due Diligence):

1. **Personnes Politiquement Exposées (PEP)**:
   - Chefs d'État, ministres, hauts fonctionnaires
   - Dirigeants d'entreprises publiques
   - Membres de leur famille proche
   - **Mesures**: Approbation hiérarchique, monitoring renforcé, revue annuelle

2. **Montants Élevés**:
   - Transactions >5 000 000 FCFA
   - **Mesures**: Justification de l'origine des fonds

3. **Activité Inhabituelle**:
   - Augmentation soudaine du volume de transactions
   - Transactions fractionnées (structuring)
   - **Mesures**: Investigation, potentielle Déclaration d'Opération Suspecte (DOS)

4. **Pays à Haut Risque**:
   - Transferts depuis/vers pays sur liste GAFI
   - **Mesures**: Vérification approfondie, limitation ou refus

### 5.4 Monitoring et Détection

**Surveillance des Transactions**:

**Règles Automatiques** (exemples):
1. **Seuils**:
   - Transaction unique >1 000 000 FCFA → Alerte
   - Transactions cumulées/jour >3 000 000 FCFA → Alerte

2. **Patterns Suspects**:
   - Fractionnement (multiple transactions juste sous seuil de déclaration)
   - Activité nocturne inhabituelle (2h-6h du matin)
   - Transferts circulaires (A→B→C→A)
   - Comptes "passoires" (volume de réception = volume d'envoi, faible solde résiduel)

3. **Vélocité**:
   - Compte nouvellement ouvert avec activité intense immédiate
   - Changement brutal de comportement

**Outils**:
- Système de monitoring en temps réel intégré à la plateforme
- Machine Learning pour détection d'anomalies
- Listes noires (comptes frauduleux identifiés)

### 5.5 Déclarations d'Opérations Suspectes (DOS)

**Quand Déclarer**:
- Transaction ou série de transactions suspectes (soupçon de blanchiment/financement terrorisme)
- Même si transaction finalement non exécutée (tentative)

**Procédure**:
1. Analyste AML/CFT identifie une opération suspecte
2. Investigation interne (collecte infos supplémentaires)
3. Décision de déclaration par le Compliance Officer
4. Rédaction du rapport de DOS (formulaire standard)
5. Transmission au CENTIF sous 48h (délai réglementaire)
6. **Interdiction d'informer le client** (secret de la déclaration)

**Contenu du DOS**:
- Identification du client
- Description de l'opération suspecte
- Motifs du soupçon
- Documents justificatifs

**Délai**: 48h après identification

**Protection Légale**: L'EME et ses employés sont protégés contre toute poursuite pour avoir fait une DOS de bonne foi.

### 5.6 Formation et Organisation AML/CFT

**Compliance Officer**:
- Nomination obligatoire d'un responsable AML/CFT
- Reporting direct à la Direction Générale
- Indépendance opérationnelle
- Responsabilités:
  - Élaboration et mise à jour des procédures
  - Supervision du monitoring
  - Décisions sur les DOS
  - Formation du personnel
  - Reporting à la BCEAO et CENTIF

**Formation du Personnel**:
- Formation initiale obligatoire pour tous les employés
- Rafraîchissement annuel
- Formations spécifiques pour agents de première ligne (agents, call center)
- Tests de connaissance

**Documentation**:
- Manuel de procédures AML/CFT (mis à jour annuellement)
- Registre des alertes et investigations
- Registre des DOS
- Rapports d'activité AML/CFT (trimestriels et annuels)

### 5.7 Coûts AML/CFT

| Poste | Montant (FCFA) | Montant (USD) | Notes |
|-------|----------------|---------------|-------|
| **Compliance Officer** (salaire annuel) | 12 000 000 | ~20 000 | Profil senior |
| **Outils de monitoring** (licence annuelle) | 15 000 000 | ~25 000 | Logiciel spécialisé (ex: NICE Actimize, SAS AML) |
| **Consultants AML** (setup initial) | 8 000 000 | ~13 300 | Rédaction procédures, formation |
| **Formation personnel** | 3 000 000 | ~5 000 | An 1, puis 1M/an |
| **Audits AML** (annuels) | 5 000 000 | ~8 300 | Auditeur externe |
| **Total An 1** | **43 000 000** | **~71 600** | |
| **Total récurrent (An 2+)** | **33 000 000** | **~55 000** | /an |

---

## 6. PROTECTION DES DONNÉES (RGPD/CNDP)

### 6.1 Cadre Légal

**Loi Togolaise**: Loi n°2019-014 du 29 octobre 2019 relative à la protection des données à caractère personnel

**Autorité de Contrôle**: **CNDP** (Commission Nationale de Protection des Données Personnelles) Togo

**Alignement RGPD**: La loi togolaise est largement inspirée du RGPD européen.

### 6.2 Obligations Principales

**1. Licéité du Traitement**:
- Base légale: Consentement explicite de l'utilisateur
- Information claire sur l'utilisation des données (Politique de Confidentialité)

**2. Minimisation des Données**:
- Collecter uniquement les données nécessaires au service
- Durée de conservation limitée (ex: 5 ans après fermeture de compte)

**3. Sécurité des Données**:
- Mesures techniques: Encryption (at rest & in transit), contrôles d'accès, logs
- Mesures organisationnelles: Formation, procédures, audits

**4. Droits des Personnes**:
- **Droit d'accès**: L'utilisateur peut demander une copie de ses données
- **Droit de rectification**: Correction des données inexactes
- **Droit à l'effacement** ("droit à l'oubli"): Suppression des données sous conditions
- **Droit d'opposition**: Refus du traitement pour marketing direct
- **Droit à la portabilité**: Export des données dans un format lisible

**5. Notification des Violations**:
- En cas de fuite de données (data breach): notification à la CNDP sous **72h**
- Si risque élevé pour les personnes: notification directe aux utilisateurs concernés

**6. Analyse d'Impact (PIA - Privacy Impact Assessment)**:
- Obligatoire pour les traitements à haut risque (profilage, données sensibles)
- Document décrivant les risques et mesures d'atténuation

**7. Data Protection Officer (DPO)**:
- Nomination d'un DPO (Délégué à la Protection des Données)
- Rôle: Conseil interne, contrôle conformité, point de contact avec CNDP

### 6.3 Déclaration et Autorisation CNDP

**Procédure**:
1. **Notification Préalable**:
   - Avant tout traitement de données, notification à la CNDP
   - Formulaire de déclaration (en ligne sur www.cndp.tg)

2. **Dossier**:
   - Identification du responsable de traitement (l'EME)
   - Description des traitements (clients, agents, marchands, employés)
   - Catégories de données collectées
   - Finalités
   - Destinataires des données (sous-traitants, partenaires)
   - Transferts hors Togo (si applicable)
   - Durées de conservation
   - Mesures de sécurité
   - DPO (nom, contact)

3. **Examen**:
   - Délai: 2-3 mois
   - Possible demande d'informations complémentaires
   - Visite sur site possible

4. **Autorisation**:
   - Délivrée par la CNDP si conforme
   - Valable tant que traitement inchangé
   - Toute modification substantielle doit être notifiée

**Coût**:
- Frais de dossier: 500 000 FCFA (~830 USD)

### 6.4 Registre des Activités de Traitement

**Obligation**: Tenir un registre de toutes les activités de traitement de données

**Contenu** (pour chaque traitement):
- Nom et finalité du traitement
- Catégories de personnes concernées (clients, agents, etc.)
- Catégories de données (identité, coordonnées, transactions, etc.)
- Catégories de destinataires
- Transferts hors Togo
- Délais de conservation
- Mesures de sécurité

**Format**: Document interne, tenu à jour, disponible pour contrôle CNDP

### 6.5 Politique de Confidentialité

**Obligation**: Publier une Politique de Confidentialité accessible

**Contenu**:
- Identité du responsable de traitement
- Coordonnées du DPO
- Données collectées et finalités
- Base légale (consentement, obligation légale, etc.)
- Destinataires des données
- Durées de conservation
- Droits des personnes et modalités d'exercice
- Coordonnées CNDP (pour réclamation)

**Publication**:
- Site web de l'EME
- Application mobile (avant acceptation CGU)
- Disponible en agence

**Consentement**:
- Collecté lors de l'inscription
- Case à cocher (opt-in) - jamais pré-cochée
- Possibilité de retirer le consentement ultérieurement

### 6.6 Coûts Protection des Données

| Poste | Montant (FCFA) | Montant (USD) | Notes |
|-------|----------------|---------------|-------|
| **DPO** (salaire annuel ou prestation) | 8 000 000 | ~13 300 | Peut être mutualisé avec Compliance Officer si compétences |
| **Autorisation CNDP** | 500 000 | ~830 | One-time |
| **Consultant RGPD** (setup) | 5 000 000 | ~8 300 | Politique confidentialité, PIA, registre |
| **Outils de gestion des consentements** | 2 000 000 | ~3 300 | Consent management platform |
| **Formation personnel** | 1 500 000 | ~2 500 | An 1 |
| **Total An 1** | **17 000 000** | **~28 230** | |
| **Total récurrent (An 2+)** | **9 000 000** | **~15 000** | /an |

---

## 7. AUTRES AUTORISATIONS ET CERTIFICATIONS

### 7.1 Registre du Commerce et du Crédit Mobilier (RCCM)

**Obligation**: Immatriculation de la société

**Procédure**:
1. Dépôt statuts au greffe du Tribunal de Commerce (Lomé)
2. Publication au Journal Officiel
3. Obtention du numéro RCCM

**Délai**: 2-4 semaines

**Coût**: ~500 000 FCFA (~830 USD)

### 7.2 Immatriculation Fiscale

**Obligations**:
- Numéro d'Identification Fiscale Unique (IFU)
- Inscription à la TVA (si CA >60M FCFA, probable dès An 1)
- Inscription aux impôts sur les sociétés

**Autorité**: Office Togolais des Recettes (OTR)

**Coût**: Gratuit (mais prévoir comptable pour dossier: ~1M FCFA)

### 7.3 Inspection du Travail

**Obligation**: Déclaration de l'établissement et des employés

**Autorité**: Direction de l'Inspection du Travail

**Coût**: Frais administratifs ~200 000 FCFA

### 7.4 Certification ISO 27001 (Sécurité de l'Information)

**Obligation**: Fortement recommandée par la BCEAO (parfois condition suspensive)

**Processus**:
1. **Gap Analysis**: Audit initial pour identifier écarts vs. norme (2-3 mois)
2. **Mise en Conformité**: Implémentation des contrôles manquants (6-9 mois)
3. **Audit de Certification**: Par organisme accrédité (ex: SGS, Bureau Veritas) (1 mois)
4. **Obtention Certificat**: Valable 3 ans
5. **Audits de Surveillance**: Annuels (années 2 et 3)
6. **Renouvellement**: Audit complet tous les 3 ans

**Coûts**:
| Poste | Montant (FCFA) | Montant (USD) |
|-------|----------------|---------------|
| Consultant (Gap + Mise en conformité) | 25 000 000 | ~41 500 |
| Audit de certification | 8 000 000 | ~13 300 |
| Audits de surveillance (annuels) | 4 000 000 | ~6 600 |
| Renouvellement (tous les 3 ans) | 8 000 000 | ~13 300 |
| **Total An 1** | **33 000 000** | **~54 800** |

### 7.5 Conformité PCI-DSS (Payment Card Industry Data Security Standard)

**Pertinence**: Obligatoire si acceptation de cartes bancaires en plus du mobile money

**Pour notre projet**: Optionnel en phase initiale (pure mobile money), mais pertinent si extension future vers cartes.

**Niveau**: Selon volume de transactions cartes/an (Level 4 si <1M transactions)

**Coût** (si applicable):
- Self-Assessment Questionnaire (SAQ): Gratuit mais temps interne
- Scan de vulnérabilités trimestriel: ~2M FCFA/an
- Audit externe (si requis): 10-15M FCFA

### 7.6 Assurances

**Assurances Obligatoires**:

1. **Responsabilité Civile Professionnelle**:
   - Couvre les dommages causés aux tiers dans le cadre de l'activité
   - Montant: 100M - 500M FCFA de couverture
   - **Prime annuelle**: ~3 000 000 FCFA (~5 000 USD)

2. **Risques Informatiques et Cyber-Risques**:
   - Couvre les pertes liées aux cyberattaques, pannes systèmes, fuites de données
   - Montant: 500M - 1Mds FCFA de couverture
   - **Prime annuelle**: ~10 000 000 FCFA (~16 600 USD)

3. **Assurance des Locaux**:
   - Incendie, vol, dégâts des eaux
   - **Prime annuelle**: ~1 500 000 FCFA (~2 500 USD)

4. **Assurance Flotte Automobile** (si véhicules de société):
   - **Prime**: Selon nombre de véhicules, ~1M FCFA/véhicule/an

**Assurances Recommandées**:

5. **Assurance Homme-Clé** (Key Man Insurance):
   - Couvre le décès/incapacité des dirigeants clés (DG, CTO, CFO)
   - **Prime**: ~2 000 000 FCFA/an (~3 300 USD)

6. **Assurance Fraude Agents**:
   - Couvre les pertes liées à des malversations d'agents
   - **Prime**: ~3 000 000 FCFA/an (~5 000 USD)

**Total Assurances An 1**: ~20 000 000 FCFA (~33 200 USD)

### 7.7 Adhésion à l'Association Professionnelle

**APBEF-CI** (Association Professionnelle des Établissements Financiers - Côte d'Ivoire) ou équivalent régional:
- Lobbying et représentation sectorielle
- Formation et bonnes pratiques
- Networking

**Cotisation annuelle**: ~2 000 000 FCFA (~3 300 USD)

### 7.8 Signature Électronique

**Autorité**: ANSICET (Agence Nationale de la Sécurité des Systèmes d'Information et de Certification Électronique du Togo)

**Objet**: Si utilisation de signatures électroniques (contrats digitaux, etc.)

**Certification**:
- Demande de certificat de signature électronique
- Conformité à la loi sur les transactions électroniques

**Coût**: ~1 000 000 FCFA (~1 650 USD) one-time

---

## 8. CALENDRIER ET PROCESSUS D'OBTENTION

### 8.1 Timeline Globale (Pré-Lancement)

**Durée Totale Estimée**: **12-15 mois** (de la décision de lancer le projet au lancement commercial)

### 8.2 Diagramme de Gantt Réglementaire

```
MOIS         | 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
-------------|-----------------------------------------------
Constitution |███
Société      |
-------------|-----------------------------------------------
RCCM &       |   ███
Fiscal       |
-------------|-----------------------------------------------
Dossier      |      ██████████
BCEAO        |
-------------|-----------------------------------------------
Instruction  |                ███████████████
BCEAO        |
-------------|-----------------------------------------------
Décision     |                                  ███
BCEAO        |
-------------|-----------------------------------------------
Cond. Susp.  |                                     ████████
(ISO, etc.)  |
-------------|-----------------------------------------------
Autorisation |                                            ███
Finale       |
-------------|-----------------------------------------------
ARCEP        |                     ██████████
-------------|-----------------------------------------------
CNDP         |                     ██████
-------------|-----------------------------------------------
Conventions  |                           ████████
Télécoms     |
-------------|-----------------------------------------------
Banque       |               ███████
Partenaire   |
-------------|-----------------------------------------------
ISO 27001    |         ███████████████████████
-------------|-----------------------------------------------
Assurances   |                                 ████
-------------|-----------------------------------------------
Développement|      ████████████████████████████████████
Tech         |
-------------|-----------------------------------------------
LANCEMENT    |                                            🚀
```

### 8.3 Phases Détaillées

**PHASE 0: Pré-Projet (Mois -6 à 0)**
- Études de faisabilité
- Levée de fonds initiale
- Recrutement équipe fondatrice
- Décision GO/NO-GO

**PHASE 1: Constitution Légale (Mois 1-3)**
| Action | Responsable | Délai | Coût |
|--------|-------------|-------|------|
| Rédaction statuts | Avocat | M1 | 1M FCFA |
| Assemblée générale constitutive | Fondateurs | M1 | - |
| Dépôt capital (100M) | Fondateurs | M1 | 100M FCFA |
| Immatriculation RCCM | Avocat | M2 | 0,5M FCFA |
| IFU (fiscal) | Comptable | M2 | - |
| Ouverture compte bancaire | DG | M2 | - |

**PHASE 2: Dossier BCEAO (Mois 2-6)**
| Action | Responsable | Délai | Coût |
|--------|-------------|-------|------|
| Recrutement DG, CTO, CFO, COO | RH | M2-3 | - |
| Rédaction Business Plan | DG + Consultant | M3-4 | 5M FCFA |
| Architecture technique | CTO | M3-5 | - |
| Identification banque partenaire | CFO | M3-4 | - |
| Rédaction manuel AML/CFT | Compliance Off | M4-5 | 3M FCFA |
| Compilation dossier complet | Équipe | M5-6 | - |
| Dépôt dossier BCEAO | DG | M6 | 5M FCFA |

**PHASE 3: Instruction BCEAO (Mois 6-12)**
| Action | Responsable | Délai | Notes |
|--------|-------------|-------|-------|
| Examen recevabilité | BCEAO | M6-7 | Possibles demandes de compléments |
| Instruction approfondie | BCEAO | M7-11 | Auditions possibles à Dakar |
| Visite sur site | BCEAO | M10 | Préparation importante |
| Décision du Gouverneur | BCEAO | M12 | Accord de principe avec conditions suspensives |

**PHASE 4: Autres Autorisations (Parallèle Mois 6-12)**
| Action | Responsable | Délai | Coût |
|--------|-------------|-------|------|
| Demande autorisation ARCEP | Directeur Juridique | M7-9 | 2M FCFA |
| Code USSD | Directeur Juridique | M8-9 | 1M FCFA |
| Déclaration CNDP | DPO | M7-9 | 0,5M FCFA |
| Convention banque partenaire | CFO | M6-8 | 0,5M FCFA |
| Négociations télécoms | COO | M8-11 | 10M FCFA |

**PHASE 5: Levée Conditions Suspensives (Mois 12-14)**
| Action | Responsable | Délai | Coût |
|--------|-------------|-------|------|
| Certification ISO 27001 | CISO | M3-13 | 33M FCFA |
| Audit de sécurité | CISO | M13 | 5M FCFA |
| Tests interopérabilité | CTO | M13 | - |
| Formation personnel | RH | M13 | 3M FCFA |
| Recrutement & formation 500 agents | COO | M12-14 | 50M FCFA |
| Assurances | CFO | M13 | 20M FCFA |
| Souscription Fonds de Garantie | CFO | M13 | 20M FCFA |

**PHASE 6: Autorisation Finale & Lancement (Mois 14-15)**
| Action | Responsable | Délai | Coût |
|--------|-------------|-------|------|
| Inspection finale BCEAO | BCEAO | M14 | - |
| Autorisation de démarrage | BCEAO | M14 | 15M FCFA |
| Publication JO UEMOA | BCEAO | M14 | - |
| Tests en condition réelle (soft launch) | CTO | M14 | - |
| Campagne marketing pré-lancement | CMO | M14-15 | 100M FCFA |
| **LANCEMENT COMMERCIAL** | **DG** | **M15** | - |

### 8.4 Chemin Critique

**Éléments Bloquants** (retard sur ces points retarde tout le projet):
1. **Licence BCEAO**: Processus le plus long et incertain (6-12 mois)
2. **Certification ISO 27001**: Condition suspensive fréquente (6-10 mois)
3. **Conventions télécoms**: Peut traîner si négociations difficiles (3-6 mois)

**Optimisation**:
- **Parallélisation**: Lancer ISO 27001, ARCEP, CNDP dès que société constituée (ne pas attendre BCEAO)
- **Anticipation**: Commencer développement tech avant licence (risque maîtrisé)
- **Pré-engagement**: Signer LOI (Letter of Intent) avec banque et télécoms tôt
- **Consultant spécialisé**: Engager cabinet conseil expert BCEAO (connaissance du processus, contacts)

---

## 9. COÛTS DÉTAILLÉS

### 9.1 Tableau Récapitulatif - Investissement Réglementaire Initial

| Catégorie | Poste | Montant (FCFA) | Montant (USD) |
|-----------|-------|----------------|---------------|
| **BCEAO** | Frais dossier + instruction + agrément | 30 000 000 | 50 000 |
| | Fonds de Garantie BCEAO | 20 000 000 | 33 200 |
| **ARCEP** | Autorisation mobile money | 2 000 000 | 3 300 |
| | Code court USSD (attribution) | 1 000 000 | 1 650 |
| | Numéro court call center | 500 000 | 830 |
| | Interconnexion télécoms (2 opérateurs) | 10 000 000 | 16 600 |
| **Légal/Fiscal** | Constitution société, RCCM, IFU | 2 000 000 | 3 300 |
| | Avocat / conseil juridique | 5 000 000 | 8 300 |
| **CNDP** | Autorisation protection données | 500 000 | 830 |
| | Consultant RGPD (setup) | 5 000 000 | 8 300 |
| **AML/CFT** | Consultant AML (procédures) | 8 000 000 | 13 300 |
| | Outil monitoring (licence An 1) | 15 000 000 | 25 000 |
| **Banque** | Ouverture comptes séquestres | 500 000 | 830 |
| **ISO 27001** | Consultant + Audit certification | 33 000 000 | 54 800 |
| **Assurances** | Primes An 1 (RC, cyber, locaux) | 20 000 000 | 33 200 |
| **Formation** | Agents (500) + Personnel | 53 000 000 | 88 000 |
| **Marketing** | Pré-lancement | 100 000 000 | 166 000 |
| **Divers** | Imprévus (10%) | 18 500 000 | 30 700 |
| **TOTAL** | | **323 000 000** | **~537 000** |

**Note**: Ce montant de ~323M FCFA (~537K USD) représente uniquement les coûts réglementaires et de mise en conformité. Il s'ajoute aux coûts technologiques, RH, et opérationnels du projet.

### 9.2 Coûts Récurrents Annuels (à partir An 2)

| Catégorie | Poste | Montant (FCFA/an) | Montant (USD/an) |
|-----------|-------|-------------------|------------------|
| **BCEAO** | Cotisation annuelle | 5 000 000 | 8 300 |
| **ARCEP** | Redevance USSD | 500 000 | 830 |
| | Redevance numéro court | 200 000 | 330 |
| | Interconnexion télécoms (forfait) | 24 000 000 | 40 000 |
| **AML/CFT** | Compliance Officer (salaire) | 12 000 000 | 20 000 |
| | Outil monitoring (licence) | 15 000 000 | 25 000 |
| | Audit AML annuel | 5 000 000 | 8 300 |
| **RGPD** | DPO (salaire ou prestation) | 8 000 000 | 13 300 |
| **Banque** | Tenue compte séquestre | 2 400 000 | 4 000 |
| **ISO 27001** | Audit surveillance (années 2-3) | 4 000 000 | 6 600 |
| | Renouvellement (année 4, puis tous les 3 ans) | 8 000 000 | 13 300 |
| **Assurances** | Primes (RC, cyber, locaux, flotte) | 25 000 000 | 41 600 |
| **Formation** | Rafraîchissement AML, RGPD, Sécurité | 5 000 000 | 8 300 |
| **Assoc. Pro** | Cotisation APBEF ou équivalent | 2 000 000 | 3 300 |
| **Total An 2-3** | | **108 100 000** | **~180 000** |
| **Total An 4** (avec renouvellement ISO) | | **112 100 000** | **~186 600** |

**Moyenne annuelle An 2-5**: ~110M FCFA (~183K USD)

### 9.3 Capital Social et Garanties

**Capital Social**: 100 000 000 FCFA (~165 000 USD)
- Doit être disponible dès le début
- Ne peut être réduit pendant 5 ans
- Fait partie du financement global du projet

**Fonds de Garantie BCEAO**: 20 000 000 FCFA (~33 200 USD)
- Contribution unique au fonds de garantie solidaire des EME
- Non récupérable

**Comptes Séquestres** (Fonds clients):
- Montant variable selon l'activité
- An 1: ~500M FCFA de float prévu
- An 3: ~5Mds FCFA de float prévu
- Ces fonds **ne sont pas un coût** (appartiennent aux clients), mais immobilisés

---

## 10. MAINTIEN DE LA CONFORMITÉ

### 10.1 Gouvernance et Organisation

**Comité de Conformité**:
- Composition: DG, CFO, CTO, Compliance Officer, DPO, Directeur Juridique
- Fréquence: Mensuelle
- Rôle: Revue des risques, incidents, évolutions réglementaires, décisions conformité

**Fonctions Clés**:
1. **Compliance Officer / RCCI** (Responsable de la Conformité et du Contrôle Interne)
2. **DPO** (Data Protection Officer)
3. **CISO** (Chief Information Security Officer)
4. **Directeur Juridique**

**Reporting**:
- **Board / Conseil d'Administration**: Trimestriel (KPIs conformité, incidents majeurs)
- **BCEAO**: Mensuel, trimestriel, annuel (selon obligation)
- **ARCEP**: Trimestriel
- **CENTIF**: Ad hoc (DOS) + Annuel

### 10.2 Audits et Contrôles

**Audits Internes**:
- Audit interne annuel de chaque département
- Audit AML/CFT semestriel
- Tests de sécurité (pentests) semestriels

**Audits Externes**:
- **Commissaire aux comptes**: Audit annuel des états financiers
- **Audit AML/CFT indépendant**: Annuel (requis BCEAO)
- **Audit ISO 27001**: Surveillance annuelle, renouvellement tous les 3 ans
- **Audit BCEAO**: Missions d'inspection périodiques (à l'initiative de la BCEAO)

**Coût Audits Annuels**: ~15M FCFA (~25K USD)

### 10.3 Veille Réglementaire

**Objectif**: Suivre l'évolution des réglementations et anticiper les changements

**Moyens**:
1. **Abonnements**: Bulletins officiels (JO UEMOA, BCEAO), revues spécialisées
2. **Associations professionnelles**: Participation active, groupes de travail
3. **Consultants**: Cabinet juridique spécialisé en retainer
4. **Réseau**: Contacts à la BCEAO, ARCEP, CENTIF, CNDP

**Processus**:
- Veille quotidienne (Compliance Officer)
- Analyse d'impact de toute nouvelle réglementation
- Plan d'action si mise en conformité nécessaire
- Formation du personnel si changement significatif

**Coût**: ~3M FCFA/an (~5K USD) - abonnements, consultant

### 10.4 Gestion des Changements

**Principe**: Tout changement significatif doit être notifié aux régulateurs

**Changements Notifiables**:
- Actionnariat (cession >5% du capital)
- Dirigeants (DG, DGA, administrateurs)
- Modification statutaire
- Nouveaux services proposés
- Changements technologiques majeurs (changement core banking system)
- Acquisitions ou partenariats stratégiques

**Procédure**:
1. Décision interne (Board)
2. Préparation dossier de notification
3. Soumission à la BCEAO (et ARCEP si pertinent)
4. Attente approbation (délai: 1-3 mois selon type de changement)
5. Mise en œuvre seulement après approbation

**Sanctions en cas de non-notification**: Amendes, voire suspension

### 10.5 Plan de Réponse aux Incidents Réglementaires

**Types d'Incidents**:
1. **Incident technique majeur** (panne >2h)
2. **Incident de sécurité** (cyberattaque, fuite de données)
3. **Fraude significative**
4. **Non-conformité détectée** (audit interne ou externe)
5. **Réclamation médiatisée** (bad buzz)

**Procédure**:
1. **Détection et escalade** (immédiate)
2. **Cellule de crise** (DG + Comité de Conformité)
3. **Évaluation** (gravité, impact, obligations de notification)
4. **Notification régulateurs** (si requis, dans les délais):
   - BCEAO: sous 24h pour incident technique majeur
   - CNDP: sous 72h pour fuite de données
   - CENTIF: sous 48h pour fraude suspectée
5. **Actions correctives immédiates**
6. **Communication** (interne, clients si impactés, presse si nécessaire)
7. **Rapport post-incident** (analyse causes racines, plan d'amélioration)
8. **Suivi** (vérification efficacité des correctifs)

**Documentation**:
- Registre des incidents
- Rapports d'incidents détaillés
- Communications aux régulateurs
- Plans d'action

### 10.6 Formation Continue

**Public**:
- **Tous les employés**: Formation annuelle (conformité de base, AML/CFT, RGPD, sécurité)
- **Agents**: Formation initiale + rafraîchissement annuel (détection fraude, KYC)
- **Personnel sensible** (Conformité, Juridique, IT): Formations spécialisées continues

**Méthodes**:
- E-learning (modules interactifs)
- Ateliers en présentiel (études de cas)
- Webinaires
- Tests de connaissance (obligatoires, score minimum requis)

**Coût**: ~5M FCFA/an (~8K USD)

---

## CONCLUSION

L'obtention et le maintien de l'ensemble des licences et autorisations pour opérer un service de mobile money au Togo représente un investissement significatif en temps, argent et ressources humaines:

**Résumé des Investissements**:
- **Délai de mise en conformité**: 12-15 mois avant lancement
- **Investissement initial**: ~323M FCFA (~537K USD) (hors capital social de 100M)
- **Coûts récurrents**: ~110M FCFA/an (~183K USD/an)

**Facteurs Clés de Succès**:
1. **Anticipation**: Démarrer le processus réglementaire le plus tôt possible
2. **Expertise**: S'entourer de consultants experts (BCEAO, AML/CFT, ISO 27001)
3. **Rigueur**: Dossiers complets et professionnels dès le premier dépôt
4. **Relations**: Cultiver de bonnes relations avec les régulateurs (transparence, proactivité)
5. **Conformité par Design**: Intégrer la conformité dès la conception (tech, processus, formation)
6. **Amélioration Continue**: Veille réglementaire, audits réguliers, culture de conformité

**Opportunités**:
- La nouvelle réglementation BCEAO (2024) crée une barrière à l'entrée élevée, limitant la concurrence
- Les délais d'obtention (12+ mois) donnent un avantage aux premiers entrants conformes
- La conformité rigoureuse est un argument commercial (confiance des utilisateurs et partenaires)

**Risques**:
- Refus de licence (dossier incomplet, dirigeants non éligibles)
- Retards (instruction BCEAO, levée conditions suspensives)
- Coûts imprévus (demandes supplémentaires, audits additionnels)
- Évolution réglementaire (nouvelles exigences pendant le processus)

**Recommandation Stratégique**:
**Engager un cabinet de conseil spécialisé en réglementation FinTech BCEAO dès le Mois 1**. Leur expertise et réseau peuvent réduire significativement les délais et risques de rejet.

**Cabinet Recommandé** (à titre indicatif):
- **Deloitte Afrique Francophone** (bureau Dakar/Abidjan)
- **EY (Ernst & Young) WAMO** (West Africa & Maghreb Operation)
- **Mazars Sénégal/Côte d'Ivoire**
- **Cabinet d'avocats spécialisé**: UGGC Africa Law Firm, Bowmans (ex-KPMG Law)

Coût consulting: 30-50M FCFA (~50-83K USD) mais ROI élevé (gain de temps = lancement plus rapide = revenus plus tôt).

---

**Document préparé le**: 11 novembre 2025
**Version**: 1.0
**Confidentialité**: Strictement confidentiel
