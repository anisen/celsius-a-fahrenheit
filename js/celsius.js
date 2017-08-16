
function convertirCelsius(){
	var cel=document.getElementById('celsius').value;
	console.log(cel);
	var convertir=((9/5)*cel)+32;
	var acomulador= document.getElementById('farenheit');
	acomulador.innerHTML=(convertir);
};
