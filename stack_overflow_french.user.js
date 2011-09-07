// ==UserScript==
// @name           Stack Overflow in French
// @namespace      http://vennard.org.uk/greasemonkey/
// @description    Provides a translation to the SO UI in French
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

//
// The rationale behind this script is that it provides, or will
// provide, the StackOverflow UI in French. Ideally, the SE
// UI will handle this at some point, but a quick and dirty
// script like this ought to provide a way to crowdsource
// translations.
//

function with_jquery(f) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "(" + f.toString() + ")(jQuery)";
  document.body.appendChild(script);
};

with_jquery(function($) {

        /**
         * Parses an ISO-8601 formatted date (with spaces, `Z` time zone,
         * and without seconds) into a Date object.
         *
         * Adapted from
         * http://anentropic.wordpress.com/2009/06/25/javascript-iso8601-parser-and-pretty-dates/
         */
        function parseISO8601(str) {
            // we assume str is a UTC date ending in 'Z'

            var parts = str.split(' '), // use space instead of ' ', since that is used in SO.
                dateParts = parts[0].split('-'),
                timeParts = parts[1].split('Z'),
                timeSubParts = timeParts[0].split(':'),
                timeHours = Number(timeSubParts[0]),
                _date = new Date;

            _date.setUTCFullYear(Number(dateParts[0]));
            _date.setUTCMonth(Number(dateParts[1])-1);
            _date.setUTCDate(Number(dateParts[2]));
            _date.setUTCHours(Number(timeHours));
            _date.setUTCMinutes(Number(timeSubParts[1]));

            // by using setUTC methods the date has already been converted to local time(?)
            return _date;
        }

        /**
         * translates a date object into a (native-language)
         * relative time string.
         *
         * Adapted from http://stackoverflow.com/q/1248/600500.
         */
        function date_translate(date) {
            var now = new Date();
            var delta = (now.getTime() - date.getTime()) / 1000;

            const round = function(n) {
                return n.toFixed(0);
            }

            const SECOND = 1;
            const MINUTE = 60 * SECOND;
            const HOUR = 60 * MINUTE;
            const DAY = 24 * HOUR;
    
            if (delta < 0)
                {
                    return "not yet"; // ???
                }
            if (delta < 1 * MINUTE)
                {
                    return "just now";  // to translate
                }
            if (delta < 2 * MINUTE)
                {
                    // one minute ago
                    return "Il y a une minute";
                }
            if (delta < 45 * MINUTE)
                {
                    // some minutes ago
                    return "Il y a " + round(delta/60) + " minutes";
                }
            if (delta < 90 * MINUTE)
                {
                    // one hour ago
                    return "Il y a une heure";
                }
            if (delta < 24 * HOUR)
                {
                    return "Il y a " + round(delta/60/60) + " heures";
                }
            if (delta < 36 * HOUR)
                {
                    // yesterday
                    return "hier";
                }
            if (delta < 30 * DAY)
                {
                    // some days ago
                    return "Il y a " + round(delta/60/60/24) + " jours";
                }
            // even earlier

            const MONTHS =
                new Array("janv.", "févr.", "mars", "avr.",
                          "mai", "juin", "juill.", "août",
                          "sept.", "oct.", "nov.", "déc." );

            var day = date.getUTCDate();
            var monthnum = date.getUTCMonth();
            var month = MONTHS[monthnum];
            var year = date.getUTCFullYear();
            //            alert( "le " + day + " " + month + " " + year);
            var hour = date.getUTCHours();
            var minute = date.getUTCMinutes();
            if(minute < 10) {
                minute = "0" + minute.toString();
            }
            
            return "le " + day + " " + month + " " + year
                + ", " + hour + ":" + minute;
        }

        /**
         * Translates a span-element (given as this) with a relative time.
         *
         * The actual time is extracted from the title attribute,
         * parsed into a date and then translated into a relative
         * time string. This string is put as the text of this
         * element.
         */
    function translate_relaTime() {
            var datestr = $(this).attr("title");
            var date = parseISO8601(datestr);
            //            alert("date: " + date);
            var translated = date_translate(date);
            //            alert("translated: " + date);
            $(this).text(translated);
    }


    /*var StackText = new Array();

    StackText["Search"].setter = $('#search input').val;
    StackText["Search"].translation = "Recherchez";	*/

    $('a[href$="/tools/"]').html("outils");
    $('#search input').val("Rechercher");
    $('#h-top-questions').html("Meilleurs Questions");
    $('a[href$="?tab=interesting"]').html("Interéssant");
    $('a[href$="?tab=week"]').html("La semaine");
    $('a[href$="?tab=month"]').html("Le mois");
$('a[href$="?tab=hot"]').html("Du Jour");
    $('#nav-questions').html("Questions");
    $('#nav-unanswered').html("Sans réponse");
    $('#nav-users').html("Membres");
    $('#nav-askquestion').html("Demander");
    $('#nav-tags').html("Balises");
    $('#h-interesting-tags').html("Balises favourites");
    $('#h-ignored-tags').html("Balises ignorées");
    $('#h-recent-tags').html("Balises récente");
    $('#h-recent-badges').html("Badges récent");
    $('a[href$="/badges"]').html("Balises");
    $('a[href$="/tags"]').html("Badges");
    $('a[href$="http://stackexchange.com/filters"]').html("Filtres de reseau");
    $('#ignoredAdd').val("Ajoutez");
    $('#interestingAdd').val("Ajouter");
    $('h2.bottom-notice').html("Pour en cherchez plus? Voir le <a href=\"/questions\">liste complét de quewstions</a>, ou <a href=\"/tags\">badges</a>. Assistez-vous répondre aux <a href=\"/unanswered\">questions sans réponse</a>.");

    $('.votes').each(function(votebox) {
        votecount = $($(this).find('.mini-counts')).html($(this).find('.mini-counts').clone()).remove().html();
        $(this).html(votecount + "\n<div>votes</div");
    });

    $('.answered').each(function(votebox) {
        votecount = $($(this).find('.mini-counts')).html($(this).find('.mini-counts').clone()).remove().html();
        $(this).html(votecount + "\n<div>réponses</div");
    });

    $('.unanswered').each(function(votebox) {
        votecount = $($(this).find('.mini-counts')).html($(this).find('.mini-counts').clone()).remove().html();
        $(this).html(votecount + "\n<div>réponses</div");
    });

    $('.answered-accepted').each(function(votebox) {
        votecount = $($(this).find('.mini-counts')).html($(this).find('.mini-counts').clone()).remove().html();
        $(this).html(votecount + "\n<div>réponse(s)</div");
    });

    $('.views').each(function(votebox) {
        votecount = $($(this).find('.mini-counts')).html($(this).find('.mini-counts').clone()).remove().html();
        $(this).html(votecount + "\n<div>visites</div");
    });



    $('.relativetime').each(translate_relaTime);

    $('.user-action-time').each(function(actiontimebox) {
        str = $(this).html();
        n = str.indexOf(" ");
        word = str.substr(0, n);
        if (word == "asked") word = "posée";
        else if (word == "edited") word = "éditée";
        else if (word == "answered") word = "postée";
        else word = null;
        if (word) {
            $(this).html(word + str.substr(n));
        }
    });

    $('span.comment-date span').each(translate_relaTime);

    $('.user-action-time').each(function(actiontimebox) {
        str = $(this).html();
        n = str.indexOf(" ");
        word = str.substr(0, n);
        if (word == "asked") word = "posée";
        else if (word == "edited") word = "éditée";
        else if (word == "answered") word = "postée";
        else word = null;
        if (word) {
            $(this).html(word + str.substr(n));
        }
    });

    /*$('answers-header.h2').each(function(answersbox) {
        str = $(this).html();
        $(this).html(str + " réponses");
    });*/

    /*$('answers-header.h2').each(function(answersbox) {
        str = $(this).html();
        $(this).html(str + " réponses");
    });*/

    $('#h-related').html("Questions proches");

    $('a.comments-link').html("Commenter");
    $('h2.space').html("Votre réponse");
    $('#submit-button').val("Téléchargez votre réponse");
    $('a[id^="link-post-"]').html("lien");
    $('a[id^="flag-post-"]').html("signaler");
    $('a[id^="close-question-"]').html("fermer");
    $('a[href$="/edit"]').html("modifier");

    $('a[class^="vote-up-"]').attr("title", "Cette réponse soit utile (clickez encore pour reverser)");
    $('a[class^="vote-down-"]').attr("title", "Cette réponse soit inutile (clickez encore pour reverser)");
    $('a[class^="star-"]').attr("title", "Ce question est un favori (clickez encore pour reverser)");
    $('div.vote span.vote-count-post').attr("title", "Voir les totales plus et minus.");
});

