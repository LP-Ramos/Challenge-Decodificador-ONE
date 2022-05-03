var campoTexto = document.getElementById("campo-texto");
var areaResultado = document.getElementById("area-resultado");

var btnCriptografar = document.getElementById("btn-criptografar");
var btnDescriptografar = document.getElementById("btn-descriptografar");

btnCriptografar.addEventListener("click", function() {
    executar('criptografar');
});

btnDescriptografar.addEventListener("click", function() {
    executar('descriptografar');
});