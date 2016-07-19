(function($, win){
  "use strict";

  var TopPage = $.index = (function(){

    var
      $mainVisual = null;

    function init() {
      $mainVisual = $('.main_visual');
      $(window).on('load rezize', function() {
        if($(window).width() < 767) {
          $mainVisual.find('img').attr('src', $mainVisual.find('img').attr('src').replace("bnr-feature_main", "bnr-feature_main_sp"));
        }
      });
    }

    return {
      init: init
    };

  })();

  $(TopPage.init);

})(jQuery, window);
