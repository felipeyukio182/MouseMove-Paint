
const canvas = document.getElementById('canvas');

let ativo = false;
let iniciandoDesenho = true;
let x = 0;
let y = 0;
canvas.addEventListener('mousemove', (e) => {
  if (canvas.getContext && ativo) {
    let ctx = canvas.getContext('2d');

    // Setar a primeira posição
    if (iniciandoDesenho) {
      x = e.offsetX;
      y = e.offsetY;
      iniciandoDesenho = false;
    }

    // Desenhar a linha com o mouse
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // ctx.fill();
    ctx.closePath();
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener('mousedown', (e) => {
  ativo = true;
  iniciandoDesenho = true;
});
canvas.addEventListener('mouseup', (e) => {
  ativo = false;
});

let paletas = document.getElementsByClassName('paleta');
for (let paleta of paletas) {
  paleta.addEventListener('click', (e) => {
    let ctx = canvas.getContext('2d');
    let c = paleta.className;
    let cor = c.replace(/paleta\sc-(.*)/, '$1');
    console.log(cor);
    ctx.strokeStyle = cor;
  });
}
