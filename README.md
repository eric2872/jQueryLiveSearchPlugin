jQueryLiveSearchPlugin
======================
This is a jQuery plugin I made because I was bored and I had trouble originally making a live search!


You must have the form action from the search form be on a different page from the form for it to work correctly.



Also you should have the results be displaped on the search action page. This plugin will pull in the results from the search action page to the original page instantly as the user types! 





Usage:

$.livesearch({formid:'INSERT SEARCH FORM ID HERE WITH #',results_container_id:'INSERT THE DIV ID OF WHERE YOU WANT TO SHOW THE RESULTS HERE WITH #'});





Example:

$.livesearch({formid:'#searchform',results_container_id:'#results'});
