
	function leerGET(){ 
			
			var cadGET = location.search.substr(1,location.search.length); 
			
			var arrGET = cadGET.split("&"); 
			var asocGET = new Array(); 
			var variable = ""; 
			var valor = ""; 
			
			for(i=0;i<arrGET.length;i++){ 
				var aux = arrGET[i].split("="); 
				variable = aux[0]; 
				valor = aux[1]; 
				asocGET[variable] = valor; 
			} 
			return asocGET; 
		} 

		function escribir(){
			var paresVarValor = leerGET(); 
			document.getElementById("div_nombre1").innerHTML=paresVarValor["nombre1"];
			document.getElementById("div_apellido1").innerHTML=paresVarValor["apellido1"];
			document.getElementById("div_nombre2").innerHTML=paresVarValor["nombre2"];
			document.getElementById("div_apellido2").innerHTML=paresVarValor["apellido2"];
			document.getElementById("div_nombre3").innerHTML=paresVarValor["nombre3"];
			document.getElementById("div_apellido3").innerHTML=paresVarValor["apellido3"];
			document.getElementById("div_nombre4").innerHTML=paresVarValor["nombre4"];
			document.getElementById("div_apellido4").innerHTML=paresVarValor["apellido4"];
			document.getElementById("div_nombre5").innerHTML=paresVarValor["nombre5"];
			document.getElementById("div_apellido5").innerHTML=paresVarValor["apellido5"];
		}
	
	function validar(){
	if (document.getElementById('nombre1').value==""){
	alert("El nombre no puede ser vacio");
	return; 
	} 
	else if (document.getElementById('nombre2').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('nombre3').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('nombre4').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('nombre5').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('apellido1').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('apellido2').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('apellido3').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('apellido4').value==""){
	alert("El nombre no puede ser vacio");
	return;
	}
	else if (document.getElementById('apellido5').value==""){
	alert("El nombre no puede ser vacio");
	return;
	} 
	else{
		alert("Formulario completo");
	}
	}