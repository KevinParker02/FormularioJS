//alert("HI");
//Obtener datos del formulario.
let nombre = document.getElementById("nombre");
let nombreERROR = document.getElementById("nombreERROR");

let RUT = document.getElementById("RUT");
let rutERROR = document.getElementById("rutERROR");

let Recado = document.getElementById("Recado");

let Email = document.getElementById("Email");
let correoERROR = document.getElementById("correoERROR");

let genError = document.getElementById("genERROR");

// Para el formulario (Agarra todo el contenido)
let form = document.getElementById("myForm");

// Prevenimos que se envíe el formulario con campos sin rellenar
form.addEventListener("submit", function(){
    event.preventDefault(); //Prevenir recarga automática del formulario.
    validarFormulario();
});

//Validamos los datos del formulario
function validarFormulario(){
    //Eliminamos los textos de error
    nombreERROR.textContent="";
    correoERROR.textContent="";

    //Validamos los inputs
    if(nombre.value === null|| nombre.value.trim()===""){
        nombreERROR.textContent="Por favor ingrese su nombre."
    };

    //Validar Rut
        // Utilizamos constantes para obtener el valor más reciente 
    const inputValue = RUT.value.trim();
    const allowedChars = /[0-9.\-K]/;
        //sanitizedValue (Variable) obtendrá el valor depurado, es decir, que una vez ingrese en el ciclo ELIMINARA cualquier caracter que no sea válido.
    let sanitizedValue = '';
    for (let i = 0; i < inputValue.length; i++) {
        if (allowedChars.test(inputValue[i])) {
            sanitizedValue += inputValue[i];
        }
    };
        //Finalmente actualizamos el registro obtenido en el imput y lo comparamos en los IF
    RUT.value = sanitizedValue;

    if (inputValue === "") {
        rutERROR.textContent = "Debe ingresar un RUT.";
    } else if (inputValue !== sanitizedValue) {
        rutERROR.textContent = "Solo se permiten números, puntos, guiones y la letra 'K'.";
    } else {
        rutERROR.textContent = "";
    };

    //Validar el género
    const CBgenero = document.querySelectorAll("label  input:checked");
        //Le pregunto cuántos elementos hay por consola (TESTEO).
    console.log(CBgenero.length);
    if(CBgenero.length != 1){
        genError.textContent="Debe selecionar un género."
    } else {
        genError.textContent="" 
    };

    //Validamos el Email
    const inputValue2 = Email.value.trim();
    const allowedChars2 = /[a-zA-Z@ . 0-9\ _ ]/;
        //sanitizedValu2 (Variable) obtendrá el valor depurado, es decir, que una vez ingrese en el ciclo ELIMINARA cualquier caracter que no sea válido.
    let sanitizedValu2 = '';
    for (let i = 0; i < inputValue2.length; i++) {
        if (allowedChars2.test(inputValue2[i])) {
            sanitizedValu2 += inputValue2[i];
        }
    };
        //Finalmente actualizamos el registro obtenido en el imput y lo comparamos en los IF
        Email.value = sanitizedValu2;

    if (inputValue2 === "") {
        correoERROR.textContent = "Debe ingresar un correo.";
    } else if (inputValue2 !== sanitizedValu2) {
        correoERROR.textContent = "Debe ingresar un correo válido.";
    } else {
        correoERROR.textContent = "";
    };

    if(nombreERROR.textContent==="" && rutERROR.textContent==="" && genError.textContent==="" && correoERROR.textContent===""){
        //Código para enviar un formulario.
        alert("El formulario se envió correctamente.");
        form.submit();
    };

};
