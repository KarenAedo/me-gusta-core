let meGustaUno = document.querySelector("#btnLikeUno")
let numeroDeMeGustaUno = document.querySelector("#numeroLikeUno")
let meGustaDos = document.querySelector("#btnLikeDos")
let numeroDeMeGustaDos = document.querySelector("#numeroLikeDos")
let meGustaTres = document.querySelector("#btnLikeTres")
let numeroDeMeGustaTres = document.querySelector("#numeroLikeTres")

//incrementar likes botón 1
meGustaUno.addEventListener('click', function(evento){
    numeroDeMeGustaUno.innerText ++;
})

//incrementar likes botón 2
meGustaDos.addEventListener('click', function(evento){
    numeroDeMeGustaDos.innerText ++;
})

//incrementar likes botón 3
meGustaTres.addEventListener('click', function(evento){
    numeroDeMeGustaTres.innerText ++;
})