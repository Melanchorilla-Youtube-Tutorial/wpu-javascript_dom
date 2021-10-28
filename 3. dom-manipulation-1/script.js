/* 
DOM Manipulation Element
*/

/* element.innerHTML */
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Dicky Kamaludin Bashar</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<p>Hello World!</p>'; 


/* element.style.<propertiCSS> */
// const judul = document.querySelector('#judul');

// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


/* element.setAttribute() , element.getAttribute(), element.removeAttribute() */
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'nama');

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// console.log(a.getAttribute('href'));
// a.removeAttribute('href');

// const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');


/* element.classList.add() */
// const p2 = document.querySelector('.p2');
// p2.classList.add('label');


/* element.classList.remove() */
// const p2 = document.querySelector('.p2');
// p2.classList.remove('label');


/* element.classList.toggle() */
// const p2 = document.querySelector('.p2');
// p2.classList.toggle('biru-muda');


/* element.classList.item() */
// const p2 = document.querySelector('.p2');
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');

// console.log(p2.classList.item(2));



/* element.classList.contains() */
// const p2 = document.querySelector('.p2');
// p2.classList.add('satu');
// p2.classList.add('dua');
// p2.classList.add('tiga');

// console.log(p2.classList.item('dua'));
// console.log(p2.classList.item('empat'));




/* element.classList.replace() */
const p2 = document.querySelector('.p2');
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

console.log(p2.classList.replace('tiga', 'empat'));