function darPermiso()
{
	if(localStorage.getItem("Mayor") != "true")
	{
		confirmacion = confirm("Esta Aplicación Promueve la realización y consumo de bebidas alcoholicas\nPor seguridad y salud, la aplicación no debe ser usada por menores de 18 años.\n¿Eres mayor de edad?");
		localStorage.setItem("Mayor", confirmacion);
		if(confirmacion)
		{
			location.href = "menu.html";
		}
	}
	else
	{
		location.href = "menu.html";
	}
}

function seleccionarBebida(bebidaPrincipal)
{
	sessionStorage.setItem("Principal", bebidaPrincipal);
	location.href = "bebidas.html";
}

function seleccionarCoctel(coctel)
{
	sessionStorage.setItem("Coctel", coctel);
	location.href = "receta.html";
}

function mostrarCocteles()
{
	switch(sessionStorage.getItem("Principal"))
	{
		case "tequila":
			niuwHTML =
			"<img src='img/tequila.png' class='imagenPrincipal'>"+
			"<a href='menu.html' class='volver'><img src='img/return.png'></a>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"margarita\")'>Margarita</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"paloma\")'>Paloma</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"sunrise\")'>Sunrise</p>";
			break;

		case "vodka":
			niuwHTML =
			"<img src='img/vodka.png' class='imagenPrincipal'>"+
			"<a href='menu.html' class='volver'><img src='img/return.png'></a>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"bloodyMary\")'>Bloody Mary</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"cosmopolitan\")'>Cosmopolitan</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"expressoMartini\")'>Expresso Martini</p>";
			break;

		case "whisky":
			niuwHTML =
			"<img src='img/whisky.png' class='imagenPrincipal'>"+
			"<a href='menu.html' class='volver'><img src='img/return.png'></a>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"whiskeySour\")'>Whiskey Sour</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"rustyNail\")'>Rusty Nail</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"cafeIrlandes\")'>Café Irlandés</p>";
			break;

		case "ron":
			niuwHTML =
			"<img src='img/ron.png' class='imagenPrincipal'>"+
			"<a href='menu.html' class='volver'><img src='img/return.png'></a>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"daiquiri\")'>Daiquirí</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"maiTai\")'>Mai Tai</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"pinaColada\")'>Piña Colada</p>";
			break;

		case "cognac":
			niuwHTML =
			"<img src='img/cognac.png' class='imagenPrincipal'>"+
			"<a href='menu.html' class='volver'><img src='img/return.png'></a>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"\")'>Coctel 1</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"\")'>Coctel 2</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"\")'>Coctel 3</p>";
			break;

		case "cerveza":
			niuwHTML =
			"<img src='img/cerveza.png' class='imagenPrincipal'>"+
			"<a href='menu.html' class='volver'><img src='img/return.png'></a>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"blackVelvet\")'>Black Velvet</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"michelada\")'>Michelada</p>";
			break;

		case "ginebra":
			niuwHTML =
			"<img src='img/ginebra.png' class='imagenPrincipal'>"+
			"<a href='menu.html' class='volver'><img src='img/return.png'></a>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"aviation\")'>Aviation</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"bramble\")'>Bramble</p>"+
			"<img src='' class='imagenCoctel'>"+
			"<p onclick='seleccionarCoctel(\"gimlet\")'>Gimlet</p>";
			break;

		default:
			alert("ERROR: Bebida No Encontrada");
			location.href = "index.html";
			break;
	}
	document.getElementById('cocteles').innerHTML = niuwHTML;
}

function mostrarReceta()
{
	switch(sessionStorage.getItem("Principal"))
	{
		case "tequila":
			switch(sessionStorage.getItem("Coctel"))
			{
				case "margarita":
					receta = "<h1>MARGARITA</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>45ml de Tequila</li>"+
					"<li>15ml de cointreau</li>"+
					"<li>22ml de jugo de lima</li>"+
					"<li>10ml de jarabe de agave</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Añadir todos los ingredientes en un vaso Boston</li>"+
					"<li>Añadir 4 hielos</li>"+
					"<li>Agitar</li>"+
					"<li>Colar los hielos y Servir en una copa Margarita</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "paloma":
					receta = "<h1>PALOMA</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>44ml de Tequila</li>"+
					"<li>85ml de jugo de Toronja</li>"+
					"<li>1 pizca de azúcar</li>"+
					"<li>1 limón</li>"+
					"<li>1 chorrito de agua mineral</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar un vaso higball</li>"+
					"<li>Añadir el jugo de limón y los demás ingredientes</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "sunrise":
					receta = "<h1>SUNRISE</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>44ml de Tequila</li>"+
					"<li>85ml de jugo de naranja</li>"+
					"<li>15ml de granadina</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Añadir los ingredientes en un vaso Boston</li>"+
					"<li>Revolver</li>"+
					"<li>Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				default:
					alert("ERROR: El coctel no pertenece a esta categoría");
					location.href = "bebidas.html";
					break;
			}
			break;

		case "vodka":
			switch(sessionStorage.getItem("Coctel"))
			{
				case "bloodyMary":
					receta = "<h1>BLOODY MARY</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>50ml de Vodka</li>"+
					"<li>2 chorritos de salsa Worcestershire</li>"+
					"<li>110ml de jugo de jitomate</li>"+
					"<li>2 chorritos de salsa tabasco</li>"+
					"<li>1 pizca de sal</li>"+
					"<li>100ml de jugo de limón</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Poner todos los ingredientes en el vaso Boston</li>"+
					"<li>Añadir 4 hielos</li>"+
					"<li>Girar el contenido sin agitar</li>"+
					"<li>Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "cosmopolitan":
					receta = "<h1>COSMOPOLITAN</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>45ml de Vodka</li>"+
					"<li>15ml de cointreau</li>"+
					"<li>22ml de jugo de lima</li>"+
					"<li>8 arandanos azules</li>"+
					"<li>2 cucharadas de jarabe de azúcar</li>"+
					"<li>3ml de jugo de arandanos</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar una copa coctel</li>"+
					"<li>Añadir el jugo de lima, el jarabe de azúcar y los arandanos</li>"+
					"<li>Machacar la mezcla para sacarle el jugo a los arandanos</li>"+
					"<li>Añadir el vodka y el cointreau</li>"+
					"<li>Agitar y Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "expressoMartini":
					receta = "<h1>EXPRESSO MARTINI</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>40ml de Vodka</li>"+
					"<li>20ml de café expresso</li>"+
					"<li>10ml de jarabe de azúcar</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar la copa coctel</li>"+
					"<li>Añadir todos los ingredientes en el vaso Boston</li>"+
					"<li>Añadir 4 hielos</li>"+
					"<li>Agitar</li>"+
					"<li>Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				default:
					alert("ERROR: El coctel no pertenece a esta categoría");
					location.href = "bebidas.html";
					break;
			}
			break;

		case "whisky":
			switch(sessionStorage.getItem("Coctel"))
			{
				case "whiskeySour":
					receta = "<h1>WHISKEY SOUR</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>50ml de Whisky</li>"+
					"<li>22ml de jugo de limón</li>"+
					"<li>2 cucharadas de jarabe de azúcar</li>"+
					"<li>2 chorritos de Angostura bitter</li>"+
					"<li>Media clara de huevo</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar un vaso old fashioned</li>"+
					"<li>Servir todos los ingredientes en un vaso Boston</li>"+
					"<li>Añadir 4 hielos</li>"+
					"<li>Agitar</li>"+
					"<li>Servir colando los hielos</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "rustyNail":
					receta = "<h1>RUSTY NAIL</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>45ml de Whisky</li>"+
					"<li>45ml de Drambuie</li>"+
					"<li>Hielo</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Añadir hielo a un vaso old fashioned</li>"+
					"<li>Vertir el Whisky y seguidamente el Drambuie</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "cafeIrlandes":
					receta = "<h1>CAFÉ IRLANDÉS</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>40ml de Whisky</li>"+
					"<li>80ml de café</li>"+
					"<li>30ml de crema</li>"+
					"<li>Azúcar morena</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Se añadé el azúcar</li>"+
					"<li>Se añade el whisky y seguidamente el café</li>"+
					"<li>Por encima se añade la crema</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				default:
					alert("ERROR: El coctel no pertenece a esta categoría");
					location.href = "bebidas.html";
					break;
			}
			break;

		case "ron":
			switch(sessionStorage.getItem("Coctel"))
			{
				case "daiquiri":
					receta = "<h1>DAIQUIRÍ</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>45ml de Ron Blanco</li>"+
					"<li>22ml de jugo de lima</li>"+
					"<li>2 cucharadas de azúcar</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Añadir los ingredientes en un vaso Boston</li>"+
					"<li>Añadir 4 hielos</li>"+
					"<li>Agitar</li>"+
					"<li>Colar y Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "maiTai":
					receta = "<h1>MAI TAI</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>50ml de Ron Blanco</li>"+
					"<li>10ml de Ron Oscuro</li>"+
					"<li>15ml de Triple Seco</li>"+
					"<li>22ml de jugo de lima</li>"+
					"<li>15ml de jarabe de almendra</li>"+
					"<li>7.5ml de jarabe de azúcar</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Añadir todos los ingredientes en un vaso Boston</li>"+
					"<li>Agitar</li>"+
					"<li>Servir en un vaso tiki</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "pinaColada":
					receta = "<h1>PIÑA COLADA</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>133ml de mezcla de Ron Blanco y Ron Oscuro</li>"+
					"<li>90ml de jugo de piña</li>"+
					"<li>30ml de crema de coco</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar la copa</li>"+
					"<li>Añadir los ingredientes en un vaso Boston</li>"+
					"<li>Agitar</li>"+
					"<li>Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				default:
					alert("ERROR: El coctel no pertenece a esta categoría");
					location.href = "bebidas.html";
					break;
			}
			break;

		case "cognac":
			switch(sessionStorage.getItem("Coctel"))
			{
				case "1":
					receta = "<h1>1</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "2":
					receta = "<h1>2</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "3":
					receta = "<h1>3</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				default:
					alert("ERROR: El coctel no pertenece a esta categoría");
					location.href = "bebidas.html";
					break;
			}
			break;

		case "cerveza":
			switch(sessionStorage.getItem("Coctel"))
			{
				case "blackVelvet":
					receta = "<h1>BLACK VELVET</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>Champagne</li>"+
					"<li>Cerveza</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>En una copa de cerveza, llenarla de cerveza hasta la mitad</li>"+
					"<li>Rellenar el resto con champagne</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "michelada":
					receta = "<h1>MICHELADA</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>Cerveza</li>"+
					"<li>Limón</li>"+
					"<li>Sal</li>"+
					"<li>Pimienta</li>"+
					"<li>Salsa Inglesa</li>"+
					"<li>Salsa Maggi</li>"+
					"<li>Salsa Tabasco</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Preparar el petroleo con la sal, pimienta y las salsas</li>"+
					"<li>Servir la cerveza y mezclar con el petroleo</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				default:
					alert("ERROR: El coctel no pertenece a esta categoría");
					location.href = "bebidas.html";
					break;
			}
			break;

		case "ginebra":
			switch(sessionStorage.getItem("Coctel"))
			{
				case "aviation":
					receta = "<h1>AVIATION</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>50ml de Ginebra</li>"+
					"<li>22ml de jugo de limón</li>"+
					"<li>15ml de licor marrasquino</li>"+
					"<li>15ml de crema de violetas</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar la copa con hielo</li>"+
					"<li>Añadir todos los ingredientes en el vaso Boston</li>"+
					"<li>Agitar</li>"+
					"<li>Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "bramble":
					receta = "<h1>BRAMBLE</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>45ml de Ginebra</li>"+
					"<li>22ml de jugo de limón</li>"+
					"<li>15ml de jarabe de azúcar</li>"+
					"<li>10ml de licor de mora</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar un vaso higball</li>"+
					"<li>Añadir los ingredientes menos el licor de mora</li>"+
					"<li>Añadir 4 hielos</li>"+
					"<li>Agitar</li>"+
					"<li>Servir colando los hielos</li>"+
					"<li>Añadir el licor de mora</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				case "gimlet":
					receta = "<h1>GIMLET</h1>"+
					"<a href='bebidas.html' class='volver'><img src='img/return.png'></a>"+
					"<div class='ingredientes'>"+
					"INGREDIENTES<br>"+
					"<ul>"+
					"<li>45ml de Ginebra</li>"+
					"<li>15ml de cordial de lima</li>"+
					"<li>2 rodajas de limón</li>"+
					"</ul>"+
					"</div>"+
					"<div class='preparacion'>"+
					"PREPARACION<br>"+
					"<ol>"+
					"<li>Enfriar copa coctel</li>"+
					"<li>Añadir todos los ingredientes en un vaso Boston</li>"+
					"<li>Añadir 4 hielos</li>"+
					"<li>Agitar</li>"+
					"<li>Colar y Servir</li>"+
					"</ol>"+
					"</div>"+
					"<button id='btnPlay'>JUGAR</button>";
					break;

				default:
					alert("ERROR: El coctel no pertenece a esta categoría");
					location.href = "bebidas.html";
					break;
			}
			break;

		default:
			alert("ERROR: Bebida No Encontrada");
			location.href = "index.html";
			break;
	}
	document.getElementById('receta').innerHTML = receta;
}