const celulas = document.querySelectorAll(".celula");
const mensagem = document.getElementById("mensagem");

let jogador = "X";
let jogoAcabou = false;

let jogo = ["", "", "", "", "", "", "", "", ""];

const vitorias = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

celulas.forEach(celula => {
  celula.addEventListener("click", clicar);
});

function clicar(e){

  const index = e.target.dataset.index;

  if(jogo[index] !== "" || jogoAcabou){
    return;
  }

  jogo[index] = jogador;

  e.target.innerHTML = jogador;
  e.target.style.color = jogador === "X" ? "red" : "blue";

  verificar();

  if(!jogoAcabou){
    jogador = jogador === "X" ? "O" : "X";
  }
}

function verificar(){

  for(let i = 0; i < vitorias.length; i++){

    let [a,b,c] = vitorias[i];

    if(
      jogo[a] &&
      jogo[a] === jogo[b] &&
      jogo[a] === jogo[c]
    ){
      if (jogador === "X") {
        mensagem.innerHTML = 'Jogador <span style="color:red">X</span> venceu!';
      } else {
        mensagem.innerHTML = 'Jogador <span style="color:blue">O</span> venceu!';
      }
      jogoAcabou = true;
      return;
    }
  }

  if(!jogo.includes("")){
    mensagem.innerHTML = "Empate!";
    jogoAcabou = true;
  }
}

function reiniciar(){

  jogo = ["", "", "", "", "", "", "", "", ""];

  jogoAcabou = false;

  jogador = "X";

  mensagem.innerHTML = "";

  celulas.forEach(celula => {
    celula.innerHTML = "";
    celula.classList.remove("x", "o");
  });
}

/* IMPORTANTE */
window.reiniciar = reiniciar;