function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  voltaPosicaoInicialDosCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
