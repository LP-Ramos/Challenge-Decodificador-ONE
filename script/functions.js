function executar(modo) {
    var texto = campoTexto.value;
    areaResultado.innerHTML = "";

    var pTituloResultado = document.createElement("p");
    pTituloResultado.classList.add("p-titulo-resultado");

    var imgResultado = document.createElement("img");
    imgResultado.classList.add("img-resultado");
    imgResultado.src = "img/icon.png";

    var textAreaResultado = document.createElement("textarea");
    textAreaResultado.classList.add("textarea-resultado");

    var btnCopiar = document.createElement("button");
    btnCopiar.classList.add("btn-copiar");
    btnCopiar.addEventListener("click", copiarTexto);

    if(modo == 'criptografar') {
        if(criptografar(texto)) {
            pTituloResultado.textContent = "Texto criptografado com sucesso!";
        
            if(document.body.classList.contains('dark-mode')) {
                imgResultado.src = "img/resultado2.png";
            } else {
                imgResultado.src = "img/resultado.png";
            }
    
            textAreaResultado.textContent = criptografar(texto);
    
            btnCopiar.textContent = "Copiar";
    
            areaResultado.appendChild(pTituloResultado);
            areaResultado.appendChild(imgResultado);
            areaResultado.appendChild(textAreaResultado);
            areaResultado.appendChild(btnCopiar);
        } else {
            pTituloResultado.textContent = "Digite um texto para ser criptografado!";
            areaResultado.appendChild(pTituloResultado);
            areaResultado.appendChild(imgResultado);
        }
    } else {
        if(descriptografar(texto)) {
            pTituloResultado.textContent = "Texto descriptografado com sucesso!";
        
            if(document.body.classList.contains('dark-mode')) {
                imgResultado.src = "img/resultado2.png";
            } else {
                imgResultado.src = "img/resultado.png";
            }
    
            textAreaResultado.textContent = descriptografar(texto);
    
            btnCopiar.textContent = "Copiar";
    
            areaResultado.appendChild(pTituloResultado);
            areaResultado.appendChild(imgResultado);
            areaResultado.appendChild(textAreaResultado);
            areaResultado.appendChild(btnCopiar);
        } else {
            pTituloResultado.textContent = "Digite um texto para ser descriptografado!";
            areaResultado.appendChild(pTituloResultado);
            areaResultado.appendChild(imgResultado);
        }
    }
}


function criptografar(texto) {
    var criptografar = texto.split("");
    var textoCriptografado = "";

    if(criptografar == "" || criptografar == " ") {
        return false;
    }

    criptografar.forEach(function(letra) {
        if(letra == "a") {
            textoCriptografado += "ai";
        } else if(letra == "e"){
            textoCriptografado += "enter";
        } else if(letra == "i"){
            textoCriptografado += "imes";
        } else if(letra == "o"){
            textoCriptografado += "ober";
        } else if(letra == "u"){
            textoCriptografado += "ufat";
        } else {
            textoCriptografado += letra;
        }
    });

    return textoCriptografado;
};

function descriptografar(texto) {
    var descriptografarA = new RegExp("ai", "gi");
    var descriptografarE = new RegExp("enter", "gi");
    var descriptografarI = new RegExp("imes", "gi");
    var descriptografarO = new RegExp("ober", "gi");
    var descriptografarU = new RegExp("ufat", "gi");

    var descriptografar = texto;
    var textoDescriptografado = [];

    if(descriptografar == "" || descriptografar == " ") {
        return false;
    }

    if(!descriptografar.includes("ai") && !descriptografar.includes("enter") && !descriptografar.includes("imes") && !descriptografar.includes("ober") && !descriptografar.includes("ufat")) {
        return false;
    }
    
    if(descriptografarA.exec(descriptografar)) {
        textoDescriptografado = descriptografar.replace(descriptografarA, "a");
        descriptografar = textoDescriptografado;
    }
    
    if(descriptografarE.exec(descriptografar)) {
        textoDescriptografado = descriptografar.replace(descriptografarE, "e");
        descriptografar = textoDescriptografado;
    }
    
    if(descriptografarI.exec(descriptografar)) {
        textoDescriptografado = descriptografar.replace(descriptografarI, "i");
        descriptografar = textoDescriptografado;
    }
    
    if(descriptografarO.exec(descriptografar)) {
        textoDescriptografado = descriptografar.replace(descriptografarO, "o");
        descriptografar = textoDescriptografado;
    }
    
    if(descriptografarU.exec(descriptografar)) {
        textoDescriptografado = descriptografar.replace(descriptografarU, "u");
        descriptografar = textoDescriptografado;
    }

    return textoDescriptografado;
};

function copiarTexto() {
    var texto = document.querySelector('.textarea-resultado');
    texto.select();
    document.execCommand('copy');
}