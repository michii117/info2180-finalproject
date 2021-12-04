
function filterOpen(){
	filterAll();
	// Buttons to remove and add highlight
	var filterallhighlight = document.getElementById("filterAll");
	var openhighlight = document.getElementById("filterOpen");
	var myticketshighlight = document.getElementById("filterTicket");

	var inp = document.getElementsByClassName("In-Progress");
	var inc = document.getElementsByClassName("Closed");

	openhighlight.classList.add("active");
	filterallhighlight.classList.remove("active");
	myticketshighlight.classList.remove("active");
	for(i=0;i<inp.length; i++)
	{
		inp[i].classList.add("hide");
	}
	for(i=0;i<inc.length; i++)
	{
		inc[i].classList.add("hide");

	}

}

function filterAll()
{	
	// Buttons to remove and add highlight
	var filterallhighlight = document.getElementById("filterAll");
	var openhighlight = document.getElementById("filterOpen");
	var myticketshighlight = document.getElementById("filterTicket");
	
	filterallhighlight.classList.add("active");
    openhighlight.classList.remove("active");
    myticketshighlight.classList.remove("active");

	var inp = document.getElementsByClassName("table");
	for(i=0;i<inp.length; i++)
	{
		inp[i].classList.remove("hide");
	}
}

function filterUserticket()
 {
	filterAll();
	
	// Buttons to remove and add highlight
	var filterallhighlight = document.getElementById("filterAll");
	var openhighlight = document.getElementById("filterOpen");
	var myticketshighlight = document.getElementById("filterTicket");

	filterallhighlight.classList.remove("active");
    openhighlight.classList.remove("active");
    myticketshighlight.classList.add("active");

	 var tab = document.getElementsByClassName("table");
	 for(i=0;i<tab.length;i++)
	 {
		 if(!tab[i].classList.contains(mytarget))
		 {
			 tab[i].classList.add('hide');
			 
		 }
	 }
	
 }

