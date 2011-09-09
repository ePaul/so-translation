Stack Exchange translated - in any language.
--------------------------------------------

This is an unofficial client-side translation project for the user interface of the Stack Exchange question- and answer sites.

It is primarily aimed at the language-and-usage sites ([German][], [French][], [Japanese][] are now in beta), which have a large percentage of non-english speaking users.

This is an ongoing effort, not yet perfect.

 Usage
-------

Install the user scripts into your browser. You need:

* A dictionary file (dictionary-*.user.js)
* The translation helper script (helper-for-translations.user.js)
* The actual translation script (stack_overflow_translation.user.js)

In Opera, put them into a directory and configure that directory as your user script directory (Settings => extended => contents  => JavaScript options => User Javascript directory).

In Firefox, install the [GreaseMonkey][] addon (if you didn't already), then install these as user scripts (simply clicking on the file should give you the link). Install them in the order listed above, or afterwards reorder them in this order (the translation script needs to be last).

If you have multiple dictionaries (i.e. for different languages), the last one loaded will be used.


 Contribute/discuss
--------------------

* The [main meta question][meta]
* The [chat room][chat]

We need more translations, improvements in the translation script, bug reports, and also praise :-)

* On the beta sites, some texts are given as [an image][sketchy-sprites] - there we would need either a translated image, or some way to manipulate the CSS to show our translated texts instead.
* On some visual elements, we might need some resizing so the translations fit.
* The scripts need testing (and maybe bugfixing) on more browsers (and user script managers, if applicable).
* We need translations to more languages. (Simply take the dictionary file, and translate the parts right of the `:`.)

 Authors/Contributors
----------------------

The current code is developed by [Ninefingers][] and [Paŭlo][], with the translation helper contributed by [George Edison][].
French translations by [Ninefingers][] and [Gilles][].


[German]: http://german.stackexchange.com/
[French]: http://french.stackexchange.com/
[Japanese]: http://japanese.stackexchange.com/
[GreaseMonkey]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[meta]: http://meta.stackoverflow.com/questions/105169/help-translate-the-stackexchange-ui-unofficial
[chat]: http://chat.stackexchange.com/rooms/1289/localization-and-translation
[sketchy-sprites]: http://cdn.sstatic.net/Skins/sketchy/img/sprites-beta.png?v=2
[Ninefingers]: http://meta.stackoverflow.com/users/142852/ninefingers
[Paŭlo]: http://meta.stackoverflow.com/users/156902/paulo-ebermann
[George Edison]: http://meta.stackoverflow.com/users/142114/george-edison
[Gilles]: http://meta.stackoverflow.com/users/149076/gilles