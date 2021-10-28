/* 
DOM Selection 2
*/

/* document.querySelector() -> element */
// const p4 = document.querySelector('section#b p');

// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');

// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');

// p.innerHTML = 'Ini diubah melalui javascript';

/*  document.querySelectorAll() -> nodelist */
// const p = document.querySelectorAll('p');

// for(let i = 0; i < p.length; i++){
// 	p[i].style.backgroundColor = 'lightblue';
// }
// p[2].style.backgroundColor = 'lightblue';

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';