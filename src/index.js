module.exports = function toReadable(number) {

}

function toReadable2(number) {

	const myArrayOne = {
		0:'zero',
		1:'one', 
		2:'two', 
		3:'three', 
		4:'four', 
		5:'five', 
		6:'six', 
		7:'seven', 
		8:'eight', 
		9:'nine', 
		10:'ten',
		11:'eleven',
		12:'twelve',
		13:'thirteen',
		14:'fourteen',
		15:'fifteen',
		16:'sixteen',
		17:'seventeen',
		18:'eighteen',
		19:'nineteen',
	};
	const myArrayTwo = {
		1:'zero',
		0:'zero',
		20:'twenty',
		30:'thirty', 
		40:'forty', 
		50:'fifty', 
		60:'sixty', 
		70:'seventy', 
		80:'eighty', 
		90:'ninety', 
	};

	const myArrayThree = {
		0:'zero',
		100:'one hundred',
		200:'two hundred', 
		300:'three hundred', 
		400:'four hundred', 
		500:'five hundred', 
		600:'six hundred', 
		700:'seven hundred', 
		800:'eight hundred', 
		900:'nine hundred', 
	};

	if(number < 20) {
		return myArrayOne[number];
	}

	if(number < 100) {
		const dvoiki = Array.from(String(number), Number);
		const odinki = Array.from(String(number), Number);
		const a = myArrayTwo[dvoiki[0] * 10];
		const b = myArrayOne[odinki[1]] === 'zero' ? "" : myArrayOne[odinki[1]];
		const result = a + ' ' + b;
		return result
	}

	if(number < 120) {
		const a = number - 100;
		const result = a === 0 ? "one hundred" : "one hundred" + ' ' + myArrayOne[a];
		return result
	}

	if(number >= 120) {
		const troiki = Array.from(String(number), Number);
		const dvoiki = Array.from(String(number), Number);
		const odinki = Array.from(String(number), Number);
		const z = myArrayThree[troiki[0] * 100];
		const a = myArrayTwo[dvoiki[1] * 10] === 'zero' ? "" : myArrayTwo[dvoiki[1] * 10];
		const b = myArrayOne[odinki[2]] === 'zero' ? "" : myArrayOne[odinki[2]];
		const result = (z + ' ' + a + ' ' + b).replace(/ +/g, ' ').trim();
		return result
	}
  
}

console.log(toReadable2(999));