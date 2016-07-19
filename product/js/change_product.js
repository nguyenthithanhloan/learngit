;(function($){

  var $currentImage;

  $(function(){
    $currentImage = $(".img_current img");
    $currentPoint = $("#main_thumbs li");
    $("#main_thumbs li")
    .on({
      "mouseenter": function(event){
        event.preventDefault();
        $("#main_thumbs li").removeClass("mouseover")
        $currentImage.hide();
        $currentImage.eq( $(this).index() ).stop().show();
        $currentPoint.eq( $(this).index() ).addClass("mouseover");
      }
    });
    $("#main_thumbs li").on({
      "mouseleave": function(event){
        event.preventDefault();
        if( !$(this).hasClass("mouseover") ){
          $currentImage.stop().hide();
          $currentPoint.eq( $(this).index() ).removeClass("mouseover");
        }
      }
    });
  });
}(jQuery));
