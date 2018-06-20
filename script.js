$(document).ready(function(){
    $( "#login_submit" ).click(function() {
        msg = "Please Enter Email";

        if (!$( "#loginEmail" ).val()) {
            $( ".login_email" ).remove();
            $( "<span class='login_email error'>"+msg+"</span>" ).appendTo( "#login_email" );
        }

        msg = "Please Enter Password";
        
        if (!$( "#loginPassword" ).val()) {
                $( ".login_password" ).remove();
            $( "<span class='login_password error'>"+msg+"</span>" ).appendTo( "#login_password" );
        }
    });    
});