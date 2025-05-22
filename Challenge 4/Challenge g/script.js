const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const customers = 1;
const currentLocation = 'RSA';
let currency = null;
let shipping = null;

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

const total = shoes + batteries + pens + shirts + toys

if (currentLocation === "RSA") { 
	shipping = 400;
	currency = 'R'; 
};
 if (currentLocation === "NAM") {
	shipping = 600; 
	currency = '$';
}
else {
	shipping = 800
	currency = '$'
};




if (total > 1000 ) {
	if (currentLocation === 'NAM' && customers < 2) {
			if (currentLocation === RSA)
		    shipping = 0 
		}
	}


if (shipping === 0 && customers !== 1) { 
	console.log(FREE_WARNING) 
}

currentLocation === 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, total + shipping)

