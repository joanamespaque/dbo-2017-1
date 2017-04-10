//Clicar uma vez para entrada inteira
//clicar outra vez para meia entrada
//clicar outra vez para deselecionar
console.log('alguma coisa');
var tabela = document.querySelector('.tabela');
var valor = document.querySelector('#valor');
var output = document.querySelector('#output');
var total = document.querySelector('#total');
var inteirat = document.querySelector('#inteirat');
var meiat = document.querySelector('#meiat');
var subtotali = document.querySelector('#subtotali');
var subtotalm = document.querySelector('#subtotalm');
var inteira, meia;
valor.addEventListener('keyup',function () {
  output = document.getElementById('output');
  inteira = Number((parseFloat(this.value)*1.0));
  meia = inteira/2;
  output.textContent = meia.toString();
  calculatotal();
});
function calculatotal() {
  var total = document.querySelector('#total');
  if(valor === undefined) valor = document.querySelector('#valor');
  subtotali.textContent = Number(inteirat.textContent) * Number(valor.value);
  subtotalm.textContent = Number(meiat.textContent) * (Number(valor.value)/2);
  var sub1 = parseFloat(subtotali.textContent);
  var sub2 = parseFloat(subtotalm.textContent);
  total.textContent = sub1+sub2;
}
// colore amarelo quando clica uma vez, colore rosa quando clica de novo
//amarela = inteira; rosa = meia;

function addFuncionalidadeBotoes(){
	var tds = document.querySelectorAll('td'),
	div = document.querySelector('#divTabela'),
	nomeTag,
	pVez = true,
	nomeClasse,
  nVezes = 0,
	assento;
	div.addEventListener("click", function (event) {
		nomeTag = event.target.tagName;
		nomeClasse = event.target.className;
		if(nomeTag === 'TD' && nomeClasse !== 'bord')
		{
			assento = event.target;
			if(assento.className === 'inteira') nVezes = 1;
			else nVezes = 0;
			if((assento.className === 'inteira')&&(nVezes === 1)){
			    assento.className = 'meia'; //colore meia
          if(!pVez){
            pVez = false;
          }

          var valor = document.querySelector('#valor');
          if(Number(meiat.textContent)>0){

            var entradameia = document.querySelector('#entradameia');
            entradameia.textContent = "Meias-Entradas"
            inteirat.textContent = Number(inteirat.textContent) - 1;
            meiat.textContent = Number(meiat.textContent) + 1;
          }else{
            inteirat.textContent = Number(inteirat.textContent) - 1;
            meiat.textContent = Number(meiat.textContent) + 1;
          }
          if(valor === undefined){
            valor = document.querySelector('#valor');
          }
             subtotali.textContent = Number(inteirat.textContent) * Number(valor.value);
             subtotalm.textContent = Number(meiat.textContent) * (Number(valor.value)/2);

          nVezes++;
			} else if (((assento.className === 'ass')&&(nVezes === 0))) {
        assento.className = 'inteira';//colore inteira
          if(!pVez)
            total.textContent = Number(total.textContent) - Number(meia);
            if(inteirat.textContent>0){
              var entradainteira = document.querySelector('#entradainteira');
              entradainteira.textContent = "Entradas Inteiras"
              inteirat.textContent = Number(inteirat.textContent) + 1;
              if(valor === undefined){
                valor = document.querySelector('#valor');
              }

            }else{
              inteirat.textContent = Number(inteirat.textContent) + 1;
              if(valor === undefined){
                valor = document.querySelector('#valor');
              }
            }
             subtotali.textContent = Number(inteirat.textContent) * Number(valor.value);
             subtotalm.textContent = Number(meiat.textContent) * (Number(valor.value)/2);
            nVezes++;
			} else{
				if(valor === undefined){
            valor = document.querySelector('#valor');
          }
        assento.className = 'ass';
        meiat.textContent = Number(meiat.textContent) - 1;
             subtotalm.textContent = Number(meiat.textContent) * (Number(valor.value)/2);
          nVezes = 0;
        }
		}
		calculatotal();
	});
}

var valor = document.querySelector('#valor');
if(valor.value === '') valor.value = '0';
valor.addEventListener('keyup', calculatotal);
var valor = document.getElementById('valor')[0];
var output = document.getElementById('output')[0];
addFuncionalidadeBotoes();
