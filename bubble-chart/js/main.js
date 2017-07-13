const informaNome = document.querySelector('.informanome');
const informaTurma = document.querySelector('.informaturma');
const informaAprovacao = document.querySelector('.informaaprovacao');
const informaTotal = document.querySelector('.informatotal');
const divInformacoes = document.querySelector('.informacoes');
const y1 = document.querySelector('.y1');
const y2 = document.querySelector('.y2');
const y3 = document.querySelector('.y3');
const y4 = document.querySelector('.y4');
const y5 = document.querySelector('.y5');
const y6 = document.querySelector('.y6');
const y7 = document.querySelector('.y7');
const y8 = document.querySelector('.y8');
const y9 = document.querySelector('.y9');
const y10 = document.querySelector('.y10');
const x1 = document.querySelector('.x1');
const x2 = document.querySelector('.x2');
const x3 = document.querySelector('.x3');
const x4 = document.querySelector('.x4');
const x5 = document.querySelector('.x5');
const x6 = document.querySelector('.x6');
const x7 = document.querySelector('.x7');

const Conteudo = {
  turmas: [],
  aprovacoes: [],
  totais: [],
  cores: ["#1E90FF", "#FF00FF", "#F4A460", "#7FFF00", "#8470FF", "#FFD700", "#FF7256", "#CDBE70", "#008B8B", "#FF6EB4"],
  adiciona: function (nome, turma, aprovacao, total) {
    var escolhecor = Math.floor(Math.random()*((this.cores.length)-1));
    var novacor = this.cores[escolhecor];
    this.cores.splice(escolhecor,1);

    this.div = document.createElement('div');
    divInformacoes.appendChild(this.div);
    this.div.classList.add('oloko');
    this.corinfo = document.createElement('div');
    this.corinfo.classList.add('divcor');
    this.corinfo.style.backgroundColor = novacor;
    this.div.appendChild(this.corinfo);
    this.divdonome = document.createElement('div');
    this.divdonome.classList.add('nomedaescola');
    this.div.appendChild(this.divdonome);
    var labelnome = document.createElement('label');
    labelnome.textContent = nome;
    this.divdonome.appendChild(labelnome);

    this.turmas.push(Number(turma));
    this.aprovacoes.push(Number(aprovacao));
    this.totais.push(Number(total));
    this.turmas.sort(function (a,b) {
      return a-b;
    });
    this.totais.sort(function (a,b) {
      return a-b;
    });
    this.aprovacoes.sort(function (a,b) {
      return a-b;
    });

    var maximoy = (this.aprovacoes[this.aprovacoes.length-1]);
    var maximox = (this.turmas[this.turmas.length-1]);
    y1.textContent = maximoy;
    y2.textContent = (maximoy*90)/100;
    y3.textContent = (maximoy*80)/100;
    y4.textContent = (maximoy*70)/100;
    y5.textContent = (maximoy*60)/100;
    y6.textContent = (maximoy*50)/100;
    y7.textContent = (maximoy*40)/100;
    y8.textContent = (maximoy*30)/100;
    y9.textContent = (maximoy*20)/100;
    y10.textContent = (maximoy*10)/100;
    x7.textContent = maximox;
    x6.textContent = (maximox*90)/100;
    x5.textContent = (maximox*75)/100;
    x4.textContent = (maximox*60)/100;
    x3.textContent = (maximox*45)/100;
    x2.textContent = (maximox*30)/100;
    x1.textContent = (maximox*15)/100;
  }
}

const adicionaValor = document.querySelector('.adicionaValor');
adicionaValor.addEventListener('click', function (evento) {
  console.log("click");
  if((informaNome.value!="")&&(informaTurma.value!="")&&(informaAprovacao.value!="")&&(informaTotal.value!="")){
    Conteudo.adiciona(informaNome.value, informaTurma.value, informaAprovacao.value, informaTotal.value);
    evento.preventDefault();
  } else{
    alert("Preencha todos os campos");
  }
});
