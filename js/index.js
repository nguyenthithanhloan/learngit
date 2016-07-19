(function($, win){
  "use strict";

  var Index = $.index = (function(){

      var i = 0,
          $win,
          $item,
          itemLen = 0,
          rows = 2,
          rowsProduct = 4,
          setItemHeight,
          setItemColumn,
          itemHeight,
          sliderTop,
          featureBox,
          productSlider,
          mySwiper,
          newsBox,
          countTxt,
          productSliderSP,
          featureBoxSP,
          resetCloseHandler,
          winWidth = 0,
          widthFlg = false;

    function init(){
      $win = $(window);
  		winWidth = $win.width();
  		widthFlg = ($win.width() > 767) ? false : true;
      itemHeight();
      newsBox();
      sliderTop();
      resetCloseHandler();
      countTxt();
      $(window).on("load resize", function(){
        widthFlg = ($win.width() > 767) ? false : true;
        if(!widthFlg) {
         featureBox();
         productSlider();
       } else {
         productSliderSP();
         featureBoxSP();
       }
      });
    }

    newsBox = function(){
      $(window).on("load resize", function(){
         widthFlg = ($win.width() > 767) ? false : true;
         if(widthFlg){
           var i = 0;
           $(".new_list").each(function(){
             for (i = 0; i < 3; i++) {
               $(this).children().eq(i).addClass("show");
             }
           });
         }
      });
    }


    countTxt =  function() {
      // add 3 dots text on three line
      var answers = $('#new_box .new_list dd');
      var initialTexts = [];
      for (var i = 0, len = answers.length; i < len; i++) {
        initialTexts.push(answers.eq(i).text());
      }
      $(window).on('load resize', function() {
        answers.each(function(index, el) {
          if( $(window).width() < 767) {
            truncate(el, initialTexts[index], { line: 3 });
          } else {
            truncate(el, initialTexts[index], { line: 1000 });
          }
        });
      });

    }

    // set height colum
    itemHeight =  function(){
      $(window).on("load resize", function(){
        if($win.width() > 767 ){
          var maxHeight = 0;
          $('.feature_info .item').each(function() {
            $('.feature_info .item').css("height","auto");
            if ($(this).height() > maxHeight) {
              maxHeight = $(this).height();
            }
          });
          $('.feature_info .item').height(maxHeight);
          $("#product_box .product_list").each(function(){
            $item = $(this).find(".item a");
            itemLen = $item.length;
            for( var i = -1, len = Math.ceil( itemLen / rowsProduct); ++ i < len; ){
              var itemArrayProduct = [];
              for( var j = -1; ++ j < rowsProduct; ){
                itemArrayProduct.push( i * rowsProduct + j );
              }
              setItemColumn(itemArrayProduct);
            }
          });
        } else {
          $('.feature_info .item').css("height","auto");
        }
      });

    }
    setItemColumn = function(itemNum){
      var textMaxHeight = 0;
      for( var i = 0; i < itemNum.length; i++){
        textMaxHeight = $item.eq(itemNum[i]).find('.text').height() > textMaxHeight ? $item.eq(itemNum[i]).find('.text').height() : textMaxHeight;
      }
      for(i = 0; i < itemNum.length; i++){
        $item.eq(itemNum[i]).find('.text').height(textMaxHeight);
      }
    }

    sliderTop = function() {
      mySwiper = $('.slider').swiper({
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '#arrow_slider .btn_next',
        prevButton: '#arrow_slider .btn_prev',
        spaceBetween: 30,
        loop: true,
        effect: 'fade'
      });
    }
    featureBox = function() {
      mySwiper = $('.feature_container').swiper({
        paginationClickable: true,
        nextButton: '#btn_change .next',
        prevButton: '#btn_change .prev',
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
        breakpoints: {
          1024: {
              slidesPerView: 2,
              spaceBetween: 0
          }
        }
      });
    }


    featureBoxSP = function() {
      mySwiper = $('.feature_container').swiper({
        paginationClickable: true,
        nextButton: '#btn_change .next',
        prevButton: '#btn_change .prev',
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
          1024: {
              slidesPerView: 1,
              spaceBetween: 0
          }
        }
      });
    }


    productSlider = function() {

      $(".product_item").each(function() {

        var next = $(this).find(".view_product .next");
        var prev = $(this).find(".view_product .prev");

        mySwiper  =  $(this).find(".product_name").swiper({
          paginationClickable: true,
          nextButton: next,
          prevButton: prev,
          slidesPerView: 5,
          spaceBetween: 0,
          breakpoints: {
            1024: {
                slidesPerView: 5,
                spaceBetween: 0
            }
          }
        });

      });
    }

    productSliderSP =  function() {

      $(".product_item").each(function() {

        var next = $(this).find(".view_product .next");
        var prev = $(this).find(".view_product .prev");

        mySwiper  =  $(this).find(".product_name").swiper({
          paginationClickable: true,
          nextButton: next,
          prevButton: prev,
          slidesPerView: 2,
          spaceBetween: 0,
          breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 0
            }
          }
        });

      });
    }


    resetCloseHandler = function() {
      if(!widthFlg) {
        $("#new_box .new_list dl").removeAttr('style');
      }
    }


    return {
      init: init
    };

  })();

  $(Index.init);

})(jQuery, window);
