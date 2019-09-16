//Selecionando os itens no menu
function innitScrollSuave(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
function scrollToSection(event){
    event.preventDefault();
    //seleção dos elementos
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    //Animação do scroll suave
    // o window.scrollTo pega o eixo x e y e faz o deslocamento
    section.scrollIntoView({
        behavior: 'smooth',
        block:'start',   
    })
    //Outra maneira de fazer o scroll
    //window.scrollTo({
    //    top:topo,
    //    behavior : 'smooth'
    //})

}
//mapeando os elementos com o forEach e adicionando o evento de scroll ao clicar na seção desejada
linksInternos.forEach((link)=>{
    link.addEventListener('click',scrollToSection);
});
}
//invocação da função
innitScrollSuave();