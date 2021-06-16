// QUADRUPLE OBJECTS: The White House

const realQualities = {
	color: "white	,
	age: "287",
	country: "america",
	: {},
};

const realWhiteHouse = {realObject, ...realQualities};

const sensualWhiteHouse = {{realWhiteHouse} ...sensualQualities};

const whiteHouse = {{realWhiteHouse}, sensualWhiteHouse};


//based on our understanding of 4-objects, it seems like the white house example would point to something like this
const {essence, eidos, space, time} = {realWhiteHouse, {{ ...realQualities}}, whiteHouse,  {...sensualQualities}};

const quadrupleObjectWhiteHouse = {

	essence: realWhiteHouse,

	eidos: {{ ...realQualities}},

	space: whiteHouse,

	time: {...sensualQualities},

}
