// Your JS Script here

function readInput(){
    const text = document.getElementById('texto').value
    if(!text){
        alert("Escreva o texto no input")
    } else{
    document.getElementById('textoFromInput').innerText = text
    }
}