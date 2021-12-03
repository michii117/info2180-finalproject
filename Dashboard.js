
function filteruserTickets(){
    var myissuebtn = document.getElementById("filterTicket");
	myissuebtn.addEventListener("click", function (e) {
		var hrequest = new XMLHttpRequest();
		var urlcode = "usertickets.php";
		hrequest.onreadystatechange = function () {
			if (hrequest.readyState == XMLHttpRequest.DONE) {
				if (hrequest.status == 200) {
					var issue = hrequest.responseText;
					var result = document.getElementById("result");
					result.innerHTML = issue;
				} else {
					alert("Error Detected");
				}
			}
		};

		hrequest.open("GET", urlcode, true);
		hrequest.send();
	});
}

function filterOpen(){

    var openissuebtn = document.getElementById("filterOpen");
	openissuebtn.addEventListener("click", function (e) {
		var hrequest = new XMLHttpRequest();
		var urlcode = "openissuesonly.php";
		hrequest.onreadystatechange = function () {
			if (hrequest.readyState == XMLHttpRequest.DONE) {
				if (hrequest.status == 200) {
					var issue = hrequest.responseText;
					var result = document.getElementById("result");
					result.innerHTML = issue;
				} else {
					alert("Error Detected");
				}
			}
		};

		hrequest.open("GET", urlcode, true);
		hrequest.send();
	});
}

function filterALL(){

    var all= document.getElementById("filterAll");
	all.addEventListener("click", function (e) {
		var hrequest = new XMLHttpRequest();
		var urlcode = "Allfilter.php";
		hrequest.onreadystatechange = function () {
			if (hrequest.readyState == XMLHttpRequest.DONE) {
				if (hrequest.status == 200) {
					var issue = hrequest.responseText;
					var result = document.getElementById("result");
					result.innerHTML = issue;
				} else {
					alert("Error Detected");
				}
			}
		};

		hrequest.open("GET", urlcode, true);
		hrequest.send();
	});
}
    