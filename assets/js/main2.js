// radiology
let radiology = {
	med1: {
		time: '11:00',
		especialista: 'IGNACIO SCHULZ',
		paciente: 'FRANCISCA ROJAS',
		RUT: '9878782-1',
		prevision: 'FONASA',
	},
	med2: {
		time: '11:30',
		especialista: 'FEDERICO SUBERCASEAUX',
		paciente: 'PAMELA ESTRADA',
		RUT: '15345241-3',
		prevision: 'ISAPRE',
	},
	med3: {
		time: '15:00',
		especialista: 'FERNANDO WURTHZ',
		paciente: 'ARMANDO LUNA',
		RUT: '16445345-9',
		prevision: 'ISAPRE',
	},
	med4: {
		time: '15:30',
		especialista: 'ANA MARIA GODOY',
		paciente: 'MANUEL GODOY',
		RUT: '17666419-0',
		prevision: 'FONASA',
	},
	med5: {
		time: '16:00',
		especialista: 'PATRICIA SUAZO',
		paciente: 'RAMON ULLOA',
		RUT: '14989389-K',
		prevision: 'FONASA',
	},
};
radiology.pop();

// traumatology
let traumatology = {
	med1: {
		time: '8:00',
		especialista: 'MARIA PAZ ALTUZARRA',
		paciente: 'PAULA SANCHEZ',
		RUT: '15554774-5',
		prevision: 'FONASA',
	},
	med2: {
		time: '10:00',
		especialista: 'RAUL ARAYA',
		paciente: 'ANGÉLICA NAVAS',
		RUT: '15444147-9',
		prevision: 'ISAPRE',
	},
	med3: {
		time: '10:30',
		especialista: 'MARIA ARRIAGADA',
		paciente: 'ANA KLAPP',
		RUT: '17879423-9',
		prevision: 'ISAPRE',
	},
	med4: {
		time: '11:00',
		especialista: 'ALEJANDRO BADILLA',
		paciente: 'FELIPE MARDONES',
		RUT: '1547423-6',
		prevision: 'ISAPRE',
	},
	med5: {
		time: '11:30',
		especialista: 'CECILIA BUDNIK',
		paciente: 'DIEGO MARRE',
		RUT: '16554741-K',
		prevision: 'FONASA',
	},
	med6: {
		time: '12:00',
		especialista: 'ARTURO CAVAGNARO',
		paciente: 'CECILIA MENDEZ',
		RUT: '9747535-8',
		prevision: 'ISAPRE',
	},
	med7: {
		time: '12:30',
		especialista: 'ANDRES KANACRI',
		paciente: 'MARCIAL SUAZO',
		RUT: '11254785-5',
		prevision: 'ISAPRE',
	},
};

// dental
let dental = [
	{
		time: '8:30',
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

for (let table1 of values.dental) {
	document.write(table1);
}
