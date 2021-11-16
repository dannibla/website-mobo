$(document).ready(function(){
		$('.carousel').carousel({
		  interval: 2000
		});
	
			$( "#signupForm" ).validate({
				rules: {
					firstname: "required",
					lastname: "required",
					mobile: "required",
					subject: "required",
					message: "required",
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					firstname: "Please enter your firstname",
					lastname: "Please enter your lastname",
					mobile: "Please enter your mobile no",
					subject: "Please enter your subject",
					message: "Please enter your message",
					email: "Please enter a valid email address"
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					// Add the `help-block` class to the error element
					error.addClass( "invalid-feedback" );

					if ( element.prop( "type" ) === "checkbox" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element );
					}
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
				},
				unhighlight: function (element, errorClass, validClass) {
					$( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
				}
			} );
			
});

		$.validator.setDefaults( {
			submitHandler: function () {
				alert( "submitted!" );
			}
		} );


			