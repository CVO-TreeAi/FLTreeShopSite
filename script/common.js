/** 1. wp-menu-js.js **/

// JavaScript Document
jQuery( document ).ready( function( $ ) {
	
	// Multi-Toggle Navigation
	jQuery(function() {
		jQuery('body').addClass('js');
			var	$menu = jQuery('#menu'),
				$menulink = jQuery('.menu-link'),
				$menuTrigger = jQuery('.has-subnav');

		$menulink.click(function(e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
		});

		$menuTrigger.click(function(e) {
			e.preventDefault();
			var $this = jQuery(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
		});

		jQuery("#menu ul li a").click(function(e){
			$menulink.removeClass('active');
			$menu.removeClass('active');
		});

	});
	
});

/*--------------------------------------------------------------------------*/

/** 2. scroll.js **/ 

jQuery(document).ready(function(){  
	jQuery(".scroll").click(function(event){  
         //prevent the default action for the click event  
         event.preventDefault();  
         //get the full url - like mysitecom/index.htm#home  
         var full_url = this.href;  
         //split the url by # and get the anchor target name - home in mysitecom/index.htm#home  
         var parts = full_url.split("#");  
         var trgt = parts[1];  
         //get the top offset of the target anchor  
         var target_offset = jQuery("#"+trgt).offset();  
         var target_top = target_offset.top - 50;  
         //goto that anchor by setting the body scroll top to anchor top  
         jQuery('html, body').animate({scrollTop:target_top}, 1000);  
     });  
 }); 
 $(document).ready(function(){  
	$(".scroll2").click(function(){  
	   //prevent the default action for the click event  
	 //  event.preventDefault();  
	   //get the full url - like mysitecom/index.htm#home  
			  // alert(this.href);
	   var full_url = this.href;  
	   //split the url by # and get the anchor target name - home in mysitecom/index.htm#home  
	   var parts = full_url.split("#");  
	   var trgt = parts[1];  
	   //get the top offset of the target anchor  
	   var target_offset = $("#"+trgt).offset();  
	   var target_top = target_offset.top - 78;   
	   //goto that anchor by setting the body scroll top to anchor top  
	   $('html, body').animate({scrollTop:target_top}, 1000);  
   });    
});