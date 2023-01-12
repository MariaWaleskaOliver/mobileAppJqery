/*Validation  the add form*/
function doValidationOnRating() {
    var form = $("#frmAdd");
    form.validate({
        rules: {
            txtRestaurantName:{
                required:true,
                rangelength:[2,20]
            },
            txtBusinessId:{
                required:true,
                rangelength:[2,5]
            },
            emailId:{
                required:true,
                emailCheck:true
            },
            txtFoodQuality: {
                required:true,
                FoodQuality: true
            },
            txtServices: {
                required:true,
                Services: true
            },
            txtValue: {
                required:true,
                Value: true
            }
        },
        messages: {
            txtRestaurantName:
                {
                    required: "Please enter the name",
                    rangelength:"Length must be 2 to 20 characters long"
                },
            txtBusinessId:{
                required: "Please enter the Business Id",
                rangelength: "Length must be 2 to 5 characters long"

            },
            emailId:{
                required: "Please enter Email",
                emailCheck:"Please input a valid email"
            },
            txtFoodQuality: {
                required:"Please enter a number",
                FoodQuality:"Choose a number between 0-5 "
            },
            txtServices: {
                required:"Please enter a number",
                Services:"Choose a number between 0-5 "
            },
            txtValue: {
                required:"Please enter a number",
                Value:"Choose a number between 0-5 "
            }
        }
    });
    return form.valid();
}
jQuery.validator.addMethod("FoodQuality",
    function(value, element){
        var quatityValue= $("#txtFoodQuality").val();

        if(quatityValue <=5 && quatityValue >=0 )
        {
            return true
        }
        return false;
    });
jQuery.validator.addMethod("Services",
    function(value, element){
        var servicesValue= $("#txtServices").val();

        if(servicesValue <=5 && servicesValue >=0 )
        {
            return true
        }
        return false;
    });

jQuery.validator.addMethod("Value",
    function(value, element){
        var valueVar= $("#txtValue").val();

        if(valueVar <=5 && valueVar >=0 )
        {
            return true
        }
        return false;
    });


/*Validation to the review form*/
function doValidationOnRating2() {
    var form2 = $("#MOModifyReviewPageForm");
    form2.validate({
        rules: {
            txtMOModifyReviewPageName:{
                required:true,
                rangelength:[2,20]
            },
            MOModifyReviewPageId:{
                required:true,
                rangelength:[2,5]
            },
            MOModifyReviewPageEmailId:{
                required:true,
                emailCheck:true
            },

            txtFoodQuality2: {
                required:true,
                FoodQuality2: true
            },
            txtServices2: {
                required:true,
                Services2: true
            },
            txtValue2: {
                required:true,
                Value2: true
            }
        },
        messages: {
            txtMOModifyReviewPageName:
                {
                    required: "Please enter the name",
                    rangelength:"Length must be 2 to 20 characters long"
                },
            MOModifyReviewPageId:{
                required: "Please enter the Business Id",
                rangelength:"Length must be 2 to 5 characters long"

            },
            MOModifyReviewPageEmailId:{
                required: "Please enter Email",
                emailCheck:"Please input a valid email"

            },
            txtFoodQuality2: {
                required:"Please enter a number",
                FoodQuality2:"Choose a number between 0-5 "
            },
            txtServices2: {
                required:"Please enter a number",
                Services2:"Choose a number between 0-5 "
            },
            txtValue2: {
                required:"Please enter a number",
                Value2:"Choose a number between 0-5 "
            }
        }
    });
    return form2.valid();

}
jQuery.validator.addMethod("FoodQuality2",
    function(value, element){
        var quatityValue= $("#txtFoodQuality2").val();

        if(quatityValue <=5 && quatityValue >=0 )
        {
            return true
        }
        return false;
    });
jQuery.validator.addMethod("Services2",
    function(value, element){
        var servicesValue= $("#txtServices2").val();

        if(servicesValue <=5 && servicesValue >=0 )
        {
            return true
        }
        return false;
    });

jQuery.validator.addMethod("Value2",
    function(value, element){
        var valueVar= $("#txtValue2").val();

        if(valueVar <=5 && valueVar >=0 )
        {
            return true
        }
        return false;
    });

jQuery.validator.addMethod("emailCheck",
    function(value, element){
        var regexp = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regexp.test(value);
    });