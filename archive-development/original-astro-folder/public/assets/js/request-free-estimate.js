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
	jQuery('#RequestFreeEstimateThanksMsg').hide();
	jQuery('#RequestQuotesThanksMsg').hide();
	jQuery('#RequestFreeEstimateForm').click(function(e) {
		e.preventDefault();
		jQuery("#FormRequestFreeEstimate").trigger('submit') ;
	}) ;//jQuery('#ContactBtnForm').click
	var validator = jQuery("#FormRequestFreeEstimate").validate({
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
				hiddenRecaptcha1: { required:  function() {
					   if(grecaptcha.getResponse(Clientid1) == '') {
						   return true;
					   } else {
						   return false;
					   }
			   		},
					remote:"checkCaptcha.php" },
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
				submitFormRequestFreeEstimate() ;
			}
	});//var validator
}) ;//jQuery(document).ready
function scrollpage($Id) {
	$Top = jQuery('#'+$Id).offset().top ;
	jQuery('html, body').animate({ scrollTop: $Top -300 }, 1000);
}
function submitFormRequestFreeEstimate() {
    var formData = new FormData($('#FormRequestFreeEstimate')[0]);
    var ajaxobj ;
    if (ajaxobj) ajaxobj.abort() ;
    ajaxobj = jQuery.ajax({
		url: $FormTitle == 'Request a Proposal' ? "thanks-request-a-free-estimation.php" : ($FormTitle == 'Request A Quote' ? 'thanks-service-request-a-quote.php' : ''),
        data: formData, //jQuery('#FormRequestAQuote').serialize(),
        //data: jQuery('#FormRequestAQuote').serialize(),
        contentType: false,
        context: document.body,
        mimeType:"multipart/form-data",
        cache:false,
        processData:false,
        type: 'POST',
        beforeSend: function() {
            jQuery('#HideRequestFreeEstimate').hide();
            jQuery('#LoaderRequestFreeEstimate').show();
        },
        complete: function() {
        },
		error: function (xhr, ajaxOptions, thrownError) {
			console.log('ERROR: ' + xhr.status + ' ,' + ' ,' + xhr.statusText + ' ,' + xhr.responseText + ' ,' + ajaxOptions);
		},
        success: function(html){
            // console.log(html);
            jQuery('#LoaderRequestFreeEstimate').hide();
			if($FormTitle=='Request a Proposal'){
				jQuery('#RequestFreeEstimateThanksMsg').show();
				scrollpage('RequestFreeEstimateThanksMsg');
			}
			else{
				jQuery('#RequestQuotesThanksMsg').show();
				scrollpage('RequestQuotesThanksMsg');
			}
        }
    });
}