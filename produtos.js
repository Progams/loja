$(document).ready(function() {
    $(".product-images img").click(function() {
      // Remove a classe 'selected' de todas as imagens
      $(".product-images img").removeClass("selected");
      
      // Adiciona a classe 'selected' à imagem clicada
      $(this).addClass("selected");
      
      // Atualiza a imagem principal com a imagem clicada
      var imageSrc = $(this).attr("src");
      $(".product-main-image").attr("src", imageSrc);
    });
  });
  