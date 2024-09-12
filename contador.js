const input =  document.querySelector(".numero")

function mais(){
    let valorAtual =  Number(input.innerText);

    valorAtual += 1;

    input.innerText = valorAtual
}

function menos(){
    let valorAtual =  Number(input.innerText);

    valorAtual -= 1;

    input.innerText = valorAtual
}