function toggleForm()
{
	var subform = document.getElementById("submission")

	if (subform.style.visibility != "visible")
	{
		subform.style.visibility = "visible";
	}
	else
	{
		subform.style.visibility = "hidden";
	}
}