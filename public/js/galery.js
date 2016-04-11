$(document).ready(function(){
	var index = 0
	$(".imageElement").each(function(){
		$(this).attr("imageIndex", index);
		index++;
	});
	var idToDisplay = 0;
	$("img[imageindex='"+idToDisplay+"']").css("display", "block")

	$( "body" ).click(function() {
		idToDisplay = changePic(idToDisplay)
	});
    $('html').keydown(function(e){
   		if(e.which == 39 || e.which == 32 ){
			idToDisplay = changePic(idToDisplay)
   		}
    });
    $("body").on("swipeleft",function(){
		idToDisplay = changePic(idToDisplay)
	});
}); 

function changePic(idToDisplay) {
	idToDisplay++
	if(idToDisplay == $("img").length){
		idToDisplay = 0
	}
	$("img").css("display", "none")
	$("img[imageindex='"+idToDisplay+"']").css("display", "block")
	return idToDisplay
}