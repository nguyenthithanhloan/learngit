;(function(){

  var Index = $.index = (function(){
    var $button = null;
    var $accordion = null;

    function init(){
      $button = $(".list_menu h3");
      $accordion = $(".list_menu ul");

      $button.on({
        "click": function(){
          var $this = $(this);
          if(!$this.hasClass("active")){
            $this.addClass("active").siblings().removeClass('active');
          } else {
            $(".list_menu h3").removeClass("active");
          }
          $accordion.stop().slideUp();
          $this.next().stop().slideToggle();
        }
      });
    }
    return {
      init:init
    }

  })();
  $(Index.init);

})(jQuery);
