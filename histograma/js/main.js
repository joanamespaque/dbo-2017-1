//ashuahsuhsa
const labelVal = document.querySelector('label.valores');
const labelMin = document.querySelector('label.min');
const labelMax = document.querySelector('label.max');
const labelAmplitude = document.querySelector('label.amplitude');
const labelDesvio = document.querySelector('label.desvio');
const nc = document.querySelector('.nc');
function Dados(){

  this.valores = [];
  this.classes = [];
  this.min = function(vetor) {
    return this.valores[0];
  }
  this.max = function() {
    return this.valores[this.valores.length -1];
  }
  this.addValor = function(valor) {
    this.valores.push(valor);
    this.valores.sort(function (a,b) {
      return a-b;
    });
    labelVal.textContent = this.valores;
    labelMin.textContent = this.min();
    labelMax.textContent = this.max();
    labelAmplitude.textContent = this.amplitude();
    labelDesvio.textContent = this.desvio();
    let escala = 0;
    for(let c of this.classes){
      c.zerar();
      for(let n of this.notas) c.conta(n);
      if (c.contagem > escala) escala = c.contagem;
    }
    for(let c of this.classes){
      c.desenha(escala);
    }
    nc.textContent = this.valores.length;
  }
  this.amplitude = function() {
      return this.max()-this.min();
  }
  this.media = function() {
    var soma = 0;
    for(i = 0; i < this.valores.length; i++){soma += Number(this.valores[i]);}
    return soma/this.valores.length;
  }
  this.desvio = function() {
    var vetor = [];
    for(var i = 0; i < this.valores.length; i++){
      vetor.push(this.valores[i]-this.media());
    }
    var soma = 0;
    for(var i = 0; i< vetor.length; i++){
      soma += Math.pow(vetor[i],2);
    }
    var desviopadrao = Math.sqrt(soma/(this.valores.length-1))
    return desviopadrao;
  }
  const divBarras = document.querySelector('div.barras');
  this.classe = function (nome, de, ate) {
    this.nome = nome;
    this.de = de;
    this.ate = ate;

    this.principal = document.createElement('div');
    this.principal.classList.add('barralado');
    divBarras.appendChild(this.principal);

    this.div = document.createElement('div');
    this.div.classList.add('barra');
    this.principal.appendChild(this.div);

    this.novadiv = document.createElement('div');
    this.novadiv.classList.add('nomeBarra');
    var label = document.createElement('label');
    label.textContent = this.nome;
    this.principal.appendChild(this.novadiv);
    this.novadiv.appendChild(label);
  }

  this.zerar = function () {
    this.contagem = 0;
  }
}

const D = new Dados();
const adicionaValor = document.querySelector('.adicionaValor');
adicionaValor.addEventListener('click', function (evento) {
  D.addValor(document.querySelector('input.valor').value);
  evento.preventDefault();
});
const adicionaBarra = document.querySelector('.adicionaBarra');
adicionaBarra.addEventListener('click', function (evento) {
  var nome = document.querySelector('input.deAte').value;
  var de = document.querySelector('input.valorDe').value;
  var ate = document.querySelector('input.deAte').value;
  D.classe(nome, de, ate);
  evento.preventDefault();
});
