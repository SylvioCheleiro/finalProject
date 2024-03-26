
function jogar() {
  const palpite = document.getElementById("palpite");
  const dado = document.getElementById("dado");
  var mensagem = document.querySelector("#mensagem");

  let numeroSorteio = Math.floor(Math.random() * 6 + 1);

  dado.src = "dice_" + numeroSorteio + ".gif";


  if (numeroSorteio == palpite.value) {
    mensagem.innerHTML = `<p> Você acertou!</p> `;
  }

  else {
    mensagem.innerHTML = `<p>Você errou, tente novamente!</p>`;
  }
}
