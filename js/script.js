//Show menu on open button click
document.querySelector(".menu-mobile-open").onclick = function(){
    document.documentElement.classList.add("menu-ativo");
    console.log("Deu certo");
}

//Hide menu on close button click
document.querySelector(".menu-mobile-close").onclick = function(){
    document.documentElement.classList.remove("menu-ativo");
    console.log("Deu certo também");
}

//Hide menu on body click
document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove("menu-ativo");
    }
}
