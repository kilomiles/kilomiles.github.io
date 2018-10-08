$(function () {
	$("[data-toggle='tooltip']").tooltip({  })
})

function setClipboard (element, value) { 
	var copy = $(element);
	copy.tooltip("hide");
	var oldValue = copy.html();
	copy.html("copied");
	copy.css({
		"color": "limegreen",
		"font-weight": "500"
	});

	var tempInput = document.createElement("input");
	tempInput.style = "position: absolute; left: -1000px; top: -1000px";
	tempInput.value = value;
	document.body.appendChild(tempInput);
	tempInput.select();
	document.execCommand("copy");
	document.body.removeChild(tempInput);

	setTimeout(function () {	
		copy.html(oldValue);
		copy.css({
			"color": "inherit"
		});
	}, 1200);

}