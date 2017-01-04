$().ready(function(){
   
    
    // Refund form validation
    $("#refundForm").validate({
        rules:{
            vouchernumber: "required",
            reason: "required",
            headline: "required",
            message: {
                required: true,
                maxlength: 2000
            }
        },
        messages: {
            vouchernumber: "Please enter voucher number / transaction id",
            reason: "Please select a reason",
            headline: "Please enter a headline",
            message: {
                required: "Please enter a reason",
                maxlength: "You shouldn't exeed 2000 character legnth"
            }
        }
        
    });
    
    
    
    // Signup form validation
    
    
    
});