const valoresAdd = document.querySelector('label.valores');
const quartilUm = document.querySelector('.quartil1');
const quartilDois = document.querySelector('.quartil2');
const quartilTres = document.querySelector('.quartil3');
const minimoValor = document.querySelector('.min');
const maximoValor = document.querySelector('.max');
const divBarras = document.querySelector('.barras')
const Valores = {
  valores: [],
  get q1(){
    return quartil1(this.valores);
  },
  get q2(){
    return mediana(this.valores);
  },
  get q3(){
    return quartil3(this.valores);
  },
  get minimo(){
    return this.valores[0];
  },
  get maximo(){
    return this.valores[this.valores.length -1];
  },
  // get grafico(){
  //   return seiLa();
  // },
  adiciona: function (valor) {
    this.valores.push(parseInt(valor));
    this.valores.sort(function (a,b) {
      return a-b;
    });
    //desenha
    var alturadiv = this.maximo - this.minimo;

      valoresAdd.textContent = this.valores;
      quartilUm.textContent = this.q1;
      quartilDois.textContent = this.q2;
      quartilTres.textContent = this.q3;
      minimoValor.textContent = this.minimo;
      maximoValor.textContent = this.maximo;
  }
}

// function SeiLa() {
//   this.div = document.createElement('div');
//   this.div.classList.add('box');
//   divBarras.appendChild(this.div);
//   this.divquartis = document.createElement('div');
//   this.divquartis.classList.add('quartisgrafico');
//   this.div.appendChild(this.divquartis);
// }
//
//   function atualizaView(vetor) {
//     if(vetor.length>=4){
//       this.divquartis.textContent = "OIOIOI";
//     }
//   }
// }

function mediana(vetor) {
  var mediana;
  if(vetor.length%2===0){
    mediana = (vetor[(vetor.length/2)-1] + vetor[(vetor.length/2)])/2;
  } else{
    mediana = vetor[(vetor.length/2)-0.5];
  }
  return mediana;
}

function quartil1(vetor){
  var novovetor = [];
  if(vetor.length%2===0){
    for (var i = 0; i <= ((vetor.length/2)-1); i++) {
      novovetor.push((vetor[i]));
    }
  } else{
    for (var i = 0; i < ((vetor.length/2)-0.5); i++) {
      novovetor.push((vetor[i]));
    }
  }
  return mediana(novovetor);
}

function quartil3(vetor) {
  var novovetor = [];
  if(vetor.length%2===0){
    for (var i = ((vetor.length/2)); i < vetor.length; i++) {
      novovetor.push((vetor[i]));
    }
  } else{
    for (var i =  ((vetor.length/2)+0.5); i < vetor.length; i++) {
      novovetor.push((vetor[i]));
    }
  }
  return mediana(novovetor);
}

function desenhaquartis(escala) {

}

const adicionaValor = document.querySelector('.adicionaValor');
adicionaValor.addEventListener('click', function (evento) {
  Valores.adiciona(document.querySelector('.valorInput').value);
  evento.preventDefault();
});
