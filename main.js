
let numero=2;
function mudarPlanoDeFundo(numero){
    const fundo = $('header');
    // fundo.style['background-image']=`url(img/fundo${numero}.png`;
    fundo.css("background-image",`url(fundo${numero}.png`);
}


function atualizarFundo(){
    mudarPlanoDeFundo(numero);
    if(numero===3)numero=1;else numero++;
}

$("document").ready(function(){
    setInterval(atualizarFundo,3000);
});


const nav = $("nav"), navA = $("a"), navUl = $("#ul-drop");




window.addEventListener('scroll', function(){
    if (window.scrollY >= 600){
       nav.addClass("navChange");
       navA.addClass('aChange');
       navUl.addClass("ulDropChange");
    } else{
        nav.removeClass("navChange");
        navA.removeClass("aChange");
        navUl.removeClass("ulDropChange");
    }
});


function criaComentario(){
    let nomeComent = $("#nome-coment").val();
    const textComent = $(".coment").val();
    const local = $("<div>").addClass("coment-estrutura");
    const apagador = $("<a>").text("Apagar comentário").addClass("apagador-mobile");

    if(textComent != ""){
        if (nomeComent == ""){
            nomeComent = "Anônimo";
        }
        const tituloComent = $("<h4>").text(nomeComent);
        const comentContent = $("<p>").text(textComent);
        local.append(tituloComent);
        local.append(comentContent);
        local.append(apagador);
        const localFinal = $(".local-final");
        localFinal.prepend(local);
        window.location.href = "#local-comentario";
    } else {
        validaComentario(textComent, $(".coment"));
    } 
    // if (window.matchMedia("(max-width: 768px)").matches) {

    //   } else {
        
    //   }

    if (window.matchMedia("(min-width: 768px)").matches) {
        local.dblclick(removeComentario);
    }
        
     
        apagador.on("click", function(){
            local.remove();
        });
        
 
    
    


}



$("#add-coment").on("click", function(){
    criaComentario();
});


function removeComentario(){
    this.remove();
}







function validaComentario(texto, textarea){
    if (texto == ""){
        textarea.attr("placeholder", "Por favor insira seu comentário!").css("background-color", "#cf9f9f");
    }
}

$(".coment").on("input", function(){
    $(".coment").attr("placeholder", "Digite aqui seu comentário").css("background-color", "white");
});

const campoFiltro =  $(".filtra-comentario");


campoFiltro.on("input", function(){
    var comentarios = document.querySelectorAll(".coment-estrutura");

    if (this.value.length > 0){
        for (var i = 0; i < comentarios.length; i++){
            var comentario = comentarios[i];
            var hNome = comentario.querySelector("h4");
            var nome = hNome.textContent;
            var expressao = new RegExp(this.value, "i");
           
            if (!expressao.test(nome)){
               comentario.classList.add("invisivel");
            } else{
                comentario.classList.remove("invisivel");
            }
        }
    } else{
        for(var i = 0; i < comentarios.length; i++){
            var comentario = comentarios[i];
            comentario.classList.remove("invisivel"); 
        }

    }

});

$("#submit").on("click", function(){
    var requireds = document.querySelectorAll(".required");
    let cont = 0;
    for(let i = 0; i < requireds.length; i++){
        if(requireds[i].value == ""){
            requireds[i].style.borderColor = "red";
            requireds[i].style.borderWidth = "2px"
            cont++;
        }
    }

    if (cont > 0){
        event.preventDefault();
        $(".advise").text("Por favor preencha os campos obrigatórios!");
        window.location.href = "#contato";
    }

});