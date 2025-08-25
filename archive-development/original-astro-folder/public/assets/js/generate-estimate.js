jQuery.validator.addMethod(
	"checksum",
	function (value, element) {
		return this.optional(element) || jQuery('#TotalNumber').val() == value;
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
	jQuery('#GenerateEstimateThanksMsg').hide();
	jQuery('#BtnGenerateEstimate').click(function(e) {
		e.preventDefault();
		jQuery("#GenerateEstimateForm").trigger('submit') ;
	}) ;
	var validator = jQuery("#GenerateEstimateForm").validate({
			ignore: [],
			rules : {
				ParcelAddress :{ required: true },
				LName :{
					required: true,
					// checkFName:true
				},
				PackageCode   :{required: true},
				TotalAcres   :{required: true},
               // LikeBufferZone:{required :true},
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
			},
			message : {
				LName : "This field is required",
				PackageCode : "This field is required",
				ParcelAddress : "This field is required",
				TotalAcres    : "This field is required",
				//LikeBufferZone :"This field is required",
				},
			submitHandler: function(form) {
				// form.submit() ;
				submitFormGenerateEstimate() ;
			}
	});//var validator
}) ;//jQuery(document).ready
function scrollpage($Id) {
	$Top = jQuery('#'+$Id).offset().top ;
	jQuery('html, body').animate({ scrollTop: $Top -300 }, 1000);
}
function submitFormGenerateEstimate() {
    var formData = new FormData($('#GenerateEstimateForm')[0]);
    var ajaxobj ;
    if (ajaxobj) ajaxobj.abort() ;
    ajaxobj = jQuery.ajax({
        url: "thanks-generate-an-estimation.php",
        data: formData, //jQuery('#FormRequestAQuote').serialize(),
        contentType: false,
        context: document.body,
        mimeType:"multipart/form-data",
        cache:false,
        processData:false,
        type: 'POST',
        beforeSend: function() {
            jQuery('#HideGenerateEstimate').hide();
            jQuery('#LoaderGenerateEstimate').show();
        },
        complete: function() {
        },
        error:function() {
        },
        success: function(html){
            // console.log(html);
            jQuery('#LoaderGenerateEstimate').hide();
            jQuery('#GenerateEstimateThanksMsg').show();
            // jQuery('#GenerateEstimateThanksMsg').text('Thank you '+jQuery("#FName").val()+' '+jQuery("#LName").val()+'\n ,Based on the information that you have $'+jQuery("#TotalAmmount").val()+'\n. Our team will be reviewing the information provided, confirming some details and will be following up with you shortly. \n Thank you for trusting the pros at The TreeShop!');
			jQuery("#GenerateEstimateThanksMsg").html(jQuery("#GenerateEstimateThanksMsg").html().replace("[amount]",'<strong>'+parseFloat(jQuery("#TotalAmmount").val()).toLocaleString('en-US')+'</strong>'));
            jQuery("#GenerateEstimateThanksMsg").html(jQuery("#GenerateEstimateThanksMsg").html().replace("[client name]",jQuery("#FName").val()+' '+jQuery("#LName").val()));
            // scrollpage('GenerateEstimateThanksMsg');
            scrollpage('scrollform');
        }
    });
}