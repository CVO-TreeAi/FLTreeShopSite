jQuery.validator.addMethod(
	"checksum",
	function (value, element) {
		return this.optional(element) || jQuery('#TotalNumber').val() == value;
		//if(jQuery('#TotalNumber')!= value)
	},
	"Please check your input."
);
jQuery.validator.addMethod(
	"checkFName",
	function (value, element) {
		return this.optional(element) || jQuery('#FName').val().toLowerCase() != value.toLowerCase();
	},
	"first Name And Last Name Can Not Be Same ."
);
jQuery(document).ready(function() {
	jQuery('#RequestAQuoteThanksMsg').hide();
	jQuery('#RequestAQuoteBtnForm').click(function(e) {
		e.preventDefault();
		//alert("sdfdgfdfg");
		jQuery("#FormRequestAQuote").trigger('submit') ;
	}) ;//jQuery('#ContactBtnForm').click
	var validator = jQuery("#FormRequestAQuote").validate({
			ignore: [],
			rules : {
				FName :{ required: true },
				LName :{
					required: true,
					// checkFName:true 
				},
				Phone :{ required: true },
				Email :{
						required: true,
						email: true
 				},
				captchaResult: {
					required: true,
					checksum: true,
				},
				hiddenRecaptcha2: { required:  function() {
					   if(grecaptcha.getResponse(Clientid2) == '') {
						   return true;
					   } else {
						   return false;
					   }
			   		},
					remote:"checkCaptcha.php" },
				/*SecurityNo: { required: true, remote:"check-sec-code.php" }*/
			},
			message : {
				FName : "This field is required",
				LName : "This field is required",
				Phone : "This field is required",
				Email : "This field is required",
				email :"Please Enter A Proper Email ",
				},
			submitHandler: function(form) {
				// form.submit() ;
				//alert($estimateclick + 'yessssss');
				if($estimateclick){
					form.submit() ;
				}else{
					//form.submit() ;
					submitFormRequestaQuote() ;
				}
				
			}
	});//var validator
}) ;//jQuery(document).ready
function scrollpage($Id) {
	$Top = jQuery('#'+$Id).offset().top ;
	jQuery('html, body').animate({ scrollTop: $Top -300 }, 1000);
}
function submitFormRequestaQuote() {
		var formData = new FormData($('#FormRequestAQuote')[0]);
		var ajaxobj ;
		if (ajaxobj) ajaxobj.abort() ;
		ajaxobj = jQuery.ajax({
					url: "thanks-request-a-quote.php", //"../thanks-contact.php"
					data: formData, //jQuery('#FormRequestAQuote').serialize(),
					//data: jQuery('#FormRequestAQuote').serialize(),
					contentType: false,
					context: document.body,
					mimeType:"multipart/form-data",
					cache:false,
					processData:false,
					type: 'POST',
					beforeSend: function() {
						jQuery('#HideRequestAQuoteForm').hide();
						jQuery('#LoaderRequestAQuote').show();
					},
					complete: function() {
						//alert('comp') ;
					},
					error:function() {
						//alert('error') ;
					},
					success: function(html){
						console.log(html);
						//return false;
						jQuery('#LoaderRequestAQuote').hide();
						jQuery('#RequestAQuoteThanksMsg').show();
						scrollpage('RequestAQuoteThanksMsg');
						jQuery("#submit-btn").show();
					}	// success: function
				});		//jQuery.ajax
}