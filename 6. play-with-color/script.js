const tombol = document.getElementById('tombol');
// const body= document.getElementById('body');   atau   document.body

// tombol.onclick = function(){
// 	document.body.classList.toggle('biru-muda');
// }


tombol.addEventListener('click', function(){
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
});


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tombol.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah =  document.querySelector('input[name=sMerah]');
const sHijau =  document.querySelector('input[name=sHijau]');
const sBiru =  document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
	// console.log(sMerah.value);
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

sHijau.addEventListener('input', function(){
	// console.log(sMerah.value);
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

sBiru.addEventListener('input', function(){
	// console.log(sMerah.value);
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})


document.body.addEventListener('mousemove', function(e) {
	// posisi mouse
	// console.log(e.clientX);
	// console.log(e.clientY);

	// ukuran browser
	// console.log(window.innerWidth);

	const xPos = Math.round((e.clientX / window.innerWidth) * 255);
	const yPos = Math.round((e.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+ xPos +','+yPos+ ',100)';

})