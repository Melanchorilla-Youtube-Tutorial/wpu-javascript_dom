function getPilihanComputer() {
    const comp = Math.random();

    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
    
}

function getHasil(computer, player) {
    if(player == computer) return 'SERI!';
    if(player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
    if(player == 'orang') return (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
    if(player == 'semut') return (computer == 'orang') ? 'KALAH!': 'MENANG!';
    return 'Memasukkan pilihan yang salah!';
}

function putar() {
    const gambarKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        gambarKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if(i == gambar.length) {
            i = 0;
        }
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
console.log(pilihan);

pilihan.forEach(function(pilih) {
    pilih.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pilih.className;

        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            const gambarKomputer = document.querySelector('.img-komputer');
            gambarKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerText = hasil;
        }, 1000);
    })
})


// const tombolGajah = document.querySelector('.gajah');
// tombolGajah.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = tombolGajah.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const gambarKomputer = document.querySelector('.img-komputer');
//     gambarKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerText = hasil;
// })

// const tombolOrang = document.querySelector('.orang');
// tombolOrang.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = tombolOrang.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const gambarKomputer = document.querySelector('.img-komputer');
//     gambarKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerText = hasil;
// })

// const tombolSemut = document.querySelector('.semut');
// tombolSemut.addEventListener('click', function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = tombolSemut.className;

//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const gambarKomputer = document.querySelector('.img-komputer');
//     gambarKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerText = hasil;
// })