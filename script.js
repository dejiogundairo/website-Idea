$(document).ready(function(){
    $( "#login_submit" ).click(function() {
        msg = "Login Error message here";

        if (!$( "#loginEmail" ).val()) {
            $( ".login_email" ).remove();
            $( "<span class='login_email error'>"+msg+"</span>" ).appendTo( "#login_email" );
        }

        msg = "Login Error message here";
        
        if (!$( "#loginPassword" ).val()) {
                $( ".login_password" ).remove();
            $( "<span class='login_password error'>"+msg+"</span>" ).appendTo( "#login_password" );
        }
    });    
});