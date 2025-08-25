
jQuery(window).on('load',function() {
	var ajaxobj ;
	if (ajaxobj) ajaxobj.abort() ;
	ajaxobj = jQuery.ajax({
		url: "inc-blog-list.php",	// "inc-blog-list.php"
		cache:false,
		context: document.body,
		beforeSend: function(html){
			$('#BottomLatestBlog').html('<div class="TAC"><img src="images/loader.gif"></div>') ;
		},	// success: function
		success: function(data){
			html = data ;
			jQuery('#BottomLatestBlog').html(html) ;
		}	// success: function
	});	// ajaxobj = $.ajax
}) ;