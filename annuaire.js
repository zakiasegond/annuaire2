



var repertoire = JSON.parse( localStorage.getItem("objet") );

for (id in repertoire)
{
	var personne = repertoire[id];
}

for (var i = 0; i < repertoire.length ; i++) {
	$('#body').append("<tr><td>" + repertoire[i].nom + "</td><td>" + repertoire[i].prenom + "</td><td>" + repertoire[i].tel + "</td><td>" + repertoire[i].ville + "</td><td>" + repertoire[i].age + "</td><td><button id='modif' type='button' class='btn btn-success' data-toggle='modal' data-target='#modifff'>M</button></td><td><button id='supp' type='button' class='btn btn-danger' data-toggle='modal' data-target='#supppp'>S</button></td></tr>");
	
}




$("#Ajouter").click(function()
{
	

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

	$('#body').append("<tr><td>" + new_nom + "</td><td>" + new_prenom + "</td><td>" + new_tel + "</td><td>" + new_ville + "</td><td>" + new_age + "</td><td><button id='modif' type='button' class='btn btn-success' data-toggle='modal' data-target='#modifff'>M</button></td><td><button id='supp' type='button' class='btn btn-danger' data-toggle='modal' data-target='#supppp'>S</button></td></tr>");
	

	repertoire.push(array);
	
	$("#ajouttt").modal("hide");
	new_nom = $("#a1").val('');
	new_prenom = $("#a2").val('');
	new_tel = $("#a3").val('');
	new_ville = $("#a4").val('');
	new_age = $("#a5").val('');
	
	

	
	var repertoire_json = JSON.stringify(repertoire); //transforme le tableau en chaine de caractere (du langage JS au JSON)
	localStorage.setItem("objet" ,repertoire_json); //envois la chaine créer dans le local storage
	
	


});
 
$("#ok").click(function(){


	var rechercher = $('#rechercher').val();

	$('tbody tr').hide();
	$('table tr:contains('+rechercher+')').show();
});



$('#supp').click(function()
{

	var ligne = $(this).closest("tr");
	var idTmp = ligne.find(".id").text();
	var nomTmp= ligne.find(".nom").text();
	var prenomTmp= ligne.find(".prenom").text();

	
		var repertoire = JSON.parse(window.localStorage.getItem("objet"));
		repertoire.splice(idTmp, 1);
		var val = JSON.stringify(repertoire);
		window.localStorage.setItem("objet", val);
		location.href="annuaire.html";
	
});























