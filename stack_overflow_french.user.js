// ==UserScript==
// @name           Stack Overflow in French
// @namespace      http://vennard.org.uk/greasemonkey/
// @description    Provides a translation to the SO UI in French
// @include        http://stackoverflow.com/*
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
    /*var StackText = new Array();

    StackText["Search"].setter = $('#search input').val;
    StackText["Search"].translation = "Recherchez";	*/

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

    $('.relativetime').each(function(reltimebox) {
        str = $(this).html();
        items = str.split(" ");
        if ( items.length == 2 )
        {
            $(this).html("Il y a " + items[0]); 
        }
        else
        {
            if ( items[1] == "hours" ) { items[1] = "heures"; }
            if ( items[1] == "hour" ) { items[1] = "heure"; }
            if ( items[1] == "mins" ) { items[1] = "minutes" };
            if ( items[1] == "min" ) { items[1] = "minute" };
            $(this).html("Il y a " + items[0] + " " + items[1]);
        }
    });

    $('span.comment-date span').each(function(reltimebox) {
        str = $(this).html();
        items = str.split(" ");
        if ( items.length == 2 )
        {
            $(this).html("Il y a " + items[0]); 
        }
        else
        {
            if ( items[1] == "hours" ) { items[1] = "heures"; }
            if ( items[1] == "hour" ) { items[1] = "heure"; }
            if ( items[1] == "mins" ) { items[1] = "minutes" };
            if ( items[1] == "min" ) { items[1] = "minute" };
            $(this).html("Il y a " + items[0] + " " + items[1]);
        }
    });

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

