const textArea = document.querySelector('.principal__conteudo__texto');
const mensagem = document.querySelector('.principal__resultado__texto');
const mensagemInicialTitulo = document.querySelector('.principal__resultado__subtitulo');
const mensagemInicialParagrafo = document.querySelector('.principal__resultado__paragrafo');


function btnCriptografar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    mensagem.style.setProperty('background-image', 'none');
    mensagemInicialTitulo.style.setProperty('display', 'none');
    mensagemInicialParagrafo.style.setProperty('display', 'none');
}

function criptografar(stringEncriptada){

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }

    return stringEncriptada;
}

function btnDescriptografar(){
    const textoDecriptado = descriptografar(textArea.value);
    mensagem.value = textoDecriptado;
    textArea.value = "";
    mensagemInicialTitulo.style.setProperty('display', 'none');
    mensagemInicialParagrafo.style.setProperty('display', 'none');
}

function descriptografar(stringDecriptada){

    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

    stringDecriptada = stringDecriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDecriptada.includes(matrizCodigo[i][1])){
            stringDecriptada = stringDecriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }

    return stringDecriptada;
}

function btnCopiar(){
    mensagemInicialParagrafo.innerHTML = 'Texto copiado para a área de transferência!';
    mensagemInicialParagrafo.style.removeProperty('display', 'none');
    navigator.clipboard.writeText(mensagem.value);
}