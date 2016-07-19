;(function($, win){
  'use strict';

  var Share = $.share = (function() {
    var heightProductImage;
    function init(){
      Lines();
      countTxt();
      heightProductImage = $('.product_image').height();
      $('.product_details').css('height', heightProductImage);
    }

    /**
     * Count Text
     */
    function countTxt() {
        var
            $item = $('.product'),
            $des = $item.find('.descript');
            var isFirefox = typeof InstallTrigger !== 'undefined';
            var $initialDescs = [];
        for (var i = 0, len = $item.length; i < len; i++) {
          $initialDescs.push($des.eq(i).text());
        }

        $(window).on('load resize', function() {
          $des.each(function(index, el) {
              truncate(el, $initialDescs[index], { line: 3 });
              var $content = $(this).html();
              var divHeight = $(this).height();
              var lineHeight = $(this).css('line-height');
              var num = parseInt(lineHeight);
              var lines = divHeight / num;
              var $link = $(this).next('.view_more').clone().removeAttr('style');
              if (lines == 3 ) {
                $content = $content.substring(0, $content.length - 10);
                $(this).next('.view_more').css({'display': 'none'});
                $(this).html($content).append("<span class='ellipse'>...</span>").append($link);
              } else if (lines <= 2) {
                $(this).next('.view_more').css({'display': 'none'});
                $(this).html($content).append($link); }
            });
        });
    }

    function Lines()
      {
        var $item = $('.product');
        var $des = $item.find('.descript');

      }

    return {
      init: init
    };

  })();

  $(Share.init);

})(jQuery, window);
