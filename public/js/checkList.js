$(document).ready(function(){
	$( "form" ).submit(function( event ) {
		if ( $( "input:first" ).val() === "correct" ) {
			$( "span" ).text( "Validated..." ).show();
			return;
		}
		if(($( "input:checked").size() == $("input").size())){
			return;
		}
		$(".errorDiv").show();		
		event.preventDefault();
	});
});