

const close = document.querySelectorAll('.close');
close.forEach(function(index){
	index.addEventListener('click', function(e){
		e.target.parentElement.style.display = 'none';
		e.preventDefault();
	})
})

