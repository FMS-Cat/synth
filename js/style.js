document.getElementById("article").innerHTML=marked(document.getElementById("article").innerHTML);

function resize()
{
	document.getElementById("article").style.width=""+(window.innerWidth)*.8+"px";
	document.getElementById("article").style.padding="16px "+(window.innerWidth)*.1+"px";
	document.getElementById("article").style.height=""+(window.innerHeight-272-32)+"px";
	if(window.innerWidth-640-32-24<16)
	{
		document.getElementById("console").style.visibility="hidden";
	}
	else
	{
		document.getElementById("console").style.visibility="visible";
		document.getElementById("console").style.width=""+(window.innerWidth-640-32-24)+"px";
	}
}
resize();
window.onresize=resize;

var conRow=0;
function con(str,clr)
{
	var temp=document.getElementById("console").innerHTML;
	document.getElementById("console").innerHTML=temp+"<span style=\"color:"+clr+";\">"+str+"</span><br>";
	var temp=document.getElementById("console").innerHTML;
	conRow++;
	if(13<conRow)
	{
		conRow--;
		document.getElementById("console").innerHTML=temp.slice(temp.indexOf("<br>")+4);
	}
}