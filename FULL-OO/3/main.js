console.log("Projetar e implementar um função construtora, instanciar objetos e experimentá-los");
function Camera() {
  this.albumFotos = 0;
  this.albumVideos = 0;
  this.albumExcluidos = 0;
  this.flash = false;
  this.cameraLenta = false;
}
Camera.prototype.novaFoto = function () {
  this.albumFotos++;
}
Camera.prototype.novoVideo = function () {
  this.albumVideos++;
}
Camera.prototype.sequenciaDeFotos = function (n) {
  if(n<=100){
    this.albumFotos += n;
  } else{
    if(n>100){
      throw "Você ultrapassou o limite de fotos, a operação foi cancelada.";
    }
  }
}
Camera.prototype.ligaDesligaFlash = function () {
  this.flash = ! this.flash;
  if(this.flash===true){
    return "Flash ativado";
  } else{
    return "Flash desativado"
  }
}
Camera.prototype.ligaDesligaCameraLenta = function () {
  this.cameraLenta = ! this.cameraLenta;
  if(this.cameraLenta===true){
    return "Câmera Lenta ativada";
  } else{
    return "Câmera Lenta desativada"
  }
}
Camera.prototype.excluirFotos = function (n) {
  if(n<=this.albumFotos){
    this.albumFotos -= n;
    this.albumExcluidos += n;
  } else{
    if(this.albumFotos===1){
      throw "Você tem apenas 1 foto para excluir.";
    } else{
      throw "Você tem apenas " + this.albumFotos + " fotos para excluir.";
    }
  }
}
Camera.prototype.excluirVideos = function (n) {
  if(n<=this.albumVideos){
    this.albumVideos -= n;
    this.albumExcluidos +=n;
  } else{
    if(this.albumVideos===1){
      throw "Você tem apenas 1 vídeo para excluir.";
    } else{
      throw "Você tem apenas " + this.albumVideos + " vídeos para excluir.";
    }
  }
}
Camera.prototype.restaurarFotos = function (n) {
  this.albumFotos += n;
  this.albumExcluidos -= n;
}
Camera.prototype.restaurarVideos = function (n) {
  this.albumVideos += n;
  this.albumExcluidos -=n;
}
Camera.prototype.Fotos = function() {
  return this.albumFotos;
}
Camera.prototype.Videos = function() {
  return this.albumVideos;
}
Camera.prototype.Excluidos = function () {
  return this.albumExcluidos;
}
const camera1 = new Camera();
camera1.novaFoto();
camera1.novaFoto();
console.log(camera1.Fotos()===2); //true
camera1.novoVideo();
camera1.novoVideo();
console.log(camera1.Videos()===2); //true

try {
  console.log(camera1.excluirFotos(3));
  console.log(false); // essa linha não deve ser alcançada
} catch (e) {
  console.log(e === "Você tem apenas 2 fotos para excluir."); //true
}

camera1.excluirFotos(1);
console.log((camera1.Fotos()===1)&&(camera1.Excluidos()===1)); //true;

camera1.sequenciaDeFotos(50);
console.log(camera1.Fotos()===51); //true;

try {
  console.log(camera1.sequenciaDeFotos(110));
  console.log(false); // essa linha não deve ser alcançada
} catch (e) {
  console.log(e === "Você ultrapassou o limite de fotos, a operação foi cancelada."); //true
}

camera1.excluirFotos(10);
console.log((camera1.Fotos()===41)&&(camera1.Excluidos()===11));
camera1.restaurarFotos(4);
console.log((camera1.Fotos()===45)&&(camera1.Excluidos()===7));

console.log(camera1.ligaDesligaFlash());
console.log(camera1.ligaDesligaFlash());
console.log(camera1.ligaDesligaCameraLenta());
console.log(camera1.ligaDesligaCameraLenta());

camera1.excluirVideos(2);
console.log((camera1.Videos()===0)&&(camera1.Excluidos()===9));
camera1.restaurarVideos(1);
console.log((camera1.Videos()===1)&&(camera1.Excluidos()===8));
