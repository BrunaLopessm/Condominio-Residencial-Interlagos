// Abre e fecha o menu no celular ao clicar no botão de três linhas
const botaoMenu = document.getElementById('botaoMenu');
const menuNavegacao = document.getElementById('menuNavegacao');
 
botaoMenu.addEventListener('click', function () {
  menuNavegacao.classList.toggle('menu-navegacao--aberto');
  botaoMenu.classList.toggle('menu-botao--ativo');
});
 
// Fecha o menu automaticamente ao clicar em um link (útil no celular)
document.querySelectorAll('.menu-navegacao a').forEach(function (link) {
  link.addEventListener('click', function () {
    menuNavegacao.classList.remove('menu-navegacao--aberto');
    botaoMenu.classList.remove('menu-botao--ativo');
  });
});
 