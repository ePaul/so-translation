// ==UserScript==
// @name           French translations
// @namespace      http://vennard.org.uk/greasemonkey/
// @description    The dictionary for the French Stack Overflow translation.
// @include        http://stackoverflow.com/*
// @include        http://meta.stackoverflow.com/*
// @include        http://superuser.com/*
// @include        http://meta.superuser.com/*
// @include        http://serverfault.com/*
// @include        http://meta.askubuntu.com/*
// @include        http://stackapps.com/*
// @include        http://meta.stackapps.com/*
// @include        http://*.stackexchange.com/*
// ==/UserScript==



// alert("window: " + window + "\ntranslations: " + window.translations);

var fr_trans = {
    "#nav-questions" : "Questions", 
    "#nav-unanswered" : "Sans réponse",
    "#nav-users" : "Membres",
    "#nav-askquestion" : "Demander",
    "#nav-tags" : "Balises",
    "#h-interesting-tags" : "Balises favourites",
    "#h-ignored-tags" : "Balises ignorées",
    "#h-recent-tags" : "Balises récente",
    "#h-recent-badges" : "Badges récent",
    "#h-top-questions": "Meilleurs Questions",

    "tools" : "outils",
    "search" : "rechercher",
    "interesting" : "Interéssant",
    "week" : "la semaine",
    "month" : "le mois",
    "hot" : "du Jour",
    "___" : "________"
}


    if(!window.translations) {
        window.translations = {};
    }

window.translations.fr = fr_trans;