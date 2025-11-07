---
marp: true
theme: default
paginate: true
backgroundColor: #fff
---

# BIAIS, SÉCURITÉ & VIE PRIVÉE

## Conférence IA Responsable

**Formation Executive IA - Jour 4**
90 minutes

---

# Plan

**30 min:** Biais algorithmiques
**30 min:** Sécurité des données
**30 min:** Respect vie privée

---

# PARTIE 1: BIAIS ALGORITHMIQUES

---

# Qu'est-ce qu'un biais?

> IA traite différemment des groupes de façon injustifiée

**Exemples:**
- Crédit refusé aux femmes entrepreneures
- Recrutement écartant certaines régions
- Tarification pénalisant personnes âgées

---

# 3 sources de biais

1. Biais dans les **DONNÉES**
2. Biais dans la **CONCEPTION**
3. Biais dans **L'UTILISATION**

---

# Biais #1: Données

**Exemple: IA recrutement managers**

Données: 90 hommes, 10 femmes managers

IA apprend: "bon manager = homme"

Résultat: Pénalise candidatures féminines

---

# Pourquoi ça arrive?

- Données historiques = discriminations passées
- Sous-représentation certains groupes
- Données déséquilibrées

**Solutions:**
- Auditer données
- Équilibrer datasets
- Diversifier sources

---

# Biais #2: Conception

**Exemple: Reconnaissance faciale**

Dev majoritairement caucasiens/asiatiques

Tests sur peaux claires uniquement

**Résultat:**
34% erreur femmes noires
1% erreur hommes blancs

---

# Pourquoi ça arrive?

- Équipes peu diversifiées
- Tests non représentatifs
- Variables proxy cachées

**Solutions:**
- Diversifier équipes
- Tester populations variées
- Auditer variables

---

# Biais #3: Utilisation

**Exemple: Évaluation employés**

Outil objectif, mais:
- Managers l'utilisent différemment
- Interprétations subjectives
- Confiance aveugle

**Résultat:** Discriminations

---

# Exercice: Spot the Bias

**Prêt bancaire togolais**

Variables:
- Revenu ✅
- Historique bancaire ⚠️
- Niveau éducation ⚠️
- **Code postal** ❌
- **Langue principale** ❌

---

# Détecter les biais

**Analyse d'impact différencié**

```
Système recrutement:

Hommes acceptés: 18%
Femmes acceptées: 9%
Ratio: 2:1 → ⚠️ BIAIS

Seuils alerte:
> 1.25 → Investiguer
> 1.5 → Problème sérieux
> 2.0 → Discrimination probable
```

---

# Tests d'équité

**Parité démographique:**
Groupes obtiennent résultats similaires?

**Égalité opportunités:**
Candidats qualifiés traités pareil?

**Note:** Impossible de tout satisfaire!
Choisir selon contexte

---

# Atténuer les biais

**Stratégie #1:** Pré-traitement données
**Stratégie #2:** Contraintes algorithmiques
**Stratégie #3:** Post-traitement résultats
**Stratégie #4:** Human-in-the-loop ✅

---

# Human-in-the-loop

```
1. IA génère recommandations
2. Humain qualifié révise
3. Décision = HUMAIN (assisté IA)
```

**Avantages:**
- Détection anomalies
- Contexte pris en compte
- Responsabilité claire

---

# PARTIE 2: SÉCURITÉ DONNÉES

---

# Pourquoi IA = + risques?

**1.** Volume données massif
**2.** Données souvent sensibles
**3.** Nouveaux vecteurs d'attaque

- Adversarial attacks
- Model extraction
- Data poisoning

---

# 7 principes sécurité IA

1. Chiffrement systématique
2. Contrôle accès granulaire
3. Anonymisation/Pseudonymisation
4. Environnements séparés
5. Audits réguliers
6. Plan réponse incidents
7. Culture de sécurité

---

# Principe #1: Chiffrement

**Données au repos:**
❌ Fichier CSV en clair
✅ Chiffré AES-256

**Données en transit:**
❌ HTTP non sécurisé
✅ HTTPS + SSL/TLS

---

# Principe #2: Contrôle accès

**Moindre privilège:**

- Recruteur: CVs uniquement
- RH: Employés actuels
- Manager: Son équipe
- Admin IT: Accès technique
- IA: Données anonymisées

---

# Principe #3: Anonymisation

**Données originales:**
Koffi Mensah, 34 ans, Nyékonakpoè, 450K FCFA

**Anonymisées:**
ID 7B3F9A, 30-40 ans, Maritime, 400-500K

**→ Impossible retrouver identité**

---

# Principe #4: Environnements

```
DEV
- Données fictives
- Tests sans risque

STAGING
- Données limitées
- Tests pré-déploiement

PRODUCTION
- Données complètes
- Accès ultra-restreint + 2FA
```

---

# Principe #5: Audits

**Trimestriel:**
- Pentests
- Revue accès
- Logs suspects
- Mises à jour

**Annuel:**
- Red teaming

---

# Principe #6: Plan incident

```
1. CONTENIR (0-1h)
2. ÉVALUER (1-4h)
3. NOTIFIER (4-24h)
4. REMÉDIER (1-7 jours)
5. APPRENDRE (après)
```

---

# Pour PME togolaises

**Niveau 1: MINIMUM (gratuit)**
- Mots de passe + 2FA
- HTTPS partout
- Sauvegardes régulières

**Niveau 2: STANDARD (modéré)**
- + Chiffrement DB
- + VPN
- + Monitoring

---

# Outils gratuits

**Chiffrement:**
VeraCrypt, Let's Encrypt, GnuPG

**Accès:**
Bitwarden, Authentik, Authelia

**Monitoring:**
Wazuh, OSSEC, Grafana

---

# PARTIE 3: VIE PRIVÉE

---

# Menace IA sur vie privée

**Inférence massive:**

Données anodines:
- Achats supermarché
- Recherches Google
- Likes Facebook

IA infère:
- Orientation sexuelle (95%)
- Opinions politiques (85%)
- Grossesse (avant vous!)

---

# RGPD - 7 principes

1. Consentement explicite
2. Minimisation données
3. Transparence
4. Droit d'accès
5. Droit à l'oubli
6. Portabilité
7. Notification breach (72h)

---

# Loi togolaise

**Autorité:** CNPD Togo

**Obligations:**
- Déclaration traitements
- Sécurisation
- Consentement
- Notification 48h
- DPO si >20 employés

**Sanctions:** Jusqu'à 100M FCFA

---

# Privacy by Design

**7 principes:**
1. Proactif
2. Protection par défaut
3. Intégré au design
4. Win-win
5. Bout en bout
6. Transparence
7. Respect utilisateur

---

# Proactif vs Réactif

❌ Attendre fuite pour agir

✅ Anticiper dès conception
- Privacy Impact Assessment
- Tests sécurité intégrés
- Revue continue

---

# Protection par défaut

❌ Tout partagé, opt-out

✅ Privacy max, opt-in

**Paramètres par défaut = protection maximale**

---

# Cas pratique: IA RH

PME 80 employés, IA évaluation performance

**Mesures sécurité:**
- Chiffrement AES-256
- HTTPS uniquement
- Accès par rôle + 2FA
- Logs complets
- Données anonymisées

---

# Respect vie privée

**Consentement:**
Réunion explicative + droit refus

**Minimisation:**
Données strictement nécessaires

**Transparence:**
Employé voit données + score

**Droits:**
Correction, contestation, suppression

---

# Checklist Privacy

□ Privacy Impact Assessment
□ Consentement obtenu
□ Données minimales
□ Chiffrement
□ Accès contrôlés
□ Logs activés
□ DPO nommé
□ Plan incident

Score: ___ /15

---

# 10 Commandements IA

1. Données, tu auditeras
2. Biais, tu détecteras
3. Équitable, tu seras
4. Systèmes, tu chiffreras
5. Accès, tu restreindras

---

# 10 Commandements (suite)

6. Vie privée, tu protégeras
7. Transparent, tu resteras
8. Responsable, tu nommeras
9. Régulièrement, tu auditeras
10. Continuellement, tu apprendras

---

# Questions fréquentes

**"Trop compliqué pour PME?"**
Non! Commencez niveau 1

**"Ça coûte combien?"**
Minimal = gratuit
Standard = 1-2% budget IT

**"Si on fait rien?"**
Coût non-conformité >>> conformité

---

# À retenir

Biais = **Auditer, tester, atténuer**

Sécurité = **Chiffrer, restreindre, surveiller**

Privacy = **By design, pas après**

**Humain toujours responsable**

---

# Prochaine session

**Atelier Débat:**
Souveraineté Numérique Africaine

11h15 - 12h30
