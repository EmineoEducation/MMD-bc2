// ══════════════════════════════════════════════════════════════
//  DATA · PAC BC2 · Manager en stratégie et développement de projet digital
//  Projet Lumio Pulse — Plateforme de gestion du stress B2B · 14 mars 2025
//  Schéma : mailbox[] · dossiers[] · notes[] · guide · finder · calendar · slack
//  ⚠️  Remplacer les [À COMPLÉTER] par le contenu narratif réel du bloc.
//  ⚠️  Les placeholders {{PRENOM}} {{NOM}} {{EMAIL_ETUDIANT}} sont substitués à la connexion.
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  "student": {
    "name": "{{PRENOM}} {{NOM}}",
    "role": "Consultant·e externe",
    "email": "{{EMAIL_ETUDIANT}}",
    "company": "Indépendant·e",
    "initial": "?"
  },
  "mailbox": [
    {
      "id": "DOC-01",
      "from": "Sonia Ferracci (DirMkt, Lumio Health)",
      "fromEmail": "sonia.ferracci@lumio-health.com",
      "subject": "Lancement officiel — Projet Lumio Pulse : votre mission de cadrage (CODIR J-42)",
      "date": "14 mars 2025",
      "preview": "Sonia mandate l'apprenant pour cadrer Lumio Pulse en 6 semaines : budget, roadmap, CDC et backlog avant le CODIR du 25 avril.",
      "body": "Bonjour,\n\nSuite à la signature de l'accord de principe avec Northgate Corporate Solutions le 12 mars, je vous confie officiellement le cadrage complet du projet Lumio Pulse.\n\nVotre mission : produire un dossier de cadrage structuré et présentable au CODIR du 25 avril 2025. Ce dossier devra couvrir le périmètre fonctionnel de la plateforme, le budget prévisionnel, la composition d'équipe, la roadmap de développement ainsi que le cahier des charges, le backlog priorisé et les user stories associées.\n\nQuelques points de vigilance à intégrer dès maintenant :\n— Théo attend une faisabilité économique documentée, chiffrée, sans approximation. Il ne passera pas sur un budget flottant à deux semaines du CODIR.\n— Camille Ott vous briefera sur les exigences contractuelles de Northgate en matière d'accessibilité (WCAG 2.1 AA minimum) et de conformité RGPD. Ces points ne sont pas négociables côté client.\n— Yassine a esquissé des personas utilisateurs que vous trouverez en pièce jointe. Ils constituent une base de travail, pas une validation : la consolidation terrain vous appartient.\n\nJe reste votre interlocutrice principale sur ce projet. Prévoyez un premier point d'avancement avec moi d'ici le 21 mars pour valider l'approche avant d'engager les experts.\n\nBonne mise en route.\n\nSonia Ferracci\nDirectrice Marketing — Lumio Health\nsonia.ferracci@lumio-health.fr | +33 6 12 34 56 78",
      "avatar": "SF",
      "avatarColor": "#134547",
      "unread": true,
      "flagged": true,
      "tags": [
        "Mission"
      ]
    },
    {
      "id": "DOC-06",
      "from": "Jakob Rein (Northgate Corporate Solutions)",
      "fromEmail": "jakob.rein@lumio-health.com",
      "subject": "Retour proposition préliminaire Lumio Pulse — points bloquants à traiter avant validation",
      "date": "14 mars 2025",
      "preview": "Jakob Rein impose deux contraintes bloquantes : hébergement UE exclusif et module reporting DG — et signale une tension sur les délais avec Camille Ott.",
      "body": "Madame Ferracci,\n\nJ'ai pris connaissance de la proposition préliminaire transmise vendredi dernier. Le cadrage général est acceptable, mais plusieurs points doivent être clarifiés avant que nous puissions envisager une validation formelle de notre côté.\n\nPremier point, non négociable : aucune donnée de santé collectée via la plateforme ne doit être hébergée hors Union européenne. Cela inclut les sauvegardes, les environnements de recette et les outils tiers d'analytics. Nous avons des engagements contractuels vis-à-vis de nos propres clients sur ce sujet, et une défaillance ici nous exposerait directement. Je m'étonne que ce point n'ait pas été adressé d'emblée dans la proposition.\n\nDeuxième point : nos directions générales ont besoin d'un module de reporting agrégé — données anonymisées, consolidées par entité, avec export PDF et accès role-based. Ce n'est pas une option, c'est une condition d'adoption en interne. Sans visibilité DG, le déploiement restera bloqué au niveau RH.\n\nSur les délais, j'ai eu un échange téléphonique avec Madame Ott la semaine dernière. Je comprends les contraintes de votre équipe, mais les dates évoquées ne correspondent pas à ce qui a été discuté lors de notre réunion du 6 mars. Je préfère que ce point soit arbitré à votre niveau plutôt que de laisser une ambiguïté s'installer.\n\nJe reste disponible pour un point téléphonique jeudi matin si nécessaire. Dans l'attente, merci de confirmer la prise en compte de ces éléments et de m'indiquer un calendrier de révision réaliste.\n\nCordialement,\nJakob Rein\nPartner — Northgate Corporate Solutions\nj.rein@northgate-cs.com | +33 1 44 XX XX XX",
      "avatar": "JR",
      "avatarColor": "#7a756c",
      "unread": false,
      "flagged": false
    }
  ],
  "dossiers": [
    {
      "id": "DOC-02",
      "type": "rich",
      "tab": "COMPTE-R",
      "title": "CR — Réunion de lancement Northgate Corporate Solutions",
      "accent": "#1b4f8a",
      "runningHead": "COMPTE-RENDU DE RÉUNION",
      "pages": [
        {
          "kicker": "COMPTE-RENDU INTERNE — CONFIDENTIEL",
          "title": "Réunion de lancement Projet Lumio Pulse — 10 mars 2025",
          "byline": "Camille Ott, Responsable Partenariats B2B · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Réunion tenue le lundi 10 mars 2025 de 14h00 à 16h30, en visioconférence. Participants côté Lumio Health : Camille Ott (Responsable Partenariats B2B), Sonia Ferracci (Directrice Marketing). Côté Northgate Corporate Solutions : Jakob Rein (Partner), Hélène Dufay (DRH Groupe), Marcus Völler (DSI). Objet : cadrage des attentes contractuelles et fonctionnelles de Northgate dans le cadre du déploiement de la plateforme Lumio Pulse."
            },
            {
              "type": "h2",
              "text": "Besoins exprimés par Northgate"
            },
            {
              "type": "p",
              "text": "Jakob Rein a ouvert la réunion en rappelant l'accord de principe signé le 7 mars 2025 et les conditions de confiance qu'il pose : la plateforme doit être opérationnelle pour un premier périmètre de 500 collaborateurs d'ici le 1er octobre 2025. Il a structuré les attentes en quatre axes : (1) un dashboard RH en temps réel permettant aux managers RH de visualiser les indicateurs de stress agrégés par équipe, département et site ; (2) un système d'alertes automatiques déclenchées lorsqu'un seuil de stress collectif dépasse un niveau paramétrable, avec notification par e-mail et in-app ; (3) une intégration SSO compatible avec l'environnement Azure AD de Northgate, point non négociable selon Marcus Völler ; (4) une conformité RGPD stricte, incluant la pseudonymisation des données individuelles, la localisation des serveurs en Union européenne et la possibilité pour chaque collaborateur d'exercer ses droits d'accès et de suppression directement depuis l'interface."
            },
            {
              "type": "callout",
              "text": "Point contractuel critique (Jakob Rein) : aucune donnée individuelle identifiable ne doit être accessible aux managers. Seules des données agrégées à l'échelle d'une équipe (minimum 5 personnes) sont autorisées. Toute violation de ce principe entraîne la résiliation immédiate du contrat."
            },
            {
              "type": "h2",
              "text": "Contraintes techniques et organisationnelles identifiées"
            },
            {
              "type": "p",
              "text": "Hélène Dufay (DRH) a précisé que le déploiement phase 1 concerne trois sites pilotes (Paris-La Défense, Lyon-Part-Dieu, Bordeaux-Mériadeck), soit environ 500 collaborateurs issus des fonctions support et middle management. Elle a insisté sur la nécessité d'un parcours d'onboarding simple, accessible sans formation préalable, et compatible avec les publics en situation de handicap — Northgate étant signataire de la Charte Diversité et soumis à des engagements RSE auditables. Marcus Völler a confirmé que l'intégration devra passer par une API sécurisée documentée, avec un environnement de recette distinct de la production."
            },
            {
              "type": "callout",
              "text": "Exigence accessibilité (Hélène Dufay) : la plateforme doit respecter le RGAA 4.1 (niveau AA minimum). Ce point conditionne la validation de la recette fonctionnelle par la DRH Northgate."
            },
            {
              "type": "h2",
              "text": "Prochaines étapes convenues"
            },
            {
              "type": "p",
              "text": "Jakob Rein attend la transmission du dossier de cadrage complet avant le 25 avril 2025, pour examen par le comité technique Northgate le 28 avril. Sonia Ferracci s'est engagée à organiser un atelier de validation des personas utilisateurs avec Hélène Dufay avant le 28 mars, afin d'affiner les profils esquissés par Yassine Morel. De mon côté, je transmets ce CR à Sonia et Théo ce jour, avec recommandation de prioriser l'analyse RGPD et l'architecture SSO dès la semaine du 17 mars. Aucun point de blocage identifié à ce stade, mais le délai au 1er octobre laisse peu de marge en cas de retard en phase de recette."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-03",
      "type": "rich",
      "tab": "CAHIER",
      "title": "Exigences contractuelles Northgate pour la plateforme de monitoring stress — v1.2",
      "accent": "#1a6641",
      "runningHead": "CAHIER DES EXIGENCES CLI",
      "pages": [
        {
          "kicker": "CAHIER DES EXIGENCES CLIENT — CONFIDENTIEL",
          "title": "Plateforme Lumio Pulse : exigences non négociables Northgate Corporate Solutions",
          "byline": "Jakob Rein, Partner Northgate Corporate Solutions · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Suite à la signature de l'accord de principe du 12 mars 2025, Northgate Corporate Solutions formalise ci-dessous l'ensemble des exigences contractuelles auxquelles la plateforme Lumio Pulse devra se conformer avant tout déploiement opérationnel. Ces exigences s'appliquent sans dérogation possible. Tout écart constaté lors des phases de recette ou d'audit pourra entraîner la suspension du contrat et l'activation des clauses de pénalité prévues à l'article 14 de l'accord-cadre. Lumio Health est invitée à confirmer par écrit, au plus tard le 28 mars 2025, sa capacité à satisfaire chacun des points listés ci-dessous."
            },
            {
              "type": "h2",
              "text": "1. Accessibilité numérique"
            },
            {
              "type": "p",
              "text": "La plateforme devra être conforme au référentiel WCAG 2.1 niveau AA dans sa totalité, sans exception de module. Cette exigence est motivée par la politique RSE de Northgate et par nos obligations légales envers nos collaborateurs en situation de handicap (RQTH et autres statuts). Un audit d'accessibilité indépendant, réalisé par un organisme certifié, devra être fourni par Lumio Health au plus tard 15 jours avant le go-live. À ce jour, aucun élément de la documentation transmise par Lumio Health ne fait mention d'une démarche d'accessibilité structurée : ce point constitue un risque contractuel identifié que nous attendons de voir adressé explicitement dans le dossier de cadrage."
            },
            {
              "type": "callout",
              "text": "⚠ POINT DE VIGILANCE — Accessibilité : Lumio Health n'a fourni à ce jour aucune preuve de conformité WCAG 2.1 AA. Cette lacune doit être traitée en priorité dans le dossier de cadrage. Délai maximal pour réponse écrite : 28 mars 2025."
            },
            {
              "type": "h2",
              "text": "2. Hébergement et sécurité des données de santé"
            },
            {
              "type": "p",
              "text": "L'ensemble des données collectées via les wearables et traitées par la plateforme sont qualifiées de données de santé au sens du RGPD et de la doctrine HDS de l'ANS. En conséquence, l'hébergement devra être assuré exclusivement par un prestataire certifié Hébergeur de Données de Santé (HDS), conformément à l'article L.1111-8 du Code de la santé publique. Lumio Health devra fournir le nom du prestataire retenu, son numéro de certification HDS en cours de validité, ainsi que l'architecture d'hébergement cible, avant le 4 avril 2025. Les données individuelles des collaborateurs devront faire l'objet d'une anonymisation irréversible avant toute restitution agrégée aux managers ou aux équipes RH : aucune donnée nominative ou directement identifiable ne pourra apparaître dans les tableaux de bord."
            },
            {
              "type": "callout",
              "text": "EXIGENCE RGPD & HDS : Anonymisation irréversible obligatoire des données individuelles. Hébergement HDS certifié ANS requis. Architecture cible à soumettre avant le 4 avril 2025."
            },
            {
              "type": "h2",
              "text": "3. Disponibilité, performance et go-live"
            },
            {
              "type": "p",
              "text": "Le contrat prévoit un SLA de disponibilité minimale de 99,5 % sur une base mensuelle, hors fenêtres de maintenance planifiées notifiées 72 heures à l'avance. Les temps de réponse des pages critiques (tableau de bord, alertes stress) ne devront pas excéder 2 secondes à charge nominale. En cas de dépassement du seuil de disponibilité sur deux mois consécutifs, Northgate se réserve le droit d'appliquer une pénalité équivalente à 10 % de la mensualité contractuelle. La date de go-live est fixée au 1er septembre 2025 : cette échéance est ferme et non négociable, eu égard au déploiement RH planifié dans nos 12 sites pilotes français. Toute demande de report devra être soumise par écrit avec justification technique au plus tard 60 jours avant cette date, soit le 2 juillet 2025 au plus tard, et fera l'objet d'une décision collégiale Northgate."
            },
            {
              "type": "callout",
              "text": "DATE FERME — Go-live : 1er septembre 2025. SLA : 99,5 % de disponibilité mensuelle. Pénalité de 10 % applicable dès le 2e mois de dépassement consécutif. Aucun report accepté sans dossier technique motivé avant le 2 juillet 2025."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-05",
      "type": "rich",
      "tab": "RAPPORT",
      "title": "Personas Lumio Pulse — Draft v0.1 (non validé terrain)",
      "accent": "#5b3a8a",
      "runningHead": "RAPPORT DE RECHERCHE UTI",
      "pages": [
        {
          "kicker": "RAPPORT INTERNE — DRAFT NON VALIDÉ",
          "title": "Personas Lumio Pulse — Première esquisse utilisateurs",
          "byline": "Yassine Morel, Content Manager · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce document présente trois personas construits à partir de sources secondaires : études sectorielles RH (Malakoff Humanis 2024, Baromètre Santé au Travail ANDRH 2023), retours informels de Camille Ott sur les 180 comptes B2B actifs, et quelques échanges Slack non structurés avec des équipes clientes. Aucun entretien terrain formel n'a été conduit à ce stade. Ces profils sont des hypothèses de travail, pas des portraits validés. Ils doivent servir de base de discussion pour la phase de user stories — pas de point d'arrivée."
            },
            {
              "type": "h2",
              "text": "Persona 1 — Isabelle, DRH d'une ETI industrielle (45 ans, Lyon)"
            },
            {
              "type": "p",
              "text": "Isabelle pilote les politiques RH d'une entreprise de 320 salariés dans le secteur logistique. Elle est sous pression pour réduire l'absentéisme (taux actuel : 7,2 %, contre 5,1 % en moyenne nationale) et justifier ses investissements bien-être auprès du CODIR. Elle cherche un outil qui agrège des données mesurables, produit des rapports exportables, et s'intègre à son SIRH (Workday). Ses freins : la confidentialité des données individuelles, la résistance syndicale, et la crainte d'un outil perçu comme surveillance. Elle n'utilise pas elle-même le wearable — elle lit les tableaux de bord agrégés. Niveau de maturité digitale : moyen-élevé. Disponibilité : faible, décide vite sur dossier."
            },
            {
              "type": "h2",
              "text": "Persona 2 — Romain, Chargé de projet digital (32 ans, télétravail partiel, Paris)"
            },
            {
              "type": "p",
              "text": "Romain est l'utilisateur final du wearable au quotidien. Il travaille en mode hybride (3 jours bureau, 2 jours remote), jongle entre plusieurs projets simultanés et ressent une charge cognitive élevée sans toujours savoir la nommer. Il est curieux des données de santé (utilisateur de Garmin Connect et Whoop), mais méfiant quant à l'usage de ses données par son employeur. Il attend de Lumio Pulse une expérience mobile fluide, des insights personnalisés actionnables (pas juste des courbes), et la garantie que son manager n'accède pas à ses données individuelles. Point de vigilance extrapolé : profil potentiellement proche du surmenage — à confirmer par entretiens."
            },
            {
              "type": "h2",
              "text": "Persona 3 — Marc, DSI d'un groupe de services (51 ans, Bordeaux)"
            },
            {
              "type": "p",
              "text": "Marc est l'interlocuteur technique incontournable pour tout déploiement. Il valide l'architecture, les accès, la conformité RGPD et l'intégration au SI existant (Azure AD, SSO SAML 2.0). Son principal critère : que la plateforme ne crée pas de dette technique ni de surface d'attaque supplémentaire. Il exige une documentation API complète, des SLA contractuels (disponibilité ≥ 99,5 %), et un hébergement Europe (HDS souhaité). Il n'est pas décideur final sur l'achat mais dispose d'un droit de veto. Niveau d'exigence RGPD : très élevé — point particulièrement critique au regard des alertes de Camille Ott sur les clauses Northgate."
            },
            {
              "type": "callout",
              "text": "⚠ LACUNE IDENTIFIÉE — PERSONA HANDICAP ABSENT : Aucun profil utilisateur en situation de handicap n'a été esquissé à ce stade. Or, les exigences contractuelles de Northgate mentionnées par Camille Ott imposent une conformité accessibilité (RGAA 4.1 minimum). Il est impératif d'intégrer un quatrième persona — par exemple, un collaborateur avec handicap cognitif ou moteur — avant toute validation des user stories. Je recommande de solliciter une association partenaire ou le référent RQTH de Northgate pour un entretien d'ici fin mars. Sans cela, les user stories produites à partir de ce draft seront incomplètes et potentiellement non conformes."
            },
            {
              "type": "h2",
              "text": "Limites méthodologiques et prochaines étapes"
            },
            {
              "type": "p",
              "text": "Ces trois personas reposent à 80 % sur des données extrapolées ou indirectes. Avant validation CODIR, il est nécessaire de conduire au minimum 6 entretiens utilisateurs semi-directifs (2 par profil), idéalement sur des comptes clients existants via Camille Ott. Un test de validation rapide par questionnaire Typeform pourrait compléter la démarche en deux semaines. Je me tiens disponible pour co-animer les entretiens, sous réserve de charge — je signale que mon planning est actuellement tendu et qu'une priorisation claire de cette tâche serait utile avant fin mars."
            },
            {
              "type": "callout",
              "text": "STATUT DU DOCUMENT : Draft v0.1 — usage interne uniquement. Ne pas transmettre à Northgate. À valider avec Sonia Ferracci avant intégration au dossier de cadrage. Version terrain cible : v1.0 pour le 4 avril 2025."
            }
          ]
        }
      ]
    },
    {
      "id": "DOC-07",
      "type": "rich",
      "tab": "FICHE",
      "title": "Spécifications API wearables Lumio Gen3 — Contraintes d'intégration pour développeurs tiers",
      "accent": "#134547",
      "runningHead": "FICHE TECHNIQUE",
      "pages": [
        {
          "kicker": "FICHE TECHNIQUE INTERNE — CONFIDENTIEL",
          "title": "API Lumio Gen3 : contraintes d'intégration et limites pour la plateforme Lumio Pulse",
          "byline": "Équipe Produit, Lumio Health · 14 mars 2025",
          "blocks": [
            {
              "type": "p",
              "text": "Ce document synthétise les contraintes techniques applicables à toute intégration tierce de l'API wearable Lumio Gen3 dans le cadre du projet Lumio Pulse. Il est destiné aux équipes de développement, aux partenaires techniques et au chef de projet en charge du cahier des charges. Il constitue le référentiel technique de référence pour l'évaluation de faisabilité du tableau de bord entreprise."
            },
            {
              "type": "h2",
              "text": "1. Protocole de communication et fréquence de polling"
            },
            {
              "type": "p",
              "text": "L'API Lumio Gen3 repose sur un protocole REST avec authentification OAuth 2.0. La fréquence de polling maximale autorisée est fixée à 1 requête toutes les 5 secondes par device (soit 12 appels/minute/capteur). Au-delà de ce seuil, le gateway renvoie une erreur 429 et applique un backoff exponentiel de 30 secondes. Pour un déploiement de 500 wearables simultanés, cela représente 6 000 requêtes/minute à absorber côté backend plateforme. Toute architecture temps réel devra intégrer un système de file d'attente (ex. RabbitMQ ou Kafka) pour lisser la charge."
            },
            {
              "type": "h2",
              "text": "2. Format des données HRV et structure des payloads"
            },
            {
              "type": "p",
              "text": "Les données de variabilité cardiaque (HRV) sont transmises en JSON selon le schéma suivant : champ device_id (UUID v4), timestamp (ISO 8601 UTC), hrv_rmssd (float, ms), hrv_sdnn (float, ms), stress_index (integer, 0–100, calculé par l'algorithme propriétaire Lumio), confidence_score (float, 0.0–1.0). Les valeurs avec un confidence_score inférieur à 0.75 sont à considérer comme non exploitables pour l'affichage dashboard. Aucune donnée brute PPG n'est exposée via l'API publique : seules les métriques dérivées sont accessibles aux intégrateurs tiers."
            },
            {
              "type": "callout",
              "text": "LIMITE CRITIQUE — Latence maximale contractuelle : 200 ms. Les tests de charge internes (février 2025, 300 devices en parallèle) ont mesuré une latence médiane de 180 ms, mais des pics à 340 ms ont été enregistrés lors de pointes de synchronisation simultanée (ex. fin de réunion, reconnexion groupée). Un affichage tableau de bord web en temps réel strict (< 200 ms de bout en bout) ne peut donc pas être garanti sans architecture de mise en cache intermédiaire (Redis ou équivalent). Ce point constitue un risque technique de niveau 2 pour le projet Lumio Pulse."
            },
            {
              "type": "h2",
              "text": "3. SDK disponibles et compatibilité plateforme"
            },
            {
              "type": "p",
              "text": "Le SDK officiel Lumio Gen3 est disponible uniquement en deux versions natives : iOS (Swift, version minimale iOS 15) et Android (Kotlin, API level 29 minimum). Il n'existe à ce jour aucun SDK web, aucun wrapper JavaScript/TypeScript officiel, ni de bibliothèque React Native ou Flutter maintenue par l'équipe Produit. Toute intégration dans une Progressive Web App ou un tableau de bord navigateur devra donc passer exclusivement par l'API REST, sans accès aux fonctionnalités Bluetooth Low Energy avancées (streaming continu, alertes push device-to-cloud) réservées aux SDK natifs."
            },
            {
              "type": "callout",
              "text": "IMPLICATION DIRECTE POUR LUMIO PULSE — Le tableau de bord web RH/manager prévu dans le cahier des charges ne pourra pas exploiter le streaming BLE natif. La synchronisation des données en contexte web reposera sur un polling API avec tampon Redis, introduisant une latence structurelle de 5 à 15 secondes sur les indicateurs affichés. Cette contrainte doit être explicitement documentée dans les spécifications fonctionnelles et validée par Northgate Corporate Solutions avant démarrage du développement."
            },
            {
              "type": "h2",
              "text": "4. Contraintes RGPD et sécurité des données transmises"
            },
            {
              "type": "p",
              "text": "Toutes les données transitant via l'API sont pseudonymisées à la source : le device_id ne contient aucun lien direct avec l'identité de l'utilisateur. La table de correspondance device_id / identité RH est stockée exclusivement côté plateforme cliente et ne transite jamais vers les serveurs Lumio. Les données HRV sont chiffrées en transit (TLS 1.3 obligatoire) et conservées sur les serveurs Lumio pendant 90 jours glissants, conformément à la politique de rétention en vigueur. Le DPO de Lumio Health (contact : dpo@lumio-health.fr) doit être associé à toute convention de sous-traitance impliquant un accès aux données issues de l'API, conformément à l'article 28 du RGPD. Ce point est un prérequis contractuel non négociable pour Northgate Corporate Solutions."
            }
          ]
        }
      ]
    }
  ],
  "notes": [
    {
      "id": "DOC-04",
      "title": "Enveloppe budgétaire Lumio Pulse — Phase 1 : plafond et exigences ROI",
      "date": "14 mars 2025",
      "preview": "Budget phase 1 plafonné à 280 000 € TTC, ROI positif exigé à 18 mois — contraintes non négociables pour Lumio Pulse.",
      "kicker": "NOTE INTERNE CONFIDENTIELLE — DIRECTION GÉNÉRALE",
      "render": "plain",
      "body": "Sonia, Jakob, pour mémoire avant le cadrage formel : l'enveloppe maximale autorisée pour la phase 1 de Lumio Pulse est fixée à 280 000 € TTC, sans dérogation possible. Ce plafond intègre développement plateforme, intégration wearables, sécurité/RGPD et déploiement pilote sur 3 comptes Northgate. J'ai benchmarké quatre plateformes medtech B2B comparables (Wittyfit, Zestmeup, Wellics, Gymlib Enterprise) : les déploiements phase 1 oscillent entre 190 000 € et 340 000 € selon le périmètre fonctionnel et le niveau d'intégration SI. Nous sommes dans la fourchette basse-médiane, ce qui est tenable à condition de ne pas sur-spécifier dès la V1. Exigence non négociable côté Northgate et côté Théo : ROI positif démontrable à 18 mois. Cela suppose un pricing B2B cible autour de 12 à 15 € par salarié/mois sur une base minimale de 1 200 utilisateurs actifs d'ici septembre 2026. En dessous, le modèle ne tient pas. Toute proposition qui dépasse le plafond ou qui ne projette pas d'équilibre économique à 18 mois sera retournée en cadrage. Pas de négo là-dessus.",
      "byline": "Théo Marczak (CEO, Lumio Health) · 14 mars 2025"
    },
    {
      "id": "DOC-08",
      "title": "Arbitrages finaux Lumio Pulse — Priorisation go-live et report phase 2",
      "date": "14 mars 2025",
      "preview": "Arbitrages go-live Lumio Pulse actés : 4 fonctionnalités must-have confirmées, 2 epics IA et self-service reportés en phase 2 (T4 2025).",
      "kicker": "NOTE DE CADRAGE STRATÉGIQUE — CONFIDENTIEL",
      "render": "plain",
      "body": "Suite aux retours de Jakob Rein (Northgate, échange du 11 mars) et à la revue budgétaire conduite avec Théo le 13 mars, les arbitrages suivants sont actés pour la présentation CODIR du 25 avril.\n\nFonctionnalités must-have go-live (phase 1, livraison contractuelle J+90) :\n— Dashboard de monitoring stress temps réel (données wearables synchronisées)\n— Module alertes RH configurables avec seuils paramétrables\n— Gestion des droits d'accès et anonymisation RGPD article 25 (exigence contractuelle Northgate non négociable)\n— Conformité WCAG 2.1 AA sur l'ensemble des interfaces (clause accessibilité Camille Ott, confirmée par Northgate le 7 mars)\n\nEpics reportés en phase 2 (livraison cible : T4 2025) :\n— Module recommandations personnalisées IA (complexité d'intégration sous-estimée, délai fiabilisation modèle : +6 semaines)\n— Espace collaborateur self-service (personas Yassine non encore validés terrain — validation prévue mai 2025)\n\nCes reports permettent de tenir le budget phase 1 à 187 000 € (enveloppe validée) et de sécuriser le délai contractuel. Le backlog et le calendrier transmis au CODIR reflètent ces choix. Toute demande de réintégration en phase 1 devra faire l'objet d'un arbitrage Théo + Jakob avant le 1er avril.",
      "byline": "Sonia Ferracci (DirMkt, Lumio Health) · 14 mars 2025"
    }
  ],
  "guide": {
    "title": "Guide de mission · Elaborer un projet digital au service d'un commanditaire",
    "intro": "Ce guide est là si tu te sens bloqué. Il ne donne pas les réponses — il indique où chercher.",
    "tips": [
      {
        "titre": "C.6 — Identifier les besoins et le périmètre du projet digital, en évaluant les ressources disponibles et en consultant les parties prenantes internes et externes, afin de déterminer les objectifs à atteindre et les conditions de faisabilité.",
        "body": "Appuyez-vous sur la matrice RACI et les échanges avec Northgate (cf. Document 2) pour prouver la consultation des parties prenantes. Distinguez besoins fonctionnels et non fonctionnels. Reliez chaque objectif à la stratégie de développement B2B de Lumio Health."
      },
      {
        "titre": "C.7 — Élaborer le budget du projet digital, en évaluant les moyens financiers, humains et techniques nécessaires, en identifiant les intervenants internes et externes à intégrer, et en estimant les charges, afin d'assurer la répartition optimale des ressources et la viabilité économique du projet.",
        "body": "Structurez votre budget en postes distincts (développement, design UX, hébergement, maintenance, formation). Intégrez une analyse ROI simplifiée à horizon 18 mois pour convaincre le CEO. Référez-vous aux benchmarks sectoriels medtech (cf. Document 4)."
      },
      {
        "titre": "C.8 — Constituer une équipe d'experts, en tenant compte des compétences à mobiliser pour le projet, en leur restituant la problématique et les données recueillies au cours de la phase d'investigation, afin d'analyser les contraintes techniques et leurs implications en matière de développement.",
        "body": "Utilisez un tableau RACI pour présenter clairement les rôles. Justifiez l'inclusion de profils diversifiés (DPO pour le RGPD, expert accessibilité numérique). Montrez comment la restitution de la problématique a permis d'affiner l'analyse des contraintes techniques."
      },
      {
        "titre": "C.9 — Modéliser la proposition pour le projet digital, en synthétisant les différentes contributions des experts, en évaluant les avantages, les limites et les contraintes à prendre en compte, et en veillant au respect des principes de développement durable et d'accessibilité pour les publics en situation de handicap, afin d'assurer la faisabilité, la durabilité et l'accessibilité du projet.",
        "body": "Structurez votre proposition en sections claires : contexte, solution technique proposée, équipe, prix, méthode de chiffrage. Intégrez un niveau de conformité WCAG 2.1 AA minimum exigé par Northgate (cf. Document 3). Valorisez l'éco-conception comme argument commercial différenciant."
      },
      {
        "titre": "C.10 — Établir le calendrier de réalisation du projet digital, en structurant l'arborescence du projet avec les différentes étapes de réalisation, les actions à mettre en œuvre et les ressources nécessaires au regard des objectifs visés et des contraintes identifiées, afin de garantir le respect des délais et des échéances fixés.",
        "body": "Produisez un WBS (Work Breakdown Structure) et un diagramme de Gantt synthétique. Identifiez le chemin critique. Prévoyez des buffers entre les phases pour absorber les aléas techniques liés à l'intégration des wearables Lumio."
      },
      {
        "titre": "C.11 — Rédiger le cahier des charges du projet digital, en coordonnant l'écriture des spécifications techniques et fonctionnelles, afin de garantir la clarté et l'exhaustivité des informations concernant le périmètre, les objectifs, le budget et le calendrier du projet.",
        "body": "Organisez le CDC en sections standard : contexte & objectifs, périmètre fonctionnel, architecture technique, contraintes réglementaires, critères d'acceptation, planning et budget. Référencez explicitement les exigences Northgate issues du Document 3. Assurez-vous que chaque spécification est testable."
      }
    ],
    "footer": "Ce guide est disponible à tout moment via le bouton ? en bas à gauche du desktop."
  },
  "notepad": {
    "title": "Mes notes — mission",
    "placeholder": "Tes pensées au fil de l'eau pendant que tu lis le dossier."
  },
  "finder": {
    "folders": {
      "guide": {
        "title": "Guide",
        "sidebar": "⌘ Guide",
        "icon": "📕",
        "items": [
          {
            "kind": "pdf",
            "name": "Guide de mission",
            "app": "pdf",
            "props": {}
          }
        ]
      },
      "acte1": {
        "title": "Acte 1",
        "sidebar": "Acte 1",
        "icon": "📁",
        "items": [
          {
            "kind": "mail",
            "name": "Lancement officiel du projet",
            "app": "mail",
            "props": {
              "docId": "DOC-01"
            }
          },
          {
            "kind": "pdf",
            "name": "CR réunion de lancement",
            "app": "pdf",
            "props": {
              "docId": "DOC-02"
            }
          }
        ]
      },
      "acte2": {
        "title": "Acte 2",
        "sidebar": "Acte 2",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Exigences contractuelles Northgate pour",
            "app": "pdf",
            "props": {
              "docId": "DOC-03"
            }
          },
          {
            "kind": "note",
            "name": "Enveloppe budgétaire maximale Lumio",
            "app": "notes",
            "props": {
              "docId": "DOC-04"
            }
          }
        ]
      },
      "acte3": {
        "title": "Acte 3",
        "sidebar": "Acte 3",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Personas Lumio Pulse —",
            "app": "pdf",
            "props": {
              "docId": "DOC-05"
            }
          },
          {
            "kind": "mail",
            "name": "Retour sur la proposition",
            "app": "mail",
            "props": {
              "docId": "DOC-06"
            }
          }
        ]
      },
      "acte4": {
        "title": "Acte 4",
        "sidebar": "Acte 4",
        "icon": "📁",
        "items": [
          {
            "kind": "pdf",
            "name": "Spécifications API wearables Lumio",
            "app": "pdf",
            "props": {
              "docId": "DOC-07"
            }
          }
        ]
      },
      "acte5": {
        "title": "Acte 5",
        "sidebar": "Acte 5",
        "icon": "📁",
        "items": [
          {
            "kind": "note",
            "name": "Arbitrages finaux avant présentation",
            "app": "notes",
            "props": {
              "docId": "DOC-08"
            }
          }
        ]
      },
      "portraits": {
        "title": "Portraits équipe",
        "sidebar": "Portraits",
        "icon": "🪪",
        "items": [
          {
            "kind": "html",
            "name": "Théo Marczak — CEO",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_theo_marczak.html"
            }
          },
          {
            "kind": "html",
            "name": "Sonia Ferracci — Dir. Marketing",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_sonia_ferracci.html"
            }
          },
          {
            "kind": "html",
            "name": "Camille Ott — Partenariats B2B",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_camille_ott.html"
            }
          },
          {
            "kind": "html",
            "name": "Yassine Morel — Content Manager",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_yassine_morel.html"
            }
          },
          {
            "kind": "html",
            "name": "Jakob Rein — Northgate Capital",
            "app": "browser",
            "props": {
              "url": "portraits/portrait_jakob_rein.html"
            }
          }
        ]
      }
    },
    "order": [
      "guide",
      "acte1",
      "acte2",
      "acte3",
      "acte4",
      "acte5",
      "portraits"
    ]
  },
  "calendar": {
    "monthLabel": "Mars",
    "todayLabel": "Jour 1 / 18",
    "countdownLabel": "AVANT ÉCHÉANCE",
    "startDay": 14,
    "daysInMonth": 31,
    "startOffset": 0,
    "deadlineDay": 31,
    "boardDay": null,
    "legend": [
      {
        "label": "Réunion",
        "color": "#3a7bd5"
      },
      {
        "label": "Production",
        "color": "#c4420f"
      },
      {
        "label": "Échéance",
        "color": "#a83232"
      }
    ],
    "events": {
      "14": [
        {
          "label": "Kick-off · Projet Lumio Pulse — Plateforme de gestion du stress B2B",
          "bg": "#3a7bd5",
          "color": "#fff",
          "bold": true
        }
      ],
      "31": [
        {
          "label": "Livrable final",
          "bg": "#a83232",
          "color": "#fff",
          "bold": true
        }
      ]
    },
    "footer": "<em>1 jour fictif ≈ 11 minutes réelles · ratio ×74</em>"
  },
  "trash": {
  "items": [
    {
      "name": "planning_v0.mpp",
      "icon": "📊",
      "size": "980 Ko",
      "date": "sept.",
      "isEgg": false
    },
    {
      "name": "notes_perso.txt",
      "icon": "📄",
      "size": "4 Ko",
      "date": "sept.",
      "isEgg": false
    },
    {
      "name": "Capture WhatsApp — Yassine.png",
      "icon": "🖼",
      "size": "188 Ko",
      "date": "cadrage",
      "isEgg": true
    }
  ],
  "egg": {
    "contact": "Yassine Morel",
    "status": "en ligne",
    "meKey": "camille",
    "badge": "Conversation non destinée au dossier",
    "messages": [
      {
        "from": "camille",
        "text": "Jakob a encore rajouté des exigences ce matin… le module reporting direction, c'était pas dans le scope initial",
        "time": "09:12"
      },
      {
        "from": "camille",
        "text": "si on dit oui à tout on explose le budget et Théo va nous tuer. Si on dit non on perd le contrat. Je sais pas comment Sonia va gérer ça au CODIR",
        "time": "09:13"
      },
      {
        "from": "yassine",
        "text": "et mes personas, elle les a même pas lus. j'ai passé 3 semaines dessus",
        "time": "09:21"
      },
      {
        "from": "yassine",
        "text": "le persona handicap que j'avais commencé il est toujours dans mes brouillons. personne l'a demandé",
        "time": "09:22"
      },
      {
        "from": "camille",
        "text": "attends, le persona accessibilité est pas dans les user stories ?!",
        "time": "09:24"
      },
      {
        "from": "yassine",
        "text": "non. il a sauté au cadrage. avec le scope qui bouge tout le temps, il est passé à la trappe",
        "time": "09:25"
      },
      {
        "from": "camille",
        "text": "faut le remettre. on peut pas livrer des US sans le persona handicap, surtout sur du B2B santé",
        "time": "09:27"
      }
    ]
  }
},
  "slack": {
    "workspace": "Lumio Health",
    "channels": [
      {
        "id": "general",
        "name": "general"
      },
      {
        "id": "projet-bc2",
        "name": "projet-bc2"
      }
    ],
    "dms": [
      {
        "id": "commanditaire",
        "name": "Sonia Ferracci",
        "avatar": "SF",
        "color": "#134547",
        "status": "online",
        "isCommanditaire": true
      }
    ],
    "seed": {
      "commanditaire": [
        {
          "from": "Sonia Ferracci",
          "avatar": "SF",
          "color": "#134547",
          "time": "08:47",
          "text": "Bonjour {{PRENOM}} — bienvenue officiellement sur le projet Lumio Pulse 👋 je suis vraiment contente qu'on t'ait intégré·e à l'équipe, on a besoin de quelqu'un qui structure"
        },
        {
          "from": "Sonia Ferracci",
          "avatar": "SF",
          "color": "#134547",
          "time": "08:51",
          "text": "contexte rapide : on a signé un accord de principe avec Northgate la semaine dernière, Théo veut une faisabilité béton et Jakob Rein (leur partner) va être exigeant — Camille t'enverra les contraintes contractuelles RGPD/accessibilité dès qu'elle aura 5 min, lis-les attentivement"
        },
        {
          "from": "Sonia Ferracci",
          "avatar": "SF",
          "color": "#134547",
          "time": "09:03",
          "text": "ce dont j'ai besoin de ta part : un dossier de cadrage complet — périmètre, budget, équipe projet, proposition modélisée, calendrier, cahier des charges, backlog et user stories — présentation au CODIR dans 6 semaines pile, donc j'ai besoin d'une première version structurée d'ici le 28 mars pour qu'on puisse itérer ensemble avant de soumettre à Théo"
        }
      ]
    }
  },
  "slackPrompts": {
    "commanditaire": "Tu es Sonia Ferracci, Directrice Marketing, Lumio Health — porteuse du projet côté commanditaire interne, interlocutrice principale de Jakob Rein chez Northgate chez Lumio Health. Tu réponds à {{PRENOM}}, consultant·e externe sur la mission \"Projet Lumio Pulse — Plateforme de gestion du stress B2B\". Tu évalues sans expliquer, tu relances sans donner la réponse, tu simules la pression hiérarchique. Tu réponds en 2-3 messages courts séparés par ---SPLIT---. Pas de longs développements.",
    "commanditaireLivrable": "Tu es Sonia Ferracci. Tu viens de recevoir le livrable de {{PRENOM}}. Tu réagis en 2-3 messages courts séparés par ---SPLIT---. Tu pointes ce qui te paraît juste et ce qui te paraît faible, sans expliquer comment corriger."
  },
  "pressArticles": [
    {
      "id": "a1",
      "source": "L'Usine Digitale",
      "host": "usine-digitale.fr",
      "url": "usine-digitale.fr/article/plateformes-monitoring-bien-etre-entreprise-marche-rgpd-accessibilite",
      "author": "Mathilde Arnoux",
      "date": "11 mars 2025",
      "headline": "Bien-être au travail : les plateformes digitales de monitoring séduisent les DRH, mais peinent encore à rassurer sur la conformité",
      "lede": "Face à la montée des risques psychosociaux, les solutions numériques de suivi du stress en entreprise multiplient les déploiements B2B. Pourtant, entre exigences RGPD, obligations d'accessibilité et défiance des salariés, le passage à l'échelle reste semé d'embûches.",
      "illustration": "portraits/Theo_Marczak.png",
      "body": "En 2024, le marché européen des solutions de bien-être au travail à composante digitale a franchi le cap des 2,4 milliards d'euros, selon le cabinet Frost & Sullivan. Une croissance portée en large partie par l'essor des wearables couplés à des tableaux de bord RH, permettant aux directions des ressources humaines de visualiser en temps réel les indicateurs de charge cognitive et de stress de leurs équipes.\n\nMais derrière les promesses commerciales, les acheteurs institutionnels affûtent leurs critères. « Nous recevons désormais des appels d'offres avec des grilles d'évaluation de dix pages sur la seule question de la conformité RGPD », confie Laure Desmet, directrice des achats chez un grand groupe industriel français, lors du salon Préventica Paris, début mars. Les données biométriques collectées par ces dispositifs entrent en effet dans la catégorie des données sensibles au sens de l'article 9 du règlement européen — ce qui impose des garanties techniques et juridiques particulièrement strictes.\n\nL'accessibilité numérique constitue un autre point de friction grandissant. Depuis l'entrée en vigueur progressive de la directive européenne sur l'accessibilité des produits et services (European Accessibility Act), dont les échéances pratiques s'étendent jusqu'en juin 2025, les acheteurs publics et de nombreuses grandes entreprises intègrent des clauses de conformité WCAG 2.1 niveau AA dans leurs contrats. « Un outil que 15 % de nos collaborateurs ne peuvent pas utiliser correctement à cause d'un handicap visuel ou cognitif n'est pas un outil de bien-être, c'est un outil d'exclusion », tranche le DRH d'un groupe de distribution contacté par L'Usine Digitale.\n\nCes contraintes font peser une pression inédite sur les éditeurs, souvent des startups en phase de croissance dont les roadmaps produit ont été bâties à une époque où ces sujets restaient secondaires. Plusieurs acteurs du secteur reconnaissent, sous couvert d'anonymat, avoir sous-estimé le coût d'une mise en conformité complète — parfois évalué entre 80 000 et 200 000 euros selon la complexité de la plateforme.\n\nLa question du cadrage initial du projet digital s'impose donc comme un moment stratégique. Les équipes qui structurent en amont un cahier des charges précis, intégrant dès la phase de conception les contraintes réglementaires, les profils utilisateurs réels et une estimation budgétaire réaliste, évitent des refontes coûteuses en cours de développement. « Le document de cadrage n'est plus une formalité administrative, c'est le premier livrable qui engage la crédibilité d'un fournisseur devant un grand compte », résume Pierre-Alexandre Thévenot, consultant senior chez Wavestone.\n\nDu côté des investisseurs, l'appétit reste vif mais les attentes se précisent. Les fonds spécialisés en santé numérique exigent désormais des preuves de traction B2B solides avant d'accompagner un passage à l'échelle, et regardent de très près la capacité des fondateurs à transformer une base de clients existante en références contractuelles structurées. Le seul argument du wearable innovant ne suffit plus à convaincre un comité d'investissement en 2025."
    }
  ],
  "fausseUne": {
    "source": "Les Échos",
    "host": "lesechos.fr",
    "rubrique": "Économie & Entreprises",
    "kicker": "Bien-être au travail",
    "date": "14 mars 2025",
    "headline": "Stress en entreprise : le marché des plateformes de monitoring explose, et les géants tech américains s'y engouffrent",
    "chapeau": "Microsoft, Salesforce et trois scale-ups européennes ont annoncé cette semaine des investissements massifs dans les outils digitaux de gestion du bien-être salarié. Pendant que les acteurs français tergiversent, la fenêtre de leadership se referme à grande vitesse. Les directions des ressources humaines, elles, n'attendent plus.",
    "body": "Le cabinet Gartner l'anticipait dès 2023 : 2025 serait l'année de la consolidation du marché des plateformes de monitoring du stress et de la santé mentale en entreprise. Force est de constater que la prédiction se vérifie avec une brutalité que peu d'observateurs avaient anticipée. En l'espace de six semaines, trois opérations majeures ont redessiné le paysage concurrentiel européen. L'allemand Humanoo vient de lever 40 millions d'euros en série B, tandis que la britannique Thrive at Work a signé un partenariat exclusif avec Workday pour intégrer ses modules directement dans les SIRH de 8 000 entreprises clientes. Côté réglementaire, la pression s'intensifie également : la directive européenne sur la santé psychologique au travail, dont la transposition en droit français est attendue avant fin 2025, contraint désormais les entreprises de plus de 250 salariés à produire des indicateurs mesurables de prévention des risques psychosociaux. « Les DRH que nous accompagnons ne cherchent plus à être convaincus, ils cherchent un outil opérationnel, conforme RGPD, déployable en moins de trois mois », confie Laure Steinberg, associée chez Mercer France. Dans ce contexte, les acteurs qui ne disposent pas d'une plateforme documentée, certifiée et prête à l'intégration risquent tout simplement d'être écartés des appels d'offres dès le second semestre."
  }
};

window.PAC_CONFIG = {
  "bloc": "bc2",
  accroche_namescreen: {
    "subtitle": "Cadrer le projet digital",
    "role": "consultant·e digital externe",
    "intro": "Tu es {{STUDENT}}, consultant·e digital chez Lumio Health pour cadrer le projet Lumio Pulse — une plateforme B2B de gestion du stress. Besoins, périmètre, budget, équipe, planning, cahier des charges : tu produis le cadrage du projet digital (E2) que Sonia Ferracci portera en interne.",
    "ratio_label": "3 semaines dans la vraie vie",
    "regles": [
      {
        "ico": "📄",
        "txt": "Tout ce que tu sais, c'est dans les documents de cadrage du poste de mission."
      },
      {
        "ico": "🤐",
        "txt": "Le jury teste la cohérence budget/périmètre/planning et la qualité de ton cahier des charges."
      },
      {
        "ico": "💬",
        "txt": "Quand tu as une hypothèse solide → Slack → ta commanditaire. Sa réaction débloque la suite."
      }
    ]
  },
  "titre": "Elaborer un projet digital au service d'un commanditaire",
  "epreuve": "E2. Cadrage d'un projet digital",
  "deadline": "14 mars 2025 · 18h00",
  "commanditaire": "Sonia Ferracci",
  "entreprise": "Lumio Health",
  "dispositif": "PAC",
  "accroche": "Tu es mandaté·e par <strong>Sonia Ferracci, Directrice Marketing de Lumio Health</strong>, pour cadrer le projet <em>Lumio Pulse</em> — une plateforme de gestion du stress B2B destinée aux mutuelles et grands comptes. L'analyse de marché est posée. Il faut maintenant passer à l'acte&nbsp;: définir le périmètre, construire le budget, constituer l'équipe et rédiger les spécifications. Jakob Rein (Northgate Capital) attend un dossier de cadrage solide pour le prochain board. Tu as accès aux emails de l'équipe, aux retours terrain de Camille Ott, aux spécifications techniques préliminaires et au brief Sonia. <em>Le projet existe sur le papier. À toi de le rendre réel.</em>",
  "note_reflexive": false,
  "temps": [
    {
      "n": 1,
      "label": "Ancrage terrain",
      "debut": 0,
      "fin": 20,
      "couleur": "#7a756c"
    },
    {
      "n": 2,
      "label": "Entrée dans l'affaire",
      "debut": 20,
      "fin": 50,
      "couleur": "#1b4f8a"
    },
    {
      "n": 3,
      "label": "Diagnostic",
      "debut": 50,
      "fin": 95,
      "couleur": "#1a6641"
    },
    {
      "n": 4,
      "label": "Production",
      "debut": 95,
      "fin": 175,
      "couleur": "#c4420f"
    },
    {
      "n": 5,
      "label": "Réflexion",
      "debut": 175,
      "fin": 210,
      "couleur": "#7a756c"
    }
  ],
  "competences": [
    {
      "code": "C.6",
      "label": "Identifier les besoins et le périmètre du projet digital, en évaluant les ressources disponibles et en consultant les parties prenantes internes et externes, afin de déterminer les objectifs à atteindre et les conditions de faisabilité.",
      "libelle": "Identifier les",
      "rncp": "Identifier les besoins et le périmètre du projet digital, en évaluant les ressources disponibles et en consultant les parties prenantes internes et externes, afin de déterminer les objectifs à atteindre et les conditions de faisabilité.",
      "placeholder": "Décrivez ici le périmètre de la plateforme Lumio Pulse : quels besoins exprimés et latents avez-vous identifiés auprès de Northgate et des équipes internes ? Quelles ressources humaines, techniques et financières sont disponibles ? Quels objectifs SMART avez-vous définis et comment s'articulent-ils avec la stratégie de Lumio Health ?",
      "min": 250,
      "motsCles": [
        "périmètre",
        "parties prenantes",
        "faisabilité",
        "objectifs",
        "ressources",
        "besoins",
        "contraintes",
        "axes stratégiques"
      ],
      "conseil": "Appuyez-vous sur la matrice RACI et les échanges avec Northgate (cf. Document 2) pour prouver la consultation des parties prenantes. Distinguez besoins fonctionnels et non fonctionnels. Reliez chaque objectif à la stratégie de développement B2B de Lumio Health."
    },
    {
      "code": "C.7",
      "label": "Élaborer le budget du projet digital, en évaluant les moyens financiers, humains et techniques nécessaires, en identifiant les intervenants internes et externes à intégrer, et en estimant les charges, afin d'assurer la répartition optimale des ressources et la viabilité économique du projet.",
      "libelle": "Élaborer le",
      "rncp": "Élaborer le budget du projet digital, en évaluant les moyens financiers, humains et techniques nécessaires, en identifiant les intervenants internes et externes à intégrer, et en estimant les charges, afin d'assurer la répartition optimale des ressources et la viabilité économique du projet.",
      "placeholder": "Présentez le budget prévisionnel de Lumio Pulse : décomposez les coûts humains (internes et prestataires), techniques (infrastructure cloud, licences, intégration API wearables), et opérationnels. Justifiez le choix de vos partenaires, anticipez les imprévus (provision ≥ 10 %) et démontrez la viabilité économique du projet face aux attentes de Théo Marczak.",
      "min": 220,
      "motsCles": [
        "budget",
        "coûts",
        "prestataires",
        "ressources humaines",
        "infrastructure",
        "viabilité",
        "provisions",
        "répartition"
      ],
      "conseil": "Structurez votre budget en postes distincts (développement, design UX, hébergement, maintenance, formation). Intégrez une analyse ROI simplifiée à horizon 18 mois pour convaincre le CEO. Référez-vous aux benchmarks sectoriels medtech (cf. Document 4)."
    },
    {
      "code": "C.8",
      "label": "Constituer une équipe d'experts, en tenant compte des compétences à mobiliser pour le projet, en leur restituant la problématique et les données recueillies au cours de la phase d'investigation, afin d'analyser les contraintes techniques et leurs implications en matière de développement.",
      "libelle": "Constituer une",
      "rncp": "Constituer une équipe d'experts, en tenant compte des compétences à mobiliser pour le projet, en leur restituant la problématique et les données recueillies au cours de la phase d'investigation, afin d'analyser les contraintes techniques et leurs implications en matière de développement.",
      "placeholder": "Décrivez la composition de l'équipe projet Lumio Pulse : quels profils internes (Lumio Health) et externes (prestataires, consultants) avez-vous mobilisés ? Comment avez-vous restitué la problématique et les données d'investigation à chaque expert ? Précisez les rôles, responsabilités et contributions de chacun face aux contraintes techniques identifiées (API wearables, sécurité des données de santé, RGPD).",
      "min": 200,
      "motsCles": [
        "équipe",
        "compétences",
        "rôles",
        "responsabilités",
        "experts",
        "inclusivité",
        "contraintes techniques",
        "restitution"
      ],
      "conseil": "Utilisez un tableau RACI pour présenter clairement les rôles. Justifiez l'inclusion de profils diversifiés (DPO pour le RGPD, expert accessibilité numérique). Montrez comment la restitution de la problématique a permis d'affiner l'analyse des contraintes techniques."
    },
    {
      "code": "C.9",
      "label": "Modéliser la proposition pour le projet digital, en synthétisant les différentes contributions des experts, en évaluant les avantages, les limites et les contraintes à prendre en compte, et en veillant au respect des principes de développement durable et d'accessibilité pour les publics en situation de handicap, afin d'assurer la faisabilité, la durabilité et l'accessibilité du projet.",
      "libelle": "Modéliser la",
      "rncp": "Modéliser la proposition pour le projet digital, en synthétisant les différentes contributions des experts, en évaluant les avantages, les limites et les contraintes à prendre en compte, et en veillant au respect des principes de développement durable et d'accessibilité pour les publics en situation de handicap, afin d'assurer la faisabilité, la durabilité et l'accessibilité du projet.",
      "placeholder": "Présentez votre proposition structurée pour la plateforme Lumio Pulse : synthèse des contributions experts, architecture fonctionnelle, avantages différenciants, limites identifiées et mesures d'atténuation. Démontrez l'intégration des principes de développement durable (hébergement green, éco-conception) et des exigences d'accessibilité RGAA/WCAG demandées par Northgate pour les collaborateurs en situation de handicap.",
      "min": 300,
      "motsCles": [
        "proposition",
        "faisabilité",
        "développement durable",
        "accessibilité",
        "RGAA",
        "handicap",
        "éco-conception",
        "compétitivité"
      ],
      "conseil": "Structurez votre proposition en sections claires : contexte, solution technique proposée, équipe, prix, méthode de chiffrage. Intégrez un niveau de conformité WCAG 2.1 AA minimum exigé par Northgate (cf. Document 3). Valorisez l'éco-conception comme argument commercial différenciant."
    },
    {
      "code": "C.10",
      "label": "Établir le calendrier de réalisation du projet digital, en structurant l'arborescence du projet avec les différentes étapes de réalisation, les actions à mettre en œuvre et les ressources nécessaires au regard des objectifs visés et des contraintes identifiées, afin de garantir le respect des délais et des échéances fixés.",
      "libelle": "Établir le",
      "rncp": "Établir le calendrier de réalisation du projet digital, en structurant l'arborescence du projet avec les différentes étapes de réalisation, les actions à mettre en œuvre et les ressources nécessaires au regard des objectifs visés et des contraintes identifiées, afin de garantir le respect des délais et des échéances fixés.",
      "placeholder": "Présentez le calendrier de réalisation de Lumio Pulse : décomposez le projet en phases (cadrage, conception, développement, tests, déploiement), détaillez les jalons clés, les livrables attendus à chaque étape et les ressources associées. Intégrez la contrainte de go-live contractuel imposée par Northgate au 1er septembre 2025 et justifiez la faisabilité de vos délais.",
      "min": 220,
      "motsCles": [
        "calendrier",
        "jalons",
        "phases",
        "délais",
        "WBS",
        "Gantt",
        "livrables",
        "contraintes temporelles"
      ],
      "conseil": "Produisez un WBS (Work Breakdown Structure) et un diagramme de Gantt synthétique. Identifiez le chemin critique. Prévoyez des buffers entre les phases pour absorber les aléas techniques liés à l'intégration des wearables Lumio."
    },
    {
      "code": "C.11",
      "label": "Rédiger le cahier des charges du projet digital, en coordonnant l'écriture des spécifications techniques et fonctionnelles, afin de garantir la clarté et l'exhaustivité des informations concernant le périmètre, les objectifs, le budget et le calendrier du projet.",
      "libelle": "Rédiger le",
      "rncp": "Rédiger le cahier des charges du projet digital, en coordonnant l'écriture des spécifications techniques et fonctionnelles, afin de garantir la clarté et l'exhaustivité des informations concernant le périmètre, les objectifs, le budget et le calendrier du projet.",
      "placeholder": "Rédigez le cahier des charges de la plateforme Lumio Pulse : spécifications fonctionnelles (modules dashboard RH, alertes stress, reporting), spécifications techniques (stack technologique, API wearables, hébergement HDS), contraintes réglementaires (RGPD, données de santé), critères de qualité et conditions de recette. Le document doit être suffisamment précis pour être remis directement à un prestataire de développement.",
      "min": 280,
      "motsCles": [
        "cahier des charges",
        "spécifications fonctionnelles",
        "spécifications techniques",
        "contraintes",
        "recette",
        "qualité",
        "ergonomie",
        "HDS"
      ],
      "conseil": "Organisez le CDC en sections standard : contexte & objectifs, périmètre fonctionnel, architecture technique, contraintes réglementaires, critères d'acceptation, planning et budget. Référencez explicitement les exigences Northgate issues du Document 3. Assurez-vous que chaque spécification est testable."
    },
    {
      "code": "C.12",
      "label": "Élaborer le backlog de produit du projet digital, en spécifiant et priorisant les tâches et fonctionnalités à réaliser, et en le modifiant régulièrement en fonction de l'évolution du projet, afin d'assurer une gestion flexible et réactive du projet.",
      "libelle": "Élaborer le",
      "rncp": "Élaborer le backlog de produit du projet digital, en spécifiant et priorisant les tâches et fonctionnalités à réaliser, et en le modifiant régulièrement en fonction de l'évolution du projet, afin d'assurer une gestion flexible et réactive du projet.",
      "placeholder": "Présentez le backlog produit initial de Lumio Pulse : listez et priorisez les epics et user stories par ordre de valeur métier (MoSCoW ou Kano). Pour chaque item, précisez les critères d'acceptation, l'estimation de charge et la justification de la priorité. Expliquez votre processus de révision du backlog en fonction des feedbacks de Northgate et des contraintes techniques révélées en cours de développement.",
      "min": 240,
      "motsCles": [
        "backlog",
        "epics",
        "priorisation",
        "MoSCoW",
        "critères d'acceptation",
        "sprint",
        "vélocité",
        "révision"
      ],
      "conseil": "Structurez votre backlog en épics cohérentes (ex : Authentification & RGPD, Dashboard stress RH, Alertes temps réel, Reporting analytics, Module accessibilité). Utilisez la méthode MoSCoW pour justifier les priorités. Montrez comment le backlog évolue après le retour de Jakob Rein (cf. Document 6)."
    },
    {
      "code": "C.13",
      "label": "Créer les user stories du projet digital, en définissant les profils-types utilisateurs, et en décrivant le parcours de chaque fonctionnalité, afin d'identifier les besoins et attentes des utilisateurs.",
      "libelle": "Créer les",
      "rncp": "Créer les user stories du projet digital, en définissant les profils-types utilisateurs, et en décrivant le parcours de chaque fonctionnalité, afin d'identifier les besoins et attentes des utilisateurs.",
      "placeholder": "Créez les user stories de Lumio Pulse en vous appuyant sur les personas validés (RH manager, collaborateur porteur de wearable, DSI Northgate, dirigeant). Pour chaque persona, rédigez au moins 2 user stories au format standard (En tant que… je veux… afin de…) avec des critères de réussite mesurables. Décrivez les parcours utilisateurs associés et les points de friction identifiés.",
      "min": 230,
      "motsCles": [
        "user stories",
        "personas",
        "parcours utilisateur",
        "critères de réussite",
        "format standard",
        "besoins",
        "attentes",
        "interactions"
      ],
      "conseil": "Basez vos personas sur les données terrain fournies par Yassine Morel (cf. Document 5) tout en signalant leurs limites de validation. Rédigez des user stories INVEST (Indépendante, Négociable, de Valeur, Estimable, Small, Testable). Intégrez un persona spécifique pour les utilisateurs en situation de handicap."
    }
  ],
  "gabarits": {},
  "questionsPositionnement": [],
  "juryPrompt": "Tu es le jury certifiant du bloc bc2 (Manager en stratégie et développement de projet digital).\nContexte : Projet Lumio Pulse — Plateforme de gestion du stress B2B · 14 mars 2025.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Absence de définition du périmètre et des objectifs du projet : le dossier ne permet pas d'identifier clairement ce que couvre la plateforme Lumio Pulse ni les résultats attendus.\n- Rôles et responsabilités des membres de l'équipe non définis ou non différenciés : aucun tableau RACI ou équivalent ne permet d'identifier qui fait quoi sur le projet.\n- Absence d'indicateurs d'impact mesurables : le dossier ne comporte aucun KPI, métrique de succès ou critère de réussite permettant d'évaluer l'atteinte des objectifs après déploiement.\n- Budget absent, non chiffré ou sans justification des choix de prestataires : la viabilité économique du projet ne peut être appréciée par le jury.\n- Cahier des charges inexploitable : les spécifications fonctionnelles et techniques sont absentes ou trop vagues pour être transmises à un prestataire de développement.\n- Non-prise en compte des exigences d'accessibilité numérique et de développement durable : aucune mention des normes WCAG/RGAA ni de démarche d'éco-conception malgré les exigences contractuelles de Northgate.\n- Backlog et user stories absents ou non priorisés : l'absence de critères d'acceptation et de logique de priorisation rend la gestion agile du projet impossible.\n\nRéponds EXACTEMENT dans ce format :\n### C.6 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.7 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.8 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.9 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.10 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.11 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.12 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.13 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.",
  "livrableMinMots": 520,
  "noteReflexiveMinMots": 100
};
// Alias de compatibilité
window.PASS_CONFIG = window.PAC_CONFIG;
