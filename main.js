let numero=2;function mudarPlanoDeFundo(e){$("header").css("background-image",`url(fundo${e}.png`)}function atualizarFundo(){mudarPlanoDeFundo(numero),3===numero?numero=1:numero++}setInterval(atualizarFundo,3e3);const nav=$("nav"),navA=$("a"),navUl=$("#ul-drop");function criaComentario(){let e=$("#nome-coment").val();const o=$(".coment").val(),n=$("<div>").addClass("coment-estrutura"),a=$("<a>").text("Apagar comentário").addClass("apagador-mobile");if(""!=o){""==e&&(e="Anônimo");const t=$("<h4>").text(e),r=$("<p>").text(o);n.append(t),n.append(r),n.append(a),$(".local-final").prepend(n),window.location.href="#local-comentario"}else validaComentario(o,$(".coment"));window.matchMedia("(min-width: 768px)").matches&&n.dblclick(removeComentario),a.on("click",function(){n.remove()})}function removeComentario(){this.remove()}function validaComentario(e,o){""==e&&o.attr("placeholder","Por favor insira seu comentário!").css("background-color","#cf9f9f")}window.addEventListener("scroll",function(){window.scrollY>=600?(nav.addClass("navChange"),navA.addClass("aChange"),navUl.addClass("ulDropChange")):(nav.removeClass("navChange"),navA.removeClass("aChange"),navUl.removeClass("ulDropChange"))}),$("#add-coment").on("click",function(){criaComentario()}),$(".coment").on("input",function(){$(".coment").attr("placeholder","Digite aqui seu comentário").css("background-color","white")});const campoFiltro=$(".filtra-comentario");campoFiltro.on("input",function(){var e=document.querySelectorAll(".coment-estrutura");if(this.value.length>0)for(var o=0;o<e.length;o++){var n=(a=e[o]).querySelector("h4").textContent;new RegExp(this.value,"i").test(n)?a.classList.remove("invisivel"):a.classList.add("invisivel")}else for(o=0;o<e.length;o++){var a;(a=e[o]).classList.remove("invisivel")}}),$("#submit").on("click",function(){var e=document.querySelectorAll(".required");let o=0;for(let n=0;n<e.length;n++)""==e[n].value&&(e[n].style.borderColor="red",e[n].style.borderWidth="2px",o++);o>0&&(event.preventDefault(),$(".advise").text("Por favor preencha os campos obrigatórios!"),window.location.href="#contato")});