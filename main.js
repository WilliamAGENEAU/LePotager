/**
 * read the csv file
 *
 * @param {*} input
 */
function read_csv(input) {
    let file = input.files[0];
    //let file = "utils/INR_GR491-Plus-Automaton-11-2021.xlsx";
    let fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = function () {
        alert(fileReader.result);
    };

    fileReader.onerror = function () {
        alert(fileReader.error);
    };
}

function init() {
    var map = L.map('map').setView([48.856614, 2.352221], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var myGeoJson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "id": "dcd62188-5574-ec11-ff68-85aa38720e3d",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "dcd62188-5574-ec11-ff68-85aa38720e3d",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "MOOC",
                    "Libellé_de_l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Développeur responsable :- Comprendre les enjeux du Numérique Responsable- Comprendre l'impact environnemental des décisions de développement- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien- Mesurer l'empreinte environnementale de votre application- Réduire l'impact environnemental de votre code",
                    "Type_organisme": "Cours en ligne",
                    "NOM": "The green Companion",
                    "Intitule_de_la_formation": "Développeur responsable",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non",
                    "Duree_de_la_formation": "1.5",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://thegreencompagnon.com/cours/developpeur-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "8c968112-585e-9085-cd68-ac08fa2d6fa6",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "8c968112-585e-9085-cd68-ac08fa2d6fa6",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "MOOC",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Designer responsable :- Comprendre les enjeux du Numérique Responsable- Comprendre l’impact environnemental de vos décisions design & UX- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien- Réduire l’impact environnemental de vos designs et de vos parcours utilisateurs",
                    "Type_organisme": "Cours en ligne",
                    "NOM": "The green Companion",
                    "Intitule_de_la_formation": "Designer responsable",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non",
                    "Duree_de_la_formation": "1.5",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://thegreencompagnon.com/cours/ux-ui-designer-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "eb94731d-b0eb-64e5-3ff8-2abc4d31230f",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "eb94731d-b0eb-64e5-3ff8-2abc4d31230f",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "MOOC",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Infrastructure responsable :- Comprendre les enjeux du Numérique Responsable- Comprendre l’impact environnemental des datacenters et des services clouds- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien- Utiliser les outils de mesure d’empreinte carbone des datacenters- Réduire l’impact environnemental de votre infrastructure",
                    "Type_organisme": "Cours en ligne",
                    "NOM": "The green Companion",
                    "Intitule_de_la_formation": "Infrastructure responsable",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non",
                    "Duree_de_la_formation": "1.5",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://thegreencompagnon.com/cours/sre-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "26d755e1-f9bf-280d-e43b-32507cc72148",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "26d755e1-f9bf-280d-e43b-32507cc72148",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "MOOC",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Impact du numérique et concepts clés de l’éco-conception :- Comprendre l'origine du dérèglement climatique- Comprendre l'impact environnemental, éthique et social de votre produit- Acquérir les concepts clés du Numérique Responsable​",
                    "Type_organisme": "Cours en ligne",
                    "NOM": "The green Companion",
                    "Intitule_de_la_formation": "Impact du numérique et concepts clés de l'éco-conception",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://thegreencompagnon.com/cours/impact-du-numerique-et-concepts-cles-de-leco-conception/"
                }
            },
            {
                "type": "Feature",
                "id": "f5469a0c-13a2-f013-0ec4-85b7573c9b55",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "f5469a0c-13a2-f013-0ec4-85b7573c9b55",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "MOOC",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "il est fréquent d’entendre dire que le numérique est “green”, c’est-à-dire qu’il n’a pas ou que peu d’impact écologique, voire qu’il réduit les impacts écologiques du reste de notre économie. Dans ce cours, nous allons remettre en question ces deux idées. En effet, le numérique a au contraire des impacts écologiques réels et croissants : émissions de gaz à effet de serre, pollutions, production de déchets toxiques, etc. De plus, sa capacité à réduire les impacts écologiques du reste de notre économie est sujette à caution (effet rebond, obsolescence programmée, etc.).Grâce à des exemples concrets et des cas pratiques, ce cours vous permettra d’avoir un aperçu des enjeux et des moyens disponibles pour rendre le numérique plus écologique. Suivre ce cours vous permettra de vous outiller pour être acteur d’un numérique plus écologique. Vous serez en capacité de réduire l’impact écologique d’un SI, celui d’un site web et de vous impliquer dans l’écoconception d’un service numérique.Vous souhaitez déployer des actions Green IT dans votre entreprise ? Alors rejoignez-moi dans le premier chapitre !",
                    "Type_organisme": "OpenClasse room",
                    "NOM": "",
                    "Intitule_de_la_formation": "Appliquez les principes du GreenIT dans votre entreprise",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://openclassrooms.com/fr/courses/6227476-appliquez-les-principes-du-green-it-dans-votre-entreprise"
                }
            },
            {
                "type": "Feature",
                "id": "377e35fd-b64d-4190-1d16-691e1a33c55a",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "377e35fd-b64d-4190-1d16-691e1a33c55a",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Comprendre les enjeux du numérique responsableMaitriser les réglementations du secteurAgir sur son écosystème en intégrant des bonnes pratiques professionnellesMettre en œuvre une stratégie numérique responsable",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Pollen",
                    "Intitule_de_la_formation": "NUMÉRIQUE RESPONSABLE",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non mais les apprenants sont en mesure de passer le certificat de connaissance à l'issue de cette formation",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "328a9141-8ec3-b394-272a-107ebfee3edc",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "328a9141-8ec3-b394-272a-107ebfee3edc",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Maîtriser la démarche et la méthodologie de conception responsable de services numériques pour déployer le Numérique Responsable dans les projets- Savoir mesurer la performance environnementale d’un site internet- Savoir identifier les leviers d’actions à mettre en œuvre- Être en mesure de concevoir un service numérique en intégrant les bonnes pratiques d’éco-conception web et d’accessibilité- Identifier les référentiels et outils existants- Obtenir la certification éco conception web délivrée par l’Institut du Numérique Responsable",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Pollen",
                    "Intitule_de_la_formation": "Ecoconception de site Internet",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "oui. Un certificat de connaissance délivré par l'INR",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.toulouse.cci.fr/solution/eco-conception-de-site-internet"
                }
            },
            {
                "type": "Feature",
                "id": "76196c69-b904-1a8d-1435-c9389abdf283",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "76196c69-b904-1a8d-1435-c9389abdf283",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Accessibilité web• Définir une stratégie de mise en place de l’accessibilité numérique • Sensibiliser différents publics (collègues, prestataires, responsables…) aux enjeux de l’accessibilité numérique • Favoriser la prise en compte de l’accessibilité à tous les niveaux de l’organisation (achats, conception/UX, développements techniques, formation…) • Élaborer des schémas d’accessibilité pluriannuels et plans annuels • Auditer un site et savoir évaluer certains critères d’accessibilité sur un site web • Intégrer l’assurance qualité web dans votre démarcheAssurance qualité web• Connaître le modèle et les check-lists qualité Web • Connaître les méthodes d’évaluation des sites Web • Prévenir les risques et maîtriser le vocabulaire du web • Gérer la qualité et l’accessibilité d’un site internet",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Pollen",
                    "Intitule_de_la_formation": "Accessibilité et assurance qualité web",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "56809328-5645-b7fc-bbbc-cb627db443d0",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "56809328-5645-b7fc-bbbc-cb627db443d0",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "CONTENU DE LA FORMATIONJOUR 01CONSCIENTISATION : LA FACE CACHEE DE LA REVOLUTION NUMERIQUE› L’impact du Numérique sur l’environnement› L’exclusion Numérique› Soyons précis sur les termes !› Atelier /mise en pratiqueCOMPRENDRE L’ECOCONCEPTION DE SERVICES NUMERIQUES› Pourquoi l’écoconception ?› Les enjeux du Numérique Responsable pour l’entreprise› Etat de l’art› Ecosystème du numérique responsable› Atelier/ Mise en pratiqueUN MODELE RECONNU : LE GREENSOFT MODEL› La « software value Map »› Audit du niveau d’écoconception d’un logiciel› Le modèle « Greensoft »› Les enjeux au niveau du poste de travail› Mise en pratique : quels « quick wins » au sein de votre organisation ?JOUR 02Le formateur s’attachera à créer des passerelles entre la formation et les environnements professionnels des participants.CAS CONCRET› Application de la software value Map› Application du Greensoft Model› EngagementsMISES EN PRATIQUES AU NIVEAU PROJETLe formateur présente un projet à étudier. Le formateur déroule le sujet pour que chacun puisse se l’approprier et mettre en pratique une démarche d’écoconception numérique en utilisant les outils et les bonnes pratiques.CLOTURE, RESTITUTION ET BILAN DE LA JOURNEE",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "INFOGREEN FACTORY",
                    "Intitule_de_la_formation": "ECOCONCEPTION-  GESTION DE PROJETS",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "OBJECTIFS PÉDAGOGIQUESPrendre du recul par rapport au « business as usual » dans les projets informatiques.Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.Acquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.S’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.Identifier les référentiels et outils existants.Comprendre l’écoconception appliquée aux services numériques.Être en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’éco-conception numérique.",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://infogreenfactory.green/contact/ouvia notre partenaire IHMISEN: https://ihmisen.com/NRE030_Ecoconception-pour-la-gestion-de-projets.php"
                }
            },
            {
                "type": "Feature",
                "id": "29647431-2f1c-ab13-657a-aa6bab7f34af",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "29647431-2f1c-ab13-657a-aa6bab7f34af",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "CONTENU DE LA FORMATIONJOUR 01QUIZ – PRISE DE CONTACTLES ENJEUX› Les apports et travers du numérique› L’impact environnemental› L’exclusion de certains publics› Les dérives éthiquesLES LEVIERS ET LES OUTILS POUR DEPLOYER UNE STRATEGIE NUNERIQUE RESPONSABLE› Green IT, IT for green, Numérique Responsable,…› Les leviers politiques (législation actuelle et évolution)› L’importance de la RSE au sein des entreprises› Les outilsDEPLOYER UNE STRATEGIE NUMERIQUE RESPONSABLE› 8 bonnes raisons› Stratégie globale vs stratégie NR› Les incontournables› Les outilsJOUR 02LES ETAPES D’UNE STRATEGIE NUMERIQUE RESPONSABLE EN ENTREPRISE› La Sensibilisation› Les étapes et les référentiels› Un projet NR› La gouvernance du NR en entrepriseLES BONNES PRATIQUES PAR GRANDS DOMAINES TECHNIQUE› Les référentiels› Les achats› La gestion de la fin de vie› Le poste de travailATELIER PRATIQUE POSTE DE TRAVAIL› L’impression› La téléphonie› Les projets IT› Les Datacentre› Les bonnes pratiques individuellesCAS PRATIQUE EN PETITS GROUPESQUIZZ EN PREPARATION A LA CERTIFICATION NRENJEUX, PERSPECTIVES ET RESSOURCES DISPONIBLESCLOTURE, RESTITUTION ET BILAN DE LA FORMATION",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "INFOGREEN FACTORY",
                    "Intitule_de_la_formation": "NUMÉRIQUE RESPONSABLE",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche responsable.Identifier dans l’ensemble du cycle de vie des équipements et services numériques les critères importants (achats, usage, fin de vie, conception).Découvrir une méthodologie et des outils pour une mise en pratique du numérique responsable.Valider la certification « Numérique responsable » portée par l’Université de la Rochelle et l’Institut du Numérique Responsable (INR).",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://infogreenfactory.green/contact/ouhttps://ihmisen.com/NRE010_Sensibilisation-au-Numerique-Responsable.php"
                }
            },
            {
                "type": "Feature",
                "id": "4b7aa125-f31e-68ec-5662-a39550848c24",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "4b7aa125-f31e-68ec-5662-a39550848c24",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Développeur responsable :Cette formation est faite pour vous si vous souhaitez :- Comprendre les enjeux du Numérique Responsable- Comprendre l’impact environnemental des décisions de développement- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien- Mesurer l’empreinte environnementale de votre application- Réduire l’impact environnemental de votre code",
                    "Type_organisme": "Entreprise",
                    "NOM": "The Green Compagnon",
                    "Intitule_de_la_formation": "Développeur responsable (front & back)",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://thegreencompagnon.com/cours/developpeur-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "1830108a-b76f-5970-6e6e-948be4237ce5",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "1830108a-b76f-5970-6e6e-948be4237ce5",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Vous êtes UI Designer, UX Manager ou Product Manager ?Cette formation est faite pour vous si vous souhaitez :- Comprendre les enjeux du Numérique Responsable- Comprendre l’impact environnemental de vos décisions design & UX- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien- Réduire l’impact environnemental de vos designs et de vos parcours utilisateurs",
                    "Type_organisme": "Entreprise",
                    "NOM": "The Green Compagnon",
                    "Intitule_de_la_formation": "Designer Responsable",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://thegreencompagnon.com/cours/ux-ui-designer-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "22ed46a6-c717-f546-ac32-e0fc752d6cee",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "22ed46a6-c717-f546-ac32-e0fc752d6cee",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "JOUR 1 :Les objectifs du référentiel CoRSer Num• Le principe• Les enjeux du référentielLa structure de CoRSer Num• Les familles / étapes projet• Liaison avec les ODD de l’ONU• Les recommandations• Les critères et les catégories de critères• Le référentiel en chiffreMise en œuvre du référentiel• La méthodologieLe contenu des référentiels GR 491 et RGESN• Le détail des incontournables du Numérique Responsable• Personnaliser votre listeLes autres référentiels• Référentiel d’accessibilité• Référentiel OPQUAST• Référentiel PIDILA• Référentiel Général d’Ecoconception de Services Numériques• Les autres (RGPD, RGS)Clôture, restitution, évaluation des acquis et bilan de la formation",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "IHMISEN",
                    "Intitule_de_la_formation": "Ecoconception outils, GR 491 et RGESN",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Cette formation vise à fournir aux participants une connaissance duréférentiel de l’INR le GR491 et du RGESN (référentiel d'écoconception issu du GR491) pour mettre en pratique les recommandations danschacune des étapes projet.La formation permettra :• De préciser les objectifs du référentiel• De comprendre la structure des éléments proposés dans le référentiel• D’identifier les relations avec les Objectifs de Développement Durablede l’ONU• De préciser la méthodologie de mise en œuvre du référentiel dans uneorganisation• De comprendre les éléments exposés dans le référentiel• De relier le référentiel INR avec les autres référentiels disponiblesLe module « Référentiel INR » a donc pour vocation de permettre aux acteursdu numérique (Product Owner, Développeurs, Designers, Chefs de projet) demettre en pratique l’écoconception de services numériques dans unedémarche Numérique Responsable et de sobriété numérique.",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://ihmisen.com/NRE060_Referentiel-CoRSer-Num-de-l-INR.php"
                }
            },
            {
                "type": "Feature",
                "id": "94e3a197-449e-56e3-4a18-7825e614946c",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.6800198,
                        48.1113387
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "94e3a197-449e-56e3-4a18-7825e614946c",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Véritable point de départ de votre stratégie numérique responsable, cette formation vous permettra de faire des choix pertinents en accord avec les enjeux environnementaux et sociaux actuels selon votre contexte.Nous y (re)découvrirons les impacts environnementaux et sociaux du numérique, la législation et l'écosystème. Puis chaque domaine d'action en entreprise sera évoqué avec les bonnes pratiques associées, les outils existants et les acteurs correspondants. Enfin la mise en place du changement en entreprise (gouvernance, communication, intégration des collaborateurs, amélioration continue...) sera étudiée à partir du contexte spécifique des participants. Ces participants repartiront également avec une feuille de route des prochaines actions à mener pour agir dès la fin de la formation.",
                    "Type_organisme": "Formatrice",
                    "NOM": "Ecologeek",
                    "Intitule_de_la_formation": "Initier une démarche Numérique Responsable dans mon entreprise",
                    "Localisation_de_la_structure": "Rennes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Possibilité de passer la certification numérique responsable de l'INR après la formation.",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ecologeek.fr/formation"
                }
            },
            {
                "type": "Feature",
                "id": "772a3cdd-3179-7096-0471-f844e39d97a7",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.240206,
                        48.8356649
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "772a3cdd-3179-7096-0471-f844e39d97a7",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs :Comprendre le contexte du Green IT : chiffres clés, tendances, etcIdentifier les acteurs et les outils du Green IT.Définir une stratégie Green IT alignée sur la politique RSE / Développement Durable de l'organisationMettre en place les outils de suivi, pilotage et gouvernance de la stratégie Green ITIdentifier les dossiers clés pour votre organisation tant en terme de retour sur investissement que de réduction d’empreinte écologiqueProgramme :Jour 1Contexte du Green IT et Constats (Les enjeux du développement durable, les objectifs de développement durable, la RSE et sa position par rapport au Green IT)Outils et connaissances de base (La notion de cycle de vie, Les impacts du numérique tout au long du cycle de vie, Analyse de Cycle de Vie, Bilan Carbone, Energie Grise)Jour 2Réduire les impacts du numérique (Le cadre réglementaire, les normes, les labels)Où en sont les entreprises ? ( Les bonnes pratiques du Green IT, Des exemples d’actions et d’initiatives)Les composantes d’une démarche Green IT (Gouvernance, Parties prenantes)Mettre en oeuvre un stratégie Green IT (Les étapes-clé, piloter la performance, soit à partir d'une étude de cas, soit à partir du cas concret de l'entreprise)Inventaire des pratiques existantes grâce à une 'check list' sur les 8 thématiques du Green IT",
                    "Type_organisme": "Formatrice d'entreprise",
                    "NOM": "",
                    "Intitule_de_la_formation": "Green IT",
                    "Localisation_de_la_structure": "Boulogne-Billancourt",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "1.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "http://www.valerieschneider.com"
                }
            },
            {
                "type": "Feature",
                "id": "36485256-4f5f-9866-81fc-33327bf94b5f",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "36485256-4f5f-9866-81fc-33327bf94b5f",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Cette formation de deux jours permet de comprendre les enjeux du numérique responsable, maîtriser les règlementations du secteur, intégrer les bonnes pratiques pour, au final, être en mesure de mettre en œuvre une stratégie numérique responsable au sein de l'entreprise.",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "M.I.R",
                    "Intitule_de_la_formation": "S'orienter vers un numérique plus responsable",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Certificat de connaissance de l’Institut du Numérique Responsable (optionnel)",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.mir-cf.com/formations"
                }
            },
            {
                "type": "Feature",
                "id": "1280bbbe-7023-8a54-f89e-7fce7315a19c",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "1280bbbe-7023-8a54-f89e-7fce7315a19c",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs de la formation :Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche responsable.Identifier dans l’ensemble du cycle de vie des équipements et services numériques les critères importants (achats, usage, fin de vie, conception).Découvrir une méthodologie et des outils pour une mise en pratique du numérique responsable.Appréhender les bonnes pratiques des grands domaines.Préparer la certification « Numérique responsable » portée par l’Université de la Rochelle et l’Institut du Numérique Responsable (INR).Comprendre les enjeux des années à venir.",
                    "Type_organisme": "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
                    "NOM": "Ihmisen Academy",
                    "Intitule_de_la_formation": "Sensibilisation au Numérique Responsable",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "› Attestation de fin de formation.› Certification Numérique Responsable (NR).",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ihmisen.com/NRE010_Sensibilisation-au-Numerique-Responsable.php"
                }
            },
            {
                "type": "Feature",
                "id": "5a4ccbcc-c8c7-9b9f-ee2d-a3f53ecd207e",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "5a4ccbcc-c8c7-9b9f-ee2d-a3f53ecd207e",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectif de la formation :Présenter les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.Comprendre que le succès du déploiement de cette démarche est lié à son intégration dans une stratégie durable et globale d’entreprise.Faire ainsi converger la stratégie de l’organisation et les enjeux que le Numérique Responsable doit traiter.Définir les outils nécessaires à la prise en charge de la durabilité dans la stratégie d’entreprise.Identifier les leviers permettant de déployer et piloter l’écoconception au sein des organisations.Se projeter sur une mise en pratique concrète en entreprise.",
                    "Type_organisme": "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
                    "NOM": "Ihmisen Academy",
                    "Intitule_de_la_formation": "Numérique Responsable - Ecoconception pour les dirigeants",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "› Attestation de fin de formation.",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ihmisen.com/NRE020_Ecoconception-pour-les-dirigeants.php"
                }
            },
            {
                "type": "Feature",
                "id": "ff25725e-3387-c673-1cad-a225f431fe7c",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "ff25725e-3387-c673-1cad-a225f431fe7c",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectif de la formation :Prendre du recul par rapport au « business as usual » dans les projets informatiques.Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.Comprendre l’écoconception appliquée aux services numériques.S’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.Identifier les référentiels et outils existants.Acquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.Être en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’éco-conception numérique.",
                    "Type_organisme": "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
                    "NOM": "Ihmisen Academy",
                    "Intitule_de_la_formation": "Numérique Responsable - Ecoconception pour la gestion de projets",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "› Attestation de fin de formation.",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ihmisen.com/NRE030_Ecoconception-pour-la-gestion-de-projets.php"
                }
            },
            {
                "type": "Feature",
                "id": "9b593846-ad86-6f06-85c2-a828f378f17d",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "9b593846-ad86-6f06-85c2-a828f378f17d",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs pédagogiquesPrendre du recul par rapport au « business as usual » dans les projets informatiques.Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.Comprendre l’écoconception appliquée aux services numériques.S’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.Identifier les référentiels et outils existants.Acquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.Être en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’éco-conception numérique.",
                    "Type_organisme": "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
                    "NOM": "Ihmisen Academy",
                    "Intitule_de_la_formation": "Numérique Responsable - Ecoconception pour les développeurs",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "› Attestation de fin de formation.",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ihmisen.com/NRE040_Ecoconception-pour-les-developpeurs.php"
                }
            },
            {
                "type": "Feature",
                "id": "6af7c187-6fc6-7c3c-e494-6376922dc4c2",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "6af7c187-6fc6-7c3c-e494-6376922dc4c2",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs pédagogiquesPréciser les objectifs du référentiel.Comprendre la structure des éléments proposés dans le référentiel.Identifier les relations avec les Objectifs de Développement Durable de l’ONU.Préciser la méthodologie de mise en œuvre du référentiel dans une organisation.Comprendre les éléments exposés dans le référentiel.Relier le référentiel INR avec les autres référentiels disponibles.",
                    "Type_organisme": "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
                    "NOM": "Ihmisen Academy",
                    "Intitule_de_la_formation": "Numérique Responsable – Référentiel « Conception responsable de Services Numériques » de l’INR",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "› Attestation de fin de formation.",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ihmisen.com/NRE060_Referentiel-CoRSer-Num-de-l-INR.php"
                }
            },
            {
                "type": "Feature",
                "id": "3c7fb8f8-9f83-7c5f-5577-d1eb6538cf51",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "3c7fb8f8-9f83-7c5f-5577-d1eb6538cf51",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs pédagogiquesPrendre du recul par rapport au « business as usual » dans les projets informatiques.Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.Comprendre l’écoconception appliquée aux services numériques.S’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.Identifier les référentiels et outils existants.Acquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.Être en mesure de concevoir un produit / service en intégrant les bonnes pratiques d’éco-conception numérique.",
                    "Type_organisme": "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
                    "NOM": "Ihmisen Academy",
                    "Intitule_de_la_formation": "Numérique Responsable – Ecoconception pour les Fonctionnels",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "› Attestation de fin de formation.",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ihmisen.com/NRE070_Ecoconception-pour-les-Fonctionnels.php"
                }
            },
            {
                "type": "Feature",
                "id": "f7b48efd-c374-9787-a317-6cc04de5a537",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "f7b48efd-c374-9787-a317-6cc04de5a537",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs pédagogiquesMettre en œuvre une dynamique collective pour faciliter les partages d’expérience.Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.Comprendre pourquoi et comment une démarche d’écoconception permet de réduire les impacts du numérique sur l’environnement et l’exclusion des personnes.Prendre du recul par rapport au « business as usual » dans les projets informatiques.S’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.Acquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.Identifier les référentiels et outils existants.Comprendre l’écoconception appliquée aux services numériques.Être en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’écoconception numérique.Comprendre que les performances environnementales, techniques et la sécurité des services numériques convergent.Connaître les outils disponibles pour mettre en œuvre l’écoconception appliquée aux services numériques.Renforcer les bonnes pratiques des métiers du développement et du design pour mettre en œuvre efficacement l’écoconception.Développer et de transmettre une démarche holistique d’écoconception de service numérique.",
                    "Type_organisme": "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
                    "NOM": "Ihmisen Academy",
                    "Intitule_de_la_formation": "Numérique Responsable – Ecoconception pour les Lead Dev, Développeurs et UX Designers",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "› Attestation de fin de formation.",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ihmisen.com/NRE080_Ecoconception-pour-les-lead-dev-developpeurs-UX-designers.php"
                }
            },
            {
                "type": "Feature",
                "id": "c61a242b-af33-87b5-635f-6d461384e808",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "c61a242b-af33-87b5-635f-6d461384e808",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs de la formation :- Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numérique- Comprendre les impacts du numérique inscrits dans des enjeux globaux- Maîtriser les différences de concepts et de valeurs présents dans le Numérique responsable- Aborder la démarche d’écoconception numérique de façon simple et outillée- Agir, en créant le réflexe de sobriété numérique au sein des futurs projets numériques- Réfléchir concrètement à l’écoconception d’un service numérique en minimisant son impact environnemental via un exercice d’optimisationLe programme détaillé est le suivant :1/ Le contexte actuel, les enjeux environnementaux et sociaux2/ L’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numérique3/ L’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de vie4/ Place à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthique et numérique responsable5/ Atelier de réflexion collective afin de définir et de catégoriser des bonnes pratiques d’écoconception et de numérique responsable6/ Comment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebonds7/ La démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiques8/ (Atelier pratique d’1 journée) Amélioration d’un projet web fictif dès la conception UX",
                    "Type_organisme": "Entreprise délivrant des formations certifiées Qualiopi",
                    "NOM": "Temesis",
                    "Intitule_de_la_formation": "Comprendre le numérique responsable & la démarche d’écoconception numérique, avec ateliers pratiques",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Validation de participation",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "http://www.temesis.com"
                }
            },
            {
                "type": "Feature",
                "id": "9f812f60-a699-03db-c108-43a8a7476d0e",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "9f812f60-a699-03db-c108-43a8a7476d0e",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Un atelier pour comprendre en équipe et de manière ludique les enjeux environnementaux du numérique.",
                    "Type_organisme": "Association",
                    "NOM": "La Fresque Du Numérique",
                    "Intitule_de_la_formation": "La Fresque Du Numérique",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.fresquedunumerique.org/"
                }
            },
            {
                "type": "Feature",
                "id": "d1dce6b4-d07e-9753-2564-ed234a33c182",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "d1dce6b4-d07e-9753-2564-ed234a33c182",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Permettre à un gestionnaire de services numériques d’adopter des comportements numériques responsables, conformément au référentiel du Label Numérique Responsable. Cette formation permet de comprendre le référentiel de l’INR et de pouvoir s’engager, avec la formation complémentaire « Démarche de Labellisation Numérique Responsable » dans la démarche de labellisation LNR.",
                    "Type_organisme": "Agence de labellisation",
                    "NOM": "Agence Lucie",
                    "Intitule_de_la_formation": "Maitriser les enjeux et piloter une démarche Numérique Responsable avec le label NR",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "En route vers la labellisationOui, validation des compétences :-Comprendre les enjeux du numérique responsable et les comportements clefs à adopter pour les respecter.-Connaître le référentiel du Label du Numérique Responsable ainsi que les enjeux de cette thématique.-Savoir évaluer les enjeux, son niveau et ses axes d’amélioration sur le numérique responsable.-Identifier les priorités propres à son organisation dans le cadre de sa démarche NR. Se préparer à un audit NR externe.-Rédiger des engagements concrets, engageants, réalisables et conformes aux attentes d’un comité de labellisation.-Être capable de préparer l’auto-évaluation d’une organisation et de mener une démarche de labellisation LNR1 ou LNR2 dans une entreprise ou organisation.",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://docs.zohopublic.eu/folder/1ciiyda9edd3f0194450b9507cffdd32025d6"
                }
            },
            {
                "type": "Feature",
                "id": "33e3a2aa-8a1a-185c-d68a-be3fb128a7a0",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.2647222,
                        47.0505556
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "33e3a2aa-8a1a-185c-d68a-be3fb128a7a0",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Comprendre les liens entre les GAFAM et l'impact environnemental du numériqueComment protéger ses données personnelles tout en limitant son impact numériqueEtat des lieux du monde numériqueParamétrage de smartphone pour réduire son empreinte énergétiqueTest de solution libre et open sourcePrésentation des alternatives (réseaux locaux et décentralisés)Utilisation d'outil d'audit et de testBonnes pratiques",
                    "Type_organisme": "Formateur indépendant",
                    "NOM": "TkPx",
                    "Intitule_de_la_formation": "Sobriété numérique et internet éco-responsable",
                    "Localisation_de_la_structure": "La Bernardière",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://tkpx.eu/formations-professionnelles/"
                }
            },
            {
                "type": "Feature",
                "id": "90aef747-9997-2149-09ef-b6d58593a802",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.1266886,
                        48.8035403
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "90aef747-9997-2149-09ef-b6d58593a802",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "L'atelier Trivial Numérique Responsable est une solution ludique, sous forme d’un atelier, qui a fait ses preuves auprès d’organisations qui souhaitaient comme vous, intégrer leur système d’information dans leur stratégie RSE.L’animation de l’atelier comprend : un jeu de cartes par participant, une réunion de brief pour cadrage avant livraison, 4 affiches sur les impacts du numérique, une enquête en ligne post-atelier, une affiche récapitulative finale pour valoriser l’action en interne comme en externe.",
                    "Type_organisme": "Entreprise de conseil",
                    "NOM": "OM Conseil",
                    "Intitule_de_la_formation": "Atelier Trivial Numérique Responsable",
                    "Localisation_de_la_structure": "Versailles",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.om-conseil.fr/atelier-ludique-de-sensibilisation-au-numerique-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "a203c157-d0c6-8029-e4df-6eea0da40a3b",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.23821,
                        48.884913
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "a203c157-d0c6-8029-e4df-6eea0da40a3b",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Au cœur des enjeux économiques, sociétaux et environnementaux, la transformation numérique bouleverse les modèles de consommation et fait naître des usages numériques aux réels impacts sociétaux et écologiques. Cette formation vous donne les clés pour amorcer une transformation numérique responsable.Objectifs pédagogiquesÀ l’issue de la formation, le participant sera en mesure de :Identifier les enjeux et les impacts environnementaux et sociétaux du numériqueIntégrer les solutions d’un numérique plus responsableAmorcer une démarche de responsabilité numérique dans son organisation",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Orsys",
                    "Intitule_de_la_formation": "Amorcer une transformation numérique responsable",
                    "Localisation_de_la_structure": "Puteaux-La défense",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…Le participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.orsys.fr/formation-amorcer-une-transformation-numerique-responsable.html"
                }
            },
            {
                "type": "Feature",
                "id": "8e4b5490-e21b-de29-a0a8-4f24b55cab3d",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.23821,
                        48.884913
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "8e4b5490-e21b-de29-a0a8-4f24b55cab3d",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Formation Écoconception des services numériquesL’écoconception est un levier majeur de réduction de l'impact du numérique. Comment et quand mettre en œuvre une démarche d’écoconception ? Quels outils, quels gains ? Cette formation vous permettra d’appliquer les concepts fondamentaux de l’écoconception à vos services numériques.Objectifs pédagogiquesÀ l’issue de la formation, le participant sera en mesure de :Comprendre les enjeux du numérique responsableConnaître les outils de mise en œuvre d'une démarche d'écoconception d’un service numériqueÉvaluer les impacts environnementaux d'un service numériqueIdentifier les leviers d’écoconceptionIntégrer une démarche d'écoconception dans le développement d’un service numériqueMesurer les bénéfices d’une démarche d’écoconception",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Orsys",
                    "Intitule_de_la_formation": "Ecoconception des services numériques",
                    "Localisation_de_la_structure": "Puteaux-La défense",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…Le participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.orsys.fr/formation-ecoconception-des-services-numeriques.html"
                }
            },
            {
                "type": "Feature",
                "id": "b29ee786-a5a6-5b43-bee4-126d9b831f50",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.23821,
                        48.884913
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "b29ee786-a5a6-5b43-bee4-126d9b831f50",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Cette formation vous permettra d'identifier les principaux leviers d'action à mettre en œuvre pour devenir éco-responsable dans la gestion IT. Vous verrez comment réduire de façon significative certaines charges financières, notamment celles correspondant à la consommation électrique.Objectifs pédagogiquesÀ l’issue de la formation, le participant sera en mesure de :Connaître les évolutions du Green ITAnalyser le cycle de vie du matériel informatiqueProposer différentes solutions pour réduire les coûts du data centerMettre en place et suivre le projet Green IT",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Orsys",
                    "Intitule_de_la_formation": "Green IT, démarche et mise en œuvre",
                    "Localisation_de_la_structure": "Puteaux-La défense",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…Le participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.orsys.fr/formation-green-it-demarche-mise-en-oeuvre.html"
                }
            },
            {
                "type": "Feature",
                "id": "0d18d2a8-7bc1-91ad-939f-d4d7283d9878",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.23821,
                        48.884913
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "0d18d2a8-7bc1-91ad-939f-d4d7283d9878",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "A l'issue de cette formation, vous serez en mesure d'identifier les chantiers clés pour réduire la consommation électrique d'un centre informatique et serez capable de mettre en œuvre des solutions d'amélioration favorisant la performance énergétique et environnementale.Objectifs pédagogiquesÀ l’issue de la formation, le participant sera en mesure de :Optimiser les différents projets Green ITRéaliser l'état des lieux des performances énergétique et environnementaleChoisir les solutions IT appropriées aux besoinsSélectionner les solutions liées à l'infrastructure",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Orsys",
                    "Intitule_de_la_formation": "Green Data Center, optimiser sa performance énergétique",
                    "Localisation_de_la_structure": "Puteaux-La défense",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…Le participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.orsys.fr/formation-green-data-center-optimiser-votre-performance-energetique.html"
                }
            },
            {
                "type": "Feature",
                "id": "cf797c7c-464b-2eaf-ef80-1a8a6bacd188",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.23821,
                        48.884913
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "cf797c7c-464b-2eaf-ef80-1a8a6bacd188",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "L’accessibilité est la capacité d’une ressource numérique à être utilisée au travers d’applications web ou mobiles par tout individu quelles que soient ses aptitudes. Ce séminaire vous enseignera l'essentiel pour être sensibilisé au sujet de l’accessibilité numérique, afin d'améliorer sa prise en compte.Objectifs pédagogiquesÀ l’issue de la formation, le participant sera en mesure de :Appréhender les différents types de handicapComprendre l’accessibilité numérique, ses impacts et bénéficesConnaître les lois et les référentiels techniques",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Orsys",
                    "Intitule_de_la_formation": "Sensibilisation à l'accessibilité numérique",
                    "Localisation_de_la_structure": "Puteaux-La défense",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…Le participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.orsys.fr/formation-sensibilisation-a-l-accessibilite-numerique.html"
                }
            },
            {
                "type": "Feature",
                "id": "b16d6023-792b-77b1-6c11-8ea88b93b8cc",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.23821,
                        48.884913
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "b16d6023-792b-77b1-6c11-8ea88b93b8cc",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Grâce aux standards d’accessibilité mis en place, tous les utilisateurs handicapés peuvent percevoir, comprendre, naviguer et interagir sur le web. Ce cours vous présentera les connaissances essentielles et les bonnes pratiques à suivre pour viser l’accessibilité à toutes les étapes d’un projet web.Objectifs pédagogiquesÀ l’issue de la formation, le participant sera en mesure de :Connaître et évaluer les critères d’accessibilitéSavoir piloter la prise en compte de l’accessibilité aux différentes étapes d’un projet webAvoir des indicateurs de coût et de complexitéIdentifier les enjeux et éléments clés pour réussir la prise en compte de l’accessibilité",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Orsys",
                    "Intitule_de_la_formation": "L'accessibilité numérique dans un projet",
                    "Localisation_de_la_structure": "Puteaux-La défense",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…Le participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.orsys.fr/formation-accessibilite-numerique-dans-un-projet.html"
                }
            },
            {
                "type": "Feature",
                "id": "1ca598ee-1f47-df5e-194b-7813af24f849",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.23821,
                        48.884913
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "1ca598ee-1f47-df5e-194b-7813af24f849",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "L'accessibilité des sites web et des applications mobiles est une nécessité commerciale, voire une obligation réglementaire dans certains cas. Le RGAA recense les critères d’accessibilité. Ce cours pratique présente le déroulement des audits RGAA pour les sites web ou pour les applications mobiles.Objectifs pédagogiquesÀ l’issue de la formation, le participant sera en mesure de :Connaître les principaux référentiels d’accessibilité d’un site web ainsi que leurs relationsÊtre capable de retrouver et d'expliquer les critères d'accessibilité du RGAAÊtre capable de retrouver et d'expliquer les critères d'accessibilité du RGAA-APPSSavoir trouver les outils de validation des critères d'accessibilité d'un site web ou d’une application mobileSavoir conduire l'audit RGAA d'un site web ou d’une application mobile et le restituer",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Orsys",
                    "Intitule_de_la_formation": "RGAA, auditer l'accessibilité d'un site web ou d'une application mobile",
                    "Localisation_de_la_structure": "Puteaux-La défense",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…Le participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
                    "Duree_de_la_formation": "5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.orsys.fr/formation-rgaa-audit-accessibilite-site-web-ou-application-mobile.html"
                }
            },
            {
                "type": "Feature",
                "id": "10bc805d-4774-daab-26e9-8947db320895",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.4932941,
                        47.4683081
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "10bc805d-4774-daab-26e9-8947db320895",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Impacts des TIC (Technologie Informatique Communication) sur l’environnement- Définition du Green IT et de ses principaux indicateurs- Les différents périmètres du numérique responsable",
                    "Type_organisme": "Ecole d'Ingénieurs",
                    "NOM": "ESAIP",
                    "Intitule_de_la_formation": "Comprendre les enjeux du numérique responsable",
                    "Localisation_de_la_structure": "Saint-Barthélemy d'Anjou",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "OUI // Crédits ECTS ?",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "www.esaip.org"
                }
            },
            {
                "type": "Feature",
                "id": "423d4c79-3970-3210-37f9-4a255449f782",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.4932941,
                        47.4683081
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "423d4c79-3970-3210-37f9-4a255449f782",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Comprendre l’écoconception logicielle (définition, périmètre, limites, etc.)Maîtriser les principes généraux d’écoconception des logiciels :- Architecture- Dimension sociale et environnementaleLes Green Patterns",
                    "Type_organisme": "Ecole d'Ingénieurs",
                    "NOM": "ESAIP",
                    "Intitule_de_la_formation": "L’éco-conception logicielle",
                    "Localisation_de_la_structure": "Saint-Barthélemy d'Anjou",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "OUI // crédits ECTS",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "www.esaip.org"
                }
            },
            {
                "type": "Feature",
                "id": "9ff758ce-159b-22d0-2801-fa2403f32d15",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.4932941,
                        47.4683081
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "9ff758ce-159b-22d0-2801-fa2403f32d15",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Outils d’analyse d’un parc informatiqueMis en place d’une politique de gestion de l’énergie d’un réseau informatiqueOptimisation des infrastructures (Cloud, Virtualisation, …)...",
                    "Type_organisme": "Ecole d'Ingénieurs",
                    "NOM": "ESAIP",
                    "Intitule_de_la_formation": "Systèmes et Réseaux Eco-Responsables",
                    "Localisation_de_la_structure": "Saint-Barthélemy d'Anjou",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "OUI // Crédits ECTS",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "www.esaip.org"
                }
            },
            {
                "type": "Feature",
                "id": "3216dee3-d616-0943-5aeb-18e2ce894d85",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.0939658,
                        49.4404591
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "3216dee3-d616-0943-5aeb-18e2ce894d85",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Comprendre les enjeux de l’accessibilité numérique- Comprendre les usages et besoins des personnes en situation de handicap- Identifier les éléments clés pour la bonne prise en compte de l'accessibilité numérique et du RGAA",
                    "Type_organisme": "Entreprise de conseil et organisme de formation",
                    "NOM": "Ideance",
                    "Intitule_de_la_formation": "Découvrir l’accessibilité numérique",
                    "Localisation_de_la_structure": "Rouen",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://ideance.net/fr/formation-accessibilite/"
                }
            },
            {
                "type": "Feature",
                "id": "070b81fa-e5f3-f2e2-1d6a-799c65c96408",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.0939658,
                        49.4404591
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "070b81fa-e5f3-f2e2-1d6a-799c65c96408",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Savoir piloter la prise en compte de l’accessibilité et du RGAA dans un projet- Avoir des indicateurs et des ordres de grandeur de coût / complexité- Identifier les enjeux et les éléments clés pour réussir la prise en compte de l’accessibilité numérique",
                    "Type_organisme": "Entreprise de conseil et organisme de formation",
                    "NOM": "Ideance",
                    "Intitule_de_la_formation": "Piloter la prise en compte de l’accessibilité",
                    "Localisation_de_la_structure": "Rouen",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://ideance.net/fr/formation-accessibilite/"
                }
            },
            {
                "type": "Feature",
                "id": "9cca289c-2420-efd5-7ca3-61fd2de34082",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.0939658,
                        49.4404591
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "9cca289c-2420-efd5-7ca3-61fd2de34082",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Savoir prendre en compte l’accessibilité et respecter le RGAA dans la conception fonctionnelle et graphique de sites ou d’applications web et mobiles- Connaître les règles et bonnes pratiques d’accessibilité qui touchent l’UX (User Experience) et l’UI (User Interface)",
                    "Type_organisme": "Entreprise de conseil et organisme de formation",
                    "NOM": "Ideance",
                    "Intitule_de_la_formation": "Concevoir des interfaces accessibles",
                    "Localisation_de_la_structure": "Rouen",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://ideance.net/fr/formation-accessibilite/"
                }
            },
            {
                "type": "Feature",
                "id": "ffb09606-2207-44f9-d94e-eb5be2aab7b2",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.0939658,
                        49.4404591
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "ffb09606-2207-44f9-d94e-eb5be2aab7b2",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Savoir prendre en compte l’accessibilité et respecter le RGAA dans la rédaction et publication de contenus (web et réseaux sociaux)- Connaître les règles d’accessibilité numérique pour les contenus web (textes, liens, images, vidéos, etc.)",
                    "Type_organisme": "Entreprise de conseil et organisme de formation",
                    "NOM": "Ideance",
                    "Intitule_de_la_formation": "Rédiger et publier des contenus accessibles",
                    "Localisation_de_la_structure": "Rouen",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://ideance.net/fr/formation-accessibilite/"
                }
            },
            {
                "type": "Feature",
                "id": "ee0257fa-d786-9482-c506-1f93e692b106",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.0939658,
                        49.4404591
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "ee0257fa-d786-9482-c506-1f93e692b106",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Savoir prendre en compte l’accessibilité et respecter le RGAA lors du développement technique d’un projet web- Connaître les règles d’accessibilité web (HTML, CSS, JavaScript)- Savoir évaluer l’accessibilité de ses développements web",
                    "Type_organisme": "Entreprise de conseil et organisme de formation",
                    "NOM": "Ideance",
                    "Intitule_de_la_formation": "Développer des sites et applications web accessibles",
                    "Localisation_de_la_structure": "Rouen",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://ideance.net/fr/formation-accessibilite/"
                }
            },
            {
                "type": "Feature",
                "id": "b2445ae1-3f9d-9278-ad74-4dfaf72b0adb",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.0939658,
                        49.4404591
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "b2445ae1-3f9d-9278-ad74-4dfaf72b0adb",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Savoir prendre en compte l’accessibilité lors du développement d’applications mobiles- Connaître les règles d’accessibilité mobile (iOS et Android)- Savoir évaluer l’accessibilité de ses applications mobiles",
                    "Type_organisme": "Entreprise de conseil et organisme de formation",
                    "NOM": "Ideance",
                    "Intitule_de_la_formation": "Développer des applications mobiles accessibles",
                    "Localisation_de_la_structure": "Rouen",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://ideance.net/fr/formation-accessibilite/"
                }
            },
            {
                "type": "Feature",
                "id": "b42ae395-8c20-6887-4dbf-f1b3384fd343",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "b42ae395-8c20-6887-4dbf-f1b3384fd343",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Objectifs de la formation certifiée Qualiopi :- Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numérique- Comprendre les impacts du numérique inscrits dans des enjeux globaux- Maîtriser les différences de concepts et de valeurs présents dans le Numérique responsable- Aborder la démarche d’écoconception numérique de façon simple et outillée- Agir, en créant le réflexe de sobriété numérique au sein des futurs projets numériques- Réfléchir concrètement à l’écoconception d’un service numérique en minimisant son impact environnemental via un exercice d’optimisation (atelier participatif d'1 journée)",
                    "Type_organisme": "Entreprise de conseil et organisme de formation",
                    "NOM": "Temesis",
                    "Intitule_de_la_formation": "Comprendre le numérique responsable & la démarche d’écoconception numérique",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "- Évaluation des acquis au cours de la formation sous forme de quiz ludo-interactif- Questionnaire d’évaluation en fin de session dans lequel le participant évalue les apports de la formation et sa capacité à les mettre en œuvre",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://temesis.hop3team.com/formations/formation-complete-comprendre-le-numerique-responsable-la-demarche-d-ecoconception-numer"
                }
            },
            {
                "type": "Feature",
                "id": "240d8703-f47e-6d6b-f8bb-497c68a957b1",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5149935,
                        43.4813927
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "240d8703-f47e-6d6b-f8bb-497c68a957b1",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Pau et des Pays de l'Adour",
                    "Libellé du département / Unité de formation": "IUT De Bayonne / Dépt. Informatique",
                    "Cycle de formation": "BUT (Bac+3)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "BUT 2 - 1 Séance de cours de sensibilisation à la conso du numérique (1h)",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Anglet",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "46276212-1968-7893-19fa-59bb500cc7b2",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5149935,
                        43.4813927
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "46276212-1968-7893-19fa-59bb500cc7b2",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Pau et des Pays de l'Adour",
                    "Libellé du département / Unité de formation": "IUT De Bayonne / Dépt. Informatique",
                    "Cycle de formation": "BUT (Bac+3)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "BUT 3/LP - Séance de cours sur sensibilisation, présentation de bonnes pratiques + travail collectif (exposés) thématiques sur des points spécifiques en lien avec l'écoconception, la conso, des règles de bonnes pratiques, etc. (15h)",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Anglet",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "03ffffb9-dcc4-a914-02b2-fc20d432e7de",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5149935,
                        43.4813927
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "03ffffb9-dcc4-a914-02b2-fc20d432e7de",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Pau et des Pays de l'Adour",
                    "Libellé du département / Unité de formation": "Master informatique, parcours SIGLIS",
                    "Cycle de formation": "Master (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "L'objectif du cours 'Green IT' est d'introduire la définition du Green IT et du développement durable en informatique, et de comprendre les principaux concepts en lien avec la mesure de l'énergie dans les systèmes informatiques, l'éco-conception de logiciels durables, et les défis énergétiques dans le cloud computing et les centres de données.",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université de Pau et des Pays de l'Adour",
                    "Intitule_de_la_formation": "Green It",
                    "Localisation_de_la_structure": "Anglet",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Crédits ECTS 2.0",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/master-14/master-informatique-79_1/m1-m2-parcours-systemes-informatiques-pour-le-genie-de-la-logistique-industrielle-et-des-services-siglis-126_1/amelioration-continue-K1C9B5WX/green-it-K1C9DJJS.html"
                }
            },
            {
                "type": "Feature",
                "id": "b8a07a79-918c-8586-7946-b550bf89385b",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.5800364,
                        44.841225
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "b8a07a79-918c-8586-7946-b550bf89385b",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Bordeaux",
                    "Libellé du département / Unité de formation": "UF Informatique",
                    "Cycle de formation": "Licence (Bac+3)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "L1 : fresque du climat + petit projet autour du développement durable en lien avec le numérique",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université de Bordeaux",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Bordeaux",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "756f3071-c8a2-f2b3-faa7-4b5dab3f1508",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.5800364,
                        44.841225
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "756f3071-c8a2-f2b3-faa7-4b5dab3f1508",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Bordeaux",
                    "Libellé du département / Unité de formation": "UF Informatique",
                    "Cycle de formation": "Licence (Bac+3)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "L3 : 20h de Cours, Ateliers et projets sur les thématiques :urgence climatique, place du numérique, impacts directs, indirects, santé, eco-geste, eco-conception",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université de Bordeaux",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Bordeaux",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "3",
                    "Modalites": "présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "dc429c18-6628-05d7-3aa6-10538551d6d2",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.5800364,
                        44.841225
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "dc429c18-6628-05d7-3aa6-10538551d6d2",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Bordeaux",
                    "Libellé du département / Unité de formation": "UF Informatique",
                    "Cycle de formation": "Autre",
                    "Le programme couvre / Objectif": "Une intervention isolée (séminaire ou séance de cours)",
                    "Courte_description_du_programme_Contenu": "- Cours de 6h à l'école doctorale math-info : urgence climatique, place du numérique, impacts directs, indirects, santé, ecogeste, eco-conception",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université de Bordeaux",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Bordeaux",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "1",
                    "Modalites": "présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "bfee564c-8390-0c06-982f-8186071e2dcd",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -0.5800364,
                        44.841225
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "bfee564c-8390-0c06-982f-8186071e2dcd",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Bordeaux",
                    "Libellé du département / Unité de formation": "UF Informatique",
                    "Cycle de formation": "Autre",
                    "Le programme couvre / Objectif": "Une intervention isolée (séminaire ou séance de cours)",
                    "Courte_description_du_programme_Contenu": "- Séminaire d'une heure sur une vue générale de l'impact du numérique dans l'EUR Numerics (Master-Doctorat)",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université de Bordeaux",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Bordeaux",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "207c8671-665e-d21c-1949-fce87eb2e580",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        3.0635282,
                        50.6365654
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "207c8671-665e-d21c-1949-fce87eb2e580",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université de Lille",
                    "Libellé du département / Unité de formation": "Polytech Lille",
                    "Cycle de formation": "Ecole d'ingénieur (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "UE Informatique et développement durable : 2 h de cours + 2x2 h de TD",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Polytech Lille",
                    "Intitule_de_la_formation": "Informatique et développement durable",
                    "Localisation_de_la_structure": "Lille",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "1",
                    "Modalites": "présentiel",
                    "URL décrivant le programme": "https://www.polytech-lille.fr/formation/8-specialites/informatique-et-statistique/"
                }
            },
            {
                "type": "Feature",
                "id": "669e2d4b-2531-ad27-121d-8f764a0a2d61",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.1520434,
                        46.1591126
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "669e2d4b-2531-ad27-121d-8f764a0a2d61",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "La Rochelle Université",
                    "Libellé du département / Unité de formation": "IUT de la Rochelle / DUT Informatique",
                    "Cycle de formation": "BUT (Bac+3)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "Approche de la démarche d'éco-conception des services numériques (impact du numérique, bonnes pratiques, mesure de performance, ...)",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "La Rochelle Université",
                    "Intitule_de_la_formation": "DUT Informatique - parcours Environnement Connecté Intelligent",
                    "Localisation_de_la_structure": "La Rochelle",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "1b9a3166-f89b-a8f2-0ed3-2e3b26b93c9d",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.4289667,
                        48.6241665
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "1b9a3166-f89b-a8f2-0ed3-2e3b26b93c9d",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Institut Mines Télécom - Télécom SudParis",
                    "Libellé du département / Unité de formation": "Informatique",
                    "Cycle de formation": "Ecole d'ingénieur (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "Module (en construction) destiné aux élèves ingénieur (niveau M1)Titre : Numérique et consommation énergétique : agir du processeur au logicielL’objectif du module est de fournir aux futurs ingénieurs des méthodes qui leur permettent d’intégrer l’aspect consommation électrique d’un système informatique dès la conception de ces systèmes. Afin d’acquérir cette compétence, nous proposons des cours et des Tps qui permettent de prendre en main- des instruments de mesure de la consommation énergétique sur différents équipements informatiques- de modéliser la consommation énergétique de systèmes plus complexes",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "IMT - Telecom Sud Paris",
                    "Intitule_de_la_formation": "Numérique et consommation énergétique : agir du processeur au logiciel",
                    "Localisation_de_la_structure": "Évry",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://www-inf.telecom-sudparis.eu/COURS/CSC4535/numenv/?page=numenv"
                }
            },
            {
                "type": "Feature",
                "id": "e134dcd6-f3dd-e411-33b7-3d17aa790935",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.1520434,
                        46.1591126
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "e134dcd6-f3dd-e411-33b7-3d17aa790935",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "La Rochelle Université",
                    "Libellé du département / Unité de formation": "Formation Numérique responsable",
                    "Cycle de formation": "Autre",
                    "Le programme couvre / Objectif": "Présenter de façon globale et cohérente les nuisances générées par les équipements informatiques et ce, durant l’ensemble de la durée de vie de chaque équipement : aux différents stades de fabrication, d’utilisation (consommation d’énergie) et de fin de vie (gestion/récupération des déchets, pollution, épuisement des ressources non renouvelables)Proposer une méthodologie et des outils pour une mise en pratique du numérique responsablePermettre aux stagiaires de valider un certificat de connaissances « Numérique responsable » créée par le formateur et l’Institut du Numérique responsable",
                    "Courte_description_du_programme_Contenu": "Le concept de numérique responsable vise à réduire l’empreinte écologique et sociale des Technologies de l’Information et de la Communication.L’objectif de cette formation est d’initier au concept de numérique responsable. Il s’agit de :Présenter de façon globale et cohérente les nuisances générées par les équipements informatiques et ce, durant l’ensemble de la durée de vie de chaque équipement : aux différents stades de fabrication, d’utilisation (consommation d’énergie) et de fin de vie (gestion/récupération des déchets, pollution, épuisement des ressources non renouvelables)Proposer une méthodologie et des outils pour une mise en pratique du numérique responsablePermettre aux stagiaires de valider un certificat de connaissances « Numérique responsable » créée par le formateur et l’Institut du Numérique responsable",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université de La Rochelle",
                    "Intitule_de_la_formation": "Le numérique responsable",
                    "Localisation_de_la_structure": "La Rochelle",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://formations.univ-larochelle.fr/formation-numerique-responsable"
                }
            },
            {
                "type": "Feature",
                "id": "239885e9-34bd-7d98-a592-734682f69f0f",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.147899,
                        43.9277552
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "239885e9-34bd-7d98-a592-734682f69f0f",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "IMT Mines Albi",
                    "Libellé du département / Unité de formation": "GSI / ETN",
                    "Cycle de formation": "Ecole d'ingénieur (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "Module autour du numérique responsable :- acculturation sur le sujet- sensibilisation aux impacts environnementaux du numérique- sensibilisation + atelier écoconception- sensibilisation + atelier accessibilité- sensibilisation cybersécurité",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "IMT Mines Albi",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Albi",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "0de9cea7-8e6d-9b3f-177b-57473b5db164",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.4442469,
                        43.6044622
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "0de9cea7-8e6d-9b3f-177b-57473b5db164",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université Capitole 1, Toulouse",
                    "Libellé du département / Unité de formation": "2IS",
                    "Cycle de formation": "Master (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "Module autour du numérique responsable (en anglais) :- acculturation sur le sujet- sensibilisation aux impacts environnementaux du numérique- sensibilisation + atelier écoconception- sensibilisation + atelier accessibilité- sensibilisation cybersécurité",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université Toulouse 1 Capitole",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Toulouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://miage.ut-capitole.fr/master-2is-innovative-information-systems--611942.kjsp"
                }
            },
            {
                "type": "Feature",
                "id": "3d18f8f5-03da-2e59-43d4-08f1fe287aea",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        3.8767337,
                        43.6112422
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "3d18f8f5-03da-2e59-43d4-08f1fe287aea",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Université Paul Valéry, Montpellier",
                    "Libellé du département / Unité de formation": "MIASHS",
                    "Cycle de formation": "Master (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "Sensibilisation au numérique responsable avec un focus sur l'écoconception et l'accessibilité, cours et ateliers.",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Université Paul Valéry, Montpellier",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Montpellier",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://ufr6.www.univ-montp3.fr/fr/formation/masters/master_miashs"
                }
            },
            {
                "type": "Feature",
                "id": "ef783cad-b888-ccc4-abdc-6e17cf644e62",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.0852818,
                        44.1253665
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "ef783cad-b888-ccc4-abdc-6e17cf644e62",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "IMT Alès",
                    "Libellé du département / Unité de formation": "2IA",
                    "Cycle de formation": "Ecole d'ingénieur (Bac+5)",
                    "Le programme couvre / Objectif": "Une intervention isolée (séminaire ou séance de cours)",
                    "Courte_description_du_programme_Contenu": "Sensibilisation au numérique responsable et à l'écoconception.",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "IMT Mines Alès",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Ales",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://www.imt-mines-ales.fr/formations/domaines-dexcellence/informatique-et-intelligence-artificielle"
                }
            },
            {
                "type": "Feature",
                "id": "994f24a3-01f8-acc6-fa44-8fa6d70f5763",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.3873058,
                        45.4401467
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "994f24a3-01f8-acc6-fa44-8fa6d70f5763",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Mines Saint-Etienne",
                    "Libellé du département / Unité de formation": "Management Responsable et Innovation / Cycle ICM + ISMIN",
                    "Cycle de formation": "Ecole d'ingénieur (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "Objectifs du cours 'Green IT' intégré au Tronc Commun Climat, Environnement, Développement Durable :- Replacer l’homme au cœur des réflexions sur le phénomène de transition numérique- Définir ce qu’est la transition numérique et en dresser un tableau chiffré- Comprendre comment les organisations peuvent s’approprier ce thème : invitation à une conception « green » du SI dans une démarche RSE- Appréhender les approches d'éco-conception (web et du SI).Fresque du numérique réalisée sur l'ensemble des étudiants en 2A de cycle d'ingénieurs du parcours ISMIN et sur une trentaine d'étudiants du cycle ICM",
                    "Type_organisme": "Enseignement supérieur",
                    "NOM": "Mines Saint-Etienne",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Saint-Étienne",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "cb1890fb-3886-bebc-79d1-a05c4b784ffa",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5541362,
                        47.2186371
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "cb1890fb-3886-bebc-79d1-a05c4b784ffa",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Chaire Impact Positif Audencia / Plateforme RSE de la métropole nantaise",
                    "Libellé du département / Unité de formation": "-",
                    "Cycle de formation": "Autre",
                    "Le programme couvre / Objectif": "Une intervention isolée (séminaire ou séance de cours)",
                    "Courte_description_du_programme_Contenu": "Pour sensibiliser les entreprises à ces différents enjeux, 10 réseaux nantais se sont impliqués et ont co-construit un module d’accompagnement de deux heures sur la thématique : #NumériqueTraining.Le contenu s’articule autour de trois grands sujets :Numérique durable et soutenableNumérique inclusifNumérique éthique",
                    "Type_organisme": "Enseignement Supérieur",
                    "NOM": "Audencia",
                    "Intitule_de_la_formation": "#NumériqueTraining",
                    "Localisation_de_la_structure": "Nantes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://rse.metropole.nantes.fr/agir/boite-a-outils-rse-nantes/se-former-au-numerique-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "a346c37b-66f4-470f-f0c9-a0779f17fa98",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5541362,
                        47.2186371
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "a346c37b-66f4-470f-f0c9-a0779f17fa98",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "IMT Atlantique",
                    "Libellé du département / Unité de formation": "LUSSI",
                    "Cycle de formation": "Ecole d'ingénieur (Bac+5)",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "UE Face cachée du numérique : impacts environnementaux, sociaux et sociétaux de l'essor des nouvelles technologies (60H dont 40H encadrées)Présentation de l’UE :A l’heure où la réduction de notre empreinte écologique est perçue comme une nécessité, on ne peut ignorer l’impact environnemental du développement des technologiques numériques. Dans un rapport de l’ADEME (Agence de l'Environnement et de la Maîtrise de l'Énergie) publié en 2019, ce secteur est décrit comme « responsable de 4 % des émissions mondiales de gaz à effet de serre et la forte augmentation des usages laisse présager un doublement de cette empreinte carbone d'ici 2025 » (« La face cachée du numérique », ADEME). Outre son impact en termes de consommation énergétique, la place du numérique, toujours plus grande dans nos sociétés, a aussi de nombreux impacts sociaux et sociétaux et soulève des questions éthiques, qu’un ingénieur, acteur de la transition numérique, ne peut pas ignorer.L’objectif de cette UE est de fournir aux élèves :- les clés pour appréhender les enjeux environnementaux, sociaux et sociétaux de la transformation numérique des entreprises et de la société- une boîte à outils qui leur permettra de contribuer à une transformation numérique responsableOrganisation de l'UE :- Un état des lieux synthétique et exhaustif des impacts du numérique : réalisé à partir d’un atelier pour comprendre en équipe et de manière ludique les enjeux environnementaux, sociaux et sociétaux du numérique (Fresque du numérique).- Des focus sur une série de thèmes : numérique et environnement, éthique du numérique, numérique et géopolitique, numérique responsable, numérique et travailLes élèves se familiariseront avec les notions d'économie circulaire, d'éco-conception, d'analyse du cycle de vie, de métaux rares, de numérique responsable, de digital labor, etc. Ils assisteront à des cours et conférences et débattront afin de creuser chacun de ces thèmes et d'appréhender des éléments de solutions. La notion d'analyse de cycle de vie sera notamment abordée via la réalisation d'une ACV simplifiée.- Une séance d'échanges avec des alumnis",
                    "Type_organisme": "Enseignement Supérieur",
                    "NOM": "IMT Atlantique",
                    "Intitule_de_la_formation": " Face cachée du numérique : impacts environnementaux, sociaux et sociétaux de l'essor des nouvelles technologies",
                    "Localisation_de_la_structure": "Nantes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "8",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://moodle.imt-atlantique.fr/course/view.php?id=1429"
                }
            },
            {
                "type": "Feature",
                "id": "9053075a-6200-de9b-e97c-d6b23e10b34c",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "9053075a-6200-de9b-e97c-d6b23e10b34c",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Comprendre les concepts fondamentaux et la démarche de l’éco-conception de services numériques.Intégrer les étapes clés et les outils.Mettre en œuvre les bonnes pratiques de l’éco-conception appliquée aux sites Web et autres services numériques.",
                    "Courte_description_du_programme_Contenu": "DEFINITIONS L’éco–conception : un axe du numérique responsableL’éco–conception de services numériquesL’éco–conception et l’accessibilitéDEMARCHE ET OUTILS Les étapes clés de la démarcheLes outils d’évaluation d’impact et de bonnes pratiquesEnjeux et bénéficesATELIER PRATIQUEAnalyse de parcours utilisateur et de l’impact environnemental d’un siteIdentification des principaux leviers d’actionExemples d’améliorationCHECK-LIST DES BONNES PRATIQUES",
                    "Type_organisme": "Professionnel",
                    "NOM": "Agence Lucie",
                    "Intitule_de_la_formation": "Introduction à l’éco-conception de services numériques",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://agence-lucie.com/formation/introduction-eco-conception-services-numeriques/"
                }
            },
            {
                "type": "Feature",
                "id": "4de09d29-5ca0-6a95-4392-3f481f6914ac",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "4de09d29-5ca0-6a95-4392-3f481f6914ac",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "S'approprier la démarche d'écoconception de service numérique au travers de l'écoconception d'un site web et savoir la situer par rapport aux démarches plus larges de conception responsable de service numérique et de Green ITMaîtriser les concepts fondamentaux de l'écoconception et savoir les appliquer dans le domaine du numérique et notamment aux services numériquesMaîtriser la méthodologie et les outils permettant d'éco-concevoir un service numériqueSavoir évaluer la performance et la maturité environnementale d'un service numérique",
                    "Courte_description_du_programme_Contenu": "Jour 1 - Apports théoriquesEtat de l’art écoconception de services numériquesDu développement durable à l'écoconception des services numériquesIdentifier les enjeux du développement durable appliqué au numériqueEvaluer le potentiel de l'écoconception pour réduire l’empreinte écologique associéeDécouvrir les principes fondamentaux de l'écoconception des équipementsL'écoconception des services numériquesAppréhender l’écoconception des services numériques (définition, périmètre, limites, etc.)Maîtriser les principes généraux d’écoconception des services numériquesRetours d’expérienceLes outilsLa démarche projetLes référentiels de bonnes pratiquesLes outils d’évaluationLes bonnes pratiques prioritaires : survol de l’ensemble des bonnes pratiques adaptées à chaque étape du cycle de vie puis étude de chacune d’elle (quelques dizaines en détail)Expression du besoinConception graphique et techniqueDéveloppement / programmationDéploiement / mise en productionFin de vieJour 2 - Mise en pratiqueAtelier analyseL’intervenant et les participants sélectionnent un service numérique à étudier. Le formateur déroule le projet en accéléré pour aider les participants à concrétiser la démarche, à comprendre l’enchaînement des étapes, et à utiliser les outilsAnalyse en groupeLes participants réalisent seuls à l'écoconception d’un service numérique de leur choixJour 3 - Restitutions et certificationRestitutionLes participants restituent le résultat de leurs analyses au formateur qui joue le rôle de client.L’intervenant identifie les points acquis et ceux sur lesquels il faut encore progresser.",
                    "Type_organisme": "Professionnel",
                    "NOM": "Octo Academy",
                    "Intitule_de_la_formation": "(Éco)conception responsable de service numérique",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Certificat de connaissance GreenIT",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://www.octo.academy/formations/formation/151/ecoconception-responsable-de-service-numerique/1465/"
                }
            },
            {
                "type": "Feature",
                "id": "71ac2c26-67bb-ef0d-eadf-8e8fa0726b8d",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5541362,
                        47.2186371
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "71ac2c26-67bb-ef0d-eadf-8e8fa0726b8d",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Impact de l'informatique sur l'environnementFabricationUtilisationDestruction/RecyclageL'informatique au service de l'environnementUn monde toujours plus connecté ...Etat des lieuxPerspectives... et des ressources finiesEtat des lieuxPerspectivesNos moyens d'actionRègles citoyennes de bonne conduiteEvolution de la legislation (EU)Perspectives académiques, de la recherche à l'enseignement",
                    "Type_organisme": "Académique",
                    "NOM": "Ecoles des Mines de Nantes",
                    "Intitule_de_la_formation": "GreenIT : A practical study from IoT to the Cloud",
                    "Localisation_de_la_structure": "Nantes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "5",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "http://greenit.menaud.fr/"
                }
            },
            {
                "type": "Feature",
                "id": "41e55157-8b53-8161-3702-742703b56ca8",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.2881683,
                        48.892956
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "41e55157-8b53-8161-3702-742703b56ca8",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Maîtriser la démarche et la méthodologie d’écoconception logicielleSavoir identifier les bonnes pratiques à mettre en œuvreSavoir mesurer la performance environnementale d’un logiciel / site web",
                    "Courte_description_du_programme_Contenu": "État de l’art écoconception de services numériquesDu développement durable à l'écoconception des logicielsComprendre les enjeux du développement durable appliqué aux TICEvaluer le potentiel de l'écoconception des TIC pour réduire l’empreinte écologique associéeDécouvrir les principes fondamentaux de l'écoconception des équipementsL'écoconception des logicielsComprendre l’écoconception logicielle (définition, périmètre, limites, etc.)Maîtriser les principes généraux d’écoconception des logiciels:- Architecture- Dimension sociale- Dimension environnementaleRetours d’expérienceLes outilsCette partie illustre la démarche en présentant les outils et méthodologies adaptés aux services en ligne.La démarche projetLes référentiels de bonnes pratiquesLes outils d’évaluationLes bonnes pratiques prioritairesSurvol de l’ensemble des bonnes pratiques adaptées à chaque étape du cycle de vie puis étude de chacune d’elle (quelques dizaines en détail):- Expression du besoin- Conception graphique et technique- Développement / programmation- Déploiement / mise en production- Fin de vieAtelier analyseLe pédagogue et les participants sélectionnent un service numérique à étudier. Le formateur déroule le projet en accéléré pour aider les participants à concrétiser la démarche, à comprendre l’enchaînement des étapes, et à utiliser les outils.Atelier analyseLes participants poursuivent l’analyse du service numérique sur la première partie de la matinée. Le formateur les aide à réaliser cette analyse.RestitutionLes participants restituent le résultat de leurs analyses au formateur qui joue le rôle de client. Le formateur identifie les points acquis et ceux sur lesquels il faut encore progresser.",
                    "Type_organisme": "Professionnel",
                    "NOM": "PLB Consultant",
                    "Intitule_de_la_formation": "Formation Éco-Conception de Services Numériques",
                    "Localisation_de_la_structure": "Levallois-Perret",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Certification 'Eco Conception Web'Il se présente sous la forme d'un QCM de 60 questions auxquelles il vous faudra répondre en 60 minutes. Il vous faut un score de 65% afin d'obtenir votre certification.",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.plb.fr/formation/oracle/formation-eco-conception-logiciels,5-700598.php"
                }
            },
            {
                "type": "Feature",
                "id": "78e1d653-9f81-1786-9396-b565c3e59305",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.3873058,
                        45.4401467
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "78e1d653-9f81-1786-9396-b565c3e59305",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Expliquer l’éco-conception et la pensée cycle de vieIdentifier les enjeux pour l’entreprise : réglementaire, stratégique, économiqueRéaliser une ACV simplifiée et exploiter ses résultatsDéfinir les étapes pour mettre en place une démarche d’éco-conception selon la norme CEN TS 16524 / NF E 01 005 (méthodologie d’éco-conception pour les produits de la mécanique)Expliquer le lien entre la démarche d’éco-conception et les exigences du référentiel ISO 14001:2015 relatives à la perspective cycle de vie du produit",
                    "Courte_description_du_programme_Contenu": "Module 1 – Ecoconception et pensée cycle de vie : comprendre l’éco-conceptionPrincipes et notions fondamentales de l’éco-conceptionModule 2 – Réglementations et normes applicables à l’éco-conception : appréhender le cadre réglementaire et normatif de l’éco-conceptionRéglementationsPanorama des réglementations applicablesZoom sur certaines réglementations : Reach, RoHS, Directive ErP (Ecodesign), filières REP (DEEE, VHU)NormesPanorama des normes applicablesModule 3 – Enjeux stratégiques et de marché : comprendre les intérêts d’une démarche d’éco-conception pour son entrepriseEnjeux stratégiquesImageCommunication : normes et référentiels pour l'affichage environnemental produitEnjeux de marchéEnjeux économiquesModule 4 – Méthodes et outils de l'éco-conception : appréhender les approches possibles, et comprendre les principes de l'ACVPanorama des outilsZoom sur l'évaluation environnementale par l’analyse du cycle de vie (ACV)PrincipesCadre méthodologiqueLogiciels et bases de données de modélisationIllustration par une ACV simplifiée sur une étude de cas avec Ecodesign StudioModule 5 – Réalisation d'une démarche d'éco-conception : mise en œuvre dans le processus de développement produit de son entreprisePrincipes et structure générale de la démarche suivant la norme CEN TS 16524 / NF E 01 005Réalisation d'une analyse stratégique du produitAnalyse environnementale : établir le profil d'un produit de référenceIdentification et priorisation des pistes d’améliorationMise en place d'indicateurs et suivi de l'amélioration environnementaleBilan et communication des résultats obtenusIllustration de chaque étape par une étude de cas à l'aide du logiciel Ecodesign StudioModule 6 – Intégration de la démarche d'éco-conception dans son système de management environnemental : faire le lien avec les exigences sur la perspective cycle de vie du produit du référentiel ISO 14001:2015Structure de l'approche et principe d'amélioration continueLes exigences sur la perspective cycle de vie du produit du référentiel ISO 14001:2015Déclinaison de ses exigences environnementales vis-à-vis des parties intéressées externes",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "CETIM",
                    "Intitule_de_la_formation": "Comprendre et mettre en place une démarche éco-conception",
                    "Localisation_de_la_structure": "Saint-Étienne",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://www.cetim.fr/formation/formation/Conception/Eco-conception/comprendre-et-mettre-en-place-une-demarche-eco-conception-g10"
                }
            },
            {
                "type": "Feature",
                "id": "0cf5b3ba-4b1d-89f8-3665-30a26929ea63",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        7.3389937,
                        47.7467233
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "0cf5b3ba-4b1d-89f8-3665-30a26929ea63",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Expliquer l’éco-conception et la pensée cycle de vie ,Identifier les enjeux pour l’entreprise : réglementaire, stratégique, économique ,Réaliser une ACV simplifiée et exploiter ses résultats ,Mettre en place une démarche d’éco-conception étape par étape selon la norme CEN TS 16524 / NF E 01 005 ,Faire le lien entre la démarche d’éco-conception et les exigences du référentiel ISO 14001:2015.",
                    "Courte_description_du_programme_Contenu": "Module 1 : Ecoconception et pensée cycle de viePrincipes et notions fondamentales de l’éco-conceptionModule 2 :Réglementations et normes applicables à l’éco-conceptionPanorama des réglementationsZoom sur certaines réglementations : Reach, RoHS, Directive ErP (Ecodesign), filières REP (DEEE, VHU)Panorama des normesModule 3 : Enjeux stratégiques et de marchéEnjeux et intérêts d’une démarche d’éco-conception pour son entrepriseRéférentiels de communication de la performance environnementale de ses produitsModule 4 : Méthodes et outils de l'éco-conceptionPanorama des outilsZoom sur l'évaluation environnementale par l’analyse du cycle de vie (ACV)Illustration par une ACV simplifiée sur une étude de cas avec le logiciel Ecodesign StudioModule 5 : Réalisation d'une démarche d'éco-conceptionMise en œuvre étape par étape de la démarche suivant la norme CEN TS 16524 / NF E 01 005Mise en pratique sur une étude de cas avec le logiciel Ecodesign StudioModule 6 : Intégration de la démarche d'éco-conception dans son système de management environnementalStructure de l'approche et principe d'amélioration continueLien entre la démarche et les exigences sur la perspective cycle de vie du référentiel ISO 14001:2015Déclinaison de ses exigences environnementales vis-à-vis des parties intéressées externes",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "CETIM",
                    "Intitule_de_la_formation": "Innover sur vos produits : comprendre et mettre en place une démarche éco-conception",
                    "Localisation_de_la_structure": "Mulhouse",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://www.cetim.fr/formation/formation/Conception/Eco-conception/innover-sur-vos-produits-comprendre-et-mettre-en-place-une-demarche-eco-conception-w-g10"
                }
            },
            {
                "type": "Feature",
                "id": "fa3df2e9-ef73-3e79-260c-e5a3c212aaf8",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "fa3df2e9-ef73-3e79-260c-e5a3c212aaf8",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Objectifs pédagogiquesRéaliser et interpréter une ACV.Utiliser les fonctions principales de l'outil SimaPro.Comprendre les connexions entre l'ACV et l'éco-conception des produits",
                    "Courte_description_du_programme_Contenu": "Principes de l'Analyse du cycle de vie (ACV)Contexte normatif et réglementaire (normes ISO 14040/44).Présentation des étapes de l'ACV.Présentation des différentes bases de données.Présentation des différentes méthodes de calcul.Rappel des règles de la communication environnementale sur la base d'une ACV.Présentation du logiciel SimaPro et mise en application pratiquePrésentation du domaine d'application et des fonctions principales.Étude de cas sur un exemple industriel incluant :la collecte de données ,la modélisation du cycle de vie d'un produit ,le choix des méthodes de calcul ,l'interprétation des résultats ,le lien avec l'éco-conception (amélioration de produit d'un point de vue environnemental).",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "CETIM",
                    "Intitule_de_la_formation": "Savoir réaliser une Analyse du cycle de vie (ACV) d'un produit",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.cetim.fr/formation/formation/Industrie-du-Futur/Eco-conception/savoir-realiser-une-analyse-du-cycle-de-vie-acv-d-un-produit-g11"
                }
            },
            {
                "type": "Feature",
                "id": "26b797c7-d7d8-fc8f-6f0d-5803c55a59fc",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.1008067,
                        49.0508845
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "26b797c7-d7d8-fc8f-6f0d-5803c55a59fc",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique  (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "ESIEE[IT]",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Au terme de cette formation, tout participant saura :Quelles sont les grandes tendances en matière de numérique responsableProposer des solutions pour réduire les coûtsMettre en place un projet Green IT",
                    "Courte_description_du_programme_Contenu": "Module 1. Green IT : Contexte et enjeuxL’augmentation de la consommation énergétiqueLes premières initiatives dans le domaine du recyclageDéfinition du Green ITEffet de mode, effet marketing ou effet durable ?Un enjeu majeur pour tousModule 2. Le Green IT, du projet à la mise en œuvreSix grandes étapes fondamentalesInitialisation de la stratégie Green IT dans l’entrepriseAnalyse et audit de l’existantPondération des indicateurs de suivi en fonction de l’entrepriseIntégration des résultats sur une échelle de maturitéOrientation stratégique et urbanisation du système d’informationMise en œuvre des préconisations et accompagnement au changementExemple de check-list (Informatique et bureautique, Data-centers, Cycle de vie du matériel, Télécommunications)De l’origine du poste de travail aux technologies actuellesLa notion de clients légersL’extinction du poste de travailLes applications informatiques naturellement écolophobesModule 3. L’achat responsableL’éco-conception, initiatrice de l’achat responsableLes principaux éco-labelsL’utilisation des éco-labels au quotidienModule 4. Bien gérer les impressionsConstats et impacts de nos habitudes d’impressionMaîtriser ses impressionsModule 5. Le parc informatique dans son ensembleDe l’origine du poste de travail aux technologies actuellesLa notion de clients légersL’extinction du poste de travailLes applications informatiques naturellement écolophobesModule 6. Évoluer vers des datacenters vertsPlongée au cœur des datacentersLe calculateur DellLes datacenters greenModule 7. Gérer la fin de vie du matérielPourquoi recycler ?RéglementationRecyclage et réutilisation au quotidienModule 8. La démarche dans l’entreprise et les administrationsLa gouvernance de l’entreprise à l’heure du Green ITLes collectivités comme moteurs du changement'",
                    "Type_organisme": "Académique",
                    "NOM": "ESIEE[IT]",
                    "Intitule_de_la_formation": "ESIEE (CCI Paris)",
                    "Localisation_de_la_structure": "Pontoise",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "QCM - Certificat ESIEE-IT",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://www.esiee-it.fr/fr/formation-continue-green-it-le-numerique-responsable-grit0"
                }
            },
            {
                "type": "Feature",
                "id": "0005f581-b8e5-dc55-5168-f17d45e9db9e",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "0005f581-b8e5-dc55-5168-f17d45e9db9e",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "TEMESIS",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Comprendre les enjeux du numérique responsable et de l’écoconception numérique, inscrits dans des enjeux globaux ,Maîtriser les différences de concepts et de valeurs présents dans le Numérique responsable ,Aborder la démarche d’écoconception numérique de façon simple et outillée ,Agir, en créant le réflexe de sobriété numérique au sein des futurs projets.",
                    "Courte_description_du_programme_Contenu": "Cette formation permet de comprendre les enjeux actuels ainsi que l’impact social et environnemental du numérique. Elle aborde ensuite les moyens de déploiement d’une démarche de Numérique responsable. Le programme détaillé est le suivant :Le contexte actuel, les enjeux environnementaux et sociauxL’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numériqueL’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de viePlace à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthiqueQUIZ ludo-interactif sur les points incontournablesComment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebondsLa démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiques",
                    "Type_organisme": "Entreprise certification Qualiopi",
                    "NOM": "TEMESIS",
                    "Intitule_de_la_formation": "Sensibilisation au numérique responsable et à l’écoconception",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.temesis.com/expertises/ecoconception/formation/sensibilisation-numerique-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "c71f148a-4272-ec39-bdee-841ef1488c4e",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "c71f148a-4272-ec39-bdee-841ef1488c4e",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "TEMESIS",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Réfléchir collectivement à la mise en place de bonnes pratiques en terme de conception et d’usage du numériquePercevoir les enjeux et les niveaux d’impact de chaque bonne pratique selon les perceptions et les acquis de chaque apprenant et apprenanteDémontrer et prendre conscience que des solutions simples à complexes, en terme d’usages et de développements, sont facilement identifiables et réalisablesProfiter du partage collectif au sein d’un atelier de réflexion collaborativeDéployer des bonnes pratiques de numérique éco-responsable en organisation, s’appliquer ces bonnes pratiques",
                    "Courte_description_du_programme_Contenu": "Sous forme d’atelier d’idéation, cet exercice d’intelligence collective permet de prendre conscience des moyens d’actions, de leur portée et de leur degré de difficulté. Le programme détaillé est le suivant :Qu’est-ce qu’une bonne pratique d’écoconception responsable ? Exemples.Recherche et rédaction collective de bonnes pratiquesOrganisation de ces bonnes pratiques selon leur catégorie, leur impact et leur difficulté de mise en œuvre",
                    "Type_organisme": "Entreprise",
                    "NOM": "TEMESIS",
                    "Intitule_de_la_formation": "Atelier de bonnes pratiques d’écoconception et de numérique responsable",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.temesis.com/expertises/ecoconception/formation/atelier-ecoconception-numerique-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "6bcc6f7a-3abd-ae60-273e-e6f405415792",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "6bcc6f7a-3abd-ae60-273e-e6f405415792",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "TEMESIS",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numériqueComprendre les impacts du numérique inscrits dans des enjeux globauxMaîtriser les différences de concepts et de valeurs présents dans le numérique responsableAborder la démarche d’écoconception numérique de façon simple et outilléeAgir, en créant le réflexe de sobriété numérique au sein des futurs projets numériques",
                    "Courte_description_du_programme_Contenu": "Le programme détaillé est le suivant :Le contexte actuel, les enjeux environnementaux et sociauxL’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numériqueL’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de viePlace à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthique et numérique responsableQUIZ ludo-interactif sur les points incontournablesAtelier de réflexion collective afin de définir et de catégoriser des bonnes pratiques d’écoconception et de numérique responsableComment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebondsLa démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiquesCette formation avec atelier de réflexion collective réunit la formation de sensibilisation au numérique responsable et à l’écoconception et l’atelier de bonnes pratiques d’écoconception et de numérique responsable. Elle peut être rythmée par des interventions ludo-pédagogiques (quiz interactif) afin de renforcer la mémorisation des points incontournables.",
                    "Type_organisme": "Entreprise",
                    "NOM": "TEMESIS",
                    "Intitule_de_la_formation": "Comprendre le numérique responsable & la démarche d’écoconception numérique (1 jour)",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.temesis.com/expertises/ecoconception/formation/comprendre-numerique-responsable-ecoconception/"
                }
            },
            {
                "type": "Feature",
                "id": "eedc235b-3d36-0fc1-e4ab-b4fc0d4ec28a",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "eedc235b-3d36-0fc1-e4ab-b4fc0d4ec28a",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "TEMESIS",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numériqueComprendre les impacts du numérique inscrits dans des enjeux globauxMaîtriser les différences de concepts et de valeurs présents dans le Numérique responsableAborder la démarche d’écoconception numérique de façon simple et outilléeAgir, en créant le réflexe de sobriété numérique au sein des futurs projets numériquesRéfléchir concrètement à l’écoconception d’un service numérique en minimisant son impact environnemental via un exercice d’optimisation (atelier participatif d’1 journée)",
                    "Courte_description_du_programme_Contenu": "Le programme détaillé est le suivant :Le contexte actuel, les enjeux environnementaux et sociauxL’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numériqueL’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de viePlace à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthique et numérique responsableQUIZ ludo-interactif sur les points incontournablesComment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebondsAtelier de réflexion collective afin de définir et de catégoriser des bonnes pratiques d’écoconception et de numérique responsableLa démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiques(Atelier pratique d’1 journée) Amélioration d’un projet web fictif dès la conception UX, sous forme de réflexion individuelle via l’outil Figma et avec partage des optimisations en groupe. Études de cas concrets en ligne : audit et axes d’amélioration possibles.Cette formation complète avec atelier pratique d’écoconception et de Green-UX réunit la formation de sensibilisation au numérique responsable et à l’écoconception et l’atelier de bonnes pratiques d’écoconception et de numérique responsable. Elle peut être rythmée par des interventions ludo-pédagogiques (quiz interactif) afin de renforcer la mémorisation des points incontournables.",
                    "Type_organisme": "Entreprise",
                    "NOM": "TEMESIS",
                    "Intitule_de_la_formation": "Comprendre le numérique responsable & la démarche d’écoconception numérique (2 jours avec atelier)",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.temesis.com/expertises/ecoconception/formation/comprendre-numerique-responsable-ecoconception-atelier/"
                }
            },
            {
                "type": "Feature",
                "id": "10ab7213-685c-f1f0-a48a-d478a2876c2b",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "10ab7213-685c-f1f0-a48a-d478a2876c2b",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "TEMESIS",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Designer responsable - Durée 3 heures (UX-UI designer)Développeur responsable - Durée 3 heures (Front & Back développeur)Chef de projet responsable - Durée 3 heures (Chef de projet)Product Manager responsable - Durée 3 heures (Product manager & Product owner)Infrastructure responsable - Durée 3 heures (SRE - Site Reliability Engineering, Devops & Adminsys)Marketing Manager responsable - Durée 3 heures (Responsable marketing)",
                    "Courte_description_du_programme_Contenu": "",
                    "Type_organisme": "Entreprise",
                    "NOM": "TEMESIS",
                    "Intitule_de_la_formation": "Formation en lligne",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "3",
                    "Modalites": "Distanciel",
                    "URL décrivant le programme": "https://www.temesis.com/expertises/ecoconception/formation/module-specifique/"
                }
            },
            {
                "type": "Feature",
                "id": "c15c3cde-69d7-2996-51d5-cf61a01c0182",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        3.8767337,
                        43.6112422
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "c15c3cde-69d7-2996-51d5-cf61a01c0182",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "",
                    "Type_organisme": "Académique",
                    "NOM": "",
                    "Intitule_de_la_formation": "EPF Ecole d'ingénieur.e.s",
                    "Localisation_de_la_structure": "Montpellier",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Skill-based evaluation",
                    "Duree_de_la_formation": "3",
                    "Modalites": "",
                    "URL décrivant le programme": "https://www.epf.fr/formations/cycle-master-les-majeures/majeure-data-engineering"
                }
            },
            {
                "type": "Feature",
                "id": "6f8229ba-d5e1-7bb8-9a40-36c381c9ca9e",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -2.0260409,
                        48.649518
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "6f8229ba-d5e1-7bb8-9a40-36c381c9ca9e",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "CCP 1 – Accompagner différents publics vers l'autonomie dans les usages des technologies, services et médias numériques :Elaborer des programmes d'actions de médiation facilitant l'appropriation des savoirs et des usages numériques.Concevoir et produire des ressources pédagogiques et documentaires pour différents supports.Accueillir différents publics, les informer et proposer des actions de médiation numérique.Préparer et animer des actions de médiation individuelles et collectives dans différents environnements numériques.CP 2 – Contribuer au développement d'un espace de médiation numérique et de ses projets :Effectuer un diagnostic de territoire et de ses besoins numériques. Contribuer au développement et à la pérennité financière d'un espace de médiation numérique.Développer des partenariats et des collaborations avec des acteurs du territoire.Promouvoir un espace de médiation numérique et ses projets par une communication multicanale interne et externe.CCP 3 – Contribuer à la gestion d'un espace de médiation numérique et animer ses projets collaboratifs :Contribuer au suivi administratif et comptable d'un espace de médiation numérique.Assurer l'entretien et la maintenance du matériel numérique d'un espace de médiation numérique.Faciliter et accompagner des projets collaboratifs dans des communautés physiques et à distance.",
                    "Type_organisme": "Centre de Formation",
                    "NOM": "EMERAUDE COMPETENCES MFR - CFA",
                    "Intitule_de_la_formation": "Titre de Responsable d'Espace de Médiation Numérique",
                    "Localisation_de_la_structure": "Saint Malo",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Le Titre Professionnel de responsable d'espace de médiation numériqueNiveau 5 (bac+2)",
                    "Duree_de_la_formation": "58",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "http://www.emeraude-competences-mfr.fr/formations-5-54-titre-professionnel-responsable-d--039-espace-de-mediation-numerique.html"
                }
            },
            {
                "type": "Feature",
                "id": "efa62c1d-39d6-b4ba-21f9-17e41cf323a9",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        4.8320114,
                        45.7578137
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "efa62c1d-39d6-b4ba-21f9-17e41cf323a9",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale et Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "Autre",
                    "Le programme couvre / Objectif": "Une intervention isolée (séminaire ou séance de cours)",
                    "Courte_description_du_programme_Contenu": "1 cours d'une journée, 7hImpacts du numérique, green coding, écoconception",
                    "Type_organisme": "Ecole d'informatique",
                    "NOM": "IT Akademy",
                    "Intitule_de_la_formation": "Développeur fullstack",
                    "Localisation_de_la_structure": "Lyon",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Certification RNCP31678 pour l'ensemble de la formation",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://www.it-akademy.fr/formation/parcours/2/developpeur-fullstack-dfs"
                }
            },
            {
                "type": "Feature",
                "id": "b941af9b-acd2-f064-7ead-cac4e571ba5d",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.0939658,
                        49.4404591
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "b941af9b-acd2-f064-7ead-cac4e571ba5d",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "MOOC",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Numérique responsable, 5 vidéos de 30 mn au total, plein de liens et un quizz à la fin pour une petite certification",
                    "Type_organisme": "",
                    "NOM": "",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Rouen",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "distanciel",
                    "URL décrivant le programme": "https://metropoleposition.fr/agir-pour-un-numerique-responsable/"
                }
            },
            {
                "type": "Feature",
                "id": "57f570a8-0fed-6e15-473c-6ebc12fc89f7",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.6800198,
                        48.1113387
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "57f570a8-0fed-6e15-473c-6ebc12fc89f7",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Les compétences professionnelles visées à l’issue de cette formation sont de :• développer et diffuser un usage du numérique plus sobre en énergie ,• développer et diffuser un usage des données personnelles mieux raisonné et protecteur des droits de tou·te·s ,• concevoir et partager des supports de communication numériques plus inclusifs",
                    "Courte_description_du_programme_Contenu": "Cette formation vous permet de comprendre les enjeux du numérique aujourd'hui : sa matérialité pour mieux répondre à l'urgence climatique , le traitement des données pour pouvoir les protéger correctement , les inégalités numériques actuelles pour pouvoir orienter vos actions en faveur de l'inclusion.",
                    "Type_organisme": "Organisme de formation",
                    "NOM": "Competens",
                    "Intitule_de_la_formation": "Numérique responsable",
                    "Localisation_de_la_structure": "Rennes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "5",
                    "Modalites": "présentiel et distanciel",
                    "URL décrivant le programme": "https://www.competens.net/product/fc/558"
                }
            },
            {
                "type": "Feature",
                "id": "cf4ca5aa-4b21-660a-c3c2-6405b963d3e1",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5541362,
                        47.2186371
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "cf4ca5aa-4b21-660a-c3c2-6405b963d3e1",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Définition de l’écoconception de services numériques- Comprendre l’impact environnemental du numérique et sa réglementation en France- Identification des leviers design et technique de d’écoconception, pour les applications web et mobile- Découverte d’outils pour mettre en place une démarche d’écoconception sur ses projets",
                    "Type_organisme": "",
                    "NOM": "Entreprise Orange Business Services",
                    "Intitule_de_la_formation": "Sensibilisation à l’écoconception de services numériques – conception logicielle web et mobile",
                    "Localisation_de_la_structure": "Nantes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "présentiel et distanciel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "a72a7aa0-0efb-a2ca-6c17-fbfc56a06551",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.7810546,
                        47.2739351
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "a72a7aa0-0efb-a2ca-6c17-fbfc56a06551",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Eco-conception web",
                    "Type_organisme": "Organisme de formation, formation en entreprise",
                    "NOM": "Orange Carré",
                    "Intitule_de_la_formation": "Eco-conception web",
                    "Localisation_de_la_structure": "Saint-Etienne-de-Montluc",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "3",
                    "Modalites": "présentiel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "97d79928-c72f-cd1e-d2e1-a617f3e31d4f",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5541362,
                        47.2186371
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "97d79928-c72f-cd1e-d2e1-a617f3e31d4f",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Objectifs- Comprendre la démarche d’écoconception de service numérique au travers de l’écoconception d’un site web- Maîtriser les concepts fondamentaux de la sobriété numérique et de l’écoconception- Savoir les appliquer aux services numériques (site web)- Maîtriser la méthodologie et les outils permettant d’éco-concevoir un site web",
                    "Courte_description_du_programme_Contenu": "A l’issue de la formation, chaque apprenant sera en mesure de :- maîtriser la méthodologie et les principaux outils d’écoconception web (hors ACV) ,- évaluer la performance et la maturité environnementale d’un service numérique ,- éco-concevoir un service numérique (orienté site web)",
                    "Type_organisme": "formatrice certifiée Qualiopi (membre de la coopérative L'ouvre-boîtes 44)",
                    "NOM": "Corymbe",
                    "Intitule_de_la_formation": "Eco-conception de site web",
                    "Localisation_de_la_structure": "Nantes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "10.5",
                    "Modalites": "présentiel et distanciel",
                    "URL décrivant le programme": "https://corymbe.coop/formation/eco-conception-de-site-web/"
                }
            },
            {
                "type": "Feature",
                "id": "3c7cec04-0aa4-ab8a-da0c-11425081c8a3",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -3.8331972,
                        48.5824932
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "3c7cec04-0aa4-ab8a-da0c-11425081c8a3",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "- Les principes de bases du numérique responsable inspiré du travail de Vincent Courboulay, directeur de l'institut du numérique responsable- Focus sur les déchets produits directement et indirectement par les usages et consommations d'objets numériques- Trucs et astuces pour réduire cette production de déchets",
                    "Type_organisme": "auto-entreprise - travaileur indépendant",
                    "NOM": "",
                    "Intitule_de_la_formation": "Le numérique responsable pour les familles zéro déchets",
                    "Localisation_de_la_structure": "Morlaix",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Non",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "présentiel et distanciel",
                    "URL décrivant le programme": "www.tisserands.bzh et https://www.linkedin.com/feed/update/urn:li:activity:6907681791600152576"
                }
            },
            {
                "type": "Feature",
                "id": "5a3176e3-5fdb-5024-6291-2f89a565af38",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5541362,
                        47.2186371
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "5a3176e3-5fdb-5024-6291-2f89a565af38",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "Ping",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Vous développez une activité professionnelle dans les secteurs de l’ESS, associatifs ou des tiers-lieux/fablabs, et vous avez à cœur de porter des valeurs éthiques, éco-responsables ou solidaires dans votre pratique professionnelle. Ces valeurs ne sont pas juste des mots et sont incarnées par vos positionnements et vos actions. Cependant, l’utilisation d’outils numériques de Google, Apple, Microsoft, Adobe (entre autres géants numériques tentaculaires) pour travailler et collaborer au quotidien vous interroge, car vous avez l’impression de mobiliser des outils numériques « en dissonance » avec les valeurs que vous portez dans votre activité professionnelle.Vous souhaitez avancer pas à pas sur cet aspect de votre activité ? Cette formation vous permettra de dresser un état des lieux de vos usages, d’identifier des alternatives activables dans votre contexte professionnel et de tester des solutions concrètes en mode « bac à sable », en compagnie d’autres professionnel·les.",
                    "Type_organisme": "Association",
                    "NOM": "Ping",
                    "Intitule_de_la_formation": "Aligner ses pratiques numériques (outils, usages) avec les valeurs de son activité professionnelle",
                    "Localisation_de_la_structure": "Nantes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Contrôle continu pendant la formation / Exercices de mise en pratique",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel",
                    "URL décrivant le programme": "https://info.pingbase.net/offre-de-formation/#1638529798812-a741f1a7-1e06"
                }
            },
            {
                "type": "Feature",
                "id": "df378f42-e53b-1b03-0bf9-dcf3e374ab9a",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        1.8883335,
                        46.603354
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "df378f42-e53b-1b03-0bf9-dcf3e374ab9a",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Prendre conscience de l'impact du numérique dans le secteur du tourisme et s'approprier les clés du numérique responsable pour l’intégrer de façon cohérente à sa stratégie de tourisme durable et RSE.Comprendre les synergies entre tourisme durable et numérique responsable pour construire un discours et une expertise adaptée selon l’interlocuteur.Optimiser sa stratégie tourisme durable grâce à des leviers de communication et des moyens digitaux raisonnés et adaptés.Formateur Alary Alexandre (fondateur du collectif / consultant marketing responsable tourisme durable). Marie Husson (green IT et membre du collectif digital green tourisme) intervenant ( membre du collectif expert site internet éco conception, et social média impact positif)",
                    "Type_organisme": "Collectif",
                    "NOM": "collectif digital green tourisme en partenariat avec Formanova",
                    "Intitule_de_la_formation": "Intégrer le Numérique Responsable  dans votre stratégie de tourisme durable & RSE",
                    "Localisation_de_la_structure": "National",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Un QCM de connaissances avec une attestation de formation",
                    "Duree_de_la_formation": "1",
                    "Modalites": "présentiel et distanciel",
                    "URL décrivant le programme": "https://www.canva.com/design/DAE7aYGUMJY/fe-TdVeh6GZjXKSowQ9ybg/view?utm_content=DAE7aYGUMJY&utm_campaign=designshare&utm_medium"
                }
            },
            {
                "type": "Feature",
                "id": "c382e179-42ab-7367-4882-b7a8aae754a6",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -1.5541362,
                        47.2186371
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "c382e179-42ab-7367-4882-b7a8aae754a6",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "Comment peut-on agir pour des outils numériques plus éthiques alors que nous ne sommes pas de la technique ? Nous verrons ensemble comment concevoir, au sens large, des applications métier, des sites internet ou des services numériques plus respectueux de l’environnement et leurs utilisateurs.",
                    "Type_organisme": "Agence et organisme de formation",
                    "NOM": "Jujotte",
                    "Intitule_de_la_formation": "Design numérique responsable",
                    "Localisation_de_la_structure": "Nantes",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "À l’issue de la formation, vous pourrez :- Acquérir les bases théoriques de la conception numérique responsable.- Connaître les leviers les plus impactants pour des interfaces plus respectueuses de l’environnement- Acquérir les bases théoriques des règles d’accessibilité web",
                    "Duree_de_la_formation": "1",
                    "Modalites": "présentiel et distanciel",
                    "URL décrivant le programme": "https://www.notion.so/jujotte/Design-num-rique-responsable-91eb43034a0d4291b3be2c85ba496bfa"
                }
            },
            {
                "type": "Feature",
                "id": "dd4e8754-5f6d-46fa-d8d4-0cb81aa9c410",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "dd4e8754-5f6d-46fa-d8d4-0cb81aa9c410",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Un ou plusieurs modules / unités d'enseignement",
                    "Courte_description_du_programme_Contenu": "",
                    "Type_organisme": "",
                    "NOM": "TEMESIS",
                    "Intitule_de_la_formation": "Comprendre le numérique responsable & la démarche d’écoconception numérique",
                    "Localisation_de_la_structure": "Paris - France",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "- Évaluation des acquis au cours de la formation sous forme de quiz ludo-interactif- Questionnaire d’évaluation en fin de session dans lequel le participant évalue les apports de la formation et sa capacité à les mettre en œuvre",
                    "Duree_de_la_formation": "1.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "93b91d4c-48b2-32d4-31ac-c2e21cf2e8c8",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "93b91d4c-48b2-32d4-31ac-c2e21cf2e8c8",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "",
                    "Courte_description_du_programme_Contenu": "",
                    "Type_organisme": "",
                    "NOM": "Association d'intérêt général",
                    "Intitule_de_la_formation": "Atelier pro écoconception & design numérique",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "- Compréhension des impacts environnementaux du numérique et le rôle du design sur ces enjeux- Découverte des concepts clés de la démarche d’écoconception- Capacité à estimer l’empreinte environnementale d’un parcours- Etre capable d’identifier des pistes d’amélioration et d’optimiser certains contenus web pour réduire l’impact environnemental d’un service numérique",
                    "Duree_de_la_formation": "0.5",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": ""
                }
            },
            {
                "type": "Feature",
                "id": "29426d90-977c-e815-696e-2655475533b9",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "29426d90-977c-e815-696e-2655475533b9",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Nous vous proposons un atelier de 3h30 suit le déroulé suivant :- Introduction aux impacts environnementaux du numérique- Analyse d’impact de 2 parcours utilisateur- Identification des principaux leviers d’action et exemples d’améliorations- Rappel des bonnes pratiques de conception-design- Questions et partage",
                    "Courte_description_du_programme_Contenu": "",
                    "Type_organisme": "",
                    "NOM": "Association d'intérêt général",
                    "Intitule_de_la_formation": "Formation à l'écoconception de services numériques par Designers Ethiques",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "- Comprendre les enjeux environnementaux du numérique- Savoir en quoi consiste l'écoconception- Être capable d'estimer l'impact environnemental d'un parcours web- Acquérir les bonnes pratiques d'écoconception en tant que designer ou concepteur de service numérique- Identifier des leviers d'action au sein de son entreprise",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.ut-capitole.fr/formations/nos-diplomes/masters/master-m2-mention-management-parcours-type-droit-et-gestion-de-la-res"
                }
            },
            {
                "type": "Feature",
                "id": "a6a4c05a-ea75-351b-ce7d-ab3d9ef5df47",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.3483915,
                        48.8534951
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "a6a4c05a-ea75-351b-ce7d-ab3d9ef5df47",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "1 - L’impact environnemental du numériqueEffets du numérique sur l’environnementEmpreinte écologique et impacts sociaux, économiques etpolitiques du numériqueRéchauffement climatique, gaz à effet de serre et bilancarbone2 - Le numérique responsableDe quoi s’agit-il ?Les initiatives et acteurs du Numérique ResponsableLois et projets de loi sur l’impact environnemental dunumériqueEt le numérique au service de la transition écologique?L’effet rebond3 - Les démarches des acteurs en faveur de la sobriéténumériqueOù en sont les fournisseurs de l’IT ?Maturité des entreprises et organisations publiques sur lesujet4 - Déployer la sobriété numérique en entreprise:ordres de grandeur, leviers d’action et rôle de l’ITLes sources d’émissions carbone de la DSIBilan carbone de la DSI, et plan d’action ITLeviers de réduction : optimiser ses infrastructures etéquipements, politique d’achats et exigences pour lesfournisseurs, Gestion et fin de vie des équipements,Sobriété numérique by designL’analyse de cycle de vie5 - Organiser sa démarche au sein de son entrepriseDéployer une politique NROrganiser la gouvernance d’une stratégie sur le numériqueresponsableBonnes pratiques et outils pour une gouvernance NRImpliquer les parties prenantes : métiers de la DSI /Direction achats / RSE / communicationPiloter sa stratégie sur le numérique responsable. Exemplesde KPILe label NRPoints forts / Moyens pédagogiques▪ Une formation en petit groupe par des consultants experts dansleur métier.▪ Des études de cas et quizz pour favoriser l’apprentissage.▪ Une évaluation de fin de parcours.Compétences acquises grâce à la formation▪ Introduction à l’impact environnemental du numérique▪ Comprendre les enjeux pour la DSI et les équipes RSEModule",
                    "Courte_description_du_programme_Contenu": "1 - L’impact environnemental du numérique2 - Le numérique responsable3 - Les démarches des acteurs en faveur de la sobriété4 - Déployer la sobriété numérique en entreprise:5 - Organiser sa démarche au sein de son entreprise",
                    "Type_organisme": "",
                    "NOM": "",
                    "Intitule_de_la_formation": "Introduction au Numérique Responsable",
                    "Localisation_de_la_structure": "Paris",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "Connaissances sur l'impact environnemental du numérique, compréhension des enjeux de la DSI",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.elee.com/sites/elee-site/files/2022-02/El%C3%A9e%20-%20Catalogue%20des%20formations%202022_0.pdf"
                }
            },
            {
                "type": "Feature",
                "id": "a2a00854-cbc6-3828-7081-f289ffeeab81",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.2368863,
                        48.8841522
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "a2a00854-cbc6-3828-7081-f289ffeeab81",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "1 - L’impact du numériqueQuelques chiffres: état des lieux et ordres de grandeurEt le numérique pour la transition écologique ?Impact social, politique et économique du numériqueL’effet rebond2 - Le Numérique responsableDe quoi s’agit-il ?Les initiatives et acteurs du Numérique ResponsableLes lois, projets de loi, réglementations et initiativespubliques3 - Les démarches des acteurs en faveur de la sobriéténumériqueOù en sont les fournisseurs de l’IT ?Focus sur les acteurs du cloud (américains et français)Maturité des entreprises françaises sur le sujet4 - Comment mesurer l’empreinte environnementale del’informatique de son organisation?Réchauffement climatique et gaz à effet de serre.Le bilan carbone de l’ITLes équipements ITIdentifier et approfondir les postes importantsCas Pratique5 - Et l’empreinte des services ?L’analyse de cycle de vieQuel type de mesure pour quelle finalité ?6 - Focus sur le numérique au service de la transitionécologiqueNet Zero InitiativeEtude de cas sur le télétravail : opportunité ou illusion ?7 - Déployer la sobriété numérique en entreprise: leviersd’action et rôle de la DSIEtablir un plan de réductionComment manier les mécanismes de compensation ?Etablir et suivre ses KPI.8 - Organiser sa démarche au sein de son entrepriseDéployer une politique numérique durable. Impliquer sesclients. Mettre en œuvre la transformation culturelle.Organiser sa gouvernanceLes attentes des clients envers leurs fournisseursLes 65 bonnes pratiques de l’INR et le label NRCas Pratique",
                    "Courte_description_du_programme_Contenu": "Sujet abordés sur la journée :1. impact environnemental du numérique, notions de réchauffement climatique, émissions de GES2. Numérique responsable, initiatives et acteurs, lois, numérique et transition écologique3. Démarches en faveur de la sobriété numérique, maturité des entreprises françaises4. Déployer la sobriété numérique en entreprise, ordres de grandeurs, bilan carbone, leviers d'actions5. Organiser sa démarche au sein de son entreprise : déployer une politique numérique responsable, organiser la gouvernance, impliquer les parties prenantes",
                    "Type_organisme": "",
                    "NOM": "",
                    "Intitule_de_la_formation": "La sobriété numérique et son application dans la stratégie de la DSI",
                    "Localisation_de_la_structure": "Puteaux",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "- Développer une compréhension poussée du numérique responsable et de l’environnement réglementaire- Comprendre les principes de la comptabilité carbone pour l’IT et savoir mesurer et identifier ses flux d’émissions- Bâtir un plan d’action et une stratégie Green IT, en embarquant les équipes et les parties prenantes",
                    "Duree_de_la_formation": "2",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.elee.com/sites/elee-site/files/2022-02/El%C3%A9e%20-%20Catalogue%20des%20formations%202022_0.pdf"
                }
            },
            {
                "type": "Feature",
                "id": "abefcda1-0297-863b-9de3-987cfb6ff707",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.2368863,
                        48.8841522
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "abefcda1-0297-863b-9de3-987cfb6ff707",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation Continue",
                    "Vous_êtes_une_structure": "Privée (établissement de formation, entreprise, etc.)",
                    "Libellé de l'établissement": "",
                    "Libellé du département / Unité de formation": "",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Sujet abordés :1. Impact du numérique2. le Numérique Responsable3. Les démarches des acteurs en faveur de la sobriété numérique4. Comment mesurer l'empreinte environnementale de l'informatique de son organisation ?5. Et l'empreinte des services ?6. Focus sur le numérique au service de la transition écologique7. Déployer la sobriété numérique en entreprise : leviers d'action et rôle de la DSI8. Organiser sa démarche au sein de son entreprise",
                    "Courte_description_du_programme_Contenu": "Sujet abordés :1. Impact du numérique2. le Numérique Responsable3. Les démarches des acteurs en faveur de la sobriété numérique4. Comment mesurer l'empreinte environnementale de l'informatique de son organisation ?5. Et l'empreinte des services ?6. Focus sur le numérique au service de la transition écologique7. Déployer la sobriété numérique en entreprise : leviers d'action et rôle de la DSI8. Organiser sa démarche au sein de son entreprise",
                    "Type_organisme": "",
                    "NOM": "",
                    "Intitule_de_la_formation": "Achats IT responsables",
                    "Localisation_de_la_structure": "Puteaux",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "- connaissances pour des achats IT plus durables- labels, certifications",
                    "Duree_de_la_formation": "1",
                    "Modalites": "Présentiel et distanciel",
                    "URL décrivant le programme": "https://www.elee.com/sites/elee-site/files/2022-02/El%C3%A9e%20-%20Catalogue%20des%20formations%202022_0.pdf"
                }
            },
            {
                "type": "Feature",
                "id": "5e4e1696-bae2-c3e0-5724-bc04de492b26",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        2.2368863,
                        48.8841522
                    ]
                },
                "properties": {
                    "_jawgmaps_options": {
                        "id": "5e4e1696-bae2-c3e0-5724-bc04de492b26",
                        "marker": "marker-25",
                        "markerAnchor": "bottom"
                    },
                    "Formation_Continue_initiale": "Formation initiale",
                    "Vous_êtes_une_structure": "Publique (université, école d'ingénieur, etc.)",
                    "Libellé de l'établissement": "Mines Saint-Étienne",
                    "Libellé du département / Unité de formation": "Institut Henri Fayol",
                    "Cycle de formation": "",
                    "Le programme couvre / Objectif": "Sujets abordés :1. Evaluer ses fournisseurs et prestataires : Comprendre l'empreinte carbone de ses fournisseurs, labels et certifications RSE/environnementales des entreprises, labels et certifications de l'informatique et du recyclage des objets électroniques dans le cadre B2B, évaluation de la gestion de la fin de vie de son parc d'équipements2. Formaliser une politique d'achat Numérique Responsable : aspects reglementaires, contract management, normes, contrats IT, clausiers et cahier des charges",
                    "Courte_description_du_programme_Contenu": "La séance de cours « Systèmes d'information et responsabilité sociétale » s'inscrit dans un module de cours sur les bonnes pratiques du développement logiciel. La majorité du module est dédiée à des bonnes pratiques d'un point de vue de la programmation (design patterns, principes SOLID) mais 2h de cours sont dédiées au numérique responsable.",
                    "Type_organisme": "",
                    "NOM": "",
                    "Intitule_de_la_formation": "",
                    "Localisation_de_la_structure": "Puteaux",
                    "Cette formation donne t-elle lieu à une validation des acquis ? Si oui, lesquels ?": "",
                    "Duree_de_la_formation": "",
                    "Modalites": "",
                    "URL décrivant le programme": "http://www.vcharpenay.link/courses/num-responsable.html"
                }
            }
        ]
    };

    L.geoJSON(myGeoJson).addTo(map);
}