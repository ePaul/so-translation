//======================================
//          translations.js
//  Manages translations and implements
//      them in HTML and JavaScript
//======================================

// The Translator object is responsible for managing
// translations and returning the proper translations
// given a 'key' which is typically the English translation.

var Translator = {
    
    // Storage variables
    translation_table: null,
    
    // Loads the translations from the given
    // URL using JSON
    LoadTranslation: function(url, callback, method) {
        
        // Make the request to the URL.
        var request = new XMLHttpRequest();
        request.open((typeof method == 'undefined')?'GET':method, url, true);
        
        // Set the handler for the response
        request.onreadystatechange = function() {
            
            if(request.readyState == 4)
            {
                // Convert the response text into JSON
                // data.
                try
                {
                    Translator.translation_table = JSON.parse(request.responseText);
                    
                    // Everything has succeeded, so call the callback
                    // with the param. 'true'.
                    callback(true);
                }
                catch(exception)
                {
                    // Something went wrong, so call the callback
                    // specifying 'false' to indicate an error.
                    callback(false);
                }
            }
            
        };
        
        // Now send off the request.
        request.send();
    },
    
    // Gets the translation for a given key
    GetTranslation: function(key) {
        
        if(Translator.translation_table == null) return key;
        return (typeof Translator.translation_table[key] == 'undefined')?key:Translator.translation_table[key];
        
    },
    
    // This function makes it easy to assign translations
    // to DOM elements by simply providing their ID as a key.
    AssignToDOM: function() {
        
        // Loop through the keys in the translation
        // table.
        for(var key in Translator.translation_table)
        {
            // Eat the '#' if present.
            if(key[0] == '#') key = key.substr(1);
            
            var element = document.getElementById(key);
            
            if(element != null)
                element.innerHTML = Translator.translation_table[key];
        }
        
    }
};

// For convenience's sake, we assign the function '_'
// to the function Translator::GetTranslation
_ = Translator.GetTranslation;
