function toggleForm(line)
{
	var subform = document.getElementById("submission");
	var lineID = line

	if (subform.style.visibility != "visible")
	{
		subform.style.visibility = "visible";
	}
	else
	{
		subform.style.visibility = "hidden";
	}
	alert(lineID);
}