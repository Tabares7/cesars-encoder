 //== Declaro variable abc con todo el alfabeto y los numeros
 var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var nums = "0123456789";
 var simbols = "!¡@#$%^&*()[]{}_-+=,./¿?;:";
 var error = "";
// == Obtener #form desde document ==

const form = document.querySelector("#form");
const outputField = document.querySelector("#output")
const inputField = document.querySelector("#text");

inputField.addEventListener("focus", ()=>{
  console.log("holaaaa")
  inputField.classList.add("a")
})


// == Funcion para almacenar el valor del input en una variable ==

const recibirForm = (event) => {
  event.preventDefault();
  let text = event.target.text.value;
  let encodeValue = event.target.index.value;
  //= Llamo a la funcion encode enviandole el string del usuario
  
  encode(text,encodeValue);
};


function comprobar(char){
    let kind = 0;
    if((abc.indexOf(char.toUpperCase()) >= 0)){
       
        kind = 1;
      
    }else 
      if((nums.indexOf(char)) >= 0){
       
        kind = 2;

      } else 
      if((simbols.indexOf(char))>=0){
        
        kind = 3;

      }else 
      error = `El caracter ${char} no es valido`;

      return kind;
}


// == Funcion encode ==

const encode = (text, encodeValue) => {
  //== Declaro una variable output
  var output = "";
 console.log( typeof(encodeValue))
  //== Recorro todo el string para codificar
  for (let i = 0; i < text.length; i++) {
    let temp = text[i];
    if (temp === " ") {
      //== Si en caracter es un espacio simplemente annado un espacio al output
      output += " ";
    } 
    else {
        let kind = comprobar(temp);
        //console.log(nums.indexOf(temp.toUpperCase()))
        let pos = 0;

        if(kind === 1){

            pos = abc.indexOf(temp.toUpperCase()) + Number(encodeValue);
            if(pos>abc.length) abc += abc;
            output+=abc[pos];

        }else if(kind === 2){

            pos = nums.indexOf(temp) + Number(encodeValue);
            if(pos>nums.length) nums += nums;
            output+=nums[pos];

        }else if(kind === 3){

            pos = simbols.indexOf(temp) + Number(encodeValue);
            if(pos>simbols.length) simbols += simbols;
            output+=simbols[pos];

        }
    }
  }
if(error !== ""){
    outputField.innerHTML=error;
    error="";
}else{
    animateText("output", output, 100)
}
  
};


function animateText(output, text, delay) {
  // Obtener el elemento de página donde se mostrará el texto animado
  let element = document.getElementById(output);

  // Inicializar el índice del carácter actual a 0
  let currentChar = 0;

  // Crear un intervalo que se ejecutará cada "delay" milisegundos
  let interval = setInterval(function() {
    // Añadir el siguiente carácter al elemento de página
    element.textContent += text[currentChar];

    // Incrementar el índice del carácter actual
    currentChar++;

    // Si hemos llegado al final del texto, detener el intervalo
    if (currentChar >= text.length) {
      clearInterval(interval);
    }
  }, delay);
}





form.addEventListener("submit", recibirForm);
