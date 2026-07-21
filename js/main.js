function expandirAba(aba){
    if(this.classList.contains("primeiraParte")){
        console.log("Aba 1")
    } else if (this.classList.contains("segundaParte")){
        console.log("Aba 2")
    } else if (this.classList.contains("terceiraParte")){
        console.log("Aba 3")
    }
}

let abaSelecionada = document.querySelectorAll(".expansivo");

abaSelecionada.forEach((elemento) => elemento.addEventListener("click", expandirAba))