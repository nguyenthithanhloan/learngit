;(function($, win){
  "use strict";
  var
    $win = null,
    $item,
    itemLen = 0,
    rows = 2,
    setItemHeight,
    setItemColumn,
    itemHeight,
    searchSp,
    $headerNavPanel = null,
    $headerNavItem = null,
    $subNav = null,

    widthFlg = false,
    isTablet = false,
    winWidth = 0,


    UA = navigator.userAgent;

    $(function(){
      $win = $(window);
      winWidth = $win.width();
      widthFlg = ($win.width() > 767) ? false : true;

      $headerNavPanel = $('.section_menu');
      $headerNavItem = $headerNavPanel.find('> ul > li > a');
      $subNav = $headerNavItem.parent().find('> .sub_nav > li > a');

      itemHeight();
      navToggle();
      navSP();

      $win.on('load resize', function(){
        winWidth = $win.width();
        widthFlg = (winWidth > 767) ? false : true;
        if(widthFlg){
          searchSp();
          navCloseHandler();
        }
      });

    });

    itemHeight =  function(){
      $(window).on("load resize", function(){
      if( $win.width() < 767 ){
        $('.ranking_content .name_list').each(function() {
          $item = $(this).find(".item");
          itemLen = $item.length;
          $item.css("height","auto");
          for( var i = -1, len = Math.ceil( itemLen / rows); ++ i < len; ){
            var itemArray = [];
            for(var j = -1; ++ j < rows;){
              itemArray.push( i * rows + j );
            }
            setItemColumn(itemArray);
          }
        });
      } else {
        $('.ranking_content .name_list .item').css("height","auto");
      }
      });
    };
    setItemColumn = function(itemNum){
      var itemMaxHeight = 0;

      for( var i = 0; i < itemNum.length; i++){
        itemMaxHeight = $item.eq(itemNum[i]).height() > itemMaxHeight ? $item.eq(itemNum[i]).height() : itemMaxHeight;
      }

      for(i = 0; i < itemNum.length; i++){
        $item.eq(itemNum[i]).height(itemMaxHeight);
      }
    };


    searchSp = function(){
      var $search = $(".search_sp span");
      $search.on({
        "click": function(){
          var $this = $(this);
          $("#form_box").stop().slideToggle();
        }
      });
    }


    // navigation SP
    function navToggle() {
      var $btn_nav = $('.menu_bar').find('.ico_bars');
      var $btn_close = $('.ico_bars_close');
      $btn_nav.on('click', function() {
        $('#nav').addClass('open').stop().animate({
          'margin-left': '0',
          'opacity': 1,
          'height': '100%'
        }, 500);
        $('.menu_bar').stop().animate({
          'margin-left': '-49px'
        }, 500);
        $('.menu_bar').hide();
        $('body, html, #wrapper').addClass('lock_scroll');
        $('#header').after('<div class="overlay_sp"></div>');
      });

      $btn_close.on('click', function() {
        $('#nav').removeClass('open').stop().animate({
          'margin-left': '-100%',
          'opacity': 0.5,
          'height': 'auto'
        }, 500);
        $('.menu_bar').stop().animate({
          'margin-left': '0'
        }, 500);
        $('.menu_bar').show();
        $('body, html, #wrapper').removeClass('lock_scroll');
        $('div.overlay_sp').remove();
      });
    }

    function navSP() {
      $headerNavItem.on('click', function() {
        $(this).parent().find('> .sub_nav').stop().slideToggle(300);
        $subNav.parent().find('.sub_nav').removeAttr('style');
      });
      $subNav.on('click', function() {
        $(this).parent().find('> .sub_nav').stop().slideToggle(300);
      });
    }



  function navCloseHandler() {
    if(!widthFlg) {
      $headerNavPanel.removeAttr('style');
      $headerNavPanel.find('div').removeAttr('style');
      $headerNavTab.removeClass('expand');
    }
  }




})(jQuery)
