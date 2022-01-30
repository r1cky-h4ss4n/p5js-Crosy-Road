let yCarros = [45, 102, 215, 155, 268, 325];
let velocidadeCarros = [2, 3, 2.5, 4, 3.5, 1.5];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarros = 50;
let alturaCarros = 30;

function mostraCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
  }
}

function movimentaCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDosCarros() {
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}
