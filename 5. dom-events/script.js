/* 
DOM Events
*/

// const p2 = document.querySelector('.p2');
// const p3 = document.querySelector('.p3');

// function ubahWarnaP2(){
// 	p2.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP3(){
// 	p3.style.backgroundColor = 'lightblue';
// }

// p2.onclick = ubahWarnaP2;
// p3.onclick = ubahWarnaP3;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const teksLiBaru = document.createTextNode('item baru');

// 	liBaru.appendChild(teksLiBaru);
// 	ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
// 	p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
// 	p3.style.color = 'red';
// }
p3.addEventListener('click', function() {
	p3.style.backgroundColor = 'lightblue';
	p3.style.color = 'red';

})

const p2 = document.querySelector('.p2');
p2.addEventListener('mouseenter', function() {
	p2.style.backgroundColor = 'lightblue';

})
p2.addEventListener('mouseleave', function() {
	p2.style.backgroundColor = 'white';

})