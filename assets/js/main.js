// radiology
let radiology = [
	{
		time: '11:00',
		especialista: 'IGNACIO SCHULZ',
		paciente: 'FRANCISCA ROJAS',
		RUT: '9878782-1',
		prevision: 'FONASA',
	},
	{
		time: '11:30',
		especialista: 'FEDERICO SUBERCASEAUX',
		paciente: 'PAMELA ESTRADA',
		RUT: '15345241-3',
		prevision: 'ISAPRE',
	},
	{
		time: '15:00',
		especialista: 'FERNANDO WURTHZ',
		paciente: 'ARMANDO LUNA',
		RUT: '16445345-9',
		prevision: 'ISAPRE',
	},
	{
		time: '15:30',
		especialista: 'ANA MARIA GODOY',
		paciente: 'MANUEL GODOY',
		RUT: '17666419-0',
		prevision: 'FONASA',
	},
	{
		time: '16:00',
		especialista: 'PATRICIA SUAZO',
		paciente: 'RAMON ULLOA',
		RUT: '14989389-K',
		prevision: 'FONASA',
	},
];
radiology.shift(); //Primero
radiology.pop(); // Ultimo

// traumatology
let traumatology = [
	{
		time: '08:00',
		especialista: 'MARIA PAZ ALTUZARRA',
		paciente: 'PAULA SANCHEZ',
		RUT: '15554774-5',
		prevision: 'FONASA',
	},
	{
		time: '10:00',
		especialista: 'RAUL ARAYA',
		paciente: 'ANGÉLICA NAVAS',
		RUT: '15444147-9',
		prevision: 'ISAPRE',
	},
	{
		time: '10:30',
		especialista: 'MARIA ARRIAGADA',
		paciente: 'ANA KLAPP',
		RUT: '17879423-9',
		prevision: 'ISAPRE',
	},
	{
		time: '11:00',
		especialista: 'ALEJANDRO BADILLA',
		paciente: 'FELIPE MARDONES',
		RUT: '1547423-6',
		prevision: 'ISAPRE',
	},
	{
		time: '11:30',
		especialista: 'CECILIA BUDNIK',
		paciente: 'DIEGO MARRE',
		RUT: '16554741-K',
		prevision: 'FONASA',
	},
	{
		time: '12:00',
		especialista: 'ARTURO CAVAGNARO',
		paciente: 'CECILIA MENDEZ',
		RUT: '9747535-8',
		prevision: 'ISAPRE',
	},
	{
		time: '12:30',
		especialista: 'ANDRES KANACRI',
		paciente: 'MARCIAL SUAZO',
		RUT: '11254785-5',
		prevision: 'ISAPRE',
	},
];

// NUEVOS PACIENTES TRAUMATOLOGIA
let traumatologyAdd = [
	{
		time: '09:00',
		especialista: 'RENÉ POBLETE',
		paciente: 'ANA GELLONA',
		RUT: '13123329-7',
		prevision: 'ISAPRE',
	},
	{
		time: '09:30',
		especialista: 'MARIA SOLAR',
		paciente: 'RAMIRO ANDRADE',
		RUT: '12221451-K',
		prevision: 'FONASA',
	},
	{
		time: '10:00',
		especialista: 'RAUL LOYOLA',
		paciente: 'CARMEN ISLA',
		RUT: '10112348-3',
		prevision: 'ISAPRE',
	},
	{
		time: '10:30',
		especialista: 'ANTONIO LARENAS',
		paciente: 'PABLO LOAYZA',
		RUT: '13453234-1',
		prevision: 'ISAPRE',
	},
	{
		time: '12:00',
		especialista: 'MATIAS ARAVENA',
		paciente: 'SUSANA POBLETE',
		RUT: '14345656-6',
		prevision: 'FONASA',
	},
];
let newTraumatology = traumatology.concat(traumatologyAdd);
newTraumatology.sort(function (a, b) {
	if (a.time > b.time) {
		return 1;
	}
	if (a.time < b.time) {
		return -1;
	}
	// a must be equal to b
	return 0;
});

// dental
let dental = [
	{
		time: '08:30',
		especialista: 'ANDREA ZUÑIGA',
		paciente: 'MARCELA RETAMAL',
		RUT: '11123425-6',
		prevision: 'ISAPRE',
	},
	{
		time: '11:00',
		especialista: 'MARIA PIA ZAÑARTU',
		paciente: 'ANGEL MUÑOZ',
		RUT: '9878789-2',
		prevision: 'ISAPRE',
	},
	{
		time: '11:30',
		especialista: 'SCARLETT WITTING',
		paciente: 'MARIO KAST',
		RUT: '7998789-5',
		prevision: 'FONASA',
	},
	{
		time: '13:00',
		especialista: 'FRANCISCO VON TEUBER',
		paciente: 'KARIN FERNANDEZ',
		RUT: '18887662-K',
		prevision: 'FONASA',
	},
	{
		time: '13:30',
		especialista: 'EDUARDO VIÑUELA',
		paciente: 'HUGO SANCHEZ',
		RUT: '17665461-4',
		prevision: 'FONASA',
	},
	{
		time: '14:00',
		especialista: 'RAQUEL VILLASECA',
		paciente: 'ANA SEPULVEDA',
		RUT: '14441281-0',
		prevision: 'ISAPRE',
	},
];
// Centro Médico Ñuñoa

//Total pacientes
document.getElementById('totalPacientes').innerHTML = 'Total de pacientes'; //Titulo
let total = radiology.concat(newTraumatology).concat(dental);

let tableTotal = '<tr><th>Paciente</th></tr>';
total.forEach(function (cliente) {
	tableTotal += `<tr><td>${cliente.paciente}</td></tr>`;
});
document.getElementById('tableTotal').innerHTML = tableTotal;

//RADIOLOGY
// Centro Médico Ñuñoa
document.getElementById('radiology').innerHTML = 'Radiologia';

let tableRadiology = `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr>`;
for (let i = 0; i < radiology.length; i++) {
	tableRadiology += `<tr><td>${radiology[i].time}</td><td>${radiology[i].especialista}</td><td>${radiology[i].paciente}</td><td>${radiology[i].RUT}</td><td>${radiology[i].prevision}</td></tr>`;
	if (i == 0) {
		let container = document.getElementById('schedule1');
		let contentOne = `Primera atención: ${radiology[i].paciente} - ${radiology[i].prevision}`;
		container.prepend(contentOne);
	}
	if (i == radiology.length - 1) {
		let container = document.getElementById('schedule1');
		let contentTwo = ` | Última atención: ${radiology[i].paciente} - ${radiology[i].prevision}.`;
		container.append(contentTwo);
	}
}
document.getElementById('tableRadiology').innerHTML = tableRadiology;
//

//TRAUMATOLOGY
document.getElementById('traumatology').innerHTML = 'Traumatologia';

let tableTraumatology = `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr>`;
for (let i = 0; i < newTraumatology.length; i++) {
	tableTraumatology += `<tr><td>${newTraumatology[i].time}</td><td>${newTraumatology[i].especialista}</td><td>${newTraumatology[i].paciente}</td><td>${newTraumatology[i].RUT}</td><td>${newTraumatology[i].prevision}</td></tr>`;
	if (i == 0) {
		let container = document.getElementById('schedule2');
		let contentOne = `Primera atención: ${newTraumatology[i].paciente} - ${newTraumatology[i].prevision}`;
		container.prepend(contentOne);
	}
	if (i == traumatology.length - 1) {
		let container = document.getElementById('schedule2');
		let contentTwo = ` | Última atención: ${newTraumatology[i].paciente} - ${newTraumatology[i].prevision}.`;
		container.append(contentTwo);
	}
}
document.getElementById('tableTraumatology').innerHTML = tableTraumatology;
//

//DENTAL
document.getElementById('dental').innerHTML = 'Dental';

let tableDental = `<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr>`;
for (let i = 0; i < dental.length; i++) {
	tableDental += `<tr><td>${dental[i].time}</td><td>${dental[i].especialista}</td><td>${dental[i].paciente}</td><td>${dental[i].RUT}</td><td>${dental[i].prevision}</td></tr>`;
	if (i == 0) {
		let container = document.getElementById('schedule3');
		let contentOne = `Primera atención: ${dental[i].paciente} - ${dental[i].prevision}`;
		container.prepend(contentOne);
	}
	if (i == dental.length - 1) {
		let container = document.getElementById('schedule3');
		let contentTwo = ` | Última atención: ${dental[i].paciente} - ${dental[i].prevision}.`;
		container.append(contentTwo);
	}
}
document.getElementById('tableDental').innerHTML = tableDental;

//Filtrar Traumatologia
document.getElementById('titleFonasa').innerHTML = 'FONASA - Traumatologia'; //Titulo
let filtrarTraumatology = newTraumatology.filter(function (cliente) {
	return cliente.prevision == 'FONASA';
});
let filterTableTrauma = `<tr><th>Paciente</th></tr>`;
for (let i of filtrarTraumatology) {
	filterTableTrauma += `<tr><td>${i.paciente}</td></tr>`;
}
document.getElementById('filterTraumatology').innerHTML = filterTableTrauma;

//Filtrar Dental
document.getElementById('titleIsapre').innerHTML = 'ISAPRE - Dental'; //Titulo
let filtrarDental = dental.filter(function (cliente) {
	return cliente.prevision == 'ISAPRE';
});
let filterTableDental = `<tr><th>Paciente</th></tr>`;
for (let i of filtrarDental) {
	filterTableDental += `<tr><td>${i.paciente}</td></tr>`;
}
document.getElementById('filterDental').innerHTML = filterTableDental;

// LISTA CON GUION
let radioP = '<p></p>';
for (let i = 0; i < radiology.length; i++) {
	radioP += `<p>${radiology[i].time} - ${radiology[i].especialista} - ${radiology[i].paciente} - ${radiology[i].RUT} - ${radiology[i].prevision}</p>`;
}
document.getElementById('radiologyP').innerHTML = radioP;

let traumaP = '<p></p>';
for (let i = 0; i < newTraumatology.length; i++) {
	traumaP += `<p>${newTraumatology[i].time} - ${newTraumatology[i].especialista} - ${newTraumatology[i].paciente} - ${newTraumatology[i].RUT} - ${newTraumatology[i].prevision}</p>`;
}
document.getElementById('traumatologyP').innerHTML = traumaP;

let dentalP = '<p></p>';
for (let i = 0; i < dental.length; i++) {
	dentalP += `<p>${dental[i].time} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].RUT} - ${dental[i].prevision}</p>`;
}
document.getElementById('dentalP').innerHTML = dentalP;
