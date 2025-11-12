# CAS D'USAGE - PROJET MOBILE MONEY TOGO

## TABLE DES MATIÈRES
1. [Cas d'Usage Particuliers](#1-cas-dusage-particuliers)
2. [Cas d'Usage Commerçants](#2-cas-dusage-commerçants)
3. [Cas d'Usage Entreprises (B2B)](#3-cas-dusage-entreprises-b2b)
4. [Cas d'Usage Agents](#4-cas-dusage-agents)
5. [Cas d'Usage Gouvernement/Institutions](#5-cas-dusage-gouvernementinstitutions)
6. [Parcours Utilisateur Détaillés](#6-parcours-utilisateur-détaillés)

---

## 1. CAS D'USAGE PARTICULIERS

### 1.1 Inscription et Activation de Compte

**Acteur**: Nouvel utilisateur
**Objectif**: Créer un compte mobile money et commencer à utiliser le service

**Prérequis**:
- Posséder une carte d'identité nationale ou passeport valide
- Avoir un numéro de téléphone togolais actif
- Être majeur (18+ ans) ou avoir autorisation parentale

**Scénario Principal**:
1. Aminata, 28 ans, vendeuse de tissus au marché de Lomé, souhaite ouvrir un compte
2. Elle se rend chez un agent agréé près de son marché
3. L'agent vérifie son identité (carte d'identité) et prend une photo
4. L'agent saisit ses informations dans l'application agent
5. Aminata reçoit un SMS de confirmation avec son code PIN temporaire
6. Elle compose le code USSD *XXX# pour activer son compte
7. Elle définit son code PIN personnel (4 chiffres)
8. Son compte est immédiatement actif avec un bonus de bienvenue de 1 000 FCFA

**Variantes**:
- **Via Application Mobile**: Téléchargement app → selfie + scan ID → vidéo vérification → activation
- **Via USSD avancé**: *XXX*1# → saisie infos → visite agent pour vérification → activation

**Résultat**: Compte actif en moins de 10 minutes

**Bénéfices**:
- Bonus bienvenue: 1 000 FCFA
- 5 premières transactions gratuites
- Accès immédiat à tous les services de base

---

### 1.2 Dépôt d'Argent (Cash-In)

**Acteur**: Utilisateur avec argent cash
**Objectif**: Convertir de l'argent liquide en argent électronique

**Scénario 1: Dépôt chez Agent**
1. Kofi, chauffeur de taxi, a gagné 45 000 FCFA aujourd'hui
2. Il se rend chez son agent habituel (boutique de quartier)
3. Il demande un dépôt de 40 000 FCFA sur son compte
4. L'agent compose *XXX*2*NUMERO_KOFI*40000#
5. Kofi reçoit un code de confirmation par SMS
6. Il dicte le code à l'agent
7. L'agent lui remet le cash et valide la transaction
8. Kofi reçoit immédiatement une notification SMS de dépôt réussi
9. **Frais**: 0 FCFA (gratuit pendant les 6 premiers mois de promotion)

**Scénario 2: Dépôt Automatique (Futur)**
1. Utilisateur se rend à un guichet automatique partenaire
2. Sélectionne "Dépôt Mobile Money"
3. Saisit son numéro de téléphone
4. Insère les billets dans la machine
5. Validation instantanée

**Limites**:
- Dépôt minimum: 500 FCFA
- Dépôt maximum par transaction: 500 000 FCFA
- Dépôt maximum journalier: 2 000 000 FCFA (compte vérifié)
- Dépôt maximum mensuel: 10 000 000 FCFA (compte premium)

---

### 1.3 Retrait d'Argent (Cash-Out)

**Acteur**: Utilisateur ayant un solde électronique
**Objectif**: Convertir son argent électronique en cash

**Scénario Principal**:
1. Afi, enseignante, doit payer son loyer en cash (200 000 FCFA)
2. Elle compose *XXX*3*200000# sur son téléphone
3. Le système génère un code de retrait à 6 chiffres (valide 24h)
4. Elle se rend chez l'agent le plus proche (géolocalisation dans l'app)
5. Elle donne son code de retrait et son numéro de téléphone à l'agent
6. L'agent vérifie son identité (carte ID) et compose *XXX*4*CODE_RETRAIT#
7. Le système débite le compte d'Afi (200 000 + 3 000 FCFA de frais)
8. L'agent remet 200 000 FCFA à Afi
9. Afi et l'agent reçoivent chacun un SMS de confirmation

**Frais de Retrait** (structure compétitive):
| Montant | Frais | % |
|---------|-------|---|
| 500 - 2 500 FCFA | 50 FCFA | 2% |
| 2 501 - 5 000 | 100 FCFA | 1,6% |
| 5 001 - 15 000 | 200 FCFA | 1,3% |
| 15 001 - 30 000 | 500 FCFA | 1,3% |
| 30 001 - 50 000 | 1 000 FCFA | 1,7% |
| 50 001 - 150 000 | 2 000 FCFA | 1,2% |
| 150 001 - 500 000 | 3 000 FCFA | 0,9% |

**Limites**:
- Retrait minimum: 500 FCFA
- Retrait maximum par transaction: 500 000 FCFA
- Retrait maximum journalier: 1 000 000 FCFA
- Nombre de retraits gratuits/mois: 2 (pour comptes premium)

---

### 1.4 Transfert d'Argent P2P (Peer-to-Peer)

**Acteur**: Utilisateur souhaitant envoyer de l'argent
**Objectif**: Envoyer de l'argent à un autre utilisateur

**Scénario 1: Transfert Intra-Réseau (même opérateur)**
1. Séna, étudiant à Kara, a besoin d'argent pour ses livres
2. Son père à Lomé compose: *XXX*1*NUMERO_SENA*35000#
3. Il entre son code PIN
4. Il confirme les détails (destinataire: Séna, montant: 35 000 FCFA)
5. Transaction traitée en 3 secondes
6. Séna reçoit immédiatement un SMS: "Vous avez reçu 35 000 FCFA de Papa"
7. Le père reçoit une confirmation: "Transfert réussi. Frais: 350 FCFA"
8. Les deux parties peuvent voir la transaction dans leur historique

**Frais Transfert P2P**:
| Montant | Frais | % |
|---------|-------|---|
| 1 - 2 500 FCFA | Gratuit | 0% |
| 2 501 - 10 000 | 100 FCFA | 0,7% |
| 10 001 - 50 000 | 350 FCFA | 0,9% |
| 50 001 - 200 000 | 750 FCFA | 0,5% |
| 200 001 - 1 000 000 | 1 500 FCFA | 0,3% |

**Scénario 2: Transfert Inter-Opérateurs (interopérabilité)**
1. Utilisateur de notre plateforme envoie à utilisateur Flooz/T-Money
2. Même processus mais frais légèrement supérieurs (+50 FCFA)
3. Délai: <1 minute via hub GIMAC-WARI

**Scénario 3: Transfert International (UEMOA)**
1. Diaspora au Bénin envoie argent à famille au Togo
2. Utilisation du hub d'interopérabilité régional BCEAO
3. Conversion automatique si nécessaire (mais même monnaie FCFA)
4. Frais: 2-3% selon corridor

**Cas d'Usage Spécifiques**:
- **Aide familiale**: Envois réguliers parents → enfants
- **Paiements entre amis**: Partage addition restaurant
- **Entraide communautaire**: Contributions tontines digitales
- **Urgences**: Envoi rapide pour soins médicaux

---

### 1.5 Paiement de Factures et Services

**Acteur**: Utilisateur devant payer des factures
**Objectif**: Payer électricité, eau, télévision, internet, etc.

**Scénario**: Paiement Facture Électricité (CEET)
1. Koffi reçoit un SMS de rappel CEET: "Facture 25 400 FCFA à payer avant le 15"
2. Il compose *XXX*5*1# (1 = électricité)
3. Il saisit son numéro de compteur: 12345678
4. Le système affiche sa facture: 25 400 FCFA (période: Oct 2025)
5. Il confirme avec son code PIN
6. Paiement instantané, frais: 100 FCFA (0,4%)
7. Il reçoit immédiatement un reçu électronique par SMS et email
8. Son compteur est rechargé automatiquement (si prépaiement)

**Services Disponibles**:
- **Électricité**: CEET (Compagnie Énergie Électrique du Togo)
- **Eau**: TdE (Togolaise des Eaux)
- **Télévision**: Canal+, StarTimes, TNT
- **Internet/Télécom**: Recharges Moov, Togocel
- **Assurance**: Paiement primes mensuelles
- **Scolarité**: Frais de scolarité établissements partenaires
- **Abonnements**: Streaming, applications, services digitaux

**Bénéfices**:
- Disponible 24/7 (plus besoin faire la queue)
- Reçus électroniques conservés dans l'app
- Rappels automatiques échéances
- Historique complet des paiements
- Programme de cashback: 1% remboursé sur factures

---

### 1.6 Épargne Digitale

**Acteur**: Utilisateur souhaitant épargner
**Objectif**: Mettre de l'argent de côté avec intérêts

**Scénario 1: Épargne Libre**
1. Yawa, commerçante, veut épargner pour agrandir sa boutique
2. Elle accède à son app mobile money → section "Épargne"
3. Elle crée un "objectif" : "Nouvelle boutique" - cible: 500 000 FCFA
4. Elle transfère 50 000 FCFA de son compte principal vers son épargne
5. L'argent est dans un wallet séparé mais accessible
6. Elle gagne 4% d'intérêt annuel (calculé mensuellement)
7. Elle peut retirer à tout moment (retrait instantané gratuit)

**Scénario 2: Épargne Bloquée (Taux Bonifié)**
1. Komlan veut épargner pour les études de sa fille (dans 3 ans)
2. Il crée une épargne bloquée: 100 000 FCFA/mois pendant 36 mois
3. Taux: 7% annuel (vs. 4% épargne libre)
4. Prélèvement automatique chaque 1er du mois
5. Déblocage automatique après 36 mois: 4 088 656 FCFA
6. Option déblocage anticipé: pénalité -50% des intérêts

**Scénario 3: Épargne Collaborative (Tontine Digitale)**
1. Groupe de 10 amies créent une tontine digitale
2. Chacune contribue 20 000 FCFA/mois
3. Chaque mois, une personne différente reçoit le pot (200 000 FCFA)
4. Ordre défini par vote ou aléatoire
5. Transparence totale: chacune voit les contributions
6. Frais de gestion: 500 FCFA/mois (soit 50 FCFA/personne)

**Taux d'Intérêt**:
- Épargne libre: 4% annuel
- Épargne bloquée 12 mois: 6% annuel
- Épargne bloquée 24 mois: 7% annuel
- Épargne bloquée 36 mois: 8% annuel

**Limites**:
- Épargne minimum: 5 000 FCFA
- Pas de limite maximale
- Intérêts créditent chaque fin de mois

---

### 1.7 Micro-Crédit Express

**Acteur**: Utilisateur ayant un historique de transactions
**Objectif**: Obtenir un prêt rapide sans paperasse

**Scénario**:
1. Akossiwa, agent mobile money depuis 8 mois, a besoin de liquidité
2. Elle accède à *XXX*8# → "Crédit"
3. Le système analyse son profil:
   - Historique: 150 transactions en 8 mois
   - Volume mensuel moyen: 200 000 FCFA
   - Aucun incident de paiement
   - Score de crédit: 750/1000
4. Offre instantanée: "Vous êtes éligible à 150 000 FCFA"
5. Conditions affichées:
   - Montant: 150 000 FCFA
   - Durée: 3 mois
   - Taux: 5% (7 500 FCFA)
   - Remboursement: 52 500 FCFA/mois pendant 3 mois
6. Elle accepte et signe électroniquement
7. L'argent est crédité sur son compte en 2 minutes
8. Remboursements prélevés automatiquement chaque 30e jour

**Critères d'Éligibilité**:
- Compte actif depuis minimum 3 mois
- Minimum 20 transactions par mois
- Volume mensuel minimum: 50 000 FCFA
- Aucun incident dans les 6 derniers mois
- Identité vérifiée (KYC complet)

**Montants et Conditions**:
| Profil Crédit | Montant Max | Durée Max | Taux Mensuel |
|---------------|-------------|-----------|--------------|
| Bronze (< 500) | 50 000 FCFA | 1 mois | 5% |
| Silver (500-700) | 150 000 FCFA | 3 mois | 4% |
| Gold (700-850) | 500 000 FCFA | 6 mois | 3% |
| Platinum (850+) | 2 000 000 FCFA | 12 mois | 2% |

**Cas d'Usage**:
- Urgence médicale
- Stock pour commerce
- Frais scolaires imprévus
- Réparation véhicule
- Opportunité business

---

### 1.8 Assurance Micro

**Acteur**: Utilisateur souhaitant se protéger contre les risques
**Objectif**: Souscrire une micro-assurance accessible

**Scénario**: Assurance Santé Familiale
1. Kokou, père de 3 enfants, veut assurer sa famille
2. Il accède à *XXX*9*1# → "Assurance Santé"
3. Options disponibles:
   - **Plan Basique**: 2 000 FCFA/mois
     - Consultations: 5 par an
     - Hospitalisation: 100 000 FCFA/an
     - Médicaments: 50% remboursés (max 30 000/an)
   - **Plan Standard**: 5 000 FCFA/mois
     - Consultations: illimitées
     - Hospitalisation: 500 000 FCFA/an
     - Médicaments: 70% remboursés (max 100 000/an)
     - Analyses: 80% remboursés
   - **Plan Premium**: 10 000 FCFA/mois
     - Tous avantages Standard +
     - Hospitalisation: 2 000 000 FCFA/an
     - Évacuation sanitaire
     - Soins dentaires
4. Il choisit Plan Standard pour 5 membres (lui + épouse + 3 enfants)
5. Prime: 5 000 FCFA × 5 = 25 000 FCFA/mois
6. Prélèvement automatique chaque 1er du mois
7. Carte d'assurance digitale reçue par SMS
8. Activation immédiate

**Autres Types d'Assurance**:
- **Assurance Vie**: À partir de 1 000 FCFA/mois
- **Assurance Accident**: 500 FCFA/mois (couverture 500 000 FCFA)
- **Assurance Agricole**: Protection récoltes (saison)
- **Assurance Mobile**: Protection vol/casse smartphone (1 500 FCFA/mois)

**Partenaires Assurance**:
- NSIA Assurances
- SONAR
- Allianz Afrique
- AXA Assurances Togo

---

## 2. CAS D'USAGE COMMERÇANTS

### 2.1 Acceptation Paiements Clients

**Acteur**: Commerçant (boutique, restaurant, etc.)
**Objectif**: Accepter paiements mobile money sans cash

**Scénario 1: Paiement QR Code**
1. Restaurant "Chez Maman Adjoavi" s'inscrit comme marchand
2. Ils reçoivent un QR code unique affiché au comptoir
3. Client termine son repas: addition 8 500 FCFA
4. Client scanne le QR code avec son app mobile money
5. Montant pré-rempli (si caisse digitale intégrée) ou client saisit 8 500
6. Client valide avec son PIN
7. Restaurant reçoit instantanément notification de paiement
8. Reçu digital envoyé au client
9. **Frais marchand**: 1% (85 FCFA) - gratuit première année

**Scénario 2: Paiement USSD**
1. Boutique de quartier (pas de smartphone)
2. Cliente achète pour 15 000 FCFA
3. Commerçant donne son numéro marchand: *XXX*6*NUMERO_MARCHAND*15000#
4. Cliente compose sur son téléphone et valide
5. Les deux reçoivent confirmation SMS

**Scénario 3: Terminal POS Mobile**
1. Station-service (gros volumes)
2. Reçoit un terminal POS mobile money
3. Employé saisit montant 35 000 FCFA
4. Client tape son numéro + PIN sur terminal
5. Transaction instantanée
6. Ticket imprimé automatiquement

**Bénéfices Commerçants**:
- Pas de gestion cash (sécurité, erreurs)
- Règlement rapide: J+1 sur compte bancaire
- Outil de caisse gratuit
- Statistiques ventes en temps réel
- Programme de cashback pour attirer clients
- Première année GRATUITE (0% frais)

**Grille Tarifaire Marchands**:
| Statut | Volume Mensuel | Frais |
|--------|----------------|-------|
| An 1 | Tous volumes | 0% (promo) |
| An 2+ Petits | < 1M FCFA | 1,5% |
| An 2+ Moyens | 1M - 10M FCFA | 1,0% |
| An 2+ Grands | > 10M FCFA | 0,5% |

---

### 2.2 Gestion de Trésorerie Commerçant

**Acteur**: Commerçant avec flux importants
**Objectif**: Gérer liquidité et paiements fournisseurs

**Scénario**:
1. "Boutique Excellence" (épicerie) accumule 500 000 FCFA en paiements MM en 1 semaine
2. Patron accède au tableau de bord marchand (app ou web)
3. Visualise:
   - Solde compte marchand: 500 000 FCFA
   - Transactions de la semaine: 89 (détail téléchargeable)
   - Heures de pointe: 8h-10h et 17h-19h
   - Panier moyen: 5 600 FCFA
4. Options:
   - **Retrait cash**: Via agent (frais 1%)
   - **Transfert bancaire**: J+1 gratuit vers compte professionnel
   - **Paiement fournisseurs**: Direct depuis compte marchand
   - **Paiement salaires**: Employés (si enregistrés)
5. Il décide de:
   - Garder 200 000 FCFA sur compte MM (pour paiements fournisseurs)
   - Transférer 300 000 FCFA sur compte bancaire

**Outils de Gestion**:
- Tableau de bord temps réel
- Rapports journaliers/hebdomadaires/mensuels
- Export Excel/PDF pour comptabilité
- Alertes personnalisables (ex: seuil atteint)
- Multi-utilisateurs (caissiers avec accès limité)
- Intégration APIs comptabilité (Sage, QuickBooks)

---

### 2.3 Programme de Fidélité Commerçant

**Acteur**: Commerçant souhaitant fidéliser clients
**Objectif**: Créer un programme de fidélité digital

**Scénario**:
1. Pharmacie "Santé Plus" active le module fidélité
2. Configuration:
   - 1 point = 100 FCFA dépensés
   - 100 points = 1 000 FCFA de réduction
   - Validité points: 12 mois
3. Cliente fidèle effectue un achat de 25 000 FCFA
4. Elle scanne le QR code pour payer
5. Système reconnaît automatiquement son numéro (client récurrent)
6. Crédite +250 points sur son compte fidélité
7. Elle reçoit SMS: "Paiement OK. +250 points. Total: 1 340 points (13 400 FCFA dispo)"
8. Au prochain achat, elle peut utiliser ses points

**Avantages**:
- Augmentation du panier moyen: +25%
- Taux de rétention clients: +40%
- Base de données clients qualifiée
- Marketing ciblé (SMS promos personnalisées)

---

## 3. CAS D'USAGE ENTREPRISES (B2B)

### 3.1 Paiement de Salaires en Masse

**Acteur**: Entreprise avec employés
**Objectif**: Payer salaires rapidement et efficacement

**Scénario**:
1. Entreprise de construction "BTP Excellence" (150 employés)
2. Service RH prépare fichier Excel des salaires (fin de mois)
3. Connexion au portail B2B mobile money
4. Upload du fichier (format template fourni):
   - Numéro téléphone employé
   - Nom
   - Montant
   - Référence
5. Système valide le fichier:
   - Vérification comptes bénéficiaires
   - Calcul total: 45 000 000 FCFA
   - Frais: 0,3% = 135 000 FCFA
6. Directeur financier approuve avec double authentification
7. Traitement batch en 5 minutes
8. Chaque employé reçoit SMS: "Salaire Octobre reçu: 300 000 FCFA"
9. Rapport de traitement envoyé à la RH (99,3% succès, 1 numéro invalide)

**Bénéfices**:
- Gain de temps: 2 jours → 10 minutes
- Coût réduit: -50% vs. chèques ou espèces
- Sécurité: pas de transport cash
- Traçabilité: reçus pour chaque employé
- Employés contents: argent disponible immédiatement

**Tarifs B2B Bulk Payments**:
| Volume Mensuel | Frais par Transaction |
|----------------|----------------------|
| < 100 transactions | 100 FCFA fixe |
| 100 - 1 000 | 50 FCFA fixe |
| > 1 000 | 0,3% (min 30 FCFA) |

---

### 3.2 Collecte de Paiements Clients (B2B2C)

**Acteur**: Entreprise vendant à des particuliers
**Objectif**: Faciliter paiements clients

**Scénario**: Société de Microfinance
1. "MicroCrédit Espoir" octroie 500 micro-prêts/mois
2. Intègre APIs mobile money pour remboursements
3. Emprunteur reçoit SMS rappel: "Échéance 15 000 FCFA le 15/11"
4. Deux options:
   - **Paiement manuel**: Client compose *XXX*7*CODE_PRET*15000#
   - **Prélèvement automatique**: Si autorisé, prélèvement auto le jour J
5. Paiement traité instantanément
6. MicroCrédit Espoir reçoit notification temps réel
7. Compte client mis à jour automatiquement
8. En cas d'échec, alerte automatique pour relance

**Autres Cas B2B2C**:
- **E-commerce**: Paiement achats en ligne
- **Services publics**: Paiement amendes, taxes
- **Éducation**: Frais de scolarité, cantines
- **Santé**: Paiement consultations, hospitalisations
- **Transport**: Paiement tickets bus, taxis

**Avantages**:
- Taux de recouvrement: +35%
- Coût de collecte: -60%
- Réconciliation automatique
- Réduction litiges

---

### 3.3 API Integration E-Commerce

**Acteur**: Site e-commerce togolais
**Objectif**: Intégrer mobile money comme moyen de paiement

**Scénario**:
1. "TogoMarket.com" (marketplace locale) intègre notre API
2. Client achète laptop 250 000 FCFA
3. Au checkout, sélectionne "Mobile Money" comme paiement
4. Redirigé vers page paiement:
   - Saisit son numéro de téléphone
   - Reçoit push notification sur son smartphone (si app installée)
   - Ou compose code USSD affiché
5. Valide paiement avec PIN
6. Redirection automatique vers TogoMarket avec confirmation
7. Commande validée instantanément
8. TogoMarket reçoit webhook de confirmation
9. Processus d'expédition déclenché

**Documentation API Fournie**:
- RESTful API (JSON)
- Webhooks temps réel
- Sandbox pour tests
- SDKs: PHP, Python, Node.js, Java
- Plugins: WooCommerce, Shopify, PrestaShop
- Documentation Swagger/OpenAPI

**SLA Garantis**:
- Disponibilité: 99,9%
- Temps de réponse: <500ms (95e percentile)
- Support technique 24/7

---

## 4. CAS D'USAGE AGENTS

### 4.1 Inscription et Activation Agent

**Acteur**: Entrepreneur souhaitant devenir agent
**Objectif**: Créer un point de service mobile money

**Scénario**:
1. Ama tient une boutique dans le quartier d'Adidogomé à Lomé
2. Elle voit l'opportunité de devenir agent mobile money
3. Elle appelle le 8888 (numéro gratuit) ou visite notre agence
4. Évaluation de son profil:
   - Boutique établie depuis 3 ans
   - Bonne réputation dans le quartier
   - Liquidité disponible: 500 000 FCFA
   - Emplacement stratégique (proximité marché)
5. Dossier requis:
   - Carte d'identité
   - Justificatif de domicile
   - Attestation de localisation boutique
   - Extrait de casier judiciaire
   - 2 photos d'identité
6. Dossier approuvé sous 72h
7. Formation de 2 jours (gratuite):
   - Jour 1: Théorie (services, réglementation, fraude)
   - Jour 2: Pratique (simulations, application agent)
8. Équipement fourni:
   - Smartphone agent (subventionné: 30 000 au lieu de 80 000 FCFA)
   - Kit marketing (affiches, bannière, autocollants)
   - Float initial: elle charge 500 000 FCFA
9. Activation immédiate
10. Elle commence à servir des clients le lendemain

**Critères d'Éligibilité Agent**:
- Majorité légale (18+)
- Casier judiciaire vierge
- Local commercial fixe
- Liquidité initiale minimum: 200 000 FCFA
- Référence de 2 personnes
- Test de compétences de base (calcul, lecture)

**Kit de Démarrage Subventionné**:
- Smartphone: 30 000 FCFA (valeur 80 000)
- Formation: Gratuit (valeur 20 000)
- Marketing: Gratuit (valeur 15 000)
- **Total**: 30 000 FCFA seulement

---

### 4.2 Opérations Quotidiennes Agent

**Acteur**: Agent opérationnel
**Objectif**: Servir clients et gérer sa liquidité

**Scénario Type - Journée d'un Agent**:

**8h00 - Ouverture**
1. Ama ouvre sa boutique et son app agent
2. Vérifie ses soldes:
   - Cash en caisse: 300 000 FCFA
   - Solde électronique (float): 450 000 FCFA
3. Compose *XXX*AGENT*1# pour signaler disponibilité (apparaît sur carte agents)

**8h30 - Premier client: Dépôt**
1. Client veut déposer 50 000 FCFA
2. Ama vérifie billets (détecteur faux billets fourni)
3. Compose *XXX*AGENT*2*NUMERO_CLIENT*50000#
4. Client reçoit code de confirmation qu'il dicte à Ama
5. Ama valide la transaction
6. **Commission gagnée**: 250 FCFA (0,5%)
7. **Nouveaux soldes**:
   - Cash: 350 000 FCFA (+50 000)
   - Float: 400 000 FCFA (-50 000)

**9h00 - Deuxième client: Retrait**
1. Client veut retirer 75 000 FCFA avec son code de retrait
2. Ama vérifie qu'elle a assez de cash (OK: 350 000)
3. Compose *XXX*AGENT*3*CODE_RETRAIT#
4. Système affiche infos client et montant
5. Vérifie ID du client
6. Remet 75 000 FCFA au client
7. **Commission gagnée**: 375 FCFA (0,5%)
8. **Nouveaux soldes**:
   - Cash: 275 000 FCFA (-75 000)
   - Float: 475 375 FCFA (+75 000 + 375)

**11h00 - Rééquilibrage Float**
- Float électronique trop élevé (475 000), cash trop bas (275 000)
- Ama va voir son super-agent ou distributeur principal
- Échange 200 000 FCFA de float contre cash
- **Nouveaux soldes**:
  - Cash: 475 000 FCFA
  - Float: 275 000 FCFA
- **Équilibre optimal restauré**

**14h00 - Enregistrement Nouveaux Clients**
- 3 nouveaux clients s'inscrivent
- **Commission**: 500 FCFA par inscription = 1 500 FCFA

**18h00 - Fin de journée**
- Ama ferme l'app agent (n'apparaît plus sur carte)
- Bilan journée:
  - 25 transactions (12 dépôts, 10 retraits, 3 inscriptions)
  - Commissions gagnées: 8 750 FCFA
  - Temps moyen par transaction: 3 minutes
  - **Revenu journalier**: ~9 000 FCFA
  - **Revenu mensuel projeté**: ~270 000 FCFA (30 jours)

**Grille de Commissions Agent**:
| Type Transaction | Commission Agent | % |
|------------------|------------------|---|
| Dépôt | 0,5% du montant | Min 50, Max 500 FCFA |
| Retrait | 0,5% du montant | Min 50, Max 500 FCFA |
| Inscription client | 500 FCFA fixe | - |
| Transfert initié | 0,3% | Min 30 FCFA |

**Note**: Commissions 30% supérieures à la concurrence

---

### 4.3 Gestion de Liquidité Agent

**Acteur**: Agent avec déséquilibre cash/float
**Objectif**: Rééquilibrer pour continuer à servir clients

**Scénario 1: Besoin de Cash (trop de float)**
1. Agent a 800 000 FCFA de float électronique mais seulement 100 000 cash
2. Ne peut plus faire de retraits clients
3. **Option A**: Va chez super-agent
   - Transfert 500 000 de float au super-agent
   - Reçoit 500 000 cash
   - Frais: 0,1% = 500 FCFA
4. **Option B**: Va en agence ou banque partenaire
   - Retire cash contre float (gratuit si >300 000)
5. **Option C**: Coordination entre agents
   - Via groupe WhatsApp agents du quartier
   - Trouve agent avec excès de cash
   - Échange peer-to-peer

**Scénario 2: Besoin de Float (trop de cash)**
1. Agent a 1 000 000 FCFA cash mais seulement 50 000 float
2. Ne peut plus faire de dépôts clients
3. **Option A**: Achète float au super-agent
   - Remet 500 000 cash au super-agent
   - Reçoit 500 000 float électronique
   - Frais: 0,1% = 500 FCFA
4. **Option B**: Dépôt en agence/banque
   - Dépose cash et reçoit crédit float (gratuit si >300 000)

**Système de Super-Agents**:
- 1 super-agent pour 20-30 agents réguliers
- Super-agent = agent avec forte liquidité (5-10M FCFA)
- Servent de "grossistes" pour rééquilibrage
- Commission: 0,1% (partagent avec plateforme)
- Localisation connue de tous les agents de la zone

**Outils de Prévision**:
- L'app agent affiche prévisions:
  - "Tendance: vos retraits > dépôts. Vous aurez besoin de cash cet après-midi"
  - "Agent Super-Plus à 800m avec liquidité disponible"
- Alertes automatiques si déséquilibre critique

---

### 4.4 Gestion de la Fraude Agent

**Acteur**: Agent face à tentative de fraude
**Objectif**: Détecter et prévenir la fraude

**Scénario 1: Faux Billet**
1. Client veut déposer 100 000 FCFA
2. Ama utilise son détecteur de faux billets (fourni)
3. Détecte un billet de 10 000 FCFA suspect
4. Refuse poliment la transaction
5. Explique au client (peut être victime lui-même)
6. Signale incident dans l'app (bouton "Signaler Fraude")
7. Équipe sécurité notifiée

**Scénario 2: Usurpation d'Identité**
1. Client présente code de retrait pour 500 000 FCFA
2. Nom affiché: "Kokou MENSAH"
3. Ama demande pièce d'identité
4. La carte montre "Yao DOSSOU" (nom différent!)
5. Ama refuse la transaction
6. Signale tentative de fraude
7. Le compte du vrai Kokou est sécurisé automatiquement
8. Kokou reçoit alerte SMS

**Scénario 3: Client Pressant/Agressif**
1. Client insiste pour retrait sans pièce d'identité
2. Ama reste calme et ferme
3. Suit la procédure: "Sans ID, impossible"
4. Si client devient menaçant, active bouton panique dans app
5. Alerte envoyée à sécurité + agents voisins
6. Numéro d'urgence contacté automatiquement

**Formations et Protections**:
- Formation anti-fraude lors onboarding
- Rafraîchissements trimestriels (webinaires)
- Système de score risque temps réel
- Assurance agent (couverture vol, agression)
- Numéro d'urgence 24/7
- Groupe WhatsApp agents (alertes communauté)

---

## 5. CAS D'USAGE GOUVERNEMENT/INSTITUTIONS

### 5.1 Distribution d'Aides Sociales

**Acteur**: Programme gouvernemental ou ONG
**Objectif**: Distribuer cash transfers aux bénéficiaires

**Scénario**: Programme "Novissi" (aide sociale COVID-19 style)
1. Ministère des Affaires Sociales identifie 50 000 bénéficiaires
2. Partenariat avec notre plateforme mobile money
3. Fourniture liste bénéficiaires (fichier sécurisé):
   - Numéro d'identification national
   - Numéro de téléphone
   - Montant allocation: 20 000 FCFA/mois
4. Bénéficiaires non enregistrés sur la plateforme:
   - SMS automatique: "Vous êtes éligible au programme. Rendez-vous chez un agent avec votre carte ID"
   - Inscription gratuite et accélérée (3 minutes)
5. Chaque 1er du mois, transfert automatique massif:
   - 50 000 × 20 000 = 1 milliard FCFA distribué
   - Frais négociés: 0,1% = 1 million FCFA
6. Chaque bénéficiaire reçoit SMS: "Aide Novissi reçue: 20 000 FCFA"
7. Peuvent retirer immédiatement ou utiliser pour achats
8. Tableau de bord gouvernement:
   - Taux de distribution: 99,8% (50 numeros invalides)
   - Taux de retrait: 85% sous 48h
   - Répartition géographique
   - Impact économique (multiplication monétaire)

**Bénéfices vs. Distribution Physique**:
- Coût: -80% (plus de logistique lourde)
- Rapidité: Instantané vs. 2-3 semaines
- Transparence: Traçabilité totale
- Sécurité: Pas de détournement
- Dignité: Pas de files d'attente humiliantes
- Inclusion: Atteint zones reculées

---

### 5.2 Collecte de Taxes et Impôts

**Acteur**: Office Togolais des Recettes (OTR)
**Objectif**: Faciliter paiement taxes pour citoyens

**Scénario**:
1. Citoyen reçoit avis d'imposition: "Taxe foncière 85 000 FCFA"
2. Référence unique: TF-2025-123456
3. Trois options de paiement:
   - **Option A (USSD)**: *XXX*5*2*TF2025123456# → paiement
   - **Option B (App)**: Menu Factures → Taxes → saisie référence
   - **Option C (Agent)**: Se rend chez agent avec référence
4. Paiement instantané
5. Reçu électronique avec cachet OTR envoyé par SMS/email
6. Quittance officielle téléchargeable
7. Compte contribuable mis à jour en temps réel

**Types de Taxes Payables**:
- Impôt sur le revenu (IUTS)
- Taxe foncière
- Patente commerciale
- Taxe véhicule
- Amendes de circulation
- Frais administratifs (passeport, acte de naissance, etc.)

**Impact**:
- Taux de recouvrement: +45%
- Coût de collecte: -60%
- Satisfaction citoyens: +80%
- Réduction corruption (traçabilité)

---

### 5.3 Paiement Salaires Fonctionnaires

**Acteur**: Direction de la Fonction Publique
**Objectif**: Payer 60 000 fonctionnaires mensuellement

**Scénario**:
1. Fin de mois: préparation paie fonctionnaires
2. Fichier massif généré par système RH gouvernemental
3. Upload sécurisé sur portail dédié (connexion VPN)
4. Validation multi-niveaux:
   - Niveau 1: DRH
   - Niveau 2: Directeur Financier
   - Niveau 3: Ministre Fonction Publique
5. Exécution batch le 28 du mois à 6h00
6. 60 000 virements exécutés en 15 minutes
7. Chaque fonctionnaire reçoit:
   - SMS: "Salaire Novembre crédité: 450 000 FCFA"
   - Bulletin de paie digital (PDF sécurisé)
8. Rapport de traitement:
   - 99,98% succès (12 comptes invalides → régularisation J+1)

**Avantages**:
- Fin des intermédiaires (Ghost workers éliminés)
- Traçabilité totale
- Réduction coûts transport espèces
- Bancarisation accrue fonctionnaires
- Ponctualité paiements (boost moral)

---

## 6. PARCOURS UTILISATEUR DÉTAILLÉS

### 6.1 Parcours: Premier Utilisateur (de Zéro à Transaction)

**Persona**: Akossi, 24 ans, vendeuse de légumes au marché, jamais utilisé mobile money

**Étape 1: Découverte (Jour 1)**
- Voit affiche colorée chez un agent: "Bonus 1 000 FCFA!"
- Curieuse, demande à l'agent (Mme Afi)
- Mme Afi explique: "Tu peux envoyer argent à ta famille sans bouger, payer électricité avec ton téléphone"

**Étape 2: Inscription (Jour 1, +10 minutes)**
1. Akossi décide d'essayer
2. Donne sa carte d'identité à Mme Afi
3. Mme Afi prend photo d'Akossi et de sa carte
4. Saisit infos: Nom, date naissance, adresse
5. Akossi reçoit SMS: "Bienvenue! PIN temporaire: 1234. Compose *XXX# pour activer"
6. Akossi compose *XXX# sur son téléphone simple (pas smartphone)
7. Menu s'affiche: "1. Changer PIN 2. Mon solde 3. Envoyer argent..."
8. Elle tape 1, puis 1234 (ancien PIN), puis choisi 5678 (nouveau PIN)
9. Confirmation: "Compte activé! Votre bonus de 1 000 FCFA sera crédité sous 24h"

**Étape 3: Premier Dépôt (Jour 2)**
1. Akossi a vendu pour 15 000 FCFA aujourd'hui
2. Veut sécuriser l'argent (marché = risque vol)
3. Retourne chez Mme Afi
4. "Je veux mettre 10 000 FCFA sur mon compte"
5. Mme Afi fait le dépôt
6. Akossi reçoit SMS: "Dépôt réussi: 10 000 FCFA. Solde: 10 000 FCFA"
7. Se sent rassurée (argent en sécurité, pas de frais de dépôt)

**Étape 4: Premier Transfert (Jour 3)**
1. Petite sœur à Kpalimé a besoin de 5 000 FCFA pour médicaments (urgence)
2. Akossi compose: *XXX*1*NUMERO_SOEUR*5000#
3. Entre PIN: 5678
4. Confirmation affichée: "Envoyer 5 000 FCFA à ADJO (9X XX XX XX). Frais: Gratuit"
5. Tape 1 pour confirmer
6. En 3 secondes: "Transfert réussi!"
7. Sœur reçoit SMS: "Tu as reçu 5 000 FCFA de AKOSSI"
8. Sœur va chez agent à Kpalimé et retire immédiatement
9. **Akossi est émerveillée**: "C'est magique! Avant je devais aller au bus, 2h de route, 3 000 FCFA transport"

**Étape 5: Première Facture (Jour 7)**
1. Reçoit SMS CEET: "Facture électricité 8 500 FCFA"
2. Se souvient que l'agent avait dit "Tu peux payer factures"
3. Compose *XXX*5*1# (1 = électricité)
4. Saisit numéro compteur
5. Système affiche: "Facture: 8 500 FCFA. Frais: 100 FCFA"
6. Confirme avec PIN
7. "Paiement réussi! Compteur rechargé"
8. **Akossi conquise**: Plus besoin faire la queue 2h au bureau CEET!

**Étape 6: Évangélisation (Jour 8+)**
- Akossi raconte à ses copines du marché
- En 1 semaine, 10 vendeuses s'inscrivent grâce à elle
- Akossi reçoit bonus parrainage: 500 FCFA × 10 = 5 000 FCFA
- **Résultat**: Utilisatrice satisfaite devient ambassadrice

**Métriques de Succès du Parcours**:
- Temps d'inscription: 10 minutes
- Time-to-first-transaction: 24h
- Taux d'activation (1ère transaction): 85%
- Taux de rétention J+30: 75%
- NPS (Net Promoter Score): 70

---

### 6.2 Parcours: Commerçant Sceptique vers Adoption

**Persona**: M. Kodjovi, 45 ans, propriétaire boutique de téléphones, Lomé

**Étape 1: Objections Initiales**
- Agent commercial nous visite: "Devenez marchand mobile money"
- M. Kodjovi sceptique:
  - "Je perds déjà 3% avec cartes bancaires"
  - "Mes clients ont déjà du cash"
  - "Trop compliqué, je n'ai pas le temps"
  - "Et si ça ne marche pas?"

**Étape 2: Argumentation Ciblée**
- Agent commercial:
  - "Première année 100% GRATUIT (0% frais)"
  - "70% des Togolais utilisent mobile money, 40% n'ont pas carte bancaire"
  - "Installation 30 minutes, aucun engagement"
  - "Augmentation panier moyen de 25% constatée chez autres marchands"
  - "Essai gratuit 3 mois, si pas satisfait, on arrête"

**Étape 3: Essai Convaincu**
- M. Kodjovi accepte d'essayer
- Inscription rapide (30 min):
  - Photos docs
  - QR code imprimé et plastifié
  - Affiche vitrine
  - Formation express app marchand
- **Jour 1**: 2 clients paient en mobile money (15 000 + 85 000 FCFA)
  - M. Kodjovi surpris de la facilité
- **Semaine 1**: 15 paiements mobile money (550 000 FCFA)
  - Constate que clients dépensent plus ("argent sur téléphone = moins visible")
- **Mois 1**: 87 paiements (3 200 000 FCFA)
  - 18% de son CA total
  - Économie temps comptage/gestion cash: 3h/semaine

**Étape 4: Adoption Enthousiaste**
- M. Kodjovi devient promoteur:
  - Affiche QR code en grand: "PAIEMENT MOBILE MONEY ACCEPTÉ"
  - Propose même 2% réduction si paiement mobile money (pour éviter frais carte bancaire)
  - Recommande à 5 commerçants voisins

**Étape 5: Utilisation Avancée (Mois 3+)**
- Découvre fonctions avancées:
  - Paiement fournisseurs direct depuis compte marchand
  - Programme fidélité pour clients récurrents
  - Export comptable automatique (Excel)
  - Prévisions de trésorerie
- **Résultat**: Efficacité opérationnelle +30%, satisfaction client améliorée

**Leçons du Parcours**:
- Offre d'essai gratuit = clé conversion
- Preuves sociales (témoignages autres marchands) importantes
- Formation simple et rapide essentielle
- Quick wins (résultats rapides) renforcent adoption

---

### 6.3 Parcours: Utilisateur Victime de Fraude → Résolution

**Persona**: Mme Abla, 38 ans, fonctionnaire, utilisatrice régulière

**Étape 1: Incident (Jour 1, 14h30)**
- Mme Abla reçoit appel d'un "agent du service client"
- Interlocuteur: "Votre compte a un problème technique, je dois vérifier"
- Demande son code PIN "pour débloquer"
- Mme Abla, stressée, donne le code
- **2 minutes plus tard**: SMS "Transfert de 150 000 FCFA effectué"
- Mme Abla panique: "Je n'ai rien fait!"

**Étape 2: Signalement Immédiat (Jour 1, 14h35)**
1. Mme Abla compose *XXX*9*1# (Urgence - Bloquer compte)
2. Ou appelle 8888 (hotline gratuite)
3. Opérateur répond en 45 secondes
4. Mme Abla explique situation
5. **Opérateur actions immédiates**:
   - Bloque le compte de Mme Abla (plus aucune transaction possible)
   - Bloque le compte destinataire des 150 000 FCFA
   - Lance procédure d'investigation fraude
   - Enregistre plainte formale
6. Mme Abla reçoit numéro de dossier: FRAUD-2025-123456
7. Durée totale: 5 minutes

**Étape 3: Investigation (Jour 1-3)**
1. Équipe anti-fraude analyse:
   - Logs de transaction
   - Localisation (tour cellulaire)
   - Historique compte fraudeur
   - Pattern de fraude connu (oui: "social engineering")
2. Identifie que:
   - Compte bénéficiaire = fraudeur connu (3e incident)
   - N'a pas encore retiré l'argent (compte bloqué à temps)
   - Numéro utilisé pour appeler Mme Abla identifié
3. Collaboration avec Police / Gendarmerie
4. Fraudeur localisé et interpellé (Jour 3)

**Étape 4: Restitution (Jour 4)**
1. Mme Abla reçoit appel équipe fraude
2. "Bonne nouvelle: argent récupéré, fraudeur arrêté"
3. Recréditation immédiate: 150 000 FCFA
4. Bonus geste commercial: 10 000 FCFA
5. Réactivation compte avec nouveau PIN
6. Mme Abla reçoit SMS: "Compte réactivé. Solde: 160 000 FCFA"

**Étape 5: Prévention (Jour 5+)**
1. Mme Abla reçoit appel service client (suivi)
2. Explication des bonnes pratiques:
   - **JAMAIS donner son PIN** (même à agent/service client)
   - Vérifier numéros appelants (numéro officiel: 8888)
   - Activer notifications SMS pour chaque transaction
   - Définir limites journalières personnalisées
3. Mme Abla active:
   - Double authentification (PIN + biométrie)
   - Limite transferts: 50 000 FCFA/jour
   - Alerte SMS pour toute transaction >10 000 FCFA
4. Inscrite à newsletter sécurité (conseils mensuels)

**Résultat**:
- Problème résolu en 4 jours
- Argent récupéré à 100% + compensation
- Mme Abla rassurée et plus vigilante
- Continue d'utiliser le service (confiance restaurée)

**Métriques Anti-Fraude**:
- Temps de blocage compte: <5 min après signalement
- Taux de récupération fonds: 87% (si signalement <24h)
- Taux de résolution fraudes: 92%
- Taux de fraude global: <0,08% (vs. 0,15% moyenne marché)

---

## 7. MATRICE DE PRIORISATION DES CAS D'USAGE

### Phase de Lancement (Mois 1-6)
**MVP - Fonctions Essentielles**

| Cas d'Usage | Priorité | Justification |
|-------------|----------|---------------|
| Inscription/KYC | P0 (Critique) | Porte d'entrée obligatoire |
| Dépôt argent | P0 | Service de base vital |
| Retrait argent | P0 | Service de base vital |
| Transfert P2P intra-réseau | P0 | Use case principal (60% volume) |
| Consultation solde/historique | P0 | Confiance utilisateur |
| Paiement factures (CEET, TdE) | P1 (Important) | Différenciateur vs. concurrence |
| Opérations agents de base | P0 | Backbone du système |
| Recharge téléphone | P1 | Quick win, forte demande |

### Phase d'Expansion (Mois 7-18)
**Fonctionnalités Différenciantes**

| Cas d'Usage | Priorité | Justification |
|-------------|----------|---------------|
| Transfert inter-opérateurs | P1 | Interopérabilité mandatée |
| Paiements marchands (QR) | P1 | Croissance revenus B2B2C |
| Épargne simple | P2 | Fidélisation, revenus intérêts |
| Bulk payments B2B | P1 | Revenus élevés, faible coût |
| APIs e-commerce | P2 | Écosystème digital |
| Programme fidélité basique | P2 | Rétention utilisateurs |

### Phase de Consolidation (Mois 19-36)
**Services Avancés**

| Cas d'Usage | Priorité | Justification |
|-------------|----------|---------------|
| Micro-crédit | P1 | Revenus élevés, forte demande |
| Assurance micro | P2 | Impact social, revenus récurrents |
| Épargne bloquée/tontines | P2 | Différenciation forte |
| Transferts internationaux | P2 | Diaspora importante |
| Services gouvernementaux | P1 | Volume massif, stabilité |
| Analytics avancés marchands | P3 | Valeur ajoutée B2B |

---

## CONCLUSION

Ces cas d'usage détaillés couvrent l'ensemble de l'écosystème mobile money pour le Togo. La clé du succès réside dans:

1. **Simplicité d'utilisation**: Interfaces USSD et app intuitives
2. **Fiabilité**: Disponibilité 99,9%, transactions <30 secondes
3. **Sécurité**: Multi-couches, anti-fraude proactif
4. **Prix compétitifs**: -20% vs. concurrence
5. **Excellence du service**: Support client réactif, résolution rapide problèmes
6. **Réseau d'agents dense**: 1 agent pour 850 habitants (objectif an 3)
7. **Innovation continue**: Nouveaux services trimestriels

La stratégie de déploiement progressif (MVP → Expansion → Consolidation) permet de valider le modèle, ajuster selon feedback terrain, et scaling maîtrisé.

---

**Document préparé le**: 11 novembre 2025
**Version**: 1.0
**Confidentialité**: Strictement confidentiel
