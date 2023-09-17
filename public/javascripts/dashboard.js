 // Obtém uma referência ao elemento canvas
 var ctx = document.getElementById('meuGrafico').getContext('2d');

 // Define os dados do gráfico (por exemplo, dados de exemplo)
 var data = {
   labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
   datasets: [{
     label: 'Vendas',
     data: [12, 19, 3, 5, 2, 1 ,10, 20, -1, 5, 100],
     backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo das barras
     borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
     borderWidth: 1 // Largura da borda das barras
   }]
 };

 // Cria o gráfico
 var meuGrafico = new Chart(ctx, {
   type: 'line', // Tipo de gráfico (linha)
   data: data, // Dados do gráfico
   options: {
     // Configurações adicionais (por exemplo, rótulos, escalas, etc.)
   }
 });