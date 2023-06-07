document.getElementById("meuBotao").addEventListener("click", function() {
    window.location.href = "Login.html";
  });
  


    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
          0:{
            items:1
          },
          600:{
            items:3
          },
          1000:{
            items:5
          }
        }
      });
    });
 





    const XLSX = require('xlsx');

// Caminho para o arquivo do Excel
const caminhoArquivo = 'teste.xlsx';

// Carregar o arquivo do Excel
const workbook = XLSX.readFile(caminhoArquivo);
