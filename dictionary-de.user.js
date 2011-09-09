// ==UserScript==
// @name           German translations.
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
        var de_trans = {
            "#nav-questions" : "Fragen", 
            "#nav-unanswered" : "Unbeantwortet",
            "#nav-users" : "Nutzer",
            "#nav-askquestion" : "Frage stellen",
            "#nav-tags" : "Tags",
            "#h-interesting-tags" : "Lieblings-Tags",
            "#h-ignored-tags" : "ignorierte Tags",
            "#h-recent-tags" : "letzte Tags",
            "#h-recent-badges" : "letzte Medallien",
            "#h-top-questions": "Spitzen-Fragen", // ???
            "#h-related" : "ähnliche Fragen",

            "Badges" : "Medallien",
            "Tags" : "Tags", 
            "tools" : "Tools",
            "search" : "Suche",
            "interesting" : "Interessant",
            "week" : "Woche",
            "month" : "Monat",
            "hot" : "Angesagt",
            "not yet" : "Noch nicht",
            "just now" : "gerade eben",
            "one minute ago" : "vor einer Minute",
            "%s minutes ago" : "vor %s Minuten",
            "one hour ago" : "vor einer Stunde",
            "%s hours ago" : "vor %s Stunden",
            "yesterday" : "gestern",
            "%s days ago" : "vor %s Tagen",
            "tag subscriptions" : "Tag-Filter",
            "Add" : "Hinzufügen", // zu lang :-/
            "_bottom-notice_": "Suchst du mehr?  Sieh die <a href=\"/questions\">Gesamt-Liste der Fragen</a>, oder <a href=\"/tags\">Tags</a>. Hilf mit, <a href=\"/unanswered\">unbeantwortete Fragen</a> zu beantworten.",
            "votes" : "Stimmen",
            "vote" : "Stimme",
            "answers" : "Antworten",
            "answer" : "Antwort",
            "view" : "Ansicht",
            "views" : "Ansichten",
            "one of the answers was accepted as the correct answer" : "eine der Antworten wurde akzeptiert",
            // intentionally with space:
            "asked " : "gefragt ",
            "edited " : "bearbeitet ",
            "answered " : "geantwortet ",

            "add comment" : "Kommentieren",
            "Your Answer" : "Deine Antwort",
            "Post Your Answer" : "Sende deine Antwort",
            "link" : "verlinke",
            "edit" : "bearbeite",
            "flag": "markiere",
            "close" : "schließe",
            "This answer is useful (click again to undo)" : "Diese Antwort ist nützlich (noch einmal klicken für rückgängig)",
            "This answer is not useful (click again to undo)" : "Diese Antwort ist nicht nützlich (noch einmal klicken für rückgängig)",

            // TODO: needs full translation
            "This question shows research effort; it is useful and clear (click again to undo)" : "Diese Frage zeigt Recherche-Aufwand, sie ist nützlich und klar  (noch einmal klicken für rückgängig)",
            "This question does not show any research effort; it is unclear or not useful (click again to undo)" : "Diese Frage zeigt keinen Recherche-Aufwand, sie ist unnütz oder unklar (noch einmal klicken für rückgängig)",

            "This is a favorite question (click again to undo)" : "Dies ist eine Lieblings-Frage (noch einmal klicken für rückgängig)",
            "View upvote and downvote totals" : "Sieh die Zahlen der hoch- und nieder-Stimmen", // ?? http://german.stackexchange.com/questions/998/ist-rauf-voten-und-runter-voten-eine-akzeptable-ubersetzung-fur-upvote-und

            "_month_names_" : [ "Jan.", "Feb.", "März", "Apr.",
                                "Mai", "Juni", "Juli", "Aug.",
                                "Sep.", "Okt.", "Nov.", "Dez." ],

            // date format:
            // %1$d - year (number)
            // %2$s - month (string)
            // %3$d - day (number)
            // %4$d - hour (number)
            // %5$02d - minute (number), formatted with
            //           leading zero if necessary
            //
            // long format (for dates less than a half year ago)
            "%2$s %3$d %1$d at %4$d:%5$02d" : "am %3$s. %2$s %1$d um %4$d:%5$02d",
            // short format (for dates more than a half year ago)
            "%2$s %3$d at %4$d:%5$02d" : "am %3$s. %2$s um %4$d:%5$02d"
        }


        window.translations = de_trans;
    });