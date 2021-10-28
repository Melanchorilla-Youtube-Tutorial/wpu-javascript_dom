/* 
DOM Manipulation Node
document.createElement()
document.createTextNode()
node.appendChild()
node.insertBefore()
parentNode.removeChild()
parentNode.replaceChild()
*/

/* node.appendChild() */
const pBaru = document.createElement('p'); 						// buat element baru (masih di dalam memori)
const teksPBaru = document.createTextNode('Paragraf Baru'); 	// buat teks baru (masih di dalam memori)
pBaru.appendChild(teksPBaru); 									//simpan tulisan ke dalam paragraf(<p>)(masih di dalam memori)

const sectionA = document.getElementById('a'); 					// simpan pBaru di akhir section A
sectionA.appendChild(pBaru);

/* node.insertBefore() */
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

/* parentNode.removeChild() */
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

/* parentNode.replaceChild() */
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';


// Another Method
// parentNode.append()
// parentNode.prepend()
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()