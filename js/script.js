//ATIVAR LINKS DO MENU

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  console.log(url);
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ATIVAR ITENS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
  console.log(elemento);
}
parametros.forEach(ativarProduto);

//PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  pergunta.setAttribute("aria-expanded", "true");
  resposta.classList.toggle("ativa");
  console.log(pergunta);
}
function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);
