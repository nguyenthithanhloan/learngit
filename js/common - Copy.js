(function($){
  'use strict';

  var Common = $.share = (function(){

    var $win = null,
        $headerNavPanel = null,
        $headerNavItem = null,
        $headerNavTab = null,

        widthFlg = false,
        isTablet = false,
        winWidth = 0,
        duration = 500;

    function init(){
      $win = $(window);
      winWidth = $win.width();
      widthFlg = ($win.width() > 767) ? false : true;
      isTablet = (navigator.userAgent.indexOf('iPad') != -1) || (navigator.userAgent.indexOf('Android') != -1) ? true : false;

      $headerNavPanel = $('.section_menu');
      $headerNavItem = $headerNavPanel.find('> ul > li');
      $headerNavTab = $headerNavPanel.find('.text_menu');

      hoverNav();

      $win.on('resize orientationchange', function(){
        winWidth = $win.width();
        widthFlg = (winWidth > 767) ? false : true;
        navCloseHandler();
        $headerNavPanel.find("a").on ({
          "click": function(event) {
            event.preventDefault();
            location.href = $(this).attr("href");
          }
        });
      });
    }

    /**
     * hoverNav
     * Hover to open/hide Header Nav on PC
    */
    function hoverNav(){
      $headerNavItem.off().on({
        'mouseenter': function(e){
          if(!widthFlg && !isTablet) {
            var $menuitem = $(this),
            $content = $menuitem.find('div'),
            height = 0;
            $menuitem.addClass('open');
            $content.css({'display':'block','height':'auto'});
            height = $content.find('ul').removeAttr('style').height();
            $content.find('ul').css({'height':0});
            $content.find('ul').stop().animate({'height':height}, 400);
          }
        },
        'mouseleave': function(e){
          if(!widthFlg && !isTablet) {
            var $menuitem = $(this),
            $content = $menuitem.find('div'),
            height = 0;
            $menuitem.removeClass('open');
            $content.find('ul').stop().animate({'height':0}, 150, function(){
              $content.css({'display':'none'});
            });
          }
        },
        'click': function(e){
          if(!widthFlg && isTablet) {
            var $menuitem = $(this),
            $content = $menuitem.find('div'),
            height = 0;
            $headerNavItem.not($menuitem).removeClass('open');
            $headerNavItem.not($menuitem).find('div').hide();
            $menuitem.toggleClass('open');
            if($menuitem.hasClass('open')) {
              $content.show();
            } else {
              $content.hide();
            }
          }
        }
      });
    }

    /**
     * navCloseHandler
     * Reset Open/Close menu
     */
    function navCloseHandler() {
      if(!widthFlg) {
        $headerNavPanel.removeAttr('style');
        $headerNavPanel.find('div').removeAttr('style');
        $headerNavTab.removeClass('expand');
      }
    }

    return {
      init: init
    }


  })();
/* document.ready
----------------------------------------*/
$(Common.init);

})(jQuery);
