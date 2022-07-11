let text = document.getElementById("text");
var nuevoArray ="";

document.getElementById("generador").addEventListener("click", function(){
    text.value = "Lorem ipsum dolor sit amet. Cum adipisci mollitia sed enim corrupti quo deleniti nisi ex ducimus ipsum et numquam harum At voluptate sunt ut odit consequuntur! Et delectus laudantium et velit Quis ut delectus alias aut maxime ipsum sit eaque possimus. Est sapiente iste id Quis amet voluptatem nihil At optio porro.";
});

document.getElementById("lower-case").addEventListener("click", function(){
    text.value = text.value.toLowerCase();
});

document.getElementById("upper-case").addEventListener("click", function(){
    text.value = text.value.toUpperCase();
});

document.getElementById("proper-case").addEventListener("click",
    function () {
        let textMin = text.value.toLowerCase();
        let arrayPalabras = textMin.split(" ");
        textMin = "";
        for (let palabra of arrayPalabras) {
            palabra= palabra.charAt(0).toUpperCase()+palabra.slice(1);

        console.log(palabra);
        if (textMin!=""){
            textMin = textMin.concat(" "+palabra);
        }else{
     textMin = textMin.concat(palabra);}
      
        }text.value = textMin;
    });

    document.getElementById("sentence-case").addEventListener("click",
    function () {
        let textMin = text.value.toLowerCase();
        let arrayPalabras = textMin.split(". ");;
        textMin = "";
        for (let frase of arrayPalabras) {
            frase= frase.charAt(0).toUpperCase()+frase.slice(1);

        console.log(frase);
            if (textMin!=""){
                textMin = textMin.concat(". "+frase);
            }else{
         textMin = textMin.concat(frase);}
        }text.value = textMin;
    });

    

    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }
      
      document.getElementById("save-text-file").addEventListener("click", function() {
        let texto = document.getElementById("text").value;
        let filename = "texto.txt"
        download(filename ,texto);
    }, false);
