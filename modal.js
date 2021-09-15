$(".purple-close").on('click',function(e){
	e.preventDefault();
	$(this).parent().parent().find('[class^="purple_"]').addClass('hideZoomOut')
})

  var pageLink = window.location.pathname.split('/').pop(-1);
    if (pageLink.indexOf('m-') + 1) {
        pageLink = pageLink.substring(2);
    }
    $('.side-nav__row').each(function() {
        if ($(this).attr('href') === pageLink) {
            $(this).addClass('side-nav__row_active');
        }
    });

 $("#purple-info-handler").click(function(){
        $("#purple-modal-info").show().addClass('bgcolor').removeClass('bgcolorRemove');
        $(".purple-modal-info__window").addClass('showZoomIn').removeClass('hideZoomOut');
    });
  $(document).click(function (e) {
    if ( $(e.target).is('#purple-modal-info') || $(e.target).is('.purple-modal-info__close') ) {
        $('#purple-modal-info').removeClass('bgcolor').addClass('bgcolorRemove');
        $(".purple-modal-info__window").removeClass('showZoomIn').addClass('hideZoomOut');
    	setTimeout(function() {
    		$('#purple-modal-info').hide();
    	}, 500);
    }
});