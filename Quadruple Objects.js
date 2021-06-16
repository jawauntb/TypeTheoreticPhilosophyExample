/*   
  The following was motivated by my desire to understand the 4th aspect of 4-objects, Eidos.   
  We ended up extracting a lot more than that though!
*/


let realObject = {eidos: undefined};  // === {eidos}


//should say realQualities
const qualities = {
	color: "white	,
	age: "287",
	country: "america",
	
};

const realWhiteHouse = {realObject, ...qualities};

//one degree of indirection since objects real qualities are withdrawn from our perception
const {color, age, country} = realWhiteHouse;
//2nd degree of indirection, amountis arbitrary but just helps illustrate the point
let {perceivedColor, perceivedAge, perceivedCountry} = {color, age, country};
//final, 3rd degree of indirection should be enough to get point across
const {clr, ag, ctry} =  {perceivedColor, perceivedAge, perceivedCountry};


//sensual qualities are perceived/created by the interaction of a perceiver and a real or intentional object
//when a person perceives white houses age (287 which is false but this is an example), they perceive the sensual value mapped to the thing they "think they see"
const sensualQualities = { clr: 'brilliant eggshell white', ag: 'oldest living democracy', ctry:'greatest, most powerful country ever'};

const sensualWhiteHouse = {{realWhiteHouse} ...sensualQualities};


//this is the white house, as we know it and perceive it...the qualities of the white house and the actual white house itself which withdraws from our understanding 
const whiteHouse = {{realWhiteHouse}, sensualWhiteHouse};
const eidosOfWhiteHouse = {{ ...qualities}} //enumerable yet inaccesible

//just some model of a person that perceives:-relates to:-forms intentional objects via perception of real ones
const Person = {name: string, perceives: (realThing) => sensualThing};

function perceives = (realThing) => return sensualThing;

const john = new Person('john', perceives);

/*
const quadrupleObjectMatrix = 
[Real    Objects, Real    Qualities],
[Sensual Objects, Sensual Qualities]
*/

const essence = realWhiteHouse; // real object -- real qualities : fusion, causation
const eidos = {{ ...qualities}} === ((object): any => (object[] = object[]-realObject; object[sensualObject] = undefined; return object))(whiteHouse); // real qualities -- sensual object : fission, theory
const space = whiteHouse;  // real object -- sensual qualities && proximity--distance : fusion, allure
const time = {...sensualQualities} === sensualWhiteHouse[]? sensualWhiteHouse-realObject : ...sensualWhiteHouse; // sensual object -- sensual qualities : fission, confrontation

//explaining what each is using our example
const {essence, eidos, space, time} = {realWhiteHouse, {{ ...qualities}}, whiteHouse,  {...sensualQualities}};

//seems like eidos may refer to the real qualities that are immanent from real objects, but eidos in this sense implies that the real qualities are unknowable and inaccessible, though they are real.

const past = appearance === time;
const future = essence;


expect(john.perceives(realWhiteHouse)).toReturn(sensualWhiteHouse);
expect(realWhiteHouse === sensualWhiteHouse).toReturn(false);

