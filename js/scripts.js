$(function () {
	$("[data-toggle='tooltip']").tooltip({  })
})

function setClipboard (clickedElement, fieldValue, contentType) { 
	var clicked = $(clickedElement);
	clicked.tooltip("hide");
	var oldValue = clicked.html();
	clicked.html("&#10003; copied " + contentType + " to clipboard");
	clicked.css({
		"color": "limegreen"
	});

	var tempInput = document.createElement("input");
	tempInput.style = "position: absolute; left: -1000px; top: -1000px";
	tempInput.value = fieldValue;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);

	setTimeout(function () {	
		clicked.html(oldValue);
		clicked.css({
			"color": "inherit",
			"font-weight": 300
		});
	}, 1500);
}