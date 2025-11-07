# 🔧 SOLUTIONS: WORKFLOWS NO-CODE COMPLETS

**Document formateur:** Exemples de workflows no-code prêts à l'emploi

---

## 📧 WORKFLOW 1: ASSISTANT EMAIL IA (COMPLET)

### Vue d'ensemble

**Objectif:** Trier automatiquement les emails professionnels et générer des brouillons de réponse avec IA

**Outils utilisés:**
- Gmail (trigger)
- OpenAI GPT-3.5-turbo (analyse + génération)
- Make.com (orchestration)
- Notion (gestion tâches)
- Gmail (actions)

**Fréquence:** Toutes les 15 minutes
**Opérations:** ~300/jour (~9 000/mois)
**Coût:** 6 000 FCFA/mois Make + 500 FCFA/mois OpenAI

---

### Configuration détaillée Make.com

#### MODULE 1: Trigger Gmail

**Type:** Gmail > Watch Emails
**Configuration:**
```json
{
  "folder": "INBOX",
  "criteria": {
    "isUnread": true,
    "hasAttachment": false
  },
  "maxResults": 10
}
```

**Données en sortie:**
- `{{1.id}}` = ID email
- `{{1.from}}` = Expéditeur
- `{{1.subject}}` = Sujet
- `{{1.text}}` = Corps de l'email
- `{{1.date}}` = Date de réception

---

#### MODULE 2: Analyse IA (Catégorisation)

**Type:** OpenAI > Create a Chat Completion

**Configuration:**
```json
{
  "model": "gpt-3.5-turbo",
  "temperature": 0.1,
  "max_tokens": 50,
  "messages": [
    {
      "role": "system",
      "content": "Tu es un assistant de tri d'emails professionnel pour une entreprise togolaise. Analyse les emails et catégorise-les précisément."
    },
    {
      "role": "user",
      "content": "Catégorise cet email en UNE catégorie parmi: URGENT, NORMAL, SPAM\n\nSujet: {{1.subject}}\nDe: {{1.from}}\nContenu: {{1.text}}\n\nRéponds UNIQUEMENT par le nom de la catégorie."
    }
  ]
}
```

**Prompt optimisé pour le contexte togolais:**
```
Tu es un assistant de tri d'emails pour une entreprise au Togo.

Règles de catégorisation:
- URGENT: Clients mécontents, problèmes techniques, demandes de devis importants, urgences opérationnelles
- NORMAL: Questions clients standards, demandes d'information, emails internes, newsletters pertinentes
- SPAM: Publicités, emails marketing non sollicités, phishing

Email à analyser:
Sujet: {{1.subject}}
De: {{1.from}}
Contenu: {{1.text}}

Catégorie:
```

**Données en sortie:**
- `{{2.choices[0].message.content}}` = "URGENT" ou "NORMAL" ou "SPAM"

---

#### MODULE 3: Router (Branchement conditionnel)

**Type:** Flow Control > Router

**3 chemins configurés:**

**Route 1 - URGENT:**
- **Condition:** `{{2.choices[0].message.content}}` contient "URGENT"
- **Label:** "Emails Urgents"

**Route 2 - NORMAL:**
- **Condition:** `{{2.choices[0].message.content}}` contient "NORMAL"
- **Label:** "Emails Normaux"

**Route 3 - SPAM:**
- **Condition:** `{{2.choices[0].message.content}}` contient "SPAM"
- **Label:** "Spam à archiver"

---

#### ROUTE 1: TRAITEMENT EMAILS URGENTS

##### MODULE 4a: Génération réponse IA

**Type:** OpenAI > Create a Chat Completion

**Configuration:**
```json
{
  "model": "gpt-4",
  "temperature": 0.7,
  "max_tokens": 300,
  "messages": [
    {
      "role": "system",
      "content": "Tu es un assistant professionnel pour une entreprise togolaise. Rédige des réponses courtoises et professionnelles en français."
    },
    {
      "role": "user",
      "content": "Génère un brouillon de réponse URGENT à cet email:\n\nEmail reçu:\nSujet: {{1.subject}}\nDe: {{1.from}}\nContenu: {{1.text}}\n\nConsignes:\n- Ton professionnel et empathique\n- Reconnaître l'urgence\n- Proposer une action concrète rapide\n- Maximum 150 mots\n- Signer par 'L'équipe [NomEntreprise]'"
    }
  ]
}
```

##### MODULE 4b: Notification Email Urgente

**Type:** Gmail > Send an Email

**Configuration:**
```
To: manager@entreprise.tg
Subject: 🚨 EMAIL URGENT - {{1.subject}}
Body:
Un email urgent nécessite votre attention immédiate.

DE: {{1.from}}
SUJET: {{1.subject}}
REÇU: {{1.date}}

CONTENU:
{{1.text}}

---
RÉPONSE SUGGÉRÉE PAR IA:
{{4.choices[0].message.content}}

---
Action: Réviser et envoyer la réponse dans les 2h
Lien email: https://mail.google.com/mail/u/0/#inbox/{{1.id}}
```

##### MODULE 4c: Créer tâche Notion URGENTE

**Type:** Notion > Create a Database Item

**Configuration:**
```json
{
  "database_id": "YOUR_NOTION_DATABASE_ID",
  "properties": {
    "Titre": "🚨 URGENT: Répondre à {{1.from}}",
    "Statut": "À faire immédiatement",
    "Priorité": "Urgent",
    "Type": "Email",
    "Échéance": "{{addDays(now; 0)}}",
    "Description": "Sujet: {{1.subject}}\n\nContenu:\n{{1.text}}\n\nRéponse suggérée:\n{{4.choices[0].message.content}}",
    "Email ID": "{{1.id}}"
  }
}
```

---

#### ROUTE 2: TRAITEMENT EMAILS NORMAUX

##### MODULE 5a: Génération réponse IA

**Type:** OpenAI > Create a Chat Completion

**Configuration similaire à 4a mais avec:**
```
Consignes:
- Ton professionnel et courtois
- Réponse complète et détaillée
- Maximum 200 mots
- Proposer un suivi si nécessaire
```

##### MODULE 5b: Créer brouillon Gmail

**Type:** Gmail > Create a Draft

**Configuration:**
```
To: {{1.from}}
Subject: Re: {{1.subject}}
Body: {{5.choices[0].message.content}}
```

##### MODULE 5c: Créer tâche Notion NORMALE

**Type:** Notion > Create a Database Item

**Configuration:**
```json
{
  "properties": {
    "Titre": "Réviser brouillon: {{1.from}}",
    "Statut": "En attente révision",
    "Priorité": "Normal",
    "Échéance": "{{addDays(now; 1)}}",
    "Description": "Brouillon généré automatiquement - à réviser et envoyer dans les 24h"
  }
}
```

---

#### ROUTE 3: TRAITEMENT SPAM

##### MODULE 6a: Déplacer vers Spam

**Type:** Gmail > Move an Email

**Configuration:**
```json
{
  "emailId": "{{1.id}}",
  "destinationFolder": "SPAM"
}
```

##### MODULE 6b: Logger dans Airtable

**Type:** Airtable > Create a Record

**Configuration:**
```json
{
  "baseId": "YOUR_AIRTABLE_BASE",
  "tableId": "Spam_Logs",
  "fields": {
    "Date": "{{1.date}}",
    "De": "{{1.from}}",
    "Sujet": "{{1.subject}}",
    "Raison": "Détecté comme spam par IA"
  }
}
```

---

### Captures d'écran du workflow

**Vue d'ensemble du scénario:**
```
┌─────────────┐
│  Gmail      │ ← Trigger toutes les 15 min
│  Watch      │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│  OpenAI     │ ← Catégorisation
│  Analyse    │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   Router    │ ← Branchement 3 voies
└──┬────┬────┬┘
   │    │    │
   ↓    ↓    ↓
 URGENT NORMAL SPAM
```

---

### Résultats attendus

**Métriques de performance:**
- 85% des emails correctement catégorisés
- Temps de première réponse: 15 min (vs 4h avant)
- 70% des brouillons utilisables avec modifications mineures
- Réduction charge travail: 60%

**ROI:**
- Temps économisé: 20h/mois
- Coût: 6 500 FCFA/mois
- Valeur temps: 20h × 5 000 FCFA = 100 000 FCFA/mois
- **ROI: 1 438%**

---

## 📊 WORKFLOW 2: ANALYSEUR DE FEEDBACK CLIENTS

### Vue d'ensemble

**Objectif:** Collecter automatiquement les feedbacks clients via Google Forms, les analyser avec IA et générer des alertes

**Outils:**
- Google Forms (collecte)
- OpenAI GPT-4 (analyse de sentiment)
- Airtable (stockage structuré)
- Slack (alertes équipe)
- Looker Studio (dashboard)

---

### Configuration

#### MODULE 1: Trigger Google Forms

**Type:** Google Forms > Watch Responses

**Configuration:**
```json
{
  "formId": "YOUR_FORM_ID",
  "triggerOn": "newResponse"
}
```

**Données collectées:**
- Nom client
- Email
- Note satisfaction (1-5)
- Commentaire libre
- Type de service
- Date

---

#### MODULE 2: Analyse sentiment IA

**Type:** OpenAI > Create a Chat Completion

**Prompt optimisé:**
```
Tu es un analyste de satisfaction client pour une entreprise au Togo.

Analyse ce feedback client et fournis:
1. Sentiment global (POSITIF / NEUTRE / NÉGATIF)
2. Émotions détectées (joie, frustration, colère, satisfaction, déception)
3. Thèmes principaux (qualité, prix, service, délais, etc.)
4. Niveau d'urgence (URGENT si client très mécontent, NORMAL sinon)
5. Action recommandée (en 1 phrase)

Feedback:
Note: {{1.note}}/5
Commentaire: {{1.commentaire}}
Service: {{1.service}}

Réponds au format JSON:
{
  "sentiment": "...",
  "emotions": ["...", "..."],
  "themes": ["...", "..."],
  "urgence": "...",
  "action": "..."
}
```

---

#### MODULE 3: Parser JSON

**Type:** Tools > Parse JSON

**Configuration:**
```json
{
  "jsonString": "{{2.choices[0].message.content}}"
}
```

---

#### MODULE 4: Enregistrer dans Airtable

**Type:** Airtable > Create a Record

**Configuration:**
```json
{
  "fields": {
    "Date": "{{1.timestamp}}",
    "Client": "{{1.nom}}",
    "Email": "{{1.email}}",
    "Note": "{{1.note}}",
    "Commentaire": "{{1.commentaire}}",
    "Service": "{{1.service}}",
    "Sentiment": "{{3.sentiment}}",
    "Emotions": "{{join(3.emotions; ', ')}}",
    "Themes": "{{join(3.themes; ', ')}}",
    "Urgence": "{{3.urgence}}",
    "Action": "{{3.action}}",
    "Statut": "Nouveau"
  }
}
```

---

#### MODULE 5: Router (Alerte si négatif)

**Type:** Flow Control > Router

**Condition:** `{{3.sentiment}}` égal à "NÉGATIF" OU `{{1.note}}` inférieur à 3

---

#### MODULE 6: Alerte Slack

**Type:** Slack > Send a Message

**Configuration:**
```
Channel: #satisfaction-clients
Message:
⚠️ FEEDBACK CLIENT NÉGATIF ⚠️

Client: {{1.nom}} ({{1.email}})
Note: {{1.note}}/5
Service: {{1.service}}

Commentaire:
> {{1.commentaire}}

📊 Analyse IA:
• Sentiment: {{3.sentiment}}
• Émotions: {{join(3.emotions; ', ')}}
• Thèmes: {{join(3.themes; ', ')}}

🎯 Action recommandée:
{{3.action}}

👉 Traiter dans les 24h: [Lien Airtable]
```

---

### Dashboard Looker Studio (Description)

**Widgets:**
1. **KPI Cards:**
   - NPS (Net Promoter Score)
   - Note moyenne satisfaction
   - % feedbacks positifs/négatifs
   - Temps de réponse moyen

2. **Graphiques:**
   - Évolution satisfaction dans le temps
   - Distribution des notes (histogramme)
   - Nuage de mots des thèmes
   - Sentiment par service

3. **Tableaux:**
   - Top 5 problèmes récurrents
   - Feedbacks négatifs non traités
   - Comparaison mois vs mois précédent

**Lien données:** Airtable connecté via API

---

### Résultats

**Avant automatisation:**
- Feedbacks collectés: 60% (papier + quelques emails)
- Analyse: manuelle, 5h/mois
- Réactivité: 5-7 jours
- Insights: limités

**Après automatisation:**
- Feedbacks: 95% (formulaire simple)
- Analyse: instantanée par IA
- Réactivité: <24h pour négatifs
- Insights: dashboards temps réel

**ROI:**
- Temps économisé: 15h/mois (75 000 FCFA)
- Amélioration satisfaction: +18 points NPS
- Coût: 8 000 FCFA/mois
- **ROI: 838%**

---

## 🌾 WORKFLOW 3: ASSISTANT AGRICOLE WHATSAPP

### Vue d'ensemble

**Objectif:** Chatbot WhatsApp qui répond aux questions techniques des agriculteurs en temps réel

**Architecture:**
```
[Agriculteur] ← WhatsApp Business
     ↕️
[Twilio WhatsApp API]
     ↕️
[Make.com]
     ↕️
[Airtable FAQ] + [OpenAI GPT-4] + [Base connaissances]
     ↕️
[Logging & Analytics]
```

---

### Configuration détaillée

#### MODULE 1: Webhook WhatsApp

**Type:** Webhook > Custom Webhook

**Configuration:**
- URL webhook: `https://hook.make.com/xxxxx`
- Méthode: POST
- Connecté à Twilio WhatsApp API

**Données reçues:**
```json
{
  "from": "+22890123456",
  "body": "Comment traiter le mildiou sur le maïs?",
  "timestamp": "2025-11-07T10:30:00Z"
}
```

---

#### MODULE 2: Recherche FAQ Airtable

**Type:** Airtable > Search Records

**Configuration:**
```json
{
  "baseId": "FAQ_Agriculture",
  "tableId": "Questions",
  "filterByFormula": "SEARCH(LOWER('{{1.body}}'), LOWER({Question})) > 0",
  "maxRecords": 3
}
```

**Si correspondance trouvée:**
- Retourne réponse pré-écrite (rapide, gratuit, précis)

**Si aucune correspondance:**
- Passe au module IA

---

#### MODULE 3: Analyse question avec IA

**Type:** OpenAI > Create a Chat Completion

**Prompt expert agronomie:**
```
Tu es un agronome expert spécialisé dans l'agriculture au Togo (maïs, riz, cultures maraîchères, cacao).

Question de l'agriculteur: {{1.body}}

Fournis une réponse:
1. Claire et actionnable
2. Adaptée au contexte togolais (climat, ressources locales)
3. Avec étapes concrètes à suivre
4. Mentionnant produits/intrants disponibles localement
5. Maximum 200 mots
6. En français simple

Si la question est hors de ton domaine (non agricole), réponds:
"Je suis spécialisé en conseil agricole. Pour cette question, contactez notre service général au +228 XX XX XX XX."
```

**Configuration:**
```json
{
  "model": "gpt-4",
  "temperature": 0.3,
  "max_tokens": 400,
  "messages": [
    {
      "role": "system",
      "content": "[Context: Base de connaissances agronomiques Togo - 500 fiches techniques]"
    },
    {
      "role": "user",
      "content": "[Prompt ci-dessus]"
    }
  ]
}
```

---

#### MODULE 4: Enrichissement réponse

**Type:** Text Aggregator

**Combine:**
- Réponse IA
- Lien vers fiche technique détaillée (si existe)
- Contact agronome humain (si question complexe)

**Format final:**
```
Bonjour! Voici ma réponse:

{{reponse_IA}}

📄 Fiche détaillée: [lien]

Des questions? Appelez notre agronome:
📞 +228 XX XX XX XX
⏰ Lun-Ven 8h-17h

Bonne journée! 🌱
```

---

#### MODULE 5: Envoi réponse WhatsApp

**Type:** Twilio > Send WhatsApp Message

**Configuration:**
```json
{
  "to": "{{1.from}}",
  "body": "{{4.aggregatedText}}"
}
```

---

#### MODULE 6: Logging complet

**Type:** Airtable > Create a Record

**Table:** Historique_Conversations

**Champs:**
```json
{
  "Date": "{{1.timestamp}}",
  "Telephone": "{{1.from}}",
  "Question": "{{1.body}}",
  "Source_Reponse": "{{if(2.totalRecords > 0; 'FAQ'; 'IA')}}",
  "Reponse": "{{4.aggregatedText}}",
  "Satisfaction": "[À remplir par feedback]",
  "Tokens_Utilises": "{{3.usage.total_tokens}}",
  "Cout": "{{3.usage.total_tokens * 0.00003}}",
  "Langue_Detectee": "Français"
}
```

---

#### MODULE 7: Feedback automatique (24h après)

**Type:** Schedule + Twilio

**Envoi après 24h:**
```
Bonjour! Nous espérons que notre conseil vous a aidé.

Évaluez notre réponse d'hier:
👍 Très utile
😐 Moyen
👎 Pas utile

Merci! 🙏
```

---

### Base de connaissances Airtable

**Structure table FAQ:**
| Champ | Type | Exemple |
|-------|------|---------|
| Question | Texte long | "Comment traiter le mildiou du maïs?" |
| Mots_Cles | Tags | mildiou, maïs, maladie, traitement |
| Reponse | Texte long | "Le mildiou se traite avec..." |
| Culture | Select | Maïs |
| Categorie | Select | Maladies |
| Priorite | Select | Fréquent |
| Fiche_Technique_URL | URL | https://... |
| Nb_Fois_Utilisee | Nombre | 42 |
| Derniere_Maj | Date | 2025-11-01 |

**500+ entrées couvrant:**
- Maladies et ravageurs
- Techniques de culture
- Irrigation et fertilisation
- Récolte et stockage
- Météo et calendrier cultural

---

### Analytics et amélioration continue

**Dashboard Make.com:**
- Nombre de questions/jour
- % réponses FAQ vs IA
- Coût quotidien OpenAI
- Temps de réponse moyen

**Dashboard Airtable:**
- Questions les plus fréquentes
- Satisfaction moyenne
- Taux de rappel agronome
- Nouvelles questions à ajouter à la FAQ

**Processus d'amélioration:**
1. Chaque semaine: Analyser nouvelles questions
2. Identifier celles posées >5 fois
3. Créer entrée FAQ pour ces questions
4. Réduire progressivement utilisation (et coût) IA

---

### Résultats

**Métriques (après 3 mois):**
- 450 agriculteurs utilisateurs actifs
- 1 200 questions traitées/mois
- 82% satisfaction (feedback)
- 3 min temps de réponse moyen

**Économies:**
- Avant: 3 agronomes × 40h/mois conseil téléphonique = 600 000 FCFA
- Après: 70% questions automatisées = 180 000 FCFA économisés
- Coût système: 50 000 FCFA/mois
- **ROI: 260%**

**Impact social:**
- Accès 24/7 aux conseils
- Agriculteurs zones reculées servis
- Réactivité améliorée (3 min vs 2 jours)
- Traçabilité et capitalisation des savoirs

---

## 🛍️ WORKFLOW 4: PRÉDICTION STOCKS & AUTO-COMMANDES

### Vue d'ensemble

**Objectif:** Analyser historique des ventes, prédire besoins en stock et générer automatiquement les bons de commande

**Outils:**
- Google Sheets (données ventes)
- OpenAI GPT-4 (analyse prédictive)
- Make.com (orchestration)
- Gmail (envoi commandes)

---

### Configuration

#### MODULE 1: Trigger quotidien

**Type:** Schedule > Every Day at 6:00 AM

---

#### MODULE 2: Récupération données Google Sheets

**Type:** Google Sheets > Search Rows

**Configuration:**
```json
{
  "spreadsheetId": "YOUR_SHEET_ID",
  "sheetName": "Ventes_Quotidiennes",
  "range": "A1:F1000",
  "searchCriteria": {
    "date": ">= {{addDays(now; -60)}}"
  }
}
```

**Données extraites (60 derniers jours):**
- Date
- Produit
- Quantité vendue
- Stock restant
- Prix
- Catégorie

---

#### MODULE 3: Agrégation données par produit

**Type:** Tools > Array Aggregator

**Grouper par:** Produit
**Calculer:**
- Total vendu 60j
- Moyenne quotidienne
- Stock actuel
- Tendance (croissant/stable/décroissant)

---

#### MODULE 4: Analyse prédictive IA

**Type:** OpenAI > Create a Chat Completion

**Prompt expert supply chain:**
```
Tu es un expert en gestion des stocks pour un commerce au Togo.

Analyse ces données de ventes des 60 derniers jours et prédit les besoins en réapprovisionnement pour les 14 prochains jours.

DONNÉES PAR PRODUIT:
{{forEach(3.array; product;
  "Produit: " + product.nom +
  "\nVentes 60j: " + product.total + " unités" +
  "\nMoyenne/jour: " + product.moyenne + " unités" +
  "\nStock actuel: " + product.stock + " unités" +
  "\nTendance: " + product.tendance +
  "\n---"
)}}

CONTEXTE:
- Délai livraison fournisseur: 5 jours
- Stock sécurité souhaité: 7 jours de ventes
- Budget max: 500 000 FCFA

CONSIGNES:
1. Calcule pour chaque produit:
   - Prévision ventes 14 jours
   - Stock minimum (ventes 7j)
   - Quantité à commander
   - Urgence (1-5)

2. Priorise les commandes selon urgence et budget

3. Fournis réponse en JSON:
{
  "date_analyse": "...",
  "produits": [
    {
      "nom": "...",
      "prevision_14j": XX,
      "stock_actuel": XX,
      "stock_minimum": XX,
      "quantite_commander": XX,
      "urgence": X,
      "justification": "..."
    }
  ],
  "total_commande_fcfa": XXXX,
  "alertes": ["..."]
}
```

**Configuration:**
```json
{
  "model": "gpt-4",
  "temperature": 0.2,
  "max_tokens": 1500
}
```

---

#### MODULE 5: Parser JSON

**Type:** Tools > Parse JSON

---

#### MODULE 6: Filtrer produits à commander

**Type:** Flow Control > Filter

**Condition:** `{{5.quantite_commander}}` supérieur à 0

---

#### MODULE 7: Générer bon de commande

**Type:** Google Docs > Create a Document from Template

**Template Google Docs:**
```
SOCIÉTÉ: [Nom entreprise]
DATE: {{formatDate(now; "DD/MM/YYYY")}}

BON DE COMMANDE N° {{formatDate(now; "YYYYMMDD")}}-{{random(1000;9999)}}

FOURNISSEUR: [Nom fournisseur]
ADRESSE: [Adresse]

PRODUITS COMMANDÉS:
{{forEach(6.array; item;
  item.nom + " - Quantité: " + item.quantite_commander + " unités - Justification: " + item.justification + "\n"
)}}

TOTAL ESTIMÉ: {{5.total_commande_fcfa}} FCFA

LIVRAISON SOUHAITÉE: {{formatDate(addDays(now; 5); "DD/MM/YYYY")}}

Signature: _______________
Date: _______________
```

---

#### MODULE 8a: Envoi email fournisseur

**Type:** Gmail > Send an Email

**Configuration:**
```
To: fournisseur@exemple.tg
Cc: gestion@votreentreprise.tg
Subject: Commande réapprovisionnement - {{formatDate(now; "DD/MM/YYYY")}}

Bonjour,

Veuillez trouver ci-joint notre bon de commande pour réapprovisionnement.

Détails de la commande:
• Date limite livraison: {{formatDate(addDays(now; 5); "DD/MM/YYYY")}}
• Montant total: {{5.total_commande_fcfa}} FCFA
• Produits: {{length(6.array)}} références

⚠️ ALERTES:
{{forEach(5.alertes; alerte; "• " + alerte + "\n")}}

Merci de confirmer réception et délai de livraison.

Cordialement,
[Nom entreprise]

---
📊 Commande générée automatiquement par système IA
```

**Attachments:** Bon de commande PDF

---

#### MODULE 8b: Notification Slack gérant

**Type:** Slack > Send a Message

**Configuration:**
```
Channel: #stock-commandes

🛒 COMMANDE AUTOMATIQUE GÉNÉRÉE

📦 Produits: {{length(6.array)}} références
💰 Montant: {{5.total_commande_fcfa}} FCFA
📅 Livraison souhaitée: {{formatDate(addDays(now; 5); "DD/MM/YYYY")}}

🚨 Alertes:
{{forEach(5.alertes; alerte; "• " + alerte + "\n")}}

📄 Bon de commande envoyé à: fournisseur@exemple.tg

👉 Valider ou modifier: [Lien Google Doc]
```

---

#### MODULE 9: Mise à jour Google Sheets

**Type:** Google Sheets > Add a Row

**Sheet:** Historique_Commandes

**Données:**
```json
{
  "Date": "{{now}}",
  "Nb_Produits": "{{length(6.array)}}",
  "Montant_Total": "{{5.total_commande_fcfa}}",
  "Statut": "Envoyée",
  "Bon_Commande_URL": "{{7.webViewLink}}",
  "Prevision_IA": "{{5}}"
}
```

---

### Dashboard Google Sheets (Analytics)

**Onglet "Analytics Prédictions":**

**Métriques suivies:**
- Précision prédictions IA (% écart réel vs prévu)
- Taux de rupture de stock
- Taux de surstock
- Montant moyen commandes
- Délai moyen entre commandes
- Économies réalisées

**Graphiques:**
- Courbe: Prévisions vs Ventes réelles
- Histogramme: Distribution urgence commandes
- Camembert: Répartition budget par catégorie

**Formules clés:**
```
=QUERY(Ventes!A:F; "SELECT A, SUM(C) WHERE A >= date '"&TEXT(TODAY()-60;"yyyy-mm-dd")&"' GROUP BY A ORDER BY A")

=IFERROR((C2-D2)/D2*100; 0)  // % écart prévision

=COUNTIFS(Stock!E:E; "<"&Stock!F:F)  // Nb produits sous seuil
```

---

### Amélioration continue du système

**Feedback loop (chaque mois):**
1. Comparer prévisions IA vs ventes réelles
2. Calculer MAPE (Mean Absolute Percentage Error)
3. Ajuster prompt IA si MAPE > 20%
4. Intégrer saisonnalités détectées
5. Affiner stock de sécurité par produit

**Optimisations possibles:**
- Intégrer données météo (saison des pluies = +ventes parapluies)
- Prendre en compte événements (fêtes, rentrée scolaire)
- Analyse ABC: focus sur produits à forte valeur
- Négociation automatique tarifs (si volume ↑)

---

### Résultats

**KPIs (après 6 mois):**
- Ruptures de stock: -62% (de 18% à 7%)
- Surstock: -41% (réduction 800 000 FCFA immobilisés)
- Temps gestion: -75% (de 8h/semaine à 2h)
- Précision prévisions: 84% (MAPE 16%)

**ROI:**
- Gains mensuels: 535 000 FCFA
- Coût système: 80 000 FCFA/mois
- **ROI net: 569%**
- Délai retour: 18 jours

---

## 💡 CONSEILS FORMATEURS

### Pour démontrer les workflows

1. **Commencer simple:**
   - Montrer d'abord un workflow 2-3 étapes
   - Expliquer chaque module en détail
   - Tester en temps réel

2. **Avoir des backups:**
   - Captures d'écran de chaque étape
   - Vidéos pré-enregistrées si Internet instable
   - Workflows pré-construits à cloner

3. **Impliquer les participants:**
   - Les faire créer en même temps
   - Encourager personnalisation immédiate
   - Troubleshooter en live

### Erreurs courantes et solutions

**Erreur:** "Invalid API Key"
**Solution:** Vérifier API key copiée complète, sans espaces

**Erreur:** "Rate limit exceeded"
**Solution:** Ajouter délai entre appels (Sleep module 2-3 sec)

**Erreur:** "No data returned"
**Solution:** Vérifier mapping données ({{X.field}} correct?)

**Erreur:** "Parsing error"
**Solution:** Demander à IA de répondre en JSON strict, parser avec outil

### Templates prêts à cloner

Tous ces workflows sont disponibles en templates Make.com:
- Template ID: [à créer pour chaque workflow]
- Lien direct: make.com/templates/xxxxx

Participants peuvent cloner en 1 clic et personnaliser.
