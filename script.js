let slideIndex = 1;             //armazena qual slide está ativo (começa no 1)
showSlides(slideIndex);         //mostra o slide inicial

// função para avançar/voltar nos slides
function plusSlides(n) {        //Recebe um valor n (geralmente +1 para próximo ou -1 para anterior)
  showSlides(slideIndex = slideIndex + n);  //Atualiza slideIndex e chama showSlides para exibir o slide correto
}

// Função para selecionar um slide específico
function currentSlide(n) {
  showSlides(slideIndex = n);   //Define slideIndex para o número do slide escolhido (n)
}

// Função principal que exibe os slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {    //se passar do último, volta ao 1
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length; //se voltar antes do primeiro, vai pro último
  }
  // esconde todos os slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // remove "active" de todos os pontos de navegação
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //mostra o slide atual
  dots[slideIndex-1].className += " active";    //destaca o ponto correspondente
}