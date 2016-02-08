//Check off to-dos by clicking them
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//Clicking trash to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//Grab to do text from input
		var todoText = ($(this).val());
		//Clear the text input
		$(this).val("");

		//Add text to bottom of list
		$("ul").append("<li><span>x</span> " + todoText + "</li>")
	}
});