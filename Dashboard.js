
function filterOpen(){
	filterAll();
	var inp = document.getElementsByClassName("In-Progress");
	var inc = document.getElementsByClassName("Closed");
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
	var inp = document.getElementsByClassName("table");
	for(i=0;i<inp.length; i++)
	{
		
		inp[i].classList.remove("hide");
	}
}

function filterUserticket()
 {
	filterAll();
	 var tab = document.getElementsByClassName("table");
	 for(i=0;i<tab.length;i++)
	 {
		 if(!tab[i].classList.contains(mytarget))
		 {
			 tab[i].classList.add('hide');
		 }
	 }
	
 }