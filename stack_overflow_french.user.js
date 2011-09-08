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
// provide, the StackOverflow UI in any language. Ideally, the SE
// UI will handle this at some point, but a quick and dirty
// script like this ought to provide a way to crowdsource
// translations.
//
// -------------------------------------
//
// To provide the actual translation, this script needs also
// * a dictionary script (like dictionary-fr.user.js)
// * a translation helper object (given in translations.user.js).
//
// These should be loaded before this script (e.g. in GreaseMonkey,
// move them up in the list before this script).
// 
//

function with_jquery(f) {
  script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "(" + f.toString() + ")(jQuery)";
  document.body.appendChild(script);
};


with_jquery(function($) {


        // does not work here :-(
        //        var translations = window.translations;
        //        alert("translations: " + translations);

        // neither this:
        //        alert("translator:" + Translator);

        Translator.translation_table = translations;

        /**
         * a translating function, with optional more arguments.
         * The first argument will be looked up in the translation table.
         * The result is either a simple string, or a
         * printf-formatstring. If this method is given more arguments,
         * these and the formatstring are passed to sprintf, and the result
         * returned. Otherwise we return the translation result directly.
         */
        var _ = function(str) {
            var trans = Translator.GetTranslation(str);
            if(arguments.length > 1) {
                args = [];
                for(var i = 1; i < arguments.length; i++) {
                    args[i-1] = arguments[i];
                }
                return vsprintf(trans, args);
            }
            return trans;
        }
        

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
            const MONTH = 30 * DAY;
    
            if (delta < -1 * MINUTE)
                {
                    // in the future
                    return _("not yet"); // ???
                }
            if (delta < 1 * MINUTE)
                {
                    return _("just now");
                }
            if (delta < 2 * MINUTE)
                {
                    return _("one minute ago");
                }
            if (delta < 45 * MINUTE)
                {
                    // some minutes ago
                    return _("%s minutes ago", round(delta/60));
                }
            if (delta < 90 * MINUTE)
                {
                    return _("one hour ago");
                }
            if (delta < 24 * HOUR)
                {
                    // some hours ago
                    return _("%s hours ago", round(delta/60/60));
                }
            if (delta < 36 * HOUR)
                {
                    // yesterday
                    return _("yesterday");
                }
            if (delta < 30 * DAY)
                {
                    // some days ago
                    return _("%s days ago", round(delta/60/60/24) );
                }
            // even earlier

            var MONTHS = _("_month_names_");
            if("object" != typeof MONTHS) {
                MONTHS = ["Jan", "Feb", "Mar", "Apr",
                          "May", "Jun", "Jul", "Aug",
                          "Sep", "Oct", "Nov", "Dec"];
            }
            

            var day = date.getUTCDate();
            var monthnum = date.getUTCMonth();
            var month = MONTHS[monthnum];
            var year = date.getUTCFullYear();
            //            alert( "le " + day + " " + month + " " + year);
            var hour = date.getUTCHours();
            var minute = date.getUTCMinutes();
            
            if(delta < 6 * MONTH) {
                return _("%2$s %3$d at %4$d:%5$02d",
                         year, month, day, hour, minute);
            }
            else {
                return _("%2$s %3$d %1$d at %4$d:%5$02d",
                         year, month, day, hour, minute);
            }
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

    //    alert("lator:" + Translator);

    //    Translator.LoadTranslations("fr/dictionary.json");
    Translator.AssignToDOM();


    /*var StackText = new Array();

    StackText["Search"].setter = $('#search input').val;
    StackText["Search"].translation = "Recherchez";	*/

    $('a[href$="/tools/"]').html(_("tools"));
    $('#search input').val(_("search"));
    $('a[href$="?tab=interesting"]').html(_("interesting"));
    $('a[href$="?tab=week"]').html(_("week"));
    $('a[href$="?tab=month"]').html(_("month"));
    $('a[href$="?tab=hot"]').html(_("hot"));

    $('a[href$="/badges"]').html(_("Badges"));
    $('a[href$="/tags"]').html(_("Tags"));
    $('a[href$="http://stackexchange.com/filters"]').html(_("tag subscriptions"));
    $('#ignoredAdd').val(_("Add"));
    $('#interestingAdd').val(_("Add"));
    $('h2.bottom-notice').html(_("_bottom-notice_"));


    function translate_miniCount(result, singular, plural) {
        result.each(function() {
                var count = Number($(this).children(".mini-counts").text());
                var textChild = $(this).children("div:last-child");
                if(count == 1)
                    textChild.text(singular);
                else
                    textChild.text(plural);
            });
    }

    translate_miniCount($(".votes"), _("vote"), _("votes"));
    translate_miniCount($(".status"), _("answer"), _("answers"));
    translate_miniCount($(".views"), _("view"), _("views"));

    // set all titles for the list entries of accepted answers
    $(".status.answered-accepted").attr("title", _("one of the answers was accepted as the correct answer"));


    $('.relativetime').each(translate_relaTime);

    $('.user-action-time').each(function() {
            var textNode = $(this).contents().get(0);
            var str = textNode.data;
            //            alert("str: »" + str + "«");
            var translated = _(str);
            textNode.data = translated;
    });

    $('span.comment-date span').each(translate_relaTime);


    /*$('answers-header.h2').each(function(answersbox) {
        str = $(this).html();
        $(this).html(str + " réponses");
    });*/

    /*$('answers-header.h2').each(function(answersbox) {
        str = $(this).html();
        $(this).html(str + " réponses");
    });*/


    $('.comments-link').html(_("add comment"));
    $('h2.space').html(_("Your Answer"));
    $('#submit-button').val(_("Post Your Answer"));
    $('a[id^="link-post-"]').html(_("link"));
    $('a[id^="flag-post-"]').html(_("flag"));
    $('a[id^="close-question-"]').html(_("close"));
    $('a[href$="/edit"]').html("modifier");

    $('#answers a[class^="vote-up-"]').attr("title", _("This answer is useful (click again to undo)"));
    $('#answers a[class^="vote-down-"]').attr("title", _("This answer is not useful (click again to undo)"));

    $('#question a[class^="vote-up-"]').attr("title", _("This question shows research effort; it is useful and clear (click again to undo)"));
    $('#question a[class^="vote-down-"]').attr("title", _("This question does not show any research effort; it is unclear or not useful (click again to undo)"));


    $('a[class^="star-"]').attr("title", _("This is a favorite question (click again to undo)"));
    $('div.vote span.vote-count-post').attr("title", _("View upvote and downvote totals"));
});
