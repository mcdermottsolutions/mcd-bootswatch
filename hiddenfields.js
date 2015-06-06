function hideForm()
{
	var subform = document.getElementById("submission")
	subform.style.visibility = "hidden";
}

function showForm()
{
	var subform = document.getElementById("submission")

	if (subform.style.visibility == "hidden")
	{
		subform.style.visibility = "visible";
	}
	else
	{
		subform.style.visibility = "hidden";
	}


}