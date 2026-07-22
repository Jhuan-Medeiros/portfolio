function expandirAba(aba){
    if(this.classList.contains("primeiraParte")){
        const area = this.getBoundingClientRect();
        console.log(area)
        console.log(window.innerHeight)
        console.log(window.innerWidth)
        console.log(area.width - window.innerWidth)
        
    } else if (this.classList.contains("segundaParte")){
        console.log(this)
    } else if (this.classList.contains("terceiraParte")){
        console.log(this)
    }
}

let abaSelecionada = document.querySelectorAll(".expansivo");

abaSelecionada.forEach((elemento) => elemento.addEventListener("click", expandirAba))