window.onload = function() {
    document.getElementById('inicio').style.display = 'block';
  };
  
  function openTab(evt, tabName) {
    var i, content, links;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    links = document.getElementsByTagName("a");
    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function calcularCusto() {
    const renexPrice = 35; // preço do Renex 95 por litro
    const oleoPrice = 249; // preço do óleo por litro
    const alcoolPrice = 15; // preço do álcool cereal por litro
    const frascoPrice = 160 / 100; // preço do frasco por unidade (por 100 frascos)
    const rotuloPrice = 46 / 100; // preço do rótulo por unidade (por 100 rótulos)
    const frascosPorLitro = 46; // quantidade de frascos de 100ml por litro
  
    const renex = parseInt(document.getElementById('renex').value);
    const oleo = parseInt(document.getElementById('oleo').value);
    const alcool = parseInt(document.getElementById('alcool').value);
  
    // Cálculo do custo total dos ingredientes por embalagem
    const totalRenex = (renex / 1000) * renexPrice; // preço total do Renex
    const totalOleo = (oleo / 1000) * oleoPrice; // preço total do óleo
    const totalAlcool = (alcool / 1000) * alcoolPrice; // preço total do álcool
  
    const custoTotalIngredientes = totalRenex + totalOleo + totalAlcool; // custo total dos ingredientes por embalagem
  
    // Cálculo do custo total do frasco e rótulo por embalagem
    const custoFrascoPorEmbalagem = frascoPrice; // custo do frasco por embalagem
    const custoRotuloPorEmbalagem = rotuloPrice; // custo do rótulo por embalagem
  
    // Cálculo do custo total por embalagem
    const custoTotalPorEmbalagem = custoTotalIngredientes / frascosPorLitro + custoFrascoPorEmbalagem + custoRotuloPorEmbalagem;
  
    const resultado = `
      <h3>Resultado:</h3>
      <p>Custo total por embalagem: R$${custoTotalPorEmbalagem.toFixed(2)}</p>
    `;
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  