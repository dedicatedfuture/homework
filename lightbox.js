$(document).ready(function(){

  $('.lightbox-link').click(function(e){

        var link_element = $(e.currentTarget);
        var imageURL = link_element.data('img');
        var image = $('.lightbox-image');
        image.attr('src', imageURL);
        centerImage(image);

        $('.lightbox-outer').show();

        $('.lightbox-outer').click(function(){
          $('.lightbox-outer').hide();
  });



})




})

function centerImage(image){
  image.load(function(){
    var pageHeight = $(window).height();
    var imageHeight = image.height;
    var imageOffset = (pageHeight - imageHeight) / 2;
    $('.lightbox-inner').css("margin-top", imageOffset);

  })

}