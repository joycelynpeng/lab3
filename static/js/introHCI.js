'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("joyce was here :-).");
		$("#testjs").text("Please wait...");
		$("#testjs").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
	// prevent the page from reloading
	e.preventDefault();
	$("#project1").fadeIn();
	$("#project1").fadeOut();
	$("#project1").faadetoggle();
	$("#project2").fadeIn();
	$("#project2").show();
	$("#project2").toggle();
	// In an event handler, $(this) refers to
	// the object that triggered the event
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}
	
}