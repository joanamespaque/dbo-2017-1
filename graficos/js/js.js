//ashuahsuhsa
const labelVal = document.querySelector('label.valores');
const labelMin = document.querySelector('label.min');
const labelMax = document.querySelector('label.max');
const labelAmplitude = document.querySelector('label.amplitude');
const labelDesvio = document.querySelector('label.desvio');

function Dados(){

  this.valores = [];
  //this.classes = [];
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
    d = 0;
    for(i = 0; i < this.valores.length; i++){
      console.log(d);
      d += Math.pow((this.valores[i]-this.media()),2);
    }
    console.log(d);
    return Math.sqrt(d/(this.valores.length-2));
  }

}

const D = new Dados();

const adicionaValor = document.querySelector('.adicionaValor');
adicionaValor.addEventListener('click', function (evento) {
  console.log(this);
  D.addValor(document.querySelector('input.valor').value);
  evento.preventDefault();
})
