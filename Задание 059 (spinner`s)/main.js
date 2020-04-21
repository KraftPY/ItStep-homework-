const str1 = '#',
	str2 = '_';
let load = 0;
const len = 10;

function loader() {
	console.clear();
	load = (load + 1) % (len + 1);
	console.log(`${str1.repeat(load)}${str2.repeat(len - load)}`);
}

// setInterval(loader, 100);

// ---------------------------------------------------------------------------------
const prop = ['|', '/', '-', '\\'];
function propeler() {
	console.clear();
	console.log(prop[load]);
	load = load > 2 ? 0 : ++load;
}

// setInterval(propeler, 700);

// ---------------------------------------------------------------------------------
const str11 = '-',
	str12 = '>>',
	str112 = '<<',
	str13 = '_';
let reverse = false;

function func3() {
	console.clear();
	reverse ? load-- : load++;
	if (reverse) {
		console.log(`[${str13.repeat(load)}${str112}${str11.repeat(len - load)}]`);
		load == 0 ? (reverse = false) : true;
	} else {
		console.log(`[${str11.repeat(load)}${str12}${str13.repeat(len - load)}]`);
		load == 10 ? (reverse = true) : false;
	}
}
// setInterval(func3, 500);
// ---------------------------------------------------------------------------------
const str21 = '.oO';

function func4() {
	console.clear();
	console.log(str21[load]);
	load = load > 1 ? 0 : ++load;
}
// setInterval(func4, 700);
// ---------------------------------------------------------------------------------
const str31 = ['\u2808', '\u2818', '\u2838', '\u28B8', '\u28F8', '\u28FC', '\u28FE', '\u28FF'];

function func5() {
	console.clear();
	console.log(str31[load]);
	load = load > str31.length - 2 ? 0 : ++load;
}
// setInterval(func5, 700);
// ---------------------------------------------------------------------------------
const str41 = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

function func6() {
	console.clear();
	console.log(str41[load]);
	load = load > str41.length - 2 ? 0 : ++load;
}
// setInterval(func6, 700);
// ---------------------------------------------------------------------------------
const str51 = '✄',
	str52 = '\u2014',
	str53 = '|';

function func7() {
	console.clear();
	load = (load + 1) % (len + 1);
	console.log(`[${str53.repeat(load)}${str51}${str52.repeat(len - load)}]`);
}
// setInterval(func7, 700);
// ---------------------------------------------------------------------------------
const str61 = ['◜', '◝', '◞', '◟'];

function func8() {
	console.clear();
	console.log(str61[load]);
	load = load > str61.length - 2 ? 0 : ++load;
}
// setInterval(func8, 700);
// ---------------------------------------------------------------------------------
const str71 = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ', '☠'];

function func9() {
	console.clear();
	console.log(str71[load]);
	load = load > str71.length - 2 ? 0 : ++load;
}
// setInterval(func9, 700);
// ---------------------------------------------------------------------------------
const str81 = '✄',
	str82 = '\u2014',
	str83 = '|',
	str84 = '\u002B';

function func10() {
	console.clear();
	reverse ? load-- : load++;
	if (reverse) {
		console.log(`[${str83.repeat(load)}${str84}${str82.repeat(len - load)}]`);
		load == 0 ? (reverse = false) : true;
	} else {
		console.log(`[${str83.repeat(load)}${str81}${str82.repeat(len - load)}]`);
		load == 10 ? (reverse = true) : false;
	}
}
setInterval(func10, 500);
