(function($, window, document, undefined) {

    'use strict';

    // Show and hide debug table (pseudo element workaround)
    $('body').on('click', '.perch-debug', function(e){
        if (e.offsetY < 0) { $('.perch-debug').toggleClass('perch-debug--open'); }
    });

})(jQuery, window, document);