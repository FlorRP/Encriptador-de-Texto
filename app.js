const caracteresProhibidos = /[A-ZÁÄÀÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛáäàâéëèêíïìîóöòôúüùû]/;

function condicionesIniciales(){
    //Botón copiar
   document.getElementById('copiar').style.display = 'none';

   //Dibujo
   document.querySelector('.dibujo').style.display = 'inherit';

   //Párrafos del textarea derecho
   document.getElementById('parrafoArea1').style.display = 'inherit';
   document.getElementById('parrafoArea2').style.display = 'inherit';
}

function encriptaTexto(){
    let textoUsuario = document.getElementById('textoUsuario').value;
    //Verifico si tienen letras mayúsculas y con acento
    if (caracteresProhibidos.test(`${textoUsuario}`)){
        alert ('Por favor, ingresar texto en minúscula y sin acentos');
    } else{
        //Borra imágen
        document.querySelector('.dibujo').style.display = 'none';

        //Borra textos
        document.getElementById('parrafoArea1').style.display = 'none';
        document.getElementById('parrafoArea2').style.display = 'none';

        //Aparece botón copiar
        document.getElementById ('copiar').style.display = 'inline-flex';

        //Borra el contenido de la caja
        document.getElementById('textoUsuario').value = '';

        //Encripta
        const textoEncriptado= textoUsuario.replaceAll ("e", "enter")
        .replaceAll ("i", "imes")
        .replaceAll ("a", "ai")
        .replaceAll ("o", "ober")
        .replaceAll ("u", "ufat");
        return document.getElementById('respuesta').value = textoEncriptado;
    }
}

function copiaTexto(){
    const textoACopiar = document.getElementById('respuesta');
    textoACopiar.select();
    document.execCommand('copy');

    //Una vez que copia borra el contenido
    document.getElementById('respuesta').value = '';

    //Reaparece imágen
    //Reaparece textos
    //Desaparece el botón copiar
    condicionesIniciales();
}

function desencriptaTexto(){
    let textoUsuario = document.getElementById('textoUsuario').value;
    
    //Borra imágen
    document.querySelector('.dibujo').style.display = 'none';

    //Borra textos
    document.getElementById('parrafoArea1').style.display = 'none';
    document.getElementById('parrafoArea2').style.display = 'none';

    //Aparece botón copiar
    document.getElementById ('copiar').style.display = 'inline-flex';

    //Borra el contenido de la caja
    document.getElementById('textoUsuario').value = '';

    //Desencripta
    const textoDesencriptado= textoUsuario.replaceAll ("ufat", "u")
    .replaceAll ("ober", "o")
    .replaceAll ("ai", "a")
    .replaceAll ("imes", "i")
    .replaceAll ("enter", "e");
    return document.getElementById('respuesta').value = textoDesencriptado;
}
