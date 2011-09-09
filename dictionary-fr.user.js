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


// idea from http://wiki.greasespot.net/Content_Script_Injection
function run_as_content(f) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "(" + f.toString() + ")()";
  document.body.appendChild(script);
  document.body.removeChild(script); // cleanup
}

run_as_content(function() {
        // alert("window: " + window + "\ntranslations: " + window.translations);
        var fr_trans = {
            "#nav-questions" : "Questions", 
            "#nav-unanswered" : "Sans réponse",
            "#nav-users" : "Membres",
            "#nav-askquestion" : "Demander",
            "#nav-tags" : "Étiquettes",
            "#h-interesting-tags" : "Étiquettes favourites",
            "#h-ignored-tags" : "Étiquettes ignorées",
            "#h-recent-tags" : "Étiquettes récente",
            "#h-recent-badges" : "Badges récent",
            "#h-top-questions": "Meilleurs Questions",
            "#h-related" : "Questions proches",

            "Badges" : "Badges",
            "Tags" : "Étiquettes", 
            "tools" : "outils",
            "search" : "rechercher",
            "interesting" : "Interéssant",
            "week" : "la semaine",
            "month" : "le mois",
            "hot" : "du Jour",
            "not yet" : "pas encore",
            "just now" : "à l'instant",
            "one minute ago" : "il y a une minute",
            "%s minutes ago" : "il y a %s minutes",
            "one hour ago" : "il y a une heure",
            "%s hours ago" : "il y a %s heures",
            "yesterday" : "hier",
            "%s days ago" : "il y a %s jours",
            "tag subscriptions" : "Filtres de reseau",
            "Add" : "Ajoutez",
            "_bottom-notice_": "Pour en cherchez plus? Voir le <a href=\"/questions\">liste complét de questions</a>, ou <a href=\"/tags\">étiquettes</a>. Assistez-vous répondre aux <a href=\"/unanswered\">questions sans réponse</a>.",
            "votes" : "votes",
            "vote" : "vote",
            "answers" : "réponses",
            "answer" : "réponse",
            "view" : "visite",
            "views" : "visites",
            // TODO: check the grammar (and maybe complete the sentence)
            "one of the answers was accepted as the correct answer" :" une des réponses est acceptée",
            // intentionally with space:
            "asked " : "posée ",
            "edited " : "éditée ",
            "answered " : "postée ",

            "add comment" : "Commenter",
            "Your Answer" : "Votre réponse",
            "Post Your Answer" : "Téléchargez votre réponse",
            "link" : "lien",
            "edit" : "modifier",
            "flag": "signaler",
            "close" : "fermer",
            "This answer is useful (click again to undo)" : "Cette réponse soit utile (clickez encore pour reverser)",
            "This answer is not useful (click again to undo)" : "Cette réponse soit inutile (clickez encore pour reverser)",

            // TODO: needs full translation
            "This question shows research effort; it is useful and clear (click again to undo)" : "Cette question soit utile (clickez encore pour reverser)",
            "This question does not show any research effort; it is unclear or not useful (click again to undo)" : "Cette question soit inutile (clickez encore pour reverser)",

            "This is a favorite question (click again to undo)" : "This is a favorite question (click again to undo)",
            "View upvote and downvote totals" : "Voir les totales plus et minus.",

            "_month_names_" : [ "janv.", "févr.", "mars", "avr.",
                                "mai", "juin", "juill.", "août",
                                "sept.", "oct.", "nov.", "déc." ],

            // date format:
            // %1$d - year (number)
            // %2$s - month (string)
            // %3$d - day (number)
            // %4$d - hour (number)
            // %5$02d - minute (number), formatted with
            //           leading zero if necessary
            //
            // long format (for dates less than a half year ago)
            "%2$s %3$d %1$d at %4$d:%5$02d" : "le %3$s %2$s %1$d, %4$d:%5$02d",
            // short format (for dates more than a half year ago)
            "%2$s %3$d at %4$d:%5$02d" : "le %3$s %2$s, %4$d:%5$02d"
        }


        window.translations = fr_trans;
    });