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
        //if(jQuery('#TotalNumber')!= value)
    },
    "first Name And Last Name Can Not Be Same."
);
jQuery(document).ready(function () {
    jQuery('#ServiceAreaThanksMsg').hide();
    jQuery('#ServiceAreaBtnSubmit').click(function (e) {
        e.preventDefault();
        jQuery("#FormServiceArea").trigger('submit');
    });//jQuery('#submitBtn').click
    //$("input.Phonevalid").mask("999-999-9999");
    var validator = jQuery("#FormServiceArea").validate({
        ignore: [],
        rules: {

            FName: { required: true },
            LName: {
                required: true,
                // checkFName: true
            },
            Phone: { required: true },
            Email: {
                required: true,
                email: true
            },
            captchaResult: {
                required: true,
                checksum: true,
            },
            hiddenRecaptcha2: {
                required: function () {
                    if (grecaptcha.getResponse(Clientid2) == '') {
                        return true;
                    } else {
                        return false;
                    }
                },
                remote: "checkCaptcha.php"
            },
            /*SecurityNo: { required: true, remote:"check-sec-code.php" }*/
        },
        message: {
            FName: "This field is required",
            LName: "This field is required",
            Email: "This field is required",
            email: "Please Enter A Proper Email ",
        },
        submitHandler: function (form) {
            // form.submit() ;
            submitServiceAreaform();
        }
    });//var validator
});//jQuery(document).ready

function scrollpage($Id) {
    $Top = jQuery('#' + $Id).offset().top;
    jQuery('html, body').animate({ scrollTop: $Top - 150 }, 2000);
}

function submitServiceAreaform() {
    var formData = new FormData($('#FormServiceArea')[0]);
    var ajaxobj;

    if (ajaxobj) ajaxobj.abort();
    ajaxobj = jQuery.ajax({

        url: "thanks-request-more-info.php", //"../thanks-contact.php"
        data: formData, //jQuery('#ContactForm').serialize(),
        //data: jQuery('#ContactForm').serialize(),
        contentType: false,
        context: document.body,
        mimeType: "multipart/form-data",
        cache: false,
        processData: false,
        type: 'POST',
        beforeSend: function () {
            jQuery('#HideServiceArea').hide();
            jQuery('#ServiceAreaLoader').show();
        },
        complete: function () {
            //alert('comp') ;
        },
        error: function () {
            //alert('error') ;
        },
        success: function (html) {
            //alert(html);
            //return false;
            jQuery('#ServiceAreaLoader').hide();
            jQuery('#ServiceAreaThanksMsg').show();
            scrollpage('service-area-scroll');
        }	// success: function
    });		//jQuery.ajax
}