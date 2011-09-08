// ==UserScript==
// @name           Translation helper.
// @namespace      http://vennard.org.uk/greasemonkey/
// @description    Helper object for the Stack Overflow translation.
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



//======================================
//          translations.js
//  Manages translations and implements
//      them in HTML and JavaScript
//======================================

// The Translator object is responsible for managing
// translations and returning the proper translations
// given a 'key' which is typically the English translation.

function run_as_content(f) {
  script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = "(" + f.toString() + ")()";
  document.body.appendChild(script);
  document.body.removeChild(script); // cleanup
}

run_as_content(function() {



Translator = {
    
    // Storage variables
    translation_table: null,
    
    // Gets the translation for a given key
    GetTranslation: function(key) {
        
        if(Translator.translation_table == null) return key;
        return (typeof Translator.translation_table[key] == 'undefined')?key:Translator.translation_table[key];
        
    },
    
    // This function makes it easy to assign translations
    // to DOM elements by simply providing #ID as a key.
    AssignToDOM: function() {
        
        // Loop through the keys in the translation
        // table.
        for(var key in Translator.translation_table)
        {
            if(key[0] == '#') {
                // Eat the '#'
                key = key.substr(1);
            
                var element = document.getElementById(key);
                
                if(element != null)
                    element.innerHTML = Translator.translation_table["#" + key];
            }
        }
        
    }
};

    });
