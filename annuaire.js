console.log("hello");

var repertoire = [
{
  nom: 'BADJI',
  prenom: 'Adeline',
  tel:'0012432567',
  ville:'Paris',
  age:'32',
},
{
  
  nom: 'KUROWSKI',
  prenom: 'Alexandra',
  tel:'7643245785',
  ville:'Marseille',
  age:'40',
},
{
  nom:'MORAIS',
  prenom:'Helder', 
  tel:'6543678990',
  ville:'Bordeaux',
  age:'45', 
}	
] ;




for (var i = 0; i < repertoire.length ; i++) {
	$('#tableau').append("<tr><td>" + repertoire[i].nom + "</td><td>" + repertoire[i].prenom + "</td><td>" + repertoire[i].tel + "</td><td>" + repertoire[i].ville + "</td><td>" + repertoire[i].age + "</td></tr>");
	
}



















