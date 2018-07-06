



var repertoire = JSON.parse( localStorage.getItem('objet') );

for (var i = 0; i < repertoire.length ; i++) {
	$('#body').append("<tr><td>" + repertoire[i].nom + "</td><td>" + repertoire[i].prenom + "</td><td>" + repertoire[i].tel + "</td><td>" + repertoire[i].ville + "</td><td>" + repertoire[i].age + "</td></tr>");
	
}


function display() {


	// body...
	var new_array_json = localStorage.getItem("object"); //recupére la chaine de caractere dans le local
	var get_array = JSON.parse(new_array_json); //retransforme la chaine de caractere en tableau (du langage JSON au JS)
	
	for (var i = 0; i < get_array.length ; i++)

	{

		$('#body').append("<tr><td>" + get_array[i].nom + "</td><td>" + get_array[i].prenom + "</td><td>" + get_array[i].tel + "</td><td>" + get_array[i].ville + "</td><td>" + get_array[i].age + "</td></tr>");
	
	}
}


var new_array = [];
var cmpt = 0;

$("#Ajouter").click(function()
{
	cmpt++;

	var new_nom = $("#a1").val();
	var new_prenom = $("#a2").val();
	var new_tel = $("#a3").val();
	var new_ville = $("#a4").val();
	var new_age = $("#a5").val();


	var array =
	{
	  nom: new_nom,
	  prenom: new_prenom, 
	  tel: new_tel,
	  ville: new_ville,
	  age: new_age, 
	}

	new_array.push(array);
	
	$("#ajouttt").modal("hide");
	new_nom = $("#a1").val('');
	new_prenom = $("#a2").val('');
	new_tel = $("#a3").val('');
	new_ville = $("#a4").val('');
	new_age = $("#a5").val('');
	
	var add = cmpt.toString();

	console.log(cmpt)
	var new_array_json = JSON.stringify(new_array); //transforme le tableau en chaine de caractere (du langage JS au JSON)
	localStorage.setItem("object" ,new_array_json); //envois la chaine créer dans le local storage
	
	

display()

});

display()



//affichage tableau en dur dans le navigateur




















