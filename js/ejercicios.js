
function Monstruo (salud, ataque, raza) {
	this.salud = salud;
	this.ataque = ataque;
	this.raza = raza;
}

function Heroe(saludh, ataque, raza, experiencia, nivel) {
	this.saludh = saludh;
	this.ataqueh = ataque;
	this.razah = raza;
	this.experiencia = experiencia;
	this.nivel = nivel;
}
function Pocion (saludp) {
	this.saludp = saludp;
}

Heroe.prototype.menosSalud = function(saludh) {

	if (this.saludh <=0) {
		console.log('El heroe murió')
	}
	else {
		console.log('la salud del heroe ahora es' + ' ' + (this.saludh -=10));
	}
}

Monstruo.prototype.menosSaludM = function(saludh) {

	if (this.salud <=0) {
		console.log('El heroe mató al monstruo')
	}
	else {
		console.log('la salud del monstruo ahora es' + ' ' + (this.salud -=10));
	}
}
Heroe.prototype.mataMonstruo= function(salud,nivel) {
	if (salud <=0) {
		console.log('Ganaste'+ ' ' + (this.experiencia +=2000) + ' '+ 'de experiencia')
		if (this.experiencia > 1000) {
		console.log('sube de nivel a' + ' ' + nivel)
		console.log('Por ende, el nuevo ataque' + ' ' + (this.ataqueh = nivel*this.ataqueh));
		console.log('y su salud aumenta a' + ' ' + (this.saludh = nivel*this.saludh));

		}
	}
}

Pocion.prototype.masSalud = function(saludh) {
	console.log('el heroe recupera' +' ' + (this.saludp +=100) + ' '+ 'de salud');
	
}

var monstruo1 = new Monstruo(100, 200,'enano');
var heroe1 = new Heroe(100,200,'humano',0,2);
var pocion1 = new Pocion(100);


heroe1.menosSalud();
monstruo1.menosSaludM();
pocion1.masSalud();
heroe1.mataMonstruo(100,2);
