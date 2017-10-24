var ingredientesSinAnadir = 6;

var shakeEvent = new Shake({threshold: 15});
shakeEvent.start();
window.addEventListener('shake', function()
{
	alert("Shaked");
}, false);
function stopShake()
{
	shakeEvent.stop();
}

function contarIngredientes()
{
	coctel = localStorage.getItem("Coctel");
}

function anadir(ingrediente)
{
	if(ingrediente.style.display != "none")
	{
		ingrediente.style.display = "none";
		ingredientesSinAnadir = ingredientesSinAnadir - 1;
		if(ingredientesSinAnadir == 0)
		{
			ingredientesSinAnadir = 0;
			mesa = document.getElementById('mesa');
			recipiente = document.getElementById('recipiente');
			mesa.style.height = "90%";
			mesa.style.background = "yellow";
			recipiente.style.height = "70%";
			recipiente.style.marginTop = "25%";
		}
		console.log(ingredientesSinAnadir);
	}
}