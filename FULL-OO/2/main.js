console.log("Implementar um ATM, suas propriedades e operações");

function ATM () {
  this.comp1 = 0; //5
  this.comp2 = 0; //10
  this.comp3 = 0; //20
  this.comp4 = 0; //50
  this.comp5 = 0; //100
}
ATM.prototype.abastecer = function (qtd, valor) {
  if((valor===5)&&((this.comp1+qtd)<=100)){
    this.comp1 += qtd;
  } else {
    if(valor===10&&((this.comp2+qtd)<=100)){
      this.comp2 += qtd;
    } else{
       if(valor===20&&((this.comp3+qtd)<=100)){
         this.comp3 += qtd;
       } else{
         if(valor===50&&((this.comp4+qtd)<=100)){
           this.comp4 += qtd;
         } else{
           if(valor===100&&((this.comp5+qtd)<=100)){
             this.comp5 +=qtd;
           } else{
             return 0;
           }
         }
       }
    }
  }
}

ATM.prototype.consultarQuantidade = function (valor) {
  if(valor===5){
    return this.comp1;
  } else {
    if(valor===10){
      return this.comp2;
    } else{
       if(valor===20){
         return this.comp3;
       } else{
         if(valor===50){
           return this.comp4;
         } else{
           if(valor===100){
             return this.comp5;
           } else{
             return 0;
           }
         }
       }
    }
  }
}
ATM.prototype.consultarValor = function () {
  return this.comp1*5 + this.comp2*10 + this.comp3*20 + this.comp4*50 + this.comp5*100;
}
ATM.prototype.retirar = function (saque) {
    var n100 = 0;
    if(this.comp5>0){
      n100 = Math.floor(saque/100);
        if(n100<=this.comp5){
          saque = saque - n100*100;
        } else{
          if(this.comp5*100<saque){
            saque = saque - this.comp5*100;
            n100 = this.comp5;
          }
        }
    }
    var n50 = 0;
    if(this.comp4>0){
      n50 = Math.floor(saque/50);
        if(n50<=this.comp4){
          saque = saque - n50*50;
        } else{
          if(this.comp4*50<saque){
            saque = saque - this.comp4*50;
            n50 = this.comp4;
          }
        }
    }
    var n20 = 0;
    if(this.comp3>0){
      n20 = Math.floor(saque/20);
        if(n20<=this.comp3){
          saque = saque - n20*20;
        } else{
          if(this.comp3*20<saque){
            saque = saque - this.comp3*20;
            n20 = this.comp3;
          }
        }
    }
    var n10 = 0;
    if(this.comp2>0){
      n10 = Math.floor(saque/10);
        if(n10<=this.comp2){
          saque = saque - n10*10;
        } else{
          if(this.comp2*10<saque){
            saque = saque - this.comp2*10;
            n10 = this.comp2;
          }
        }
    }
    var n5 = 0;
    if(this.comp1>0){
      n5 = Math.floor(saque/5);
        if(n5<=this.comp1){
          saque = saque - n5*5;
        }
        else{
          if(this.comp1*5<saque){
            saque = saque - this.comp1*5;
            n5 = this.comp1;
          }
       }
    }
    if(saque===0){
      this.comp1 -= n5;
      this.comp2 -= n10;
      this.comp3 -= n20;
      this.comp4 -= n50;
      this.comp5 -= n100;
    }
}


const atm = new ATM();
// abastecendo com 20 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.consultarQuantidade(100)); // 33
// espera-se 33 cédulas
console.log(atm.consultarQuantidade(100) === 33);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.consultarQuantidade(5)); // 0
console.log(atm.consultarQuantidade(5) === 0);
console.log(atm.consultarQuantidade(50)); // 0
console.log(atm.consultarQuantidade(50) === 0);
// mesmo os que não existem
console.log(atm.consultarQuantidade(3)); // 0
console.log(atm.consultarQuantidade(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.consultarQuantidade(3) === 0);
// consultando o valor
console.log(atm.consultarValor()); // 33 * 100 = 3300 reais
console.log(atm.consultarValor() === 3300);
// retirada rejeitada, não há cédulas que combinem R$ 350,00 (por ex.: de R$ 10, R$ 20 ou R$ 50)
atm.retirar(350);
console.log(atm.consultarQuantidade(100) === 33);
console.log(atm.consultarValor() === 3300);

// até aqui 0.3 pontos <=========================================
// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.consultarQuantidade(100) === 0);
console.log(atm.consultarValor() === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarValor() === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 8);

console.log(atm.consultarValor());
console.log(atm.consultarValor() === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.consultarQuantidade(10) === 6);
console.log(atm.consultarQuantidade(50) === 7);
console.log(atm.consultarValor() === 410); // 6 * 10 + 7 * 50

// até aqui 0.7 ponto <=========================================

// incluir mais 10 casos de teste com retiradas
// quem combinam 4 e 5 cédulas diferentes, válidas e inválidas

atm.abastecer(1, 20);
atm.abastecer(1, 5);
atm.retirar(385); //caso 1
console.log(atm.consultarValor() === 50);
atm.abastecer(5, 100);
atm.abastecer(5, 50);
atm.abastecer(5, 20);
atm.abastecer(5, 5);
console.log(atm.consultarValor());
atm.retirar(950); //inválido | maior que valor total //caso2
console.log(atm.consultarValor()===925);
atm.retirar(295); //2 de 100 | 1 de 50 | 2 de 20 | 1 de 5 //caso3
atm.retirar(135); //1 de 100 | 1 de 20 | 1 de 10 | 1 de 5 //caso4
atm.retirar(495); //esvaziou o atm //caso 5
console.log(atm.consultarValor());
atm.abastecer(10, 10);
atm.abastecer(10, 20);
atm.abastecer(10, 50);
atm.abastecer(10, 100);
console.log(atm.consultarValor()); //1800
atm.retirar(254); //invalido | necessita de cédulas inexistentes nos compartimentos //caso 6
console.log(atm.consultarValor()===1800); //true
atm.retirar(1735); // invalido - nao possui notas de 5 //caso 7
atm.abastecer(2,5)
atm.retirar(1755); //10 de 100, 10 de 50, 10 de 20, 5 de 10, 1 de 5 //caso 8
atm.abastecer(4,100);
atm.abastecer(4,50);
atm.abastecer(5,10);
atm.abastecer(5,20);
atm.retirar(775); //4 de 100, 4 de 50, 5 de 20, 7 de 10, 1 de 5 //caso 9
atm.abastecer(1,100);
atm.abastecer(5,10);
atm.abastecer(2,50);
atm.abastecer(2,20);
console.log(atm.consultarValor()); //1800
atm.retirar(255); //1 de 100, 2 de 50, 2 de 20, 1 de 10 e 1 de 5 || NAO CONTEM NOTAS DE 5 NO COMPARTIMENTO, retirada invalida;
console.log(atm.consultarValor()===320); //1800

// // -------------------------------------------------------------
